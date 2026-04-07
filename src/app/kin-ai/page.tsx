'use client';
import React, { useState } from 'react';
import NexusGlobe from '../../components/kin-ai/nexus-globe';
import HudOverlay from '../../components/kin-ai/hud-overlay';
import LawTable from '../../components/kin-ai/law-table';

export default function KinAiPage() {
  // Rest of your code stays the same...
  const [isHudOpen, setIsHudOpen] = useState(true);
  const [selectedData, setSelectedData] = useState({
    country: "GLOBAL_NEXUS",
    safetyScore: 92,
    summary: "Standard identity encryption protocols active across all nodes.",
    impact: "OPTIMIZED"
  });

  return (
    <main className="relative w-screen h-screen bg-black overflow-hidden">
      <NexusGlobe />

      <div className="absolute inset-0 z-20 pointer-events-none">
        <HudOverlay 
          isOpen={isHudOpen} 
          onClose={() => setIsHudOpen(false)} 
          data={selectedData} 
        />
      </div>

      <div className="absolute bottom-10 right-10 z-30 w-80">
        <LawTable />
      </div>
    </main>
  );
}