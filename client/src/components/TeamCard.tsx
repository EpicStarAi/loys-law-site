import { type TeamMember } from "@shared/schema";
import { motion } from "framer-motion";

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="group relative overflow-hidden bg-white border border-border">
      {/* Image container */}
      <div className="aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
        {member.photoUrl ? (
           <img 
            src={member.photoUrl} 
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          />
        ) : (
          <div className="w-full h-full bg-muted flex items-center justify-center">
            <span className="text-muted-foreground text-xs uppercase tracking-widest">No Image</span>
          </div>
        )}
      </div>

      {/* Info Overlay - Always visible at bottom for strict minimalist */}
      <div className="p-6 bg-white border-t border-border">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">{member.role}</p>
        <h3 className="text-xl font-serif font-bold text-primary mb-2">{member.name}</h3>
        <p className="text-sm text-foreground/80 mb-4">{member.specialization}</p>
        
        <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100">
          <p className="text-xs text-muted-foreground leading-relaxed pt-2 border-t border-border">{member.bio}</p>
        </div>
      </div>
    </div>
  );
}
