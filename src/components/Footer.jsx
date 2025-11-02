import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-16 border-t" style={{ backgroundColor: '#d9ccbf', borderColor: '#1c334a20' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm" style={{ color: '#1c334a', fontFamily: 'Poppins, sans-serif' }}>
          © {new Date().getFullYear()} GradLaunch — Built for new grads.
        </p>
        <div className="flex items-center gap-6">
          <a href="#" className="text-sm hover:opacity-80" style={{ color: '#1c334a', fontFamily: 'Poppins, sans-serif' }}>Privacy</a>
          <a href="#" className="text-sm hover:opacity-80" style={{ color: '#1c334a', fontFamily: 'Poppins, sans-serif' }}>Terms</a>
          <a href="#" className="text-sm hover:opacity-80" style={{ color: '#1c334a', fontFamily: 'Poppins, sans-serif' }}>Contact</a>
        </div>
      </div>
    </footer>
  );
}
