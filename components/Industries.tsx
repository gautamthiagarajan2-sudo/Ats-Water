
import React from 'react';
import { motion } from 'framer-motion';
import { INDUSTRIES } from '../constants';

const Industries: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-teal-600 font-bold text-xs tracking-[0.3em] uppercase mb-4"
        >
          Sectors We Serve
        </motion.div>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Industries</h2>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
          Wide engineering capability across Packaged Drinking Water, Food Processing, Pharma, Chemical, Power, and various other industries.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {INDUSTRIES.map((industry, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="relative group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer aspect-square"
          >
            <img
              src={industry.image}
              alt={industry.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent group-hover:from-teal-900 transition-colors"></div>
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <h3 className="text-white font-bold text-lg">{industry.name}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Industries;
