import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
  const navigate = useNavigate();

  // Navigation Helper to reset the app and go home
  const goHome = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate('/');
  };

  const footerSections = [
    {
      title: "TRI-STATE SUCCESSOR",
      links: [
        "Minority Business Registry", 
        "Economic Impact Reports", 
        "Successor Portal", 
        "Procurement Opportunities", 
        "Inclusion Analytics", 
        "Regional Partners"
      ]
    },
    {
      title: "LEGACY & MEMORIAL",
      links: [
        "Bess W. Ball Foundation", 
        "Miss Ball Memorial Archive", 
        "Kinship Heritage Vault", 
        "Community Endowment", 
        "Scholarship Fund", 
        "Historical Preservation"
      ]
    },
    {
      title: "KIN BRAND SUITE",
      links: [
        "Solomon Kin Records LLC", 
        "Realm Pictures", 
        "Lethal Ledger", 
        "CogniTrust Nexus", 
        "Digital Newborn Anchor", 
        "KinYellow Global"
      ]
    },
    {
      title: "RESOURCES & LEGAL",
      links: [
        "Identity Sovereignty", 
        "Licensing & Sync", 
        "Privacy Protocol", 
        "Terms of Registry", 
        "Verification Services", 
        "Support & Help"
      ]
    }
  ];

  return (
    <footer style={footerWrapper}>
      <div style={footerGrid}>
        {/* Branding Column */}
        <div style={brandColumn}>
          <div style={{...logoStyle, cursor: 'pointer'}} onClick={goHome}>
            KIN<span style={{ color: '#FFD700' }}>YELLOW</span>
          </div>
          <p style={tagline}>
            The Sovereign Identity & <br />
            Business Directory for the <br />
            Global Citizen.
          </p>
          <div style={socialPlaceholder}>
            <span style={socialIcon}>𝕏</span>
            <span style={socialIcon}>🟦</span>
            <span style={socialIcon}>📸</span>
            <span style={socialIcon}>📺</span>
          </div>
        </div>

        {/* Link Columns */}
        {footerSections.map((section) => (
          <div key={section.title} style={linkColumn}>
            <h4 style={columnTitle}>{section.title}</h4>
            <ul style={linkList}>
              {section.links.map((link) => (
                <li 
                  key={link} 
                  style={footerLink} 
                  onClick={() => console.log(`Routing to: ${link}`)}
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div style={bottomBar}>
        <div style={copyright}>
          © 2026 KINYELLOW WORLDWIDE | ALL RIGHTS RESERVED | POWERED BY COGNITRUST NEXUS
        </div>
        <div style={pulseStatus}>
          <span style={pulseDot} /> SYSTEM STATUS: OPERATIONAL
        </div>
      </div>
    </footer>
  );
};

/* --- MASTER STYLES --- */
const footerWrapper: React.CSSProperties = {
  backgroundColor: '#000',
  color: '#FFF',
  padding: '80px 40px 30px 40px',
  borderTop: '3px solid #FFD700',
  fontFamily: 'Inter, sans-serif',
  width: '100%',
  boxSizing: 'border-box',
  marginTop: 'auto' // Ensures it stays at bottom of flex containers
};

const footerGrid: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '1.5fr 1fr 1fr 1fr 1fr',
  gap: '30px',
  maxWidth: '1400px',
  margin: '0 auto',
  alignItems: 'start'
};

const brandColumn: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px'
};

const logoStyle: React.CSSProperties = {
  fontSize: '28px',
  fontWeight: '900',
  letterSpacing: '1.5px',
  color: '#FFF',
  userSelect: 'none'
};

const tagline: React.CSSProperties = {
  fontSize: '13px',
  color: '#AAA',
  lineHeight: '1.8',
  fontWeight: '500'
};

const linkColumn: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column'
};

const columnTitle: React.CSSProperties = {
  fontSize: '12px',
  fontWeight: '900',
  color: '#FFD700',
  letterSpacing: '2px',
  marginBottom: '25px',
  textTransform: 'uppercase'
};

const linkList: React.CSSProperties = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '14px'
};

const footerLink: React.CSSProperties = {
  fontSize: '12px',
  color: '#E0E0E0',
  cursor: 'pointer',
  transition: 'color 0.2s ease',
  fontWeight: '500'
};

const bottomBar: React.CSSProperties = {
  marginTop: '80px',
  paddingTop: '30px',
  borderTop: '1px solid #222',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
};

const copyright: React.CSSProperties = {
  fontSize: '11px',
  color: '#666',
  fontWeight: '700',
  letterSpacing: '0.5px'
};

const pulseStatus: React.CSSProperties = {
  fontSize: '10px',
  color: '#00FF00',
  fontWeight: '900',
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  letterSpacing: '1px'
};

const pulseDot: React.CSSProperties = {
  width: '8px',
  height: '8px',
  backgroundColor: '#00FF00',
  borderRadius: '50%',
  boxShadow: '0 0 10px #00FF00'
};

const socialPlaceholder: React.CSSProperties = {
  display: 'flex',
  gap: '20px',
  marginTop: '10px'
};

const socialIcon: React.CSSProperties = {
  color: '#FFD700',
  fontSize: '16px',
  cursor: 'pointer'
};

export default Footer;