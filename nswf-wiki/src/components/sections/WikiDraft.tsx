"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, ChevronRight } from 'lucide-react';

export default function WikiDraft() {
  const [activeId, setActiveId] = useState('');

  const sections = [
    { id: 'lead', title: 'Lead' },
    { id: 'history', title: 'History' },
    { id: 'mission', title: 'Mission and Objectives' },
    { id: 'activities', title: 'Activities' },
    { id: 'projects', title: 'Projects' },
    { id: 'events', title: 'Events' },
    { id: 'structure', title: 'Organizational Structure' },
    { id: 'certifications', title: 'Certifications' },
    { id: 'membership', title: 'Membership' },
    { id: 'policies', title: 'Policies' },
    { id: 'media', title: 'Media Coverage' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const headingElements = sections.map(section => document.getElementById(section.id));
      let currentId = '';
      for (const el of headingElements) {
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            currentId = el.id;
          }
        }
      }
      setActiveId(currentId || 'lead');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const [isExporting, setIsExporting] = useState(false);

  const handleExportPDF = async () => {
    setIsExporting(true);
    try {
      // Dynamically import to avoid SSR issues
      const html2pdf = (await import('html2pdf.js')).default;
      const element = document.getElementById('wiki-article');
      
      if (!element) return;

      const opt = {
        margin:       [0.5, 0.5, 0.5, 0.5],
        filename:     'NSWF_Wikipedia_Draft.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
      };

      await html2pdf().set(opt).from(element).save();
    } catch (err) {
      console.error('Failed to export PDF:', err);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <section id="draft" className="py-32 px-4 relative bg-[#0000000d] dark:bg-[#ffffff0d]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row justify-between items-end mb-12 border-b-2 border-[#0000001a] dark:border-[#ffffff1a] pb-6"
        >
          <div>
            <div className="inline-block px-4 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] dark:text-[var(--color-accent)] font-semibold text-sm mb-4">
              Final Deliverable
            </div>
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-[var(--foreground)] mb-2">Wikipedia Draft</h2>
            <p className="text-lg opacity-70">A standards-compliant, encyclopedic representation of NSWF.</p>
          </div>
          <button 
            onClick={handleExportPDF}
            disabled={isExporting}
            className="mt-6 md:mt-0 px-6 py-3 bg-[var(--card-bg)] rounded-full hover:bg-[var(--color-accent)] hover:text-white border border-[#0000001a] dark:border-[#ffffff1a] transition-all flex items-center gap-2 font-medium shadow-sm hover:shadow-lg disabled:opacity-50"
          >
            <Download size={18} className={isExporting ? "animate-bounce" : ""} /> 
            {isExporting ? "Exporting..." : "Export PDF"}
          </button>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sticky Table of Contents */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28 bg-[var(--card-bg)] p-6 rounded-2xl border border-[#0000001a] dark:border-[#ffffff1a] shadow-lg">
              <h3 className="font-poppins font-bold text-lg mb-4 text-[var(--foreground)] border-b border-[#0000001a] dark:border-[#ffffff1a] pb-2">Contents</h3>
              <nav className="flex flex-col gap-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`text-left text-sm flex items-center gap-2 py-1 transition-all ${
                      activeId === section.id 
                        ? 'text-[var(--color-accent)] font-semibold translate-x-2' 
                        : 'text-[var(--foreground)] opacity-70 hover:opacity-100 hover:text-[var(--color-accent)] hover:translate-x-1'
                    }`}
                  >
                    {activeId === section.id && <ChevronRight size={14} className="flex-shrink-0" />}
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Article Content */}
          <motion.article 
            id="wiki-article"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex-1 prose prose-lg dark:prose-invert max-w-none font-serif bg-[var(--card-bg)] p-8 md:p-12 lg:p-16 rounded-3xl border border-[#0000001a] dark:border-[#ffffff1a] shadow-2xl leading-relaxed"
          >
            <h1 className="text-4xl md:text-5xl font-normal border-b border-[#0000001a] dark:border-[#ffffff1a] pb-4 mb-8 font-sans">
              Nisarg Srishti Welfare Foundation
            </h1>
            
            <h2 id="lead" className="text-3xl font-normal border-b border-[#0000001a] dark:border-[#ffffff1a] pb-2 mt-8 mb-6 font-sans text-[var(--color-primary)] dark:text-[var(--color-accent)] flow-root">Lead</h2>
            <p>The Nisarg Srishti Welfare Foundation (NSWF) is a non-governmental environmental organization based in India. Founded on 11 January 2023, the organization focuses primarily on mitigating noise pollution, alongside promoting broader environmental and cultural conservation. NSWF conducts awareness campaigns, research initiatives, and community drives aimed at fostering a healthy environment for humans and animals.</p>

            <h2 id="history" className="text-3xl font-normal border-b border-[#0000001a] dark:border-[#ffffff1a] pb-2 mt-12 mb-6 font-sans text-[var(--color-primary)] dark:text-[var(--color-accent)] flow-root">History</h2>
            <p>The Nisarg Srishti Welfare Foundation was established on 11 January 2023. The organization was founded with the primary objective of addressing the often-overlooked issue of urban noise pollution and mitigating environmental degradation in India. Over time, NSWF expanded its focus to encompass various aspects of human welfare, women's empowerment, education, culture, and literature.</p>

            <h2 id="mission" className="text-3xl font-normal border-b border-[#0000001a] dark:border-[#ffffff1a] pb-2 mt-12 mb-6 font-sans text-[var(--color-primary)] dark:text-[var(--color-accent)] flow-root">Mission and Objectives</h2>
            <p>NSWF's primary mission centers around environmental conservation with a strong emphasis on noise pollution awareness. The foundation seeks to educate the public on the adverse physiological and psychological effects of noise pollution through structured community engagement. Its broader objectives include promoting human welfare, advancing women's empowerment, supporting educational initiatives, and fostering cultural and community development. The organization aims to encourage sustainable practices and provides youth career guidance.</p>

            <h2 id="activities" className="text-3xl font-normal border-b border-[#0000001a] dark:border-[#ffffff1a] pb-2 mt-12 mb-6 font-sans text-[var(--color-primary)] dark:text-[var(--color-accent)] flow-root">Activities</h2>
            <p>The foundation conducts ongoing public awareness campaigns focusing on the mitigation of noise pollution. These activities include organizing workshops, seminars, and interactive sessions in schools, colleges, corporate offices, and local communities. NSWF's outreach efforts utilize visual presentations and group discussions to educate citizens, particularly students, about the sources, effects, and prevention of noise pollution. Additionally, the organization engages in research-based solutions, community development programs, and advocates for the establishment of designated quiet zones near sensitive areas such as hospitals and schools.</p>

            <h2 id="projects" className="text-3xl font-normal border-b border-[#0000001a] dark:border-[#ffffff1a] pb-2 mt-12 mb-6 font-sans text-[var(--color-primary)] dark:text-[var(--color-accent)] flow-root">Projects</h2>
            <h3 className="text-2xl font-normal mt-8 mb-4 text-[#000000cc] dark:text-[#ffffffcc]">Control Honk</h3>
            <p>A flagship initiative of NSWF is the "Control Honk" project, which aims to reduce automobile horn-related noise pollution. The project centers around an anti-honking device invented by the organization's engineer, Gaurav Kavathekar. As of early 2026, the device was undergoing the patent process. The broader initiative promotes various strategies to combat honking, including driver education, improved traffic management, law enforcement, and the utilization of technology-based solutions.</p>

            <h3 className="text-2xl font-normal mt-8 mb-4 text-[#000000cc] dark:text-[#ffffffcc]">Other Projects</h3>
            <p>Additional initiatives under the organization include the proposed deployment of GSM Noise Data Loggers for environmental monitoring, as well as several thematic programs grouped under the "Ecominds" banner, focusing on the environment, education, health, and women's empowerment.</p>

            <h2 id="events" className="text-3xl font-normal border-b border-[#0000001a] dark:border-[#ffffff1a] pb-2 mt-12 mb-6 font-sans text-[var(--color-primary)] dark:text-[var(--color-accent)] flow-root">Events</h2>
            <p>NSWF has organized numerous events and campaigns to promote its cause:</p>
            <ul className="space-y-4 mt-6">
              <li><strong>14 December 2024:</strong> The foundation inaugurated its first regional office in Pune, designed with eco-friendly infrastructure to model sustainable architecture.</li>
              <li><strong>12 July 2025:</strong> An executive team visited Kalawati Dattatray Kotwal High School in Pune to discuss noise pollution and eco-friendly habits.</li>
              <li><strong>5 August 2025:</strong> Campaigns were held at the Late Ramchandra Bankar School & Sports Complex in Pune.</li>
              <li><strong>23 August 2025:</strong> Students from the Gokhale Institute of Politics and Economics (GIPE) visited the NSWF office to meet with the foundation's leadership.</li>
              <li><strong>Ganesh Utsav 2025:</strong> In collaboration with GIPE students, NSWF conducted real-time noise measurements at popular mandals, processions, and crowded areas across Pune to gather data on festival noise and advocate for eco-friendly celebrations.</li>
              <li><strong>20 September 2025:</strong> An interactive awareness campaign was held at Nutan Madhyamik Vidyalaya in Vadki, Pune.</li>
              <li><strong>10 January 2026:</strong> A noise-pollution awareness workshop and student competition were conducted at Samata Vidyalaya, Uruli Devachi, Pune.</li>
              <li><strong>Early 2026:</strong> In conjunction with Savitribai Phule Jayanti and National Girl Child Day, NSWF partnered with Electrofine Recycling Pvt. Ltd. to host a noise pollution and e-waste awareness event at Gyanprabodhini Secondary and Junior College in Pune.</li>
              <li>Other notable events include campaigns at Dnyan Prabodhini Madhyamik and Kanishtha Mahavidyalaya, Vardhaman English Medium School, and Sane Guruji Shikshan Sanstha.</li>
            </ul>

            <h2 id="structure" className="text-3xl font-normal border-b border-[#0000001a] dark:border-[#ffffff1a] pb-2 mt-12 mb-6 font-sans text-[var(--color-primary)] dark:text-[var(--color-accent)] flow-root">Organizational Structure</h2>
            <h3 className="text-2xl font-normal mt-8 mb-4 text-[#000000cc] dark:text-[#ffffffcc]">Directors</h3>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Dr. Garima Kavathekar:</strong> Founder and Director; social worker and creative professional.</li>
              <li><strong>Deepali Kavathekar:</strong> Director; retired medical professional and social worker.</li>
            </ul>

            <h3 className="text-2xl font-normal mt-8 mb-4 text-[#000000cc] dark:text-[#ffffffcc]">Team Members</h3>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Gaurav Kavathekar:</strong> Engineer and inventor of the "Control Honk" device.</li>
              <li><strong>Prathamesh Kavathekar:</strong> Student and social worker.</li>
              <li><strong>Pooja Shinde:</strong> Professional and social worker.</li>
              <li><strong>Versha Shinde:</strong> Homemaker and social worker.</li>
              <li><strong>Anju Namdeo:</strong> Teacher and social worker.</li>
              <li><strong>Rajendra Kulkarni:</strong> Manager and Event Manager.</li>
              <li><strong>Neena Singh:</strong> Project Head.</li>
            </ul>

            <h3 className="text-2xl font-normal mt-8 mb-4 text-[#000000cc] dark:text-[#ffffffcc]">Advisors</h3>
            <p>The foundation is guided by an advisory board comprising professionals from various fields:</p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Ninad Joshi:</strong> Aviation and aerospace industry professional guiding noise-pollution campaigns.</li>
              <li><strong>Dr. Dipali Ghodake:</strong> Specialist in aeroacoustics engineering advising on automotive and aerospace noise issues.</li>
              <li><strong>Shrikrishna Laxman Gadkari:</strong> Professional with a background in corporate social responsibility, legal, and security management.</li>
              <li><strong>Kashyap Bhatt:</strong> Inventor and CEO in the hydroponics and sustainable farming sector.</li>
              <li><strong>Umesh Kumar Agarwal:</strong> Geopolitical analyst, financial advisor, and founder of IndiaChronicle.IN.</li>
              <li><strong>Kunal Jagdale:</strong> Media and IoT professional advising on noise-measurement projects.</li>
              <li><strong>Neelkanth Acharya:</strong> Accounts and taxation advisor.</li>
              <li><strong>Chirantan Dhameliya:</strong> Film producer guiding educational documentary work.</li>
            </ul>

            <h3 className="text-2xl font-normal mt-8 mb-4 text-[#000000cc] dark:text-[#ffffffcc]">Goodwill Ambassadors</h3>
            <p>NSWF enlists influential individuals to advocate for its causes. Notable ambassadors include Dr. Nawal Malu, DSP Umakant Choudhary, Jayshri Mohite, Mohini Priya, Pragya Parsad, Tsewang Rigzin, Minakshi Baleraao, and Dr. Farzana Lakdavala.</p>

            <h2 id="certifications" className="text-3xl font-normal border-b border-[#0000001a] dark:border-[#ffffff1a] pb-2 mt-12 mb-6 font-sans text-[var(--color-primary)] dark:text-[var(--color-accent)] flow-root">Certifications</h2>
            <p>The Nisarg Srishti Welfare Foundation is certified under ISO 14001:2015, an international standard that specifies requirements for an effective environmental management system, reflecting the organization's structured approach to conservation.</p>

            <h2 id="membership" className="text-3xl font-normal border-b border-[#0000001a] dark:border-[#ffffff1a] pb-2 mt-12 mb-6 font-sans text-[var(--color-primary)] dark:text-[var(--color-accent)] flow-root">Membership</h2>
            <p>The organization operates on a volunteer and membership basis, inviting individuals with a willingness to contribute to society and environmental causes to participate in its grassroots initiatives.</p>

            <h2 id="policies" className="text-3xl font-normal border-b border-[#0000001a] dark:border-[#ffffff1a] pb-2 mt-12 mb-6 font-sans text-[var(--color-primary)] dark:text-[var(--color-accent)] flow-root">Policies</h2>
            <p>NSWF operates under a comprehensive Human Resources Policy that emphasizes equal opportunity, non-discrimination, and merit-based recruitment. The policy mandates a workplace free of harassment and outlines provisions for fair compensation, volunteer recognition, and employee well-being. It enforces strict child-safeguarding standards, conflict-of-interest avoidance, and a commitment to health and safety. All members and representatives are expected to uphold the organization's core mission of promoting environmental awareness, honesty, accountability, and sustainable practices.</p>

            <h2 id="media" className="text-3xl font-normal border-b border-[#0000001a] dark:border-[#ffffff1a] pb-2 mt-12 mb-6 font-sans text-[var(--color-primary)] dark:text-[var(--color-accent)] flow-root">Media Coverage</h2>
            <p>The foundation's initiatives, including the "Control Honk" project and various educational campaigns, have received coverage from media outlets and platforms such as Esakal.com, stayfeatured.com, and IndiaChronicle.IN.</p>

            <h2 className="text-3xl font-normal border-b border-[#0000001a] dark:border-[#ffffff1a] pb-2 mt-12 mb-6 font-sans text-[var(--color-primary)] dark:text-[var(--color-accent)] flow-root">See also</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 list-none pl-0">
              <li className="text-[#2563eb] dark:text-[#60a5fa] cursor-pointer hover:underline flex items-center gap-2"><FileText size={16}/> Environmental issues in India</li>
              <li className="text-[#2563eb] dark:text-[#60a5fa] cursor-pointer hover:underline flex items-center gap-2"><FileText size={16}/> Noise pollution</li>
              <li className="text-[#2563eb] dark:text-[#60a5fa] cursor-pointer hover:underline flex items-center gap-2"><FileText size={16}/> Environmental conservation</li>
              <li className="text-[#2563eb] dark:text-[#60a5fa] cursor-pointer hover:underline flex items-center gap-2"><FileText size={16}/> Sustainable development</li>
            </ul>
          </motion.article>
        </div>
      </div>
    </section>
  );
}

