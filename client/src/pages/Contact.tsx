import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema, type InsertInquiry } from "@shared/schema";
import { useCreateInquiry } from "@/hooks/use-legal-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, MessageCircle, FileText } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { motion } from "framer-motion";
import { SiTelegram, SiViber, SiWhatsapp } from "react-icons/si";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Contact() {
  const mutation = useCreateInquiry();
  const { t } = useI18n();
  
  const form = useForm<InsertInquiry>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      type: "individual",
    },
  });

  function onSubmit(data: InsertInquiry) {
    mutation.mutate(data, {
      onSuccess: () => form.reset(),
    });
  }

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
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">{t.contact.title}</h1>
            <p className="text-xl text-white/70 leading-relaxed">
              {t.contact.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container-wide py-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Info Column */}
        <div className="space-y-12">
          <div className="space-y-8">
            <h2 className="text-2xl font-serif font-bold text-foreground">{t.contact.officeInfo}</h2>
            
            {/* Kyiv Office */}
            <div className="border border-border p-6 space-y-4">
              <h3 className="font-serif font-bold text-lg flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                {t.contact.kyivOffice}
              </h3>
              <p className="text-muted-foreground pl-7">{t.contact.kyivAddress}</p>
              <div className="pl-7 space-y-2 text-sm">
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary/60" />
                  <a href="tel:+380977777600" className="hover:text-primary transition-colors">+380 97 777 76 00</a>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary/60" />
                  <a href="mailto:attorneysys@gmail.com" className="hover:text-primary transition-colors">attorneysys@gmail.com</a>
                </p>
              </div>
            </div>

            {/* Brovary Office */}
            <div className="border border-border p-6 space-y-4">
              <h3 className="font-serif font-bold text-lg flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                {t.contact.brovaryOffice}
              </h3>
              <p className="text-muted-foreground pl-7">{t.contact.brovaryAddress}</p>
              <div className="pl-7 space-y-2 text-sm">
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary/60" />
                  <a href="tel:+380977777600" className="hover:text-primary transition-colors">+380 97 777 76 00</a>
                </p>
              </div>
            </div>

            {/* Schedule */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-muted flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{t.contact.schedule}</h3>
                <p className="text-muted-foreground">{t.contact.scheduleTime}</p>
              </div>
            </div>

            {/* Messengers */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-muted flex items-center justify-center shrink-0">
                <MessageCircle className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3">{t.contact.telegram}</h3>
                <div className="flex gap-3">
                  <a 
                    href="https://t.me/Ruslan_Yaremchuk" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#0088cc] text-white flex items-center justify-center hover:opacity-80 transition-opacity"
                  >
                    <SiTelegram className="w-5 h-5" />
                  </a>
                  <a 
                    href="viber://chat?number=%2B380977777600"
                    className="w-10 h-10 bg-[#7360f2] text-white flex items-center justify-center hover:opacity-80 transition-opacity"
                  >
                    <SiViber className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://wa.me/380977777600" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#25D366] text-white flex items-center justify-center hover:opacity-80 transition-opacity"
                  >
                    <SiWhatsapp className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Documents for consultation */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-muted flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{t.contact.documents}</h3>
                <p className="text-muted-foreground text-sm">{t.contact.docsList}</p>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="h-[250px] w-full bg-muted border border-border relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-primary/5"></div>
            <span className="text-muted-foreground uppercase tracking-widest font-semibold text-sm">{t.contact.mapIntegration}</span>
          </div>
        </div>

        {/* Form Column */}
        <div className="bg-card border border-border p-8 md:p-10 shadow-lg h-fit">
          <h2 className="text-2xl font-serif font-bold mb-6 text-foreground">{t.contact.sendRequest}</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t.contact.fullName}</FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} data-testid="input-name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t.contact.clientType}</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger data-testid="select-type">
                          <SelectValue placeholder={t.contact.selectType} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="individual">{t.contact.individual}</SelectItem>
                        <SelectItem value="corporate">{t.contact.corporate}</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="email@example.com" {...field} data-testid="input-email" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t.contact.phoneLabel}</FormLabel>
                      <FormControl>
                        <Input placeholder="+380..." {...field} data-testid="input-phone" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t.contact.howCanWeHelp}</FormLabel>
                    <FormControl>
                      <Textarea placeholder={t.contact.messagePlaceholder} {...field} data-testid="input-message" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                size="lg" 
                className="w-full"
                disabled={mutation.isPending}
                data-testid="button-submit"
              >
                {mutation.isPending ? t.contact.sending : t.contact.submit}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
