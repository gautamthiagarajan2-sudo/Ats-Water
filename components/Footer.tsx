
import React from 'react';
import { MapPin, Phone, Mail, ShieldCheck, Award, Factory, Building2 } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-32 pb-12 overflow-hidden relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center space-x-4 mb-10">
              <div className="w-12 h-12 bg-teal-600 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-xl shadow-teal-500/20">A</div>
              <div className="font-black text-2xl text-white tracking-tighter uppercase leading-none">
                ATS Water <br /> <span className="text-teal-600 text-lg">Technologies</span>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-10 font-medium">
              Trusted for Water Management Excellence. One of the leading manufacturers of Water Treatment & Commercial Purification Systems in India.
            </p>
            <div className="flex flex-col space-y-4 pt-8 border-t border-white/5">
              <div className="flex items-center space-x-3">
                 <div className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-pulse"></div>
                 <span className="text-[10px] font-black uppercase tracking-widest text-slate-200">24/7 Service Support</span>
              </div>
              <div className="flex items-center space-x-3">
                 <div className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-pulse"></div>
                 <span className="text-[10px] font-black uppercase tracking-widest text-slate-200">Custom Engineering</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-black mb-10 uppercase tracking-[0.3em] text-[10px]">Corporate Office</h4>
            <div className="flex space-x-4 mb-8">
              <Building2 className="w-6 h-6 text-teal-500 flex-shrink-0" />
              <p className="text-sm leading-relaxed">
                No.100, Plot No.4C, Jeevarathinam 3rd Street, KSR Nagar, (VGN Shanthi Nagar), Ambattur, Chennai – 600053
              </p>
            </div>
            <ul className="space-y-6 text-sm">
              <li className="flex items-center space-x-4">
                <Phone className="w-5 h-5 text-teal-500" />
                <div className="flex flex-col">
                  <span className="font-black text-white">+91 98400 73207</span>
                  <span className="text-[10px] text-slate-500">+91 44 4201 9863</span>
                </div>
              </li>
              <li className="flex items-center space-x-4">
                <Mail className="w-5 h-5 text-teal-500" />
                <span className="font-black text-white">atswater@yahoo.in</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black mb-10 uppercase tracking-[0.3em] text-[10px]">Factory Works</h4>
            <div className="flex space-x-4 mb-8">
              <Factory className="w-6 h-6 text-teal-500 flex-shrink-0" />
              <p className="text-sm leading-relaxed">
                No.48/1, Vellala Street, 3rd Main Road (Near Telephone Exchange), Ambattur Industrial Estate, Chennai - 600058
              </p>
            </div>
            <div className="p-6 bg-white/5 rounded-3xl border border-white/5 flex flex-col items-center justify-center text-center">
                 <span className="text-[10px] font-black uppercase text-teal-500 mb-2">ISI Consultancy</span>
                 <p className="text-[10px] text-slate-400">Complete Turnkey PDW Setup & BIS Liaison</p>
            </div>
          </div>

          <div>
            <h4 className="text-white font-black mb-10 uppercase tracking-[0.3em] text-[10px]">Accreditation</h4>
            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="p-6 bg-white/5 rounded-3xl border border-white/5 flex flex-col items-center justify-center">
                 <ShieldCheck className="w-8 h-8 text-teal-500 mb-2" />
                 <span className="text-[9px] font-black uppercase text-white">ISO 9001</span>
              </div>
              <div className="p-6 bg-white/5 rounded-3xl border border-white/5 flex flex-col items-center justify-center">
                 <Award className="w-8 h-8 text-teal-500 mb-2" />
                 <span className="text-[9px] font-black uppercase text-white">MSME</span>
              </div>
            </div>
            <div className="p-4 bg-teal-500/10 rounded-2xl border border-teal-500/20 text-center">
               <span className="text-[10px] font-black text-teal-400 uppercase tracking-widest">www.atswater.in</span>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-[0.4em] text-slate-700">
          <div className="flex space-x-12">
            <a href="#" className="hover:text-teal-500 transition-colors">Engineering Docs</a>
            <a href="#" className="hover:text-teal-500 transition-colors">Client Log</a>
          </div>
          <div className="mt-8 md:mt-0">© {new Date().getFullYear()} ATS Water Technologies. MADE IN INDIA</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
