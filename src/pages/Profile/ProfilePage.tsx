import React from 'react';
import { Link } from 'react-router-dom';

const ProfilePage = () => {
  const user = {
    name: "Nehemiah Brown",
    personaName: "NB-Logic-01",
    anchorCode: "SHA256: 8f4e2c...b9a1e0f",
    node: "PHL-01 (Philadelphia)",
    certifiedSince: "2026-03-15",
    bio: "IT & Systems Engineer. Digitally anchored via RealAIID Newborn Likeness protocol.",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" // Placeholder video
  };

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', padding: '40px', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', backgroundColor: '#0a0a0a', border: '1px solid #333', borderRadius: '32px', overflow: 'hidden', boxShadow: '0 0 50px rgba(250,204,21,0.1)' }}>
        
        {/* BRAND HEADER */}
        <div style={{ backgroundColor: '#fff', padding: '20px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <h2 style={{ margin: 0, fontWeight: '900', textTransform: 'uppercase', fontSize: '20px' }}>
              <span style={{ color: '#000' }}>KIN</span><span style={{ color: '#facc15' }}>YELLOW</span>
            </h2>
          </Link>
          <span style={{ backgroundColor: '#facc15', color: '#000', padding: '4px 12px', borderRadius: '4px', fontSize: '10px', fontWeight: 'bold' }}>REALAIID CERTIFIED</span>
        </div>

        <div style={{ padding: '60px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px' }}>
          
          {/* VIDEO PREVIEW COLUMN */}
          <div>
            <div style={{ 
              aspectRatio: '9/16', 
              backgroundColor: '#111', 
              borderRadius: '24px', 
              border: '2px solid #facc1533', 
              overflow: 'hidden',
              position: 'relative',
              boxShadow: 'inset 0 0 20px #000'
            }}>
              <video 
                autoPlay 
                muted 
                loop 
                playsInline 
                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: '0.8' }}
              >
                <source src={user.videoUrl} type="video/mp4" />
              </video>
              <div style={{ position: 'absolute', bottom: '20px', left: '20px', backgroundColor: 'rgba(0,0,0,0.6)', padding: '5px 15px', borderRadius: '50px', border: '1px solid #facc15' }}>
                <span style={{ color: '#facc15', fontSize: '10px', fontWeight: 'bold', fontFamily: 'monospace' }}>● LIKENESS LIVE</span>
              </div>
            </div>
            <button style={{ width: '100%', marginTop: '20px', padding: '18px', backgroundColor: '#facc15', border: 'none', borderRadius: '16px', fontWeight: '900', cursor: 'pointer', fontSize: '14px', textTransform: 'uppercase' }}>
              Verify On-Chain Anchor
            </button>
          </div>

          {/* IDENTITY DATA COLUMN */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h1 style={{ fontSize: '56px', fontWeight: '900', margin: '0 0 10px 0', letterSpacing: '-2px' }}>{user.name}</h1>
            <p style={{ color: '#facc15', fontFamily: 'monospace', fontSize: '14px', letterSpacing: '2px', marginBottom: '40px' }}>
              PROTOCOL ID: {user.personaName}
            </p>
            
            <div style={{ padding: '25px', backgroundColor: '#111', borderRadius: '20px', border: '1px solid #222', marginBottom: '30px' }}>
              <p style={{ fontSize: '10px', color: '#666', margin: '0 0 8px 0', fontWeight: 'bold' }}>IMMUTABLE SHA-256 ANCHOR</p>
              <code style={{ color: '#facc15', wordBreak: 'break-all', fontSize: '11px', lineHeight: '1.4' }}>{user.anchorCode}</code>
            </div>

            <div style={{ display: 'flex', gap: '40px', marginBottom: '40px' }}>
              <div>
                <p style={{ fontSize: '10px', color: '#666', margin: '0 0 5px 0' }}>NODE ORIGIN</p>
                <p style={{ margin: 0, fontWeight: 'bold' }}>{user.node}</p>
              </div>
              <div>
                <p style={{ fontSize: '10px', color: '#666', margin: '0 0 5px 0' }}>CLASS</p>
                <p style={{ margin: 0, fontWeight: 'bold' }}>DIGITAL HUMAN</p>
              </div>
            </div>

            <p style={{ fontSize: '18px', color: '#aaa', lineHeight: '1.6', fontStyle: 'italic', borderLeft: '4px solid #facc15', paddingLeft: '25px' }}>
              "{user.bio}"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
