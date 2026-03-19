'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  image: string;
  color: string;
  impact: string;
  liveUrl: string | null;
  githubUrl: string | null;
}

const projects: Project[] = [
  {
    title: "Civic Brief",
    subtitle: "Open Source Civic AI Platform",
    description: "Conceived and launched solo using Claude Code and Claude API. Converts government budgets, zoning amendments, legislation, and meeting minutes into plain-language summaries in the languages communities actually speak.",
    tech: ["Next.js", "TypeScript", "Supabase", "Claude API", "Vercel"],
    image: "🏛️",
    color: "from-electric-purple to-electric-blue",
    impact: "213 US counties with zero local news • 4B+ citizens in non-dominant languages",
    liveUrl: "https://civic-brief.vercel.app",
    githubUrl: "https://github.com/pateljatin/civic-brief"
  },
  {
    title: "PeopleBuilt.ai",
    subtitle: "AI App Discovery Platform",
    description: "Curated directory of apps built with AI tools like Claude, Cursor, ChatGPT, and v0, where creators can discover, submit, and claim ownership of their apps. Built from concept to production in weekend sprint sessions.",
    tech: ["Next.js", "TypeScript", "Supabase", "Vercel", "OpenAI API"],
    image: "🤖",
    color: "from-electric-blue to-electric-cyan",
    impact: "500+ apps seeded • 116+ creators • 7 AI tools tracked",
    liveUrl: "https://peoplebuilt.ai",
    githubUrl: null
  },
  {
    title: "Multiple AI-Native Products",
    subtitle: "Stealth, Active Development",
    description: "Building multiple AI-native consumer products in stealth using Claude Code, GitHub Copilot, and modern full-stack development.",
    tech: ["Claude Code", "GitHub Copilot", "Full-Stack"],
    image: "🔬",
    color: "from-electric-cyan to-electric-purple",
    impact: "Active development, 2025-Present",
    liveUrl: null,
    githubUrl: null
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
          <p className="text-slate-400 text-lg mb-6">Building AI-native products from concept to production</p>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-purple to-electric-cyan mx-auto rounded-full"></div>
        </motion.div>

        {/* Featured Work Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
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
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-electric-cyan transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-electric-cyan text-sm font-medium mb-3">{project.subtitle}</p>
                  <p className="text-gray-400 mb-4 flex-1 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Impact Metrics */}
                  <div className="mb-4 pb-4 border-b border-white/5">
                    <p className="text-xs font-semibold text-electric-cyan uppercase tracking-wide mb-1">Impact</p>
                    <p className="text-sm text-white font-medium">{project.impact}</p>
                  </div>

                  {/* Tech Stack + Links */}
                  <div className="flex flex-wrap gap-2 items-center">
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
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} live`}
                        className="ml-auto flex items-center gap-1 px-3 py-1 text-xs font-semibold text-electric-cyan border border-electric-cyan/30 rounded-full hover:bg-electric-cyan/10 transition-colors"
                      >
                        <ExternalLink className="w-3 h-3" />
                        Live
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} on GitHub`}
                        className="flex items-center gap-1 px-3 py-1 text-xs font-semibold text-slate-400 border border-white/10 rounded-full hover:bg-white/10 transition-colors"
                      >
                        <Github className="w-3 h-3" />
                        GitHub
                      </a>
                    )}
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
