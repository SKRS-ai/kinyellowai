import React from 'react';

interface CardProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export const KintsugiCard = ({ children, title, className }: CardProps) => {
  return (
    <div className={`relative bg-glass rounded-xl overflow-hidden border-kintsugi p-6 ${className}`}>
      {/* Background Texture Overlay (Digital Veins) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('/assets/gold-veins.png')] bg-cover" />
      
      {title && (
        <h3 className="text-gold-500 font-bold uppercase tracking-widest text-sm mb-4 border-b border-white/10 pb-2">
          {title}
        </h3>
      )}
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};