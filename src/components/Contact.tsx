import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useForm } from 'react-hook-form';
import { Phone, Mail, MapPin, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { cn } from '@/src/lib/utils';

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitResult(null);

    // Get key from environment variable
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setSubmitResult({
        success: false,
        message: "Configuration error. Please contact us directly by phone."
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          ...data,
          subject: `Elite Plumbing & Heating: New Quote Request from ${data.name}`,
          from_name: data.name,
          replyto: data.email,
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setSubmitResult({
          success: true,
          message: "Thank you! Your message has been sent. We'll be in touch soon."
        });
        reset();
      } else {
        setSubmitResult({
          success: false,
          message: "Something went wrong. Please try again or call us directly."
        });
      }
    } catch (error) {
      setSubmitResult({
        success: false,
        message: "Network error. Please check your connection and try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden scroll-mt-24">
      {/* Background blobs */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-brand-red/10 blur-[100px] rounded-full" />
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-brand-blue/10 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h2 className="text-brand-red text-sm font-bold tracking-[0.2em] uppercase mb-4">Contact Us</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white font-display mb-8">
              Get A <span className="text-brand-blue">Free, No-Obligation</span> Quote
            </h3>
            
            <p className="text-slate-400 text-lg mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Ready to start your plumbing or heating project? Contact Jordan or Craig 
              today for expert advice and competitive pricing.
            </p>

            <div className="space-y-6 sm:space-y-8 max-w-md mx-auto lg:mx-0">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 group text-center sm:text-left">
                <div className="w-14 h-14 rounded-2xl bg-brand-red/10 flex items-center justify-center text-brand-red glow-red shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Call Jordan</h4>
                  <a href={`tel:${CONTACT_INFO.jordan.tel}`} className="text-slate-400 text-lg hover:text-brand-red transition-all">
                    {CONTACT_INFO.jordan.phone}
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 group text-center sm:text-left">
                <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue glow-blue shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Call Craig</h4>
                  <a href={`tel:${CONTACT_INFO.craig.tel}`} className="text-slate-400 text-lg hover:text-brand-blue transition-all">
                    {CONTACT_INFO.craig.phone}
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 group text-center sm:text-left">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-slate-300 shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Email Us</h4>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-slate-400 hover:text-white transition-all block max-w-full truncate">
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 text-center sm:text-left">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-slate-300 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Coverage Area</h4>
                  <p className="text-slate-400">
                    Lisburn, Belfast, Hillsborough, Dunmurry, Carryduff & surrounding areas.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-6 sm:p-10 rounded-[2rem] sm:rounded-[3rem] relative w-full max-w-2xl lg:max-w-none mx-auto"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-300 ml-1">Your Name</label>
                  <input 
                    {...register("name", { required: true })}
                    className={cn(
                      "w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-red transition-all",
                      errors.name && "border-red-500"
                    )}
                    placeholder="Enter full name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-300 ml-1">Phone Number</label>
                  <input 
                    {...register("phone", { required: true })}
                    className={cn(
                      "w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-red transition-all",
                      errors.phone && "border-red-500"
                    )}
                    placeholder="077XXXXXXXX"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-300 ml-1">Email Address</label>
                <input 
                  {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                  className={cn(
                    "w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-red transition-all",
                    errors.email && "border-red-500"
                  )}
                  placeholder="name@email.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-300 ml-1">Service Required</label>
                <select 
                  {...register("service")}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-red transition-all appearance-none"
                >
                  <option className="bg-bg-card">Boiler Install/Swap</option>
                  <option className="bg-bg-card">A-Z Plumbing Maintenance</option>
                  <option className="bg-bg-card">Bathroom Refurbishment</option>
                  <option className="bg-bg-card">Boiler Breakdown</option>
                  <option className="bg-bg-card">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-300 ml-1">Message</label>
                <textarea 
                  {...register("message", { required: true })}
                  rows={4}
                  className={cn(
                    "w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-red transition-all resize-none",
                    errors.message && "border-red-500"
                  )}
                  placeholder="Tell us about your project..."
                />
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 bg-brand-red text-white flex items-center justify-center gap-3 rounded-xl font-bold text-lg glow-red hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-70 disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
                {isSubmitting ? "Sending..." : "Submit Request"}
              </button>
            </form>

            <AnimatePresence>
              {submitResult && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className={cn(
                    "mt-6 p-4 rounded-xl flex items-center gap-3 font-medium text-center justify-center",
                    submitResult.success ? "text-brand-blue bg-brand-blue/10" : "text-red-400 bg-red-400/10"
                  )}
                >
                  {submitResult.success && <CheckCircle2 className="w-5 h-5" />}
                  {submitResult.message}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
