import React from 'react';
import { useParams, Link } from 'react-router-dom';

const BusinessCardDetail = () => {
  const { bizId } = useParams();

  return (
    <div style={{ padding: '40px', color: 'white', backgroundColor: '#000', minHeight: '100vh' }}>
      <Link to="/" style={{ color: '#facc15', textDecoration: 'none' }}>← Back to KinHome</Link>
      
      <div style={{ marginTop: '40px', border: '1px solid #333', padding: '20px', borderRadius: '8px' }}>
        <h1 style={{ letterSpacing: '2px', color: '#facc15' }}>BUSINESS REGISTRY</h1>
        <p style={{ fontSize: '1.2rem' }}>Sovereign ID: <span style={{ color: '#aaa' }}>{bizId}</span></p>
        <hr style={{ borderColor: '#222' }} />
        <div style={{ padding: '20px', textAlign: 'center', opacity: 0.7 }}>
          [ SECURE DATA NODE ACTIVE ]
          <br />
          Loading business details from Sovereign Registry...
        </div>
      </div>
    </div>
  );
};

export default BusinessCardDetail;