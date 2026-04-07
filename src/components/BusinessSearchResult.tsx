import React from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

// 1. DEFINE DATA STRUCTURE FOR THE FOUNDATION
interface BusinessData {
  id: string;
  name: string;
  verified: boolean;
  location: { lat: number; lng: number };
  metadata: {
    description: string;
    industry: string;
    address: string;
  };
}

const containerStyle = {
  width: '100%',
  height: '200px'
};

export default function BusinessSearchResult({ businessData }: { businessData: BusinessData }) {
  // Load Google Maps API (Requires your API Key)
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY"
  });

  return (
    <div style={styles.resultCard}>
      {/* LEFT SIDE: GOOGLE MAPS INTELLIGENCE */}
      <div style={styles.mapSection}>
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={businessData.location}
            zoom={14}
            options={{ disableDefaultUI: true }} // Keep it clean for the directory look
          >
            <Marker position={businessData.location} />
          </GoogleMap>
        ) : (
          <div style={styles.mapPlaceholder}>LOADING GEOSPATIAL DATA...</div>
        )}
      </div>

      {/* RIGHT SIDE: BUSINESS IDENTITY & METADATA */}
      <div style={styles.infoSection}>
        <div style={styles.header}>
          <h2 style={styles.businessName}>
            {businessData.name.toUpperCase()} 
            <span style={{ marginLeft: '10px' }}>{businessData.verified ? '✅' : '⚪'}</span>
          </h2>
          <span style={styles.industryTag}>{businessData.metadata.industry}</span>
        </div>

        <p style={styles.description}>{businessData.metadata.description}</p>
        <p style={styles.address}>{businessData.metadata.address}</p>
        
        {/* THE CLAIM PROTOCOL */}
        {!businessData.verified ? (
          <button 
            onClick={() => alert(`Initiating Identity Anchor for ${businessData.name}`)}
            style={styles.claimBtn}
          >
            CLAIM BUSINESS IDENTITY & OPERATE PROFILE
          </button>
        ) : (
          <button style={styles.viewBtn}>VIEW SOVEREIGN PROFILE</button>
        )}
      </div>
    </div>
  );
}

// 2. KINYELLOW SYSTEM STYLES
const styles = {
  resultCard: {
    display: 'flex',
    border: '4px solid #000',
    marginBottom: '30px',
    backgroundColor: '#fff',
    boxShadow: '10px 10px 0px #000',
    overflow: 'hidden' as 'hidden',
    transition: '0.2s ease-in-out',
  },
  mapSection: {
    flex: '1',
    borderRight: '4px solid #000',
    backgroundColor: '#eee',
    minHeight: '200px'
  },
  mapPlaceholder: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '900',
    fontSize: '10px'
  },
  infoSection: {
    flex: '2',
    padding: '25px',
    display: 'flex',
    flexDirection: 'column' as 'column',
    justifyContent: 'space-between'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  businessName: {
    margin: 0,
    fontSize: '22px',
    fontWeight: '900',
    letterSpacing: '1px'
  },
  industryTag: {
    backgroundColor: '#facc15',
    padding: '4px 8px',
    fontSize: '10px',
    fontWeight: '900',
    border: '2px solid #000'
  },
  description: {
    fontSize: '14px',
    lineHeight: '1.4',
    margin: '15px 0',
    color: '#333'
  },
  address: {
    fontSize: '11px',
    fontWeight: '700',
    color: '#666',
    textTransform: 'uppercase' as 'uppercase'
  },
  claimBtn: {
    marginTop: '15px',
    padding: '12px',
    backgroundColor: '#facc15',
    color: '#000',
    border: '3px solid #000',
    fontWeight: '900',
    cursor: 'pointer',
    letterSpacing: '1px',
    fontSize: '12px'
  },
  viewBtn: {
    marginTop: '15px',
    padding: '12px',
    backgroundColor: '#000',
    color: '#fff',
    border: 'none',
    fontWeight: '900',
    cursor: 'pointer',
    letterSpacing: '1px',
    fontSize: '12px'
  }
};