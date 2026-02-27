import { useI18n } from "@/i18n/I18nProvider";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { teamMembers } from "@/data/teamMembers";

export default function Team() {
  const { t, locale } = useI18n();

  return (
    <div className="min-h-screen">
      <section className="bg-primary text-white pt-24 pb-32">
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
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <Link key={member.id} href={`/team/${member.slug}`}>
                <motion.article
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                  data-testid={`card-team-${member.id}`}
                >
                  <div className="aspect-[4/5] overflow-hidden bg-muted relative">
                    {member.photo ? (
                      <img 
                        src={member.photo} 
                        alt={member.name[locale]}
                        className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full bg-muted flex items-center justify-center">
                        <User className="w-24 h-24 text-muted-foreground" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">{member.name[locale]}</h3>
                      <div className="inline-block">
                        <p className="text-sm font-semibold text-primary bg-secondary/20 px-3 py-1 rounded-full">
                          {member.role[locale]}
                        </p>
                      </div>
                    </div>
                    
                    <div className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      <p className="line-clamp-3">
                        {member.bio[locale].substring(0, 120)}...
                      </p>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                      <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>{locale === 'uk' ? 'Доступний для консультацій' : 'Available for consultations'}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              </Link>
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
