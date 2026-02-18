
import React from 'react';
import { MapPin, Phone, Mail, ShieldCheck, Award, Factory, Building2 } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 pt-24 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <img src="/logo.png" alt="ATS Water Technologies" className="h-16 w-auto object-contain mb-6" />
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              {COMPANY_INFO.name} - One of the leading manufacturers of Water Treatment & Commercial Purification Systems in India.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                <span className="text-xs font-bold text-slate-300">24/7 Service Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                <span className="text-xs font-bold text-slate-300">Custom Engineering Solutions</span>
              </div>
            </div>
          </div>

          {/* Corporate Office */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Corporate Office</h4>
            <div className="flex space-x-3 mb-6">
              <Building2 className="w-5 h-5 text-teal-500 flex-shrink-0 mt-1" />
              <p className="text-sm leading-relaxed">{COMPANY_INFO.corporateAddress}</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-teal-500" />
                <div>
                  <span className="text-white font-bold text-sm">{COMPANY_INFO.phone}</span>
                  <span className="text-slate-500 text-xs block">{COMPANY_INFO.phone2}</span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-teal-500" />
                <span className="text-white font-bold text-sm">{COMPANY_INFO.email}</span>
              </div>
            </div>
          </div>

          {/* Factory Works */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Factory Works</h4>
            <div className="flex space-x-3 mb-6">
              <Factory className="w-5 h-5 text-teal-500 flex-shrink-0 mt-1" />
              <p className="text-sm leading-relaxed">{COMPANY_INFO.factoryAddress}</p>
            </div>
            <div className="p-4 bg-white/5 rounded-xl border border-white/5">
              <span className="text-teal-500 font-bold text-xs uppercase">ISI Consultancy</span>
              <p className="text-xs text-slate-400 mt-1">Complete Turnkey PDW Setup & BIS Liaison</p>
            </div>
          </div>

          {/* Quick Links & Certifications */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2 mb-6">
              {['Home', 'About', 'Products', 'Systems', 'Services', 'Contact'].map((link) => (
                <button 
                  key={link} 
                  onClick={() => scrollToSection(link.toLowerCase())}
                  className="text-left text-sm text-slate-400 hover:text-teal-500 transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Certifications</h4>
            <div className="flex space-x-3">
              <div className="p-4 bg-white/5 rounded-xl border border-white/5 flex flex-col items-center">
                <ShieldCheck className="w-6 h-6 text-teal-500 mb-1" />
                <span className="text-[10px] font-bold text-white">ISO 9001</span>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/5 flex flex-col items-center">
                <Award className="w-6 h-6 text-teal-500 mb-1" />
                <span className="text-[10px] font-bold text-white">MSME</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600">
          <p>© {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved. Made in India.</p>
          <p className="mt-4 md:mt-0">
            <a href={`https://${COMPANY_INFO.website}`} className="text-teal-500 hover:text-teal-400">{COMPANY_INFO.website}</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
