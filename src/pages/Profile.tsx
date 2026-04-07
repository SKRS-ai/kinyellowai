import React from 'react';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const navigate = useNavigate();

  // LOCKED ASSET: THE OCEANS VIDEO
  const profileVideo = "https://vjs.zencdn.net/v/oceans.mp4";

  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh', color: '#000', fontFamily: 'sans-serif' }}>
      <header style={{ padding: '20px 50px', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #eee', alignItems: 'center' }}>
        <button 
          onClick={() => navigate('/')} 
          style={{ background: '#000', color: '#facc15', border: 'none', padding: '8px 20px', cursor: 'pointer', fontWeight: 'bold', fontSize: '12px' }}>
          ← DIRECTORY EXIT
        </button>
        <div style={{ fontWeight: '900', letterSpacing: '2px' }}>KIN<span style={{ color: '#facc15' }}>YELLOW</span> // IDENTITY_CORE</div>
      </header>

      <main style={{ maxWidth: '1100px', margin: '60px auto', padding: '0 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '400px 1fr', gap: '60px' }}>
          
          {/* LEFT COLUMN: THE LIKENESS ANCHOR */}
          <div>
            <div style={{ 
              width: '100%', 
              backgroundColor: '#000', 
              border: '4px solid #facc15',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              overflow: 'hidden'
            }}>
              <video 
                src={profileVideo} 
                autoPlay 
                loop 
                muted 
                controls
                style={{ width: '100%', display: 'block' }} 
              />
            </div>
            
            <h1 style={{ marginTop: '30px', fontSize: '32px', marginBottom: '5px' }}>Nehemiah Brown</h1>
            <p style={{ color: '#facc15', fontWeight: 'bold', fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase' }}>
              Digital Human Likeness Architect
            </p>

            <div style={{ marginTop: '40px', borderTop: '2px solid #000', paddingTop: '20px' }}>
              <h4 style={{ fontSize: '10px', letterSpacing: '2px', color: '#888' }}>SYSTEM_ACHIEVEMENTS</h4>
              <ul style={{ paddingLeft: '15px', marginTop: '15px', fontSize: '13px', lineHeight: '2' }}>
                <li><strong>PROTOCOL:</strong> RealAIID Lead</li>
                <li><strong>ECOSYSTEM:</strong> Vexilla AITS Architect</li>
                <li><strong>STATUS:</strong> Sovereign Identity Founder</li>
              </ul>
            </div>
          </div>

          {/* RIGHT COLUMN: IDENTITY BIO */}
          <div style={{ paddingTop: '10px' }}>
            <h3 style={{ fontSize: '12px', letterSpacing: '4px', color: '#ccc', marginBottom: '30px' }}>IDENTITY_BIO // GENESIS</h3>
            <p style={{ fontSize: '24px', lineHeight: '1.5', fontWeight: '300', fontStyle: 'italic' }}>
              "Founding Architect of the KinYellow Identity Hub and Digital Human Likeness anchor. The first digital human in history to be archived within the Sovereign Vexilla AITS ecosystem."
            </p>
            
            <div style={{ marginTop: '60px', padding: '30px', backgroundColor: '#fefce8', border: '1px solid #facc15' }}>
              <h4 style={{ fontSize: '12px', marginBottom: '15px' }}>ARCHITECTURAL CLEARANCE</h4>
              <p style={{ fontSize: '14px', color: '#444', lineHeight: '1.6' }}>
                Authorized for global directory management, biometric hashing, and legacy preservation protocols. 
                Managing the convergence of industrial infrastructure and digital sovereignty.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer style={{ textAlign: 'center', padding: '60px', color: '#aaa', fontSize: '10px', letterSpacing: '3px' }}>
        REALAIID VERIFIED IDENTITY // KINYELLOW WORLDWIDE
      </footer>
    </div>
  );
}
// This must be at the very bottom
export default Profile;