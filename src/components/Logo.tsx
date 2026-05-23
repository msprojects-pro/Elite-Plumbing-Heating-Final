import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

export function Logo({ className, iconOnly }: LogoProps) {
  return (
    <div className={cn("flex items-center relative group", className)}>
      {/* Animated Background Glow */}
      <motion.div 
        animate={{ 
          opacity: [0.3, 0.6, 0.3],
          scale: [0.9, 1.1, 0.9]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 bg-brand-red/20 blur-3xl rounded-full"
      />
      
      <motion.img 
        animate={{
          filter: [
            "drop-shadow(0 0 8px rgba(230, 57, 57, 0.3))",
            "drop-shadow(0 0 20px rgba(230, 57, 57, 0.6))",
            "drop-shadow(0 0 8px rgba(230, 57, 57, 0.3))"
          ]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        src="https://res.cloudinary.com/dn5dfwdzd/image/upload/v1779463915/file_000000007b08720ba6bbfc98a5032ef1_ijbwcq.png" 
        alt="Elite Plumbing & Heating"
        className={cn(
          "relative z-10 w-auto object-contain transition-transform duration-300",
          iconOnly ? "h-14" : "h-24 md:h-36"
        )}
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
