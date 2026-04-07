import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function KinosIntake() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLegacyPortal, setIsLegacyPortal] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    industry: 'General',
    state: 'PA',
    bio: '',
    verified: false,
    historicalName: '',
    listingYear: '',
    legacyTier: '2.0 Digital Transfer'
  });

  // 1. DETECT THE LEGACY PORTAL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('type') === 'legacy-2.0') {
      setIsLegacyPortal(true);
    }
  }, [location]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting to Sovereign Registry:", formData);
    const alertMsg = isLegacyPortal 
      ? "Legacy Transfer Initiated. Cross-referencing Tri-State Archives." 
      : "Legacy Data Captured. Pending Biometric Verification.";
    alert(alertMsg);
    navigate('/');
  };

  // DYNAMIC THEME COLORS
  const themeGold = '#facc15';
  const themeBlack = '#000';
  const accentColor = isLegacyPortal ? themeGold : themeBlack;
  const bgColor = isLegacyPortal ? themeBlack : '#fff';
  const textColor = isLegacyPortal ? '#fff' : themeBlack;

  return (
    <div style={{ backgroundColor: bgColor, minHeight: '100vh', padding: '60px 20px', color: textColor, transition: '0.3s' }}>
      <div style={{ 
        maxWidth: '600px', 
        margin: '0 auto', 
        border: `4px solid ${isLegacyPortal ? themeGold : themeBlack}`, 
        padding: '40px', 
        boxShadow: isLegacyPortal ? `15px 15px 0px ${themeGold}` : `15px 15px 0px ${themeGold}`,
        backgroundColor: isLegacyPortal ? '#111' : '#fff'
      }}>
        
        <h2 style={{ letterSpacing: '4px', fontWeight: '900', textTransform: 'uppercase', margin: 0, color: isLegacyPortal ? themeGold : themeBlack }}>
          {isLegacyPortal ? "Tri-State 2.0 Transfer" : "KinOS Intake System"}
        </h2>
        <p style={{ fontSize: '10px', fontWeight: 'bold', marginBottom: '30px', letterSpacing: '1px', color: isLegacyPortal ? '#888' : '#333' }}>
          {isLegacyPortal ? "HERITAGE FOUNDER MIGRATION" : "ESTABLISHING SOVEREIGN IDENTITY NODES"}
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          {/* STANDARD IDENTITY FIELDS */}
          <div>
            <label style={{ fontSize: '10px', fontWeight: '900', display: 'block', marginBottom: '5px' }}>
              CURRENT BUSINESS / ENTITY NAME
            </label>
            <input 
              required
              style={{ width: '100%', padding: '12px', border: `2px solid ${accentColor}`, fontSize: '14px', fontWeight: 'bold', backgroundColor: isLegacyPortal ? '#000' : '#fff', color: textColor }}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              placeholder="e.g. Nehemiah M. Brown"
            />
          </div>

          {/* HISTORICAL FIELDS (Only show for 2.0 Portal) */}
          {isLegacyPortal && (
            <div style={{ border: `1px dashed ${themeGold}`, padding: '15px', display: 'flex', flexDirection: 'column', gap: '15px', backgroundColor: '#000' }}>
              <p style={{ color: themeGold, fontSize: '9px', fontWeight: 'bold', margin: 0 }}>TRI-STATE ARCHIVE VERIFICATION</p>
              
              <div>
                <label style={{ fontSize: '10px', fontWeight: '900', display: 'block', marginBottom: '5px', color: '#fff' }}>
                  ORIGINAL LISTING NAME (AS PRINTED)
                </label>
                <input 
                  style={{ width: '100%', padding: '12px', border: `1px solid ${themeGold}`, fontSize: '14px', backgroundColor: '#111', color: '#fff' }}
                  onChange={(e) => setFormData({...formData, historicalName: e.target.value})}
                  placeholder="Original Book Name"
                />
              </div>

              <div>
                <label style={{ fontSize: '10px', fontWeight: '900', display: 'block', marginBottom: '5px', color: '#fff' }}>
                  APPROX. LISTING YEAR
                </label>
                <input 
                  style={{ width: '100%', padding: '12px', border: `1px solid ${themeGold}`, fontSize: '14px', backgroundColor: '#111', color: '#fff' }}
                  onChange={(e) => setFormData({...formData, listingYear: e.target.value})}
                  placeholder="e.g. 1998"
                />
              </div>
            </div>
          )}

          <div>
            <label style={{ fontSize: '10px', fontWeight: '900', display: 'block', marginBottom: '5px' }}>
              INDUSTRY CLASSIFICATION
            </label>
            <select 
              style={{ width: '100%', padding: '12px', border: `2px solid ${accentColor}`, fontWeight: 'bold', backgroundColor: isLegacyPortal ? '#000' : '#fff', color: textColor }}
              onChange={(e) => setFormData({...formData, industry: e.target.value})}
            >
              <option value="General">General Legacy</option>
              <option value="Music">Music & Entertainment</option>
              <option value="Funeral">Funeral & Mortuary</option>
              <option value="IT">Information Technology</option>
              <option value="Legal">Legal & Sovereign Affairs</option>
            </select>
          </div>

          <div>
            <label style={{ fontSize: '10px', fontWeight: '900', display: 'block', marginBottom: '5px' }}>
              LEGACY DESCRIPTION / BIO
            </label>
            <textarea 
              rows={4}
              style={{ width: '100%', padding: '12px', border: `2px solid ${accentColor}`, fontSize: '14px', fontWeight: 'bold', fontFamily: 'sans-serif', backgroundColor: isLegacyPortal ? '#000' : '#fff', color: textColor }}
              onChange={(e) => setFormData({...formData, bio: e.target.value})}
              placeholder="Describe the digital footprint or corporate entity..."
            />
          </div>

          <button type="submit" style={{ 
            backgroundColor: isLegacyPortal ? themeGold : themeBlack, 
            color: isLegacyPortal ? themeBlack : '#fff', 
            padding: '15px', 
            fontWeight: '900', 
            border: 'none', 
            cursor: 'pointer',
            letterSpacing: '2px',
            marginTop: '10px'
          }}>
            {isLegacyPortal ? "VALIDATE LEGACY TRANSFER" : "REGISTER LEGACY"}
          </button>
        </form>
      </div>
    </div>
  );
}