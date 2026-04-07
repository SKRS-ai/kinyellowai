import React, { useState } from 'react';

// --- DATA TYPES FOR THE PERSONA VAULT ---
interface UserPersona {
  profile: { name: string; email: string; raid: string };
  auto: { vin: string; model: string; tireSize: string; lastService: string };
  pet: { name: string; breed: string; rabiesExpiry: string; weight: string };
  medical: { bloodType: string; allergies: string; insurance: string };
  legal: { activeCases: string[]; jurisdiction: string };
}

export const PersonaHub = () => {
  const [activeTab, setActiveTab] = useState<'IDENTITY' | 'AUTO' | 'PET' | 'MED' | 'LEGAL'>('IDENTITY');
  
  // MOCK INITIAL STATE (This would pull from your Secure DB)
  const [data, setData] = useState<UserPersona>({
    profile: { name: "Nehemiah Brown", email: "brneo059@gmail.com", raid: "RAID-PHL-2026-9901" },
    auto: { vin: "1FTFW1RG1K...", model: "2022 Ford F-150", tireSize: "275/65R18", lastService: "Oct 2025" },
    pet: { name: "King", breed: "Rottweiler", rabiesExpiry: "2027-05", weight: "95 lbs" },
    medical: { bloodType: "O+", allergies: "Peanuts, Penicillin", insurance: "Blue Cross #8821" },
    legal: { activeCases: ["Case #22-0984 (Civil)"], jurisdiction: "Philadelphia County" }
  });

  const handleUpdate = (section: keyof UserPersona, field: string, value: string) => {
    setData(prev => ({
      ...prev,
      [section]: { ...prev[section], [field]: value }
    }));
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fff', color: '#000', fontFamily: 'Inter, sans-serif' }}>
      
      {/* 1. SECURE HUB HEADER */}
      <header style={{ backgroundColor: '#000', color: '#facc15', padding: '40px', borderBottom: '10px solid #facc15' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 style={{ fontSize: '3rem', fontWeight: '900', letterSpacing: '-3px', margin: 0 }}>REALAIID PERSONA HUB</h1>
            <p style={{ letterSpacing: '2px', fontWeight: 'bold', fontSize: '12px' }}>DATA SOVEREIGNTY TERMINAL // ENCRYPTION: AES-256</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '11px', color: '#aaa' }}>USER IDENTITY TOKEN</div>
            <div style={{ fontSize: '18px', fontWeight: '900' }}>{data.profile.raid}</div>
          </div>
        </div>
      </header>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px', display: 'grid', gridTemplateColumns: '300px 1fr', gap: '60px' }}>
        
        {/* 2. NAVIGATION SIDEBAR */}
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {['IDENTITY', 'AUTO', 'PET', 'MED', 'LEGAL'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              style={{
                textAlign: 'left', padding: '20px', fontWeight: '900', fontSize: '14px', cursor: 'pointer',
                backgroundColor: activeTab === tab ? '#000' : '#f4f4f4',
                color: activeTab === tab ? '#facc15' : '#000',
                border: 'none', transition: '0.2s'
              }}
            >
              {tab} SETTINGS
            </button>
          ))}
          <div style={{ marginTop: '40px', padding: '20px', border: '2px dashed #ccc', textAlign: 'center' }}>
            <p style={{ fontSize: '11px', fontWeight: 'bold' }}>SHARE MY QR CODE</p>
            <div style={{ width: '100px', height: '100px', backgroundColor: '#000', margin: '15px auto' }}></div>
          </div>
        </nav>

        {/* 3. DYNAMIC DATA EDITORS */}
        <section style={{ backgroundColor: '#fff', border: '6px solid #000', padding: '50px' }}>
          
          {activeTab === 'IDENTITY' && (
            <div style={formSection}>
              <h2 style={sectionTitle}>CORE IDENTITY</h2>
              <label style={labelStyle}>FULL LEGAL NAME</label>
              <input value={data.profile.name} style={inputStyle} readOnly />
              <label style={labelStyle}>REGISTERED EMAIL</label>
              <input value={data.profile.email} style={inputStyle} readOnly />
              <p style={{ fontSize: '12px', color: '#888', marginTop: '20px' }}>*Core identity fields require biometric re-verification to change.</p>
            </div>
          )}

          {activeTab === 'AUTO' && (
            <div style={formSection}>
              <h2 style={sectionTitle}>AUTO PASS DATA</h2>
              <label style={labelStyle}>CURRENT VEHICLE (MAKE/MODEL)</label>
              <input value={data.auto.model} onChange={(e) => handleUpdate('auto', 'model', e.target.value)} style={inputStyle} />
              <label style={labelStyle}>VIN NUMBER</label>
              <input value={data.auto.vin} onChange={(e) => handleUpdate('auto', 'vin', e.target.value)} style={inputStyle} />
              <label style={labelStyle}>TIRE SIZE / RIM SPECS</label>
              <input value={data.auto.tireSize} onChange={(e) => handleUpdate('auto', 'tireSize', e.target.value)} style={inputStyle} />
            </div>
          )}

          {activeTab === 'PET' && (
            <div style={formSection}>
              <h2 style={sectionTitle}>PET PASS DATA</h2>
              <label style={labelStyle}>PET NAME</label>
              <input value={data.pet.name} onChange={(e) => handleUpdate('pet', 'name', e.target.value)} style={inputStyle} />
              <label style={labelStyle}>RABIES VACCINE EXPIRATION</label>
              <input type="month" value={data.pet.rabiesExpiry} onChange={(e) => handleUpdate('pet', 'rabiesExpiry', e.target.value)} style={inputStyle} />
            </div>
          )}

          {activeTab === 'MED' && (
            <div style={formSection}>
              <h2 style={sectionTitle}>MEDICAL PASS DATA</h2>
              <label style={labelStyle}>BLOOD TYPE</label>
              <input value={data.medical.bloodType} onChange={(e) => handleUpdate('medical', 'bloodType', e.target.value)} style={inputStyle} />
              <label style={labelStyle}>ALLERGIES & CONTRAINDICATIONS</label>
              <textarea value={data.medical.allergies} onChange={(e) => handleUpdate('medical', 'allergies', e.target.value)} style={{ ...inputStyle, height: '100px' }} />
            </div>
          )}

          {activeTab === 'LEGAL' && (
            <div style={formSection}>
              <h2 style={sectionTitle}>LEGAL PASS DATA</h2>
              <label style={labelStyle}>ACTIVE CASE NUMBERS</label>
              <textarea value={data.legal.activeCases.join('\n')} style={{ ...inputStyle, height: '100px' }} readOnly />
              <label style={labelStyle}>PRIMARY JURISDICTION</label>
              <input value={data.legal.jurisdiction} style={inputStyle} readOnly />
            </div>
          )}

          <div style={{ marginTop: '40px', display: 'flex', gap: '20px' }}>
            <button style={{ flex: 1, padding: '20px', backgroundColor: '#000', color: '#fff', fontWeight: '900', border: 'none', cursor: 'pointer' }}>
              ENCRYPT & SAVE CHANGES
            </button>
            <button style={{ padding: '20px', backgroundColor: '#facc15', color: '#000', fontWeight: '900', border: 'none', cursor: 'pointer' }}>
              DOWNLOAD DATA BACKUP
            </button>
          </div>
        </section>

      </main>

      {/* 4. FOOTER LOGS */}
      <footer style={{ padding: '40px', backgroundColor: '#f4f4f4', textAlign: 'center', borderTop: '1px solid #ddd' }}>
        <p style={{ fontSize: '11px', fontWeight: 'bold', color: '#aaa' }}>
          LAST SYNC: APRIL 03, 2026 // ALL DATA REMAINS USER-OWNED AND ENCRYPTED.
        </p>
      </footer>
    </div>
  );
};

// --- SHARED STYLES ---
const formSection = { display: 'flex', flexDirection: 'column' as const };
const sectionTitle = { fontSize: '32px', fontWeight: '900', marginBottom: '30px', borderBottom: '4px solid #000', paddingBottom: '10px' };
const labelStyle = { fontSize: '11px', fontWeight: '900', color: '#666', marginTop: '20px', marginBottom: '5px', letterSpacing: '1px' };
const inputStyle = { padding: '15px', fontSize: '16px', border: '2px solid #eee', outline: 'none', fontFamily: 'Inter, sans-serif' };