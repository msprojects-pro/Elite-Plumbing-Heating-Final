import { motion } from 'motion/react';
import { Star, Quote, Facebook } from 'lucide-react';
import { TESTIMONIALS, CONTACT_INFO } from '../constants';

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-red text-sm font-bold tracking-[0.2em] uppercase mb-4">Reviews</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white font-display">
            Trusted By <span className="text-brand-blue">Hundreds</span> of Homeowners
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-[2rem] relative flex flex-col justify-between"
            >
              <div>
                <div className="absolute top-6 right-8 text-white/5">
                  <Quote className="w-16 h-16 fill-current" />
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>

                <p className="text-slate-300 italic mb-8 leading-relaxed relative z-10">
                  "{t.content}"
                </p>
              </div>

              <div>
                <h4 className="text-white font-bold">{t.name}</h4>
                <p className="text-slate-500 text-sm">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <motion.a
            href={CONTACT_INFO.facebook}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 bg-[#1877F2] hover:bg-[#166fe5] text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-[#1877F2]/20 transition-all"
          >
            <Facebook className="w-5 h-5 fill-current" />
            <span>See More On Facebook</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
