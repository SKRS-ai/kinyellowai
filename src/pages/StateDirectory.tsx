import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import IdentityFilter from '../components/IdentityFilter';

const StateDirectory = () => {
  const { stateId } = useParams();
  const [activeFilter, setActiveFilter] = useState(null);

  // Expanded Mock Data to show filtering in action
  const allBusinesses = [
    { id: 1, name: "Philly Tech Solutions", tags: ["Black-Owned", "He/Him"], city: "Philadelphia" },
    { id: 2, name: "Andean Artisans", tags: ["Afro-Latino", "Indigenous"], city: "Pittsburgh" },
    { id: 3, name: "Lakeside Digital", tags: ["Non-Binary Led", "They/Them"], city: "Minneapolis" },
    { id: 4, name: "Unity Security", tags: ["Trans-Owned", "Veteran-Owned"], city: "Allentown" }
  ];

  const filteredData = activeFilter 
    ? allBusinesses.filter(b => b.tags.includes(activeFilter)) 
    : allBusinesses;

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#fff', minHeight: '100vh' }}>
      <nav style={{ padding: '20px 40px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <h2 style={{ margin: 0, fontWeight: '900', textTransform: 'uppercase', fontSize: '24px' }}>
            <span style={{ color: '#000' }}>KIN</span><span style={{ color: '#facc15' }}>YELLOW</span>
          </h2>
        </Link>
        <span style={{ fontWeight: 'bold' }}>{stateId?.toUpperCase()} HUB</span>
      </nav>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        <IdentityFilter onFilterChange={setActiveFilter} />

        <div style={{ marginBottom: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '900' }}>
            {activeFilter ? `${activeFilter} Businesses` : `All Verified Businesses`}
          </h2>
          {activeFilter && (
            <button onClick={() => setActiveFilter(null)} style={{ border: 'none', background: 'none', color: '#facc15', fontWeight: 'bold', cursor: 'pointer' }}>
              Clear Filter ×
            </button>
          )}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
          {filteredData.map(biz => (
            <div key={biz.id} style={{ padding: '30px', border: '1px solid #eee', borderRadius: '20px' }}>
              <div style={{ display: 'flex', gap: '5px', marginBottom: '10px' }}>
                {biz.tags.map(t => (
                  <span key={t} style={{ backgroundColor: '#000', color: '#facc15', fontSize: '9px', fontWeight: 'bold', padding: '3px 8px', borderRadius: '4px' }}>
                    {t}
                  </span>
                ))}
              </div>
              <h3 style={{ fontSize: '22px', margin: '0 0 5px 0' }}>{biz.name}</h3>
              <p style={{ color: '#888', fontSize: '14px' }}>{biz.city}, {stateId?.toUpperCase()}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StateDirectory;
