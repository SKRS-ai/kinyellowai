import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function HeaderAndAuth() {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);

  // Styling Constants
  const headerStyle: React.CSSProperties = {
    height: '40px',
    backgroundColor: '#000',
    borderBottom: '1px solid #facc15',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 50px',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    fontFamily: 'sans-serif'
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: '#facc15',
    color: '#000',
    border: 'none',
    padding: '5px 15px',
    fontSize: '11px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginLeft: '10px',
    textTransform: 'uppercase'
  };

  const modalOverlay: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.9)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2000
  };

  const formStyle: React.CSSProperties = {
    backgroundColor: '#111',
    border: '1px solid #facc15',
    padding: '40px',
    width: '400px',
    color: '#fff',
    fontFamily: 'sans-serif'
  };

  return (
    <>
      {/* 1. THE DIRECTIONAL HEADER */}
      <nav style={headerStyle}>
        <Link to="/" style={{ textDecoration: 'none', color: '#fff', fontSize: '12px', fontWeight: 'bold', letterSpacing: '2px' }}>
          KIN<span style={{ color: '#facc15' }}>YELLOW</span> WORLDWIDE
        </Link>
        
        <div>
          {/* LOGIN REMAINS A MODAL FOR QUICK ACCESS */}
          <button style={buttonStyle} onClick={() => setShowLogin(true)}>
            Secure Access
          </button>

          {/* JOIN REGISTRY NOW NAVIGATES TO THE INTAKE PAGE */}
          <Link to="/register">
            <button style={buttonStyle}>
              Join KinOS Intake Registry
            </button>
          </Link>
        </div>
      </nav>

      {/* 2. LOGIN MODAL */}
      {showLogin && (
        <div style={modalOverlay}>
          <div style={formStyle}>
            <h2 style={{ fontSize: '18px', color: '#facc15', marginBottom: '20px', letterSpacing: '2px' }}>SECURE LOGIN</h2>
            <input 
              type="text" 
              placeholder="USERNAME / REALAIID" 
              style={{ width: '100%', padding: '12px', marginBottom: '10px', background: '#000', border: '1px solid #333', color: '#fff', outline: 'none' }} 
            />
            <input 
              type="password" 
              placeholder="PASSWORD" 
              style={{ width: '100%', padding: '12px', marginBottom: '20px', background: '#000', border: '1px solid #333', color: '#fff', outline: 'none' }} 
            />
            <button 
              style={{ ...buttonStyle, width: '100%', padding: '12px', marginLeft: 0 }}
              onClick={() => {
                setShowLogin(false);
                navigate('/dashboard/pro'); // Redirects to KinOS Dashboard on "login"
              }}
            >
              ACCESS DASHBOARD
            </button>
            <button 
              onClick={() => setShowLogin(false)} 
              style={{ background: 'none', border: 'none', color: '#666', width: '100%', marginTop: '15px', cursor: 'pointer', fontSize: '11px', letterSpacing: '1px' }}
            >
              CANCEL
            </button>
          </div>
        </div>
      )}
    </>
  );
}