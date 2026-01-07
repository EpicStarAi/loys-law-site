import { useI18n } from "@/i18n/I18nProvider";
import { motion } from "framer-motion";
import { Check, Shield, Users, Clock, MapPin, Award } from "lucide-react";

export default function About() {
  const { t } = useI18n();

  const advantages = [
    { icon: Award, text: t.about.advantage1 },
    { icon: Users, text: t.about.advantage2 },
    { icon: Shield, text: t.about.advantage3 },
    { icon: Check, text: t.about.advantage4 },
    { icon: MapPin, text: t.about.advantage5 },
    { icon: Clock, text: t.about.advantage6 },
  ];

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
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">{t.about.title}</h1>
            <p className="text-xl text-white/70 leading-relaxed">
              {t.about.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="container-wide grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-serif font-bold mb-6 text-primary">{t.about.mission}</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {t.about.missionText}
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-serif font-bold mb-6 text-primary">{t.about.history}</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {t.about.historyText}
            </p>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-muted/30">
        <div className="container-wide">
          <h2 className="text-3xl font-serif font-bold mb-12 text-center">{t.about.advantages}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-6 bg-white border border-border"
              >
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-foreground font-medium">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section className="py-20 bg-white">
        <div className="container-wide max-w-3xl text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">{t.about.certificates}</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {t.about.certificatesText}
          </p>
          <div className="mt-12 flex justify-center gap-8">
            <div className="w-24 h-24 bg-muted flex items-center justify-center">
              <Shield className="w-12 h-12 text-primary/40" />
            </div>
            <div className="w-24 h-24 bg-muted flex items-center justify-center">
              <Award className="w-12 h-12 text-primary/40" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
