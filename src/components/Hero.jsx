import React, { useEffect } from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  // Inject Google Fonts for Bree Serif and Poppins without modifying index.html
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Bree+Serif&family=Poppins:wght@300;400;500;600;700&display=swap';
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <section className="relative w-full" style={{ backgroundColor: '#d9ccbf' }}>
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay to enhance readability without blocking interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#d9ccbf]/40 via-[#d9ccbf]/70 to-[#d9ccbf]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-[78vh] flex flex-col items-center justify-center text-center">
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-4"
            style={{ color: '#1c334a', fontFamily: 'Bree Serif, serif' }}
          >
            Launch your career with intelligent tools
          </h1>
          <p
            className="max-w-2xl text-base sm:text-lg md:text-xl mb-8"
            style={{ color: '#1c334a', fontFamily: 'Poppins, sans-serif' }}
          >
            A platform tailored for new graduates: build a standout resume with AI, prep for interviews, and find curated internships and first jobs.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <a
              href="#resume"
              className="px-6 py-3 rounded-md shadow-sm transition hover:translate-y-[-1px]"
              style={{ backgroundColor: '#1c334a', color: '#d9ccbf', fontFamily: 'Poppins, sans-serif' }}
            >
              Build my AI Resume
            </a>
            <a
              href="#browse"
              className="px-6 py-3 rounded-md border transition hover:bg-[#1c334a]/5"
              style={{ borderColor: '#1c334a', color: '#1c334a', fontFamily: 'Poppins, sans-serif' }}
            >
              Browse Internships & Jobs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
