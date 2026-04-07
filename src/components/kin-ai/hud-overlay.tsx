import React from 'react';

// This interface tells TypeScript what to expect
interface HudProps {
  isOpen: boolean;
  onClose: () => void;
  data: any;
}

const HudOverlay = ({ isOpen, onClose, data }: HudProps) => {
  if (!isOpen) return null;
  // ... rest of your return code

  return (
    <div className="p-10 flex flex-col justify-between h-full border border-yellow-500/10">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-yellow-500 animate-pulse rounded-full" />
          <span className="text-yellow-500 font-mono text-xs tracking-tighter">
            SYSTEM: {data?.country || 'LOADING'} // STATUS: ACTIVE
          </span>
        </div>
        <button 
          onClick={onClose}
          className="text-white/50 text-[10px] hover:text-yellow-500 pointer-events-auto"
        >
          [ CLOSE_HUD ]
        </button>
      </div>
    </div>
  );
};

export default HudOverlay;