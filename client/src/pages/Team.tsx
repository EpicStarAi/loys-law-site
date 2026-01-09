import { useI18n } from "@/i18n/I18nProvider";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { teamMembers } from "@/data/teamMembers";

export default function Team() {
  const { t, locale } = useI18n();

  return (
    <div className="min-h-screen">
      <section className="bg-primary text-white py-32">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-white/60 mb-4 block">
              {locale === "uk" ? "Адвокатське об'єднання" : "Law Firm"}
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">{t.team.title}</h1>
            <p className="text-xl text-white/80 leading-relaxed">
              {t.team.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container-wide">
          <div className="space-y-16">
            {teamMembers.map((member, i) => (
              <motion.article
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="grid lg:grid-cols-3 gap-8 items-start"
                data-testid={`card-team-${member.id}`}
              >
                <Link href={`/team/${member.slug}`} className="block">
                  <div className="aspect-[3/4] overflow-hidden group cursor-pointer">
                    <img 
                      src={member.photo} 
                      alt={member.name[locale]}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </Link>

                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <Link href={`/team/${member.slug}`}>
                      <h2 className="text-3xl font-serif font-bold text-foreground hover:text-primary transition-colors cursor-pointer">
                        {member.name[locale]}
                      </h2>
                    </Link>
                    <p className="text-lg text-muted-foreground mt-2">
                      {member.role[locale]}
                    </p>
                  </div>

                  <blockquote className="border-l-4 border-primary pl-6 py-2">
                    <p className="text-lg italic text-muted-foreground">"{member.quote[locale]}"</p>
                  </blockquote>

                  <p className="text-muted-foreground leading-relaxed">
                    {member.bio[locale]}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {member.specialization[locale].map((spec, j) => (
                      <span 
                        key={j}
                        className="px-4 py-2 bg-primary/5 text-primary text-sm font-medium"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Link href={`/team/${member.slug}`}>
                      <Button variant="outline" className="group">
                        {locale === "uk" ? "Детальніше про фахівця" : "Learn more about the specialist"}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="container-wide text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
            {locale === "uk" ? "Потрібна консультація?" : "Need a consultation?"}
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            {locale === "uk" 
              ? "Наші фахівці готові допомогти вам у вирішенні будь-яких правових питань."
              : "Our specialists are ready to help you with any legal matters."
            }
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary">
              {locale === "uk" ? "Записатися на консультацію" : "Schedule a consultation"}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
