import React from 'react';

// Define the data for your premium spots
const showcaseItems = [
  { id: 1, name: 'DIGITAL WORLD GRAVEYARD™', subtitle: 'PERMANENT LEGACY ARCHIVE', url: '/graveyard' },
  { id: 2, name: 'YOURREALAIID.ME', subtitle: 'PERSONA HUB // VERIFIED HUMANS', url: 'https://yourrealaiid.me' },
  { id: 3, name: 'KIN INDEX', subtitle: 'KININDEX.COM', url: 'https://kinindex.com' },
  { id: 4, name: 'MY AI KIN', subtitle: 'MYAIKIN.COM', url: 'https://myaikin.com' },
  { id: 5, name: 'INTEGRITY INDEX', subtitle: 'IDENTIFICATION INDEX', url: '/integrity-index' },
  { id: 6, name: 'AI IPVB', subtitle: 'AIIPVB.COM', url: 'https://aiipvb.com' },
  { id: 7, name: 'EVERWARD TOURS', subtitle: 'EVERWARDTOURS.COM', url: 'https://everwardtours.com' },
  { id: 8, name: 'KINOS INTAKE', subtitle: 'SECURE BIOMETRIC ONBOARDING', url: '/intake' },
  { id: 9, name: 'MY PROFILE', subtitle: 'IDENTITY_CORE ARCHITECT', url: '/profile' },
];

export const ShowcaseGrid = () => {
  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      {/* Grid Layout: 1 col on mobile, 2 on tablet, 3 on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {showcaseItems.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target={item.url.startsWith('http') ? '_blank' : '_self'}
            rel="noopener noreferrer"
            className="group relative block p-6 border border-yellow-500/30 bg-black hover:border-yellow-400 transition-all duration-300 transform hover:-translate-y-1"
          >
            {/* Glow Effect on Hover */}
            <div className="absolute inset-0 bg-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <h3 className="text-sm font-bold tracking-widest text-yellow-500 mb-1 uppercase">
              {item.name}
            </h3>
            <p className="text-[10px] text-gray-500 font-mono tracking-tighter uppercase">
              {item.subtitle}
            </p>

            {/* Decorative Corner Element */}
            <div className="absolute bottom-2 right-2 w-2 h-2 border-r border-b border-yellow-600 opacity-50 group-hover:opacity-100" />
          </a>
        ))}
      </div>
    </div>
  );
};