import React from 'react';
import { Link } from 'react-router-dom';

const states = [
  'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 
  'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 
  'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 
  'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 
  'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
];

export default function DirectoryByState() {
  return (
    <section style={{ padding: '60px 20px', backgroundColor: '#fff', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* HEADER */}
        <div style={{ marginBottom: '40px', borderLeft: '8px solid #facc15', paddingLeft: '20px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '900', margin: '0', textTransform: 'uppercase' }}>
            National Coverage
          </h2>
          <p style={{ color: '#666', margin: '5px 0 0 0' }}>Explore local businesses across all 50 states</p>
        </div>

        {/* THE GRID */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', 
          gap: '15px' 
        }}>
          {states.map(state => (
            <Link 
              key={state}
              to={`/state/${state.toLowerCase()}`}
              style={{ 
                display: 'block',
                padding: '20px 0',
                textAlign: 'center',
                backgroundColor: '#f9f9f9',
                border: '1px solid #eee',
                borderRadius: '12px',
                textDecoration: 'none',
                color: '#000',
                fontWeight: 'bold',
                transition: 'all 0.2s'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = '#facc15';
                e.currentTarget.style.backgroundColor = '#fff';
                e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.05)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = '#eee';
                e.currentTarget.style.backgroundColor = '#f9f9f9';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {state}
            </Link>
          ))}
        </div>

        {/* AI PERSONA BRIDGE */}
        <div style={{ 
          marginTop: '60px', 
          padding: '40px', 
          backgroundColor: '#000', 
          borderRadius: '24px', 
          color: '#fff',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <div>
            <h3 style={{ margin: 0, fontSize: '24px' }}>Certified Digital Human Hub</h3>
            <p style={{ color: '#facc15', margin: '5px 0 0 0', fontSize: '14px' }}>Philadelphia Node: PHL-01 Active</p>
          </div>
          <Link 
            to="/persona/nehemiah-brown"
            style={{ 
              backgroundColor: '#facc15', 
              color: '#000', 
              padding: '15px 30px', 
              borderRadius: '12px', 
              fontWeight: '900', 
              textDecoration: 'none',
              textTransform: 'uppercase',
              fontSize: '14px'
            }}
          >
            Verify Identity →
          </Link>
        </div>

      </div>
    </section>
  );
}
