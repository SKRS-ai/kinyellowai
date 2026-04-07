import React, { useEffect, useState, useCallback } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient'; 

export default function SearchResults() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const rawUrlQuery = queryParams.get('q') || "";

  // 1. URL SANITIZER
  const cleanQuery = decodeURIComponent(rawUrlQuery)
    .replace(/%/g, "")
    .trim();

  const [results, setResults] = useState<any[]>(location.state?.results || []);
  const [loading, setLoading] = useState(false);

  // 2. MASTER FETCH FUNCTION
  const fetchResults = useCallback(async () => {
    if (!cleanQuery) return;
    
    setLoading(true);
    console.log(`SCANNING MASTER REGISTRY FOR: ${cleanQuery}`);

    // Queries Name, Category, and Description for matches
    const { data, error } = await supabase
      .from('businesses')
      .select('*')
      .or(`name.ilike.%${cleanQuery}%,category.ilike.%${cleanQuery}%,description.ilike.%${cleanQuery}%`);

    if (error) {
      console.error("REGISTRY FETCH ERROR:", error.message);
    } else {
      console.log("RECORDS MANIFESTED:", data); 
      setResults(data || []);
    }
    setLoading(false);
  }, [cleanQuery]);

  // 3. TRIGGER: Runs on query change
  useEffect(() => {
    fetchResults();
  }, [fetchResults]);

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <Link to="/" style={styles.logo}>
          KIN<span style={{ color: '#facc15' }}>YELLOW</span>
        </Link>
        <div style={styles.queryInfo}>
          {loading ? "SCANNING MASTER REGISTRY..." : `MASTER INDEX SEARCH: "${cleanQuery.toUpperCase()}"`}
          {!loading && results.length > 0 && (
            <span style={styles.countBadge}>
              {results.length} SOVEREIGN RECORDS FOUND
            </span>
          )}
        </div>
      </header>

      <main style={styles.main}>
        {results.length > 0 ? (
          <div style={styles.grid}>
            {results.map((item: any, index: number) => {
              const displayName = item.name || item.business_name || "UNNAMED ENTITY";
              
              // 4. JURISDICTION FALLBACK LOGIC
              const city = item.city || "";
              const state = item.state_province || "";
              const country = item.country || "";
              const jurisdiction = item.jurisdiction || `${city}${city && state ? ', ' : ''}${state}${state && country ? ' | ' : ''}${country}`;
              const finalLocation = jurisdiction.trim() || "GLOBAL INDEX";

              // 5. TRI-STATE 2.0 DETECTION (NY, NJ, PA)
              const isTriState = /NY|NJ|PA|New York|New Jersey|Pennsylvania/i.test(state || jurisdiction);

              return (
                <div key={item.id || index} style={{
                  ...styles.card,
                  border: isTriState ? '4px double #facc15' : '1px solid #000',
                  boxShadow: isTriState ? '8px 8px 0px #000' : 'none'
                }}>
                  <div style={styles.badge}>
                    {isTriState ? "TRI-STATE 2.0 LEGACY" : "GLOBAL REGISTRY"}
                  </div>
                  
                  <h3 style={styles.entityName}>{displayName}</h3>
                  
                  <p style={styles.details}>
                    {finalLocation.toUpperCase()} // {item.category || "GENERAL"}
                  </p>
                  
                  <p style={styles.snippet}>
                    {item.description || "Verified entry in the KINYELLOW Master Registry."}
                  </p>
                  
                  <Link to={`/profile/${item.id}`} style={{ textDecoration: 'none' }}>
                    <button style={{
                      ...styles.actionBtn,
                      backgroundColor: isTriState ? '#facc15' : '#000',
                      color: isTriState ? '#000' : '#fff'
                    }}>
                      {isTriState ? "OPEN SOVEREIGN RECORD" : "CLAIM PROFILE"}
                    </button>
                  </Link>
                </div>
              );
            })}
          </div>
        ) : (
          !loading && (
            <div style={styles.noResults}>
              <h2 style={styles.noResultsTitle}>NO RECORDS FOUND</h2>
              <p style={styles.noResultsText}>THE SEARCHED ENTITY IS NOT YET ENROLLED IN THE KINYELLOW MASTER REGISTRY.</p>
              <Link to="/" style={styles.backLink}>RETURN TO HUB</Link>
            </div>
          )
        )}
      </main>
    </div>
  );
}

const styles = {
  container: { backgroundColor: '#fff', minHeight: '100vh', fontFamily: 'sans-serif' },
  header: { padding: '30px 40px', borderBottom: '2px solid #000', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  logo: { fontWeight: '900', fontSize: '24px', textDecoration: 'none', color: '#000', letterSpacing: '2px' },
  queryInfo: { fontWeight: '900', fontSize: '12px', letterSpacing: '1px' },
  countBadge: { marginLeft: '10px', color: '#facc15', background: '#000', padding: '4px 10px', borderRadius: '2px' },
  main: { maxWidth: '1200px', margin: '40px auto', padding: '0 20px' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '30px' },
  card: { padding: '30px', backgroundColor: '#fff', position: 'relative' as 'relative', display: 'flex', flexDirection: 'column' as 'column', minHeight: '300px' },
  badge: { fontSize: '10px', fontWeight: '900', marginBottom: '15px', letterSpacing: '1px', textTransform: 'uppercase' as 'uppercase' },
  entityName: { margin: '0 0 10px 0', fontSize: '22px', fontWeight: '900', textTransform: 'uppercase' as 'uppercase', lineHeight: '1.1' },
  details: { fontSize: '10px', fontWeight: '900', color: '#666', marginBottom: '20px', textTransform: 'uppercase' as 'uppercase' },
  snippet: { fontSize: '14px', lineHeight: '1.6', marginBottom: 'auto', color: '#000' },
  actionBtn: { width: '100%', padding: '15px', border: 'none', fontWeight: '900', cursor: 'pointer', fontSize: '11px', letterSpacing: '2px', marginTop: '20px' },
  noResults: { textAlign: 'center' as 'center', marginTop: '120px', color: '#000' },
  noResultsTitle: { fontSize: '3.5rem', letterSpacing: '5px', fontWeight: '900' },
  noResultsText: { letterSpacing: '2px', fontWeight: 'bold' },
  backLink: { display: 'inline-block', marginTop: '30px', color: '#000', fontSize: '12px', fontWeight: '900', border: '3px solid #000', padding: '12px 25px', textDecoration: 'none', letterSpacing: '2px' }
};