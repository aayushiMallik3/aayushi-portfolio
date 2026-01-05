import { motion } from 'motion/react';

// Import images using figma:asset scheme
import panelImage from 'figma:asset/475baebc5701df753298385834d564c98c38ee3f.png';
import viasatImage from 'figma:asset/f9f814b974ecc2d186e877a00c9ed2ee357791bd.png';
import redCarpetImage from 'figma:asset/268304c801085b4b5b797f537753c5898591c6de.png';
import rrChallengeImage from 'figma:asset/6f1041dfdd4ce87aaf4000db058356de189e5f7a.png';
import spaceWallImage from 'figma:asset/4a6b8e4a4337a4740d54993828496e5a2d5cc0b7.png';
import neonStageImage from 'figma:asset/70736f29fc5a705efe2a555bc1bf9b5955bac587.png';

const images = [panelImage, viasatImage, redCarpetImage, rrChallengeImage, spaceWallImage, neonStageImage];

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center bg-transparent overflow-hidden"
    >
      {/* Animated image gallery above the belt section */}
      <div className="absolute top-20 left-0 right-0 z-10">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-4 md:gap-6 lg:gap-8">
            {images.map((img, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden"
                initial={{ opacity: 0, y: -30, scale: 0.9 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 1.2,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
              >
                {/* Triangular clip path border effect */}
                <div className="absolute inset-0 border border-[#F8FAFC]/20 pointer-events-none z-10" />
                
                <motion.img
                  src={img}
                  alt={`Professional photo ${index + 1}`}
                  className="w-32 h-40 md:w-40 md:h-52 lg:w-48 lg:h-60 object-cover grayscale-[30%] opacity-90"
                  style={{ objectPosition: 'center 20%' }}
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 6 + index * 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5,
                  }}
                  whileHover={{
                    scale: 1.05,
                    grayscale: 0,
                    opacity: 1,
                    transition: { duration: 0.4 }
                  }}
                />
                
                {/* Small triangle corner accent */}
                <svg 
                  className="absolute bottom-2 right-2 w-3 h-3 opacity-30"
                  viewBox="0 0 100 100"
                >
                  <polygon points="50,20 20,80 80,80" fill="none" stroke="#F8FAFC" strokeWidth="3" />
                </svg>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Noise/grain texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }}
      />

      {/* Subtle gradient orbs */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#F8FAFC]/[0.02] blur-3xl rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.02, 0.035, 0.02],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main triangle with angular grid accents */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Large centered equilateral triangle */}
        <motion.svg
          className="absolute w-[140vw] h-[140vw] max-w-none"
          viewBox="0 0 1000 1000"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            rotate: [0, 2, 0, -2, 0],
          }}
          transition={{
            opacity: { duration: 1.2 },
            scale: { duration: 1.2 },
            rotate: {
              duration: 40,
              repeat: Infinity,
              ease: "easeInOut",
            }
          }}
        >
          {/* Main triangle outline with pulsing glow */}
          <motion.polygon
            points="500,100 100,850 900,850"
            fill="none"
            stroke="rgba(248, 250, 252, 0.15)"
            strokeWidth="1"
            animate={{
              strokeOpacity: [0.15, 0.25, 0.15],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Inner offset triangle */}
          <polygon
            points="500,150 150,820 850,820"
            fill="none"
            stroke="rgba(229, 231, 235, 0.05)"
            strokeWidth="0.5"
          />

          {/* Angular grid fragments aligned with triangle edges */}
          {/* Top vertex grid lines */}
          <line x1="500" y1="100" x2="500" y2="200" stroke="rgba(248, 250, 252, 0.08)" strokeWidth="0.5" />
          <line x1="480" y1="120" x2="520" y2="120" stroke="rgba(248, 250, 252, 0.06)" strokeWidth="0.5" />
          <line x1="470" y1="140" x2="530" y2="140" stroke="rgba(248, 250, 252, 0.04)" strokeWidth="0.5" />
          
          {/* Left vertex grid lines */}
          <line x1="100" y1="850" x2="200" y2="850" stroke="rgba(248, 250, 252, 0.08)" strokeWidth="0.5" />
          <line x1="120" y1="830" x2="120" y2="870" stroke="rgba(248, 250, 252, 0.06)" strokeWidth="0.5" />
          <line x1="140" y1="820" x2="140" y2="880" stroke="rgba(248, 250, 252, 0.04)" strokeWidth="0.5" />
          
          {/* Right vertex grid lines */}
          <line x1="900" y1="850" x2="800" y2="850" stroke="rgba(248, 250, 252, 0.08)" strokeWidth="0.5" />
          <line x1="880" y1="830" x2="880" y2="870" stroke="rgba(248, 250, 252, 0.06)" strokeWidth="0.5" />
          <line x1="860" y1="820" x2="860" y2="880" stroke="rgba(248, 250, 252, 0.04)" strokeWidth="0.5" />

          {/* Horizontal structural lines */}
          <line x1="300" y1="500" x2="700" y2="500" stroke="rgba(229, 231, 235, 0.03)" strokeWidth="0.5" strokeDasharray="4 8" />
          <line x1="250" y1="650" x2="750" y2="650" stroke="rgba(229, 231, 235, 0.03)" strokeWidth="0.5" strokeDasharray="4 8" />

          {/* Diagonal accent lines following triangle geometry */}
          <line x1="500" y1="100" x2="300" y2="500" stroke="rgba(248, 250, 252, 0.04)" strokeWidth="0.5" strokeDasharray="2 6" />
          <line x1="500" y1="100" x2="700" y2="500" stroke="rgba(248, 250, 252, 0.04)" strokeWidth="0.5" strokeDasharray="2 6" />
        </motion.svg>

        {/* Content centered in triangle */}
        <div className="relative z-10 text-center px-6 max-w-4xl">
          {/* Section label - My Orbit */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <span className="text-[#F8FAFC]/60 tracking-[0.3em] text-xs uppercase">
              My Orbit
            </span>
          </motion.div>

          {/* Micro-label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center justify-center gap-2 mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#E5E7EB]/20 bg-[#111827]/40 backdrop-blur-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-[#F8FAFC]" />
              <span className="text-xs tracking-[0.2em] text-[#E5E7EB]/80 uppercase">I am a</span>
            </div>
          </motion.div>

          {/* Main headline - stacked vertically */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tight leading-[0.95] mb-12"
          >
            <div className="text-[#F8FAFC] mb-2">human systems</div>
            <div className="text-[#F8FAFC]">engineer</div>
          </motion.h2>

          {/* Supporting line */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl lg:text-2xl text-[#E5E7EB]/70 mb-6 max-w-3xl mx-auto leading-relaxed"
          >
            I design systems at the intersection of aerospace, AI, and human performance.
          </motion.p>

          {/* Secondary line */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-sm md:text-base text-[#E5E7EB]/50 max-w-2xl mx-auto"
          >
            Research, products, and architectures built for real human constraints.
          </motion.p>
        </div>

        {/* Corner coordinate markers - technical detail */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute top-8 left-8 text-[#E5E7EB]/20 text-xs tracking-wider"
        >
          00.00°N
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="absolute top-8 right-8 text-[#E5E7EB]/20 text-xs tracking-wider"
        >
          00.00°E
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#E5E7EB]/20 text-xs tracking-wider"
        >
          SYSTEMS CORE
        </motion.div>
      </div>

      {/* Subtle gradient fade at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#111827] to-transparent pointer-events-none" />
    </section>
  );
}