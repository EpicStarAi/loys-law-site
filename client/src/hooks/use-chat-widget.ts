import { useState, useRef, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@shared/routes"; // We need the integration routes, but they might not be in shared/routes.ts if generated dynamically. 
// Assuming standard paths based on the integration instructions:
// GET /api/conversations
// POST /api/conversations
// POST /api/conversations/:id/messages

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface Conversation {
  id: number;
  title: string;
}

export function useChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeConversationId, setActiveConversationId] = useState<number | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isStreaming, setIsStreaming] = useState(false);
  
  const queryClient = useQueryClient();

  // Create conversation on first open if none exists
  const createConversationMutation = useMutation({
    mutationFn: async () => {
      const res = await fetch("/api/conversations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: "Legal Consultation" }),
      });
      if (!res.ok) throw new Error("Failed to start chat");
      return await res.json();
    },
    onSuccess: (data: Conversation) => {
      setActiveConversationId(data.id);
      // Add initial greeting
      setMessages([{ role: "assistant", content: "Hello. Briefly describe your legal situation, and I will connect you with the right specialist." }]);
    },
  });

  const toggleChat = () => {
    if (!isOpen && !activeConversationId) {
      createConversationMutation.mutate();
    }
    setIsOpen(!isOpen);
  };

  const sendMessage = async (content: string) => {
    if (!activeConversationId) return;

    // Optimistic update
    const userMsg: Message = { role: "user", content };
    setMessages((prev) => [...prev, userMsg]);
    setIsStreaming(true);

    try {
      const response = await fetch(`/api/conversations/${activeConversationId}/messages`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content }),
      });

      if (!response.ok) throw new Error("Failed to send message");
      if (!response.body) throw new Error("No response body");

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let assistantMsg: Message = { role: "assistant", content: "" };

      // Add placeholder for assistant message
      setMessages((prev) => [...prev, assistantMsg]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split("\n\n");

        for (const line of lines) {
          if (line.startsWith("data: ")) {
            const dataStr = line.slice(6);
            if (!dataStr) continue;

            try {
              const data = JSON.parse(dataStr);
              if (data.done) {
                setIsStreaming(false);
                break;
              }
              if (data.content) {
                assistantMsg.content += data.content;
                setMessages((prev) => {
                  const newMessages = [...prev];
                  newMessages[newMessages.length - 1] = { ...assistantMsg };
                  return newMessages;
                });
              }
            } catch (e) {
              console.error("Error parsing SSE data", e);
            }
          }
        }
      }
    } catch (err) {
      console.error(err);
      setMessages((prev) => [...prev, { role: "assistant", content: "I apologize, I am experiencing connection issues. Please try again or call our office directly." }]);
      setIsStreaming(false);
    }
  };

  return {
    isOpen,
    toggleChat,
    messages,
    sendMessage,
    isStreaming,
    isLoading: createConversationMutation.isPending,
  };
}
