
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Droplet } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Systems', id: 'systems' },
    { name: 'Products', id: 'products' },
    { name: 'Industries', id: 'industries' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleScrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-[90] transition-all duration-700 ${scrolled ? 'bg-white/90 backdrop-blur-2xl shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1)] py-2' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        <motion.div 
          onClick={(e) => handleScrollTo(e, 'home')} 
          className="flex items-center space-x-3 cursor-pointer group"
          whileHover={{ scale: 1.02 }}
        >
          <div className="relative w-14 h-14 flex items-center justify-center">
             <div className="absolute inset-0 bg-teal-600 rounded-full scale-90 group-hover:scale-100 transition-transform duration-500 shadow-xl shadow-teal-500/30"></div>
             <div className="relative z-10 text-white flex flex-col items-center leading-none">
                <Droplet className="w-5 h-5 mb-0.5 fill-white" />
                <span className="text-[10px] font-black tracking-widest">ATS</span>
             </div>
          </div>
          <div className="flex flex-col">
            <div className={`font-black text-xl tracking-tighter transition-colors duration-500 ${scrolled ? 'text-slate-900' : 'text-white'}`}>
              ATS WATER <span className="text-teal-500 font-light">TECHNOLOGIES</span>
            </div>
            <div className={`text-[8px] font-black uppercase tracking-[0.3em] transition-opacity duration-500 ${scrolled ? 'text-slate-400 opacity-100' : 'text-white/40 opacity-0'}`}>
              Management Excellence
            </div>
          </div>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={(e) => handleScrollTo(e, link.id)}
              className={`relative text-[10px] font-black uppercase tracking-[0.25em] transition-all hover:text-teal-500 group ${scrolled ? 'text-slate-600' : 'text-white/80'}`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-500 group-hover:w-full"></span>
            </button>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => handleScrollTo(e, 'contact')}
            className="bg-slate-900 text-white px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-teal-600 transition-all shadow-2xl flex items-center space-x-2"
          >
            <span>Consult Now</span>
            <ArrowUpRight className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className={`md:hidden p-3 rounded-2xl transition-colors ${scrolled ? 'text-slate-900 bg-slate-100' : 'text-white bg-white/10'}`}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute w-full bg-white shadow-2xl overflow-hidden"
          >
            <div className="px-8 py-12 flex flex-col space-y-8">
              {navLinks.map((link, idx) => (
                <button
                  key={link.id}
                  onClick={(e) => handleScrollTo(e, link.id)}
                  className="text-slate-800 font-black text-3xl text-left hover:text-teal-600 transition-colors tracking-tight"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={(e) => handleScrollTo(e, 'contact')}
                className="bg-teal-600 text-white px-8 py-6 rounded-[2rem] text-center font-black text-xl shadow-2xl shadow-teal-500/30"
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
