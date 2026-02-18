
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Systems from './components/Systems';
import Products from './components/Products';
import Industries from './components/Industries';
import Services from './components/Services';
import CTA from './components/CTA';
import Footer from './components/Footer';
import WhyChoose from './components/WhyChoose';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const revealVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-50">
      <Navbar scrolled={scrolled} />

      <main>
        <Hero />

        <motion.section
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={revealVariants}
          className="py-24 bg-white"
        >
          <About />
        </motion.section>

        <motion.section
          id="systems"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={revealVariants}
          className="py-24 bg-slate-50"
        >
          <Systems />
        </motion.section>

        <motion.section
          id="products"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={revealVariants}
          className="py-24 bg-white"
        >
          <Products />
        </motion.section>

        <section id="why" className="py-24 bg-slate-900 text-white overflow-hidden">
          <WhyChoose />
        </section>

        <motion.section
          id="services"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={revealVariants}
          className="py-24 bg-white"
        >
          <Services />
        </motion.section>

        <motion.section
          id="industries"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={revealVariants}
          className="py-24 bg-slate-50"
        >
          <Industries />
        </motion.section>

        <section id="contact">
          <CTA />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
