import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const MasterHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSticky, setIsSticky] = useState(false);
  const isPortal = location.pathname.includes('/directory/');

  // Monitor scroll for the Golden Search Bar stickiness
  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{ width: '100%', zIndex: 2000 }}>
      {/* ROW 1: THE GOLDEN SEARCH BAR (Sticky Logic) */}
      <div style={{
        ...styles.goldenBar,
        position: isSticky ? 'fixed' : 'relative',
        top: 0
      }}>
        <div style={styles.searchContainer}>
          <input type="text" placeholder="SEARCH THE GLOBAL INDEX..." style={styles.searchInput} />
          <button style={styles.searchBtn}>SEARCH</button>
        </div>
        {/* KINOS SYSTEM ACCESS BUTTONS */}
        <div style={styles.kinosButtons}>
          <button style={styles.secureBtn}>SECURE ACCESS</button>
          <button style={styles.joinBtn}>JOIN KINOS REGISTRY</button>
        </div>
      </div>

      {/* ROW 2: THE BLACK PRODUCT UMBRELLA */}
      <div style={styles.blackBar}>
        {/* FAR LEFT: KIN COIN */}
        <div style={styles.coinAnchor}>
           <div style={styles.kinCoin}>K</div>
        </div>

        {/* CENTER: 12-PRODUCT LINKS */}
        <div style={styles.navLinks}>
          <a href="#">KINYELLOW WORLDWIDE</a>
          <a href="#">KIN INDEX</a>
          <a href="#">MYAIKIN</a>
          <a href="#">YOURREALAIID</a>
          <a href="#">INTEGRITY INDEX</a>
          <div style={styles.triStatePortal}>TRI-STATE 2.0 PORTAL</div>
          <a href="#">KINOS INTAKE</a>
          <a href="#">GRAVEYARD™</a>
          <a href="#">PERSONA HUB</a>
          <a href="#">REALAIID VERIFIED</a>
          <a href="#">MY PROFILE</a>
        </div>

        {/* FAR RIGHT: HALO COIN */}
        <div style={styles.coinAnchor}>
           <div style={styles.haloCoin}>H</div>
        </div>
      </div>
    </nav>
  );
};

const styles = {
  goldenBar: { background: '#facc15', width: '100%', padding: '10px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #000', transition: 'all 0.3s' },
  searchContainer: { display: 'flex', gap: '10px', flex: 1, maxWidth: '600px' },
  searchInput: { width: '100%', padding: '8px', border: '2px solid #000', fontWeight: 'bold' },
  searchBtn: { background: '#000', color: '#facc15', border: 'none', padding: '0 20px', fontWeight: '900', cursor: 'pointer' },
  kinosButtons: { display: 'flex', gap: '10px', marginLeft: '20px' },
  secureBtn: { background: 'none', border: '2px solid #000', fontWeight: 'bold', fontSize: '11px', cursor: 'pointer' },
  joinBtn: { background: '#000', color: '#facc15', border: 'none', padding: '8px 15px', fontWeight: 'bold', fontSize: '11px', cursor: 'pointer' },
  blackBar: { background: '#000', color: '#fff', padding: '10px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', overflowX: 'auto' },
  navLinks: { display: 'flex', gap: '15px', fontSize: '10px', fontWeight: 'bold', alignItems: 'center', whiteSpace: 'nowrap' },
  triStatePortal: { border: '1px solid #facc15', padding: '5px 10px', color: '#facc15', boxShadow: '0 0 5px #facc15' },
  coinAnchor: { width: '40px', display: 'flex', justifyContent: 'center' },
  kinCoin: { width: '30px', height: '30px', background: 'gold', borderRadius: '50%', border: '2px solid #fff', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900' },
  haloCoin: { width: '30px', height: '30px', background: '#fff', borderRadius: '50%', border: '2px solid #facc15', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', boxShadow: '0 -5px 0 #facc15' }
};

export default MasterHeader;