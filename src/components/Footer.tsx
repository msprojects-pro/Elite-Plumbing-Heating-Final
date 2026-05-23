import { motion } from 'motion/react';
import { Facebook, Instagram, Phone, Mail, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { CONTACT_INFO } from '../constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-24 pb-12 bg-bg-card relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Logo className="mb-6" />
            <p className="text-slate-400 mb-8 leading-relaxed">
              Family-run plumbing and heating experts. Serving Lisburn, Belfast, and 
              surrounding areas with professional, honest craftsmanship. Over 20 years combined experience.
            </p>
            <div className="flex gap-4">
              <a 
                href={CONTACT_INFO.facebook} 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-brand-red hover:bg-brand-red/10 transition-all border border-white/10"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href={CONTACT_INFO.instagram} 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-brand-blue hover:bg-brand-blue/10 transition-all border border-white/10"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', href: '/' },
                { name: 'Services', href: '/#services' },
                { name: 'About Us', href: '/#about' },
                { name: 'Recent Work', href: '/#gallery' },
                { name: 'Contact Us', href: '/#contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href} 
                    className="group flex items-center text-slate-400 hover:text-white transition-all"
                  >
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Legal</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/privacy" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-slate-400 hover:text-white transition-colors">Terms & Conditions</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Get In Touch</h4>
            <div className="space-y-4">
              <a href={`tel:${CONTACT_INFO.jordan.tel}`} className="flex items-center gap-3 text-slate-400 hover:text-brand-red transition-all">
                <Phone className="w-4 h-4 text-brand-red" />
                <span>{CONTACT_INFO.jordan.phone} (Jordan)</span>
              </a>
              <a href={`tel:${CONTACT_INFO.craig.tel}`} className="flex items-center gap-3 text-slate-400 hover:text-brand-blue transition-all">
                <Phone className="w-4 h-4 text-brand-blue" />
                <span>{CONTACT_INFO.craig.phone} (Craig)</span>
              </a>
              <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-3 text-slate-400 hover:text-white transition-all overflow-hidden text-ellipsis">
                <Mail className="w-4 h-4" />
                <span className="truncate">{CONTACT_INFO.email}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-slate-500 text-sm">
          <p>© {currentYear} Elite Plumbing & Heating. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <Link to="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
