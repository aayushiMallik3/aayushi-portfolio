import { motion } from 'motion/react';
import { FileText, Sparkles, Brain, Zap } from 'lucide-react';

const researchProjects = [
  {
    icon: Sparkles,
    title: 'Aerospace Sustainability',
    subtitle: 'young4STEM',
    excerpt: 'A research article unpacking practical ways to reduce the aerospace industry\'s environmental footprint across materials, propulsion, and operations. I conducted synthesis, wrote accessible explanations, and built visual breakdowns for students entering the field.',
  },
  {
    icon: Brain,
    title: 'AI Is Transforming Our Daily Lives',
    subtitle: 'young4STEM',
    excerpt: 'An article exploring how AI already boosts efficiency in daily routines, learning, and work without people noticing. I examined real everyday systems and explained the hidden layers of automation that support them.',
  },
  {
    icon: Brain,
    title: 'Teaching Lightweight to Mimic Expert Feedback in Reasoning Tasks',
    subtitle: 'Algoverse',
    excerpt: 'A research project on online feedback distillation, where a lightweight model learns to mimic expert feedback during task execution. I developed the motivation, evaluation strategy, and analysis across GSM8K, CommonGen, and reasoning-quality metrics.',
  },
  {
    icon: Zap,
    title: 'Cold Plasma Experimentation',
    subtitle: 'Mazzeo Technology Research Group',
    excerpt: 'Hands-on experimental work in cold plasma systems, including device setup, testing, data collection, and instrumentation refinement. This project is ongoing and focuses on validating plasma behavior and operational stability.',
  },
];

export default function Research() {
  return (
    <section id="research" className="relative py-32 bg-transparent overflow-hidden">
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

      {/* Partial triangle cropped at edge */}
      <motion.svg
        className="absolute top-1/4 -left-16 w-64 h-64 opacity-[0.012] pointer-events-none"
        viewBox="0 0 100 100"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.012 }}
        viewport={{ once: true }}
        animate={{
          x: [0, -10, 0],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <polygon points="50,10 10,90 90,90" fill="none" stroke="#F8FAFC" strokeWidth="0.3" />
      </motion.svg>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-12 relative"
        >
          {/* Three faint white triangles overlapping to the left of RESEARCH */}
          <div className="absolute -left-16 top-1/2 -translate-y-1/2 flex items-center">
            <motion.svg
              className="w-8 h-8 opacity-[0.15] absolute"
              viewBox="0 0 100 100"
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 0.15, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0 }}
            >
              <polygon points="50,20 20,80 80,80" fill="none" stroke="#F8FAFC" strokeWidth="1.5" />
            </motion.svg>
            
            <motion.svg
              className="w-8 h-8 opacity-[0.12] absolute left-4"
              viewBox="0 0 100 100"
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 0.12, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <polygon points="50,20 20,80 80,80" fill="none" stroke="#F8FAFC" strokeWidth="1.5" />
            </motion.svg>
            
            <motion.svg
              className="w-8 h-8 opacity-[0.08] absolute left-8"
              viewBox="0 0 100 100"
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 0.08, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <polygon points="50,20 20,80 80,80" fill="none" stroke="#F8FAFC" strokeWidth="1.5" />
            </motion.svg>
          </div>
          
          <span className="text-[#F8FAFC] tracking-[0.3em] text-sm">RESEARCH</span>
        </motion.div>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mb-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl text-[#F8FAFC] mb-6 leading-tight">
            Research at the edge of systems and learning
          </h2>
          <p className="text-xl text-[#E5E7EB]">
            I explore how AI, aerospace, and human interaction converge to solve real-world challenges.
          </p>
        </motion.div>

        {/* Research Cards */}
        <div className="space-y-6 mb-20">
          {researchProjects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <motion.div
                  className="relative p-8 md:p-12 rounded-2xl bg-[#111827]/60 border border-[#E5E7EB]/10 hover:border-[#F8FAFC]/20 transition-all cursor-pointer overflow-hidden"
                  whileHover={{ scale: 1.01 }}
                >
                  {/* Hover gradient effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#F8FAFC]/0 via-[#F8FAFC]/5 to-[#F8FAFC]/0 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={false}
                  />

                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#F8FAFC]/5">
                        <Icon className="w-7 h-7 text-[#F8FAFC]" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-[#E5E7EB]/60 mb-2">{project.subtitle}</div>
                        <h3 className="text-2xl md:text-3xl text-[#F8FAFC] mb-4 group-hover:text-[#E5E7EB] transition-colors">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-[#E5E7EB] text-lg leading-relaxed">
                      {project.excerpt}
                    </p>
                  </div>

                  {/* Bottom line accent */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-[#F8FAFC]/20"
                    initial={{ width: '0%' }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Closing Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto p-12 rounded-2xl bg-[#111827]/60 backdrop-blur-sm border border-[#E5E7EB]/10"
        >
          <h3 className="text-3xl md:text-4xl text-[#F8FAFC] mb-4">
            Open to Collaboration
          </h3>
          <p className="text-lg text-[#E5E7EB]">
            I'm interested in collaborations around reasoning systems, aerospace applications, and human-tech integration. If you're working in these spaces, let's connect.
          </p>
        </motion.div>
      </div>
    </section>
  );
}