// @ts-nocheck
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// 1. ACCESS TOKEN
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || '';

const NexusGlobe = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    // 2. INITIALIZE GLOBE
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/dark-v11', 
      projection: { name: 'globe' }, 
      center: [20, 15], 
      zoom: 1.8,
      pitch: 45, 
      antialias: true // Added for smoother visual edges
    });

    mapRef.current = map;

    // 3. SOVEREIGN ATMOSPHERE
    map.on('style.load', () => {
      // Custom atmosphere settings to match the yellow/gold Bureau aesthetic
      map.setFog({
        'color': '#121212', 
        'high-color': '#FFD700', 
        'horizon-blend': 0.05,
        'space-color': '#0a0a0a',
        'star-intensity': 0.8
      });
    });

    // 4. AUTO-ROTATION ENGINE
    const secondsPerRevolution = 180;
    let userInteracting = false;

    const spinGlobe = () => {
      const currentMap = mapRef.current;
      // Added check to ensure map is loaded before spinning
      if (!currentMap || !currentMap.isStyleLoaded() || userInteracting || currentMap.getZoom() >= 5) return;

      const center = currentMap.getCenter();
      const newLng = center.lng - (360 / secondsPerRevolution) * (1 / 60);
      
      currentMap.easeTo({ 
        center: [newLng, center.lat], 
        duration: 0, 
        easing: (n) => n 
      });
    };

    // Interaction Listeners
    map.on('mousedown', () => { userInteracting = true; });
    map.on('mouseup', () => { userInteracting = false; });
    map.on('dragend', () => { userInteracting = false; });
    map.on('moveend', () => { 
        // Small delay after user move to resume rotation naturally
        setTimeout(() => { userInteracting = false; }, 1000); 
    });
    
    const timer = setInterval(spinGlobe, 1000 / 60);

    return () => {
      clearInterval(timer);
      map.remove();
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[500px]">
      <div ref={mapContainerRef} className="absolute inset-0" />
      
      {/* 5. SIGNATURE DESIGN OVERLAY (HUD) */}
      <div className="absolute top-10 left-10 pointer-events-none z-10">
        <h1 className="text-4xl font-bold text-white uppercase tracking-widest" 
            style={{ textShadow: '0 0 20px #FFD700' }}>
          Kin AI Nexus
        </h1>
        <p className="text-yellow-500 font-mono text-sm opacity-80">
          STATUS: IDENTITY SECURE // JURISDICTION: GLOBAL
        </p>
      </div>
    </div>
  );
};

export default NexusGlobe;