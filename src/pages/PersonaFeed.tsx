import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function PersonaFeed() {
  const navigate = useNavigate();

  const personas = [
    { 
      id: 'nehemiah-brown', 
      name: 'Nehemiah Brown', 
      status: 'GENESIS_001', 
      type: 'Digital Human Architect',
      verification: 'RealAIID Verified'
    },
    { 
      id: 'placeholder-2', 
      name: 'Future Identity', 
      status: 'PENDING', 
      type: 'Awaiting Verification',
      verification: 'MyRealAiid.me'
    }
  ];

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', fontFamily: "'Courier New', monospace" }}>
      <header style={{ padding: '40px', borderBottom: '2px solid #facc15', textAlign: 'center' }}>
        <h1 style={{ letterSpacing: '15px', fontWeight: '900', color: '#facc15' }}>IDENTITY HUB</h1>
        <p style={{ letterSpacing: '2px', fontSize: '12px' }}>THE SOVEREIGN NETWORK OF DIGITAL HUMANS</p>
      </header>

      <main style={{ maxWidth: '1200px', margin: '60px auto', padding: '0 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px' }}>
          {personas.map((p) => (
            <div 
              key={p.id}
              onClick={() => p.id === 'nehemiah-brown' && navigate(`/persona/${p.id}`)}
              style={{ 
                border: '1px solid #333', 
                padding: '30px', 
                cursor: p.id === 'nehemiah-brown' ? 'pointer' : 'default',
                transition: '0.3s',
                backgroundColor: '#0a0a0a',
                position: 'relative'
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = '#facc15'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = '#333'}
            >
              <div style={{ fontSize: '10px', color: '#facc15', marginBottom: '10px' }}>{p.status}</div>
              <h2 style={{ margin: '0 0 10px 0', fontSize: '24px' }}>{p.name}</h2>
              <p style={{ color: '#888', fontSize: '14px' }}>{p.type}</p>
              <div style={{ 
                marginTop: '20px', 
                fontSize: '11px', 
                border: '1px solid #444', 
                display: 'inline-block', 
                padding: '5px 10px',
                color: '#facc15'
              }}>
                {p.verification}
              </div>
            </div>
          ))}
        </div>

        {/* 🪦 DIGITAL GRAVEYARD GATEWAY (COMING NEXT) */}
        <div style={{ marginTop: '100px', padding: '60px', border: '1px dashed #444', textAlign: 'center' }}>
          <h2 style={{ color: '#444' }}>DIGITAL GRAVEYARD PORTAL</h2>
          <p style={{ color: '#222' }}>Archiving the Eternal Legacy of the KinYellow Network</p>
        </div>
      </main>
    </div>
  );
}
