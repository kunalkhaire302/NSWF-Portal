"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Camera, ShieldCheck } from 'lucide-react';

export default function MediaGallery() {
  const images = [
    { title: 'Tree Plantation Drive', desc: 'Volunteers planting saplings in urban areas.', gradient: 'from-green-400 to-emerald-600' },
    { title: 'Educational Seminar', desc: 'Noise pollution awareness in local schools.', gradient: 'from-blue-400 to-indigo-600' },
    { title: 'Community Meeting', desc: 'Engaging citizens on sustainability.', gradient: 'from-purple-400 to-pink-600' },
    { title: 'Silent Zone Campaign', desc: 'Advocacy near hospital premises.', gradient: 'from-orange-400 to-red-600' },
    { title: 'Waste Segregation', desc: 'Demonstrating proper recycling methods.', gradient: 'from-teal-400 to-emerald-600' },
    { title: 'Founder Address', desc: 'Dr. Kavathekar speaking at a conference.', gradient: 'from-yellow-400 to-orange-600' }
  ];

  return (
    <section id="media" className="py-32 px-4 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-1 rounded-full bg-purple-500/10 text-purple-500 font-semibold text-sm mb-4">
            Visual Documentation
          </div>
          <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6 text-[var(--foreground)]">Media Gallery</h2>
          <p className="text-xl max-w-3xl mx-auto opacity-70 leading-relaxed">
            A curated collection of verified photographs depicting NSWF's grassroots campaigns and community engagement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden rounded-3xl aspect-[4/3] shadow-sm hover:shadow-xl transition-all cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${img.gradient} opacity-80 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 text-white text-xs font-medium">
                <ShieldCheck size={14} /> CC BY-SA 4.0
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center text-white/50 group-hover:text-white/80 transition-colors">
                <Camera size={48} strokeWidth={1} />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform">
                <h3 className="font-poppins font-bold text-xl text-white mb-1">{img.title}</h3>
                <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity delay-100">{img.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
