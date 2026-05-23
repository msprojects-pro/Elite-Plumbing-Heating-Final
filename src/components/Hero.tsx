import { motion } from 'motion/react';
import { Phone, ChevronRight, Star } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] flex items-center pt-32 pb-8 overflow-hidden">
      {/* Background with parallax effect and dark overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80" 
          alt="Elite Plumbing & Heating Professional Work" 
          className="w-full h-full object-cover"
        />
        <div 
          className="absolute inset-0" 
          style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.92) 40%, rgba(0,0,0,0.4) 100%)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-deep/40 via-transparent to-bg-deep" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-brand-red/10 border border-brand-red/20 px-4 py-1 rounded-full mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
            <span className="text-brand-red text-xs font-bold tracking-wider uppercase">Expert Gas & Heating Engineers</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-tight font-display tracking-tight mb-6"
          >
            Belfast's Trusted <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-blue">Plumbing & Heating</span> <br className="hidden md:block" />
            Experts
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl"
          >
            Professional, reliable service you can depend on. Family-run business with 
            over 20+ years of combined experience serving Lisburn, Belfast & surrounding areas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a 
              href={`tel:${CONTACT_INFO.jordan.tel}`}
              className="flex items-center justify-center gap-3 px-8 py-4 bg-brand-red text-white rounded-xl font-bold text-lg glow-red hover:scale-105 transition-all group"
            >
              <Phone className="w-5 h-5 fill-current" />
              Call Jordan
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href={`tel:${CONTACT_INFO.craig.tel}`}
              className="flex items-center justify-center gap-3 px-8 py-4 bg-brand-blue text-white rounded-xl font-bold text-lg glow-blue hover:scale-105 transition-all group"
            >
              <Phone className="w-5 h-5 fill-current" />
              Call Craig
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 border-t border-white/5 pt-8 inline-flex flex-col items-center space-y-4"
          >
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-2 shrink-0">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />)}
                </div>
                <span className="text-[10px] sm:text-sm font-bold text-white uppercase tracking-wider">5-Star Rated</span>
              </div>
              
              <div className="w-px h-4 bg-white/10 shrink-0" />

              <div className="flex items-center gap-2 shrink-0">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-brand-blue shadow-[0_0_8px_rgba(29,177,225,0.6)]" />
                <span className="text-[10px] sm:text-sm font-bold text-white uppercase tracking-wider">Gas Safe Registered</span>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <span className="text-xs sm:text-sm font-medium text-slate-400 italic tracking-tight text-center">"Hundreds of Happy Customers Across Lisburn & Belfast"</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Gradient Glow */}
      <div className="absolute -bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-brand-blue/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -top-1/4 -left-1/4 w-[500px] h-[500px] bg-brand-red/20 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}
