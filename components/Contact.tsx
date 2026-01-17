'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Linkedin } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="min-h-screen py-20 px-4 relative overflow-hidden flex items-center bg-slate-900">
      <div className="max-w-3xl mx-auto relative z-10 w-full" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-electric-purple to-electric-cyan mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto font-light">
            Let's discuss how we can work together to build impactful products
          </p>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card p-12 rounded-2xl"
        >
          {/* LinkedIn CTA */}
          <div className="text-center">
            <h3 className="text-lg font-medium text-slate-400 mb-8">
              Connect with me on LinkedIn
            </h3>

            <motion.a
              href="https://linkedin.com/in/jatin1patel"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-block"
            >
              <div className="glass-card p-6 rounded-xl flex flex-col items-center gap-3 hover:bg-white/10 transition-all min-w-[120px]">
                <div className="text-slate-400 transition-colors group-hover:text-blue-400">
                  <Linkedin className="w-8 h-8" />
                </div>
                <span className="text-slate-400 text-sm font-medium transition-colors group-hover:text-blue-400">
                  LinkedIn
                </span>
              </div>
            </motion.a>
          </div>

          {/* Availability Status */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 pt-8 border-t border-white/5 text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm font-medium">
                Available for new opportunities
              </span>
            </div>
            <p className="text-slate-500 text-sm">
              Open to product leadership roles and advisory positions
            </p>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-12 text-slate-600 text-sm"
        >
          <p>© 2026 Jatin Patel. Built with Next.js & Framer Motion</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
