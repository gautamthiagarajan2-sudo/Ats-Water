
import React from 'react';
import { motion } from 'framer-motion';
import { 
  History, 
  Settings, 
  Headphones, 
  Cpu, 
  Zap, 
  BadgePercent, 
  Globe, 
  CheckCircle 
} from 'lucide-react';

const WhyChoose: React.FC = () => {
  const points = [
    { title: '15+ Years Mastery', icon: History },
    { title: 'ISO 9001:2015', icon: CheckCircle },
    { title: 'Turnkey Execution', icon: Settings },
    { title: '24/7 Priority Support', icon: Headphones },
    { title: 'Custom Engineering', icon: Cpu },
    { title: 'Energy Optimized', icon: Zap },
    { title: 'Cost Efficient', icon: BadgePercent },
    { title: 'PAN India Network', icon: Globe }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
      <div className="text-center mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6">Built for Reliability</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-teal-500 to-emerald-400 mx-auto rounded-full"></div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {points.map((point, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ y: -15 }}
            className="flex flex-col items-center text-center group"
          >
            <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-[2rem] flex items-center justify-center mb-8 text-teal-400 shadow-[0_0_20px_rgba(20,184,166,0.1)] group-hover:shadow-[0_0_40px_rgba(20,184,166,0.3)] group-hover:bg-teal-500 group-hover:text-white transition-all duration-500 group-hover:border-teal-400">
              <point.icon className="w-10 h-10 transition-transform group-hover:rotate-12" />
            </div>
            <h4 className="text-xl font-black text-slate-100 group-hover:text-teal-400 transition-colors uppercase tracking-tight">{point.title}</h4>
            <div className="mt-4 w-8 h-0.5 bg-white/10 group-hover:w-16 group-hover:bg-teal-500 transition-all duration-500"></div>
          </motion.div>
        ))}
      </div>

      {/* Atmospheric Glows */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[600px] h-[600px] bg-teal-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>
    </div>
  );
};

export default WhyChoose;
