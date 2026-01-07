import { useI18n } from "@/i18n/I18nProvider";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GraduationCap, Briefcase, Check, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Career() {
  const { t } = useI18n();

  const requirements = [
    t.career.req1,
    t.career.req2,
    t.career.req3,
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
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">{t.career.title}</h1>
            <p className="text-xl text-white/70 leading-relaxed">
              {t.career.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vacancies */}
      <section className="py-20 bg-background">
        <div className="container-wide">
          <h2 className="text-3xl font-serif font-bold mb-8">{t.career.vacancies}</h2>
          
          <div className="space-y-6">
            {/* Assistant Position */}
            <div className="border border-border p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-serif font-bold text-foreground mb-2">{t.career.assistantTitle}</h3>
                  <p className="text-muted-foreground mb-4">{t.career.assistantDesc}</p>
                  <Link href="/contact">
                    <Button>
                      {t.career.apply} <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internship */}
      <section className="py-20 bg-muted/30">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-serif font-bold">{t.career.internship}</h2>
              </div>
              
              <h3 className="text-xl font-semibold mb-4">{t.career.internshipTitle}</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {t.career.internshipDesc}
              </p>
              
              <Link href="/contact">
                <Button size="lg">
                  {t.career.apply} <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">{t.career.internshipReq}</h3>
              <ul className="space-y-4">
                {requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-foreground">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
