"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock } from 'lucide-react';

export default function ProjectTimeline() {
  const milestones = [
    { month: 'Month 1', title: 'Research & Discovery', desc: 'Initial scoping and gathering of credible source materials.', status: 'completed' },
    { month: 'Month 2-3', title: 'Information Collection', desc: 'Compiling offline and online documentation on NSWF.', status: 'completed' },
    { month: 'Month 4', title: 'Source Verification', desc: 'Cross-referencing claims with government and media reports.', status: 'completed' },
    { month: 'Month 5', title: 'Draft Writing', desc: 'Structuring content into a neutral, encyclopedic tone.', status: 'completed' },
    { month: 'Month 6', title: 'Citation Linking', desc: 'Formatting references to comply with Wikipedia standards.', status: 'completed' },
    { month: 'Month 7', title: 'Media Curation', desc: 'Verifying licenses for gallery photographs.', status: 'completed' },
    { month: 'Month 8', title: 'Final Submission', desc: 'Project compilation and final review.', status: 'in-progress' }
  ];

  return (
    <section id="timeline" className="py-32 px-4 bg-black/5 dark:bg-white/5 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-1 rounded-full bg-orange-500/10 text-orange-500 font-semibold text-sm mb-4">
            Project Roadmap
          </div>
          <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6 text-[var(--foreground)]">Development Timeline</h2>
          <p className="text-xl opacity-70 leading-relaxed">
            The chronological progression of creating the Wikipedia documentation portal.
          </p>
        </motion.div>

        <div className="relative border-l-2 border-black/10 dark:border-white/10 ml-6 md:ml-12 space-y-12 pb-8">
          {milestones.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className={`absolute -left-[17px] top-1 h-8 w-8 rounded-full border-4 border-[var(--background)] flex items-center justify-center
                ${item.status === 'completed' ? 'bg-[var(--color-accent)]' : 'bg-orange-500'}
              `}>
                {item.status === 'completed' ? <CheckCircle2 size={16} className="text-white" /> : <Clock size={16} className="text-white" />}
              </div>

              <div className="bg-[var(--card-bg)] p-6 rounded-2xl border border-black/5 dark:border-white/5 shadow-sm hover:shadow-md transition-shadow">
                <span className={`text-sm font-bold uppercase tracking-wider mb-2 block ${item.status === 'completed' ? 'text-[var(--color-accent)]' : 'text-orange-500'}`}>
                  {item.month}
                </span>
                <h3 className="font-poppins font-bold text-xl mb-2 text-[var(--foreground)]">{item.title}</h3>
                <p className="opacity-70">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
