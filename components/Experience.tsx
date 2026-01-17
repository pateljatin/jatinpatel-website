'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, Users, TrendingUp } from 'lucide-react';

const experiences = [
  {
    title: "Group Product Manager, Microsoft Teams",
    company: "Microsoft",
    period: "Nov 2017 - Present",
    scope: "Cross-functional • Strategic • Consumer Platform",
    team: "Leading 120+ person team across Design, Engineering, and Data",
    description: "Scaled Microsoft Teams consumer platform to 60M+ MAU with Windows 11 integration. Driving AI strategy, multi-modal experiences, and responsible AI features.",
    achievements: [
      "Scaled platform to 60M+ MAU with 3B+ monthly minutes",
      "Led Windows 11 integration and AI strategy roadmap",
      "Drove 9M+ paid user conversions and monetization strategy",
      "Filed 4 patents in communication and AI integration"
    ],
    color: "from-electric-purple to-electric-blue"
  },
  {
    title: "EVP Product",
    company: "Pypestream",
    period: "Oct 2015 - Nov 2017",
    scope: "Executive Leadership • Enterprise AI",
    team: "Led product organization for Fortune 500 deployments",
    description: "Built enterprise conversational AI platform 8+ years before ChatGPT. Pioneered customer service automation for major brands.",
    achievements: [
      "Deployed to Fortune 500 companies with 100M+ monthly interactions",
      "Built conversational AI 8+ years ahead of market",
      "Filed multiple patents in conversational AI and automation",
      "Scaled platform to handle enterprise-grade traffic"
    ],
    color: "from-electric-blue to-electric-cyan"
  },
  {
    title: "CTO & Co-Founder",
    company: "48Bricks",
    period: "Feb 2013 - Mar 2016",
    scope: "Founding Team • Social Commerce",
    team: "Built and led engineering team from 0 to 1",
    description: "Founded social commerce platform connecting influencers with brands. Pioneered social graph-based product discovery.",
    achievements: [
      "Scaled to 100K+ users across social commerce platform",
      "Patented Social Tree technology for influencer marketing",
      "Pioneered social graph analysis for product recommendations",
      "Built platform from concept to scale"
    ],
    color: "from-electric-cyan to-electric-purple"
  },
  {
    title: "CTO",
    company: "SlamAd",
    period: "May 2015 - Oct 2015",
    scope: "Technical Leadership • Conversational AI",
    team: "Led technical strategy and product development",
    description: "Built conversational AI for restaurant bookings and reservations, anticipating ChatGPT-style interactions by 8+ years.",
    achievements: [
      "Pioneered conversational AI for commerce 8+ years early",
      "Built natural language booking system",
      "Established technical architecture for scale"
    ],
    color: "from-electric-purple to-electric-blue"
  },
  {
    title: "Head of Product",
    company: "Speadi",
    period: "May 2012 - Feb 2013",
    scope: "Product Leadership • Mobile Commerce",
    team: "Led product strategy for location-based commerce",
    description: "Created real-time competitive deals platform with GPS-based gamified commerce experience.",
    achievements: [
      "Launched GPS-based gamified commerce platform",
      "Pioneered real-time competitive deals model",
      "Built mobile-first shopping experience"
    ],
    color: "from-electric-blue to-electric-cyan"
  },
  {
    title: "Principal Architect",
    company: "AT&T",
    period: "Nov 2011 - Apr 2012",
    scope: "Enterprise Strategy",
    team: "Led enterprise BYOD strategy and architecture",
    description: "Drove BYOD (Bring Your Own Device) strategy for enterprise customers. Led Toggle product development.",
    achievements: [
      "Established enterprise BYOD strategy at scale",
      "Led Toggle product architecture and strategy",
      "Bridged consumer and enterprise use cases"
    ],
    color: "from-electric-cyan to-electric-purple"
  },
  {
    title: "Director, Mobile UC",
    company: "Avaya / Bell Labs",
    period: "May 2001 - Nov 2011",
    scope: "Strategic • Innovation • Enterprise",
    team: "Led teams building foundational remote work technology",
    description: "Pioneered mobile unified communications. Built first iPhone enterprise client (2009), enabling mobile workforce transformation.",
    achievements: [
      "Launched first iPhone enterprise UC client in 2009",
      "Deployed to 40+ Fortune 500 companies with 100K+ users",
      "Achieved 90% user adoption rate across deployments",
      "Filed multiple patents in mobile communications",
      "Built foundational technology for remote work era"
    ],
    color: "from-electric-purple to-electric-cyan"
  }
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="min-h-screen py-20 px-4 relative bg-slate-900">
      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            Experience
          </h2>
          <p className="text-slate-400 text-lg mb-6">20+ years pioneering communication and AI platforms</p>
          <div className="w-16 h-1 bg-gradient-to-r from-electric-purple to-electric-cyan mx-auto rounded-full"></div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Thinner vertical line - hidden on mobile for cleaner layout */}
          <div className="absolute hidden md:block left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-electric-purple via-electric-blue to-electric-cyan opacity-30"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:gap-8`}
              >
                {/* Smaller timeline dot - hidden on mobile */}
                <motion.div
                  whileHover={{ scale: 1.3 }}
                  className="absolute hidden md:block left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-gradient-to-r from-electric-purple to-electric-blue z-10 shadow-lg shadow-electric-purple/50"
                ></motion.div>

                {/* Content card */}
                <motion.div
                  whileHover={{ scale: 1.01, y: -5 }}
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                  }`}
                >
                  <div className="glass-card p-4 sm:p-6 rounded-xl group transition-all duration-300">
                    {/* Header */}
                    <div className="flex items-start gap-3 mb-3 flex-col">
                      <div className="flex items-start gap-2 w-full">
                        <div className={`p-2 sm:p-2.5 bg-gradient-to-r ${exp.color} rounded-lg flex-shrink-0`}>
                          <Briefcase className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white break-words">
                            {exp.title}
                          </h3>
                          <p className="text-electric-cyan font-medium text-sm">{exp.company}</p>
                        </div>
                      </div>

                      {/* Metadata badges */}
                      <div className="flex flex-wrap gap-2 text-xs w-full">
                        <div className="flex items-center gap-1.5 px-2 sm:px-3 py-1 bg-white/5 rounded-full text-slate-400 border border-white/10">
                          <Calendar className="w-3 h-3 flex-shrink-0" />
                          <span className="whitespace-nowrap">{exp.period}</span>
                        </div>
                        <div className="px-2 sm:px-3 py-1 bg-white/5 rounded-full text-slate-400 border border-white/10 break-words">
                          {exp.scope}
                        </div>
                      </div>
                    </div>

                    {/* Team size indicator */}
                    <div className="flex items-start gap-2 mb-4 text-slate-400 text-sm">
                      <Users className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span className="break-words">{exp.team}</span>
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 mb-4 leading-relaxed text-sm">
                      {exp.description}
                    </p>

                    {/* Impact achievements */}
                    <div className="space-y-2.5">
                      <div className="flex items-center gap-2 text-white font-medium text-sm mb-2">
                        <TrendingUp className="w-4 h-4 text-electric-cyan" />
                        <span>Key Impact</span>
                      </div>
                      {exp.achievements.map((achievement, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.5, delay: index * 0.1 + i * 0.05 }}
                          className="flex items-start gap-2.5"
                        >
                          <div className="w-1.5 h-1.5 bg-electric-cyan rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-sm text-slate-400 leading-relaxed">{achievement}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
