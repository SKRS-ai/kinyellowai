import React, { useState } from 'react';
import { supabase } from '../../../supabaseClient';
import { useNavigate } from 'react-router-dom';

export default function TheGateway() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async (val) => {
    setQuery(val);
    if (val.length >= 2) {
      const { data } = await supabase.from('businesses').select('*').ilike('name', `%${val}%`).limit(5);
      setResults(data || []);
    } else {
      setResults([]);
    }
  };

  const executeSearch = () => {
    if (query) navigate(`/state/PA?search=${query}`);
  };

  return (
    <div style={{ padding: '60px 20px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '72px', fontWeight: '900', margin: 0, letterSpacing: '-2px' }}>KIN<span style={{ color: '#facc15' }}>YELLOW</span></h1>
      <p style={{ marginBottom: '40px', fontWeight: 'bold', letterSpacing: '2px', color: '#666' }}>WORLDWIDE LEGACY DIRECTORY</p>
      
      <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto', display: 'flex', gap: '10px' }}>
        <input 
          type="text" 
          placeholder="Search Legacy Records..." 
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && executeSearch()}
          style={{ 
            flex: 1, padding: '25px 40px', borderRadius: '100px', border: 'none',
            backgroundColor: '#facc15', color: '#000', fontSize: '20px', fontWeight: 'bold',
            boxShadow: '0 15px 35px rgba(250, 204, 21, 0.2)', outline: 'none'
          }}
        />
        <button 
          onClick={executeSearch}
          style={{ 
            padding: '0 40px', borderRadius: '100px', border: 'none', backgroundColor: '#000', 
            color: '#fff', fontWeight: '900', cursor: 'pointer', fontSize: '16px' 
          }}
        >
          SEARCH
        </button>

        {results.length > 0 && (
          <div style={{ position: 'absolute', top: '90px', width: '100%', backgroundColor: '#fff', borderRadius: '20px', boxShadow: '0 20px 60px rgba(0,0,0,0.15)', zIndex: 1000, textAlign: 'left', overflow: 'hidden', border: '1px solid #eee' }}>
            {results.map(item => (
              <div 
                key={item.id} 
                onClick={() => navigate(`/business/${item.id}`)}
                style={{ padding: '20px 30px', borderBottom: '1px solid #f5f5f5', cursor: 'pointer' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#fffbe6'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#fff'}
              >
                <div style={{ fontWeight: '900', fontSize: '18px' }}>{item.name}</div>
                <div style={{ fontSize: '13px', color: '#888' }}>{item.city}, {item.state_code}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
