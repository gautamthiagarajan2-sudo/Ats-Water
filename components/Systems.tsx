
import React from 'react';
import { motion } from 'framer-motion';
import { SYSTEMS } from '../constants';
import { ArrowRight } from 'lucide-react';

const Systems: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="text-center mb-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-teal-600 font-bold text-sm tracking-[0.3em] uppercase mb-4"
        >
          Specialized Hardware
        </motion.div>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Industrial Plant Systems</h2>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg font-light leading-relaxed">
          Proprietary engineering designs tailored for high-volume filtration, effluent management, and ultra-pure water production.
        </p>
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {SYSTEMS.map((system) => (
          <motion.div 
            key={system.id} 
            variants={item}
            whileHover={{ y: -10 }}
            className="group relative bg-white rounded-3xl overflow-hidden shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_-15px_rgba(20,184,166,0.15)] transition-all duration-500 border border-slate-100 flex flex-col h-full"
          >
            <div className="relative h-64 overflow-hidden">
              <motion.img 
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
                src={system.image} 
                alt={system.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/0 transition-all duration-500"></div>
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-teal-700 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                Turnkey Model
              </div>
            </div>
            
            <div className="p-10 flex flex-col flex-grow relative">
              <div className="absolute top-0 left-10 right-10 h-1 bg-teal-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></div>
              
              <h3 className="text-2xl font-extrabold text-slate-900 mb-4 group-hover:text-teal-600 transition-colors">{system.title}</h3>
              <p className="text-slate-500 text-sm mb-8 leading-relaxed flex-grow font-medium">
                {system.description}
              </p>
              
              <button className="flex items-center space-x-2 text-slate-900 font-bold text-sm hover:text-teal-600 transition-colors group/btn">
                <span>View Specifications</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Systems;
