import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import { useNavigate } from 'react-router-dom';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    const val = e.target.value;
    setQuery(val);
    if (val.length > 2) {
      const { data } = await supabase.from('businesses').select('*').ilike('name', `%${val}%`).limit(5);
      setResults(data || []);
    } else { setResults([]); }
  };

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '600px', margin: '20px auto' }}>
      <input
        type="text"
        placeholder="Search Bess W. Ball legacy records..."
        value={query}
        onChange={handleSearch}
        style={{ width: '100%', padding: '15px 25px', borderRadius: '50px', border: '2px solid #000' }}
      />
      {results.length > 0 && (
        <div style={{ position: 'absolute', top: '60px', width: '100%', backgroundColor: '#fff', zIndex: 1000, border: '1px solid #eee' }}>
          {results.map(item => (
            <div key={item.id} onClick={() => navigate(`/state/${item.state_code.toLowerCase()}`)} style={{ padding: '10px', cursor: 'pointer' }}>
              {item.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
