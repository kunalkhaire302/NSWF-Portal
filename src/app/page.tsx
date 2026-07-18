import Navigation from '@/components/layout/Navigation';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import ResearchProcess from '@/components/sections/ResearchProcess';
import WikiDraft from '@/components/sections/WikiDraft';
import MediaGallery from '@/components/sections/MediaGallery';
import ProjectTimeline from '@/components/sections/ProjectTimeline';
import References from '@/components/sections/References';

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] transition-colors duration-300">
      <Navigation />
      <main>
        <Hero />
        <About />
        <ResearchProcess />
        <WikiDraft />
        <MediaGallery />
        <ProjectTimeline />
        <References />
      </main>
      
      {/* Footer */}
      <footer className="bg-[var(--background)] border-t border-black/10 dark:border-white/10 py-12 px-4 mt-20 relative z-10">
        <div className="max-w-7xl mx-auto text-center opacity-60">
          <p className="mb-2 font-medium">© {new Date().getFullYear()} NSWF Wikipedia Documentation Project.</p>
          <p className="text-sm">Created for Nisarg Srishti Welfare Foundation.</p>
        </div>
      </footer>
    </div>
  );
}
