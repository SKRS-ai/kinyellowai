import React, { useState, useEffect } from 'react';
import KinMap from './Map'; // Reusing your existing Map logic

const TacticalMapPage: React.FC = () => {
  const [address, setAddress] = useState('');
  const [userLoc, setUserLoc] = useState({ lat: 39.9526, lng: -75.1652 });
  const [searchResults, setSearchResults] = useState([]);

  // Auto-Lock GPS on mount
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(pos => {
        setUserLoc({ lat: pos.coords.latitude, lng: pos.coords.longitude });
      });
    }
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to Geocode the address and drop the "Halo" pins there
    console.log("Searching for Address:", address);
  };

  return (
    <div style={fullScreenContainer}>
      {/* FLOATING TACTICAL SEARCH BAR */}
      <div style={floatingSearchBox}>
        <form onSubmit={handleSearch} style={{ display: 'flex', gap: '10px' }}>
          <input 
            type="text" 
            placeholder="ENTER GLOBAL COORDINATES OR ADDRESS..." 
            style={tacticalInput}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <button type="submit" style={searchBtn}>SCAN AREA</button>
        </form>
        <div style={coordDisplay}>
          LAT: {userLoc.lat.toFixed(4)} | LNG: {userLoc.lng.toFixed(4)} | STATUS: SOVEREIGN ENCRYPTED
        </div>
      </div>

      {/* FULL SCREEN MAP OVERLAY */}
      <div style={{ height: '100vh', width: '100vw' }}>
        <KinMap 
          results={searchResults} 
          center={userLoc} 
          zoom={15} 
          isFullPage={true} 
        />
      </div>

      {/* COLLAPSIBLE TACTICAL DRAWER (LEFT side) */}
      <aside style={tacticalDrawer}>
        <h2 style={drawerTitle}>NODE DIRECTORY</h2>
        <p style={{fontSize: '10px', color: '#666'}}>LOCALIZED SATELLITE FEED ACTIVE</p>
        {/* Results will list here as cards */}
      </aside>
    </div>
  );
};

/* --- TACTICAL STYLING --- */
const fullScreenContainer: React.CSSProperties = { position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden', backgroundColor: '#000' };
const floatingSearchBox: React.CSSProperties = { position: 'absolute', top: '30px', left: '50%', transform: 'translateX(-50%)', zIndex: 1000, width: '500px', backgroundColor: 'rgba(0,0,0,0.9)', padding: '20px', border: '2px solid #FFD700', boxShadow: '0 0 20px rgba(255, 215, 0, 0.2)' };
const tacticalInput: React.CSSProperties = { flex: 1, backgroundColor: '#111', border: '1px solid #333', color: '#FFD700', padding: '12px', fontFamily: 'monospace', fontSize: '12px' };
const searchBtn: React.CSSProperties = { backgroundColor: '#FFD700', color: '#000', border: 'none', padding: '10px 20px', fontWeight: '900', cursor: 'pointer', fontSize: '11px' };
const coordDisplay: React.CSSProperties = { marginTop: '10px', fontSize: '9px', color: '#FFD700', letterSpacing: '2px', fontWeight: '700' };
const tacticalDrawer: React.CSSProperties = { position: 'absolute', top: '0', left: '0', width: '300px', height: '100%', backgroundColor: 'rgba(0,0,0,0.85)', zIndex: 900, borderRight: '1px solid #333', padding: '100px 20px 20px 20px', color: '#FFF' };
const drawerTitle: React.CSSProperties = { fontSize: '14px', fontWeight: '900', color: '#FFD700', borderBottom: '2px solid #FFD700', paddingBottom: '10px', marginBottom: '10px' };

export default TacticalMapPage;