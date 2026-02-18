
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRODUCTS } from '../constants';
import { Package, Download, X, ArrowRight } from 'lucide-react';

const Products: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<typeof PRODUCTS[0] | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-teal-600 font-bold text-xs tracking-[0.3em] uppercase mb-4"
          >
            Components & Equipment
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Engineering Products</h2>
          <p className="text-slate-500 max-w-xl text-lg leading-relaxed">
            High-performance components and equipment designed for maximum durability and precision in water treatment applications.
          </p>
        </div>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all whitespace-nowrap flex items-center space-x-3 shadow-lg"
        >
          <Download className="w-5 h-5" />
          <span>Download Catalog</span>
        </motion.button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {PRODUCTS.map((product, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.03 }}
            viewport={{ once: true }}
            onClick={() => setSelectedProduct(product)}
            className="p-6 bg-white border border-slate-100 rounded-2xl hover:border-teal-500 hover:shadow-lg transition-all group cursor-pointer"
          >
            <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center mb-5 group-hover:bg-teal-600 group-hover:text-white transition-all">
              <Package className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-bold text-teal-600 uppercase tracking-wider block mb-2">
              {product.category}
            </span>
            <h4 className="text-slate-900 font-bold text-base leading-tight mb-3">
              {product.name}
            </h4>
            <div className="flex items-center text-slate-400 text-xs font-bold group-hover:text-teal-600 transition-colors">
              <span>View Details</span>
              <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-lg w-full shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-teal-600 p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-teal-200 text-xs font-bold uppercase tracking-wider">{selectedProduct.category}</span>
                    <h3 className="text-2xl font-black text-white mt-2">{selectedProduct.name}</h3>
                  </div>
                  <button 
                    onClick={() => setSelectedProduct(null)}
                    className="p-2 bg-white/20 rounded-full text-white hover:bg-white/30 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-slate-600 leading-relaxed mb-6">
                  {selectedProduct.desc || 'High-quality water treatment component designed for industrial and commercial applications. Contact us for detailed specifications and pricing.'}
                </p>
                
                <div className="p-4 bg-slate-50 rounded-xl mb-6">
                  <h4 className="font-bold text-slate-900 mb-3">Available Options</h4>
                  <ul className="text-sm text-slate-600 space-y-2">
                    <li>• Multiple capacity options</li>
                    <li>• SS 304/316/316L construction</li>
                    <li>• FRP/MS/MSRL variants</li>
                    <li>• Custom specifications available</li>
                  </ul>
                </div>
                
                <div className="flex gap-4">
                  <button 
                    onClick={() => {
                      setSelectedProduct(null);
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex-1 bg-teal-600 text-white py-3 rounded-xl font-bold hover:bg-teal-700 transition-colors"
                  >
                    Get Quote
                  </button>
                  <button 
                    onClick={() => setSelectedProduct(null)}
                    className="flex-1 bg-slate-100 text-slate-700 py-3 rounded-xl font-bold hover:bg-slate-200 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Products;
