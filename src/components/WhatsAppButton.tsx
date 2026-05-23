import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

export function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-[9999] flex flex-col items-end gap-2">
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            className="bg-white text-slate-900 px-4 py-2 rounded-lg shadow-xl text-sm font-bold border border-slate-100 whitespace-nowrap mb-2"
          >
            Chat with us
            <div className="absolute bottom-[-6px] right-6 w-3 h-3 bg-white rotate-45 border-r border-b border-slate-100" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative">
        {/* Multi-layered Pulse Rings */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{
              scale: [1, 2.2],
              opacity: [0.6, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeOut",
            }}
            className="absolute inset-0 rounded-full bg-brand-red/40 blur-md"
          />
        ))}

        {/* Ambient Static Glow */}
        <div className="absolute inset-0 rounded-full bg-brand-red/20 blur-xl scale-150" />
        
        <motion.a
          href="https://wa.me/447719127181"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="relative flex items-center justify-center w-14 h-14 bg-brand-red rounded-full text-white shadow-[0_0_40px_rgba(209,54,39,0.7)] hover:shadow-[0_0_60px_rgba(209,54,39,0.9)] transition-all duration-300"
        >
          <svg 
            className="w-10 h-10 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            {/* Official WhatsApp Bubble Outline */}
            <path d="M12.03 2c-5.52 0-10 4.48-10 10 0 1.76.46 3.47 1.33 4.98L2.03 22l5.1-1.34c1.42.77 3.03 1.18 4.67 1.18 5.52 0 10-4.48 10-10s-4.48-10-10-10z" />
            {/* Centered and Scaled Handset */}
            <g transform="translate(12, 12) scale(0.85) translate(-12, -12)">
              <path d="M17.47 14.39c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35z" />
            </g>
          </svg>
        </motion.a>
      </div>
    </div>
  );
}
