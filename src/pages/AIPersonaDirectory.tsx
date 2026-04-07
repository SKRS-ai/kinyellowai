import React from 'react';
import { Link } from 'react-router-dom';

const AIPersonaDirectory = () => {
  // Mock data for the Digital Human Feed
  const personas = [
    { id: "nehemiah-brown", name: "Nehemiah Brown", persona: "NB-Logic-01", node: "PHL-01", status: "Active" },
    { id: "digital-twin-02", name: "Sarah Chen", persona: "SC-Quantum", node: "NYC-04", status: "Active" },
    { id: "digital-twin-03", name: "Marcus Vane", persona: "MV-Shield", node: "SEA-02", status: "Verified" },
    { id: "digital-twin-04", name: "Elena Rossi", persona: "ER-Aura", node: "PHL-01", status: "Active" },
  ];

  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh', color: '#fff', fontFamily: 'sans-serif' }}>
      {/* HEADER */}
      <header style={{ padding: '40px 20px', textAlign: 'center', borderBottom: '1px solid #222' }}>
        <h1 style={{ fontSize: '10px', color: '#facc15', letterSpacing: '4px', fontWeight: '900', textTransform: 'uppercase', marginBottom: '10px' }}>
          RealAIID Protocol
        </h1>
        <h2 style={{ fontSize: '42px', fontWeight: '900', margin: 0 }}>
          <span style={{ color: '#fff' }}>KIN</span><span style={{ color: '#facc15' }}>YELLOW</span> <span style={{ fontWeight: '100' }}>PERSONA FEED</span>
        </h2>
        <p style={{ color: '#666', marginTop: '10px' }}>The official social registry for SHA-256 Anchored Digital Humans.</p>
      </header>

      {/* FEED GRID */}
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {personas.map(p => (
            <div key={p.id} style={{ 
              backgroundColor: '#0a0a0a', 
              border: '1px solid #333', 
              borderRadius: '24px', 
              padding: '30px',
              display: 'flex',
              alignItems: 'center',
              gap: '20px'
            }}>
              {/* MINI LIKENESS AVATAR */}
              <div style={{ 
                width: '80px', 
                height: '80px', 
                backgroundColor: '#111', 
                borderRadius: '50%', 
                border: '2px solid #facc1533',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '30px'
              }}>
                👤
              </div>

              {/* PERSONA INFO */}
              <div style={{ flex: '1' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <h3 style={{ margin: 0, fontSize: '20px' }}>{p.name}</h3>
                  <span style={{ backgroundColor: '#facc15', color: '#000', fontSize: '8px', fontWeight: 'bold', padding: '2px 6px', borderRadius: '4px' }}>
                    {p.status}
                  </span>
                </div>
                <p style={{ color: '#facc15', fontFamily: 'monospace', fontSize: '12px', margin: '5px 0' }}>
                  PERSONA: {p.persona} // NODE: {p.node}
                </p>
              </div>

              {/* ACTION */}
              <Link 
                to={`/persona/${p.id}`}
                style={{ 
                  backgroundColor: '#fff', 
                  color: '#000', 
                  padding: '12px 24px', 
                  borderRadius: '12px', 
                  fontWeight: 'bold', 
                  textDecoration: 'none',
                  fontSize: '14px'
                }}
              >
                View Anchor
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIPersonaDirectory;
