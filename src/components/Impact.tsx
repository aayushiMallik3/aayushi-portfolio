import { motion } from 'motion/react';
import { Sparkles, Video, Mic, Users, Heart, Rocket } from 'lucide-react';

const impactItems = [
  {
    icon: Sparkles,
    title: 'young4STEM — Newsletter Lead',
    excerpt: 'I built and manage the organization\'s newsletter pipeline, featuring student stories, STEM guidance, and career pathways. I make STEM feel accessible and empowering for early learners.',
  },
  {
    icon: Video,
    title: 'young4STEM — YouTube Launch',
    excerpt: 'I launched our YouTube presence and created digestible, story-driven content explaining STEM careers, projects, and pathways. The goal is to spark curiosity and build long-term confidence.',
  },
  {
    icon: Rocket,
    title: 'young4STEM — Future Founders Cohort',
    excerpt: 'As part of the Future Founders Cohort, I helped guide student founders through early venture development, offering feedback on product direction, technical feasibility, and impact-driven decision making.',
  },
  {
    icon: Mic,
    title: 'Aayushi Vocals — Teaching Impact',
    excerpt: 'Through my vocal studio, I\'ve helped dozens of students develop discipline, artistry, and courage. Many walk in shy and leave ready to perform with ease.',
  },
  {
    icon: Users,
    title: 'SWE — SWELL Mentor',
    excerpt: 'I\'ve mentored 10+ women in engineering, offering guidance on classes, internships, projects, and building confidence in technical environments.',
  },
];

export default function Impact() {
  return (
    <section id="impact" className="relative py-32 bg-transparent overflow-hidden">
      {/* Triangular section divider marker */}
      <motion.div 
        className="absolute top-0 left-1/2 -translate-x-1/2 flex items-center gap-2"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <svg className="w-3 h-3 opacity-40" viewBox="0 0 100 100">
          <polygon points="50,20 20,80 80,80" fill="none" stroke="#E5E7EB" strokeWidth="2" />
        </svg>
      </motion.div>

      {/* Angular Visual Accents - Large architectural triangle with grid */}
      <motion.svg
        className="absolute top-1/4 left-[10%] w-32 h-32 opacity-[0.04] pointer-events-none"
        viewBox="0 0 200 200"
        initial={{ opacity: 0, rotate: 0 }}
        whileInView={{ opacity: 0.04, rotate: 0 }}
        viewport={{ once: true }}
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 52,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Main triangle */}
        <polygon points="100,40 40,160 160,160" fill="none" stroke="#F8FAFC" strokeWidth="1" />
        {/* Inner offset triangle for depth */}
        <polygon points="100,55 52,145 148,145" fill="none" stroke="#E5E7EB" strokeWidth="0.5" />
        {/* Grid fragments aligned with vertices */}
        <line x1="100" y1="40" x2="100" y2="20" stroke="#E5E7EB" strokeWidth="0.4" />
        <line x1="40" y1="160" x2="20" y2="160" stroke="#E5E7EB" strokeWidth="0.4" />
        <line x1="160" y1="160" x2="180" y2="160" stroke="#E5E7EB" strokeWidth="0.4" />
        {/* Horizontal dashed lines for technical schematic feel */}
        <line x1="40" y1="100" x2="160" y2="100" stroke="#E5E7EB" strokeWidth="0.3" strokeDasharray="4 3" />
        <line x1="50" y1="130" x2="150" y2="130" stroke="#E5E7EB" strokeWidth="0.3" strokeDasharray="4 3" />
        {/* Diagonal accent lines following triangle geometry */}
        <line x1="100" y1="40" x2="40" y2="160" stroke="#F8FAFC" strokeWidth="0.3" strokeDasharray="2 4" opacity="0.5" />
        <line x1="100" y1="40" x2="160" y2="160" stroke="#F8FAFC" strokeWidth="0.3" strokeDasharray="2 4" opacity="0.5" />
      </motion.svg>

      {/* Angular accent - Right side triangle with structural lines */}
      <motion.svg
        className="absolute top-1/2 right-[8%] w-28 h-28 opacity-[0.03] pointer-events-none"
        viewBox="0 0 200 200"
        initial={{ opacity: 0, rotate: 15 }}
        whileInView={{ opacity: 0.03, rotate: 15 }}
        viewport={{ once: true }}
        animate={{
          rotate: [15, 20, 15],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 58,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Main triangle */}
        <polygon points="100,50 50,150 150,150" fill="none" stroke="#F8FAFC" strokeWidth="1" />
        {/* Inner offset triangle */}
        <polygon points="100,65 60,135 140,135" fill="none" stroke="#E5E7EB" strokeWidth="0.5" />
        {/* Structural lines from vertices */}
        <line x1="100" y1="50" x2="100" y2="30" stroke="#E5E7EB" strokeWidth="0.4" strokeDasharray="3 2" />
        <line x1="50" y1="150" x2="30" y2="170" stroke="#E5E7EB" strokeWidth="0.4" strokeDasharray="3 2" />
        <line x1="150" y1="150" x2="170" y2="170" stroke="#E5E7EB" strokeWidth="0.4" strokeDasharray="3 2" />
        {/* Horizontal technical lines */}
        <line x1="50" y1="100" x2="150" y2="100" stroke="#E5E7EB" strokeWidth="0.3" strokeDasharray="5 3" />
      </motion.svg>

      {/* Small angular grid fragment - Bottom left */}
      <motion.svg
        className="absolute bottom-1/4 left-[15%] w-24 h-24 opacity-[0.03] pointer-events-none"
        viewBox="0 0 100 100"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.03 }}
        viewport={{ once: true }}
        animate={{
          x: [0, 5, 0],
          y: [0, -5, 0],
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Triangle with grid fragments */}
        <polygon points="50,20 20,80 80,80" fill="none" stroke="#E5E7EB" strokeWidth="0.6" />
        <polygon points="50,30 27,70 73,70" fill="none" stroke="#F8FAFC" strokeWidth="0.3" />
        {/* Diagonal accents */}
        <line x1="35" y1="50" x2="65" y2="50" stroke="#E5E7EB" strokeWidth="0.3" strokeDasharray="3 2" />
        <line x1="30" y1="65" x2="70" y2="65" stroke="#E5E7EB" strokeWidth="0.3" strokeDasharray="3 2" />
      </motion.svg>

      {/* Technical schematic lines - Floating horizontal dashed lines */}
      <motion.svg
        className="absolute top-[15%] right-[25%] w-40 h-2 opacity-[0.05] pointer-events-none"
        viewBox="0 0 200 10"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 0.05, x: 0 }}
        viewport={{ once: true }}
      >
        <line x1="0" y1="5" x2="200" y2="5" stroke="#E5E7EB" strokeWidth="0.5" strokeDasharray="8 4" />
      </motion.svg>

      <motion.svg
        className="absolute bottom-[20%] right-[35%] w-32 h-2 opacity-[0.04] pointer-events-none"
        viewBox="0 0 200 10"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 0.04, x: 0 }}
        viewport={{ once: true }}
      >
        <line x1="0" y1="5" x2="200" y2="5" stroke="#F8FAFC" strokeWidth="0.4" strokeDasharray="6 3" />
      </motion.svg>

      {/* Small wireframe triangle accent - KEPT from original */}
      <motion.svg
        className="absolute bottom-1/3 right-[15%] w-16 h-16 opacity-[0.02] pointer-events-none"
        viewBox="0 0 100 100"
        initial={{ opacity: 0, rotate: 12 }}
        whileInView={{ opacity: 0.02, rotate: 12 }}
        viewport={{ once: true }}
        animate={{
          rotate: [12, 18, 12],
          y: [0, -8, 0],
        }}
        transition={{
          duration: 48,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <polygon points="50,20 20,80 80,80" fill="none" stroke="#E5E7EB" strokeWidth="0.3" />
      </motion.svg>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-[#F8FAFC] tracking-[0.3em] text-sm">IMPACT</span>
        </motion.div>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mb-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl text-[#F8FAFC] mb-6 leading-tight">
            Impact that starts local and scales with community
          </h2>
        </motion.div>

        {/* Impact Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {impactItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <motion.div
                  className="absolute -inset-1 rounded-2xl bg-[#F8FAFC]/5 opacity-0 group-hover:opacity-100 transition-opacity blur-xl"
                />
                <div className="relative p-8 rounded-2xl bg-[#0B0D12]/60 backdrop-blur-sm border border-[#E5E7EB]/10 hover:border-[#F8FAFC]/20 transition-colors overflow-hidden"> {/* Faint grid fragments and vector traces aligned with triangle edges */}
                  <svg className="absolute top-0 right-0 w-24 h-24 opacity-[0.03] pointer-events-none" viewBox="0 0 100 100">
                    {/* Triangle trace aligned with card corner */}
                    <polygon points="50,10 20,60 80,60" fill="none" stroke="#F8FAFC" strokeWidth="0.5" />
                    {/* Grid fragments */}
                    <line x1="50" y1="10" x2="50" y2="30" stroke="#E5E7EB" strokeWidth="0.3" />
                    <line x1="40" y1="20" x2="60" y2="20" stroke="#E5E7EB" strokeWidth="0.3" />
                    <line x1="30" y1="40" x2="70" y2="40" stroke="#E5E7EB" strokeWidth="0.3" />
                  </svg>
                  
                  <svg className="absolute bottom-0 left-0 w-20 h-20 opacity-[0.02] pointer-events-none" viewBox="0 0 100 100">
                    {/* Vector traces */}
                    <line x1="10" y1="90" x2="40" y2="60" stroke="#F8FAFC" strokeWidth="0.4" strokeDasharray="2 3" />
                    <line x1="20" y1="90" x2="20" y2="70" stroke="#E5E7EB" strokeWidth="0.3" />
                  </svg>

                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#F8FAFC]/5">
                      <Icon className="w-6 h-6 text-[#F8FAFC]" />
                    </div>
                    <h3 className="text-xl text-[#F8FAFC] leading-tight">{item.title}</h3>
                  </div>
                  <p className="text-[#E5E7EB] leading-relaxed">{item.excerpt}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto p-12 rounded-2xl bg-[#0B0D12]/60 backdrop-blur-sm border border-[#E5E7EB]/10"
        >
          <Heart className="w-12 h-12 text-[#F8FAFC] mx-auto mb-6" />
          <h3 className="text-3xl md:text-4xl text-[#F8FAFC] mb-4">
            Making STEM and creativity more reachable
          </h3>
          <p className="text-lg text-[#E5E7EB]">
            My mission is to bridge the gap between technical excellence and human connection—building tools, content, and communities that empower people to grow with confidence.
          </p>
        </motion.div>
      </div>
    </section>
  );
}