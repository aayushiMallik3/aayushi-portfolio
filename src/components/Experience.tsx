import { motion } from 'motion/react';

export default function Experience() {
  return (
    <section id="experience" className="relative w-full py-32 md:py-48 bg-transparent overflow-hidden">
      {/* Partial triangle cropped at edge - right side */}
      <motion.svg
        className="absolute top-1/3 -right-24 w-80 h-80 opacity-[0.01] pointer-events-none"
        viewBox="0 0 100 100"
        initial={{ opacity: 0, rotate: 15 }}
        whileInView={{ opacity: 0.01, rotate: 15 }}
        viewport={{ once: true }}
        animate={{
          rotate: [15, 20, 15],
        }}
        transition={{
          rotate: {
            duration: 65,
            repeat: Infinity,
            ease: "easeInOut",
          }
        }}
      >
        <polygon points="50,10 10,90 90,90" fill="none" stroke="#E5E7EB" strokeWidth="0.3" />
      </motion.svg>

      {/* Animated orbital arcs */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        {/* Arc 1 - Top right */}
        <motion.path
          d="M 800 -100 Q 1200 200 1400 600"
          stroke="rgba(248, 250, 252, 0.03)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0, 0.03, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Arc 2 - Middle */}
        <motion.path
          d="M -100 400 Q 400 300 800 500"
          stroke="rgba(229, 231, 235, 0.025)"
          strokeWidth="1.5"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0, 0.025, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
        />

        {/* Arc 3 - Bottom left */}
        <motion.path
          d="M 200 800 Q 600 600 1000 700"
          stroke="rgba(248, 250, 252, 0.02)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0, 0.02, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 8,
          }}
        />

        {/* Orbital rings */}
        <motion.circle
          cx="20%"
          cy="70%"
          r="120"
          stroke="rgba(248, 250, 252, 0.015)"
          strokeWidth="0.5"
          fill="none"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: [0.8, 1.1, 0.8],
            opacity: [0, 0.015, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.circle
          cx="85%"
          cy="30%"
          r="80"
          stroke="rgba(229, 231, 235, 0.02)"
          strokeWidth="0.5"
          fill="none"
          initial={{ scale: 1, opacity: 0 }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0, 0.02, 0],
            rotate: [360, 0],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </svg>

      <div className="container mx-auto px-6 lg:px-12 xl:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[60vh]">
          {/* Left side - Section label and negative space */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="text-[#F8FAFC]/60 tracking-[0.3em] text-xs uppercase">
                Experience
              </span>
            </motion.div>
          </div>

          {/* Right side - Headline text */}
          <div className="lg:col-span-8">
            <div className="space-y-8">
              {/* Primary statement - bright white */}
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#F8FAFC] leading-[1.15] tracking-tight"
              >
                I build and lead systems where aerospace, AI, and human performance intersect.
              </motion.h2>

              {/* Secondary statement - muted grey */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                className="text-xl md:text-2xl lg:text-3xl text-[#E5E7EB]/70 leading-relaxed max-w-4xl"
              >
                My work spans research, engineering, and product design, with a focus on resilience, interpretability, and real world impact.
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#111827] to-transparent pointer-events-none" />
    </section>
  );
}