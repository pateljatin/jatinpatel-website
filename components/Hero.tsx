'use client';

import { motion } from 'framer-motion';
import { ChevronDown, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Deep slate background */}
      <div className="absolute inset-0 bg-slate-900"></div>

      {/* Large animated gradient orb */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 w-[800px] h-[800px] rounded-full opacity-60 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(91, 141, 239, 0.3) 40%, rgba(34, 211, 238, 0.2) 70%, transparent 100%)',
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          {/* Title */}
          <motion.h1
            className="text-6xl md:text-8xl font-bold text-white tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Jatin Patel
          </motion.h1>

          {/* Role & Company */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="space-y-4"
          >
            <p className="text-2xl md:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-electric-purple via-electric-blue to-electric-cyan">
              Group Product Manager | Microsoft Teams
            </p>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-light">
              Building products that amplify connection and capability through AI
            </p>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex items-center justify-center gap-2 text-slate-500"
            >
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Redmond, Washington</span>
            </motion.div>
          </motion.div>

        </motion.div>

        {/* Subtle scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-slate-500"
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
