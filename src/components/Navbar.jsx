import React from 'react';
import { Rocket, Briefcase, GraduationCap, Sparkles } from 'lucide-react';

const navItems = [
  { label: 'AI Resume', href: '#resume' },
  { label: 'Interview Prep', href: '#interview' },
  { label: 'Internships', href: '#internships' },
  { label: 'Jobs', href: '#jobs' },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-[#d9ccbf]/70 bg-[#d9ccbf]/90 border-b border-[#1c334a]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="p-2 rounded-md bg-[#1c334a] text-[#d9ccbf]"><Rocket size={18} /></div>
            <span className="text-xl" style={{ fontFamily: 'Bree Serif, serif', color: '#1c334a' }}>GradLaunch</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium hover:opacity-80 transition"
                style={{ color: '#1c334a', fontFamily: 'Poppins, sans-serif' }}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="#get-started"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md shadow-sm transition hover:translate-y-[-1px]"
              style={{ backgroundColor: '#1c334a', color: '#d9ccbf', fontFamily: 'Poppins, sans-serif' }}
            >
              <Sparkles size={16} /> Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
