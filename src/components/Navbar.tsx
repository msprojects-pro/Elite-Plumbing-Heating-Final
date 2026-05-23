import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';
import { Logo } from './Logo';
import { CONTACT_INFO } from '../constants';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/#services' },
  { name: 'About', href: '/#about' },
  { name: 'Gallery', href: '/#gallery' },
  { name: 'Contact', href: '/#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      if (isOpen) setIsOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-6",
        scrolled ? "glass py-1" : "bg-transparent py-2"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="hover:opacity-90 transition-opacity flex items-center h-full relative z-10 -ml-2 md:-ml-4" onClick={() => setIsOpen(false)}>
          <div className="flex items-center">
            <Logo />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href}
              className="text-sm font-medium text-slate-300 hover:text-brand-red transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-4 ml-4">
            <a 
              href={`tel:${CONTACT_INFO.jordan.tel}`}
              className="flex items-center gap-2 px-5 py-2.5 bg-brand-red text-white rounded-full text-sm font-bold glow-red hover:scale-105 transition-all"
            >
              <Phone className="w-4 h-4 fill-current" />
              Call Jordan
            </a>
            <Link 
              to="/#contact"
              className="hidden lg:flex bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-full text-sm font-bold border border-white/10 transition-all"
            >
              Free Quote
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Mesh */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-slate-900/98 backdrop-blur-xl mt-2 mx-6 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href}
                  className="text-lg font-medium text-slate-200 py-2 hover:text-brand-red transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <Link 
                  to="/privacy"
                  className="text-slate-400 text-sm hover:text-white py-1"
                  onClick={() => setIsOpen(false)}
                >
                  Privacy Policy
                </Link>
                <Link 
                  to="/terms"
                  className="text-slate-400 text-sm hover:text-white py-1"
                  onClick={() => setIsOpen(false)}
                >
                  Terms & Conditions
                </Link>
                <div className="flex flex-col gap-3 mt-4">
                  <a 
                    href={`tel:${CONTACT_INFO.jordan.tel}`}
                    className="flex items-center justify-center gap-2 w-full py-4 bg-brand-red text-white rounded-xl font-bold"
                  >
                    <Phone className="w-5 h-5 fill-current" />
                    Call Jordan
                  </a>
                  <a 
                    href={`tel:${CONTACT_INFO.craig.tel}`}
                    className="flex items-center justify-center gap-2 w-full py-4 bg-brand-blue text-white rounded-xl font-bold"
                  >
                    <Phone className="w-5 h-5 fill-current" />
                    Call Craig
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
