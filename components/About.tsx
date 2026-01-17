'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Rocket, Zap, Users, Lightbulb, Code } from 'lucide-react';
import Image from 'next/image';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const principles = [
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Build 20 years ahead",
      description: "Anticipate future needs before they become obvious"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "AI amplifies craft",
      description: "Technology enhances human capability, not replaces it"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team excellence multiplies impact",
      description: "Invest deeply in people and culture"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Ship, learn, iterate",
      description: "Build with customers, not in isolation"
    }
  ];

  return (
    <section id="about" className="min-h-screen flex items-center py-20 px-4 relative overflow-hidden bg-slate-900">
      <div className="max-w-6xl mx-auto relative z-10 w-full" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            About
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-electric-purple to-electric-blue mx-auto rounded-full"></div>
        </motion.div>

        {/* Currently Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 glass-card p-8 rounded-2xl"
        >
          <h3 className="text-sm font-semibold text-electric-cyan uppercase tracking-wider mb-4">Currently</h3>
          <div className="space-y-3 text-slate-300">
            <p className="text-lg">
              Leading Microsoft Teams consumer strategy and AI integration
            </p>
            <p className="text-lg">
              Driving multi-modal experiences, monetization, and responsible AI features
            </p>
          </div>
        </motion.div>

        {/* Why I'm Different Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16 glass-card p-8 rounded-2xl border-2 border-electric-purple/20"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-gradient-to-br from-electric-purple to-electric-blue rounded-lg">
              <Code className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-sm font-semibold text-electric-purple uppercase tracking-wider">Why I'm Different</h3>
          </div>
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p className="text-lg">
              I started as a software engineer at Bell Labs, evolved into a product engineer, and eventually became a PM - but <span className="text-white font-semibold">I never stopped building</span>. While many PMs write specs, I prototype, validate, and ship. I've filed 5+ patents, built systems serving 100M+ interactions, and founded 4 startups where I was both product visionary and technical co-founder.
            </p>
            <p className="text-lg">
              In the AI era, this technical foundation matters more than ever. I don't just specify AI features - I build with Claude Code, validate with rapid prototypes, and understand systems deeply enough to make the right product tradeoffs.
            </p>
            <p className="text-lg">
              <span className="text-electric-cyan font-semibold">Product sense + technical chops = the Builder PM advantage.</span>
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-center">
          {/* Left side - Professional Photo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center md:justify-end"
          >
            <div className="relative" style={{ width: '256px', height: '256px' }}>
              {/* Subtle gradient glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-electric-purple via-electric-blue to-electric-cyan rounded-full blur-xl opacity-30"></div>

              {/* Photo container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/10 shadow-2xl">
                <Image
                  src="/images/profile.jpg"
                  alt="Jatin Patel"
                  width={256}
                  height={256}
                  className="object-cover w-full h-full"
                  priority
                  quality={75}
                />
              </div>
            </div>
          </motion.div>

          {/* Right side - Bio */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg text-slate-300 leading-relaxed">
              Strategic product leader with <span className="text-white font-semibold">20+ years</span> pioneering communication platforms.
            </p>

            <div className="space-y-4 pl-4 border-l-2 border-electric-purple/30">
              <p className="text-slate-300">
                <span className="text-electric-purple font-semibold">Bell Labs Pioneer</span> (2001-2011): Built foundational remote work technology
              </p>
              <p className="text-slate-300">
                <span className="text-electric-blue font-semibold">Serial Entrepreneur</span> (2011-2017): Founded 4 startups in commerce and AI
              </p>
              <p className="text-slate-300">
                <span className="text-electric-cyan font-semibold">Microsoft Product Leader</span> (2017-Present): Leading Teams to <span className="text-white font-semibold">60M+ MAU</span> with <span className="text-white font-semibold">3B+ monthly minutes</span>
              </p>
            </div>

            <p className="text-slate-400 text-sm italic pt-4">
              5+ patents filed in communication, AI, and social graph analysis
            </p>
          </motion.div>
        </div>

        {/* Principles Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">Product Principles</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {principles.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.02, x: 5 }}
                className="glass-card p-4 rounded-xl flex items-start gap-4 cursor-default group"
              >
                <div className="p-3 bg-gradient-to-br from-electric-purple to-electric-blue rounded-lg text-white group-hover:scale-110 transition-transform flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
