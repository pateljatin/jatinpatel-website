'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const projects = [
  {
    title: "Microsoft Teams Consumer Platform",
    description: "Led consumer strategy and product development, scaling to 60M+ monthly active users with 3B+ monthly minutes. Drove Windows 11 integration, AI roadmap, and monetization strategy with 9M+ paid conversions.",
    tech: ["Platform Scale", "AI Integration", "Windows 11", "Monetization"],
    image: "💬",
    color: "from-electric-purple to-electric-blue",
    impact: "60M+ MAU • 3B+ Monthly Minutes • 9M+ Paid Users"
  },
  {
    title: "Conversational AI Pioneer",
    description: "Built enterprise conversational AI platform at Pypestream 8+ years before ChatGPT. Deployed to Fortune 500 companies handling 100M+ monthly interactions with natural language understanding.",
    tech: ["Conversational AI", "NLP", "Enterprise SaaS", "Automation"],
    image: "🤖",
    color: "from-electric-blue to-electric-cyan",
    impact: "Fortune 500 • 100M+ Monthly Interactions • 8+ Years Early"
  },
  {
    title: "First iPhone Enterprise UC Client",
    description: "Pioneered mobile unified communications at Bell Labs, launching the first iPhone enterprise client in 2009. Deployed to 40+ Fortune 500 companies with 100K+ users and 90% adoption rate.",
    tech: ["Mobile UC", "iPhone SDK", "Enterprise", "Real-time Comms"],
    image: "📱",
    color: "from-electric-cyan to-electric-purple",
    impact: "40+ Fortune 500 • 100K+ Users • 90% Adoption"
  },
  {
    title: "Social Commerce Innovation",
    description: "Founded 48Bricks, pioneering social graph-based commerce. Patented Social Tree technology connecting influencers with brands, scaling to 100K+ users with innovative discovery algorithms.",
    tech: ["Social Graph", "Commerce Platform", "Influencer Tech", "Patents"],
    image: "🌳",
    color: "from-electric-purple to-electric-cyan",
    impact: "100K+ Users • Patented Technology • Social Commerce Pioneer"
  }
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="min-h-screen py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 to-navy-800"></div>

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-electric-purple to-electric-cyan">
            Featured Work
          </h2>
          <p className="text-slate-400 text-lg mb-6">Pioneering platforms that shaped the future of communication</p>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-purple to-electric-cyan mx-auto rounded-full"></div>
        </motion.div>

        {/* Featured Work Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative group"
            >
              <motion.div
                whileHover={{ y: -10 }}
                className="glass-card rounded-xl overflow-hidden h-full flex flex-col"
              >
                {/* Image/Icon Section */}
                <div className={`relative h-48 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}>
                  <motion.div
                    animate={{
                      scale: hoveredIndex === index ? 1.2 : 1,
                      rotate: hoveredIndex === index ? 5 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-8xl"
                  >
                    {project.image}
                  </motion.div>

                  {/* Gradient overlay on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIndex === index ? 0.3 : 0 }}
                    className="absolute inset-0 bg-black/50"
                  ></motion.div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-electric-cyan transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 flex-1 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Impact Metrics */}
                  <div className="mb-4 pb-4 border-b border-white/5">
                    <p className="text-xs font-semibold text-electric-cyan uppercase tracking-wide mb-1">Impact</p>
                    <p className="text-sm text-white font-medium">{project.impact}</p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                        className="px-3 py-1 text-xs font-semibold bg-white/5 hover:bg-white/10 rounded-full text-slate-400 border border-white/10 transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Animated border on hover */}
                <motion.div
                  className="absolute inset-0 rounded-xl border-2"
                  animate={{
                    borderColor: hoveredIndex === index ? 'rgba(0, 212, 255, 0.5)' : 'rgba(0, 0, 0, 0)'
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ pointerEvents: 'none' }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
