import { usePosts } from "@/hooks/use-legal-data";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Scale, ShieldCheck, Award, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useI18n } from "@/i18n/I18nProvider";
import { format } from "date-fns";
import { uk, enUS } from "date-fns/locale";
import { 
  ShieldAlert, 
  Medal, 
  Users, 
  FileText, 
  Briefcase,
  Globe,
  Building,
  Landmark
} from "lucide-react";
import teamGroupPhoto from "@assets/IMG_20260109_194158_1767980667469.png";
import { teamMembers } from "@/data/teamMembers";

export default function Home() {
  const { data: posts } = usePosts();
  const { locale, t } = useI18n();

  const dateLocale = locale === "uk" ? uk : enUS;
  const latestPosts = posts?.slice(0, 4) || [];

  const services = [
    { id: "criminal", icon: ShieldAlert, title: t.services.criminal, desc: t.services.criminalDesc },
    { id: "military", icon: Medal, title: t.services.military, desc: t.services.militaryDesc },
    { id: "family", icon: Users, title: t.services.family, desc: t.services.familyDesc },
    { id: "civil", icon: Scale, title: t.services.civil, desc: t.services.civilDesc },
    { id: "echr", icon: Globe, title: t.services.echr, desc: t.services.echrDesc },
    { id: "corporate", icon: Briefcase, title: t.services.corporate, desc: t.services.corporateDesc },
  ];

  const stats = [
    { value: "500+", label: t.home.statsWon },
    { value: "15+", label: t.home.statsExperience },
    { value: "4.9", label: t.home.statsRating },
  ];

  return (
    <div className="w-full">
      {/* HERO SECTION - Full screen with image */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2000')"
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
        
        <div className="container-wide relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 text-white"
          >
            <div className="inline-block px-4 py-2 border border-white/20 text-xs uppercase tracking-[0.2em] text-white/80">
              {locale === "uk" ? "Київ • Бровари" : "Kyiv • Brovary"}
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight">
              {locale === "uk" ? (
                <>Захист, коли на кону <span className="text-white/60 italic">свобода</span>.</>
              ) : (
                <>Defense when <span className="text-white/60 italic">freedom</span> is at stake.</>
              )}
            </h1>
            
            <p className="text-xl text-white/70 max-w-lg leading-relaxed">
              {t.home.trustedBy}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 px-8">
                  {t.home.consultation} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent border-white/30 text-white hover:bg-white hover:text-primary px-8">
                  {t.home.viewAllServices}
                </Button>
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden lg:block"
          >
            {/* Stats overlay */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 space-y-6">
              {stats.map((stat, i) => (
                <div key={i} className="flex items-center gap-4 text-white">
                  <span className="text-4xl font-serif font-bold">{stat.value}</span>
                  <span className="text-sm uppercase tracking-wider text-white/70">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-24 bg-background">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 block">
                {locale === "uk" ? "Напрямки практики" : "Practice Areas"}
              </span>
              <h2 className="text-4xl font-serif font-bold text-foreground">{t.services.title}</h2>
            </div>
            <Link href="/services">
              <Button variant="link" className="text-primary h-auto p-0 group">
                {t.home.viewAllServices} <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="group relative aspect-[4/3] overflow-hidden"
              >
                <div className="absolute inset-0 bg-primary/90 group-hover:bg-primary/95 transition-colors" />
                <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
                  <service.icon className="w-10 h-10 text-white/60" />
                  <div>
                    <h3 className="text-xl font-serif font-bold mb-2">{service.title}</h3>
                    <p className="text-sm text-white/60 line-clamp-2">{service.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-24 bg-muted/30">
        <div className="container-wide grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 block">
              {locale === "uk" ? "Про об'єднання" : "About Us"}
            </span>
            <h2 className="text-4xl font-serif font-bold mb-6 text-foreground">
              {locale === "uk" 
                ? "Команда професіоналів високого рівня" 
                : "A Team of High-Level Professionals"
              }
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {locale === "uk"
                ? "Адвокатське об'єднання «Яремчук і Седун» — це команда досвідчених фахівців зі спеціалізацією у різних галузях права, що дозволяє вирішувати будь-які завдання клієнта. Нам довіряють захист своїх інтересів приватні особи та компанії."
                : "Law Firm 'Yaremchuk & Sedun' is a team of experienced specialists with expertise in various areas of law, allowing us to solve any client's tasks. Private individuals and companies trust us to protect their interests."
              }
            </p>
            <Link href="/about">
              <Button size="lg">
                {t.home.learnMore} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="relative">
            <div className="bg-primary/10 overflow-hidden">
              <img
                src={teamGroupPhoto}
                alt={locale === "uk" ? "Команда адвокатів LOYS" : "LOYS Legal Team"}
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-24 bg-background">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 block">
                {locale === "uk" ? "Наша команда" : "Our Team"}
              </span>
              <h2 className="text-4xl font-serif font-bold text-foreground">
                {locale === "uk" ? "Досвідчені адвокати" : "Experienced Lawyers"}
              </h2>
            </div>
            <Link href="/team">
              <Button variant="link" className="text-primary h-auto p-0 group">
                {locale === "uk" ? "Вся команда" : "Full Team"} <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member, i) => (
              <Link key={member.id} href={`/team/${member.slug}`}>
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group flex gap-6 p-6 border border-border hover:border-primary/30 transition-colors bg-card"
                  data-testid={`card-home-team-${member.id}`}
                >
                  <div className="w-32 h-40 shrink-0 overflow-hidden">
                    <img 
                      src={member.photo} 
                      alt={member.name[locale]}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <div className="flex flex-col justify-center space-y-3">
                    <div>
                      <h3 className="text-xl font-serif font-bold text-foreground group-hover:text-primary transition-colors">
                        {member.name[locale]}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {member.role[locale]}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {member.specialization[locale].slice(0, 2).map((spec, j) => (
                        <span 
                          key={j}
                          className="text-xs px-2 py-1 bg-primary/5 text-primary/80"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {member.bio[locale]}
                    </p>
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NEWS SECTION */}
      {latestPosts.length > 0 && (
        <section className="py-24 bg-background">
          <div className="container-wide">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 block">
                  {locale === "uk" ? "Прес-центр" : "Press Center"}
                </span>
                <h2 className="text-4xl font-serif font-bold text-foreground">{t.home.latestArticles}</h2>
              </div>
              <Link href="/blog">
                <Button variant="link" className="text-primary h-auto p-0 group">
                  {t.home.viewAllArticles} <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {latestPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <article className="group h-full border border-border hover:border-primary/30 transition-colors">
                    <div className="p-6 space-y-4">
                      <div className="text-xs text-muted-foreground">
                        {post.publishedAt && format(new Date(post.publishedAt), "d.MM.yyyy", { locale: dateLocale })}
                      </div>
                      <h3 className="font-serif font-bold text-foreground group-hover:text-foreground/80 transition-colors line-clamp-3">
                        {post.title}
                      </h3>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA SECTION */}
      <section className="py-24 bg-primary text-white">
        <div className="container-wide text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-serif font-bold">{t.home.ctaTitle}</h2>
          <p className="text-white/60 max-w-xl mx-auto text-lg">
            {locale === "uk" 
              ? "Не дозволяйте ситуації загострюватися. Зверніться до нас для професійної оцінки вашої справи та розробки стратегії захисту."
              : "Don't let the situation escalate. Contact us for a professional assessment of your case and defense strategy development."
            }
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-10">
              {t.home.scheduleConsultation}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
