import { motion } from 'motion/react';
import { Users, Mic, Megaphone, Rocket, Heart, Brain, Sparkles, Target } from 'lucide-react';

const leadershipRoles = [
  {
    icon: Sparkles,
    title: 'young4STEM — Head of Newsletter & YouTube',
    excerpt: 'I built our editorial calendar from the ground up, launched YouTube content that breaks down STEM careers for younger students, and developed mentorship pathways for early STEM founders and creators.',
    color: '#F8FAFC',
  },
  {
    icon: Mic,
    title: 'Aayushi Vocals — Founder & Vocal Coach',
    excerpt: 'I\'ve taught 25–40 students, helping them grow their technique, confidence, and performance mindset. I design personalized practice systems and host showcases that give students a real stage experience.',
    color: '#F8FAFC',
  },
  {
    icon: Megaphone,
    title: 'MARK Conference — PR Captain',
    excerpt: 'I lead PR strategy for Rutgers\' largest leadership conference. I shape the brand voice, produce speaker storytelling, manage cross-org collaborations, and create campaigns that feel alive and human.',
    color: '#E5E7EB',
  },
  {
    icon: Rocket,
    title: 'Space Technology Association of Rutgers (STAR)',
    excerpt: 'I help design engaging space-themed events and foster a welcoming environment for students entering aerospace. I make technical topics feel fun and accessible.',
    color: '#E5E7EB',
  },
  {
    icon: Heart,
    title: 'herSpace — Founder/President',
    excerpt: 'I created a project-based engineering club for women that focuses on real builds, mentorship, and career empowerment. It\'s hands-on, community-driven, and intentionally high-standard.',
    color: '#F8FAFC',
  },
  {
    icon: Brain,
    title: 'InnerSolace — Operations & Strategy Architect',
    excerpt: 'I lead system design, safety research, and milestone planning for our circadian health AI. I unify technical, psychological, and user-experience work into one coherent product vision.',
    color: '#F8FAFC',
  },
  {
    icon: Target,
    title: 'Tivrai (FlowState) — Founder/CEO',
    excerpt: 'I\'m building an AI productivity assistant for university students that blends smart scheduling, active recall, and academic insight. I\'ve tested early prototypes with 25+ students and refined UX through real behavior patterns.',
    color: '#F8FAFC',
  },
  {
    icon: Rocket,
    title: 'Climalink — Founder, Viasat Finalist',
    excerpt: 'I designed a CubeSat-based orbital carbon-capture system using MOF membranes and atmospheric reentry pods. I built the technical architecture, risk mitigation, and pitch strategy for cross-sector judges.',
    color: '#E5E7EB',
  },
];

export default function Leadership() {
  return (
    <section id="leadership" className="relative py-32 bg-transparent overflow-hidden">
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

      {/* Overlapping triangle fragments for depth */}
      <motion.svg
        className="absolute bottom-40 right-[10%] w-28 h-28 opacity-[0.015] pointer-events-none"
        viewBox="0 0 100 100"
        initial={{ opacity: 0, rotate: -8 }}
        whileInView={{ opacity: 0.015, rotate: -8 }}
        viewport={{ once: true }}
        animate={{
          rotate: [-8, -5, -8],
        }}
        transition={{
          rotate: {
            duration: 60,
            repeat: Infinity,
            ease: "easeInOut",
          }
        }}
      >
        <polygon points="50,20 20,80 80,80" fill="none" stroke="#F8FAFC" strokeWidth="0.3" />
        <polygon points="50,30 30,75 70,75" fill="none" stroke="#F8FAFC" strokeWidth="0.2" opacity="0.4" />
      </motion.svg>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-[#F8FAFC] tracking-[0.3em] text-sm">LEADERSHIP</span>
        </motion.div>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mb-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl text-[#F8FAFC] mb-6 leading-tight">
            Leading and launching where people meet tech
          </h2>
          <p className="text-xl text-[#E5E7EB]">
            I lead teams the way I build systems: with clarity, creativity, and a lot of care for the people doing the work.
          </p>
        </motion.div>

        {/* Leadership Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {leadershipRoles.map((role, index) => {
            const Icon = role.icon;
            return (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <motion.div
                  className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl"
                  style={{ backgroundColor: `${role.color}10` }}
                />
                <div className="relative p-8 rounded-2xl bg-[#111827]/60 backdrop-blur-sm border border-[#E5E7EB]/10 hover:border-[#F8FAFC]/20 transition-colors">
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#F8FAFC]/5"
                    >
                      <Icon className="w-6 h-6" style={{ color: role.color }} />
                    </div>
                    <h3 className="text-xl text-[#F8FAFC] leading-tight">{role.title}</h3>
                  </div>
                  <p className="text-[#E5E7EB] leading-relaxed">{role.excerpt}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto p-12 rounded-2xl bg-[#111827]/60 backdrop-blur-sm border border-[#E5E7EB]/10"
        >
          <h3 className="text-3xl md:text-4xl text-[#F8FAFC] mb-4">
            Let's collaborate
          </h3>
          <p className="text-lg text-[#E5E7EB] mb-6">
            I'm always open to working with people who care about thoughtful leadership, technical innovation, and building things that matter.
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#F8FAFC] text-[#0B0D12] hover:bg-[#E5E7EB] transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}