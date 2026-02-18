
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About Us', id: 'about' },
    { name: 'Products', id: 'products' },
    { name: 'Systems', id: 'systems' },
    { name: 'Services', id: 'services' },
    { name: 'Industries', id: 'industries' },
    { name: 'Contact Us', id: 'contact' },
  ];

  const handleScrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-[90] transition-all duration-700 ${scrolled ? 'bg-white/95 backdrop-blur-2xl shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1)] py-2' : 'bg-slate-950/80 backdrop-blur-xl py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        <motion.div
          onClick={(e) => handleScrollTo(e, 'home')}
          className="flex items-center space-x-3 cursor-pointer group"
          whileHover={{ scale: 1.02 }}
        >
          <img 
            src="/logo.png" 
            alt="ATS Water Technologies" 
            className={`h-14 w-auto object-contain transition-all ${scrolled ? '' : 'brightness-110'}`} 
          />
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={(e) => handleScrollTo(e, link.id)}
              className={`relative text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:text-teal-500 group ${scrolled ? 'text-slate-600' : 'text-white/90'}`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-500 group-hover:w-full"></span>
            </button>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => handleScrollTo(e, 'contact')}
            className="bg-teal-600 text-white px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-[0.15em] hover:bg-teal-700 transition-all shadow-lg flex items-center space-x-2"
          >
            <span>Get Quote</span>
            <ArrowUpRight className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className={`lg:hidden p-3 rounded-xl transition-colors ${scrolled ? 'text-slate-900 bg-slate-100' : 'text-white bg-white/10'}`}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute w-full bg-white shadow-2xl overflow-hidden"
          >
            <div className="px-8 py-10 flex flex-col space-y-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={(e) => handleScrollTo(e, link.id)}
                  className="text-slate-800 font-black text-xl text-left hover:text-teal-600 transition-colors tracking-tight"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={(e) => handleScrollTo(e, 'contact')}
                className="bg-teal-600 text-white px-8 py-5 rounded-2xl text-center font-black text-lg shadow-xl"
              >
                Get Engineering Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
