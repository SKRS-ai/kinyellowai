import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function GraveyardEnrollment() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const containerStyle = {
    backgroundColor: '#000',
    color: '#fff',
    minHeight: '100vh',
    fontFamily: "'Georgia', serif",
    padding: '60px 20px'
  };

  return (
    <div style={containerStyle}>
      <nav style={{ maxWidth: '1000px', margin: '0 auto 60px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button onClick={() => navigate('/graveyard')} style={{ background: 'none', border: '1px solid #333', color: '#666', cursor: 'pointer', padding: '10px 20px' }}>← BACK TO GALLERY</button>
        <div style={{ letterSpacing: '4px', fontSize: '12px', fontWeight: 'bold' }}>SOLOMON KIN LLC // SECURE ENROLLMENT</div>
      </nav>

      <main style={{ maxWidth: '800px', margin: '0 auto', border: '1px solid #1a1a1a', padding: '60px', backgroundColor: '#050505', borderRadius: '4px' }}>
        <header style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h1 style={{ fontSize: '32px', letterSpacing: '8px', textTransform: 'uppercase', marginBottom: '10px' }}>Digital Tombstone™ Enrollment</h1>
          <p style={{ color: '#facc15', fontSize: '11px', letterSpacing: '2px' }}>VERIFIED LEGACY REGISTRATION SYSTEM</p>
        </header>

        {/* PROGRESS INDICATOR */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '60px', opacity: 0.5 }}>
          <div style={{ borderBottom: step >= 1 ? '2px solid #facc15' : '2px solid #333', flex: 1, textAlign: 'center', paddingBottom: '10px', fontSize: '10px' }}>1. VALIDATION</div>
          <div style={{ borderBottom: step >= 2 ? '2px solid #facc15' : '2px solid #333', flex: 1, textAlign: 'center', paddingBottom: '10px', fontSize: '10px' }}>2. LIKENESS ASSETS</div>
          <div style={{ borderBottom: step >= 3 ? '2px solid #facc15' : '2px solid #333', flex: 1, textAlign: 'center', paddingBottom: '10px', fontSize: '10px' }}>3. ETERNAL ARCHIVE</div>
        </div>

        {step === 1 && (
          <section>
            <h2 style={{ fontSize: '20px', marginBottom: '30px' }}>Mandatory Validation Documents</h2>
            <p style={{ fontSize: '13px', color: '#888', marginBottom: '40px', lineHeight: '1.6' }}>
              To ensure the sanctity of the Digital Graveyard™, all profiles must be anchored to a physical record. Submissions are reviewed by Solomon Kin LLC compliance officers.
            </p>
            
            <div style={{ display: 'grid', gap: '25px' }}>
              <div>
                <label style={{ fontSize: '10px', letterSpacing: '2px', display: 'block', marginBottom: '10px' }}>UPLOAD CERTIFIED DEATH CERTIFICATE (PDF/IMG)</label>
                <input type="file" style={{ width: '100%', padding: '20px', border: '1px dashed #333', backgroundColor: '#000', color: '#555' }} />
              </div>
              
              <div>
                <label style={{ fontSize: '10px', letterSpacing: '2px', display: 'block', marginBottom: '10px' }}>PROOF OF RELATION OR LEGAL DIRECTIVE (WILL)</label>
                <input type="file" style={{ width: '100%', padding: '20px', border: '1px dashed #333', backgroundColor: '#000', color: '#555' }} />
              </div>

              <div style={{ padding: '20px', border: '1px solid #1a1a1a', marginTop: '20px' }}>
                <p style={{ fontSize: '12px', color: '#facc15', margin: 0 }}><strong>Funeral Director Service:</strong> Check this box if this profile is being created as part of a Funeral Home directive package.</p>
                <input type="checkbox" style={{ marginTop: '10px' }} />
              </div>
            </div>

            <button 
              onClick={() => setStep(2)}
              style={{ width: '100%', marginTop: '50px', padding: '20px', backgroundColor: '#fff', color: '#000', fontWeight: 'bold', border: 'none', cursor: 'pointer', letterSpacing: '4px' }}
            >
              PROCEED TO LIKENESS CREATION
            </button>
          </section>
        )}

        {step === 2 && (
          <section>
            <h2 style={{ fontSize: '20px', marginBottom: '30px' }}>Digital Tombstone™ Configuration</h2>
            <div style={{ display: 'grid', gap: '20px' }}>
              <input type="text" placeholder="FULL LEGAL NAME OF THE DEPARTED" style={{ width: '100%', padding: '15px', backgroundColor: '#000', border: '1px solid #333', color: '#fff' }} />
              <div style={{ display: 'flex', gap: '20px' }}>
                <input type="text" placeholder="DATE OF BIRTH" style={{ flex: 1, padding: '15px', backgroundColor: '#000', border: '1px solid #333', color: '#fff' }} />
                <input type="text" placeholder="DATE OF PASSING" style={{ flex: 1, padding: '15px', backgroundColor: '#000', border: '1px solid #333', color: '#fff' }} />
              </div>
              <textarea placeholder="ETERNAL LEGACY STATEMENT (For the Digital Tombstone)" rows="5" style={{ width: '100%', padding: '15px', backgroundColor: '#000', border: '1px solid #333', color: '#fff' }}></textarea>
              
              <div style={{ border: '1px solid #222', padding: '20px' }}>
                <label style={{ fontSize: '10px', letterSpacing: '2px', color: '#facc15' }}>MEDIA ARCHIVE (Photos/Videos/Voice Recordings)</label>
                <p style={{ fontSize: '11px', color: '#555' }}>Preserve the likeness in perpetuity. These assets will power the legacy profile.</p>
                <input type="file" multiple style={{ marginTop: '10px' }} />
              </div>
            </div>

            <button 
              onClick={() => alert('Legacy Submission Encrypted and Pending Review.')}
              style={{ width: '100%', marginTop: '50px', padding: '20px', backgroundColor: '#facc15', color: '#000', fontWeight: 'bold', border: 'none', cursor: 'pointer', letterSpacing: '4px' }}
            >
              FINALIZE MONUMENT
            </button>
          </section>
        )}
      </main>

      <footer style={{ textAlign: 'center', marginTop: '100px', opacity: 0.3 }}>
        <p style={{ fontSize: '10px', letterSpacing: '4px' }}>DIGITAL TOMBSTONE™ // COPYRIGHT © 2026 SOLOMON KIN LLC</p>
      </footer>
    </div>
  );
}
