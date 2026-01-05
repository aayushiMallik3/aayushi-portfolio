import { motion } from 'motion/react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const faqItems = [
  {
    question: 'What areas of engineering do you focus on?',
    answer: 'I sit at the intersection of aerospace engineering, artificial intelligence, and human performance. On the aerospace side, I\'m interested in space systems, mission architecture, and how complex systems behave under extreme constraints. On the AI side, my work focuses on applied machine learning, feedback driven systems, and explainable models that interact with humans in meaningful ways. What ties it all together is systems thinking. I care about how technical systems and human systems interact, where they fail, and how we can design them to be more resilient, intuitive, and ethical.',
  },
  {
    question: 'How do you manage so many roles at once?',
    answer: 'I don\'t try to do everything at the same intensity all the time. I work in seasons. At any given moment, one or two things are the priority and the rest are in maintenance mode. I rely heavily on structured planning, intentional constraints, and knowing when to say no. I also design systems for myself the same way I design technical systems: clear goals, feedback loops, and room for recovery. Balance for me is not about doing less, it\'s about doing the right things at the right depth.',
  },
  {
    question: 'Can I collaborate with you on a technical or creative project?',
    answer: 'Yes, as long as the project is thoughtful and values depth over hype. I\'m especially excited about collaborations that live at the intersection of technology, storytelling, and impact. That could be AI research, space related concepts, human centered design, or creative work that explores systems and identity.',
  },
  {
    question: 'How can I get involved with herSpace or Iunoia?',
    answer: 'herSpace and Iunoia are built with very different goals, so the way you get involved depends on what you\'re looking for. herSpace is a community focused on mentorship, creativity, and leadership for women in innovation, and opportunities to join usually come through events, open roles, or cohort based initiatives announced throughout the year. Iunoia is a more selective research and product effort centered on human centered AI and physiological modeling, so involvement there is typically project based and aligned with specific research needs. The best way to start is to reach out with your background, what excites you about the work, and how you hope to contribute.',
  },
  {
    question: 'Do you speak at events or workshops?',
    answer: 'Yes. I speak about topics like human centered AI, systems thinking in aerospace, interdisciplinary career paths, and the role of creativity in engineering. I\'m especially drawn to conversations that challenge the idea that technical rigor and humanity are opposites. If you\'re organizing an event, workshop, or panel and think my perspective would add value, I\'m always open to a conversation.',
  },
  {
    question: 'What tools do you work in most often?',
    answer: 'On the technical side, I primarily work in Python for machine learning, modeling, and systems logic, along with tools like Git, MATLAB, and various ML frameworks depending on the project. For product and design work, I use Figma, prototyping tools, and lightweight front end frameworks when needed. For writing, planning, and reflection, I rely on structured notes, documentation, and custom workflows. Tools matter, but I care more about how they fit into a system that supports clear thinking and iteration.',
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="relative py-32 bg-[#111827] overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#F8FAFC]/5 blur-3xl"
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
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-[#F8FAFC] tracking-[0.3em] text-sm">FAQ</span>
        </motion.div>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-20 text-center"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl text-[#F8FAFC] mb-6 leading-tight">
            Questions I'm Asked Often
          </h2>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="border border-[#E5E7EB]/10 rounded-xl px-6 bg-[#0B0D12]/60 backdrop-blur-sm hover:border-[#F8FAFC]/20 transition-colors"
                >
                  <AccordionTrigger className="text-left text-lg text-[#F8FAFC] hover:text-[#E5E7EB] py-6">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#E5E7EB] pb-6 leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-20 pt-12 border-t border-[#E5E7EB]/10"
        >
          <p className="text-[#E5E7EB]/60 mb-4">
            Have more questions? Feel free to reach out.
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-[#E5E7EB]/20 text-[#F8FAFC] hover:bg-[#F8FAFC]/5 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}