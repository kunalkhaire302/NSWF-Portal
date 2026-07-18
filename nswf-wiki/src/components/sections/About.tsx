"use client";

import React from 'react';
import { Users, TreeDeciduous, Leaf, CheckCircle2, FileText, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const cards = [
    { icon: <Users size={28} />, title: 'Leadership', desc: 'Led by Founder & Director Dr. HC. Garima Kavathekar, along with Directors Shri Nagesh Alkunthe and Smt. Deepali Kavathekar.' },
    { icon: <CheckCircle2 size={28} />, title: 'ISO 14001:2015', desc: 'Internationally certified for environmental management systems, reflecting a structured approach to conservation.' },
    { icon: <TreeDeciduous size={28} />, title: 'Control Honk Innovation', desc: 'Spearheading the "Control Honk" anti-honking device, invented by team engineer Gaurav Kavathekar, currently under patent.' },
    { icon: <Leaf size={28} />, title: 'Educational Impact', desc: 'Over 10,000 students educated across 27+ school and community awareness sessions.' },
    { icon: <FileText size={28} />, title: 'Real-Time Monitoring', desc: 'Partnering with institutions like the Gokhale Institute to collect on-ground festival decibel data for policy advocacy.' },
    { icon: <ExternalLink size={28} />, title: 'Vast Reach', desc: 'Supported by a dedicated advisory board and goodwill ambassadors, reaching over 100,000 individuals virtually.' }
  ];

  return (
    <section id="about" className="py-32 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-primary)]/5 to-transparent -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] font-semibold text-sm mb-4">
            Organization Overview
          </div>
          <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6 text-[var(--foreground)]">About NSWF</h2>
          <p className="text-xl max-w-3xl mx-auto opacity-70 leading-relaxed mb-4">
            Established on <strong>11 January 2023</strong>, Nisarg Srishti Welfare Foundation is an <strong>ISO 14001:2015</strong> certified environmental organization dedicated to mitigating urban ecological degradation through grassroots action.
          </p>
          <p className="text-lg max-w-2xl mx-auto text-[var(--color-accent)] font-medium italic">
            "।। निसर्ग सृष्टि संरक्षण ।।" — We Make Changes to The Society.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-[var(--card-bg)]/80 backdrop-blur-lg p-8 rounded-3xl border border-black/5 dark:border-white/5 hover:border-[var(--color-accent)]/50 shadow-sm hover:shadow-2xl hover:shadow-[var(--color-accent)]/20 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-accent)]/20 text-[var(--color-accent)] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>
              <h3 className="font-poppins font-bold text-2xl mb-3 text-[var(--foreground)]">{card.title}</h3>
              <p className="opacity-70 leading-relaxed text-base">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
