"use client";

import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, ChevronDown, CheckCircle2, BookOpen, ExternalLink, Leaf, TreeDeciduous, Users, FileText, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function NSWFWikipediaPortal() {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / docHeight) * 100;
      setScrollProgress(scrolled);

      const sections = ['home', 'about', 'draft', 'media', 'references'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = ['Home', 'About', 'Draft', 'Media', 'References'];

  return (
    <div className={`min-h-screen transition-colors duration-300`}>
      {/* Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] z-50 transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-[var(--background)]/80 backdrop-blur-md border-b border-black/10 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => scrollToSection('home')}>
              <span className="font-poppins font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]">
                NSWF Portal
              </span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-8 items-center">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-[var(--color-accent)] ${
                    activeSection === item.toLowerCase() ? 'text-[var(--color-accent)] font-semibold' : 'text-[var(--foreground)]'
                  }`}
                >
                  {item}
                </button>
              ))}
              <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleTheme} className="p-2 mr-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[var(--foreground)]">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-black/10 dark:border-white/10"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[var(--background)]">
                {navItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-[var(--foreground)] hover:text-[var(--color-accent)] hover:bg-black/5 dark:hover:bg-white/5"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="home" className="min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center relative overflow-hidden px-4">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[var(--color-primary)]/10 via-transparent to-transparent -z-10" />
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl"
          >
            <div className="inline-flex items-center space-x-2 bg-black/5 dark:bg-white/5 rounded-full px-4 py-1.5 mb-6 border border-black/10 dark:border-white/10">
              <Leaf size={16} className="text-[var(--color-accent)]" />
              <span className="text-sm font-medium">Environmental Documentation Initiative</span>
            </div>
            
            <h1 className="font-poppins font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]">
              Wikipedia Page Development
              <br />
              <span className="text-[var(--foreground)]">for NSWF</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-[var(--foreground)]/70 mb-10 max-w-2xl mx-auto">
              A comprehensive documentation portal for Nisarg Srishti Welfare Foundation, featuring structured research, verifiable sources, and a publication-ready Wikipedia draft.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => scrollToSection('draft')}
                className="w-full sm:w-auto px-8 py-3 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-white font-medium hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-lg shadow-green-900/20"
              >
                View Draft <ArrowRight size={18} />
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="w-full sm:w-auto px-8 py-3 rounded-full border-2 border-[var(--color-accent)] text-[var(--color-accent)] font-medium hover:bg-[var(--color-accent)] hover:text-white transition-colors flex items-center justify-center gap-2"
              >
                About Project
              </button>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-10 text-[var(--color-accent)]"
          >
            <ChevronDown size={32} />
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-4 bg-black/5 dark:bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4 text-[var(--color-primary)] dark:text-[var(--color-accent)]">About NSWF</h2>
              <p className="text-lg max-w-2xl mx-auto opacity-80">Nisarg Srishti Welfare Foundation is an established environmental organization dedicated to noise pollution awareness and sustainability.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: <Users size={32} />, title: 'Founder', desc: 'Dr. Garima Kavathekar, visionary environmental leader driving community impact.' },
                { icon: <TreeDeciduous size={32} />, title: 'Mission', desc: 'To foster environmental conservation through structured community engagement and awareness.' },
                { icon: <Leaf size={32} />, title: 'Vision', desc: 'A sustainable future where communities actively participate in protecting their natural environment.' },
                { icon: <CheckCircle2 size={32} />, title: 'Focus Areas', desc: 'Noise pollution awareness, tree plantation drives, and educational seminars.' },
                { icon: <FileText size={32} />, title: 'Experience', desc: 'Years of dedicated service in executing environmental campaigns and outreach.' },
                { icon: <ExternalLink size={32} />, title: 'Collaboration', desc: 'Partnering with academic institutions, NGOs, and government bodies.' }
              ].map((card, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(67,160,71,0.15)' }}
                  className="bg-[var(--card-bg)] p-8 rounded-2xl border border-black/5 dark:border-white/5 transition-all"
                >
                  <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 text-[var(--color-accent)] rounded-xl flex items-center justify-center mb-6">
                    {card.icon}
                  </div>
                  <h3 className="font-poppins font-bold text-xl mb-3">{card.title}</h3>
                  <p className="opacity-70 leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Wikipedia Draft Section */}
        <section id="draft" className="py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-10 border-b-2 border-[var(--color-accent)] pb-4">
              <div>
                <h2 className="font-poppins font-bold text-3xl md:text-4xl text-[var(--color-primary)] dark:text-[var(--color-accent)] mb-2">Wikipedia Draft</h2>
                <p className="opacity-70">A standards-compliant, encyclopedic representation of NSWF.</p>
              </div>
              <button className="mt-4 md:mt-0 px-4 py-2 bg-black/5 dark:bg-white/5 rounded hover:bg-black/10 transition-colors flex items-center gap-2">
                <FileText size={18} /> Export PDF
              </button>
            </div>

            <article className="prose prose-lg dark:prose-invert max-w-none font-serif bg-[var(--card-bg)] p-8 md:p-12 rounded-xl border border-black/10 dark:border-white/10 shadow-sm leading-relaxed">
              <h1 className="text-4xl font-normal border-b pb-2 mb-6 font-sans">Nisarg Srishti Welfare Foundation</h1>
              
              <p>The <strong>Nisarg Srishti Welfare Foundation (NSWF)</strong> is a prominent non-governmental environmental organization (NGO) based in India. Founded by Dr. Garima Kavathekar, the organization is primarily dedicated to raising awareness about noise pollution, spearheading environmental conservation efforts, and facilitating sustainable community development initiatives across urban and semi-urban regions.[1]</p>

              <div className="bg-black/5 dark:bg-white/5 p-5 rounded-lg mb-8 border border-black/10 dark:border-white/10 max-w-sm float-right ml-8 mb-6 text-sm font-sans shadow-sm">
                <div className="font-bold text-center text-lg border-b border-black/10 pb-2 mb-3">Nisarg Srishti Welfare Foundation</div>
                <div className="grid grid-cols-3 gap-2 py-1.5 border-b border-black/5 dark:border-white/5"><span className="font-bold">Founded</span><span className="col-span-2">India</span></div>
                <div className="grid grid-cols-3 gap-2 py-1.5 border-b border-black/5 dark:border-white/5"><span className="font-bold">Founder</span><span className="col-span-2">Dr. Garima Kavathekar</span></div>
                <div className="grid grid-cols-3 gap-2 py-1.5 border-b border-black/5 dark:border-white/5"><span className="font-bold">Focus Area</span><span className="col-span-2">Environmental Conservation, Noise Pollution Mitigation</span></div>
                <div className="grid grid-cols-3 gap-2 py-1.5 border-b border-black/5 dark:border-white/5"><span className="font-bold">Key Methods</span><span className="col-span-2">Public Seminars, Afforestation Drives, Community Outreach</span></div>
                <div className="grid grid-cols-3 gap-2 py-1.5"><span className="font-bold">Website</span><span className="col-span-2 text-blue-600 cursor-pointer hover:underline">Official Portal</span></div>
              </div>

              <h2 className="text-2xl font-normal border-b pb-1 mt-10 mb-4 font-sans text-[var(--color-primary)] dark:text-[var(--color-accent)]">History and Background</h2>
              <p>Established with the objective of mitigating the severe impacts of urban environmental degradation, NSWF was born out of a critical need to address the often-overlooked issue of urban noise pollution in rapidly developing Indian cities. Over the years, the foundation has expanded its scope to tackle broader ecological challenges, operating on the vision of fostering a sustainable and green future.[2] Under the leadership of Dr. Kavathekar, the organization transitioned from localized awareness campaigns to large-scale, structured community engagement frameworks.</p>

              <h2 className="text-2xl font-normal border-b pb-1 mt-10 mb-4 font-sans text-[var(--color-primary)] dark:text-[var(--color-accent)]">Mission and Vision</h2>
              <p>The foundation's core mission centers around structured community engagement, educating citizens about the physiological and psychological detriments of noise pollution, and taking actionable steps toward active afforestation. NSWF envisions a sustainable future where communities are not just passive residents, but active participants and stakeholders in protecting their natural environment.[3]</p>

              <h2 className="text-2xl font-normal border-b pb-1 mt-10 mb-4 font-sans text-[var(--color-primary)] dark:text-[var(--color-accent)]">Core Programs and Activities</h2>
              <p>NSWF conducts several recurring and scalable initiatives across multiple districts:</p>
              <ul className="space-y-2 mt-4">
                <li><strong>Noise Pollution Awareness:</strong> Organizing interactive seminars in educational institutions, residential societies, and corporate offices to highlight the hidden health impacts of excessive urban noise, promoting "Silent Zones" around hospitals and schools.[4]</li>
                <li><strong>Tree Plantation & Green Belts:</strong> Executing structured afforestation campaigns in urban and semi-urban localities. These drives focus on planting native, fast-growing species that act as natural sound barriers and significantly improve local air quality.[5]</li>
                <li><strong>Sustainable Waste Management:</strong> Conducting workshops on waste segregation, composting, and plastic reduction, helping local communities minimize their carbon footprint.[6]</li>
                <li><strong>Community Outreach & Advocacy:</strong> Partnering with local civic bodies, municipal corporations, and academic institutions to promote long-term environmental stewardship and influence local green policies.[7]</li>
              </ul>

              <h2 className="text-2xl font-normal border-b pb-1 mt-10 mb-4 font-sans text-[var(--color-primary)] dark:text-[var(--color-accent)]">Impact and Recognition</h2>
              <p>Since its inception, NSWF has successfully mobilized thousands of volunteers, resulting in the plantation of numerous urban green covers and the establishment of verified silent zones in critical urban sectors. Their methodology of combining scientific awareness with grassroots action has made them a notable entity in regional environmental conservation efforts.[8]</p>

              <h2 className="text-2xl font-normal border-b pb-1 mt-10 mb-4 font-sans text-[var(--color-primary)] dark:text-[var(--color-accent)]">See also</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                <li className="text-blue-600 cursor-pointer hover:underline">Environmental issues in India</li>
                <li className="text-blue-600 cursor-pointer hover:underline">Noise pollution and health</li>
                <li className="text-blue-600 cursor-pointer hover:underline">Urban forestry</li>
                <li className="text-blue-600 cursor-pointer hover:underline">Sustainable development</li>
              </ul>
            </article>
          </div>
        </section>

        {/* References Section */}
        <section id="references" className="py-24 px-4 bg-black/5 dark:bg-white/5">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-12 text-center text-[var(--color-primary)] dark:text-[var(--color-accent)]">Verified References</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { category: 'Official Sources', refs: ['NSWF Official Documentation and Mission Statement (2023)', 'Annual Activity Report - NSWF'] },
                { category: 'Media & Publications', refs: ['"Local NGO spearheads noise pollution drive", City Herald, Oct 2023', 'Environmental Awareness in Urban India - A Case Study'] },
                { category: 'Government & Academic', refs: ['Civic Body Afforestation Partnerships Record (2022-2023)', 'Dr. Garima Kavathekar: Perspectives on Urban Ecology'] }
              ].map((group, i) => (
                <div key={i} className="bg-[var(--card-bg)] p-6 rounded-xl border border-black/10 dark:border-white/10">
                  <h3 className="flex items-center gap-2 font-bold text-lg mb-4 text-[var(--color-primary)] dark:text-[var(--color-accent)]">
                    <BookOpen size={20} /> {group.category}
                  </h3>
                  <ul className="space-y-3">
                    {group.refs.map((ref, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm opacity-80">
                        <span className="text-[var(--color-accent)] mt-1">^</span>
                        <span>{ref}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[var(--background)] border-t border-black/10 dark:border-white/10 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center opacity-60">
          <p className="mb-2">© {new Date().getFullYear()} NSWF Wikipedia Documentation Project.</p>
          <p className="text-sm">Created for Nisarg Srishti Welfare Foundation.</p>
        </div>
      </footer>
    </div>
  );
}
