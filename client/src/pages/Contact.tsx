import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema, type InsertInquiry } from "@shared/schema";
import { useCreateInquiry } from "@/hooks/use-legal-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
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
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Контакти</h1>
          <p className="text-white/60 max-w-xl mx-auto text-lg">
            Готові обговорити вашу справу? Заповніть форму або завітайте до нашого офісу.
          </p>
        </div>
      </div>

      <div className="container-wide py-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Info Column */}
        <div className="space-y-12">
           <div className="space-y-6">
             <h2 className="text-2xl font-serif font-bold text-primary">Інформація про офіс</h2>
             <div className="space-y-4">
               <div className="flex gap-4">
                 <div className="w-10 h-10 bg-muted flex items-center justify-center shrink-0">
                   <MapPin className="w-5 h-5 text-primary" />
                 </div>
                 <div>
                   <h3 className="font-semibold text-primary">Офіс у Києві</h3>
                   <p className="text-muted-foreground">пр. Соборності, 19, Київ, Україна, 02160</p>
                 </div>
               </div>
               
               <div className="flex gap-4">
                 <div className="w-10 h-10 bg-muted flex items-center justify-center shrink-0">
                   <Phone className="w-5 h-5 text-primary" />
                 </div>
                 <div>
                   <h3 className="font-semibold text-primary">Телефон</h3>
                   <p className="text-muted-foreground">+380 97 777 76 00</p>
                 </div>
               </div>
               
               <div className="flex gap-4">
                 <div className="w-10 h-10 bg-muted flex items-center justify-center shrink-0">
                   <Mail className="w-5 h-5 text-primary" />
                 </div>
                 <div>
                   <h3 className="font-semibold text-primary">Email</h3>
                   <a href="mailto:attorneysys@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">attorneysys@gmail.com</a>
                 </div>
               </div>

               <div className="flex gap-4">
                 <div className="w-10 h-10 bg-muted flex items-center justify-center shrink-0">
                   <MessageCircle className="w-5 h-5 text-primary" />
                 </div>
                 <div>
                   <h3 className="font-semibold text-primary">Telegram</h3>
                   <a href="https://t.me/Ruslan_Yaremchuk" className="text-muted-foreground hover:text-primary transition-colors">@Ruslan_Yaremchuk</a>
                 </div>
               </div>

               <div className="flex gap-4">
                 <div className="w-10 h-10 bg-muted flex items-center justify-center shrink-0">
                   <Clock className="w-5 h-5 text-primary" />
                 </div>
                 <div>
                   <h3 className="font-semibold text-primary">Графік роботи</h3>
                   <p className="text-muted-foreground">Пн-Пт: 09:00 - 18:00</p>
                 </div>
               </div>
             </div>
           </div>

           {/* Placeholder Map */}
           <div className="h-[300px] w-full bg-muted border border-border relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-primary/5"></div>
              <span className="text-muted-foreground uppercase tracking-widest font-semibold">Інтеграція карти</span>
           </div>
        </div>

        {/* Form Column */}
        <div className="bg-white border border-border p-8 md:p-10 shadow-lg">
          <h2 className="text-2xl font-serif font-bold mb-6">Надіслати запит</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Повне ім'я</FormLabel>
                      <FormControl>
                        <Input placeholder="Іван Петренко" {...field} data-testid="input-name" />
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
                      <FormLabel>Тип клієнта</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger data-testid="select-type">
                            <SelectValue placeholder="Оберіть тип" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="individual">Фізична особа</SelectItem>
                          <SelectItem value="corporate">Юридична особа</SelectItem>
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
                        <Input placeholder="ivan@example.com" {...field} data-testid="input-email" />
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
                      <FormLabel>Телефон</FormLabel>
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
                    <FormLabel>Як ми можемо допомогти?</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Коротко опишіть вашу ситуацію..." {...field} data-testid="input-message" />
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
                {mutation.isPending ? "Надсилання..." : "Надіслати запит"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
