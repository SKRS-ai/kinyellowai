import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import registryData from '../data/registry_data.json';

/**
 * SOVEREIGN DASHBOARD - KINHOME
 * The primary visual hub for the KinYellow Legacy Directory.
 */
export default function KinHome() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  // FIXED: Moved logic inside the component. 
  // Cast to 'any' to bypass the TypeScript 'ImportMeta' environment error temporarily.
  const isDev = (import.meta as any).env.MODE === 'development';
  const [isAuthenticated, setIsAuthenticated] = useState(isDev); 

  // 1. DATASETS: UNIVERSAL CLASSIFICATION MATRICES
  const cultures = [
    "American / USA", "Western / North American", "Afro-Diasporic", 
    "Indigenous / First Nations", "Latin American / Hispanic", 
    "East Asian (Han, Yamato, Korean)", "South Asian (Desi)", "Southeast Asian", 
    "Middle Eastern / North African (MENA)", "European (Nordic, Slavic, Mediterranean)", 
    "Oceanic / Polynesian", "Central Asian", "Levantine", "Sub-Saharan African"
  ];

  const genders = [
    "Male", "Female", "Cisgender Man", "Cisgender Woman", 
    "Transgender Man", "Transgender Woman", "Non-Binary", "Genderqueer", 
    "Agender", "Bigender", "Genderfluid", "Two-Spirit", 
    "Hijra", "Third Gender", "Indifferent / Sovereign"
  ];

  const pronouns = [
    "He / Him / His", "She / Her / Hers", "They / Them / Theirs", 
    "Ze / Zir / Zirs", "Ey / Em / Eir", "Xe / Xem / Xyr", "Per / Per / Pers", 
    "Co / Cos", "Fae / Faer", "Sovereign (Name Only)"
  ];

  // 2. JURISDICTIONS: US STATES
  const states = [
    { name: "Alabama", icon: "🏈" }, { name: "Alaska", icon: "🏔️" }, { name: "Arizona", icon: "🌵" }, { name: "Arkansas", icon: "💎" }, { name: "California", icon: "🌉" },
    { name: "Colorado", icon: "🎿" }, { name: "Connecticut", icon: "🏛️" }, { name: "Delaware", icon: "⛵" }, { name: "Florida", icon: "🌴" }, { name: "Georgia", icon: "🍑" },
    { name: "Hawaii", icon: "🌺" }, { name: "Idaho", icon: "🥔" }, { name: "Illinois", icon: "🏙️" }, { name: "Indiana", icon: "🏁" }, { name: "Iowa", icon: "🌽" },
    { name: "Kansas", icon: "🌻" }, { name: "Kentucky", icon: "🏇" }, { name: "Louisiana", icon: "🎺" }, { name: "Maine", icon: "🦞" }, { name: "Maryland", icon: "🦀" },
    { name: "Massachusetts", icon: "📚" }, { name: "Michigan", icon: "🚗" }, { name: "Minnesota", icon: "🛶" }, { name: "Mississippi", icon: "🎸" }, { name: "Missouri", icon: "🏟️" },
    { name: "Montana", icon: "🌲" }, { name: "Nebraska", icon: "🚜" }, { name: "Nevada", icon: "🎰" }, { name: "New Hampshire", icon: "🍁" }, { name: "New Jersey", icon: "🎡" },
    { name: "New Mexico", icon: "🌶️" }, { name: "New York", icon: "🗽" }, { name: "North Carolina", icon: "🍗" }, { name: "North Dakota", icon: "🛢️" }, { name: "Ohio", icon: "🎢" },
    { name: "Oklahoma", icon: "🌪️" }, { name: "Oregon", icon: "🚲" }, { name: "Pennsylvania", icon: "🔔" }, { name: "Rhode Island", icon: "⚓" }, { name: "South Carolina", icon: "🌙" },
    { name: "South Dakota", icon: "🗿" }, { name: "Tennessee", icon: "🎶" }, { name: "Texas", icon: "🤠" }, { name: "Utah", icon: "🏂" }, { name: "Vermont", icon: "🥞" },
    { name: "Virginia", icon: "🛡️" }, { name: "Washington", icon: "🍎" }, { name: "West Virginia", icon: "⛏️" }, { name: "Wisconsin", icon: "🧀" }, { name: "Wyoming", icon: "🐎" }
  ];

  // 3. GLOBAL MATRIX: 195 NATIONS (Truncated List)
  const countries = [
    { name: "Nigeria", icon: "🦅" }, { name: "Ghana", icon: "🍫" }, { name: "UK", icon: "🎡" }, { name: "USA", icon: "🦅" }, { name: "Canada", icon: "🍁" }
  ];

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (searchTerm.trim()) {
      const filteredResults = registryData.filter((item: any) => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`, { state: { results: filteredResults } });
    }
  };

  const handleNavigation = (name: string, type: 'state' | 'country', icon?: string) => {
    const routeName = name.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '');
    navigate(`/directory/${routeName}`, { 
      state: { jurisdiction: name, type, icon, isIntakeRegistry: true } 
    });
  };

  const GridItem = ({ name, type, icon }: { name: string, type: 'state' | 'country', icon?: string }) => (
    <div 
      onClick={() => handleNavigation(name, type, icon)}
      onMouseEnter={() => setHoveredItem(name)}
      onMouseLeave={() => setHoveredItem(null)}
      style={{ 
        padding: '20px 10px', border: '2px solid #000', textAlign: 'center', fontSize: '11px', fontWeight: '900', cursor: 'pointer',
        backgroundColor: hoveredItem === name ? '#facc15' : '#fff',
        boxShadow: hoveredItem === name ? '6px 6px 0px #000' : 'none',
        transform: hoveredItem === name ? 'translate(-3px, -3px)' : 'none',
        transition: '0.15s ease-out', textTransform: 'uppercase', letterSpacing: '1px',
        display: 'flex', flexDirection: 'column', gap: '5px'
      }}
    >
      <span style={{ fontSize: '24px' }}>{icon}</span>
      {name}
    </div>
  );

  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh', fontFamily: 'sans-serif', color: '#000' }}>
      
      {/* GLOBAL HEADER BAR */}
      <nav style={styles.masterHeader}>
        <div style={styles.headerLeft}>
          <div style={styles.brandTitle}>KIN<span style={{color:'#facc15'}}>YELLOW</span> WORLDWIDE</div>
          <div style={styles.verticalDivider} />
        </div>
        
        <div style={styles.navLinks}>
          <Link to="/" style={styles.navLink}>KIN INDEX</Link>
          <Link to="/dashboard" style={styles.navLinkActive}>NEXUS DASHBOARD</Link>
          <Link to="/persona-hub" style={styles.navLink}>PERSONA HUB</Link>
        </div>

        <div style={styles.headerActions}>
          <button style={styles.secureBtn}>SECURE ACCESS</button>
        </div>
      </nav>

      <header style={{ padding: '80px 30px 40px', textAlign: 'center' }}>
        <h1 style={{ letterSpacing: '15px', fontWeight: '900', margin: 0, fontSize: '4.5rem' }}>
          KIN<span style={{ color: '#facc15' }}>YELLOW</span>
        </h1>
        <p style={{ fontSize: '11px', fontWeight: 'bold', letterSpacing: '8px', marginTop: '10px' }}>
          WORLDWIDE LEGACY DIRECTORY // GLOBAL IDENTITY HUB
        </p>

        {/* SEARCH CONSOLE */}
        <section style={{ maxWidth: '1000px', margin: '50px auto 0', padding: '50px', border: '5px solid #000', boxShadow: '15px 15px 0px #facc15' }}>
          <form onSubmit={handleSearch} style={{ display: 'flex', gap: '20px', marginBottom: '35px' }}>
            <input 
              type="text" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search Public Profiles or Legacies..." 
              style={{ flex: 3, padding: '20px', border: '3px solid #000', fontSize: '18px', fontWeight: 'bold', outline: 'none' }}
            />
            <button type="submit" style={{ flex: 1, backgroundColor: '#000', color: '#fff', fontWeight: '900', border: 'none', cursor: 'pointer', letterSpacing: '3px' }}>
              SEARCH
            </button>
          </form>
        </section>
      </header>

      <main style={{ maxWidth: '1400px', margin: '60px auto', padding: '0 30px' }}>
        <h3 style={{ borderLeft: '15px solid #facc15', paddingLeft: '25px', letterSpacing: '5px', marginBottom: '45px', fontSize: '24px', fontWeight: '900' }}>
          UNITED STATES JURISDICTIONS
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '15px' }}>
          {states.map((s) => <GridItem key={s.name} name={s.name} type="state" icon={s.icon} />)}
        </div>
      </main>
    </div>
  );
}

const styles = {
  masterHeader: { backgroundColor: '#000', display: 'flex', alignItems: 'center', padding: '10px 20px', position: 'sticky' as const, top: 0, zIndex: 2000 },
  headerLeft: { display: 'flex', alignItems: 'center' },
  brandTitle: { color: '#fff', fontWeight: '900', fontSize: '14px', letterSpacing: '1px' },
  verticalDivider: { width: '1px', height: '20px', backgroundColor: '#333', margin: '0 15px' },
  navLinks: { display: 'flex', gap: '15px', flex: 1 },
  navLink: { color: '#facc15', textDecoration: 'none', fontSize: '10px', fontWeight: '900' },
  navLinkActive: { color: '#fff', border: '1px solid #facc15', padding: '4px 8px', textDecoration: 'none', fontSize: '10px', fontWeight: '900' },
  headerActions: { display: 'flex', gap: '10px' },
  secureBtn: { backgroundColor: '#facc15', border: 'none', fontWeight: '900', padding: '8px 15px', fontSize: '10px', cursor: 'pointer' },
};