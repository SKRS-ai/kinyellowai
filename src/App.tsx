import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Pages
import KinHome from './pages/KinHome'; 
import SearchResults from './pages/SearchResults'; // Points to your live Supabase search logic
import JurisdictionPortal from './pages/JurisdictionPortal'; 
import PersonaDetail from './pages/PersonaDetail'; // CRITICAL: Added missing import for detail view

// Components
import RealAIIDWidget from './components/RealAIIDWidget';

export default function App() {
  return (
    <Router>
      <div style={styles.container}>
        {/* TOP NAVIGATION BAR */}
        <nav style={styles.nav}>
          <div style={styles.navContent}>
            <Link to="/" style={styles.logo}>
              KIN<span style={{ color: '#facc15' }}>YELLOW</span> WORLDWIDE
            </Link>
            <div style={styles.navLinks}>
              <Link to="/" style={styles.navLink}>KIN INDEX</Link>
              <Link to="/tri-state" style={styles.navLink}>TRI-STATE 2.0 PORTAL</Link>
            </div>
          </div>
        </nav>

        {/* MAIN CONTENT AREA */}
        <main style={styles.main}>
          <Routes>
            {/* Landing Page */}
            <Route path="/" element={<KinHome />} />
            
            {/* Live Search Results - Now connected to Supabase */}
            <Route path="/search" element={<SearchResults />} />

            {/* Sovereign Record Detail View */}
            {/* When you click a Sony record, this loads the specific data by ID */}
            <Route path="/business/:id" element={<PersonaDetail />} />

            {/* Dynamic Jurisdiction Routes (States/Nations) */}
            <Route path="/directory/:locationId" element={<JurisdictionPortal />} />

            {/* Catch-all for 404s - Moved to the bottom where it belongs */}
            <Route path="*" element={
              <div style={{padding: '100px', textAlign: 'center', fontWeight: '900'}}>
                REGISTRY ERROR: PAGE NOT FOUND
              </div>
            } />
          </Routes>
        </main>

        {/* GLOBAL REALAIID INTEGRATION */}
        <div style={styles.widgetWrapper}>
          <RealAIIDWidget />
        </div>

        {/* FOOTER */}
        <footer style={styles.footer}>
          TRI-STATE MINORITY YELLOW PAGES 2.0: TRANSFER YOUR LEGACY BOOK OF BUSINESS TO THE DIGITAL INDEX
        </footer>
      </div>
    </Router>
  );
}

const styles = {
  container: { 
    display: 'flex', 
    flexDirection: 'column' as const, 
    minHeight: '100vh', 
    backgroundColor: '#fff' 
  },
  nav: { 
    background: '#000', 
    padding: '15px 30px', 
    borderBottom: '3px solid #facc15', 
    position: 'sticky' as const, 
    top: 0, 
    zIndex: 1000 
  },
  navContent: { 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    maxWidth: '1200px', 
    margin: '0 auto' 
  },
  logo: { 
    color: '#fff', 
    textDecoration: 'none', 
    fontWeight: '900', 
    fontSize: '20px', 
    letterSpacing: '1px' 
  },
  navLinks: { 
    display: 'flex', 
    gap: '20px' 
  },
  navLink: { 
    color: '#facc15', 
    textDecoration: 'none', 
    fontSize: '12px', 
    fontWeight: 'bold', 
    textTransform: 'uppercase' as const 
  },
  main: { 
    flex: 1, 
    width: '100%', 
    display: 'flex', 
    flexDirection: 'column' as const 
  },
  widgetWrapper: {
    position: 'fixed' as const,
    bottom: '70px', 
    right: '25px',
    zIndex: 9999
  },
  footer: { 
    background: '#facc15', 
    color: '#000', 
    padding: '15px', 
    textAlign: 'center' as const, 
    fontWeight: '900', 
    fontSize: '11px', 
    textTransform: 'uppercase' as const 
  }
};