
import React from 'react';
import { motion } from 'framer-motion';
import { PRODUCTS } from '../constants';
import { Package, Download, ChevronRight } from 'lucide-react';

const Products: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-teal-600 font-bold text-sm tracking-[0.3em] uppercase mb-4"
          >
            Components & Consumables
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Engineering Products</h2>
          <p className="text-slate-500 max-w-xl text-lg font-light leading-relaxed">
            High-performance components and equipment designed for maximum durability and precision in water management.
          </p>
        </div>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all whitespace-nowrap flex items-center space-x-3 shadow-2xl shadow-slate-200"
        >
          <Download className="w-5 h-5" />
          <span>Product Catalog</span>
        </motion.button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {PRODUCTS.map((product, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.04 }}
            viewport={{ once: true }}
            className="p-8 bg-slate-50 border border-slate-200 rounded-[2.5rem] hover:bg-teal-600 hover:border-teal-600 transition-all group cursor-default relative overflow-hidden"
          >
            <div className="w-12 h-12 bg-white text-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 group-hover:text-white transition-all shadow-sm">
              <Package className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-black text-teal-600 uppercase tracking-widest block mb-2 group-hover:text-teal-100 transition-colors">
              {product.category}
            </span>
            <h4 className="text-slate-900 font-black text-lg group-hover:text-white transition-colors leading-tight mb-4">
              {product.name}
            </h4>
            
            <div className="flex items-center text-slate-400 text-xs font-bold group-hover:text-white/80 transition-colors">
              <span>View specs</span>
              <ChevronRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>

            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-teal-500/5 rounded-full group-hover:scale-[3] transition-transform duration-1000"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Products;
