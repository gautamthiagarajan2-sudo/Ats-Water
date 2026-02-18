
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, ShieldCheck, Settings, ClipboardList, Beaker, Wrench } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Competency = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500"
  >
    <div className="w-14 h-14 bg-teal-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-teal-500/20">
      <Icon className="w-7 h-7" />
    </div>
    <h4 className="text-lg font-black text-slate-900 mb-3">{title}</h4>
    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
  </motion.div>
);

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative z-10 rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800"
              alt="Water Treatment Facility"
              className="w-full object-cover h-[500px] lg:h-[600px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
          </motion.div>

          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="absolute -bottom-8 -right-4 lg:right-4 z-20 bg-slate-900 p-8 rounded-3xl max-w-[320px] shadow-2xl"
          >
            <div className="text-teal-400 font-black text-4xl mb-2">ISO 9001</div>
            <h5 className="font-bold text-white text-lg mb-3">Quality Certified</h5>
            <p className="text-slate-400 text-sm leading-relaxed">
              Committed to providing cost-effective & sustainable water treatment solutions.
            </p>
          </motion.div>
        </div>

        <div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-teal-600 font-black text-xs tracking-[0.3em] uppercase mb-6"
          >
            About ATS Water Technologies
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
            Sustainable Water <span className="text-teal-600">Solutions</span>
          </h2>

          <p className="text-slate-600 leading-relaxed mb-6 text-base">
            We are one of the leading manufacturers and wholesalers of water treatment and commercial water purification systems. 
            We offer a wide range of pre-engineered as well as custom-engineered solutions for all water purification needs and 
            Waste Water treatment Solutions under one roof.
          </p>
          <p className="text-slate-600 leading-relaxed mb-10 text-base">
            We provide total consultancy for Water treatment engineering, design, supply, installation, commissioning, and operation. 
            Our team of well-qualified and experienced service engineers is available round the clock.
          </p>

          <div className="space-y-8">
            <div className="flex items-start space-x-5 group">
              <div className="p-3 bg-teal-50 rounded-xl group-hover:bg-teal-600 transition-colors flex-shrink-0">
                <Target className="w-6 h-6 text-teal-600 group-hover:text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Our Mission</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{COMPANY_INFO.mission}</p>
              </div>
            </div>
            <div className="flex items-start space-x-5 group">
              <div className="p-3 bg-teal-50 rounded-xl group-hover:bg-teal-600 transition-colors flex-shrink-0">
                <Eye className="w-6 h-6 text-teal-600 group-hover:text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Our Vision</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{COMPANY_INFO.vision}</p>
              </div>
            </div>
            <div className="flex items-start space-x-5 group">
              <div className="p-3 bg-teal-50 rounded-xl group-hover:bg-teal-600 transition-colors flex-shrink-0">
                <ShieldCheck className="w-6 h-6 text-teal-600 group-hover:text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Quality Policy</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{COMPANY_INFO.qualityPolicy}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Competency
          icon={Settings}
          title="Design Engineering"
          desc="Proprietary blueprints for high-capacity industrial water plants (1m³ - 100m³/hr). Detailed engineering and design expertise."
        />
        <Competency
          icon={ClipboardList}
          title="Project Management"
          desc="End-to-end management from feasibility studies to site commissioning. Turnkey contracts for complete projects."
        />
        <Competency
          icon={ShieldCheck}
          title="ISI Consultancy"
          desc="Expert assistance for BIS compliance and complete laboratory setup for Packaged Drinking Water plants."
        />
        <Competency
          icon={Beaker}
          title="Water Testing"
          desc="Advanced analytical services to certify water purity per BIS, WHO, and global industrial standards."
        />
      </div>
    </div>
  );
};

export default About;
