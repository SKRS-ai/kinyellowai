import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const MerchantOnboarding = () => {
  const [step, setStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState<'SILVER' | 'GOLD' | 'PLATINUM'>('GOLD');
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#000', color: '#fff', fontFamily: 'Inter, sans-serif', padding: '60px 20px' }}>
      
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {/* STEP INDICATOR */}
        <div style={{ display: 'flex', gap: '10px', marginBottom: '60px' }}>
          {[1, 2, 3].map(i => (
            <div key={i} style={{ 
              flex: 1, height: '8px', 
              backgroundColor: step >= i ? '#facc15' : '#333',
              transition: '0.3s'
            }} />
          ))}
        </div>

        {/* STEP 1: REALAIID IDENTITY LINK */}
        {step === 1 && (
          <div style={containerStyle}>
            <h1 style={titleStyle}>CLAIM YOUR IDENTITY</h1>
            <p style={subTitleStyle}>Scan your RealAIID Biometric Hash to verify ownership of this business entity.</p>
            
            <div style={scannerBox}>
              <div style={{ fontSize: '50px', marginBottom: '20px' }}>🤳</div>
              <p style={{ fontWeight: '900', letterSpacing: '2px' }}>[ WAITING FOR BIOMETRIC HANDSHAKE ]</p>
              <div style={scanningLine} />
            </div>

            <button onClick={() => setStep(2)} style={primaryBtn}>
              VERIFY BIOMETRIC OWNERSHIP
            </button>
          </div>
        )}

        {/* STEP 2: SELECT YOUR PASS ENGINE */}
        {step === 2 && (
          <div style={containerStyle}>
            <h1 style={titleStyle}>SELECT YOUR INTAKE ENGINE</h1>
            <p style={subTitleStyle}>Which Kin OS Pass should your customers use to interact with you?</p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '40px' }}>
              {['FOOD', 'AUTO', 'LEGAL', 'MED', 'HOME', 'PET', 'BEAUTY'].map(type => (
                <div key={type} style={selectionCard}>
                  <input type="radio" name="passType" id={type} />
                  <label htmlFor={type} style={{ fontWeight: '900', marginLeft: '10px' }}>{type} PASS</label>
                </div>
              ))}
            </div>

            <button onClick={() => setStep(3)} style={primaryBtn}>
              CONFIRM INDUSTRY ENGINE
            </button>
          </div>
        )}

        {/* STEP 3: THE SUBSCRIPTION & ACTIVATION */}
        {step === 3 && (
          <div style={containerStyle}>
            <h1 style={titleStyle}>ACTIVATE GOLD STATUS</h1>
            <p style={subTitleStyle}>Finalize your integration fee to switch from Public Record to Verified Partner.</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '40px' }}>
              <div 
                onClick={() => setSelectedPlan('SILVER')}
                style={{ ...planCard, borderColor: selectedPlan === 'SILVER' ? '#facc15' : '#333' }}
              >
                <h3 style={{ margin: 0 }}>SILVER: BASIC INTAKE</h3>
                <p style={{ margin: '5px 0', fontSize: '13px', color: '#aaa' }}>Standard contact data only.</p>
                <div style={{ fontWeight: '900' }}>$49 / MO</div>
              </div>

              <div 
                onClick={() => setSelectedPlan('GOLD')}
                style={{ ...planCard, borderColor: selectedPlan === 'GOLD' ? '#facc15' : '#333', backgroundColor: '#111' }}
              >
                <div style={{ position: 'absolute', top: '-10px', right: '20px', backgroundColor: '#facc15', color: '#000', fontSize: '10px', fontWeight: '900', padding: '2px 10px' }}>RECOMMENDED</div>
                <h3 style={{ margin: 0 }}>GOLD: FULL PASS ENGINE</h3>
                <p style={{ margin: '5px 0', fontSize: '13px', color: '#aaa' }}>Full Industry Data (VIN, Case #, Allergies, etc.)</p>
                <div style={{ fontWeight: '900', color: '#facc15' }}>$149 / MO</div>
              </div>
            </div>

            <button 
              onClick={() => {
                alert("IDENTITY VERIFIED. CARD RE-GENERATING...");
                navigate('/dashboard/pro');
              }} 
              style={{ ...primaryBtn, backgroundColor: '#facc15', color: '#000' }}
            >
              PAY & ACTIVATE KIN PARTNER STATUS
            </button>
          </div>
        )}

        <div style={{ marginTop: '40px', textAlign: 'center' }}>
          <p style={{ fontSize: '10px', color: '#555', letterSpacing: '1px' }}>
            SECURED BY SOLOMON KIN RECORDS LLC MEDIA GROUP // 2026
          </p>
        </div>
      </div>
    </div>
  );
};

// --- STYLES ---
const containerStyle: React.CSSProperties = { animation: 'fadeIn 0.5s ease' };
const titleStyle: React.CSSProperties = { fontSize: '42px', fontWeight: '900', letterSpacing: '-2px', marginBottom: '10px' };
const subTitleStyle: React.CSSProperties = { fontSize: '16px', color: '#aaa', marginBottom: '40px', lineHeight: '1.5' };

const scannerBox: React.CSSProperties = {
  border: '2px solid #333', padding: '60px', textAlign: 'center', position: 'relative',
  overflow: 'hidden', backgroundColor: '#0a0a0a', marginBottom: '40px'
};

const scanningLine: React.CSSProperties = {
  position: 'absolute', top: 0, left: 0, width: '100%', height: '2px',
  backgroundColor: '#facc15', boxShadow: '0 0 15px #facc15',
  animation: 'scan 2s infinite linear'
};

const selectionCard: React.CSSProperties = {
  padding: '20px', border: '1px solid #333', display: 'flex', alignItems: 'center',
  cursor: 'pointer', transition: '0.2s'
};

const planCard: React.CSSProperties = {
  padding: '25px', border: '2px solid #333', cursor: 'pointer', position: 'relative',
  transition: '0.2s'
};

const primaryBtn: React.CSSProperties = {
  width: '100%', padding: '20px', backgroundColor: '#fff', color: '#000',
  border: 'none', fontWeight: '900', fontSize: '16px', cursor: 'pointer',
  letterSpacing: '1px'
};

// Add these to your index.css or a global style tag
/*
@keyframes scan {
  0% { top: 0% }
  100% { top: 100% }
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
*/