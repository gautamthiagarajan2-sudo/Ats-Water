
import React from 'react';
import { motion } from 'framer-motion';
import { INDUSTRIES } from '../constants';

const Industries: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="text-center mb-24">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-teal-600 font-bold text-sm tracking-[0.3em] uppercase mb-4"
        >
          Sectors Impacted
        </motion.div>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 text-balance">Industries We Serve</h2>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg font-light leading-relaxed">
          Our systems are deployed across diverse sectors, ensuring clean water for millions and environmental compliance for industrial giants.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-12 gap-y-20">
        {INDUSTRIES.map((industry, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col items-center group cursor-pointer"
          >
            <div className="relative w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden border-[6px] border-white shadow-2xl group-hover:shadow-teal-500/20 transition-all duration-500">
              <motion.img 
                whileHover={{ scale: 1.15 }}
                src={industry.image} 
                alt={industry.name} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-teal-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <h4 className="mt-8 font-black text-slate-800 group-hover:text-teal-600 transition-colors text-xl tracking-tight uppercase">{industry.name}</h4>
            <div className="w-8 h-1 bg-slate-200 mt-3 group-hover:w-16 group-hover:bg-teal-500 transition-all duration-500 rounded-full"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Industries;
