import React, { useState, useEffect, useMemo } from 'react';
import KinMap from './Map';

interface ResultItem {
  title: string;
  url: string;
  snippet: string;
  source: 'DIRECTORY' | 'WORLDWIDE';
  location?: string;
  lat?: number;
  lng?: number;
}

interface ResultsPageProps {
  results: ResultItem[];
  query: string;
  isLoading: boolean;
}

const ResultsPage: React.FC<ResultsPageProps> = ({ results, query, isLoading }) => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);
  // Default to Philly, but will be overwritten by Browser GPS
  const [userLocation, setUserLocation] = useState({ lat: 39.9526, lng: -75.1652 });

  // 1. GLOBAL GPS LOCK: Detects user location (USA, Canada, etc.)
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
      }, (error) => console.log("Satellite Lock Denied. Use default index center."));
    }
  }, []);

  // 2. GOLD PIN GENERATOR: Ensures every result has a physical location on the map
  const processedResults = useMemo(() => {
    return results.map((item, index) => {
      // If result is missing lat/lng, we project it onto the map near the user
      if (!item.lat || !item.lng) {
        return {
          ...item,
          // Mathematical "scatter" to prevent pins from stacking directly on top of each other
          lat: userLocation.lat + (Math.sin(index) * 0.015), 
          lng: userLocation.lng + (Math.cos(index) * 0.015),
        };
      }
      return item;
    });
  }, [results, userLocation]);

  // 3. AUTO-ZOOM CENTER: Keeps the map focused on the pins
  const mapCenter = useMemo(() => {
    const validNodes = processedResults.filter(r => r.lat && r.lng);
    if (validNodes.length === 0) return userLocation; 
    
    const latSum = validNodes.reduce((acc, curr) => acc + (curr.lat || 0), 0);
    const lngSum = validNodes.reduce((acc, curr) => acc + (curr.lng || 0), 0);
    
    return {
      lat: latSum / validNodes.length,
      lng: lngSum / validNodes.length
    };
  }, [processedResults, userLocation]);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isLoading) {
    return (
      <div style={loaderContainer}>
        <div style={spinner} />
        <p style={loadingText}>CONSULTING SOVEREIGN INDEX...</p>
      </div>
    );
  }

  return (
    <div style={pageWrapper}>
      {/* COLUMN 1: IDENTITY COMMANDS */}
      <aside style={sidebar}>
        <h3 style={filterHeading}>GLOBAL HERITAGE</h3>
        <div style={filterGroup}>
          {['Indigenous', 'African Diaspora', 'Asian/Pacific', 'Latiné', 'Middle Eastern', 'European'].map(label => (
            <label key={label} style={checkboxLabel}>
              <input type="checkbox" style={checkboxStyle} /> {label}
            </label>
          ))}
        </div>

        <h3 style={filterHeading}>IDENTITY & GENDER</h3>
        <div style={filterGroup}>
          {['Non-Binary', 'Two-Spirit', 'Trans-Fluid', 'Female', 'Male', 'Self-Identified'].map(label => (
            <label key={label} style={checkboxLabel}>
              <input type="checkbox" style={checkboxStyle} /> {label}
            </label>
          ))}
        </div>

        <h3 style={filterHeading}>VERIFICATION</h3>
        <div style={filterGroup}>
          <label style={checkboxLabel}><input type="checkbox" style={checkboxStyle} /> RealAIID Verified</label>
          <label style={checkboxLabel}><input type="checkbox" style={checkboxStyle} /> KinOS Registered</label>
          <label style={checkboxLabel}><input type="checkbox" style={checkboxStyle} /> Biometric Hashed</label>
        </div>
      </aside>

      {/* COLUMN 2: MAIN FEED */}
      <main style={mainFeed}>
        <div style={statsRow}>
          Scanning <span style={{color: '#000', fontWeight: 900}}>195 Countries</span> for <span style={queryHighlight}>"{query}"</span>
        </div>

        {processedResults.length > 0 ? (
          processedResults.map((item, index) => (
            <div key={index} style={legacyCard}>
              <div style={cardHeader}>
                <span style={item.source === 'DIRECTORY' ? dirBadge : worldBadge}>
                  {item.source}
                </span>
                <a href={item.url} target="_blank" rel="noreferrer" style={cardTitle}>
                  {item.title}
                </a>
              </div>
              <p style={cardUrl}>{item.url}</p>
              <p style={cardSnippet}>{item.snippet}</p>
              <div style={cardFooter}>
                <button style={actionBtn}>VIEW FULL LEGACY</button>
                <button style={outlineBtn}>SECURE CONTACT</button>
              </div>
            </div>
          ))
        ) : (
          <div style={noResults}>
            <h3 style={{textTransform: 'uppercase'}}>Global Index Empty</h3>
            <p style={{color: '#666'}}>Scanning satellite nodes...</p>
          </div>
        )}
      </main>

      {/* COLUMN 3: GLOBAL COMMAND CENTER (MAP) */}
      {isDesktop && (
        <section style={mapSidebar}>
          <div style={mapStickyContainer}>
            <div style={mapHeader}>
              <span style={pulseDot} /> COMMAND CENTER: GPS ACTIVE
            </div>
            
            <div style={{ height: '550px', width: '100%', position: 'relative' }}>
               <KinMap results={processedResults} center={mapCenter} />
            </div>

            <div style={mapFooter}>
              ACTIVE NODES (GLOBAL INDEX): {processedResults.length}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

/* --- MODERN INDUSTRIAL STYLES --- */
const pageWrapper: React.CSSProperties = { display: 'flex', backgroundColor: '#FFF', minHeight: '100vh', padding: '40px', gap: '40px', fontFamily: 'Inter, sans-serif' };
const sidebar: React.CSSProperties = { width: '220px', flexShrink: 0 };
const mainFeed: React.CSSProperties = { flex: 2, maxWidth: '800px' };
const mapSidebar: React.CSSProperties = { flex: 1.2, minWidth: '420px', position: 'relative' };
const mapStickyContainer: React.CSSProperties = { position: 'sticky', top: '40px', border: '2px solid #000', backgroundColor: '#000', boxShadow: '12px 12px 0 #FFD700', overflow: 'hidden' };
const mapHeader: React.CSSProperties = { backgroundColor: '#000', color: '#FFD700', padding: '12px 15px', fontSize: '11px', fontWeight: '900', display: 'flex', alignItems: 'center', gap: '10px', letterSpacing: '2px' };
const mapFooter: React.CSSProperties = { backgroundColor: '#000', color: '#AAA', padding: '12px', fontSize: '10px', fontWeight: '700', textAlign: 'center', borderTop: '1px solid #333' };
const pulseDot: React.CSSProperties = { width: '8px', height: '8px', backgroundColor: '#00FF00', borderRadius: '50%', boxShadow: '0 0 8px #00FF00' };
const checkboxStyle = { accentColor: '#000' };
const filterHeading: React.CSSProperties = { fontSize: '12px', fontWeight: '900', color: '#000', marginBottom: '15px', marginTop: '30px', borderBottom: '3px solid #FFD700', paddingBottom: '8px', textTransform: 'uppercase' };
const filterGroup: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: '12px' };
const checkboxLabel: React.CSSProperties = { fontSize: '12px', fontWeight: '600', color: '#555', display: 'flex', alignItems: 'center', gap: '10px' };
const statsRow: React.CSSProperties = { fontSize: '14px', color: '#888', marginBottom: '30px' };
const queryHighlight: React.CSSProperties = { color: '#000', fontWeight: '900', fontStyle: 'italic' };
const legacyCard: React.CSSProperties = { backgroundColor: '#FFF', border: '1px solid #000', padding: '30px', marginBottom: '25px', boxShadow: '6px 6px 0 rgba(0,0,0,0.05)' };
const cardHeader: React.CSSProperties = { display: 'flex', alignItems: 'flex-start', gap: '15px', marginBottom: '12px' };
const cardTitle: React.CSSProperties = { fontSize: '20px', fontWeight: '900', color: '#000', textDecoration: 'none' };
const dirBadge: React.CSSProperties = { backgroundColor: '#FFD700', color: '#000', fontSize: '10px', fontWeight: '900', padding: '4px 10px' };
const worldBadge: React.CSSProperties = { backgroundColor: '#000', color: '#FFD700', fontSize: '10px', fontWeight: '900', padding: '4px 10px' };
const cardUrl: React.CSSProperties = { color: '#006621', fontSize: '12px', marginBottom: '12px' };
const cardSnippet: React.CSSProperties = { color: '#333', fontSize: '15px', lineHeight: '1.7', marginBottom: '25px' };
const cardFooter: React.CSSProperties = { display: 'flex', gap: '15px' };
const actionBtn: React.CSSProperties = { backgroundColor: '#000', color: '#FFF', border: 'none', padding: '12px 24px', fontSize: '11px', fontWeight: '900', cursor: 'pointer' };
const outlineBtn: React.CSSProperties = { backgroundColor: 'transparent', border: '2px solid #000', color: '#000', padding: '10px 22px', fontSize: '11px', fontWeight: '900', cursor: 'pointer' };
const loaderContainer: React.CSSProperties = { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '80vh' };
const loadingText: React.CSSProperties = { marginTop: '25px', fontWeight: '900', letterSpacing: '3px', color: '#000', fontSize: '12px' };
const spinner: React.CSSProperties = { width: '50px', height: '50px', border: '5px solid #EEE', borderTop: '5px solid #FFD700', borderRadius: '50%' };
const noResults: React.CSSProperties = { textAlign: 'center', padding: '80px 40px', backgroundColor: '#FFF', border: '2px solid #000' };

export default ResultsPage;