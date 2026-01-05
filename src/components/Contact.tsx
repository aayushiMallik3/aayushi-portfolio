import { motion } from 'motion/react';
import { Mail, Linkedin, Instagram, Send, Github } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { useState } from 'react';
import { toast } from 'sonner';

const socialLinks = [
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/aayushi-mallik' },
  { icon: Mail, label: 'Email', href: 'mailto:aayushi.mallik@rutgers.edu' },
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/mallik._aayushi/' },
  { icon: Github, label: 'GitHub', href: 'https://github.com/aayushiMallik3' },
  { 
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM12 7.3c-.436 0-.783-.35-.783-.78V.78c0-.43.347-.78.783-.78s.783.35.783.78v5.74c0 .43-.347.78-.783.78z"/>
      </svg>
    ), 
    label: 'Substack', 
    href: 'https://substack.com/@aayushimallik' 
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Using Formspree for email delivery
      const response = await fetch('https://formspree.io/f/xwpkgpea', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email,
          _subject: `New message from ${formData.name}: ${formData.subject}`,
        }),
      });

      if (response.ok) {
        toast.success('Message sent successfully! I\'ll get back to you soon.');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        toast.error('Something went wrong. Please try again or email me directly.');
      }
    } catch (error) {
      toast.error('Failed to send message. Please try emailing me directly at aayushi.mallik@rutgers.edu');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <section id="contact" className="relative py-32 bg-transparent overflow-hidden">
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

        {/* Floating triangle - upward motion */}
        <motion.svg
          className="absolute top-1/4 left-[12%] w-24 h-24 opacity-[0.02] pointer-events-none"
          viewBox="0 0 100 100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.02, y: 0 }}
          viewport={{ once: true }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 52,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <polygon points="50,20 20,80 80,80" fill="none" stroke="#F8FAFC" strokeWidth="0.3" />
        </motion.svg>

        {/* Background effects */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-[#F8FAFC]/5 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Section label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <span className="text-[#F8FAFC] tracking-[0.3em] text-sm">GET IN TOUCH</span>
            </motion.div>

            {/* Section title */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl lg:text-7xl text-[#F8FAFC] mb-8"
            >
              Let's create something{' '}
              <span className="text-[#E5E7EB]">extraordinary</span> together
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-[#E5E7EB] mb-12"
            >
              Whether you have a project in mind or just want to connect, I'd love to hear from you.
            </motion.p>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex gap-4 mb-16"
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-14 h-14 rounded-full border-2 border-[#E5E7EB]/20 flex items-center justify-center hover:border-[#F8FAFC] transition-colors"
                    whileHover={{ scale: 1.1, y: -3 }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-full bg-[#F8FAFC]/10 opacity-0 group-hover:opacity-100 transition-opacity blur-md"
                    />
                    <div className="text-[#E5E7EB] group-hover:text-[#F8FAFC] transition-colors relative z-10">
                      <Icon className="w-6 h-6" />
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>

            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <motion.div
                className="absolute -inset-4 bg-[#F8FAFC]/5 rounded-3xl blur-2xl opacity-50"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <form className="relative space-y-6 p-8 md:p-12 rounded-2xl bg-[#111827]/60 backdrop-blur-sm border border-[#E5E7EB]/10" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#E5E7EB] mb-2 text-sm">Name</label>
                    <Input
                      placeholder="Your name"
                      className="bg-[#0B0D12]/50 border-[#E5E7EB]/10 focus:border-[#F8FAFC] text-[#F8FAFC] placeholder:text-[#E5E7EB]/40"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-[#E5E7EB] mb-2 text-sm">Email</label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      className="bg-[#0B0D12]/50 border-[#E5E7EB]/10 focus:border-[#F8FAFC] text-[#F8FAFC] placeholder:text-[#E5E7EB]/40"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#E5E7EB] mb-2 text-sm">Subject</label>
                  <Input
                    placeholder="What's this about?"
                    className="bg-[#0B0D12]/50 border-[#E5E7EB]/10 focus:border-[#F8FAFC] text-[#F8FAFC] placeholder:text-[#E5E7EB]/40"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-[#E5E7EB] mb-2 text-sm">Message</label>
                  <Textarea
                    placeholder="Tell me about your project or idea..."
                    rows={6}
                    className="bg-[#0B0D12]/50 border-[#E5E7EB]/10 focus:border-[#F8FAFC] text-[#F8FAFC] placeholder:text-[#E5E7EB]/40 resize-none"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#F8FAFC] hover:bg-[#E5E7EB] text-[#0B0D12] py-6 rounded-xl transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="flex items-center justify-center gap-2">
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      <Send className="w-5 h-5" />
                    </span>
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}