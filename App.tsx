
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

const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-teal-500 origin-left z-[100]"
      style={{ scaleX }}
    />
  );
};

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1, backgroundColor: '#0d9488' }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 z-[60] p-4 rounded-full bg-slate-900 text-white shadow-2xl transition-colors"
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

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
      <ScrollProgress />
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
      <ScrollToTop />
    </div>
  );
};

export default App;
