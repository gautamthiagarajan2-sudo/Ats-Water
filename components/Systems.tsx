
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SYSTEMS } from '../constants';
import { ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';

const Systems: React.FC = () => {
  const [selectedSystem, setSelectedSystem] = useState<typeof SYSTEMS[0] | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="text-center mb-16">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-teal-600 font-bold text-xs tracking-[0.3em] uppercase mb-4"
        >
          Specialized Industrial Solutions
        </motion.div>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Water Treatment Systems</h2>
        <p className="text-slate-500 max-w-3xl mx-auto text-lg leading-relaxed">
          Proprietary engineering designs tailored for high-volume filtration, effluent management, desalination, and ultra-pure water production. 
          Complete turnkey solutions from design to commissioning.
        </p>
      </div>

      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {SYSTEMS.map((system, idx) => (
          <motion.div 
            key={system.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            onClick={() => setSelectedSystem(system)}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-slate-100 cursor-pointer"
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src={system.image} 
                alt={system.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] font-bold text-teal-400 uppercase tracking-wider">{system.id.toUpperCase()}</span>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors leading-tight">{system.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-4">{system.description}</p>
              
              <div className="flex items-center text-teal-600 font-bold text-sm group-hover:text-teal-700">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal for System Details */}
      <AnimatePresence>
        {selectedSystem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedSystem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 md:h-80">
                <img src={selectedSystem.image} alt={selectedSystem.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                <button 
                  onClick={() => setSelectedSystem(null)}
                  className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-teal-400 font-bold text-sm uppercase tracking-wider">{selectedSystem.id.toUpperCase()} System</span>
                  <h3 className="text-3xl font-black text-white mt-2">{selectedSystem.title}</h3>
                </div>
              </div>
              
              <div className="p-8">
                <p className="text-slate-600 text-lg leading-relaxed mb-8">{selectedSystem.description}</p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="p-5 bg-slate-50 rounded-xl">
                    <h4 className="font-bold text-slate-900 mb-2">Key Features</h4>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li>• Custom engineering designs</li>
                      <li>• Pre-engineered solutions available</li>
                      <li>• Capacity: 1m³ to 100m³/hr</li>
                      <li>• Complete automation (PLC)</li>
                    </ul>
                  </div>
                  <div className="p-5 bg-slate-50 rounded-xl">
                    <h4 className="font-bold text-slate-900 mb-2">Services Included</h4>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li>• Design & Engineering</li>
                      <li>• Supply & Installation</li>
                      <li>• Commissioning & Training</li>
                      <li>• AMC & O&M Support</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => {
                      setSelectedSystem(null);
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex-1 bg-teal-600 text-white py-4 rounded-xl font-bold hover:bg-teal-700 transition-colors"
                  >
                    Request Quotation
                  </button>
                  <button 
                    onClick={() => setSelectedSystem(null)}
                    className="flex-1 bg-slate-100 text-slate-700 py-4 rounded-xl font-bold hover:bg-slate-200 transition-colors"
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

export default Systems;
