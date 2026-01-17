'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award } from 'lucide-react';

const education = [
  {
    degree: "Bachelor of Engineering, Computer Engineering",
    institution: "Stevens Institute of Technology",
    period: "1997 - 2001",
    description: "Focused on computer engineering fundamentals, software development, and system architecture. Built strong foundation in engineering principles.",
    achievements: [
      "Dean's List recognition",
      "Phi Theta Kappa Honor Society member",
      "Early adopter of mobile development technologies"
    ]
  }
];

const achievements = [
  "5+ Patents in Communication & AI",
  "First iPhone Enterprise UC Client (2009)",
  "Conversational AI Pioneer (2015, pre-ChatGPT)",
  "60M+ MAU Platform Scale at Microsoft",
  "4 Startups Founded in Commerce & AI",
  "20+ Years Platform Leadership"
];

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="min-h-screen py-20 px-4 relative overflow-hidden bg-slate-900">
      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            Education & Recognition
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-electric-purple to-electric-cyan mx-auto rounded-full"></div>
        </motion.div>

        {/* Education Item */}
        <div className="mb-16">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="glass-card p-8 rounded-xl transition-all duration-300 max-w-4xl mx-auto"
            >
              {/* Icon and Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-electric-purple to-electric-blue rounded-lg flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-white mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-electric-cyan font-medium text-lg">{edu.institution}</p>
                  <p className="text-slate-500 text-sm">{edu.period}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-300 mb-4 leading-relaxed">
                {edu.description}
              </p>

              {/* Achievements */}
              <div className="space-y-2">
                {edu.achievements.map((achievement, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    className="flex items-start gap-2"
                  >
                    <div className="w-1.5 h-1.5 bg-electric-cyan rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-slate-400">{achievement}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Career Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glass-card p-8 rounded-xl max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-br from-electric-purple to-electric-cyan rounded-lg">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-white">
              Career Highlights & Recognition
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-center gap-3 p-4 bg-white/5 hover:bg-white/10 rounded-lg transition-all duration-300 group"
              >
                <div className="w-2 h-2 bg-gradient-to-r from-electric-purple to-electric-cyan rounded-full group-hover:scale-125 transition-transform flex-shrink-0"></div>
                <span className="text-slate-300 group-hover:text-white transition-colors text-sm">
                  {achievement}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Notable Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-8 pt-8 border-t border-white/5"
          >
            <p className="text-slate-400 italic text-center">
              "Building 20 years ahead - from pioneering mobile UC at Bell Labs (2001) to anticipating conversational AI (2015) to scaling AI-native collaboration at Microsoft."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
