import React from 'react';

export default function Sitemap() {
  return (
    <div style={{ backgroundColor: '#000', color: '#facc15', minHeight: '100vh', padding: '80px 40px', fontFamily: 'monospace' }}>
      <h1 style={{ fontSize: '2rem', borderBottom: '1px solid #333', paddingBottom: '20px', color: '#facc15' }}>
        SYSTEM DIRECTORY // MASTER INDEX
      </h1>
      
      <div style={{ marginTop: '40px' }}>
        <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2.5' }}>
          <li><a href="/" style={{ color: '#fff', textDecoration: 'none' }}>{">"} HOME_PORTAL</a></li>
          <li><a href="/directory/zimbabwe" style={{ color: '#fff', textDecoration: 'none' }}>{">"} JURISDICTION_ZIMBABWE</a></li>
          <li><a href="/identity" style={{ color: '#fff', textDecoration: 'none' }}>{">"} REALAIID_BUREAU</a></li>
          <li><a href="/registry" style={{ color: '#fff', textDecoration: 'none' }}>{">"} SOVEREIGN_REGISTRY</a></li>
        </ul>
      </div>

      <div style={{ marginTop: '100px', fontSize: '10px', color: '#444' }}>
        [ CLASSIFIED DATA - AUTHORIZED ACCESS ONLY ]
      </div>
    </div>
  );
}