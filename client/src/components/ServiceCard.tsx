import { type Service } from "@shared/schema";
import { Scale, Gavel, Shield, Briefcase, FileText, Landmark, Users, Globe } from "lucide-react";
import { motion } from "framer-motion";

const icons: Record<string, React.ElementType> = {
  scale: Scale,
  gavel: Gavel,
  shield: Shield,
  briefcase: Briefcase,
  file: FileText,
  landmark: Landmark,
  users: Users,
  globe: Globe,
};

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = icons[service.icon] || Scale;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className="group p-8 border border-border bg-white hover:border-primary transition-colors duration-300 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-muted rounded-bl-full -mr-12 -mt-12 transition-transform duration-500 group-hover:scale-150 group-hover:bg-primary/5" />
      
      <div className="relative z-10">
        <div className="w-12 h-12 mb-6 flex items-center justify-center border border-border group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
          <Icon className="w-6 h-6" />
        </div>
        
        <h3 className="text-xl font-serif font-semibold mb-3">{service.title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
        
        <div className="mt-6 w-8 h-[1px] bg-primary/20 group-hover:w-full group-hover:bg-primary transition-all duration-500" />
      </div>
    </motion.div>
  );
}
