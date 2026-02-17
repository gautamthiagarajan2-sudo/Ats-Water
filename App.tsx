
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Systems from './components/Systems';
import Products from './components/Products';
import WhyChoose from './components/WhyChoose';
import Industries from './components/Industries';
import Services from './components/Services';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Gallery from './components/Gallery';





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
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">

      <Navbar scrolled={scrolled} />

      <main>
        <Hero />

        <motion.section
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={revealVariants}
          className="py-32 bg-white"
        >
          <About />
        </motion.section>

        <motion.section
          id="systems"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={revealVariants}
          className="py-32 bg-slate-50/50"
        >
          <Systems />
        </motion.section>

        <motion.section
          id="products"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={revealVariants}
          className="py-32 bg-white"
        >
          <Products />
        </motion.section>

        <section id="why" className="py-32 bg-slate-950 text-white overflow-hidden relative">
          <WhyChoose />
        </section>

        <motion.section
          id="industries"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={revealVariants}
          className="py-32 bg-slate-50/50"
        >
          <Industries />
        </motion.section>

        <motion.section
          id="gallery"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={revealVariants}
          className="py-32 bg-white"
        >
          <Gallery />
        </motion.section>

        <motion.section
          id="services"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={revealVariants}
          className="py-32 bg-white"
        >
          <Services />
        </motion.section>

        <section id="contact" className="relative">
          <CTA />
        </section>
      </main>

      <Footer />

    </div>
  );
};

export default App;
