import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Home, User, Wrench, Users, FlaskConical, Target, HelpCircle, Mail } from 'lucide-react';

const navItems = [
  { name: 'Home', icon: Home, href: '#home' },
  { name: 'My Orbit', icon: User, href: '#about' },
  { name: 'What I Build', icon: Wrench, href: '#projects' },
  { name: 'Leadership', icon: Users, href: '#leadership' },
  { name: 'Research', icon: FlaskConical, href: '#research' },
  { name: 'Impact', icon: Target, href: '#impact' },
  { name: 'FAQ', icon: HelpCircle, href: '#faq' },
  { name: 'Connect', icon: Mail, href: '#contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Track which section is in view
    const handleScroll = () => {
      const sections = ['home', 'experience', 'education', 'about', 'projects', 'leadership', 'research', 'impact', 'faq', 'contact'];
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is in viewport (with some threshold)
          if (rect.top <= 100 && rect.bottom >= 100) {
            setCurrentPage(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Navigation Button - Fixed on right */}
      <div className="fixed top-8 right-8 z-50">
        <motion.button
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-[#F8FAFC] shadow-lg flex items-center justify-center group hover:shadow-xl transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="absolute inset-0 rounded-full bg-[#E5E7EB] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative z-10"
              >
                <X className="w-6 h-6 text-[#0B0D12]" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative z-10"
              >
                <Menu className="w-6 h-6 text-[#0B0D12]" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="absolute top-16 right-0 w-64 bg-[#111827] rounded-2xl shadow-2xl overflow-hidden border border-[#E5E7EB]/10"
            >
              {/* Navigation Items */}
              <nav className="relative z-10 p-4 space-y-1">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = currentPage === item.href.slice(1);
                  return (
                    <motion.button
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * index, duration: 0.2 }}
                      onClick={() => handleNavClick(item.href)}
                      className="w-full group relative overflow-hidden"
                    >
                      {/* Active/Hover background */}
                      <motion.div
                        className={`absolute inset-0 bg-[#F8FAFC]/5 rounded-xl transition-opacity duration-300 ${
                          isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                        }`}
                      />

                      {/* Content */}
                      <div className="relative flex items-center gap-3 p-3 rounded-xl">
                        <motion.div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                            isActive ? 'bg-[#F8FAFC]/20' : 'bg-[#F8FAFC]/10'
                          }`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Icon className={`w-4 h-4 ${isActive ? 'text-[#F8FAFC]' : 'text-[#F8FAFC]'}`} />
                        </motion.div>
                        <span className={`text-sm transition-colors ${
                          isActive ? 'text-[#F8FAFC]' : 'text-[#F8FAFC] group-hover:text-[#E5E7EB]'
                        }`}>
                          {item.name}
                        </span>
                        {isActive && (
                          <motion.div
                            layoutId="activeIndicator"
                            className="ml-auto w-1.5 h-1.5 rounded-full bg-[#F8FAFC]"
                            initial={false}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                          />
                        )}
                      </div>
                    </motion.button>
                  );
                })}
              </nav>

              {/* Decorative bottom bar */}
              <div className="relative z-10 px-4 pb-4">
                <div className="h-0.5 bg-[#F8FAFC]/10 rounded-full" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Overlay - optional, close menu when clicking outside */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40"
          />
        )}
      </AnimatePresence>
    </>
  );
}