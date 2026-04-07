import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();
  
  // FIXED: Explicitly tell TypeScript this can be a String or Null
  const [accountType, setAccountType] = useState<string | null>(null); 

  // FIXED: Added explicit types for the style helper
  const cardStyle = (type: string): React.CSSProperties => ({
    flex: 1,
    padding: '40px',
    border: accountType === type ? '3px solid #facc15' : '1px solid #222',
    backgroundColor: accountType === type ? '#0a0a0a' : '#050505',
    cursor: 'pointer',
    textAlign: 'center',
    transition: '0.3s'
  });

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', padding: '80px 20px', fontFamily: 'sans-serif' }}>
      <header style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h1 style={{ letterSpacing: '10px', fontWeight: '900' }}>KINYELLOW REGISTRY</h1>
        <p style={{ color: '#666', fontSize: '12px', letterSpacing: '3px' }}>SOLOMON KIN LLC // SECURE ACCOUNT PROVISIONING</p>
      </header>

      <main style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '18px', marginBottom: '40px', color: '#facc15' }}>CHOOSE YOUR SOVEREIGN PATH</h2>
        
        <div style={{ display: 'flex', gap: '30px', marginBottom: '60px' }}>
          {/* PATH A: LIVING GUARDIAN */}
          <div onClick={() => setAccountType('GUARDIAN')} style={cardStyle('GUARDIAN')}>
            <h3 style={{ fontSize: '20px', marginBottom: '15px' }}>LIVING GUARDIAN</h3>
            <p style={{ fontSize: '12px', color: '#888', lineHeight: '1.6' }}>
              Manage Business Profiles or create Digital Tombstones™ for the departed.
            </p>
            <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#111', fontSize: '10px', color: '#facc15' }}>
              REQUIRES: EIN or DEATH CERTIFICATE
            </div>
          </div>

          {/* PATH B: AI IDENTITY */}
          <div onClick={() => setAccountType('AI_IDENTITY')} style={cardStyle('AI_IDENTITY')}>
            <h3 style={{ fontSize: '20px', marginBottom: '15px' }}>AI IDENTITY</h3>
            <p style={{ fontSize: '12px', color: '#888', lineHeight: '1.6' }}>
              Establish your verified Digital Human Likeness in the Identity Hub.
            </p>
            <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#111', fontSize: '10px', color: '#facc15' }}>
              REQUIRES: REALAIID™ VERIFICATION
            </div>
          </div>
        </div>

        {accountType && (
          <section style={{ borderTop: '1px solid #222', paddingTop: '40px', maxWidth: '500px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gap: '20px' }}>
              <input type="email" placeholder="EMAIL ADDRESS" style={{ padding: '15px', backgroundColor: '#000', border: '1px solid #333', color: '#fff' }} />
              <input type="password" placeholder="SECURE PASSWORD" style={{ padding: '15px', backgroundColor: '#000', border: '1px solid #333', color: '#fff' }} />
              
              {accountType === 'GUARDIAN' ? (
                <input type="text" placeholder="BUSINESS EIN (Optional for Memorials)" style={{ padding: '15px', backgroundColor: '#000', border: '1px solid #333', color: '#fff' }} />
              ) : (
                <input type="text" placeholder="REALAIID SERIAL NUMBER" style={{ padding: '15px', backgroundColor: '#000', border: '1px solid #333', color: '#fff' }} />
              )}
            </div>

            <button style={{ 
              width: '100%', marginTop: '40px', padding: '20px', backgroundColor: '#facc15', 
              color: '#000', fontWeight: 'bold', cursor: 'pointer', border: 'none', letterSpacing: '4px' 
            }}>
              INITIALIZE SOVEREIGN ACCOUNT
            </button>
          </section>
        )}
      </main>

      <footer style={{ textAlign: 'center', marginTop: '100px', opacity: 0.2 }}>
        <p style={{ fontSize: '10px' }}>© 2026 SOLOMON KIN LLC // KINYELLOW REGISTER</p>
      </footer>
    </div>
  );
}