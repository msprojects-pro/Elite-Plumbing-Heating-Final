import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { motion } from 'motion/react';

export function TermsConditions() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 min-h-screen">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-black text-white mb-8 font-display">
              Terms & <span className="text-brand-red">Conditions</span>
            </h1>
            
            <div className="glass p-8 md:p-12 rounded-[2rem] space-y-8 text-slate-300 leading-relaxed">
              <section>
                <h2 className="text-xl font-bold text-white mb-4">1. Service Terms</h2>
                <p>
                  By engaging Elite Plumbing & Heating, you agree to our terms of service. All work is carried out by qualified engineers. We aim to complete all work to the highest professional standards.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">2. Pricing & Payment</h2>
                <p>
                  Quotes provided are valid for 30 days unless otherwise stated. Payment is strictly due upon completion of the work unless a prior arrangement has been made. We accept bank transfers and major credit/debit cards. Late payments may incur interest charges.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">3. Cancellation Policy</h2>
                <p>
                  If you need to cancel or reschedule an appointment, please provide at least 24 hours' notice. Failure to do so may result in a call-out fee to cover lost time and travel.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">4. Liability & Warranty</h2>
                <p>
                  Workmanship is guaranteed for 12 months from the date of completion. This does not cover typical wear and tear or pre-existing faults in your plumbing system. Materials and appliances (e.g., boilers) are covered by the manufacturer's specific warranty. We are fully insured for public liability.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">5. Access to Property</h2>
                <p>
                  It is the client's responsibility to ensure that our engineers have clear and safe access to the areas requiring work.
                </p>
              </section>

              <p className="pt-8 border-t border-white/10 text-sm text-slate-500 italic text-center">
                Last updated: May 2026. Elite Plumbing & Heating reserves the right to update these terms at any time.
              </p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
