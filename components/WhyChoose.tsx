
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Zap, Shield, Clock, Users, Award } from 'lucide-react';

const WhyChoose: React.FC = () => {
  const features = [
    { icon: Shield, title: 'ISO 9001:2008 Certified', desc: 'Quality management system ensuring consistent, high-quality deliverables.' },
    { icon: Clock, title: '24/7 Service Support', desc: 'Round-the-clock availability of well-qualified service engineers.' },
    { icon: Zap, title: 'Latest Technologies', desc: 'Adopting high-end technologies with on-time deliveries and service backup.' },
    { icon: Users, title: 'Expert Team', desc: 'Team of well-qualified and experienced engineers for every project.' },
    { icon: CheckCircle, title: 'Custom Solutions', desc: 'Pre-engineered and custom-engineered solutions to match exact specifications.' },
    { icon: Award, title: 'MSME Registered', desc: 'Government recognized enterprise committed to quality and growth.' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-teal-400 font-bold text-xs tracking-[0.3em] uppercase mb-4"
        >
          Why Choose Us
        </motion.div>
        <h2 className="text-4xl md:text-5xl font-black mb-6">Our Strengths</h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Committed towards long-term customer relationships by providing cost-effective and sustainable water treatment solutions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all group"
          >
            <div className="w-14 h-14 bg-teal-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-500 transition-colors">
              <feature.icon className="w-7 h-7 text-teal-400 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhyChoose;
