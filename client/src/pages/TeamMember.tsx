import { useRoute, Link } from "wouter";
import { useI18n } from "@/i18n/I18nProvider";
import { motion } from "framer-motion";
import { ArrowLeft, GraduationCap, Briefcase, Award, Heart, Scale, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { teamMembers } from "@/data/teamMembers";

export default function TeamMember() {
  const [, params] = useRoute("/team/:slug");
  const { locale } = useI18n();
  
  const member = teamMembers.find(m => m.slug === params?.slug);
  
  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif font-bold mb-4">
            {locale === "uk" ? "Члена команди не знайдено" : "Team member not found"}
          </h1>
          <Link href="/team">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              {locale === "uk" ? "Повернутися до команди" : "Back to team"}
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <section className="bg-primary text-white pt-40 pb-32">
        <div className="container-wide">
          <Link href="/team">
            <Button variant="ghost" className="text-white/70 hover:text-white mb-8" data-testid="button-back-team">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {locale === "uk" ? "Повернутися до команди" : "Back to team"}
            </Button>
          </Link>
          
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="aspect-[3/4] overflow-hidden"
            >
              {member.photo ? (
                <img 
                  src={member.photo} 
                  alt={member.name[locale]}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-white/10">
                  <User className="w-32 h-32 text-white/40" />
                </div>
              )}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 space-y-6"
            >
              <div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">{member.name[locale]}</h1>
                <p className="text-xl text-white/80">{member.role[locale]}</p>
              </div>
              
              <blockquote className="border-l-4 border-white/40 pl-6 py-2">
                <p className="text-lg italic text-white/90">"{member.quote[locale]}"</p>
              </blockquote>
              
              <p className="text-white/70 text-lg leading-relaxed">
                {member.bio[locale]}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-serif font-bold">
                  {locale === "uk" ? "Освіта" : "Education"}
                </h2>
              </div>
              <ul className="space-y-4">
                {member.education[locale].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="w-2 h-2 bg-primary mt-2 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <Briefcase className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-serif font-bold">
                  {locale === "uk" ? "Досвід" : "Experience"}
                </h2>
              </div>
              <ul className="space-y-4">
                {member.experience[locale].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="w-2 h-2 bg-primary mt-2 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <Scale className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-serif font-bold">
                  {locale === "uk" ? "Спеціалізація" : "Specialization"}
                </h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {member.specialization[locale].map((item, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-2 bg-primary/10 text-primary text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <Award className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-serif font-bold">
                  {locale === "uk" ? "Досягнення та діяльність" : "Achievements & Activities"}
                </h2>
              </div>
              <ul className="space-y-4">
                {member.achievements[locale].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="w-2 h-2 bg-primary mt-2 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 p-8 bg-primary/5 border border-primary/10"
          >
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-serif font-bold">
                {locale === "uk" ? "Цінності та особистість" : "Values & Personality"}
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {member.values[locale]}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="container-wide text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
            {locale === "uk" ? "Потрібна консультація?" : "Need a consultation?"}
          </h2>
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
