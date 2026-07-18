"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden px-4 pt-16">
      {/* Animated Mesh Background */}
      <div className="absolute inset-0 -z-10 bg-[var(--background)] overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-primary)]/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[var(--color-accent)]/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-green-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-center max-w-5xl mx-auto z-10"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center space-x-2 bg-white/40 dark:bg-black/40 backdrop-blur-md rounded-full px-5 py-2 mb-8 border border-white/20 dark:border-white/10 shadow-sm"
        >
          <Leaf size={16} className="text-[var(--color-accent)] animate-pulse" />
          <span className="text-sm font-medium tracking-wide">Environmental Documentation Initiative</span>
        </motion.div>
        
        <h1 className="font-poppins font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.1] mb-8 bg-clip-text text-transparent bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-accent)] to-green-400">
          Wikipedia Page Development
          <br />
          <span className="text-[var(--foreground)]">for NSWF</span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-[var(--foreground)]/70 mb-12 max-w-3xl mx-auto leading-relaxed">
          A premium documentation portal for Nisarg Srishti Welfare Foundation, showcasing structured research, verifiable sources, and a publication-ready Wikipedia draft.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <button 
            onClick={() => scrollTo('draft')}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-white font-semibold text-lg hover:shadow-xl hover:shadow-[var(--color-accent)]/30 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group"
          >
            View Wikipedia Draft 
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={() => scrollTo('about')}
            className="w-full sm:w-auto px-8 py-4 rounded-full border-2 border-[var(--color-accent)]/50 bg-[var(--background)]/50 backdrop-blur-sm text-[var(--foreground)] font-semibold text-lg hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]/5 transition-all flex items-center justify-center gap-2"
          >
            Explore Project
          </button>
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
        className="absolute bottom-12 text-[var(--foreground)]/40 hover:text-[var(--color-accent)] cursor-pointer transition-colors"
        onClick={() => scrollTo('about')}
      >
        <ChevronDown size={36} strokeWidth={1.5} />
      </motion.div>
    </section>
  );
}
