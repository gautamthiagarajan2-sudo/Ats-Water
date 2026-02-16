
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, Wrench, Calendar, RefreshCcw, FlaskConical, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const services = [
    { 
      title: 'Erection & Commissioning', 
      icon: Settings, 
      desc: 'Expert on-site installation and testing to ensure system integrity from day one.',
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1200'
    },
    { 
      title: 'Operation & Maintenance', 
      icon: Wrench, 
      desc: 'Comprehensive O&M solutions to keep your facility running at peak efficiency 24/7.',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1200'
    },
    { 
      title: 'Annual Maintenance (AMC)', 
      icon: Calendar, 
      desc: 'Predictive and preventive maintenance contracts tailored for industrial continuity.',
      image: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&q=80&w=1200'
    },
    { 
      title: 'System Revamping', 
      icon: RefreshCcw, 
      desc: 'Upgrading legacy water plants with modern molecular filtration technologies.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200'
    },
    { 
      title: 'Water Testing Services', 
      icon: FlaskConical, 
      desc: 'Advanced lab analytics to certify water purity according to global industrial standards.',
      image: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6ad?auto=format&fit=crop&q=80&w=1200'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="flex flex-col lg:flex-row gap-24 items-start">
        <div className="lg:w-1/2 sticky top-32">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-teal-600 font-black text-xs tracking-[0.4em] uppercase mb-8"
          >
            Engineering Lifecycle
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-10 leading-[0.95] tracking-tighter">
            Integrated Support <br /> Ecosystem.
          </h2>
          <p className="text-slate-500 text-xl font-medium mb-16 max-w-lg leading-relaxed">
            Our commitment begins where commissioning ends. We architect total lifecycle management for water infrastructure.
          </p>

          <div className="space-y-4">
            {services.map((service, idx) => (
              <motion.button
                key={idx}
                onMouseEnter={() => setActiveIndex(idx)}
                className={`w-full flex items-center justify-between p-8 rounded-3xl transition-all duration-500 text-left border ${activeIndex === idx ? 'bg-slate-900 text-white border-slate-900 shadow-2xl' : 'bg-transparent text-slate-500 border-slate-100 hover:border-slate-300'}`}
              >
                <div className="flex items-center space-x-6">
                  <service.icon className={`w-7 h-7 transition-colors ${activeIndex === idx ? 'text-teal-400' : 'text-slate-300'}`} />
                  <span className="font-black text-lg uppercase tracking-tight">{service.title}</span>
                </div>
                <ArrowRight className={`w-5 h-5 transition-transform duration-500 ${activeIndex === idx ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`} />
              </motion.button>
            ))}
          </div>
        </div>

        <div className="lg:w-1/2 w-full pt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.05, y: -20 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl group"
            >
              <img 
                src={services[activeIndex].image} 
                alt={services[activeIndex].title} 
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
              
              <div className="absolute bottom-16 left-16 right-16">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h4 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter">{services[activeIndex].title}</h4>
                  <p className="text-slate-300 text-lg font-medium leading-relaxed max-w-sm">
                    {services[activeIndex].desc}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <div className="mt-16 flex justify-center space-x-2">
            {services.map((_, idx) => (
              <div 
                key={idx} 
                className={`h-1.5 rounded-full transition-all duration-500 ${activeIndex === idx ? 'w-12 bg-teal-500' : 'w-3 bg-slate-200'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
