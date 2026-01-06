import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema, type InsertInquiry } from "@shared/schema";
import { useCreateInquiry } from "@/hooks/use-legal-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
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
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Contact Us</h1>
          <p className="text-white/60 max-w-xl mx-auto text-lg">
            Ready to discuss your case? Fill out the form or visit our office.
          </p>
        </div>
      </div>

      <div className="container-wide py-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Info Column */}
        <div className="space-y-12">
           <div className="space-y-6">
             <h2 className="text-2xl font-serif font-bold text-primary">Office Information</h2>
             <div className="space-y-4">
               <div className="flex gap-4">
                 <div className="w-10 h-10 bg-muted flex items-center justify-center shrink-0">
                   <MapPin className="w-5 h-5 text-primary" />
                 </div>
                 <div>
                   <h3 className="font-semibold text-primary">Kyiv Office</h3>
                   <p className="text-muted-foreground">Volodymyrska St, 101, Kyiv, Ukraine 01033</p>
                 </div>
               </div>
               
               <div className="flex gap-4">
                 <div className="w-10 h-10 bg-muted flex items-center justify-center shrink-0">
                   <Phone className="w-5 h-5 text-primary" />
                 </div>
                 <div>
                   <h3 className="font-semibold text-primary">Phone</h3>
                   <p className="text-muted-foreground">+380 44 123 45 67</p>
                 </div>
               </div>
               
               <div className="flex gap-4">
                 <div className="w-10 h-10 bg-muted flex items-center justify-center shrink-0">
                   <Mail className="w-5 h-5 text-primary" />
                 </div>
                 <div>
                   <h3 className="font-semibold text-primary">Email</h3>
                   <p className="text-muted-foreground">info@yaremchuk-sedun.ua</p>
                 </div>
               </div>

               <div className="flex gap-4">
                 <div className="w-10 h-10 bg-muted flex items-center justify-center shrink-0">
                   <Clock className="w-5 h-5 text-primary" />
                 </div>
                 <div>
                   <h3 className="font-semibold text-primary">Working Hours</h3>
                   <p className="text-muted-foreground">Mon-Fri: 09:00 - 18:00</p>
                 </div>
               </div>
             </div>
           </div>

           {/* Placeholder Map */}
           <div className="h-[300px] w-full bg-muted border border-border relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-primary/5"></div>
              <span className="text-muted-foreground uppercase tracking-widest font-semibold">Map Integration</span>
           </div>
        </div>

        {/* Form Column */}
        <div className="bg-white border border-border p-8 md:p-10 shadow-lg">
          <h2 className="text-2xl font-serif font-bold mb-6">Send an Inquiry</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
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
                      <FormLabel>Client Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="individual">Individual</SelectItem>
                          <SelectItem value="corporate">Corporate</SelectItem>
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
                        <Input placeholder="john@example.com" {...field} />
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
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input placeholder="+380..." {...field} />
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
                    <FormLabel>How can we help?</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Briefly describe your situation..." {...field} />
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
              >
                {mutation.isPending ? "Submitting..." : "Submit Inquiry"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
