import { motion } from 'motion/react';
import { Linkedin, Mail, Instagram, ArrowDown, ArrowRight, Github } from 'lucide-react';
import profileImage from 'figma:asset/ba389ea0ca1d08fc2778c94b21ee59b2487057f0.png';

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/aayushi-mallik', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:aayushi.mallik@rutgers.edu', label: 'Email' },
  { icon: Instagram, href: 'https://www.instagram.com/mallik._aayushi/', label: 'Instagram' },
  { icon: Github, href: 'https://github.com/aayushiMallik3', label: 'GitHub' },
  { 
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM12 7.3c-.436 0-.783-.35-.783-.78V.78c0-.43.347-.78.783-.78s.783.35.783.78v5.74c0 .43-.347.78-.783.78z"/>
      </svg>
    ), 
    href: 'https://substack.com/@aayushimallik', 
    label: 'Substack' 
  },
];

export default function Hero() {
  const navigateToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navigateToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navigateToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent">
      {/* Large faint triangular outline - architectural background */}
      <motion.svg
        className="absolute inset-0 w-full h-full opacity-[0.012]"
        viewBox="0 0 1000 1000"
        initial={{ opacity: 0, rotate: -3 }}
        animate={{ 
          opacity: 0.012,
          rotate: [-3, -1, -3],
        }}
        transition={{
          opacity: { duration: 2, ease: "easeOut" },
          rotate: {
            duration: 45,
            repeat: Infinity,
            ease: "easeInOut",
          }
        }}
      >
        <polygon points="500,150 200,800 800,800" fill="none" stroke="#F8FAFC" strokeWidth="0.5" />
      </motion.svg>

      {/* Background effects */}
      <div className="absolute inset-0">
        <motion.svg
          className="absolute top-20 left-[15%] w-20 h-20 opacity-[0.04]"
          viewBox="0 0 100 100"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <polygon points="50,10 10,90 90,90" fill="none" stroke="#F8FAFC" strokeWidth="0.5" />
        </motion.svg>

        <motion.svg
          className="absolute bottom-32 right-[20%] w-16 h-16 opacity-[0.03]"
          viewBox="0 0 100 100"
          animate={{
            y: [0, 40, 0],
            rotate: [0, -180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        >
          <polygon points="50,90 10,10 90,10" fill="none" stroke="#E5E7EB" strokeWidth="0.5" />
        </motion.svg>
      </div>

      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="space-y-8">
              {/* Greeting */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-[#E5E7EB] tracking-wide">
                  Hello, I'm{' '}
                  <span className="text-[#F8FAFC]">an Aerospace Engineer & AI Innovator</span>
                </p>
              </motion.div>

              {/* Name and Social Icons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col lg:flex-row lg:items-end gap-3 lg:gap-2"
              >
                <h1 className="text-7xl md:text-8xl lg:text-9xl leading-none">
                  <span className="block text-[#F8FAFC]">Aayushi</span>
                  <span className="block text-[#F8FAFC]">Mallik</span>
                </h1>

                {/* Social icons - next to name */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex gap-4 lg:mb-6"
                >
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative w-12 h-12 rounded-full border-2 border-[#E5E7EB]/20 flex items-center justify-center hover:border-[#F8FAFC] transition-colors"
                        whileHover={{ scale: 1.1, y: -3 }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                      >
                        <motion.div
                          className="absolute inset-0 rounded-full bg-[#F8FAFC]/10 opacity-0 group-hover:opacity-100 transition-opacity blur-md"
                        />
                        <div className="text-[#E5E7EB] group-hover:text-[#F8FAFC] transition-colors relative z-10">
                          <Icon className="w-5 h-5" />
                        </div>
                      </motion.a>
                    );
                  })}
                </motion.div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <motion.button
                  onClick={navigateToProjects}
                  className="group px-8 py-4 rounded-full border-2 border-[#E5E7EB]/20 text-[#F8FAFC] hover:bg-[#F8FAFC]/5 transition-all flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>View My Work</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <motion.button
                  onClick={navigateToContact}
                  className="px-8 py-4 rounded-full bg-[#F8FAFC] text-[#0B0D12] hover:bg-[#E5E7EB] transition-all flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Contact Me</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </motion.div>

              {/* Scroll indicator */}
              <motion.button
                onClick={navigateToAbout}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex items-center gap-2 text-[#E5E7EB] hover:text-[#F8FAFC] transition-colors group"
              >
                <span className="text-sm tracking-wider">Scroll down</span>
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowDown className="w-4 h-4" />
                </motion.div>
              </motion.button>
            </div>

            {/* Right side - Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <motion.div
                className="absolute -inset-4 bg-[#F8FAFC]/10 rounded-3xl blur-2xl"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border-2 border-[#E5E7EB]/10">
                <img
                  src={profileImage}
                  alt="Aayushi Mallik"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D12] via-transparent to-transparent opacity-60" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}