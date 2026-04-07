import React from 'react';

const categories = {
  culture: ['Afro-Latino', 'Indigenous', 'South Asian', 'Middle Eastern', 'Jewish-Owned', 'Amish-Crafted'],
  identity: ['Non-Binary Led', 'Trans-Owned', 'Women-Owned', 'Veteran-Owned', 'Two-Spirit'],
  pronouns: ['They/Them', 'She/Her', 'He/Him', 'Ze/Zir']
};

export default function IdentityFilter({ onFilterChange }) {
  return (
    <div style={{ backgroundColor: '#f9f9f9', padding: '30px', borderRadius: '24px', marginBottom: '40px', border: '1px solid #eee' }}>
      <h3 style={{ margin: '0 0 20px 0', fontSize: '14px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '1px' }}>
        Filter by <span style={{ color: '#facc15' }}>Identity Hub</span>
      </h3>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
        {Object.entries(categories).map(([group, tags]) => (
          <div key={group} style={{ flex: '1', minWidth: '200px' }}>
            <p style={{ fontSize: '10px', fontWeight: 'bold', color: '#888', marginBottom: '10px', textTransform: 'uppercase' }}>{group}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {tags.map(tag => (
                <button 
                  key={tag}
                  onClick={() => onFilterChange(tag)}
                  style={{ 
                    padding: '6px 12px', 
                    fontSize: '12px', 
                    borderRadius: '20px', 
                    border: '1px solid #ddd', 
                    backgroundColor: '#fff', 
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.borderColor = '#facc15'}
                  onMouseOut={(e) => e.currentTarget.style.borderColor = '#ddd'}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
