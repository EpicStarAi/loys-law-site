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
  Globe,
  MessageSquare,
  Home,
  MapPin,
  Gavel,
  MoreHorizontal,
  ChevronDown,
  TrendingUp,
  FileCheck,
  Car
} from "lucide-react";
import { servicesData, type ServiceCategory } from "@/data/servicesData";
import { useState } from "react";

const iconMap: Record<string, React.ElementType> = {
  MessageSquare,
  ShieldAlert,
  Scale,
  Users,
  Home,
  Briefcase,
  Building,
  FileText,
  MapPin,
  Landmark,
  Gavel,
  MoreHorizontal,
  Medal,
  Globe,
  TrendingUp,
  FileCheck,
  Car,
};

function formatPrice(priceFrom: number, priceTo: number | undefined, locale: string): string {
  const formatter = new Intl.NumberFormat(locale === "uk" ? "uk-UA" : "en-US");
  const currency = locale === "uk" ? "грн" : "UAH";
  const fromText = locale === "uk" ? "від" : "from";
  
  if (priceTo) {
    return `${formatter.format(priceFrom)} – ${formatter.format(priceTo)} ${currency}`;
  }
  return `${fromText} ${formatter.format(priceFrom)} ${currency}`;
}

function ServiceCategorySection({ category, locale, index }: { category: ServiceCategory; locale: string; index: number }) {
  const [isExpanded, setIsExpanded] = useState(true);
  const Icon = iconMap[category.icon] || Scale;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="border border-border bg-card"
      data-testid={`section-service-${category.id}`}
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/30 transition-colors"
        data-testid={`button-toggle-${category.id}`}
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-primary/10 flex items-center justify-center">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-xl font-serif font-bold text-foreground">
            {locale === "uk" ? category.name : category.nameEn}
          </h3>
        </div>
        <ChevronDown 
          className={`w-5 h-5 text-muted-foreground transition-transform ${isExpanded ? "rotate-180" : ""}`} 
        />
      </button>
      
      {isExpanded && (
        <div className="border-t border-border">
          {category.services.map((service, i) => (
            <div
              key={i}
              className={`p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                i !== category.services.length - 1 ? "border-b border-border/50" : ""
              }`}
              data-testid={`row-service-${category.id}-${i}`}
            >
              <div className="flex-1">
                <p className="text-foreground font-medium">
                  {locale === "uk" ? service.name : service.nameEn}
                </p>
                {(service.note || service.noteEn) && (
                  <p className="text-sm text-muted-foreground mt-1">
                    {locale === "uk" ? service.note : service.noteEn}
                  </p>
                )}
              </div>
              <div className="text-right">
                <span className="text-lg font-semibold text-primary whitespace-nowrap">
                  {formatPrice(service.priceFrom, service.priceTo, locale)}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}

export default function Services() {
  const { t, locale } = useI18n();

  const mainServices = [
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
      <section className="bg-primary text-white pt-40 pb-32">
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
            {mainServices.map((service, i) => (
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

      {/* Detailed Pricing */}
      <section className="py-20 bg-muted/30">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              {locale === "uk" ? "Вартість послуг" : "Service Pricing"}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {locale === "uk" 
                ? "Орієнтовна вартість наших юридичних послуг. Остаточна ціна визначається після детального аналізу справи."
                : "Approximate cost of our legal services. Final price is determined after detailed case analysis."}
            </p>
          </motion.div>

          <div className="space-y-4">
            {servicesData.map((category, index) => (
              <ServiceCategorySection 
                key={category.id} 
                category={category} 
                locale={locale}
                index={index}
              />
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center text-sm text-muted-foreground mt-8"
          >
            {locale === "uk" 
              ? "* Вказані ціни є орієнтовними. Точна вартість визначається індивідуально після консультації."
              : "* Prices shown are approximate. Exact cost is determined individually after consultation."}
          </motion.p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container-wide text-center">
          <h2 className="text-3xl font-serif font-bold mb-4 text-foreground">{t.home.ctaTitle}</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            {t.home.ctaSubtitle}
          </p>
          <Link href="/contact">
            <button className="bg-primary text-white px-8 py-3 font-medium hover:bg-primary/90 transition-colors" data-testid="button-schedule-consultation">
              {t.home.scheduleConsultation}
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
