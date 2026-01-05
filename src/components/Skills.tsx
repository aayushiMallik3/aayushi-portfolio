import { motion } from 'motion/react';

const skillCategories = [
  {
    title: 'Technical',
    skills: [
      'Aerospace Engineering',
      'Machine Learning & AI',
      'Python & TensorFlow',
      'MATLAB & Simulink',
      'CAD/CAM (SolidWorks)',
      'Systems Engineering',
    ],
  },
  {
    title: 'Design',
    skills: [
      'UI/UX Design',
      'Figma & Adobe Suite',
      'Data Visualization',
      'Technical Documentation',
      'Prototyping',
      'Design Thinking',
    ],
  },
  {
    title: 'Leadership',
    skills: [
      'Team Management',
      'Strategic Planning',
      'Public Speaking',
      'Mentorship',
      'Project Management',
      'Cross-functional Collaboration',
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 bg-transparent overflow-hidden">
      {/* Triangular section divider marker - top */}
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

      {/* Wireframe triangle accent */}
      <motion.svg
        className="absolute top-1/3 left-[8%] w-20 h-20 opacity-[0.015] pointer-events-none"
        viewBox="0 0 100 100"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.015 }}
        viewport={{ once: true }}
        animate={{
          rotate: [0, 3, 0],
        }}
        transition={{
          rotate: {
            duration: 55,
            repeat: Infinity,
            ease: "easeInOut",
          }
        }}
      >
        <polygon points="50,20 20,80 80,80" fill="none" stroke="#F8FAFC" strokeWidth="0.3" />
        <line x1="50" y1="20" x2="50" y2="50" stroke="#F8FAFC" strokeWidth="0.15" opacity="0.3" />
      </motion.svg>

      <div className="container mx-auto px-6 lg:px-12">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-[#F8FAFC] tracking-[0.3em] text-sm">EXPERTISE</span>
        </motion.div>

        {/* Section title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl text-[#F8FAFC] mb-20 max-w-3xl"
        >
          Skills & capabilities that drive innovation
        </motion.h2>

        {/* Skills grid */}
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              <h3 className="text-2xl text-[#F8FAFC] mb-8">{category.title}</h3>
              <ul className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.2 + skillIndex * 0.05 }}
                    className="group flex items-center gap-3"
                  >
                    <motion.div
                      className="w-1.5 h-1.5 rounded-full bg-[#F8FAFC]"
                      whileHover={{ scale: 2 }}
                    />
                    <span className="text-[#E5E7EB] group-hover:text-[#F8FAFC] transition-colors">
                      {skill}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}