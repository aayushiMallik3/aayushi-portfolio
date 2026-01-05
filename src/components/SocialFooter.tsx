import { motion } from 'motion/react';
import { Linkedin, Instagram, Mail, Github } from 'lucide-react';

const socialLinks = [
  { 
    icon: Linkedin, 
    label: "LinkedIn", 
    href: "https://www.linkedin.com/in/aayushi-mallik", 
    color: "#FFFFFF" 
  },
  { 
    icon: Mail, 
    label: "Email", 
    href: "mailto:aayushi.mallik@rutgers.edu", 
    color: "#FFFFFF" 
  },
  { 
    icon: Instagram, 
    label: "Instagram", 
    href: "https://www.instagram.com/mallik._aayushi/", 
    color: "#FFFFFF" 
  },
  { 
    icon: Github, 
    label: "GitHub", 
    href: "https://github.com/aayushiMallik3", 
    color: "#FFFFFF" 
  },
  { 
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM12 7.3c-.436 0-.783-.35-.783-.78V.78c0-.43.347-.78.783-.78s.783.35.783.78v5.74c0 .43-.347.78-.783.78z"/>
      </svg>
    ), 
    label: "Substack", 
    href: "https://substack.com/@aayushimallik", 
    color: "#FFFFFF" 
  },
];

export default function SocialFooter() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40"
    >
      <div className="flex items-center gap-4 px-6 py-3 rounded-full bg-[#111827]/90 backdrop-blur-md border border-[#E5E7EB]/10 shadow-xl">
        {socialLinks.map((social, index) => {
          const Icon = social.icon;
          return (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="group relative"
              aria-label={social.label}
            >
              <motion.div
                className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: `${social.color}40` }}
              />
              <div
                className="relative w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300"
                style={{
                  borderColor: social.color,
                  backgroundColor: `${social.color}10`,
                }}
              >
                <Icon className="w-5 h-5" style={{ color: social.color }} />
              </div>
            </motion.a>
          );
        })}
      </div>
    </motion.div>
  );
}