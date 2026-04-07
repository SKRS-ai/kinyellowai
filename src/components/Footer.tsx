import React from 'react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#000', color: '#fff', padding: '60px 20px', borderTop: '4px solid #facc15' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
        
        {/* GRANDMOTHER MEMORIAL SECTION */}
        <div>
          <h3 style={{ color: '#facc15', fontSize: '12px', letterSpacing: '2px', marginBottom: '20px' }}>THE LEGACY</h3>
          <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#ccc' }}>
            <strong>Tri-State Minority Yellow Pages</strong><br />
            Founded 1988 by <strong>Bess W. Ball</strong>.<br /><br />
            A trailblazer in Philadelphia marketing, Mrs. Ball dedicated her life to connecting minority-owned businesses to the community. KinYellow is the 11th Edition and beyond of her vision.
          </p>
        </div>

        {/* ABOUT KINYELLOW */}
        <div>
          <h3 style={{ color: '#facc15', fontSize: '12px', letterSpacing: '2px', marginBottom: '20px' }}>ABOUT US</h3>
          <ul style={{ list-style: 'none', padding: 0, fontSize: '14px', color: '#ccc', lineHeight: '2' }}>
            <li>Sovereign Yellow Pages</li>
            <li>RealAIID Verification Bureau</li>
            <li>Vexilla AiTS Ecosystem</li>
            <li>ScribeBoard & KinOS</li>
          </ul>
        </div>

        {/* AFFILIATIONS */}
        <div>
          <h3 style={{ color: '#facc15', fontSize: '12px', letterSpacing: '2px', marginBottom: '20px' }}>DIVISIONS</h3>
          <p style={{ fontSize: '12px', color: '#666' }}>
            Solomon Kin Records Media Group • Global Citizen Joe, LLC • Against Electronic Abuse and Harassment (AEAH) • Thin Black & Brown Lines USA
          </p>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '40px', paddingTop: '20px', borderTop: '1px solid #222', fontSize: '10px', color: '#444' }}>
        © 2026 KINYELLOW | POWERED BY VEXILLA AITS | ANCHORED BY REALAIID
      </div>
    </footer>
  );
}
