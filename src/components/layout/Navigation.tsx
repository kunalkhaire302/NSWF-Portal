"use client";

import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = ['Home', 'About', 'Research', 'Draft', 'Media', 'Timeline', 'References'];

  useEffect(() => {
    // Scroll listener
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / docHeight) * 100;
      setScrollProgress(scrolled);

      for (const item of navItems) {
        const id = item.toLowerCase();
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Theme initialization
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] z-50 transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />
      <nav className="fixed top-0 w-full z-40 bg-[var(--background)]/70 backdrop-blur-xl border-b border-black/5 dark:border-white/5 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center cursor-pointer group" onClick={() => scrollToSection('home')}>
              <span className="font-poppins font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] group-hover:scale-105 transition-transform">
                NSWF Portal
              </span>
            </div>
            
            <div className="hidden lg:flex space-x-6 items-center">
              {navItems.map((item) => {
                const isActive = activeSection === item.toLowerCase();
                return (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`text-sm font-medium transition-all duration-300 relative px-2 py-1 ${
                      isActive ? 'text-[var(--color-accent)]' : 'text-[var(--foreground)] hover:text-[var(--color-accent)]/80'
                    }`}
                  >
                    {item}
                    {isActive && (
                      <motion.div 
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-green-500/10 dark:bg-green-400/10 rounded-md -z-10"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
              <div className="w-px h-6 bg-black/10 dark:bg-white/10 mx-2" />
              <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>

            <div className="lg:hidden flex items-center">
              <button onClick={toggleTheme} className="p-2 mr-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[var(--foreground)] p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-black/5 dark:border-white/5 bg-[var(--background)]/90 backdrop-blur-3xl shadow-2xl"
            >
              <div className="px-4 pt-2 pb-4 space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      activeSection === item.toLowerCase() 
                        ? 'text-[var(--color-accent)] bg-[var(--color-accent)]/10' 
                        : 'text-[var(--foreground)] hover:bg-black/5 dark:hover:bg-white/5'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
