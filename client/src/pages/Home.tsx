import { useServices, useTeam } from "@/hooks/use-legal-data";
import { ServiceCard } from "@/components/ServiceCard";
import { TeamCard } from "@/components/TeamCard";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Scale, ShieldCheck, Award } from "lucide-react";
import { motion } from "framer-motion";
import { useI18n } from "@/i18n/I18nProvider";

export default function Home() {
  const { data: services } = useServices();
  const { data: team } = useTeam();
  const { locale, t } = useI18n();

  const featuredServices = services?.slice(0, 6) || [];
  const featuredTeam = team?.slice(0, 4) || [];

  const stats = locale === "uk" ? [
    { icon: Scale, label: "Виграних справ", value: "500+" },
    { icon: Award, label: "Рейтинг Google", value: "4.9/5" },
    { icon: ShieldCheck, label: "Ліцензія", value: "НААУ" },
  ] : [
    { icon: Scale, label: "Cases Won", value: "500+" },
    { icon: Award, label: "Google Rating", value: "4.9/5" },
    { icon: ShieldCheck, label: "License", value: "UNBA" },
  ];

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-800 to-slate-950 z-0" />
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] z-0 mix-blend-overlay" />
        
        <div className="container-wide relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="inline-block px-3 py-1 border border-white/20 text-xs uppercase tracking-[0.2em] text-white/80">
              {locale === "uk" ? "Київ • Бровари" : "Kyiv • Brovary"}
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight">
              {locale === "uk" ? (
                <>Захист, коли на кону <br /><span className="text-white/50 italic font-serif">свобода</span>.</>
              ) : (
                <>Defense when <br /><span className="text-white/50 italic font-serif">freedom</span> is at stake.</>
              )}
            </h1>
            <p className="text-lg text-white/70 max-w-md leading-relaxed">
              {locale === "uk" 
                ? "Суворе дотримання закону. Безкомпромісний захист ваших інтересів. Ми надаємо високорівневі правові стратегії для складних справ."
                : "Strict adherence to the law. Uncompromising protection of your interests. We provide high-level legal strategies for complex cases."
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto bg-white text-primary hover:bg-white/90">
                  {t.home.consultation} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent border-white/20 text-white hover:bg-white hover:text-primary">
                  {locale === "uk" ? "Наші послуги" : "Our Services"}
                </Button>
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden md:block relative h-[500px]"
          >
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[500px] border border-white/10 rotate-12" />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[500px] border border-white/10 -rotate-6" />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[450px] bg-white/5 overflow-hidden backdrop-blur-sm border border-white/20">
               <img 
                 src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
                 alt={locale === "uk" ? "Юридичний офіс" : "Law Office"}
                 className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
               />
             </div>
          </motion.div>
        </div>
      </section>

      {/* TRUST INDICATORS */}
      <section className="bg-white border-b border-border">
        <div className="container-wide py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-border">
            {stats.map((stat, i) => (
              <div key={i} className="flex items-center justify-center gap-4 py-4 md:py-0">
                <stat.icon className="h-10 w-10 text-primary/80 stroke-1" />
                <div>
                  <div className="text-3xl font-serif font-bold text-primary">{stat.value}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-serif mb-4">{t.footer.practiceAreas}</h2>
              <p className="text-muted-foreground">
                {locale === "uk" 
                  ? "Комплексна правова підтримка для фізичних та юридичних осіб. Ми спеціалізуємося на складних судових процесах та стратегічному захисті."
                  : "Comprehensive legal support for individuals and legal entities. We specialize in complex litigation and strategic defense."
                }
              </p>
            </div>
            <Link href="/services">
              <Button variant="link" className="text-primary h-auto p-0 group">
                {t.home.viewAllServices} <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section-padding bg-white">
        <div className="container-wide">
           <div className="text-center mb-16">
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2 block">
                {locale === "uk" ? "Наші експерти" : "Our Experts"}
              </span>
              <h2 className="text-4xl font-serif">
                {locale === "uk" ? "Команда адвокатів" : "Our Legal Team"}
              </h2>
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredTeam.map((member) => (
                <TeamCard key={member.id} member={member} />
              ))}
           </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        <div className="container-wide relative z-10 text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-serif">{t.home.ctaTitle}</h2>
          <p className="text-white/60 max-w-xl mx-auto">
            {locale === "uk" 
              ? "Не дозволяйте ситуації загострюватися. Зверніться до нас для професійної оцінки вашої справи та розробки стратегії захисту."
              : "Don't let the situation escalate. Contact us for a professional assessment of your case and defense strategy development."
            }
          </p>
          <div className="flex justify-center gap-4">
             <Link href="/contact">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">{t.home.scheduleConsultation}</Button>
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
