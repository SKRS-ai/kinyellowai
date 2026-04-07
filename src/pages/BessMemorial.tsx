import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function BessMemorial() {
  const navigate = useNavigate();

  // VERIFIED ASSET PATHS
  const mainLikeness = "https://res.cloudinary.com/df9v7v7ab/image/upload/v1712101000/bess-ball.jpg";
  const fallbackImage = "/image_8ac18a.png"; 

  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh', fontFamily: 'serif', color: '#000' }}>
      {/* SOVEREIGN HEADER */}
      <header style={{ padding: '20px 50px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'sans-serif' }}>
        <div style={{ letterSpacing: '8px', fontWeight: '900', cursor: 'pointer' }} onClick={() => navigate('/')}>
          KIN<span style={{ color: '#facc15' }}>YELLOW</span>
        </div>
        <div style={{ fontSize: '10px', fontWeight: 'bold', letterSpacing: '2px' }}>ETERNAL ARCHIVE // VERIFIED</div>
      </header>

      <main style={{ maxWidth: '900px', margin: '60px auto', padding: '0 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'center' }}>
          
          {/* LIKENESS ANCHOR (THE IMAGE) */}
          <div style={{ border: '1px solid #000', padding: '10px', backgroundColor: '#f9f9f9' }}>
            <img 
              src={mainLikeness} 
              onError={(e) => { e.currentTarget.src = fallbackImage }}
              alt="Bess W. Ball" 
              style={{ width: '100%', height: 'auto', display: 'block', filter: 'grayscale(100%)' }}
            />
            <p style={{ textAlign: 'center', fontSize: '10px', marginTop: '10px', fontWeight: 'bold', fontFamily: 'sans-serif' }}>
              DIGITAL LIKENESS ANCHOR // REALAIID VERIFIED
            </p>
          </div>

          {/* LEGACY DATA */}
          <div>
            <h1 style={{ fontSize: '48px', margin: '0 0 10px 0' }}>Bess W. Ball</h1>
            <h3 style={{ fontSize: '14px', color: '#facc15', letterSpacing: '3px', marginBottom: '30px', fontFamily: 'sans-serif' }}>
              PIONEER OF MINORITY COMMERCE
            </h3>
            <p style={{ fontSize: '18px', lineHeight: '1.6', fontStyle: 'italic' }}>
              "A legacy defined by the strength of community and the architectural integrity of Philadelphia's commercial history."
            </p>
            <div style={{ marginTop: '40px', padding: '20px', borderLeft: '4px solid #000', backgroundColor: '#fefce8' }}>
              <p style={{ margin: 0, fontSize: '12px', fontWeight: 'bold', fontFamily: 'sans-serif' }}>LOCATION: Philadelphia, PA</p>
              <p style={{ margin: '5px 0 0 0', fontSize: '12px', fontWeight: 'bold', fontFamily: 'sans-serif' }}>ARCHIVE ID: SKR-BWB-19XX</p>
            </div>
          </div>
        </div>

        {/* VISUAL ARCHIVE GRID */}
        <section style={{ marginTop: '80px', borderTop: '1px solid #eee', paddingTop: '40px' }}>
          <h4 style={{ fontFamily: 'sans-serif', letterSpacing: '4px', fontSize: '12px', marginBottom: '30px' }}>VISUAL HISTORICAL RECORD</h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px' }}>
            {["/image_8ac226.png", "/image_8ad469.png", "/image_8ad870.png", "/image_97132a.jpg"].map((img, i) => (
              <div key={i} style={{ aspectRatio: '1/1', backgroundColor: '#eee', border: '1px solid #ddd' }}>
                <img src={img} alt={`Archive ${i}`} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(0.5)' }} />
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer style={{ textAlign: 'center', padding: '60px', marginTop: '100px', borderTop: '1px solid #eee' }}>
        <p style={{ fontSize: '10px', letterSpacing: '5px', color: '#aaa', fontFamily: 'sans-serif' }}>
          SOLOMON KIN LLC // DIGITAL GRAVEYARD™ ARCHITECTURE
        </p>
      </footer>
    </div>
  );
}
