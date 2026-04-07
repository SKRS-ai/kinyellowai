import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function AIPersonaHub() {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh', color: '#000', fontFamily: 'sans-serif' }}>
      <header style={{ padding: '20px 50px', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #eee', alignItems: 'center' }}>
        <button 
          onClick={() => navigate('/')} 
          style={{ background: '#000', color: '#facc15', border: 'none', padding: '8px 20px', cursor: 'pointer', fontWeight: 'bold', fontSize: '12px' }}>
          ← DIRECTORY EXIT
        </button>
        <div style={{ fontWeight: '900', letterSpacing: '2px' }}>KIN<span style={{ color: '#facc15' }}>YELLOW</span> // AI_PERSONA_HUB</div>
      </header>

      <main style={{ maxWidth: '1100px', margin: '60px auto', padding: '0 20px' }}>
        <h1 style={{ fontSize: '48px', letterSpacing: '8px', marginBottom: '10px' }}>AI PERSONA HUB</h1>
        <p style={{ color: '#facc15', fontWeight: 'bold', letterSpacing: '2px', marginBottom: '40px' }}>REALAIID VERIFIED DIGITAL HUMANS</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '30px' }}>
          {/* THE IDENTITY ANCHOR (YOU) */}
          <div onClick={() => navigate('/profile')} style={{ border: '2px solid #facc15', padding: '30px', textAlign: 'center', cursor: 'pointer', backgroundColor: '#fefce8' }}>
             <div style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: '#000', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#facc15', fontSize: '20px', fontWeight: '900' }}>NB</div>
             <h3 style={{ marginTop: '20px', marginBottom: '5px' }}>Nehemiah Brown</h3>
             <p style={{ fontSize: '10px', color: '#888' }}>LIKENESS ARCHITECT</p>
          </div>

          {/* ADD MORE PERSONAS HERE */}
          <div style={{ border: '1px solid #eee', padding: '30px', textAlign: 'center', color: '#ccc' }}>
             <div style={{ width: '100px', height: '100px', borderRadius: '50%', border: '1px dashed #ccc', margin: '0 auto' }}></div>
             <h3 style={{ marginTop: '20px', fontSize: '14px' }}>AWAITING VERIFICATION...</h3>
          </div>
        </div>
      </main>
    </div>
  );
}
