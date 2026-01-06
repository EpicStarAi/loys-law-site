import { usePosts } from "@/hooks/use-legal-data";
import { Link } from "wouter";
import { format } from "date-fns";
import { ArrowRight, Bot } from "lucide-react";

export default function Blog() {
  const { data: posts, isLoading } = usePosts();

  return (
    <div className="min-h-screen">
      <div className="bg-white border-b border-border py-20">
        <div className="container-wide">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Legal Insights</h1>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Analysis of legislation, court practice, and news from our AI-powered analytical department.
          </p>
        </div>
      </div>

      <div className="container-wide py-16">
        {isLoading ? (
          <div className="grid gap-8">
             <div className="h-40 bg-muted animate-pulse" />
             <div className="h-40 bg-muted animate-pulse" />
             <div className="h-40 bg-muted animate-pulse" />
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-12">
            {posts?.map((post) => (
              <article key={post.id} className="group flex flex-col md:flex-row gap-8 items-start border-b border-border pb-12">
                <div className="w-full md:w-1/3 aspect-video bg-muted overflow-hidden">
                   {/* Placeholder for AI generated image or stock */}
                   {post.imageUrl ? (
                     <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                   ) : (
                     <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400">
                        <ScaleIcon className="w-12 h-12" />
                     </div>
                   )}
                </div>
                
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground">
                    <span>{post.publishedAt ? format(new Date(post.publishedAt), "MMMM d, yyyy") : "Draft"}</span>
                    {post.isAiGenerated && (
                      <span className="flex items-center gap-1 bg-primary/5 px-2 py-1 rounded-sm text-primary">
                        <Bot className="w-3 h-3" /> AI Analysis
                      </span>
                    )}
                  </div>
                  
                  <h2 className="text-2xl font-serif font-bold group-hover:text-primary/80 transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {post.summary}
                  </p>
                  
                  <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-sm font-medium text-primary mt-2 group-hover:underline underline-offset-4">
                    Read Article <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function ScaleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="M7 21h10" />
      <path d="M12 3v18" />
      <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
    </svg>
  );
}
