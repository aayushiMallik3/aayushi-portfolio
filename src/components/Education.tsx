import { motion } from 'motion/react';

export default function Education() {
  return (
    <section
      id="education"
      className="relative py-32 md:py-40 lg:py-48 bg-transparent overflow-hidden"
    >
      {/* Small wireframe triangle - technical accent */}
      <motion.svg 
        className="absolute top-20 right-12 w-16 h-16 opacity-[0.018] pointer-events-none" 
        viewBox="0 0 100 100"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.018 }}
        viewport={{ once: true }}
        animate={{
          rotate: [0, 6, 0],
        }}
        transition={{
          rotate: {
            duration: 58,
            repeat: Infinity,
            ease: "easeInOut",
          }
        }}
      >
        <polygon points="50,20 20,80 80,80" fill="none" stroke="#F8FAFC" strokeWidth="0.3" />
      </motion.svg>
      <svg className="absolute bottom-32 left-16 w-16 h-16 opacity-[0.02] pointer-events-none" viewBox="0 0 100 100">
        <polygon points="50,10 10,90 90,90" fill="none" stroke="#F8FAFC" strokeWidth="0.5" />
      </svg>

      <div className="container mx-auto px-6 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24">
          {/* Left side - Section label */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="text-[#F8FAFC]/60 tracking-[0.3em] text-xs uppercase">
                Education
              </span>
            </motion.div>
          </div>

          {/* Right side - Text content */}
          <div className="lg:col-span-9 space-y-16 max-w-4xl">
            {/* Primary text block - Academic */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-2xl md:text-3xl lg:text-4xl text-[#F8FAFC] leading-[1.5] tracking-tight">
                I'm an aerospace engineering student at Rutgers University–New Brunswick, with a minor in mathematics and a concentration in energy. My academic work focuses on space systems, applied machine learning, and how complex technical systems behave under real world constraints.
              </p>
            </motion.div>

            {/* Subtle visual separator */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="w-16 h-px bg-[#F8FAFC]/10 origin-left"
            />

            {/* Secondary text block - Personal & exploratory */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.5 }}
              className="space-y-8"
            >
              <p className="text-xl md:text-2xl text-[#E5E7EB]/80 leading-[1.6]">
                Outside the classroom, I build and lead research driven projects at the intersection of aerospace, AI, and human performance. My work spans startup development, systems design, and interdisciplinary research, with a focus on impact, interpretability, and long term thinking.
              </p>
              
              {/* Directional line */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
                className="text-base md:text-lg text-[#E5E7EB]/50"
              >
                Learn more about my work below.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}