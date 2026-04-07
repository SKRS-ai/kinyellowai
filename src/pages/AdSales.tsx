import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdSales() {
  const navigate = useNavigate();

  const handleIntakeRedirect = (tier: string) => {
    // Route to KINOS INTAKE with a specific 'type' flag
    navigate(`/kinos-intake?type=advertiser&tier=${tier}`);
  };

  return (
    <div style={styles.container}>
      {/* PERSISTENT IDENTITY RIBBON (AS REQUESTED) */}
      <div style={styles.identityRibbon}>
        {["KIN INDEX", "MYAIKIN", "YOURREALAIID", "INTEGRITY INDEX", "EVERWARD TOURS", "KINOS INTAKE", "GRAVEYARD™", "PERSONA HUB", "REALAIID VERIFIED", "MY PROFILE"].map(link => (
          <span key={link} style={styles.ribbonLink}>{link}</span>
        ))}
      </div>

      <header style={styles.header}>
        <h1 style={styles.title}>ADVERTISEMENT <span style={{color: '#facc15'}}>SALES INTERFACE</span></h1>
        <p style={styles.subtitle}>MONETIZE YOUR LEGACY // TRI-STATE MINORITY YELLOW PAGES 2.0</p>
      </header>

      <section style={styles.grid}>
        {/* RECURRING SALES CARD COMPONENT */}
        <div style={styles.salesCard}>
          <div style={styles.cardHeader}>GOLD SOVEREIGN</div>
          <ul style={styles.list}>
            <li>PRIORITY SEARCH INDEXING</li>
            <li>MAP MARKER GLOW EFFECT</li>
            <li>REALAIID VERIFIED BADGE</li>
          </ul>
          <div style={styles.price}>$99 / MONTH</div>
          <button onClick={() => handleIntakeRedirect('gold')} style={styles.button}>SECURE THROUGH KINOS</button>
        </div>

        <div style={styles.salesCardFeatured}>
          <div style={styles.cardHeader}>RIBBON TITAN</div>
          <ul style={styles.list}>
            <li>SITEWIDE RIBBON VISIBILITY</li>
            <li>ROTATING MOG ICON</li>
            <li>195 NATION REACH</li>
          </ul>
          <div style={styles.price}>$499 / MONTH</div>
          <button onClick={() => handleIntakeRedirect('titan')} style={styles.buttonBlack}>SECURE THROUGH KINOS</button>
        </div>
      </section>

      <footer style={styles.footer}>
        <p>RECLAIMING THE TRI-STATE MINORITY BOOK OF BUSINESS // SOLOMON KIN LLC</p>
      </footer>
    </div>
  );
}

const styles = {
  container: { backgroundColor: '#fff', minHeight: '100vh', color: '#000', fontFamily: 'sans-serif' },
  identityRibbon: { 
    backgroundColor: '#000', color: '#facc15', display: 'flex', justifyContent: 'space-between', 
    padding: '12px 20px', fontSize: '10px', fontWeight: '900', borderBottom: '2px solid #facc15' 
  },
  ribbonLink: { cursor: 'pointer', letterSpacing: '1px' },
  header: { padding: '60px 20px', textAlign: 'center' as 'center', borderBottom: '5px solid #000' },
  title: { fontSize: '3.5rem', fontWeight: '900', letterSpacing: '5px', margin: 0 },
  subtitle: { fontSize: '12px', fontWeight: 'bold', letterSpacing: '3px', marginTop: '10px' },
  grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', maxWidth: '1000px', margin: '60px auto', padding: '0 20px' },
  salesCard: { border: '5px solid #000', padding: '40px', boxShadow: '10px 10px 0px #eee' },
  salesCardFeatured: { border: '5px solid #facc15', padding: '40px', boxShadow: '10px 10px 0px #000', backgroundColor: '#facc15' },
  cardHeader: { fontSize: '24px', fontWeight: '900', borderBottom: '3px solid #000', paddingBottom: '10px', marginBottom: '20px' },
  list: { listStyle: 'none', padding: 0, fontWeight: 'bold', fontSize: '14px', lineHeight: '2' },
  price: { fontSize: '28px', fontWeight: '900', margin: '30px 0' },
  button: { width: '100%', padding: '15px', backgroundColor: '#000', color: '#fff', fontWeight: '900', border: 'none', cursor: 'pointer' },
  buttonBlack: { width: '100%', padding: '15px', backgroundColor: '#000', color: '#facc15', fontWeight: '900', border: 'none', cursor: 'pointer' },
  footer: { textAlign: 'center' as 'center', padding: '100px 20px', fontSize: '10px', fontWeight: '900', letterSpacing: '2px' }
};