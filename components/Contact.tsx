'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Linkedin, Send } from 'lucide-react';

const socialLinks = [
  {
    name: "LinkedIn",
    icon: <Linkedin className="w-5 h-5" />,
    url: "https://linkedin.com/in/jatin1patel",
    hoverColor: "group-hover:text-blue-400"
  },
  {
    name: "Email",
    icon: <Mail className="w-5 h-5" />,
    url: "mailto:jatin@jatinpatel.ai",
    hoverColor: "group-hover:text-electric-cyan"
  }
];

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
          {/* Email CTA */}
          <motion.div
            className="mb-12 text-center"
          >
            <motion.a
              href="mailto:jatin@jatinpatel.ai"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full text-white font-medium shadow-lg hover:bg-white/15 hover:border-white/20 hover:shadow-xl hover:shadow-electric-purple/20 transition-all duration-300 group"
            >
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              Send me an email
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-center text-slate-400 mb-8">
              Or connect with me on
            </h3>

            <div className="flex justify-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative"
                >
                  <div className="glass-card p-4 rounded-xl flex flex-col items-center gap-2 hover:bg-white/10 transition-all min-w-[80px]">
                    {/* Icon */}
                    <div className={`text-slate-400 transition-colors ${social.hoverColor}`}>
                      {social.icon}
                    </div>

                    {/* Label */}
                    <span className={`text-slate-400 text-xs font-medium transition-colors ${social.hoverColor}`}>
                      {social.name}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
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
