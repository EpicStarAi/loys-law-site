import { useI18n } from "@/i18n/I18nProvider";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { 
  ShieldAlert, 
  Medal, 
  Users, 
  Scale, 
  FileText, 
  Building, 
  Landmark,
  Briefcase,
  Globe
} from "lucide-react";

export default function Services() {
  const { t } = useI18n();

  const services = [
    {
      id: "criminal",
      icon: ShieldAlert,
      title: t.services.criminal,
      description: t.services.criminalDesc,
    },
    {
      id: "military",
      icon: Medal,
      title: t.services.military,
      description: t.services.militaryDesc,
    },
    {
      id: "family",
      icon: Users,
      title: t.services.family,
      description: t.services.familyDesc,
    },
    {
      id: "civil",
      icon: Scale,
      title: t.services.civil,
      description: t.services.civilDesc,
    },
    {
      id: "inheritance",
      icon: FileText,
      title: t.services.inheritance,
      description: t.services.inheritanceDesc,
    },
    {
      id: "administrative",
      icon: Landmark,
      title: t.services.administrative,
      description: t.services.administrativeDesc,
    },
    {
      id: "echr",
      icon: Globe,
      title: t.services.echr,
      description: t.services.echrDesc,
    },
    {
      id: "corporate",
      icon: Briefcase,
      title: t.services.corporate,
      description: t.services.corporateDesc,
    },
    {
      id: "realestate",
      icon: Building,
      title: t.services.realestate,
      description: t.services.realestateDesc,
    },
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
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">{t.services.title}</h1>
            <p className="text-xl text-white/70 leading-relaxed">
              {t.services.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="group bg-card border border-border p-8 hover:border-foreground/30 transition-colors"
                data-testid={`card-service-${service.id}`}
              >
                <div className="w-14 h-14 bg-muted flex items-center justify-center mb-6 group-hover:bg-muted/80 transition-colors">
                  <service.icon className="w-7 h-7 text-foreground" />
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container-wide text-center">
          <h2 className="text-3xl font-serif font-bold mb-4 text-foreground">{t.home.ctaTitle}</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            {t.home.ctaSubtitle}
          </p>
          <Link href="/contact">
            <button className="bg-primary text-white px-8 py-3 font-medium hover:bg-primary/90 transition-colors">
              {t.home.scheduleConsultation}
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
