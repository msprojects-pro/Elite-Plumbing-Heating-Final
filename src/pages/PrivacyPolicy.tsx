import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { motion } from 'motion/react';

export function PrivacyPolicy() {
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
              Privacy <span className="text-brand-blue">Policy</span>
            </h1>
            
            <div className="glass p-8 md:p-12 rounded-[2rem] space-y-8 text-slate-300 leading-relaxed">
              <section>
                <h2 className="text-xl font-bold text-white mb-4">Introduction</h2>
                <p>
                  At Elite Plumbing & Heating, we are committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal information when you visit our website or use our services.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">Information We Collect</h2>
                <p>
                  We may collect personal information such as your name, phone number, email address, and physical address when you:
                </p>
                <ul className="list-disc ml-6 mt-2 space-y-2">
                  <li>Fill out a contact form on our website.</li>
                  <li>Request a quote or book a service.</li>
                  <li>Communicate with us via phone or email.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">How We Use Your Data</h2>
                <p>
                  Your information is used strictly for provide the services you requested, including:
                </p>
                <ul className="list-disc ml-6 mt-2 space-y-2">
                  <li>Responding to your inquiries and providing quotes.</li>
                  <li>Scheduling and performing plumbing or heating work.</li>
                  <li>Sending invoices and processing payments.</li>
                  <li>Internal record keeping for accounting and tax purposes.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">Contact Form Handling</h2>
                <p>
                  When you use our contact form, your data is sent securely via Web3Forms. We do not sell or share your contact details with third-party marketing companies. We only share information with subcontractors if absolutely necessary to complete your specific job (e.g., specialized electrical work during a boiler install).
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">Cookies</h2>
                <p>
                  Our website uses basic technical cookies to improve your browsing experience. We may use anonymous analytics to understand how visitors interact with our site, helping us improve our local services in Lisburn and Belfast.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">Your Rights (GDPR)</h2>
                <p>
                  Under GDPR, you have the right to access, rectify, or erase your personal data. You can also object to or restrict its processing. To exercise these rights, please contact us at eliteheatingservices365@gmail.com.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact Elite Plumbing & Heating.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
