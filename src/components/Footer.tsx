import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

const menuLinks = [
  { label: 'Home', href: '#home' },
  { label: 'My Orbit', href: '#about' },
  { label: 'What I Build', href: '#projects' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Research', href: '#research' },
  { label: 'Impact', href: '#impact' },
  { label: 'Connect', href: '#contact' },
];

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/aayushi-mallik' },
  { label: 'Email', href: 'mailto:aayushi.mallik@rutgers.edu' },
  { label: 'Instagram', href: 'https://www.instagram.com/mallik._aayushi/' },
  { label: 'GitHub', href: 'https://github.com/aayushiMallik3' },
  { label: 'Substack', href: 'https://substack.com/@aayushimallik' },
];

export default function Footer() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const estTime = new Date(now.toLocaleString('en-US', { timeZone: 'America/New_York' }));
      const hours = estTime.getHours();
      const minutes = estTime.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const displayHours = hours % 12 || 12;
      const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
      setCurrentTime(`${displayHours}:${displayMinutes} ${ampm}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-20 bg-transparent border-t border-[#E5E7EB]/10 overflow-hidden">
      {/* Inverted triangle - footer signature */}
      <motion.svg
        className="absolute top-12 left-1/2 -translate-x-1/2 w-6 h-6 opacity-[0.15]"
        viewBox="0 0 100 100"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 0.15, y: 0 }}
        viewport={{ once: true }}
      >
        <polygon points="50,80 20,20 80,20" fill="none" stroke="#E5E7EB" strokeWidth="2" />
      </motion.svg>

      {/* Faint triangular grid pattern in background */}
      <div className="absolute inset-0 opacity-[0.008] pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1000 400">
          {/* Grid of tiny triangles */}
          {Array.from({ length: 8 }).map((_, i) =>
            Array.from({ length: 15 }).map((_, j) => (
              <polygon
                key={`${i}-${j}`}
                points={`${j * 80 + 40},${i * 60 + 20} ${j * 80 + 20},${i * 60 + 50} ${j * 80 + 60},${i * 60 + 50}`}
                fill="none"
                stroke="#F8FAFC"
                strokeWidth="0.5"
              />
            ))
          )}
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
        {/* Top Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pt-24 pb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-8"
        >
          {/* Left: Let's Talk */}
          <h2 className="text-6xl md:text-7xl lg:text-8xl text-[#F8FAFC] tracking-tight">
            Let's Talk
          </h2>

          {/* Right: Email */}
          <motion.a
            href="mailto:aayushi.mallik@rutgers.edu"
            className="text-2xl md:text-3xl lg:text-4xl text-[#E5E7EB] hover:text-[#F8FAFC] transition-colors duration-500"
            whileHover={{ x: -5 }}
            transition={{ duration: 0.3 }}
          >
            aayushi.mallik@rutgers.edu
          </motion.a>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="h-px bg-gradient-to-r from-transparent via-[#E5E7EB]/20 to-transparent origin-center"
        />

        {/* Three Columns Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 py-16"
        >
          {/* Column 1: Menu */}
          <div>
            <h3 className="text-sm tracking-[0.2em] text-[#E5E7EB]/60 mb-6">MENU</h3>
            <ul className="space-y-3">
              {menuLinks.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                >
                  <a
                    href={link.href}
                    className="text-[#E5E7EB] hover:text-[#F8FAFC] transition-colors duration-300 inline-block hover:translate-x-1 transition-transform"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Column 2: Socials */}
          <div>
            <h3 className="text-sm tracking-[0.2em] text-[#E5E7EB]/60 mb-6">SOCIALS</h3>
            <ul className="space-y-3">
              {socialLinks.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#E5E7EB] hover:text-[#F8FAFC] transition-colors duration-300 inline-block hover:translate-x-1 transition-transform"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Column 3: My Local Time */}
          <div>
            <h3 className="text-sm tracking-[0.2em] text-[#E5E7EB]/60 mb-6">MY LOCAL TIME</h3>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-[#E5E7EB] mb-4">
                Local time: <span className="text-[#F8FAFC]">{currentTime} (EST)</span>
              </p>
              <p className="text-sm text-[#E5E7EB]/60 mb-2">Best times to contact:</p>
              <ul className="text-sm text-[#E5E7EB]/60 space-y-1">
                <li>• 12PM–3PM EST</li>
                <li>• 9PM–11PM EST</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="border-t border-[#E5E7EB]/10 py-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-[#E5E7EB]/40">© Mallik 2025</p>
          <motion.button
            onClick={scrollToTop}
            className="text-sm text-[#E5E7EB] hover:text-[#F8FAFC] transition-colors duration-300 flex items-center gap-2 group"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            Back to top
            <span className="inline-block group-hover:-translate-y-1 transition-transform duration-300">↑</span>
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
}