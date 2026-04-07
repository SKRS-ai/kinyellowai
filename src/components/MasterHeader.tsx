import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const MasterHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Dynamic location label for the search bar placeholder
  const pathParts = location.pathname.split('/');
  const isDirectory = pathParts.includes('directory');
  const locationName = isDirectory ? pathParts[pathParts.indexOf('directory') + 1] : 'GLOBAL';

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <nav style={{ width: '100%', zIndex: 9999, position: 'relative', fontFamily: 'Inter, sans-serif' }}>
      
      {/* ROW 1: THE GOLDEN STICKY BAR (Search & KinOS) */}
      <div style={{
        ...styles.goldenBar,
        position: isSticky ? 'fixed' : 'relative',
        top: 0,
        boxShadow: isSticky ? '0 6px 25px rgba(0,0,0,0.4)' : 'none'
      }}>
        <div style={styles.contentConstrain}>
          <form onSubmit={handleSearch} style={styles.searchForm}>
            <input 
              type="text" 
              placeholder={`SEARCH THE ${locationName.toUpperCase().replace('-', ' ')} INDEX...`} 
              style={styles.searchInput} 
            />
            <button type="submit" style={styles.searchBtn}>SEARCH</button>
          </form>

          <div style={styles.kinosActions}>
            <button style={styles.secureBtn}>SECURE ACCESS</button>
            <button style={styles.joinBtn}>JOIN KinOS REGISTRY</button>
          </div>
        </div>
      </div>

      {/* ROW 2: THE BLACK ANCHORED NAVIGATION */}
      <div style={styles.blackBar}>
        <div style={styles.gridAnchor}>
          
          {/* LEFT PILLAR: KIN COIN */}
          <div style={styles.pillarLeft}>
            <div title="Kin Coin" style={styles.kinCoin}>K</div>
          </div>

          {/* CENTER PANEL: ORGANIZED UMBRELLA */}
          <div style={{...styles.centerControlPanel, display: isMobileMenuOpen ? 'flex' : styles.centerControlPanel.display }}>
            <div style={styles.linkGroup}>
              <a href="/" style={styles.link}>WORLDWIDE</a>
              <a href="/index" style={styles.link}>KIN INDEX</a>
              <a href="/myaikin" style={styles.link}>MYAIKIN</a>
              <a href="/realaiid" style={styles.link}>REALAIID</a>
            </div>

            <div style={styles.triStatePortal} onClick={() => navigate('/portal')}>
              TRI-STATE 2.0 PORTAL
            </div>

            <div style={styles.linkGroup}>
              <a href="/kinos" style={styles.link}>KinOS INTAKE</a>
              <a href="/graveyard" style={styles.link}>GRAVEYARD™</a>
              <a href="/persona" style={styles.link}>PERSONA HUB</a>
              <a href="/profile" style={styles.link}>MY PROFILE</a>
            </div>
          </div>

          {/* RIGHT PILLAR: HALO COIN */}
          <div style={styles.pillarRight}>
            <div title="Halo Coin" style={styles.haloCoin}>H</div>
          </div>

          {/* MOBILE TOGGLE */}
          <div style={styles.mobileToggle} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            ☰
          </div>

        </div>
      </div>

      {/* Content Spacer to prevent layout shift when bar sticks */}
      {isSticky && <div style={{ height: '70px' }} />}
    </nav>
  );
};

const styles: { [key: string]: any } = {
  goldenBar: { 
    background: '#facc15', width: '100%', padding: '12px 0', 
    borderBottom: '3px solid #000', transition: '0.3s ease-in-out', zIndex: 10000
  },
  contentConstrain: {
    maxWidth: '1600px', margin: '0 auto', display: 'flex', 
    justifyContent: 'space-between', alignItems: 'center', padding: '0 30px', gap: '20px'
  },
  searchForm: { display: 'flex', flex: 2, gap: '5px', maxWidth: '800px' },
  searchInput: { 
    flex: 1, padding: '12px 15px', border: '2px solid #000', 
    fontWeight: '900', textTransform: 'uppercase', fontSize: '13px', outline: 'none'
  },
  searchBtn: { 
    background: '#000', color: '#facc15', border: 'none', 
    padding: '0 30px', fontWeight: '900', cursor: 'pointer', fontSize: '13px'
  },
  kinosActions: { display: 'flex', gap: '15px' },
  secureBtn: { 
    background: 'transparent', border: '2px solid #000', padding: '10px 18px',
    fontWeight: '900', fontSize: '11px', cursor: 'pointer', whiteSpace: 'nowrap'
  },
  joinBtn: { 
    background: '#000', color: '#facc15', border: 'none', padding: '12px 22px',
    fontWeight: '900', fontSize: '11px', cursor: 'pointer', whiteSpace: 'nowrap'
  },
  blackBar: { 
    background: '#000', color: '#fff', padding: '15px 0', borderBottom: '1px solid #333',
    position: 'relative', overflow: 'visible' // Crucial for coin visibility
  },
  gridAnchor: {
    display: 'grid', gridTemplateColumns: '120px 1fr 120px', 
    alignItems: 'center', maxWidth: '100%', padding: '0 20px'
  },
  pillarLeft: { display: 'flex', justifyContent: 'flex-start', zIndex: 10 },
  pillarRight: { display: 'flex', justifyContent: 'flex-end', zIndex: 10 },
  centerControlPanel: {
    display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '40px', flexWrap: 'wrap'
  },
  linkGroup: { display: 'flex', gap: '25px' },
  link: { 
    color: '#fff', textDecoration: 'none', fontSize: '11px', 
    fontWeight: '800', letterSpacing: '1.2px', whiteSpace: 'nowrap', textTransform: 'uppercase'
  },
  triStatePortal: { 
    border: '2px solid #facc15', padding: '10px 25px', color: '#facc15', 
    fontWeight: '900', fontSize: '13px', boxShadow: '0 0 15px rgba(250, 204, 21, 0.4)',
    cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '1px'
  },
  kinCoin: { 
    width: '42px', height: '42px', background: 'linear-gradient(145deg, #ffd700, #daa520)', 
    borderRadius: '50%', border: '2px solid #fff', color: '#000', 
    display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', fontSize: '20px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.6)', transform: 'translateZ(0)' // Forces hardware rendering
  },
  haloCoin: { 
    width: '42px', height: '42px', background: '#fff', 
    borderRadius: '50%', border: '2px solid #facc15', color: '#000', 
    display: 'flex', alignItems: 'center', justifyContent: 'center', 
    fontWeight: '900', fontSize: '20px', boxShadow: '0 -6px 0px #facc15, 0 4px 10px rgba(0,0,0,0.6)',
    transform: 'translateZ(0)' 
  },
  mobileToggle: { display: 'none', color: '#facc15', fontSize: '24px', cursor: 'pointer' }
};

export default MasterHeader;