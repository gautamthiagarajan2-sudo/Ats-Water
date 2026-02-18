
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const CTA: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '', service: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="bg-slate-950 py-24 overflow-hidden relative">
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-600/20 rounded-full -mr-64 -mt-64 blur-[120px]"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Contact Info */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-teal-400 font-bold text-xs tracking-[0.3em] uppercase mb-6"
            >
              Get In Touch
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Let's Build Your <br /><span className="text-teal-400">Water Solution</span>
            </h2>
            
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Connect with our engineers for a custom feasibility study and technical consultation for your water treatment requirements.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-teal-500/10 rounded-xl">
                  <Phone className="w-6 h-6 text-teal-500" />
                </div>
                <div>
                  <p className="text-white font-bold text-lg">{COMPANY_INFO.phone}</p>
                  <p className="text-slate-500 text-sm">{COMPANY_INFO.phone2}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-teal-500/10 rounded-xl">
                  <Mail className="w-6 h-6 text-teal-500" />
                </div>
                <div>
                  <p className="text-white font-bold">{COMPANY_INFO.email}</p>
                  <p className="text-slate-500 text-sm">{COMPANY_INFO.website}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-teal-500/10 rounded-xl">
                  <MapPin className="w-6 h-6 text-teal-500" />
                </div>
                <div>
                  <p className="text-white font-bold mb-1">Corporate Office</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{COMPANY_INFO.corporateAddress}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              {['ISO 9001 Certified', 'MSME Registered', '24/7 Support'].map((badge, i) => (
                <div key={i} className="flex items-center space-x-2 bg-white/5 px-4 py-2 rounded-full">
                  <CheckCircle2 className="w-4 h-4 text-teal-500" />
                  <span className="text-slate-300 text-sm font-medium">{badge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl"
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 bg-teal-500 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Thank You!</h3>
                <p className="text-slate-400">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-white mb-6">Request a Quotation</h3>
                
                <div>
                  <input
                    type="text"
                    placeholder="Your Name *"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-slate-500 focus:border-teal-500 focus:outline-none transition-colors"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="email"
                    placeholder="Email *"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-slate-500 focus:border-teal-500 focus:outline-none transition-colors"
                  />
                  <input
                    type="tel"
                    placeholder="Phone *"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-slate-500 focus:border-teal-500 focus:outline-none transition-colors"
                  />
                </div>
                
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:border-teal-500 focus:outline-none transition-colors appearance-none"
                >
                  <option value="" className="bg-slate-900">Select Service</option>
                  <option value="wtp" className="bg-slate-900">Water Treatment Plant</option>
                  <option value="ro" className="bg-slate-900">RO Plant</option>
                  <option value="stp" className="bg-slate-900">Sewage Treatment</option>
                  <option value="etp" className="bg-slate-900">Effluent Treatment</option>
                  <option value="pdw" className="bg-slate-900">Packaged Drinking Water</option>
                  <option value="amc" className="bg-slate-900">AMC / O&M Services</option>
                  <option value="other" className="bg-slate-900">Other</option>
                </select>
                
                <textarea
                  placeholder="Tell us about your requirements..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-slate-500 focus:border-teal-500 focus:outline-none transition-colors resize-none"
                ></textarea>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-teal-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-teal-700 transition-colors flex items-center justify-center space-x-3"
                >
                  <span>Submit Enquiry</span>
                  <ArrowUpRight className="w-5 h-5" />
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
