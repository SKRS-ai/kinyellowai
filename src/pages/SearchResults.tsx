import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { searchGlobalIndex } from '../lib/supabaseClient'; 

// CRITICAL FIX: Renamed function to SearchResults to match your App.tsx routing
export default function SearchResults() {
  const location = useLocation();
  const [results, setResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  
  // Extracts search query from URL: e.g., /search?q=sony
  const query = new URLSearchParams(location.search).get('q') || "";

  useEffect(() => {
    const fetchRegistryData = async () => {
      if (!query.trim()) return;
      
      setIsLoading(true);
      try {
        const freshData = await searchGlobalIndex(query);
        
        // DIAGNOSTIC LOG: Confirms data flow from Supabase
        if (freshData && freshData.length > 0) {
          console.log("🔍 KINYELLOW SCHEMA CHECK:", Object.keys(freshData[0]));
          console.log("✅ LIVE DATA RETRIEVED:", freshData);
        }
        
        setResults(freshData || []);
      } catch (error) {
        console.error("❌ KINYELLOW REGISTRY ERROR:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchRegistryData();
  }, [query]);

  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh', color: '#000', padding: '40px 20px', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <Link to="/" style={{ color: '#000', fontWeight: '900', textDecoration: 'none', fontSize: '12px' }}>
          ← BACK TO HUB
        </Link>
        
        <h2 style={{ marginTop: '30px', borderLeft: '10px solid #facc15', paddingLeft: '15px', textTransform: 'uppercase', letterSpacing: '1px' }}>
          REGISTRY RESULTS: "{query.toUpperCase()}" ({results.length})
        </h2>

        {isLoading ? (
          <div style={{ marginTop: '100px', textAlign: 'center' }}>
            <p style={{ fontWeight: 'bold', letterSpacing: '2px' }}>DECRYPTING MASTER REGISTRY...</p>
          </div>
        ) : results.length > 0 ? (
          results.map((item: any) => (
            <Link 
              key={item.id} 
              to={`/business/${item.id}`} 
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div 
                style={{ 
                  border: '3px solid #000', 
                  padding: '25px', 
                  margin: '25px 0', 
                  boxShadow: '8px 8px 0px #facc15', 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  backgroundColor: '#fff',
                  transition: '0.2s ease-in-out'
                }}
              >
                <div>
                  <h3 style={{ margin: 0, fontSize: '1.5rem', fontWeight: '900' }}>
                    {(item.name || "UNIDENTIFIED ENTITY").toUpperCase()} ✅
                  </h3>
                  
                  <p style={{ margin: '8px 0', fontSize: '11px', fontWeight: 'bold', color: '#666' }}>
                    {(item.entity_type || "CORPORATE ENTITY").toUpperCase()} // {(item.jurisdiction || "GLOBAL").toUpperCase()}
                  </p>
                  
                  <p style={{ fontSize: '15px', marginTop: '12px', maxWidth: '600px', lineHeight: '1.5' }}>
                    {item.description || "Legacy record: Official documentation pending for this registry update."}
                  </p>
                </div>

                <div style={{ textAlign: 'right', minWidth: '120px' }}>
                  <span style={{ fontSize: '9px', fontWeight: '900', display: 'block', marginBottom: '5px' }}>
                    HALO STATUS
                  </span>
                  <span style={{ 
                    color: '#facc15', 
                    backgroundColor: '#000', 
                    padding: '4px 12px', 
                    fontSize: '11px', 
                    fontWeight: '900',
                    display: 'inline-block'
                  }}>
                    VERIFIED
                  </span>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div style={{ marginTop: '100px', textAlign: 'center', border: '5px solid #000', padding: '50px' }}>
            <h2 style={{ fontWeight: '900' }}>NO RECORDS FOUND</h2>
            <p>The entity <strong>"{query.toUpperCase()}"</strong> is not currently indexed in the KinYellow Registry.</p>
            <Link to="/" style={{ color: '#000', fontWeight: 'bold', textDecoration: 'underline' }}>Return to Directory</Link>
          </div>
        )}
      </div>
    </div>
  );
}