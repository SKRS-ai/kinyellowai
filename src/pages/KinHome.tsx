import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import registryData from '../data/registry_data.json';

export default function KinHome() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

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

  // 2. JURISDICTIONS: US STATES WITH MOG ICONS
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

  // 3. GLOBAL MATRIX: 195 NATIONS WITH CULTURAL MOGs
  const countries = [
    { name: "Afghanistan", icon: "🏔️" }, { name: "Albania", icon: "🇦" }, { name: "Algeria", icon: "🏜️" }, { name: "Andorra", icon: "🏔️" }, { name: "Angola", icon: "💎" },
    { name: "Antigua & Barbuda", icon: "⛵" }, { name: "Argentina", icon: "⚽" }, { name: "Armenia", icon: "⛪" }, { name: "Australia", icon: "🦘" }, { name: "Austria", icon: "🎵" },
    { name: "Azerbaijan", icon: "🔥" }, { name: "Bahamas", icon: "🏖️" }, { name: "Bahrain", icon: "🏎️" }, { name: "Bangladesh", icon: "🐅" }, { name: "Barbados", icon: "🔱" },
    { name: "Belarus", icon: "🌲" }, { name: "Belgium", icon: "🍫" }, { name: "Belize", icon: "🐠" }, { name: "Benin", icon: "🏺" }, { name: "Bhutan", icon: "🐉" },
    { name: "Bolivia", icon: "🧂" }, { name: "Bosnia & Herzegovina", icon: "🌉" }, { name: "Botswana", icon: "💎" }, { name: "Brazil", icon: "⚽" }, { name: "Brunei", icon: "🕌" },
    { name: "Bulgaria", icon: "🌹" }, { name: "Burkina Faso", icon: "🐎" }, { name: "Burundi", icon: "🥁" }, { name: "Cabo Verde", icon: "🌋" }, { name: "Cambodia", icon: "🛕" },
    { name: "Cameroon", icon: "🦁" }, { name: "Canada", icon: "🍁" }, { name: "Central African Rep.", icon: "🐘" }, { name: "Chad", icon: "🏜️" }, { name: "Chile", icon: "🏔️" },
    { name: "China", icon: "🐉" }, { name: "Colombia", icon: "☕" }, { name: "Comoros", icon: "🌙" }, { name: "Congo", icon: "🦍" }, { name: "DR Congo", icon: "🦍" },
    { name: "Costa Rica", icon: "🦜" }, { name: "Croatia", icon: "⚽" }, { name: "Cuba", icon: "🇨" }, { name: "Cyprus", icon: "🫒" }, { name: "Czechia", icon: "🏰" },
    { name: "Denmark", icon: "🎡" }, { name: "Djibouti", icon: "🚢" }, { name: "Dominica", icon: "🦜" }, { name: "Dominican Rep.", icon: "⚾" }, { name: "Ecuador", icon: "🐢" },
    { name: "Egypt", icon: "🐫" }, { name: "El Salvador", icon: "🏄" }, { name: "Equatorial Guinea", icon: "🛢️" }, { name: "Eritrea", icon: "🏜️" }, { name: "Estonia", icon: "💻" },
    { name: "Eswatini", icon: "🛡️" }, { name: "Ethiopia", icon: "☕" }, { name: "Fiji", icon: "🏝️" }, { name: "Finland", icon: "🎿" }, { name: "France", icon: "🗼" },
    { name: "Gabon", icon: "🌳" }, { name: "Gambia", icon: "🛶" }, { name: "Georgia", icon: "🍷" }, { name: "Germany", icon: "🚗" }, { name: "Ghana", icon: "🍫" },
    { name: "Greece", icon: "🏛️" }, { name: "Grenada", icon: "🌶️" }, { name: "Guatemala", icon: "🛕" }, { name: "Guinea", icon: "⛏️" }, { name: "Guinea-Bissau", icon: "🥜" },
    { name: "Guyana", icon: "🦜" }, { name: "Haiti", icon: "🏺" }, { name: "Honduras", icon: "🦜" }, { name: "Hungary", icon: "🥘" }, { name: "Iceland", icon: "🌋" },
    { name: "India", icon: "🛕" }, { name: "Indonesia", icon: "🐉" }, { name: "Iran", icon: "🕌" }, { name: "Iraq", icon: "📜" }, { name: "Ireland", icon: "☘️" },
    { name: "Israel", icon: "🕍" }, { name: "Italy", icon: "🍕" }, { name: "Jamaica", icon: "🇯" }, { name: "Japan", icon: "🗾" }, { name: "Jordan", icon: "🏛️" },
    { name: "Kazakhstan", icon: "🦅" }, { name: "Kenya", icon: "🦁" }, { name: "Kiribati", icon: "🏝️" }, { name: "North Korea", icon: "🚀" }, { name: "South Korea", icon: "📱" },
    { name: "Kuwait", icon: "🛢️" }, { name: "Kyrgyzstan", icon: "🐎" }, { name: "Laos", icon: "🐘" }, { name: "Latvia", icon: "🏰" }, { name: "Lebanon", icon: "🌲" },
    { name: "Lesotho", icon: "⛰️" }, { name: "Liberia", icon: "🚢" }, { name: "Libya", icon: "🏜️" }, { name: "Liechtenstein", icon: "🏰" }, { name: "Lithuania", icon: "🏀" },
    { name: "Luxembourg", icon: "🏰" }, { name: "Madagascar", icon: "🐒" }, { name: "Malawi", icon: "🌅" }, { name: "Malaysia", icon: "🏙️" }, { name: "Maldives", icon: "🏖️" },
    { name: "Mali", icon: "🕌" }, { name: "Malta", icon: "🛡️" }, { name: "Marshall Islands", icon: "🏝️" }, { name: "Mauritania", icon: "🏜️" }, { name: "Mauritius", icon: "🦤" },
    { name: "Mexico", icon: "🌮" }, { name: "Micronesia", icon: "🏝️" }, { name: "Moldova", icon: "🍷" }, { name: "Monaco", icon: "🏎️" }, { name: "Mongolia", icon: "🐎" },
    { name: "Montenegro", icon: "⛰️" }, { name: "Morocco", icon: "🕌" }, { name: "Mozambique", icon: "🐘" }, { name: "Myanmar", icon: "🛕" }, { name: "Namibia", icon: "🏜️" },
    { name: "Nauru", icon: "🏝️" }, { name: "Nepal", icon: "🏔️" }, { name: "Netherlands", icon: "🌷" }, { name: "New Zealand", icon: "🥝" }, { name: "Nicaragua", icon: "🌋" },
    { name: "Niger", icon: "🏜️" }, { name: "Nigeria", icon: "🦅" }, { name: "North Macedonia", icon: "☀️" }, { name: "Norway", icon: "⛴️" }, { name: "Oman", icon: "🕌" },
    { name: "Pakistan", icon: "🏏" }, { name: "Palau", icon: "🐚" }, { name: "Panama", icon: "🚢" }, { name: "Papua New Guinea", icon: "🦜" }, { name: "Paraguay", icon: "⚽" },
    { name: "Peru", icon: "🦙" }, { name: "Philippines", icon: "🏝️" }, { name: "Poland", icon: "🥟" }, { name: "Portugal", icon: "⛵" }, { name: "Qatar", icon: "🛢️" },
    { name: "Romania", icon: "🧛" }, { name: "Russia", icon: "🐻" }, { name: "Rwanda", icon: "🦍" }, { name: "St. Kitts & Nevis", icon: "🏝️" }, { name: "St. Lucia", icon: "🌋" },
    { name: "St. Vincent", icon: "🏝️" }, { name: "Samoa", icon: "🇼" }, { name: "San Marino", icon: "🏰" }, { name: "Sao Tome", icon: "🍫" },
    { name: "Saudi Arabia", icon: "🐪" }, { name: "Senegal", icon: "🦁" }, { name: "Serbia", icon: "🎾" }, { name: "Seychelles", icon: "🐢" }, { name: "Sierra Leone", icon: "💎" },
    { name: "Singapore", icon: "🦁" }, { name: "Slovakia", icon: "🏔️" }, { name: "Slovenia", icon: "🏔️" }, { name: "Solomon Islands", icon: "🛶" }, { name: "Somalia", icon: "🐫" },
    { name: "South Africa", icon: "🇿" }, { name: "South Sudan", icon: "🐃" }, { name: "Spain", icon: "💃" }, { name: "Sri Lanka", icon: "🐘" }, { name: "Sudan", icon: "🏜️" },
    { name: "Suriname", icon: "🌳" }, { name: "Sweden", icon: "🛶" }, { name: "Switzerland", icon: "🏔️" }, { name: "Syria", icon: "🕌" }, { name: "Tajikistan", icon: "🏔️" },
    { name: "Tanzania", icon: "🦁" }, { name: "Thailand", icon: "🐘" }, { name: "Timor-Leste", icon: "🐊" }, { name: "Togo", icon: "🏺" }, { name: "Tonga", icon: "🐋" },
    { name: "Trinidad & Tobago", icon: "🥁" }, { name: "Tunisia", icon: "🏛️" }, { name: "Turkey", icon: "🕌" }, { name: "Turkmenistan", icon: "🐎" }, { name: "Tuvalu", icon: "🏝️" },
    { name: "Uganda", icon: "🦍" }, { name: "Ukraine", icon: "🌻" }, { name: "UAE", icon: "🏙️" }, { name: "UK", icon: "🎡" }, { name: "USA", icon: "🦅" },
    { name: "Uruguay", icon: "⚽" }, { name: "Uzbekistan", icon: "🕌" }, { name: "Vanuatu", icon: "🏝️" }, { name: "Vatican City", icon: "⛪" }, { name: "Venezuela", icon: "🛢️" },
    { name: "Vietnam", icon: "⛩️" }, { name: "Yemen", icon: "🏜️" }, { name: "Zambia", icon: "🦁" }, { name: "Zimbabwe", icon: "🐘" }
  ];

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (searchTerm.trim()) {
      const filteredResults = registryData.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`, { state: { results: filteredResults } });
    }
  };

  // ENHANCED NAVIGATION: Passes icon and context for starter pages
  const handleNavigation = (name: string, type: 'state' | 'country', icon?: string) => {
    const routeName = name.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '');
    navigate(`/directory/${routeName}`, { 
      state: { 
        jurisdiction: name, 
        type: type, 
        icon: icon,
        isIntakeRegistry: true 
      } 
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
          <Link to="/search?q=KIN INDEX" style={styles.navLink}>KIN INDEX</Link>
          <Link to="/search?q=MYAIKIN" style={styles.navLink}>MYAIKIN</Link>
          <Link to="/search?q=YOURREALAIID" style={styles.navLink}>YOURREALAIID</Link>
          <Link to="/search?q=INTEGRITY INDEX" style={styles.navLink}>INTEGRITY INDEX</Link>
          <Link to="/search?q=EVERWARD TOURS" style={styles.navLink}>EVERWARD TOURS</Link>
          <Link to="/tri-state" style={styles.navLinkActive}>TRI-STATE 2.0 PORTAL</Link>
          <Link to="/search?q=KINOS INTAKE" style={styles.navLink}>KINOS INTAKE</Link>
          <Link to="/graveyard" style={styles.navLink}>GRAVEYARD™</Link>
          <Link to="/persona-hub" style={styles.navLink}>PERSONA HUB</Link>
          <Link to="/realaiid-verified" style={styles.navLink}>REALAIID VERIFIED</Link>
          <Link to="/profile" style={styles.navLink}>MY PROFILE</Link>
        </div>

        <div style={styles.headerActions}>
          <button style={styles.secureBtn}>SECURE ACCESS</button>
          <button style={styles.intakeBtn} onClick={() => navigate('/intake')}>JOIN KINOS INTAKE REGISTRY</button>
        </div>
      </nav>

      <header style={{ padding: '80px 30px 40px', textAlign: 'center' }}>
        <h1 style={{ letterSpacing: '15px', fontWeight: '900', margin: 0, fontSize: '4.5rem' }}>
          KIN<span style={{ color: '#facc15' }}>YELLOW</span>
        </h1>
        <p style={{ fontSize: '11px', fontWeight: 'bold', letterSpacing: '8px', marginTop: '10px' }}>
          WORLDWIDE LEGACY DIRECTORY // GLOBAL IDENTITY HUB
        </p>

        {/* UNIVERSAL SEARCH CONSOLE */}
        <section style={{ maxWidth: '1000px', margin: '50px auto 0', padding: '50px', border: '5px solid #000', boxShadow: '15px 15px 0px #facc15' }}>
          <form onSubmit={handleSearch} style={{ display: 'flex', gap: '20px', marginBottom: '35px' }}>
            <input 
              type="text" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search Public Profiles, Sovereign Entities, or Legacies..." 
              style={{ flex: 3, padding: '20px', border: '3px solid #000', fontSize: '18px', fontWeight: 'bold', outline: 'none' }}
            />
            <button type="submit" style={{ flex: 1, backgroundColor: '#000', color: '#fff', fontWeight: '900', border: 'none', cursor: 'pointer', letterSpacing: '3px', fontSize: '14px' }}>
              SEARCH ENGINE
            </button>
          </form>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '25px' }}>
            {[
              { label: "CULTURAL DIRECTORY", options: cultures },
              { label: "GENDER SELECTION", options: genders },
              { label: "PRONOUN PRECISION", options: pronouns }
            ].map((selector, idx) => (
              <div key={idx} style={{ textAlign: 'left' }}>
                <label style={{ fontSize: '10px', fontWeight: '900', letterSpacing: '2px' }}>{selector.label}</label>
                <select style={{ width: '100%', padding: '12px', marginTop: '8px', border: '3px solid #000', fontWeight: 'bold', fontSize: '12px', appearance: 'none', cursor: 'pointer', backgroundColor: '#fff' }}>
                  <option>ALL CLASSIFICATIONS</option>
                  {selector.options.map(opt => <option key={opt}>{opt.toUpperCase()}</option>)}
                </select>
              </div>
            ))}
          </div>
        </section>
      </header>

      <aside style={{ backgroundColor: '#facc15', padding: '20px', textAlign: 'center', borderTop: '5px solid #000', borderBottom: '5px solid #000' }}>
        <span style={{ fontWeight: '900', fontSize: '14px', letterSpacing: '3px' }}>
          ADVERTISEMENT: REGISTER YOUR DIGITAL NEWBORN LIKENESS ANCHOR™ TODAY — SECURE YOUR LEGACY
        </span>
      </aside>

      <main style={{ maxWidth: '1400px', margin: '60px auto', padding: '0 30px' }}>
        <section style={{ marginBottom: '100px' }}>
          <h3 style={{ borderLeft: '15px solid #facc15', paddingLeft: '25px', letterSpacing: '5px', marginBottom: '45px', fontSize: '24px', fontWeight: '900' }}>
            UNITED STATES JURISDICTIONS (50 STATES)
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '15px' }}>
            {states.map((s) => <GridItem key={s.name} name={s.name} type="state" icon={s.icon} />)}
          </div>
        </section>

        <section style={{ marginBottom: '120px' }}>
          <h3 style={{ borderLeft: '15px solid #000', paddingLeft: '25px', letterSpacing: '5px', marginBottom: '45px', fontSize: '24px', fontWeight: '900' }}>
            GLOBAL COVERAGE MATRIX (195 NATIONS)
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '15px' }}>
            {countries.map((c) => <GridItem key={c.name} name={c.name} type="country" icon={c.icon} />)}
          </div>
        </section>
      </main>

      <footer style={{ textAlign: 'center', padding: '150px 30px', borderTop: '5px solid #000', backgroundColor: '#000', color: '#fff' }}>
        <p style={{ fontSize: '12px', color: '#fff', letterSpacing: '6px', fontWeight: '900' }}>
          SOLOMON KIN LLC // DIGITAL GRAVEYARD™ ARCHITECTURE // KINYELLOW WORLDWIDE
        </p>
      </footer>
    </div>
  );
}

const styles = {
  masterHeader: { backgroundColor: '#000', display: 'flex', alignItems: 'center', padding: '10px 20px', position: 'sticky' as const, top: 0, zIndex: 2000 },
  headerLeft: { display: 'flex', alignItems: 'center' },
  brandTitle: { color: '#fff', fontWeight: '900', fontSize: '14px', letterSpacing: '1px' },
  verticalDivider: { width: '1px', height: '20px', backgroundColor: '#333', margin: '0 15px' },
  navLinks: { display: 'flex', gap: '15px', flexWrap: 'wrap' as const, flex: 1 },
  navLink: { color: '#facc15', textDecoration: 'none', fontSize: '10px', fontWeight: '900', textTransform: 'uppercase' as const },
  navLinkActive: { color: '#fff', border: '1px solid #facc15', padding: '4px 8px', textDecoration: 'none', fontSize: '10px', fontWeight: '900' },
  headerActions: { display: 'flex', gap: '10px', marginLeft: '20px' },
  secureBtn: { backgroundColor: '#facc15', border: 'none', fontWeight: '900', padding: '8px 15px', fontSize: '10px', cursor: 'pointer' },
  intakeBtn: { backgroundColor: '#facc15', border: 'none', fontWeight: '900', padding: '8px 15px', fontSize: '10px', cursor: 'pointer' },
};