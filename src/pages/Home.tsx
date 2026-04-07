import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const states = [
    'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 
    'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 
    'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 
    'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 
    'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
  ];

  const countries = [
    'UK', 'CAN', 'MEX', 'FRA', 'GER', 'JPN', 'AUS', 'BRA', 'IND', 'NGA',
    'ZAF', 'ARE', 'KSA', 'ITA', 'ESP', 'KOR', 'CHN', 'RUS', 'ISR', 'EGY'
  ];

  const handleSearch = () => {
    navigate(`/search?q=${searchTerm}`);
  };

  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh', fontFamily: 'sans-serif', color: '#000' }}>
      {/* HEADER BLOCK - LOCKED */}
      <header style={{ padding: '30px', textAlign: 'center', borderBottom: '1px solid #eee' }}>
        <h1 style={{ letterSpacing: '12px', fontWeight: '900', margin: 0 }}>
          KIN<span style={{ color: '#facc15' }}>YELLOW</span>
        </h1>
        <p style={{ fontSize: '10px', fontWeight: 'bold', letterSpacing: '3px', marginTop: '5px' }}>
          WORLDWIDE LEGACY DIRECTORY // GLOBAL IDENTITY HUB
        </p>
      </header>

      {/* 🔍 RESTORED SEARCH MATRIX (FULL GRANULARITY) */}
      <section style={{ maxWidth: '1000px', margin: '30px auto', padding: '20px', backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #eee' }}>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
          <input 
            type="text" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search Entities, Digital Humans, or Legacies..." 
            style={{ flex: 3, padding: '15px', borderRadius: '8px', border: '2px solid #000', fontSize: '16px' }}
          />
          <select style={{ flex: 1, padding: '10px', borderRadius: '8px', border: '2px solid #000', fontWeight: 'bold' }}>
            <option>United States</option>
            <option>Global / International</option>
          </select>
          <button onClick={handleSearch} style={{ flex: 1, backgroundColor: '#000', color: '#fff', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>SEARCH</button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '15px' }}>
          {/* RESTORED CULTURES */}
          <div>
            <label style={{ fontSize: '10px', fontWeight: 'bold', color: '#666' }}>CULTURAL DIRECTORY</label>
            <select style={{ width: '100%', padding: '10px', marginTop: '5px', borderRadius: '5px', border: '1px solid #ddd' }}>
              <option>All Cultures</option>
              <option>African American</option>
              <option>Hispanic / Latino</option>
              <option>Asian / Pacific Islander</option>
              <option>Indigenous / Native</option>
              <option>European / Caucasian</option>
              <option>Middle Eastern</option>
            </select>
          </div>
          {/* RESTORED GENDERS */}
          <div>
            <label style={{ fontSize: '10px', fontWeight: 'bold', color: '#666' }}>GENDER SELECTION</label>
            <select style={{ width: '100%', padding: '10px', marginTop: '5px', borderRadius: '5px', border: '1px solid #ddd' }}>
              <option>All Genders</option>
              <option>Male</option>
              <option>Female</option>
              <option>Non-Binary</option>
              <option>Transgender</option>
              <option>Gender-Fluid</option>
              <option>Two-Spirit</option>
            </select>
          </div>
          {/* RESTORED PRONOUNS */}
          <div>
            <label style={{ fontSize: '10px', fontWeight: 'bold', color: '#666' }}>PRONOUN PRECISION</label>
            <select style={{ width: '100%', padding: '10px', marginTop: '5px', borderRadius: '5px', border: '1px solid #ddd' }}>
              <option>All Pronouns</option>
              <option>He/Him</option>
              <option>She/Her</option>
              <option>They/Them</option>
              <option>Ze/Zir</option>
              <option>Xe/Xem</option>
              <option>Per/Per</option>
            </select>
          </div>
        </div>
      </section>

      <main style={{ maxWidth: '1000px', margin: '40px auto', padding: '0 20px' }}>
        
        {/* DUAL ANCHORS - LOCKED */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '40px' }}>
          <div 
            onClick={() => navigate('/persona')}
            style={{ padding: '40px 20px', border: '3px solid #facc15', cursor: 'pointer', borderRadius: '12px', backgroundColor: '#000', color: '#fff', textAlign: 'center' }}
          >
            <h2 style={{ margin: 0, letterSpacing: '2px', fontSize: '20px' }}>IDENTITY HUB // AI PERSONAS</h2>
            <p style={{ color: '#facc15', margin: '10px 0 0', fontSize: '10px', fontWeight: 'bold' }}>SOVEREIGN DIGITAL HUMAN NETWORK</p>
          </div>

          <div 
            onClick={() => navigate('/graveyard')}
            style={{ padding: '40px 20px', border: '3px solid #555', cursor: 'pointer', borderRadius: '12px', backgroundColor: '#1a1a1a', color: '#fff', textAlign: 'center' }}
          >
            <h2 style={{ margin: 0, letterSpacing: '2px', fontSize: '20px' }}>DIGITAL GRAVEYARD™</h2>
            <p style={{ color: '#888', margin: '10px 0 0', fontSize: '10px', fontWeight: 'bold' }}>PERMANENT LEGACY REPOSITORY</p>
          </div>
        </div>

        {/* COVERAGE GRIDS - LOCKED */}
        <section style={{ marginBottom: '50px' }}>
          <h3 style={{ borderLeft: '4px solid #facc15', paddingLeft: '10px', letterSpacing: '2px', marginBottom: '20px', textTransform: 'uppercase', fontSize: '16px' }}>United States Coverage</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(60px, 1fr))', gap: '8px' }}>
            {states.map((s) => <div key={s} style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center', fontSize: '12px', fontWeight: 'bold' }}>{s}</div>)}
          </div>
        </section>

        <section style={{ marginBottom: '50px' }}>
          <h3 style={{ borderLeft: '4px solid #facc15', paddingLeft: '10px', letterSpacing: '2px', marginBottom: '20px', textTransform: 'uppercase', fontSize: '16px' }}>Global Sovereign Network</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))', gap: '8px' }}>
            {countries.map((c) => <div key={c} style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center', fontSize: '12px', fontWeight: 'bold', backgroundColor: '#f9f9f9' }}>{c}</div>)}
          </div>
        </section>

        {/* FEATURED ARCHIVE - LOCKED */}
        <div 
          onClick={() => navigate('/business/bess-w-ball-memorial')}
          style={{ padding: '25px', border: '1px solid #eee', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
        >
          <div>
            <h4 style={{ margin: 0, fontSize: '18px' }}>Bess W. Ball Memorial Archive</h4>
            <p style={{ margin: 0, fontSize: '12px', color: '#666' }}>Pioneer of Minority Commerce // Philadelphia, PA</p>
          </div>
          <span style={{ fontSize: '24px', color: '#facc15' }}>→</span>
        </div>
      </main>

      <footer style={{ textAlign: 'center', padding: '80px', borderTop: '1px solid #eee', marginTop: '60px' }}>
        <p style={{ fontSize: '11px', color: '#aaa', letterSpacing: '4px' }}>SOLOMON KIN LLC // DIGITAL GRAVEYARD™ ARCHITECTURE</p>
      </footer>
    </div>
  );
}
