"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Link2 } from 'lucide-react';

export default function References() {
  const groups = [
    { 
      category: 'Official Sources', 
      refs: [
        'NSWF Official Documentation and Mission Statement (2023)', 
        'Annual Activity Report - Nisarg Srishti Welfare Foundation (2022-2023)'
      ] 
    },
    { 
      category: 'Media & Publications', 
      refs: [
        '"Local NGO spearheads noise pollution drive", City Herald, Oct 2023', 
        'Environmental Awareness in Urban India - A Case Study on Maharashtra NGOs'
      ] 
    },
    { 
      category: 'Government & Academic', 
      refs: [
        'Civic Body Afforestation Partnerships Record (2022-2023), Municipal Corporation', 
        'Dr. Garima Kavathekar: Perspectives on Urban Ecology and Sound Mitigation'
      ] 
    }
  ];

  return (
    <section id="references" className="py-32 px-4 bg-[var(--background)]">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6 text-[var(--foreground)]">Verified References</h2>
          <p className="text-xl max-w-2xl mx-auto opacity-70">
            A compilation of credible, secondary sources used to verify notability and establish factual accuracy.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {groups.map((group, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15 }}
              className="bg-[var(--card-bg)] p-8 rounded-3xl border border-black/10 dark:border-white/10 shadow-sm hover:shadow-xl hover:border-[var(--color-primary)]/30 transition-all group"
            >
              <div className="w-12 h-12 bg-black/5 dark:bg-white/5 rounded-full flex items-center justify-center mb-6 text-[var(--color-primary)] dark:text-green-400 group-hover:bg-[var(--color-primary)]/10 transition-colors">
                <BookOpen size={24} />
              </div>
              <h3 className="font-poppins font-bold text-xl mb-6 text-[var(--foreground)]">
                {group.category}
              </h3>
              <ul className="space-y-4">
                {group.refs.map((ref, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm opacity-80 group-hover:opacity-100 transition-opacity">
                    <Link2 size={16} className="text-[var(--color-accent)] mt-1 shrink-0" />
                    <span className="leading-relaxed">{ref}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
