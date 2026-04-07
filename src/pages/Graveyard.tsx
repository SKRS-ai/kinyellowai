import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Graveyard() {
  const navigate = useNavigate();

  const legacies = [
    { 
      id: 'bess-w-ball-memorial', 
      name: 'Bess W. Ball', 
      years: '1930 — 2023',
      title: 'Pioneer of Minority Commerce',
      origin: 'Philadelphia, PA',
      status: 'ETERNAL_ARCHIVE_001'
    }
    // Future Likeness Anchors will be mapped here
  ];

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', fontFamily: "'Georgia', serif" }}>
      {/* SOVEREIGN NAVIGATION */}
      <nav style={{ padding: '30px 50px', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #222' }}>
        <button 
          onClick={() => navigate('/')} 
          style={{ background: 'none', border: '1px solid #555', color: '#888', cursor: 'pointer', padding: '10px 25px', textTransform: 'uppercase', letterSpacing: '2px' }}
        >
          ← EXIT TO DIRECTORY
        </button>
        <div style={{ fontWeight: '900', letterSpacing: '8px', fontSize: '14px', color: '#555' }}>
          DIGITAL GRAVEYARD™ // SOLOMON KIN LLC
        </div>
      </nav>

      <header style={{ textAlign: 'center', padding: '100px 20px' }}>
        <h1 style={{ fontSize: '60px', letterSpacing: '15px', fontWeight: '900', margin: 0, textTransform: 'uppercase' }}>
          Digital Graveyard
        </h1>
        <p style={{ color: '#555', letterSpacing: '5px', marginTop: '20px', fontSize: '12px', fontWeight: 'bold' }}>
          PERMANENT LEGACY REPOSITORY & LIKENESS ANCHORS
        </p>
      </header>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px 100px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '40px' }}>
          {legacies.map((legacy) => (
            <div 
              key={legacy.id}
              onClick={() => navigate(`/business/${legacy.id}`)}
              style={{ 
                border: '1px solid #222', 
                padding: '40px', 
                cursor: 'pointer',
                textAlign: 'center',
                backgroundColor: '#050505',
                transition: '0.4s',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#facc15';
                e.currentTarget.style.transform = 'translateY(-10px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#222';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ fontSize: '10px', color: '#facc15', marginBottom: '20px', letterSpacing: '3px' }}>
                {legacy.status}
              </div>
              
              {/* LIKENESS CIRCLE ANCHOR */}
              <div style={{ 
                width: '180px', height: '180px', margin: '0 auto 30px', borderRadius: '50%', 
                border: '4px solid #333', overflow: 'hidden' 
              }}>
                <img 
                  src="/image_8ac18a.png" 
                  alt={legacy.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%)' }} 
                />
              </div>

              <h2 style={{ fontSize: '28px', margin: '0 0 10px 0' }}>{legacy.name}</h2>
              <p style={{ color: '#facc15', fontSize: '16px', fontStyle: 'italic', margin: '0 0 20px 0' }}>{legacy.years}</p>
              
              <div style={{ borderTop: '1px solid #222', paddingTop: '20px' }}>
                <p style={{ fontSize: '12px', color: '#666', textTransform: 'uppercase', letterSpacing: '2px', margin: 0 }}>
                  {legacy.title}
                </p>
                <p style={{ fontSize: '11px', color: '#444', marginTop: '5px' }}>{legacy.origin}</p>
              </div>
            </div>
          ))}

          {/* PLACEHOLDER FOR NEW ANCHORS */}
          <div style={{ 
            border: '2px dashed #111', padding: '40px', textAlign: 'center', 
            display: 'flex', flexDirection: 'column', justifyContent: 'center', color: '#222' 
          }}>
            <p style={{ letterSpacing: '3px', fontSize: '12px' }}>AWAITING LEGACY ENROLLMENT</p>
          </div>
        </div>
      </main>

      <footer style={{ textAlign: 'center', padding: '60px', borderTop: '1px solid #111', color: '#333' }}>
        <p style={{ fontSize: '10px', letterSpacing: '5px' }}>© 2026 KINYELLOW // THE DIGITAL GRAVEYARD™ IS A TRADEMARK OF SOLOMON KIN LLC</p>
      </footer>
    </div>
  );
}
