import { useI18n } from "@/i18n/I18nProvider";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GraduationCap, FileText, Users, TrendingUp, CheckCircle, ArrowRight, Mail } from "lucide-react";
import { Link } from "wouter";

export default function Internship() {
  const { t } = useI18n();

  const benefits = [
    {
      icon: FileText,
      title: "Реальна практика",
      description: "Робота над справжніми справами — від підготовки правових документів до супроводу судових процесів."
    },
    {
      icon: Users,
      title: "Менторство",
      description: "Наставництво від провідних адвокатів об'єднання, готові ділитися досвідом та знаннями."
    },
    {
      icon: TrendingUp,
      title: "Кар'єрний ліфт",
      description: "Найкращі стажери отримують пріоритетну можливість працевлаштування в LOYS після завершення практики."
    },
    {
      icon: CheckCircle,
      title: "Галузева експертиза",
      description: "Вивчення специфіки роботи в усіх ключових практиках фірми."
    }
  ];

  const specializations = [
    "Цивільне право",
    "Кримінальне право", 
    "Господарське право",
    "Медіація",
    "Захист інтелектуальної власності",
    "Правовий супровід бізнесу"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-white pt-24 pb-32">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <GraduationCap className="w-12 h-12" />
              <h1 className="text-4xl md:text-6xl font-serif font-bold">Стажування</h1>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white/90">
              Старт професійного шляху в LOYS: від теорії до успішної практики
            </h2>
            <p className="text-lg text-white/80 leading-relaxed">
              Адвокатське об'єднання LOYS відкриває двері для молодих спеціалістів. Наша програма стажування — це унікальна можливість отримати реальний досвід, подолати перші професійні виклики та повністю зануритися у практичну юридичну діяльність.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Що ви отримаєте під час стажування
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Комплексний підхід до навчання та професійного розвитку
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-20 bg-muted/30">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-serif font-bold mb-6">
                Оберіть свій напрямок спеціалізації
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Ми пропонуємо гнучкість у виборі напрямку, який відповідає вашим інтересам:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {specializations.map((spec, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-background/60"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="font-medium">{spec}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-background p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-serif font-bold mb-6">Готові розпочати?</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Надсилайте запит на стажування та своє CV на пошту{" "}
                <a 
                  href="mailto:attorneysys@gmail.com?subject=Стажування"
                  className="text-primary hover:underline font-medium"
                >
                  attorneysys@gmail.com
                </a>
                {" "}з поміткою «Стажування».
              </p>
              <p className="text-muted-foreground mb-8 font-medium">
                Зробіть свій перший крок у велику юриспруденцію разом з нами!
              </p>
              
              <div className="space-y-4">
                <a href="mailto:attorneysys@gmail.com?subject=Стажування&body=Доброго дня!%0A%0AЗвертаюсь з проханням про стажування в Адвокатському об'єднанні LOYS.%0A%0AПрошу розглянути мою кандидатуру.%0A%0AЗ повагою,">
                  <Button size="lg" className="w-full">
                    <Mail className="mr-2 w-4 h-4" />
                    Надіслати заявку на стажування
                  </Button>
                </a>
                <Link href="/contact">
                  <Button variant="outline" size="lg" className="w-full">
                    Зв'язатися з нами <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}