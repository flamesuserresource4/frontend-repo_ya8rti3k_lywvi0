import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#d9ccbf' }}>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        {/* Simple anchors for sections referenced by nav/CTAs */}
        <section id="resume" className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl mb-3" style={{ color: '#1c334a', fontFamily: 'Bree Serif, serif' }}>AI Resume Builder</h2>
            <p className="mb-6" style={{ color: '#1c334a', fontFamily: 'Poppins, sans-serif' }}>
              Chat with the assistant and provide your details — it will assemble your resume and ask for any missing information.
            </p>
            <div className="rounded-lg p-6 border bg-white/50 backdrop-blur" style={{ borderColor: '#1c334a20' }}>
              <p className="text-sm" style={{ color: '#1c334a', fontFamily: 'Poppins, sans-serif' }}>
                This is a visual preview of the feature. Connect it to the backend when you’re ready.
              </p>
            </div>
          </div>
        </section>

        <section id="interview" className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl mb-3" style={{ color: '#1c334a', fontFamily: 'Bree Serif, serif' }}>Interview Preparing</h2>
            <p className="mb-6" style={{ color: '#1c334a', fontFamily: 'Poppins, sans-serif' }}>
              Upload or paste a job description and get tailored questions and key points to focus on.
            </p>
            <div className="rounded-lg p-6 border bg-white/50 backdrop-blur" style={{ borderColor: '#1c334a20' }}>
              <p className="text-sm" style={{ color: '#1c334a', fontFamily: 'Poppins, sans-serif' }}>
                Coming soon: parsing listings and generating targeted practice sessions.
              </p>
            </div>
          </div>
        </section>

        <section id="internships" className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl mb-3" style={{ color: '#1c334a', fontFamily: 'Bree Serif, serif' }}>Internship Finder</h2>
            <p className="mb-6" style={{ color: '#1c334a', fontFamily: 'Poppins, sans-serif' }}>
              Companies can register and publish internships. Students can browse and apply in a few clicks.
            </p>
            <div className="rounded-lg p-6 border bg-white/50 backdrop-blur" style={{ borderColor: '#1c334a20' }}>
              <p className="text-sm" style={{ color: '#1c334a', fontFamily: 'Poppins, sans-serif' }}>
                This will display live listings once the backend is wired up.
              </p>
            </div>
          </div>
        </section>

        <section id="jobs" className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl mb-3" style={{ color: '#1c334a', fontFamily: 'Bree Serif, serif' }}>Job Finding</h2>
            <p className="mb-6" style={{ color: '#1c334a', fontFamily: 'Poppins, sans-serif' }}>
              Curated new‑grad roles that don’t require prior experience.
            </p>
            <div className="rounded-lg p-6 border bg-white/50 backdrop-blur" style={{ borderColor: '#1c334a20' }}>
              <p className="text-sm" style={{ color: '#1c334a', fontFamily: 'Poppins, sans-serif' }}>
                Soon: filters, saved roles, and one‑click applications.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
