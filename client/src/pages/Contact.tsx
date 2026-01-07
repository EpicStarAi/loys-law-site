import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema, type InsertInquiry } from "@shared/schema";
import { useCreateInquiry } from "@/hooks/use-legal-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, MessageCircle, Facebook } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
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
  const { locale, t } = useI18n();
  
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
      <div className="bg-primary text-white py-20">
        <div className="container-wide text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">{t.contact.title}</h1>
          <p className="text-white/60 max-w-xl mx-auto text-lg">
            {t.contact.subtitle}
          </p>
        </div>
      </div>

      <div className="container-wide py-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Info Column */}
        <div className="space-y-12">
           <div className="space-y-6">
             <h2 className="text-2xl font-serif font-bold text-primary">{t.contact.officeInfo}</h2>
             <div className="space-y-4">
               <div className="flex gap-4">
                 <div className="w-10 h-10 bg-muted flex items-center justify-center shrink-0">
                   <MapPin className="w-5 h-5 text-primary" />
                 </div>
                 <div>
                   <h3 className="font-semibold text-primary">{t.contact.office}</h3>
                   <p className="text-muted-foreground">
                     {locale === "uk" ? "пр. Соборності, 19, Київ, Україна, 02160" : "19 Sobornosti Ave, Kyiv, Ukraine, 02160"}
                   </p>
                 </div>
               </div>
               
               <div className="flex gap-4">
                 <div className="w-10 h-10 bg-muted flex items-center justify-center shrink-0">
                   <Phone className="w-5 h-5 text-primary" />
                 </div>
                 <div>
                   <h3 className="font-semibold text-primary">{t.contact.phone}</h3>
                   <p className="text-muted-foreground">+380 97 777 76 00</p>
                 </div>
               </div>
               
               <div className="flex gap-4">
                 <div className="w-10 h-10 bg-muted flex items-center justify-center shrink-0">
                   <Mail className="w-5 h-5 text-primary" />
                 </div>
                 <div>
                   <h3 className="font-semibold text-primary">{t.contact.email}</h3>
                   <a href="mailto:attorneysys@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">attorneysys@gmail.com</a>
                 </div>
               </div>

               <div className="flex gap-4">
                 <div className="w-10 h-10 bg-muted flex items-center justify-center shrink-0">
                   <MessageCircle className="w-5 h-5 text-primary" />
                 </div>
                 <div>
                   <h3 className="font-semibold text-primary">{t.contact.telegram}</h3>
                   <a href="https://t.me/Ruslan_Yaremchuk" className="text-muted-foreground hover:text-primary transition-colors">@Ruslan_Yaremchuk</a>
                 </div>
               </div>

               <div className="flex gap-4">
                 <div className="w-10 h-10 bg-muted flex items-center justify-center shrink-0">
                   <Clock className="w-5 h-5 text-primary" />
                 </div>
                 <div>
                   <h3 className="font-semibold text-primary">{t.contact.schedule}</h3>
                   <p className="text-muted-foreground">{t.contact.scheduleTime}</p>
                 </div>
               </div>

               <div className="flex gap-4">
                 <div className="w-10 h-10 bg-muted flex items-center justify-center shrink-0">
                   <Facebook className="w-5 h-5 text-primary" />
                 </div>
                 <div>
                   <h3 className="font-semibold text-primary">Facebook</h3>
                   <a href="https://www.facebook.com/yaremchukandpartners/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">yaremchukandpartners</a>
                 </div>
               </div>
             </div>
           </div>

           {/* Placeholder Map */}
           <div className="h-[300px] w-full bg-muted border border-border relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-primary/5"></div>
              <span className="text-muted-foreground uppercase tracking-widest font-semibold">{t.contact.mapIntegration}</span>
           </div>
        </div>

        {/* Form Column */}
        <div className="bg-white border border-border p-8 md:p-10 shadow-lg">
          <h2 className="text-2xl font-serif font-bold mb-6">{t.contact.sendRequest}</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t.contact.fullName}</FormLabel>
                      <FormControl>
                        <Input placeholder={locale === "uk" ? "Іван Петренко" : "John Smith"} {...field} data-testid="input-name" />
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
              </div>

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
