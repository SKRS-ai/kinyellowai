import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();

  // MOCK DATA - REPRESENTING THE USER'S VERIFIED LEGAL RESPONSIBILITIES
  const managedBusinesses = [
    { id: 'vexilla-aits', name: 'Vexilla AITS, Inc.', category: 'Software & AI', status: 'VERIFIED_EIN' }
  ];

  const managedTombstones = [
    { id: 'bess-w-ball-memorial', name: 'Bess W. Ball', years: '1930 — 2023', status: 'VERIFIED_DEATH_CERT' }
  ];

  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      {/* SOVEREIGN HEADER */}
      <header style={{ padding: '30px 50px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ letterSpacing: '8px', fontWeight: '900', cursor: 'pointer' }} onClick={() => navigate('/')}>
          KIN<span style={{ color: '#facc15' }}>YELLOW</span>
        </div>
        <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#666' }}>LIVING GUARDIAN PORTAL</div>
      </header>

      <main style={{ maxWidth: '1200px', margin: '60px auto', padding: '0 20px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: '900', marginBottom: '10px' }}>Guardian Command Center</h1>
        <p style={{ color: '#888', marginBottom: '50px', fontSize: '14px' }}>MANAGING VERIFIED BUSINESSES & DIGITAL TOMBSTONES™</p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
          
          {/* SECTION A: BUSINESS DIRECTORY MANAGEMENT (EIN REQUIRED) */}
          <section style={{ border: '1px solid #eee', padding: '40px', borderRadius: '12px' }}>
            <h2 style={{ fontSize: '18px', borderLeft: '4px solid #facc15', paddingLeft: '15px', marginBottom: '30px' }}>MANAGED BUSINESSES</h2>
            {managedBusinesses.map(biz => (
              <div key={biz.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', backgroundColor: '#f9f9f9', marginBottom: '15px' }}>
                <div>
                  <h3 style={{ margin: 0, fontSize: '16px' }}>{biz.name}</h3>
                  <p style={{ margin: 0, fontSize: '11px', color: '#facc15', fontWeight: 'bold' }}>{biz.status}</p>
                </div>
                <button style={{ padding: '10px 20px', backgroundColor: '#000', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '12px' }}>EDIT PROFILE</button>
              </div>
            ))}
            <button style={{ width: '100%', padding: '15px', marginTop: '20px', border: '2px dashed #ddd', backgroundColor: 'transparent', cursor: 'pointer', fontWeight: 'bold', fontSize: '12px' }}>+ CLAIM NEW BUSINESS (EIN REQUIRED)</button>
          </section>

          {/* SECTION B: DIGITAL TOMBSTONE™ MANAGEMENT (DEATH CERT REQUIRED) */}
          <section style={{ border: '1px solid #eee', padding: '40px', borderRadius: '12px', backgroundColor: '#000', color: '#fff' }}>
            <h2 style={{ fontSize: '18px', borderLeft: '4px solid #facc15', paddingLeft: '15px', marginBottom: '30px' }}>DIGITAL TOMBSTONES™</h2>
            {managedTombstones.map(stone => (
              <div key={stone.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', backgroundColor: '#111', marginBottom: '15px', border: '1px solid #222' }}>
                <div>
                  <h3 style={{ margin: 0, fontSize: '16px' }}>{stone.name}</h3>
                  <p style={{ margin: 0, fontSize: '11px', color: '#facc15', fontWeight: 'bold' }}>{stone.status}</p>
                </div>
                <button onClick={() => navigate(`/business/${stone.id}`)} style={{ padding: '10px 20px', backgroundColor: '#fff', color: '#000', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '12px', fontWeight: 'bold' }}>VIEW ARCHIVE</button>
              </div>
            ))}
            <button 
              onClick={() => navigate('/graveyard/enroll')}
              style={{ width: '100%', padding: '15px', marginTop: '20px', border: '2px dashed #444', backgroundColor: 'transparent', color: '#888', cursor: 'pointer', fontWeight: 'bold', fontSize: '12px' }}
            >
              + ENROLL LEGACY (DEATH CERT REQUIRED)
            </button>
          </section>

        </div>
      </main>

      <footer style={{ textAlign: 'center', padding: '100px 0', color: '#ccc', fontSize: '10px', letterSpacing: '4px' }}>
        SOLOMON KIN LLC // KINYELLOW SOVEREIGN GUARDIAN PORTAL
      </footer>
    </div>
  );
}
