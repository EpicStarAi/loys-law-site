import { useTeam } from "@/hooks/use-legal-data";
import { useI18n } from "@/i18n/I18nProvider";
import { motion } from "framer-motion";
import { User, Briefcase, GraduationCap, FileText } from "lucide-react";

export default function Team() {
  const { data: team, isLoading } = useTeam();
  const { t, locale } = useI18n();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-primary text-white py-32">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">{t.team.title}</h1>
            <p className="text-xl text-white/70 leading-relaxed">
              {t.team.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-96 bg-muted animate-pulse" />
              ))}
            </div>
          ) : team && team.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, i) => (
                <motion.article
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group border border-border overflow-hidden"
                  data-testid={`card-team-${member.id}`}
                >
                  {/* Photo */}
                  <div className="aspect-[3/4] bg-muted relative overflow-hidden">
                    {member.photoUrl ? (
                      <img 
                        src={member.photoUrl} 
                        alt={member.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-primary/5">
                        <User className="w-24 h-24 text-primary/20" />
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-serif font-bold text-primary">{member.name}</h3>
                      <p className="text-sm text-muted-foreground uppercase tracking-wider">{member.role}</p>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-2">
                        <Briefcase className="w-4 h-4 text-primary/60 mt-0.5 shrink-0" />
                        <span className="text-muted-foreground">{member.specialization}</span>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground py-12">
              {locale === "uk" ? "Інформація про команду незабаром з'явиться" : "Team information coming soon"}
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
