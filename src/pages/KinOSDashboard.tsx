import React, { useState } from 'react';

// --- TYPE DEFINITIONS FOR THE INTAKE SYSTEM ---
type PassType = 'FOOD' | 'LEGAL' | 'AUTO' | 'MED' | 'HOME' | 'PET' | 'BEAUTY';

interface IntakePass {
  id: string;
  type: PassType;
  clientName: string;
  timestamp: string;
  summary: string;
  urgency: 'LOW' | 'MEDIUM' | 'HIGH';
  payload: any; // The specific data (VIN, Case #, Allergy, etc.)
}

// --- MOCK DATA FEED ---
const MOCK_INCOMING: IntakePass[] = [
  { 
    id: 'K-992', type: 'FOOD', clientName: 'Nehemiah Brown', timestamp: '7:45 PM', 
    summary: 'Booth Preferred / Nut Allergy', urgency: 'MEDIUM',
    payload: { guests: 4, occasion: 'Business', favoriteDrink: 'Espresso' }
  },
  { 
    id: 'K-881', type: 'LEGAL', clientName: 'Marcus Vane', timestamp: 'Tomorrow 9:00 AM', 
    summary: 'Case #22-0984 / Conflict Check', urgency: 'HIGH',
    payload: { caseType: 'Civil', jurisdiction: 'Philly County', documents: 4 }
  },
  { 
    id: 'K-774', type: 'AUTO', clientName: 'Sarah Jenkins', timestamp: 'Monday', 
    summary: '2022 Ford F-150 / Tire Service', urgency: 'LOW',
    payload: { vin: '1FTFW1RG...', tireSize: '275/65R18', lastService: 'Oct 2025' }
  }
];

export const KinOSDashboard = () => {
  const [activePass, setActivePass] = useState<IntakePass | null>(null);
  const [bizType, setBizType] = useState<PassType>('FOOD');

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f9f9f9', fontFamily: 'Inter, sans-serif' }}>
      
      {/* SIDEBAR: PRO CONTROL */}
      <aside style={{ width: '300px', backgroundColor: '#000', color: '#fff', padding: '40px 25px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: '50px' }}>
          <h2 style={{ color: '#facc15', fontSize: '22px', fontWeight: '900', letterSpacing: '2px', margin: 0 }}>KIN OS PRO</h2>
          <p style={{ fontSize: '10px', color: '#666', fontWeight: 'bold' }}>VERSION 2026.4.1</p>
        </div>

        <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <button style={sidebarBtn}>ACTIVE QUEUE</button>
          <button style={sidebarBtn}>CLIENT ARCHIVE</button>
          <button style={sidebarBtn}>DATA INTEGRITY LOGS</button>
          <button style={sidebarBtn}>PAYMENTS & FEES</button>
        </nav>

        <div style={{ border: '1px solid #facc15', padding: '15px', borderRadius: '4px', marginTop: 'auto' }}>
          <p style={{ fontSize: '11px', color: '#facc15', margin: '0 0 10px 0', fontWeight: '900' }}>IDENTITY STATUS</p>
          <div style={{ fontSize: '14px', fontWeight: 'bold' }}>REALAIID VERIFIED ✅</div>
        </div>
      </aside>

      {/* MAIN VIEW */}
      <main style={{ flex: 1, padding: '50px', overflowY: 'auto' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px' }}>
          <div>
            <h1 style={{ fontSize: '38px', fontWeight: '900', margin: 0 }}>INTAKE COMMAND</h1>
            <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
              {['FOOD', 'LEGAL', 'AUTO', 'MED'].map(type => (
                <button 
                  key={type}
                  onClick={() => setBizType(type as PassType)}
                  style={{ 
                    padding: '5px 12px', fontSize: '10px', fontWeight: '900', border: '2px solid #000',
                    backgroundColor: bizType === type ? '#000' : 'transparent',
                    color: bizType === type ? '#facc15' : '#000', cursor: 'pointer'
                  }}
                >
                  {type} VIEW
                </button>
              ))}
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '12px', color: '#999', fontWeight: '700' }}>CURRENT SESSION</div>
            <div style={{ fontSize: '18px', fontWeight: '900' }}>APRIL 03, 2026</div>
          </div>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '40px' }}>
          
          {/* QUEUE LIST */}
          <section>
            <h3 style={{ fontSize: '14px', fontWeight: '900', color: '#888', marginBottom: '20px', letterSpacing: '1px' }}>INCOMING PASS HANDSHAKES</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {MOCK_INCOMING.filter(p => p.type === bizType || bizType === 'FOOD').map(pass => (
                <div 
                  key={pass.id} 
                  onClick={() => setActivePass(pass)}
                  style={{ ...passCard, borderColor: activePass?.id === pass.id ? '#facc15' : '#eee' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <span style={passBadge}>{pass.type} PASS</span>
                    <span style={{ fontSize: '12px', color: pass.urgency === 'HIGH' ? 'red' : '#666', fontWeight: '900' }}>{pass.urgency}</span>
                  </div>
                  <h4 style={{ margin: '0 0 5px 0', fontSize: '20px', fontWeight: '900' }}>{pass.clientName}</h4>
                  <p style={{ margin: 0, fontSize: '14px', color: '#555' }}>{pass.summary}</p>
                  <div style={{ marginTop: '15px', fontSize: '11px', fontWeight: '700', color: '#aaa' }}>RECEIVED: {pass.timestamp}</div>
                </div>
              ))}
            </div>
          </section>

          {/* DATA INSPECTOR (The "Insights" Panel) */}
          <section>
            <div style={{ position: 'sticky', top: '50px', backgroundColor: '#fff', border: '5px solid #000', padding: '30px' }}>
              {activePass ? (
                <>
                  <div style={{ backgroundColor: '#000', color: '#facc15', padding: '10px', textAlign: 'center', marginBottom: '20px', fontWeight: '900' }}>
                    SECURE DATA DECRYPTION ACTIVE
                  </div>
                  <h2 style={{ margin: '0 0 10px 0', fontWeight: '900' }}>{activePass.clientName}</h2>
                  <p style={{ color: '#666', fontSize: '13px' }}>RealAIID Token: <code style={{ color: '#000' }}>#RAID-{activePass.id}-2026</code></p>
                  
                  <div style={{ marginTop: '30px', borderTop: '1px solid #eee', paddingTop: '20px' }}>
                    <h4 style={{ fontSize: '12px', fontWeight: '900', marginBottom: '15px' }}>RAW INTAKE PAYLOAD:</h4>
                    <pre style={{ backgroundColor: '#f4f4f4', padding: '15px', fontSize: '12px', overflowX: 'auto' }}>
                      {JSON.stringify(activePass.payload, null, 2)}
                    </pre>
                  </div>

                  <button style={actionBtn}>PUSH TO INTERNAL CRM</button>
                  <button style={{ ...actionBtn, backgroundColor: 'transparent', color: '#000', border: '2px solid #000', marginTop: '10px' }}>
                    INITIATE KIN-CHAT
                  </button>
                </>
              ) : (
                <div style={{ textAlign: 'center', padding: '60px 20px', color: '#ccc' }}>
                  <div style={{ fontSize: '40px', marginBottom: '20px' }}>📡</div>
                  <p style={{ fontWeight: '900', fontSize: '14px' }}>SELECT AN INCOMING PASS TO DECRYPT CLIENT DATA</p>
                </div>
              )}
            </div>
          </section>

        </div>
      </main>
    </div>
  );
};

// --- STYLES ---
const sidebarBtn: React.CSSProperties = {
  background: 'none', border: 'none', color: '#888', textAlign: 'left',
  padding: '10px 0', fontSize: '13px', fontWeight: '900', cursor: 'pointer',
  letterSpacing: '1px', transition: 'color 0.2s'
};

const passCard: React.CSSProperties = {
  backgroundColor: '#fff', padding: '25px', border: '2px solid #eee',
  cursor: 'pointer', transition: 'all 0.2s', boxShadow: '4px 4px 0px rgba(0,0,0,0.05)'
};

const passBadge: React.CSSProperties = {
  backgroundColor: '#000', color: '#facc15', fontSize: '10px',
  fontWeight: '900', padding: '3px 8px', letterSpacing: '1px'
};

const actionBtn: React.CSSProperties = {
  width: '100%', padding: '18px', backgroundColor: '#000', color: '#fff',
  border: 'none', fontWeight: '900', fontSize: '14px', cursor: 'pointer',
  marginTop: '30px'
};