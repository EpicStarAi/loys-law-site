import { usePosts } from "@/hooks/use-legal-data";
import { Link } from "wouter";
import { format } from "date-fns";
import { uk, enUS } from "date-fns/locale";
import { ArrowRight, Bot, Facebook } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { motion } from "framer-motion";
import { FacebookFeed } from "@/components/FacebookFeed";

export default function Blog() {
  const { data: posts, isLoading } = usePosts();
  const { locale, t } = useI18n();

  const dateLocale = locale === "uk" ? uk : enUS;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-primary text-white pt-24 pb-32">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">{t.blog.title}</h1>
            <p className="text-xl text-white/70 leading-relaxed">
              {t.blog.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container-wide py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {isLoading ? (
              <div className="grid gap-8">
                <div className="h-40 bg-muted animate-pulse" />
                <div className="h-40 bg-muted animate-pulse" />
                <div className="h-40 bg-muted animate-pulse" />
              </div>
            ) : posts && posts.length > 0 ? (
              <div className="grid grid-cols-1 gap-12">
                {posts.map((post, i) => (
                  <motion.article 
                    key={post.id} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    viewport={{ once: true }}
                    className="group flex flex-col md:flex-row gap-8 items-start border-b border-border pb-12"
                    data-testid={`card-post-${post.id}`}
                  >
                    <div className="w-full md:w-1/3 aspect-video bg-muted overflow-hidden">
                      {post.imageUrl ? (
                        <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      ) : (
                        <div className="w-full h-full bg-primary/5 flex items-center justify-center">
                          <ScaleIcon className="w-12 h-12 text-primary/20" />
                        </div>
                      )}
                    </div>
                    
                    <div className="flex-1 space-y-4">
                      <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground">
                        <span>{post.publishedAt ? format(new Date(post.publishedAt), "d MMMM yyyy", { locale: dateLocale }) : (locale === "uk" ? "Чернетка" : "Draft")}</span>
                        {post.isAiGenerated && (
                          <span className="flex items-center gap-1 bg-muted px-2 py-1 text-foreground">
                            <Bot className="w-3 h-3" /> {locale === "uk" ? "AI аналіз" : "AI analysis"}
                          </span>
                        )}
                      </div>
                      
                      <h2 className="text-2xl font-serif font-bold text-foreground group-hover:text-foreground/80 transition-colors">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h2>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {post.summary}
                      </p>
                      
                      <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-sm font-medium text-foreground mt-2 group-hover:underline underline-offset-4">
                        {t.blog.readMore} <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <ScaleIcon className="w-16 h-16 text-muted-foreground/30 mx-auto mb-6" />
                <p className="text-muted-foreground text-lg">{t.blog.noArticles}</p>
              </div>
            )}
          </div>

          {/* Sidebar with Facebook Feed */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Facebook Section */}
              <div className="bg-background border border-border p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-6">
                  <Facebook className="w-6 h-6 text-[#1877f2]" />
                  <h3 className="text-xl font-serif font-bold">
                    {locale === "uk" ? "Новини у Facebook" : "Facebook News"}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  {locale === "uk" 
                    ? "Слідкуйте за нашими останніми новинами та оновленнями у Facebook"
                    : "Follow our latest news and updates on Facebook"
                  }
                </p>
                
                {/* Facebook Feed Component */}
                <div className="bg-muted/30 p-4 rounded text-center">
                  <Facebook className="w-12 h-12 text-[#1877f2] mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground mb-4">
                    {locale === "uk" 
                      ? "Тут відображатимуться пости з Facebook після підключення" 
                      : "Facebook posts will appear here after setup"
                    }
                  </p>
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 text-sm text-[#1877f2] hover:underline"
                  >
                    <Facebook className="w-4 h-4" />
                    {locale === "uk" ? "Відвідати Facebook" : "Visit Facebook"}
                  </a>
                </div>
              </div>

              {/* Categories */}
              <div className="bg-background border border-border p-6 rounded-lg">
                <h3 className="text-xl font-serif font-bold mb-4">{t.blog.categories}</h3>
                <div className="space-y-2">
                  <div className="p-3 rounded-md bg-muted/30 text-sm font-medium">{t.blog.news}</div>
                  <div className="p-3 rounded-md bg-muted/30 text-sm font-medium">{t.blog.cases}</div>
                  <div className="p-3 rounded-md bg-muted/30 text-sm font-medium">{t.blog.analytics}</div>
                  <div className="p-3 rounded-md bg-muted/30 text-sm font-medium">{t.blog.legislation}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
