
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, Wrench, Calendar, RefreshCcw, FlaskConical, ArrowRight, X } from 'lucide-react';

const Services: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const services = [
    {
      title: 'Erection & Commissioning',
      shortTitle: 'E&C',
      icon: Settings,
      desc: 'Expert on-site installation and testing to ensure system integrity from day one. Our skilled engineers handle complete setup including piping, electrical connections, and system integration.',
      details: ['Site preparation & assessment', 'Equipment installation', 'Piping & electrical work', 'System integration', 'Testing & validation', 'Documentation & handover'],
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=1200'
    },
    {
      title: 'Operation & Maintenance',
      shortTitle: 'O&M',
      icon: Wrench,
      desc: 'Comprehensive O&M contracts to keep your facility running at peak efficiency 24/7. Our team of well-qualified engineers is available round the clock for any operational support.',
      details: ['24/7 operational support', 'Regular system monitoring', 'Performance optimization', 'Consumable management', 'Emergency response', 'Monthly reporting'],
      image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&q=80&w=1200'
    },
    {
      title: 'Annual Maintenance Contract',
      shortTitle: 'AMC',
      icon: Calendar,
      desc: 'Predictive and preventive maintenance contracts tailored for industrial continuity. Regular inspections and timely interventions to prevent breakdowns and extend equipment life.',
      details: ['Scheduled preventive maintenance', 'Spare parts management', 'Priority service response', 'Performance audits', 'Training support', 'Compliance assistance'],
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1200'
    },
    {
      title: 'Revamping Work',
      shortTitle: 'RW',
      icon: RefreshCcw,
      desc: 'Upgrading and revamping legacy water plants with modern technologies. We help you achieve better efficiency, compliance, and output from existing infrastructure.',
      details: ['System assessment & audit', 'Upgrade recommendations', 'Technology modernization', 'Capacity enhancement', 'Automation upgrades', 'Efficiency optimization'],
      image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80&w=1200'
    },
    {
      title: 'Water Testing Services',
      shortTitle: 'WTS',
      icon: FlaskConical,
      desc: 'Advanced laboratory analytics to certify water purity according to BIS, WHO, and global industrial standards. Complete testing for all parameters required for compliance.',
      details: ['Physical parameter testing', 'Chemical analysis', 'Biological testing', 'Heavy metal detection', 'Compliance certification', 'Detailed lab reports'],
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=1200'
    }
  ];

  const handleViewDetails = () => {
    setShowModal(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-teal-600 font-bold text-xs tracking-[0.3em] uppercase mb-4"
        >
          Engineering Lifecycle Support
        </motion.div>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Our Services</h2>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
          Complete lifecycle management for water infrastructure. Our commitment begins where installation ends.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Service List */}
        <div className="lg:w-1/2 space-y-4">
          {services.map((service, idx) => (
            <motion.button
              key={idx}
              onMouseEnter={() => setActiveIndex(idx)}
              onClick={() => { setActiveIndex(idx); setShowModal(true); }}
              className={`w-full flex items-center justify-between p-6 rounded-2xl transition-all duration-300 text-left border ${
                activeIndex === idx 
                  ? 'bg-teal-600 text-white border-teal-600 shadow-lg' 
                  : 'bg-white text-slate-600 border-slate-100 hover:border-teal-300'
              }`}
            >
              <div className="flex items-center space-x-5">
                <service.icon className={`w-6 h-6 ${activeIndex === idx ? 'text-white' : 'text-teal-600'}`} />
                <div>
                  <span className="font-bold text-lg block">{service.title}</span>
                  <span className={`text-xs ${activeIndex === idx ? 'text-teal-100' : 'text-slate-400'}`}>({service.shortTitle})</span>
                </div>
              </div>
              <ArrowRight className={`w-5 h-5 transition-transform ${activeIndex === idx ? 'translate-x-0' : '-translate-x-2 opacity-0'}`} />
            </motion.button>
          ))}
        </div>

        {/* Service Preview */}
        <div className="lg:w-1/2">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="relative rounded-3xl overflow-hidden shadow-xl h-[500px]"
            >
              <img
                src={services[activeIndex].image}
                alt={services[activeIndex].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h4 className="text-2xl font-black text-white mb-3">{services[activeIndex].title}</h4>
                <p className="text-slate-200 text-sm leading-relaxed mb-6 line-clamp-3">
                  {services[activeIndex].desc}
                </p>
                <button 
                  onClick={handleViewDetails}
                  className="bg-white text-slate-900 px-6 py-3 rounded-xl font-bold text-sm hover:bg-teal-50 transition-colors flex items-center space-x-2"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-56">
                <img src={services[activeIndex].image} alt={services[activeIndex].title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                <button 
                  onClick={() => setShowModal(false)}
                  className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="absolute bottom-6 left-6">
                  <span className="text-teal-400 font-bold text-sm">{services[activeIndex].shortTitle}</span>
                  <h3 className="text-2xl font-black text-white">{services[activeIndex].title}</h3>
                </div>
              </div>
              
              <div className="p-8">
                <p className="text-slate-600 leading-relaxed mb-8">{services[activeIndex].desc}</p>
                
                <h4 className="font-bold text-slate-900 mb-4">What's Included</h4>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {services[activeIndex].details.map((detail, i) => (
                    <div key={i} className="flex items-center space-x-2 text-sm text-slate-600">
                      <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <button 
                    onClick={() => {
                      setShowModal(false);
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex-1 bg-teal-600 text-white py-4 rounded-xl font-bold hover:bg-teal-700 transition-colors"
                  >
                    Request Service
                  </button>
                  <button 
                    onClick={() => setShowModal(false)}
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

export default Services;
