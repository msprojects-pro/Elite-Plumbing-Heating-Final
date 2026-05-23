import { motion } from 'motion/react';
import { CheckCircle2, ShieldCheck, Users, Award } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const stats = [
  { label: 'Combined Experience', value: '20+ Yrs', icon: Award, color: 'text-brand-red' },
  { label: 'Happy Customers', value: '1000+', icon: Users, color: 'text-brand-blue' },
  { label: 'Work Guarantee', value: '100%', icon: ShieldCheck, color: 'text-brand-glow' }
];

export function About() {
  return (
    <section id="about" className="py-24 bg-bg-card relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-square">
              <img 
                src="https://res.cloudinary.com/dn5dfwdzd/image/upload/v1779472444/file_000000003c3071fa99784ce2d9cb33d4_qpfpyj.png" 
                alt="Elite Plumbing & Heating Team" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-deep to-transparent opacity-60" />
            </div>
            
            {/* Float badge */}
            <div className="absolute bottom-4 right-4 sm:-bottom-4 sm:-right-4 glass p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-2xl max-w-[180px] sm:max-w-[220px] border border-white/10">
              <div className="text-xl sm:text-2xl font-black text-brand-red mb-1">Family Run</div>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Jordan & Craig lead a dedicated team providing honest, local service across Lisburn & Belfast.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-brand-red text-sm font-bold tracking-[0.2em] uppercase mb-4">Our Story</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white mb-6 font-display leading-tight">
              Decades of Excellence in every <span className="text-brand-blue text-glow-blue">Pipe & Fitting</span>
            </h3>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              At Elite Plumbing & Heating, we've built our reputation on a simple foundation: 
              doing professional work at a fair price. As a family-run business, we understand 
              the importance of having a safe, warm, and functional home.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {[
                "Highly Trained Engineers",
                "Fully Insured Services",
                "Rapid Response Times",
                "Transparent Pricing",
                "Cleanup After Every Job",
                "Local Lisburn Business"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-blue" />
                  <span className="text-slate-200 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-10">
              {stats.map((stat, i) => (
                <div key={i}>
                  <div className={cn("text-3xl font-black mb-1", stat.color)}>{stat.value}</div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
