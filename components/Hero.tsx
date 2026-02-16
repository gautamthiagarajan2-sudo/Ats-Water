
import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ShieldCheck, Award, Clock, ArrowRight } from 'lucide-react';

// Fixed: Defined MagneticButton as React.FC and made children optional to prevent TypeScript from reporting them as missing in JSX calls.
const MagneticButton: React.FC<{ children?: React.ReactNode, className: string }> = ({ children, className }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set((clientX - centerX) * 0.35);
    y.set((clientY - centerY) * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={className}
    >
      {children}
    </motion.button>
  );
};

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen min-h-[850px] flex items-center overflow-hidden bg-slate-950">
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.55 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&q=80&w=1920"
          alt="Water Treatment Facility"
          className="w-full h-full object-cover grayscale brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent"></div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-20">
        <div className="max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center space-x-3 bg-white/5 border border-white/10 px-6 py-2 rounded-full mb-12 backdrop-blur-md shadow-2xl"
          >
            <span className="w-2.5 h-2.5 bg-teal-500 rounded-full animate-pulse shadow-[0_0_15px_rgba(20,184,166,1)]"></span>
            <span className="text-teal-400 text-[10px] font-black uppercase tracking-[0.4em]">Global Engineering Authority</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl md:text-[8vw] font-black text-white leading-[0.9] mb-10 tracking-tighter"
          >
            Water <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-teal-400 via-emerald-400 to-blue-500 italic">Management</span> <br />
            Excellence.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xl md:text-3xl text-slate-400 font-light mb-16 leading-relaxed max-w-2xl"
          >
            Trusted for turnkey excellence in WTP, STP, ZLD, and Packaged MBR solutions from 1m³ to 100m³/hr.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-8 items-start"
          >
            <MagneticButton className="group bg-teal-600 text-white px-14 py-7 rounded-[2rem] font-black text-xl flex items-center space-x-4 shadow-[0_20px_50px_rgba(20,184,166,0.25)] hover:bg-teal-700 transition-colors">
              <span>View Systems</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </MagneticButton>
            <MagneticButton className="bg-white/5 text-white border border-white/10 px-14 py-7 rounded-[2rem] font-black text-xl backdrop-blur-xl hover:bg-white/10 transition-all">
              Request Feasibility
            </MagneticButton>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-32 grid grid-cols-1 sm:grid-cols-3 gap-16 pt-12 border-t border-white/5"
          >
            <div className="flex flex-col space-y-2">
              <div className="text-teal-500 font-black text-4xl">ISO 9001</div>
              <div className="text-slate-500 text-xs font-black uppercase tracking-[0.2em]">Certified Standards</div>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="text-teal-500 font-black text-4xl">MSME</div>
              <div className="text-slate-500 text-xs font-black uppercase tracking-[0.2em]">Registered Partner</div>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="text-teal-500 font-black text-4xl">15+ YRS</div>
              <div className="text-slate-500 text-xs font-black uppercase tracking-[0.2em]">Market Expertise</div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4"
      >
        <div className="w-1 h-12 bg-gradient-to-b from-teal-500 to-transparent rounded-full opacity-50"></div>
      </motion.div>
    </div>
  );
};

export default Hero;
