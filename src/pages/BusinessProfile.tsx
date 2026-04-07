import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function BusinessDetail() {
  const { id } = useParams(); // Catches the ID from the URL
  const [business, setBusiness] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // SIMULATING THE 2.5 MILLION DATABASE LOOKUP
  useEffect(() => {
    // In production, this fetch() would hit your Philly 100k Database
    const timer = setTimeout(() => {
      setBusiness({
        id: id,
        name: id?.replace(/-/g, ' ').toUpperCase() || "PHILLY ENTERPRISE",
        address: "1230 Market St, Philadelphia, PA",
        category: "Professional Services",
        isLegacy: id?.includes('heritage'), // If URL has 'heritage', it turns Gold
        isClaimed: false
      });
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [id]);

  if (loading) return <div style={styles.loading}>SCANNING KINOS INDEX...</div>;

  const themeColor = business.isLegacy ? '#facc15' : '#000';
  const bgColor = business.isLegacy ? '#000' : '#fff';

  return (
    <div style={{ ...styles.page, backgroundColor: bgColor }}>
      <div style={{ 
        ...styles.profileCard, 
        borderColor: themeColor,
        backgroundColor: business.isLegacy ? '#111' : '#fff'
      }}>
        
        {/* STATUS BADGE */}
        <div style={{ ...styles.badge, backgroundColor: themeColor, color: business.isLegacy ? '#000' : '#fff' }}>
          {business.isLegacy ? "HERITAGE FOUNDER 2.0" : "PUBLIC RECORD"}
        </div>

        <h1 style={{ ...styles.title, color: business.isLegacy ? '#facc15' : '#000' }}>
          {business.name}
        </h1>
        
        <p style={{ color: business.isLegacy ? '#888' : '#666', fontSize: '12px' }}>
          {business.category} • {business.address}
        </p>

        <hr style={{ borderColor: business.isLegacy ? '#333' : '#eee', margin: '20px 0' }} />

        {/* THE "GHOST" CONTENT - LOCKED UNTIL CLAIMED */}
        <div style={styles.lockBox}>
          <p style={{ color: business.isLegacy ? '#facc15' : '#000', fontWeight: 'bold' }}>
            {business.isLegacy ? "LEGACY IDENTITY DETECTED" : "UNCLAIMED PUBLIC NODE"}
          </p>
          <p style={{ fontSize: '11px', color: '#888' }}>
            Full biometric data and contact channels are locked until the owner authenticates via KINOS.
          </p>
        </div>

        {/* THE "CLAIM" ACTION */}
        <Link 
          to={`/kinos-intake?type=${business.isLegacy ? 'legacy-2.0' : 'registry'}&target=${business.id}`}
          style={{ ...styles.claimBtn, backgroundColor: themeColor, color: business.isLegacy ? '#000' : '#fff' }}
        >
          {business.isLegacy ? "TRANSFER & CLAIM THIS LEGACY" : "CLAIM THIS BUSINESS PROFILE"}
        </Link>

        {business.isLegacy && (
          <p style={styles.heritageNote}>
            * This listing is part of the original Tri-State Minority Yellow Pages Archive.
          </p>
        )}
      </div>
    </div>
  );
}

const styles = {
  page: { minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' },
  profileCard: { 
    maxWidth: '500px', width: '100%', border: '4px solid', padding: '40px', 
    boxShadow: '20px 20px 0px rgba(0,0,0,0.1)', position: 'relative' as 'relative'
  },
  loading: { height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', letterSpacing: '2px' },
  badge: { 
    position: 'absolute' as 'absolute', top: '-15px', left: '20px', 
    padding: '5px 15px', fontSize: '10px', fontWeight: '900' 
  },
  title: { fontSize: '28px', fontWeight: '900', margin: '10px 0', letterSpacing: '-1px' },
  lockBox: { padding: '20px', backgroundColor: 'rgba(128,128,128,0.05)', borderRadius: '4px', marginBottom: '30px' },
  claimBtn: { 
    display: 'block', textAlign: 'center' as 'center', padding: '18px', 
    textDecoration: 'none', fontWeight: '900', letterSpacing: '1px', fontSize: '13px' 
  },
  heritageNote: { color: '#facc15', fontSize: '9px', textAlign: 'center' as 'center', marginTop: '15px', fontStyle: 'italic' }
};