import { usePost } from "@/hooks/use-legal-data";
import { useRoute } from "wouter";
import { format } from "date-fns";
import { uk } from "date-fns/locale";
import { Bot, ChevronLeft, Calendar } from "lucide-react";
import { Link } from "wouter";
import { Skeleton } from "@/components/ui/skeleton";

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug || "";
  const { data: post, isLoading, error } = usePost(slug);

  if (isLoading) return <BlogLoader />;
  if (error || !post) return <div className="p-20 text-center">Статтю не знайдено</div>;

  return (
    <article className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-primary text-white py-24">
         <div className="container-wide max-w-4xl">
            <Link href="/blog" className="inline-flex items-center text-sm text-white/60 hover:text-white mb-8 transition-colors">
              <ChevronLeft className="w-4 h-4 mr-1" /> Назад до блогу
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-6">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-6 text-sm text-white/60">
               <span className="flex items-center gap-2">
                 <Calendar className="w-4 h-4" />
                 {post.publishedAt ? format(new Date(post.publishedAt), "d MMMM yyyy", { locale: uk }) : "Чернетка"}
               </span>
               {post.isAiGenerated && (
                 <span className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                   <Bot className="w-4 h-4" /> Згенеровано AI
                 </span>
               )}
            </div>
         </div>
      </div>

      {/* Content */}
      <div className="container-wide max-w-3xl py-16">
         <div 
           className="prose prose-slate prose-lg max-w-none font-serif leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-3"
           dangerouslySetInnerHTML={{ __html: post.content }}
         />
      </div>
    </article>
  );
}

function BlogLoader() {
  return (
    <div className="min-h-screen">
      <div className="bg-primary h-[400px] w-full animate-pulse" />
      <div className="container-wide max-w-3xl py-16 space-y-4">
        <Skeleton className="h-8 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>
    </div>
  );
}
