
import React from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';

const MagneticButton: React.FC<{ children?: React.ReactNode, className: string, onClick?: () => void }> = ({ children, className, onClick }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    x.set((clientX - left - width / 2) * 0.3);
    y.set((clientY - top - height / 2) * 0.3);
  };

  return (
    <motion.button
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      onClick={onClick}
      style={{ x: springX, y: springY }}
      className={className}
    >
      {children}
    </motion.button>
  );
};

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="home" className="relative min-h-screen flex items-center overflow-hidden bg-slate-950">
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.4 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1920"
          alt="Water Treatment Facility"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/50"></div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-32 pb-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center space-x-3 bg-teal-500/10 border border-teal-500/20 px-5 py-2 rounded-full mb-10"
          >
            <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></span>
            <span className="text-teal-400 text-[10px] font-black uppercase tracking-[0.3em]">ISO 9001:2008 Certified | MSME Registered</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] mb-8 tracking-tight"
          >
            Water <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400">Treatment</span> <br />
            Excellence.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 font-medium mb-12 leading-relaxed max-w-2xl"
          >
            One of the leading manufacturers of Water Treatment & Commercial Water Purification Systems. 
            Turnkey solutions for WTP, STP, ETP, RO, UF, and Packaged Drinking Water plants from 1m³ to 100m³/hr.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 items-start"
          >
            <MagneticButton 
              onClick={() => scrollToSection('systems')}
              className="group bg-teal-600 text-white px-10 py-5 rounded-2xl font-bold text-lg flex items-center space-x-3 shadow-[0_20px_50px_rgba(20,184,166,0.3)] hover:bg-teal-700 transition-colors"
            >
              <span>View Systems</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </MagneticButton>
            <MagneticButton 
              onClick={() => scrollToSection('contact')}
              className="bg-white/5 text-white border border-white/20 px-10 py-5 rounded-2xl font-bold text-lg backdrop-blur-xl hover:bg-white/10 transition-all flex items-center space-x-3"
            >
              <Phone className="w-5 h-5" />
              <span>+91 98400 73207</span>
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-white/10"
          >
            {[
              { value: '15+', label: 'Years Experience' },
              { value: '500+', label: 'Projects Completed' },
              { value: '24/7', label: 'Service Support' },
              { value: '100%', label: 'Client Satisfaction' }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col">
                <div className="text-teal-400 font-black text-3xl md:text-4xl">{stat.value}</div>
                <div className="text-slate-500 text-xs font-bold uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-1 h-10 bg-gradient-to-b from-teal-500 to-transparent rounded-full opacity-60"></div>
      </motion.div>
    </div>
  );
};

export default Hero;
