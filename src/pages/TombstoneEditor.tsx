import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function TombstoneEditor() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', fontFamily: "'Georgia', serif", padding: '40px' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #222', paddingBottom: '20px', marginBottom: '40px' }}>
        <button onClick={() => navigate('/dashboard')} style={{ background: 'none', border: '1px solid #444', color: '#888', cursor: 'pointer', padding: '10px 20px' }}>← BACK TO DASHBOARD</button>
        <div style={{ letterSpacing: '4px', fontSize: '12px' }}>LEGACY EDITOR // DIGITAL TOMBSTONE™</div>
      </nav>

      <main style={{ maxWidth: '900px', margin: '0 auto' }}>
        <header style={{ marginBottom: '60px' }}>
          <h1 style={{ fontSize: '32px', letterSpacing: '4px', margin: 0 }}>EDITING: BESS W. BALL</h1>
          <p style={{ color: '#facc15', fontSize: '12px', marginTop: '10px' }}>STATUS: VERIFIED BY DEATH CERTIFICATE // ETERNAL ARCHIVE MODE</p>
        </header>

        <section style={{ display: 'grid', gap: '40px' }}>
          
          {/* 📜 WILL & LEGAL DIRECTIVES */}
          <div style={{ border: '1px solid #222', padding: '30px', backgroundColor: '#050505' }}>
            <h3 style={{ color: '#facc15', fontSize: '14px', letterSpacing: '2px', marginBottom: '20px' }}>1. WILL & LEGAL DIRECTIVES</h3>
            <p style={{ fontSize: '12px', color: '#666', marginBottom: '20px' }}>Upload specific legal directives or "Last Words" to be displayed as the primary profile anchor.</p>
            <input type="file" style={{ width: '100%', padding: '20px', border: '1px dashed #333' }} />
            <textarea placeholder="Transcribe specific Will directives here..." rows="4" style={{ width: '100%', marginTop: '20px', padding: '15px', backgroundColor: '#000', border: '1px solid #222', color: '#fff' }}></textarea>
          </div>

          {/* 📽️ VISUAL ARCHIVE & LIKENESS ASSETS */}
          <div style={{ border: '1px solid #222', padding: '30px', backgroundColor: '#050505' }}>
            <h3 style={{ color: '#facc15', fontSize: '14px', letterSpacing: '2px', marginBottom: '20px' }}>2. VISUAL ARCHIVE & LIKENESS ASSETS</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div>
                <label style={{ fontSize: '10px', color: '#444' }}>ETERNAL PORTRAIT (GOLD CIRCLE)</label>
                <input type="file" style={{ marginTop: '10px' }} />
              </div>
              <div>
                <label style={{ fontSize: '10px', color: '#444' }}>LEGACY VIDEO/VOICE REELS</label>
                <input type="file" multiple style={{ marginTop: '10px' }} />
              </div>
            </div>
          </div>

          {/* 🧬 MONUMENT RECORDS */}
          <div style={{ border: '1px solid #222', padding: '30px', backgroundColor: '#050505' }}>
            <h3 style={{ color: '#facc15', fontSize: '14px', letterSpacing: '2px', marginBottom: '20px' }}>3. MONUMENT RECORDS (TOMBSTONE DATA)</h3>
            <input type="text" placeholder="EPITAPH" style={{ width: '100%', padding: '15px', backgroundColor: '#000', border: '1px solid #222', color: '#fff', marginBottom: '15px' }} />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
              <input type="text" placeholder="CEMETERY LOCATION (PHYSICAL)" style={{ padding: '15px', backgroundColor: '#000', border: '1px solid #222', color: '#fff' }} />
              <input type="text" placeholder="PLOT NUMBER" style={{ padding: '15px', backgroundColor: '#000', border: '1px solid #222', color: '#fff' }} />
            </div>
          </div>

          <button style={{ padding: '25px', backgroundColor: '#facc15', color: '#000', fontWeight: '900', border: 'none', cursor: 'pointer', letterSpacing: '6px' }}>
            UPDATE DIGITAL TOMBSTONE™
          </button>

        </section>
      </main>
    </div>
  );
}
