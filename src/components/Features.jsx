import React from 'react';
import { FileText, MessageSquare, Briefcase, ClipboardList } from 'lucide-react';

const features = [
  {
    id: 'resume',
    title: 'AI Resume Builder',
    icon: FileText,
    description:
      'Chat with the assistant to turn your academic work and projects into a polished resume. It will ask follow‑ups to fill any gaps.',
    cta: 'Start your resume',
  },
  {
    id: 'interview',
    title: 'Interview Preparing',
    icon: MessageSquare,
    description:
      'Paste a job link or upload a listing and get tailored questions, talking points, and focus areas to ace the interview.',
    cta: 'Prep for an interview',
  },
  {
    id: 'internships',
    title: 'Internship Finder',
    icon: ClipboardList,
    description:
      'Companies can register and post internships. Students browse opportunities and apply with one profile.',
    cta: 'Explore internships',
  },
  {
    id: 'jobs',
    title: 'Job Finding',
    icon: Briefcase,
    description:
      "Curated entry‑level roles that don't require prior experience, tailored to new graduates.",
    cta: 'Find jobs',
  },
];

function FeatureCard({ icon: Icon, title, description, cta, id }) {
  return (
    <div className="group rounded-xl p-6 border shadow-sm transition hover:shadow-md bg-white/40 backdrop-blur" style={{ borderColor: '#1c334a20' }}>
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-md" style={{ backgroundColor: '#1c334a', color: '#d9ccbf' }}>
          <Icon size={20} />
        </div>
        <div>
          <h3 className="text-xl mb-1" style={{ color: '#1c334a', fontFamily: 'Bree Serif, serif' }}>{title}</h3>
          <p className="text-sm mb-4" style={{ color: '#1c334a', fontFamily: 'Poppins, sans-serif' }}>{description}</p>
          <a
            href={`#${id}`}
            className="inline-flex items-center gap-2 text-sm font-medium"
            style={{ color: '#1c334a', fontFamily: 'Poppins, sans-serif' }}
          >
            {cta}
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section id="browse" className="py-16" style={{ backgroundColor: '#d9ccbf' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl" style={{ color: '#1c334a', fontFamily: 'Bree Serif, serif' }}>Everything you need to get hired</h2>
          <p className="mt-2 text-base max-w-2xl" style={{ color: '#1c334a', fontFamily: 'Poppins, sans-serif' }}>
            From crafting your resume to practicing interviews and applying to internships and jobs — all in one place.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}
