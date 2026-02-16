
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <div className="bg-slate-950 py-32 overflow-hidden relative">
      {/* Dynamic Animated Background */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
          x: [0, 50, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal-600/20 rounded-full -mr-96 -mt-96 blur-[150px] pointer-events-none"
      />
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.05, 0.15, 0.05],
          y: [0, -50, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full -ml-96 -mb-96 blur-[150px] pointer-events-none"
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-[4rem] p-16 md:p-24 backdrop-blur-3xl overflow-hidden relative group">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-teal-400 font-black text-xs tracking-[0.4em] uppercase mb-10"
            >
              Collaboration Request
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-8xl font-black text-white mb-10 leading-[0.95] tracking-tighter"
            >
              Let’s Architect <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-400 to-emerald-600">Pure Solutions.</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-400 font-medium mb-16 leading-relaxed max-w-2xl"
            >
              Connect with our principal engineers for a custom feasibility study and molecular analysis of your water requirements.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-6 sm:space-y-0 sm:space-x-8"
            >
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: '0 20px 50px rgba(20, 184, 166, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-teal-500 text-white px-12 py-7 rounded-3xl font-black text-xl hover:bg-teal-600 transition-all flex items-center justify-center space-x-4 shadow-2xl shadow-teal-500/20"
              >
                <span>Request Quotation</span>
                <ArrowUpRight className="w-6 h-6" />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.05)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent text-white border border-white/10 px-12 py-7 rounded-3xl font-black text-xl hover:border-teal-500/50 transition-all"
              >
                Direct Sales Line
              </motion.button>
            </motion.div>
          </div>

          {/* Trusted Badges */}
          <div className="mt-24 grid grid-cols-2 md:grid-cols-3 gap-8 pt-12 border-t border-white/5">
            {[
              "ISO 9001 Certified",
              "15+ Years Legacy",
              "MSME Registered"
            ].map((text, i) => (
              <div key={i} className="flex items-center space-x-3">
                <CheckCircle2 className="w-5 h-5 text-teal-500" />
                <span className="text-slate-500 font-black uppercase text-[10px] tracking-[0.2em]">{text}</span>
              </div>
            ))}
          </div>

          {/* Corner Accent */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-teal-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
