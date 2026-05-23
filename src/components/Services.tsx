import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { SERVICES } from '../constants';
import { cn } from '@/src/lib/utils';

export function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-red text-sm font-bold tracking-[0.2em] uppercase mb-4"
          >
            What We Do
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white font-display"
          >
            Professional Solutions For <span className="text-brand-blue">Home & Business</span>
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => {
            const IconComponent = (Icons as any)[service.icon] || Icons.Wrench;
            
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative p-8 rounded-3xl glass transition-all hover:-translate-y-2 hover:bg-white/10 cursor-pointer"
              >
                {/* Glow Backdrop */}
                <div className={cn(
                  "absolute inset-0 opacity-0 group-hover:opacity-10 dark:opacity-0 dark:group-hover:opacity-20 blur-2xl rounded-3xl transition-opacity",
                  i % 2 === 0 ? "bg-brand-red" : "bg-brand-blue"
                )} />
                
                <div className="relative z-10">
                  <div className={cn(
                    "w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3",
                    i % 2 === 0 ? "bg-brand-red/20 text-brand-red glow-red" : "bg-brand-blue/20 text-brand-blue glow-blue"
                  )}>
                    <IconComponent className="w-7 h-7" />
                  </div>

                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-brand-glow transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-slate-400 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mt-8 flex items-center text-sm font-bold text-slate-300 group-hover:text-white transition-colors">
                    <span>Learn More</span>
                    <Icons.ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
