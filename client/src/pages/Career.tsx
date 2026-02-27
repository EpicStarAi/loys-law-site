import { useI18n } from "@/i18n/I18nProvider";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Briefcase, Check, ArrowRight, Lightbulb, TrendingUp, Users, BookOpen, Award } from "lucide-react";
import { Link } from "wouter";

export default function Career() {
  const { t } = useI18n();

  const advantages = [
    {
      icon: Lightbulb,
      title: t.career.advantage1,
      description: t.career.advantage1Desc,
    },
    {
      icon: TrendingUp,
      title: t.career.advantage2,
      description: t.career.advantage2Desc,
    },
    {
      icon: Users,
      title: t.career.advantage3,
      description: t.career.advantage3Desc,
    },
  ];

  const careerOptions = [
    {
      icon: Briefcase,
      title: t.career.assistantTitle,
      description: t.career.assistantDesc,
    },
    {
      icon: Award,
      title: t.career.internshipTitle,
      description: t.career.internshipDesc,
    },
    {
      icon: BookOpen,
      title: t.career.practiceTitle,
      description: t.career.practiceDesc,
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
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">{t.career.title}</h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              {t.career.subtitle}
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              {t.career.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-background">
        <div className="container-wide">
          <h2 className="text-3xl font-serif font-bold mb-12 text-center">{t.career.advantages}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <advantage.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-3">{advantage.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-20 bg-muted/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">{t.career.opportunities}</h2>
            <p className="text-muted-foreground text-lg">{t.career.opportunitiesDesc}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {careerOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <option.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-serif">{option.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed mb-6">{option.description}</p>
                    <Link href="/contact">
                      <Button variant="outline" className="w-full">
                        {t.career.contactUs}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-20 bg-background">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold mb-6">{t.career.joinTeam}</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {t.career.joinTeamDesc}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {t.career.noVacanciesDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg">
                  Надіслати резюме <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/internship">
                <Button variant="outline" size="lg">
                  <GraduationCap className="mr-2 w-4 h-4" />
                  Дізнатись про стажування
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vacancies */}
      <section className="py-20 bg-muted/30">
        <div className="container-wide">
          <h2 className="text-3xl font-serif font-bold mb-8">{t.career.vacancies}</h2>

          <div className="text-center py-16">
            <Briefcase className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">{t.career.noVacancies}</h3>
            <p className="text-muted-foreground mb-6">
              Але ми завжди відкриті до знайомства з талановитими спеціалістами!
            </p>
            <Link href="/contact">
              <Button>
                Надіслати резюме <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
