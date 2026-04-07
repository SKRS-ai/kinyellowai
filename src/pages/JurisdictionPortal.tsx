import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

/** * PATH FIX: Pointing to the new 'lib' directory.
 * Standardized to remove .ts extension for cleaner Vite resolution.
 */
import { supabase } from '../lib/supabaseClient'; 
// @ts-ignore
import RealAIIDWidget from '../components/RealAIIDWidget.tsx'; 

const JurisdictionPortal = () => {
  const { locationId } = useParams<{ locationId: string }>();
  const navigate = useNavigate();
  const [businesses, setBusinesses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  // Global Search Handler for the Header
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  useEffect(() => {
    const fetchPortalData = async () => {
      if (!locationId) return;
      setLoading(true);
      
      console.log(`🌐 PORTAL ENGINE: Syncing with ${locationId} index...`);

      try {
        /**
         * LOGIC CORRECTION: 
         * We search 'city' or 'jurisdiction' columns instead of 'name' 
         * to find businesses located IN this gateway.
         */
        const { data: businessData, error } = await supabase
          .from('businesses')
          .select('*')
          .or(`city.ilike.%${locationId}%,jurisdiction.ilike.%${locationId}%`) 
          .limit(20);

        if (error) throw error;

        console.log(`✅ PORTAL DATA: Found ${businessData?.length || 0} entities for ${locationId}`);
        setBusinesses(businessData || []);
      } catch (err) {
        console.error("❌ Portal fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPortalData();
  }, [locationId]);

  if (loading) return (
    <div style={styles.loader}>
      SYNCING WITH KINYELLOW GLOBAL INDEX...
    </div>
  );

  return (
    <div style={styles.container}>
      
      {/* BRANDED SEARCH HEADER */}
      <div style={styles.searchHeader}>
        <form onSubmit={handleSearch} style={styles.searchForm}>
          <input 
            type="text" 
            placeholder={`SEARCH THE ${locationId?.toUpperCase().replace('-', ' ')} INDEX...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={styles.searchInput}
          />
          <button type="submit" style={styles.searchBtn}>SEARCH</button>
        </form>
      </div>

      <div style={styles.contentWrapper}>
        <header style={styles.header}>
          <h1 style={styles.title}>
            {locationId?.replace('-', ' ')} <span style={{ color: '#facc15' }}>Gateway</span>
          </h1>
          <p style={styles.subtitle}>
            OFFICIAL KINYELLOW WORLDWIDE LEGACY DIRECTORY // GLOBAL IDENTITY HUB
          </p>
        </header>

        {/* IDENTITY PROTECTION ADVERTISEMENT */}
        <section style={styles.adSection}>
          <h2 style={{ margin: '0 0 5px 0', fontSize: '18px', fontWeight: '900' }}>
            REGISTER YOUR DIGITAL NEWBORN LIKENESS ANCHOR™
          </h2>
          <p style={{ margin: 0, fontSize: '14px' }}>
            Establish "First-Right" identity and secure your legacy against synthetic replication.
          </p>
          <button style={styles.enrollBtn}>ENROLL IN REALAIID</button>
        </section>

        <main style={styles.mainGrid}>
          {/* BUSINESS LISTINGS */}
          <div className="business-feed">
            <h2 style={styles.sectionTitle}>Local Verified Entities</h2>
            <div style={{ marginTop: '20px' }}>
              {businesses.length > 0 ? (
                businesses.map((biz: any) => (
                  <div key={biz.id} style={styles.bizCard}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <h3 style={{ margin: '0 0 5px 0', fontWeight: '900', fontSize: '1.2rem' }}>
                        {biz.name.toUpperCase()}
                      </h3>
                      <span style={styles.tag}>VERIFIED</span>
                    </div>
                    <p style={{ fontSize: '13px', color: '#555', margin: '10px 0' }}>
                      {biz.description || "Official registry entry for this sovereign entity."}
                    </p>
                    <div style={{ borderTop: '1px solid #eee', paddingTop: '10px', marginTop: '10px', fontSize: '11px', color: '#999' }}>
                      ID: {biz.id.toString().slice(0,12)} // CATEGORY: {biz.category?.toUpperCase() || 'GENERAL'}
                    </div>
                  </div>
                ))
              ) : (
                <div style={styles.emptyState}>
                  <p>No verified listings found in the {locationId?.replace('-', ' ')} index.</p>
                  <button style={styles.addBtn}>ADD YOUR BUSINESS CARD</button>
                </div>
              )}
            </div>
          </div>

          {/* INTEGRITY SIDEBAR */}
          <div className="news-sidebar">
            <h2 style={styles.sectionTitle}>Integrity Index</h2>
            <div style={styles.sidebarBox}>
              <p style={{ fontWeight: 'bold', color: '#b8860b', marginBottom: '10px' }}>[LIVE DATA FEED]</p>
              <p style={{ fontSize: '13px', color: '#444', lineHeight: '1.5' }}>
                Real-time news feed for {locationId?.replace('-', ' ')} is synchronizing with the Global Index...
              </p>
            </div>
          </div>
        </main>
      </div>

      {/* Persistent Widget */}
      <div style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: 1000 }}>
        <RealAIIDWidget />
      </div>
    </div>
  );
};

const styles = {
  container: { minHeight: '100vh', backgroundColor: '#fff', color: '#000', fontFamily: 'Inter, sans-serif' },
  loader: { backgroundColor: '#fff', color: '#000', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' },
  searchHeader: { background: '#facc15', padding: '15px 0', display: 'flex', justifyContent: 'center', borderBottom: '2px solid #000' },
  searchForm: { display: 'flex', width: '90%', maxWidth: '800px', gap: '10px' },
  searchInput: { flex: 1, padding: '12px 20px', border: '2px solid #000', fontWeight: 'bold', outline: 'none' },
  searchBtn: { background: '#000', color: '#facc15', border: 'none', padding: '0 25px', fontWeight: '900', cursor: 'pointer' },
  contentWrapper: { padding: '2rem', maxWidth: '1200px', margin: '0 auto' },
  header: { marginBottom: '2rem', borderBottom: '3px solid #facc15', paddingBottom: '1rem' },
  title: { fontSize: '2.5rem', fontWeight: '900', textTransform: 'uppercase' as const, margin: 0 },
  subtitle: { letterSpacing: '1px', fontSize: '12px', fontWeight: 'bold', color: '#666' },
  adSection: { background: '#fff', border: '3px solid #facc15', padding: '25px', textAlign: 'center' as const, marginBottom: '40px', boxShadow: '10px 10px 0px #facc15' },
  enrollBtn: { marginTop: '15px', padding: '10px 30px', background: '#000', color: '#facc15', border: 'none', fontWeight: '900', cursor: 'pointer' },
  mainGrid: { display: 'grid', gridTemplateColumns: '1fr 350px', gap: '50px' },
  sectionTitle: { fontSize: '16px', textTransform: 'uppercase' as const, borderLeft: '8px solid #facc15', paddingLeft: '15px', fontWeight: '900' },
  bizCard: { border: '2px solid #eee', padding: '20px', marginBottom: '15px', backgroundColor: '#f9f9f9', borderLeft: '5px solid #000' },
  tag: { fontSize: '10px', background: '#facc15', padding: '2px 8px', fontWeight: 'bold' },
  emptyState: { padding: '60px 20px', border: '2px dashed #ccc', textAlign: 'center' as const, color: '#999' },
  addBtn: { marginTop: '15px', padding: '8px 20px', background: '#fff', border: '2px solid #000', fontWeight: 'bold', cursor: 'pointer' },
  sidebarBox: { marginTop: '20px', padding: '20px', backgroundColor: '#f9f9f9', border: '1px solid #eee' },
};

export default JurisdictionPortal;