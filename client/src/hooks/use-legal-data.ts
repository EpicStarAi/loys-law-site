import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api, buildUrl } from "@shared/routes";
import type { InsertInquiry } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";

// === Services ===
export function useServices() {
  return useQuery({
    queryKey: [api.services.list.path],
    queryFn: async () => {
      const res = await fetch(api.services.list.path);
      if (!res.ok) throw new Error("Failed to fetch services");
      return api.services.list.responses[200].parse(await res.json());
    },
  });
}

// === Team ===
export function useTeam() {
  return useQuery({
    queryKey: [api.team.list.path],
    queryFn: async () => {
      const res = await fetch(api.team.list.path);
      if (!res.ok) throw new Error("Failed to fetch team members");
      return api.team.list.responses[200].parse(await res.json());
    },
  });
}

// === Blog Posts ===
export function usePosts() {
  return useQuery({
    queryKey: [api.posts.list.path],
    queryFn: async () => {
      const res = await fetch(api.posts.list.path);
      if (!res.ok) throw new Error("Failed to fetch posts");
      return api.posts.list.responses[200].parse(await res.json());
    },
  });
}

export function usePost(slug: string) {
  return useQuery({
    queryKey: [api.posts.get.path, slug],
    queryFn: async () => {
      const url = buildUrl(api.posts.get.path, { slug });
      const res = await fetch(url);
      if (!res.ok) {
        if (res.status === 404) return null;
        throw new Error("Failed to fetch post");
      }
      return api.posts.get.responses[200].parse(await res.json());
    },
  });
}

// === Inquiries (Contact Form) ===
export function useCreateInquiry() {
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async (data: InsertInquiry) => {
      const res = await fetch(api.inquiries.create.path, {
        method: api.inquiries.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Failed to submit inquiry");
      }
      
      return api.inquiries.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Inquiry Received",
        description: "We will review your case and contact you shortly.",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Submission Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
