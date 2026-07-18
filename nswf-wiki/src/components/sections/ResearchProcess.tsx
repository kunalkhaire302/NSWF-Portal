"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Search, CheckCircle, Book, PenTool, Image as ImageIcon, Send } from 'lucide-react';

export default function ResearchProcess() {
  const steps = [
    { icon: <Search size={24} />, title: 'Initial Research', desc: 'Gathering public information about NSWF campaigns.' },
    { icon: <CheckCircle size={24} />, title: 'Source Verification', desc: 'Filtering reliable media coverage and academic mentions.' },
    { icon: <Book size={24} />, title: 'Information Collection', desc: 'Compiling structured data regarding NSWF history.' },
    { icon: <PenTool size={24} />, title: 'Draft Writing', desc: 'Structuring content into an encyclopedic format.' },
    { icon: <ImageIcon size={24} />, title: 'Media Curation', desc: 'Sourcing and verifying licenses for photographs.' },
    { icon: <Send size={24} />, title: 'Final Review', desc: 'Checking against Wikipedia compliance standards.' }
  ];

  return (
    <section id="research" className="py-32 px-4 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-1 rounded-full bg-blue-500/10 text-blue-500 font-semibold text-sm mb-4">
            Methodology
          </div>
          <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6 text-[var(--foreground)]">Research Process</h2>
          <p className="text-xl max-w-3xl mx-auto opacity-70 leading-relaxed">
            A rigorous, multi-step workflow ensuring that all documented information meets strict editorial and verifiability standards.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative p-8 bg-[var(--card-bg)] rounded-3xl border border-black/5 dark:border-white/5 shadow-sm hover:shadow-lg transition-all"
            >
              <div className="absolute -top-5 -left-5 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                {i + 1}
              </div>
              <div className="mb-4 text-blue-500 dark:text-blue-400">
                {step.icon}
              </div>
              <h3 className="font-poppins font-bold text-xl mb-3">{step.title}</h3>
              <p className="opacity-70 text-base">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
