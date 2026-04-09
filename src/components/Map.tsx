import React, { useState, useEffect, useCallback, useRef } from 'react';
import Map, { Marker, NavigationControl, GeolocateControl, Popup, MapRef } from 'react-map-gl/maplibre'; 
import 'maplibre-gl/dist/maplibre-gl.css';

/**
 * MASTER COMMAND CENTER MAP (V2.0)
 * Visual Direction: Modern Industrial / High-Security UI
 */

interface MapProps {
  results?: any[];
  center?: { lat: number; lng: number };
}

const KinMap: React.FC<MapProps> = ({ results = [], center }) => {
  const mapRef = useRef<MapRef>(null);
  const [selectedPlace, setSelectedPlace] = useState<any>(null);
  
  // Default view centered on the United States
  const [viewState, setViewState] = useState({
    latitude: 39.8283, 
    longitude: -98.5795,
    zoom: 3,
    pitch: 45, 
    bearing: -10
  });

  // Effect 1: Smoothly pan to new coordinates if a specific center is passed (e.g., from Search)
  useEffect(() => {
    if (center?.lat && center?.lng) {
      setViewState((prev) => ({
        ...prev,
        latitude: center.lat,
        longitude: center.lng,
        zoom: 11,
      }));
    }
  }, [center]);

  // Effect 2: GLOBAL SCALING - Auto-zoom to fit all detected nodes
  useEffect(() => {
    if (results.length > 0 && mapRef.current) {
      const coords = results.filter(r => r.lat && r.lng);
      if (coords.length > 0) {
        const minLng = Math.min(...coords.map(r => r.lng));
        const minLat = Math.min(...coords.map(r => r.lat));
        const maxLng = Math.max(...coords.map(r => r.lng));
        const maxLat = Math.max(...coords.map(r => r.lat));

        mapRef.current.fitBounds(
          [[minLng, minLat], [maxLng, maxLat]],
          { padding: 60, duration: 1500 }
        );
      }
    }
  }, [results]);

  return (
    <div style={mapContainerStyle}>
      <style>{mapAnimations}</style>
      <Map
        {...viewState}
        ref={mapRef}
        onMove={evt => setViewState(evt.viewState)}
        style={{ width: '100%', height: '100%' }}
        // VERIFIED CDN URL - Fixed 'cartocp' typo to 'cartocdn'
        mapStyle="https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
        mapLibreLogo={false}
      >
        <NavigationControl position="top-right" />
        <GeolocateControl position="top-right" trackUserLocation />

        {/* Pulsing Gold Nodes for Every Business Location */}
        {results.map((item, index) => (
          item.lat && item.lng && (
            <Marker 
              key={`${item.title}-${index}`} 
              latitude={item.lat} 
              longitude={item.lng} 
              anchor="bottom"
              onClick={e => {
                e.originalEvent.stopPropagation();
                setSelectedPlace(item);
              }}
            >
              <div style={markerStyle}>
                <div style={markerPulse} />
              </div>
            </Marker>
          )
        ))}

        {/* Sovereign Info Popup on Marker Click */}
        {selectedPlace && (
          <Popup
            latitude={selectedPlace.lat}
            longitude={selectedPlace.lng}
            onClose={() => setSelectedPlace(null)}
            closeButton={false}
            anchor="top"
            offset={15}
          >
            <div style={popupContent}>
              <h3 style={popupTitle}>{selectedPlace.title}</h3>
              <p style={popupSnippet}>{selectedPlace.snippet?.substring(0, 80)}...</p>
              <div style={popupDivider} />
              <a href={selectedPlace.url} target="_blank" rel="noreferrer" style={popupLink}>
                ACCESS REGISTRY
              </a>
            </div>
          </Popup>
        )}
      </Map>
    </div>
  );
};

/* --- COMMAND CENTER UI STYLES --- */

const mapContainerStyle: React.CSSProperties = { 
  width: '100%', 
  height: '100%', 
  backgroundColor: '#000', 
  position: 'relative', 
  overflow: 'hidden', 
  border: '1px solid #333' 
};

const markerStyle: React.CSSProperties = { 
  width: '10px', 
  height: '10px', 
  backgroundColor: '#FFD700', 
  borderRadius: '50%', 
  border: '2px solid #000', 
  cursor: 'pointer', 
  position: 'relative', 
  boxShadow: '0 0 10px #FFD700' 
};

const markerPulse: React.CSSProperties = { 
  position: 'absolute', 
  top: '-150%', 
  left: '-150%', 
  width: '400%', 
  height: '400%', 
  borderRadius: '50%', 
  backgroundColor: 'rgba(255, 215, 0, 0.2)', 
  animation: 'pulseMarker 2s infinite ease-out' 
};

const popupContent: React.CSSProperties = { 
  padding: '12px', 
  maxWidth: '220px', 
  backgroundColor: '#FFF', 
  border: '2px solid #000', 
  boxShadow: '5px 5px 0 #FFD700' 
};

const popupTitle: React.CSSProperties = { 
  margin: '0 0 8px 0', 
  fontSize: '12px', 
  fontWeight: '900', 
  color: '#000', 
  textTransform: 'uppercase', 
  letterSpacing: '1px' 
};

const popupSnippet: React.CSSProperties = { 
  fontSize: '11px', 
  color: '#555', 
  lineHeight: '1.4', 
  margin: '0 0 10px 0' 
};

const popupDivider: React.CSSProperties = { 
  height: '1px', 
  backgroundColor: '#EEE', 
  margin: '10px 0' 
};

const popupLink: React.CSSProperties = { 
  fontSize: '9px', 
  fontWeight: '900', 
  color: '#FFF', 
  backgroundColor: '#000', 
  padding: '6px 12px', 
  textDecoration: 'none', 
  display: 'block', 
  textAlign: 'center' 
};

const mapAnimations = `
  @keyframes pulseMarker {
    0% { transform: scale(0.1); opacity: 0.8; }
    100% { transform: scale(1.5); opacity: 0; }
  }
  .mapboxgl-popup-content { background: transparent !important; padding: 0 !important; box-shadow: none !important; }
  .mapboxgl-popup-tip { display: none !important; }
`;

export default KinMap;