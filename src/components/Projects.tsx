import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

// Import logos
import xfoundryLogo from 'figma:asset/981e25ba82bf5c7aab37ad545fd84a311569e1bd.png';
import nasaLogo from 'figma:asset/50d291e47c522e502c3f24f737fead74e0d25820.png';
import viasatLogo from 'figma:asset/f7676093faa94a5cf7c10675bf73dea97d04cc5b.png';
import microsoftLogo from 'figma:asset/37d9989d97493f30b3d33eda27cb16c795efa90a.png';

// Import project images
import iunoiaImage from 'figma:asset/9cb7bf4fb1ffac4fe728eac8bac0cb6b43696163.png';
import tivraiImage from 'figma:asset/e5faf639ce34ca854d33dec5af4d3dbfbd5044e3.png';
import innersolaceImage from 'figma:asset/1fba02f114142f4be69f29f79d8e9aac7a3bf121.png';
import climalinkImage from 'figma:asset/dbaf71fa9bab35cdff9d09525651793f77ae090c.png';

const projects = [
  {
    title: 'Iunoia',
    descriptor: 'Human centered AI for physiological risk modeling',
    description:
      'Iunoia is a research driven platform focused on modeling physiological and cognitive risk in extreme environments. The work combines aerospace systems thinking, explainable machine learning, and human centered design to better understand how the body and mind respond under sustained stress. My role spans system architecture, modeling logic, and research direction, with an emphasis on interpretability and real world deployment constraints.',
    tags: ['Aerospace', 'AI', 'Human Centered Design', 'Research', 'Systems'],
    link: 'https://github.com/aayushiMallik3/iunoia-core',
    image: iunoiaImage,
  },
  {
    title: 'Climalink',
    descriptor: 'Orbital carbon capture through distributed space systems',
    description:
      'Climalink is a space based climate infrastructure concept exploring how distributed satellite networks can support carbon capture and atmospheric monitoring at scale. Developed as part of international space innovation competitions, the project integrates CubeSat architecture, materials concepts, and systems level trade studies. The work focuses on feasibility, scalability, and how space systems can play an active role in planetary health.',
    tags: ['Aerospace', 'Systems', 'Research'],
    link: 'https://drive.google.com/file/d/18lpjzTVzfjtI4G290QWVXhntdGLV31qe/view?usp=sharing',
    image: climalinkImage,
  },
  {
    title: 'Tivrai',
    descriptor: 'AI powered productivity and learning systems',
    description:
      'Tivrai is a student focused AI platform designed to help users manage time, retain information, and reduce cognitive overload. The system blends smart scheduling, active recall, and adaptive feedback loops to align productivity with human rhythms rather than rigid optimization. I led product design, system logic, and early prototyping with a strong emphasis on usability and long term behavior change.',
    tags: ['AI', 'Human Centered Design', 'Systems'],
    link: 'https://www.figma.com/make/vSK0b5hbr6BGf1E8qPBrcd/Student-Dashboard-Design?fullscreen=1&t=M6CEo59IR4BfFSEY-1',
    image: tivraiImage,
  },
  {
    title: 'InnerSolace',
    descriptor: 'Circadian health and human performance in extreme environments',
    description:
      'InnerSolace is a concept and prototype focused on maintaining circadian alignment and mental performance in environments like space missions, remote operations, and disaster zones. Developed through NASA affiliated programs, the project combines physiological modeling, AI driven recommendations, and system safety considerations. My work focused on system design, application logic, and translating research into deployable tools.',
    tags: ['Aerospace', 'AI', 'Human Centered Design', 'Systems'],
    link: 'https://www.canva.com/design/DAG2w3JAHpY/fZnaMFG52Nb19IzUH8HaQA/edit?utm_content=DAG2w3JAHpY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
    image: innersolaceImage,
  },
];

const affiliations = [
  { 
    name: 'NASA', 
    tooltip: 'Research Program',
    logo: nasaLogo
  },
  { 
    name: 'Viasat Space for Good', 
    tooltip: 'Competitor',
    logo: viasatLogo
  },
  { 
    name: 'XFoundry', 
    tooltip: 'Participant',
    logo: xfoundryLogo
  },
  { 
    name: 'Microsoft', 
    tooltip: 'Innovation Program',
    logo: microsoftLogo
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 bg-transparent overflow-hidden">
      {/* Wireframe triangle - structural accent */}
      <motion.svg
        className="absolute top-40 right-[12%] w-24 h-24 opacity-[0.018] pointer-events-none"
        viewBox="0 0 100 100"
        initial={{ opacity: 0, rotate: 5 }}
        whileInView={{ opacity: 0.018, rotate: 5 }}
        viewport={{ once: true }}
        animate={{
          rotate: [5, 8, 5],
        }}
        transition={{
          rotate: {
            duration: 50,
            repeat: Infinity,
            ease: "easeInOut",
          }
        }}
      >
        <polygon points="50,15 15,85 85,85" fill="none" stroke="#F8FAFC" strokeWidth="0.3" />
      </motion.svg>
      
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-12 pt-32"
        >
          <span className="text-[#F8FAFC] tracking-[0.3em] text-sm">WHAT I BUILD</span>
        </motion.div>

        {/* Section title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl lg:text-7xl text-[#F8FAFC] mb-32 max-w-4xl"
        >
          I build systems where aerospace, AI, and humanity intersect.
        </motion.h2>

        {/* Featured Projects */}
        <div className="space-y-32 mb-40">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              {/* Project Card - Grid Layout */}
              <div className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                {/* Text Content */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className={index % 2 === 1 ? 'md:col-start-2' : ''}
                >
                  {/* Project Number */}
                  <div className="text-[#E5E7EB]/20 text-sm mb-4">
                    0{index + 1}
                  </div>

                  {/* Project Title */}
                  <h3 className="text-4xl md:text-5xl lg:text-6xl text-[#F8FAFC] mb-4">
                    {project.title}
                  </h3>

                  {/* Descriptor */}
                  <p className="text-xl md:text-2xl text-[#E5E7EB] mb-6">
                    {project.descriptor}
                  </p>

                  {/* Description */}
                  <p className="text-[#E5E7EB]/80 text-lg leading-relaxed mb-8">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 rounded-full border border-[#E5E7EB]/20 text-[#E5E7EB] text-sm hover:border-[#F8FAFC]/40 hover:bg-[#F8FAFC]/5 transition-all"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Learn More Button */}
                  <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group text-[#F8FAFC] hover:text-[#E5E7EB] inline-flex items-center gap-2 transition-colors"
                    >
                      Learn More
                      <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                  </motion.div>
                </motion.div>

                {/* Project Image */}
                {project.image && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className={`relative group ${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}
                  >
                    <div className={`relative overflow-hidden rounded-2xl border border-[#E5E7EB]/10 bg-[#111827]/40 hover:border-[#F8FAFC]/20 transition-all ${ 
                      index === 0 ? 'md:w-3/5 md:mx-auto' : ''
                    }`}>
                      {/* Glow effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-[#F8FAFC]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      />
                      
                      {/* Image */}
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Programs, Competitions & Affiliations Belt */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-20 border-t border-[#E5E7EB]/10"
        >
          {/* Section Title */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl text-[#F8FAFC] mb-16 text-center"
          >
            Programs, Competitions & Affiliations
          </motion.h3>

          {/* Animated Logo Belt */}
          <div className="relative overflow-hidden pb-32">
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0B0D12] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0B0D12] to-transparent z-10" />
            
            {/* Scrolling container */}
            <motion.div
              className="flex gap-12"
              animate={{
                x: [0, -1200],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {/* Duplicate the logos twice for seamless loop */}
              {[...affiliations, ...affiliations, ...affiliations].map((affiliation, index) => (
                <div
                  key={`${affiliation.name}-${index}`}
                  className="group relative flex-shrink-0"
                >
                  {/* Logo Container */}
                  <div className="relative w-64 h-40 flex items-center justify-center p-8 rounded-xl border border-[#E5E7EB]/10 bg-[#111827]/40 hover:border-[#F8FAFC]/20 hover:bg-[#111827]/60 transition-all overflow-hidden">
                    {/* Logo Image */}
                    <img
                      src={affiliation.logo}
                      alt={affiliation.name}
                      className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-all duration-300"
                      style={{ mixBlendMode: 'screen' }}
                    />

                    {/* Tooltip */}
                    <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 px-3 py-1 rounded-md bg-[#111827] border border-[#E5E7EB]/20 text-[#E5E7EB] text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                      {affiliation.tooltip}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}