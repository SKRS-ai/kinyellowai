import React from 'react';

export const GlobalSidebar = () => {
  return (
    <aside className="w-64 h-full bg-glass border-r border-white/10 flex flex-col p-6 space-y-8">
      {/* AIID Profile Section */}
      <div className="flex flex-col items-center text-center space-y-3">
        <div className="relative w-24 h-24 rounded-full border-2 border-gold-500 p-1 animate-gold-glow">
          <img 
            src="/assets/user-avatar.jpg" 
            alt="AIID Profile" 
            className="rounded-full w-full h-full object-cover grayscale hover:grayscale-0 transition-all"
          />
        </div>
        <div>
          <h2 className="text-white font-bold">AIID Profile ✅</h2>
          <p className="text-xs text-white/50">Verified User</p>
        </div>
      </div>

      {/* Halo Progress Meter */}
      <div className="flex-1 flex flex-col items-center py-4">
        <div className="w-2 h-full bg-white/10 rounded-full relative overflow-hidden">
          {/* Active Progress */}
          <div 
            className="absolute bottom-0 w-full bg-gradient-to-t from-gold-600 to-gold-400 rounded-full shadow-[0_0_10px_#FFD700]"
            style={{ height: '65%' }}
          />
        </div>
        <p className="text-[10px] text-gold-500 mt-4 text-center leading-tight uppercase font-bold">
          Next Reward:<br/>50 Kin Coins
        </p>
      </div>

      {/* Sovereign Status Toggle */}
      <div className="pt-4 border-t border-white/10">
        <div className="flex items-center space-x-2 text-xs text-white/70">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span>Identity Verified</span>
        </div>
      </div>
    </aside>
  );
};