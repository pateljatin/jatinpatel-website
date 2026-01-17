'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    category: "Technical Foundation & Building",
    skills: [
      "Software Engineering (Bell Labs)", "Product Engineering", "Rapid Prototyping",
      "5+ Patents Filed", "Claude Code & AI Tools", "System Architecture",
      "Hands-on Building", "Technical Co-Founder (4 Startups)"
    ]
  },
  {
    category: "Product Leadership",
    skills: [
      "Product Strategy", "Platform Innovation", "AI Integration",
      "Consumer & Enterprise Products", "Go-to-Market Strategy",
      "Product Vision", "Roadmap Planning", "Stakeholder Management"
    ]
  },
  {
    category: "Domain Expertise",
    skills: [
      "Conversational AI", "Communication Platforms", "Mobile Commerce",
      "Real-time Systems", "Social Graph Analysis", "Multi-modal Experiences",
      "Windows Integration", "Enterprise Architecture"
    ]
  },
  {
    category: "Strategic Impact & Scale",
    skills: [
      "0-to-1 Products", "Scale (60M+ MAU)", "Monetization",
      "User Growth", "120+ Team Leadership", "Innovation",
      "Responsible AI", "Platform Thinking"
    ]
  }
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="min-h-screen py-20 px-4 relative overflow-hidden bg-slate-900">
      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            Skills & Expertise
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-electric-purple to-electric-cyan mx-auto rounded-full"></div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: catIndex * 0.1 }}
              className="glass-card p-6 rounded-xl"
            >
              {/* Category Header */}
              <h3 className="text-xl font-semibold text-white mb-6">
                {category.category}
              </h3>

              {/* Tag Cloud */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: catIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-slate-300 hover:text-white border border-white/10 hover:border-electric-cyan/30 transition-all duration-300 cursor-default text-sm"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-4 px-6 py-3 glass-card rounded-full">
            <span className="text-slate-400 text-sm">Patents Filed:</span>
            <span className="text-white font-semibold text-lg">5+</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400 text-sm">Startups Founded:</span>
            <span className="text-white font-semibold text-lg">4</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400 text-sm">Years Experience:</span>
            <span className="text-white font-semibold text-lg">20+</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
