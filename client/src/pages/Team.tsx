import { useI18n } from "@/i18n/I18nProvider";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
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
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">{t.team.title}</h1>
            <p className="text-xl text-white/80 leading-relaxed">
              {t.team.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member, i) => (
              <Link key={member.id} href={`/team/${member.slug}`}>
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group border border-border overflow-hidden cursor-pointer hover:border-primary/30 transition-colors"
                  data-testid={`card-team-${member.id}`}
                >
                  <div className="aspect-[3/4] bg-muted relative overflow-hidden">
                    <img 
                      src={member.photo} 
                      alt={member.name[locale]}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <span className="inline-flex items-center gap-2 text-white text-sm">
                        {locale === "uk" ? "Детальніше" : "Learn more"} <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-serif font-bold text-foreground group-hover:text-primary transition-colors">
                        {member.name[locale]}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {member.role[locale]}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {member.specialization[locale].slice(0, 3).map((spec, j) => (
                        <span 
                          key={j}
                          className="text-xs px-2 py-1 bg-primary/5 text-primary/80"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {member.bio[locale]}
                    </p>
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary/5">
        <div className="container-wide text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
            {locale === "uk" ? "Потрібна консультація?" : "Need a consultation?"}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            {locale === "uk" 
              ? "Наші фахівці готові допомогти вам у вирішенні будь-яких правових питань."
              : "Our specialists are ready to help you with any legal matters."
            }
          </p>
          <Link href="/contact">
            <button className="px-8 py-3 bg-primary text-white hover:bg-primary/90 transition-colors">
              {locale === "uk" ? "Записатися на консультацію" : "Schedule a consultation"}
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
