import { motion } from 'motion/react';
import { ShieldCheck, Clock, PoundSterling, HeartHandshake } from 'lucide-react';

const reasons = [
  {
    title: "Gas Safe Experts",
    description: "Fully certified and registered engineers for both gas and oil heating systems.",
    icon: ShieldCheck,
    color: "bg-brand-red/10 text-brand-red glow-red"
  },
  {
    title: "Fast Response",
    description: "We know heating failures are urgent. We offer quick and reliable response times during business hours.",
    icon: Clock,
    color: "bg-brand-blue/10 text-brand-blue glow-blue"
  },
  {
    title: "Fair Pricing",
    description: "Honest, transparent quotes with no hidden fees or surprise charges.",
    icon: PoundSterling,
    color: "bg-brand-glow/10 text-brand-glow"
  },
  {
    title: "Family Values",
    description: "We treat your home like our own. Professional, clean, and respectful always.",
    icon: HeartHandshake,
    color: "bg-white/5 text-white"
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass rounded-[3rem] p-12 md:p-20 overflow-hidden relative">
          {/* Decorative background glow */}
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-red/20 blur-[120px] rounded-full" />
          
          <div className="relative z-10 flex flex-col lg:flex-row gap-16">
            <div className="lg:max-w-md">
              <h2 className="text-brand-red text-sm font-bold tracking-[0.2em] uppercase mb-4">Why Elite?</h2>
              <h3 className="text-4xl md:text-5xl font-black text-white font-display mb-8">
                Professionals You Can <span className="text-brand-blue">Always Depend On</span>
              </h3>
              <p className="text-slate-400 text-lg mb-10">
                Choosing a plumber is about trust. With over 20 years combined experience, we've proven we are
                Lisburn's most reliable team.
              </p>
              <div className="p-8 bg-white/5 rounded-3xl border border-white/5">
                <div className="text-4xl font-black text-white mb-2">10/10</div>
                <div className="text-slate-400 font-medium">Average Customer Satisfaction Score</div>
              </div>
            </div>

            <div className="flex-1 grid sm:grid-cols-2 gap-8">
              {reasons.map((reason, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col gap-4"
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${reason.color}`}>
                    <reason.icon className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-white uppercase tracking-tight">{reason.title}</h4>
                  <p className="text-slate-400 leading-relaxed">
                    {reason.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
