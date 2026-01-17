'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, Target, TrendingUp } from 'lucide-react';

const projects = [
  {
    title: "AI Workflow Automation Platform",
    problem: "Teams spent 15+ hours per week on repetitive operational tasks, reducing time for strategic work",
    outcome: "60% reduction in task completion time • 100K+ active users • $5M ARR",
    role: "Led product strategy, roadmap, and cross-functional execution with design and engineering teams",
    tech: ["Next.js", "TypeScript", "OpenAI", "PostgreSQL"],
    image: "🤖",
    color: "from-electric-purple to-electric-blue",
    github: "#",
    demo: "#"
  },
  {
    title: "Enterprise Analytics Dashboard",
    problem: "Business leaders lacked real-time visibility into key metrics, leading to delayed decision-making",
    outcome: "4x faster insights • 98% user satisfaction • Adopted by 500+ enterprise customers",
    role: "Owned end-to-end product development from concept to launch, including user research and market validation",
    tech: ["React", "D3.js", "Node.js", "Redis"],
    image: "📊",
    color: "from-electric-blue to-electric-cyan",
    github: "#",
    demo: "#"
  },
  {
    title: "Collaboration Hub for Remote Teams",
    problem: "Distributed teams struggled with asynchronous communication and context switching across 10+ tools",
    outcome: "40% improvement in team productivity • 25% reduction in meetings • 50K+ teams migrated",
    role: "Defined product vision and strategy, conducted competitive analysis, and drove go-to-market execution",
    tech: ["Next.js", "WebSocket", "GraphQL", "AWS"],
    image: "💬",
    color: "from-electric-cyan to-electric-purple",
    github: "#",
    demo: "#"
  },
  {
    title: "Developer Experience Platform",
    problem: "Engineering teams faced 30+ minute deployment cycles and limited observability into production issues",
    outcome: "80% faster deployments • 50% reduction in incidents • Adopted by 200+ engineering orgs",
    role: "Led product discovery, prioritization, and partnership with engineering to ship developer-first features",
    tech: ["React", "Docker", "Kubernetes", "Terraform"],
    image: "⚡",
    color: "from-electric-purple to-electric-cyan",
    github: "#",
    demo: "#"
  }
];

const FeaturedWork = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="featured-work" className="min-h-screen py-20 px-4 relative overflow-hidden bg-slate-900">
      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            Featured Work
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-electric-purple to-electric-cyan mx-auto rounded-full"></div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative group"
            >
              <motion.div
                whileHover={{ y: -5 }}
                className="glass-card rounded-xl overflow-hidden h-full flex flex-col transition-all duration-300"
              >
                {/* Icon header */}
                <div className={`relative h-32 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}>
                  <motion.div
                    animate={{
                      scale: hoveredIndex === index ? 1.15 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-7xl"
                  >
                    {project.image}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col space-y-4">
                  <h3 className="text-2xl font-semibold text-white">
                    {project.title}
                  </h3>

                  {/* Problem statement */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-4 h-4 text-electric-purple" />
                      <span className="text-xs font-semibold text-electric-purple uppercase tracking-wider">Problem</span>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  {/* Outcome with metrics */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-4 h-4 text-electric-cyan" />
                      <span className="text-xs font-semibold text-electric-cyan uppercase tracking-wider">Outcome</span>
                    </div>
                    <p className="text-sm text-white font-medium leading-relaxed">
                      {project.outcome}
                    </p>
                  </div>

                  {/* Role */}
                  <div className="flex-1">
                    <div className="mb-2">
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">My Role</span>
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {project.role}
                    </p>
                  </div>

                  {/* Tech stack - subtle footer */}
                  <div className="pt-4 border-t border-white/5">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs bg-white/5 rounded text-slate-500 border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover overlay with links */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  className="absolute top-4 right-4 flex items-center gap-2"
                >
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <Github className="w-5 h-5 text-white" />
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 text-white" />
                  </motion.a>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
