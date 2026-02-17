
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Target, Eye, ShieldCheck, Factory, Beaker, Zap, Settings, ClipboardList } from 'lucide-react';

const Competency = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="p-8 bg-slate-50 rounded-[3rem] border border-slate-100 flex flex-col items-start group hover:bg-white hover:shadow-2xl transition-all duration-500"
  >
    <div className="w-14 h-14 bg-teal-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-xl shadow-teal-500/20 group-hover:scale-110 transition-transform">
      <Icon className="w-7 h-7" />
    </div>
    <h4 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-tighter">{title}</h4>
    <p className="text-slate-500 text-sm font-medium leading-relaxed">{desc}</p>
  </motion.div>
);

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="grid lg:grid-cols-2 gap-32 items-center mb-32">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="relative z-10 rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-[16px] border-white"
          >
            <img
              src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800"
              alt="Engineering Facility"
              className="w-full object-cover h-[750px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
            className="absolute -bottom-10 -right-10 md:right-0 z-20 glass-dark p-12 rounded-[3.5rem] max-w-[360px] shadow-2xl border border-white/10"
          >
            <div className="text-teal-400 font-black text-5xl mb-4">ISO</div>
            <h5 className="font-black text-white text-2xl leading-tight mb-4 uppercase">9001:2008 <br /> Certified</h5>
            <p className="text-slate-400 font-medium leading-relaxed text-sm italic">
              "One of the leading manufacturers of water treatment & commercial water purification systems."
            </p>
          </motion.div>
        </div>

        <div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-teal-600 font-black text-xs tracking-[0.4em] uppercase mb-8"
          >
            Our Core Pillars
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-10 leading-[0.95] tracking-tighter">
            Sustainable <br />
            <span className="text-teal-600">Innovation.</span>
          </h2>

          <p className="text-slate-500 leading-relaxed mb-6 text-lg font-medium">
            We wish to introduce ourselves as one of the leading manufacturers and wholesalers of water treatment and commercial water purification systems. We offer a wide range of pre-engineered as well as custom-engineered solutions for all water purification needs and Waste Water treatment Solutions under one roof.
          </p>
          <p className="text-slate-500 leading-relaxed mb-12 text-lg font-medium">
            We provide total consultancy for Water treatment engineering, design, supply, installation, commissioning, and operation of the plant.
          </p>

          <div className="space-y-12">
            <div className="flex items-start space-x-6 group">
              <div className="p-4 bg-teal-50 rounded-2xl group-hover:bg-teal-600 transition-colors">
                <Target className="w-6 h-6 text-teal-600 group-hover:text-white" />
              </div>
              <div>
                <h4 className="text-xl font-black text-slate-900 mb-2">Our Mission</h4>
                <p className="text-slate-500 text-sm font-medium">Providing professional technical support through advanced molecular filtration technologies.</p>
              </div>
            </div>
            <div className="flex items-start space-x-6 group">
              <div className="p-4 bg-teal-50 rounded-2xl group-hover:bg-teal-600 transition-colors">
                <Target className="w-6 h-6 text-teal-600 group-hover:text-white" />
              </div>
              <div>
                <h4 className="text-xl font-black text-slate-900 mb-2">Our Mission</h4>
                <p className="text-slate-500 text-sm font-medium">To provide ultimate solutions and professional technical support in the field of Water & Wastewater Treatment by adopting high-end technologies to our customers, enabling them to meet their environmental compliances & needs.</p>
              </div>
            </div>
            <div className="flex items-start space-x-6 group">
              <div className="p-4 bg-teal-50 rounded-2xl group-hover:bg-teal-600 transition-colors">
                <Eye className="w-6 h-6 text-teal-600 group-hover:text-white" />
              </div>
              <div>
                <h4 className="text-xl font-black text-slate-900 mb-2">Our Vision</h4>
                <p className="text-slate-500 text-sm font-medium">To provide affordable solutions for all forms of pollution thus creating a sustainable environment.</p>
              </div>
            </div>
            <div className="flex items-start space-x-6 group">
              <div className="p-4 bg-teal-50 rounded-2xl group-hover:bg-teal-600 transition-colors">
                <ShieldCheck className="w-6 h-6 text-teal-600 group-hover:text-white" />
              </div>
              <div>
                <h4 className="text-xl font-black text-slate-900 mb-2">Quality Policy</h4>
                <p className="text-slate-500 text-sm font-medium">Committed towards long-term customer relationship & satisfaction by providing cost-effective & sustainable solutions continually upgrading the Innovative Technologies.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Competency
          icon={Settings}
          title="Design Engg."
          desc="Proprietary blueprints for high-capacity industrial water plants (1m³ - 100m³/hr)."
        />
        <Competency
          icon={ClipboardList}
          title="Project Mgmt."
          desc="End-to-end management from feasibility studies to site commissioning."
        />
        <Competency
          icon={ShieldCheck}
          title="ISI Consultancy"
          desc="Expert assistance for BIS compliance and complete laboratory setup for PDW plants."
        />
        <Competency
          icon={Beaker}
          title="Water Testing"
          desc="Advanced analytical services to certify water purity per global industrial codes."
        />
      </div>
    </div>
  );
};

export default About;
