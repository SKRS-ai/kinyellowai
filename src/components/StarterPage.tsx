import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

// --- DATA ENGINE (GLOBAL + REGIONAL INTELLIGENCE) ---
const localData: { [key: string]: any } = {
  "global": {
    motto: "THE SOVEREIGN WORLD INDEX",
    flagCode: "un", // Global United Nations or Custom Logo
    topCompanies: [
      { name: "KinTrust Global", industry: "Identity", status: "MASTER HUB", passType: "global" },
      { name: "Sovereign Records", industry: "Media", status: "VERIFIED", passType: "media" }
    ],
    sports: [{ team: "Global Network Update", update: "April 2026: Sovereign Identity Anchors now live in 50 states and 26 nations." }]
  },
  "pennsylvania": {
    motto: "VIRTUE, LIBERTY, AND INDEPENDENCE",
    flagCode: "us-pa",
    topCompanies: [
      { name: "Comcast Corp", industry: "Telecom", status: "VERIFIED KIN PARTNER", passType: "office" },
      { name: "Philly Tech Logistics", industry: "Services", status: "PUBLIC RECORD SYNC", passType: "home" }
    ],
    sports: [{ team: "Philadelphia Eagles", update: "Drafting prep underway; eyes on offensive line depth." }]
  },
  "houston": {
    motto: "ENERGY CAPITAL OF THE WORLD",
    flagCode: "us-tx",
    topCompanies: [
      { name: "Houston Methodist", industry: "Healthcare", status: "PREMIUM PARTNER", passType: "med" },
      { name: "Space City Plumbing", industry: "Home Services", status: "PUBLIC RECORD SYNC", passType: "home" }
    ],
    sports: [{ team: "FIFA World Cup 2026", update: "NRG Stadium ticket queues live; local fan zones announced." }]
  }
};

const CITIES = ["Houston", "San Antonio", "Las Vegas", "Phoenix", "Miami", "Los Angeles", "Chicago", "Dallas", "Orlando", "Philadelphia", "Atlanta", "Oklahoma City", "Indianapolis", "Memphis", "Charlotte", "Louisville", "Jacksonville", "El Paso", "Detroit", "Denver", "Milwaukee", "Columbus", "Saint Louis", "Fort Worth", "Kansas City", "Albuquerque", "Baltimore", "Baton Rouge", "Sacramento", "Fresno", "Austin", "Nashville", "Tulsa", "Tucson", "Tampa", "Birmingham", "Bakersfield", "New York", "Cleveland", "Brooklyn", "San Diego", "Corpus Christi", "Salt Lake City", "Cincinnati", "Fort Lauderdale", "New Orleans", "Knoxville", "Columbia", "Bronx", "Long Island"];
const CATEGORIES = [
  { title: "HOME SERVICES", pass: "HOME PASS", items: ["Storage Units", "Plumbers", "Electricians", "Carpet Cleaning", "Moving Companies"] },
  { title: "MEDICAL SERVICES", pass: "MED PASS", items: ["Dentists", "Dermatologists", "Optometrists", "Physical Therapy", "Hospitals"] },
  { title: "AUTO SERVICES", pass: "AUTO PASS", items: ["Auto Parts", "Oil Change", "Tire Shops", "Auto Repair", "Window Tinting"] },
  { title: "LEGAL SERVICES", pass: "LEGAL PASS", items: ["Bail Bonds", "Divorce Attorneys", "Car Accident Attorneys", "Family Law Attorneys", "Bankruptcy Attorneys"] },
  { title: "PET SERVICES", pass: "PET PASS", items: ["Animal Shelters", "Dog Training", "Doggy Day Care", "Veterinarians", "Mobile Pet Grooming"] },
  { title: "BEAUTY & CARE", pass: "BEAUTY PASS", items: ["Salons", "Nail Salons", "Hair Extensions", "Massage Therapists"] },
  { title: "RESTAURANTS", pass: "FOOD PASS", items: ["Catering", "Seafood", "Family Dining", "Steakhouses"] }
];
const STATES = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia (USA)", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];
const COUNTRIES = ["Afghanistan", "Albania", "Algeria", "Argentina", "Australia", "Belgium", "Brazil", "Canada", "China", "Colombia", "Egypt", "France", "Germany", "Georgia (Country)", "India", "Ireland", "Italy", "Japan", "Mexico", "Netherlands", "Norway", "Spain", "Sweden", "Switzerland", "United Kingdom", "United States"];

const StarterPage = ({ onSearch, currentMode, setMode }: any) => {
  const { id } = useParams<{ id: string }>();
  const [localQuery, setLocalQuery] = useState("");
  
  // FIX: Default to "global" instead of "pennsylvania"
  const entryId = id?.toLowerCase() || "global";
  const data = localData[entryId] || localData["global"];

  const displayName = entryId === "global" ? "KINYELLOW" : entryId.replace(/-/g, ' ').toUpperCase();

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(localQuery, currentMode);
  };

  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh', color: '#000', fontFamily: 'Inter, sans-serif' }}>
      
      {/* 1. MASTER POWER SEARCH BAR */}
      <form onSubmit={handleHeroSubmit} style={floatingBar}>
        <select 
          value={currentMode}
          onChange={(e) => setMode(e.target.value as any)}
          style={modeSelect}
        >
          <option value="DIRECTORY">DIRECTORY</option>
          <option value="WORLDWIDE">WORLDWIDE</option>
        </select>
        <input 
          type="text" 
          value={localQuery}
          placeholder={`Search ${entryId === 'global' ? 'Global' : displayName} Registry...`}
          style={searchInput}
          onChange={(e) => setLocalQuery(e.target.value)}
        />
        <button type="submit" style={searchBtn}>SEARCH</button>
      </form>

      {/* 2. GLOBAL NAV BAR */}
      <nav style={globalNav}>
        {['KIN INDEX', 'MYAIKIN', 'YOURREALAIID', 'INTEGRITY INDEX', 'EVERWARD TOURS', 'KINOS INTAKE', 'GRAVEYARD™', 'PERSONA HUB', 'REALAIID VERIFIED', 'MY PROFILE'].map(link => (
          <a key={link} href="#" style={navLink}>{link}</a>
        ))}
      </nav>

      {/* 3. HERO / IDENTITY BAR */}
      <header style={heroHeader}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
          <div style={flagContainer}>
             <img src={`https://flagcdn.com/w160/${data.flagCode === 'un' ? 'un' : data.flagCode.split('-')[1] || 'us'}.png`} alt="Flag" style={flagImg} />
          </div>
          <div>
            <h1 style={heroTitle}>{displayName}</h1>
            <p style={heroMotto}>{data.motto}</p>
          </div>
        </div>
      </header>

      <main style={{ padding: '40px', paddingBottom: '160px' }}>
        
        {/* 4. PRIMARY REGISTRY */}
        <section style={{ marginBottom: '80px' }}>
          <h2 style={sectionHeader}>PRIMARY CORPORATE REGISTRY</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
            {data.topCompanies.map((co: any, i: number) => (
              <div key={i} style={{...cardStyle, boxShadow: (i === 0) ? '12px 12px 0px #facc15' : 'none', backgroundColor: (i === 0) ? '#fffef0' : '#fff'}}>
                <div>
                  <h3 style={cardTitle}>{co.name.toUpperCase()}</h3>
                  <p style={cardSub}>{co.industry.toUpperCase()} // VERIFIED</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={statusLabel}>KIN STATUS</div>
                  <div style={statusValue}>{co.status}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. LIVE SPORTS / DATA FEED */}
        <section style={dataFeedGrid}>
          <div>
            <h3 style={sectionHeaderSmall}>REGIONAL FEED: APRIL 2026</h3>
            {data.sports.map((s: any, i: number) => (
              <div key={i} style={feedItem}>
                <h4 style={feedTitle}>{s.team}</h4>
                <p style={feedText}>{s.update}</p>
              </div>
            ))}
          </div>
          <div style={metricsBox}>
            <h3 style={metricsTitle}>KIN DATA METRICS</h3>
            <div style={{ marginBottom: '25px' }}>
              <div style={metricLabel}>IDENTITY_CORE SYNC</div>
              <div style={metricValue}>84% INTEGRITY REACH</div>
              <div style={progressBar}><div style={{ width: '84%', height: '100%', background: '#facc15' }}></div></div>
            </div>
            <button style={secureBtn}>SECURE YOUR REALAIID</button>
          </div>
        </section>

        {/* 6. GLOBAL NATIONS & STATES */}
        <section style={directoryFooter}>
          <h3 style={directoryTitle}>WORLDWIDE KIN DIRECTORY</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }}>
            <div>
              <h4 style={subHeader}>UNITED STATES</h4>
              <div style={linkGrid}>
                {STATES.map(state => <Link key={state} to={`/directory/${state.toLowerCase().split(' ')[0]}`} style={directoryLink}>{state}</Link>)}
              </div>
            </div>
            <div>
              <h4 style={subHeader}>GLOBAL NATIONS</h4>
              <div style={linkGrid}>
                {COUNTRIES.map(country => <Link key={country} to={`/directory/${country.toLowerCase().split(' ')[0]}`} style={directoryLink}>{country}</Link>)}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 9. THE BIG FOOTER */}
      <footer style={mainFooter}>
        <div style={footerGrid}>
          <div>
            <h2 style={footerLogo}>CLAIM YOUR BUSINESS</h2>
            <p style={footerPara}>Position your digital identity at the top of the Kin Index. Verified entities receive priority ranking across the Global Hub.</p>
            <button style={claimBtn}>CLAIM LISTING NOW</button>
          </div>
          <div style={footerLinks}>
            <div>
              <h5 style={footerHeading}>DIRECTORY</h5>
              <div style={footerSubLinks}>Free Advertising<br/>Kin Categories<br/>Kin White Pages</div>
            </div>
            <div>
              <h5 style={footerHeading}>LEGAL</h5>
              <div style={footerSubLinks}>© 2026 KinYellow Inc.<br/>Data Sovereignty<br/>Terms of Governance</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

/* --- STYLES (PRESERVED & ENHANCED) --- */
const floatingBar: React.CSSProperties = { position: 'fixed', bottom: '30px', left: '50%', transform: 'translateX(-50%)', width: '90%', maxWidth: '850px', backgroundColor: '#000', padding: '10px 20px', borderRadius: '50px', display: 'flex', alignItems: 'center', boxShadow: '0 15px 40px rgba(0,0,0,0.4)', zIndex: 2000, border: '2px solid #facc15' };
const modeSelect: React.CSSProperties = { background: '#facc15', border: 'none', borderRadius: '20px', padding: '5px 15px', fontWeight: '900', fontSize: '10px', cursor: 'pointer', marginRight: '15px' };
const searchInput: React.CSSProperties = { background: 'transparent', border: 'none', color: '#fff', outline: 'none', fontSize: '14px', flex: 1 };
const searchBtn: React.CSSProperties = { background: '#facc15', color: '#000', border: 'none', padding: '10px 25px', fontWeight: '900', borderRadius: '25px', cursor: 'pointer', fontSize: '12px' };
const globalNav: React.CSSProperties = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))', backgroundColor: '#000', position: 'sticky', top: 0, zIndex: 1000 };
const navLink: React.CSSProperties = { color: '#facc15', fontSize: '9px', textAlign: 'center', textDecoration: 'none', fontWeight: '900', padding: '12px 5px', borderRight: '1px solid #222' };
const heroHeader: React.CSSProperties = { padding: '60px 40px', borderBottom: '12px solid #000' };
const flagContainer = { width: '120px', height: '70px', border: '4px solid #000', overflow: 'hidden' };
const flagImg = { width: '100%', height: '100%', objectFit: 'cover' as const };
const heroTitle = { fontSize: '5.5rem', fontWeight: '900', letterSpacing: '-5px', margin: 0, lineHeight: 0.8 };
const heroMotto = { letterSpacing: '4px', fontWeight: 'bold', color: '#facc15', backgroundColor: '#000', display: 'inline-block', padding: '6px 18px', marginTop: '15px', fontSize: '14px' };
const sectionHeader = { fontSize: '32px', fontWeight: '900', borderBottom: '6px solid #000', paddingBottom: '12px', marginBottom: '30px' };
const cardStyle: React.CSSProperties = { border: '5px solid #000', padding: '45px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' };
const cardTitle = { margin: 0, fontSize: '30px', fontWeight: '900' };
const cardSub = { margin: '5px 0', fontSize: '14px', color: '#555', letterSpacing: '1px' };
const statusLabel = { fontSize: '11px', fontWeight: '900', color: '#aaa' };
const statusValue = { fontWeight: '900', fontSize: '18px' };
const dataFeedGrid = { display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '40px', marginBottom: '80px' };
const sectionHeaderSmall = { borderBottom: '4px solid #000', paddingBottom: '10px', fontWeight: '900', fontSize: '22px' };
const feedItem = { padding: '25px 0', borderBottom: '1px solid #eee' };
const feedTitle = { margin: '0 0 8px 0', fontSize: '19px', fontWeight: '900' };
const feedText = { margin: 0, fontSize: '15px', color: '#444', lineHeight: '1.6' };
const metricsBox = { backgroundColor: '#000', color: '#fff', padding: '45px' };
const metricsTitle = { color: '#facc15', fontSize: '24px', fontWeight: '900', margin: '0 0 20px 0' };
const metricLabel = { fontSize: '12px', color: '#888' };
const metricValue = { fontSize: '20px', fontWeight: 'bold' as const };
const progressBar = { width: '100%', height: '5px', background: '#333', marginTop: '10px' };
const secureBtn = { width: '100%', padding: '20px', background: '#facc15', color: '#000', border: 'none', fontWeight: '900', fontSize: '16px', cursor: 'pointer' };
const directoryFooter = { padding: '50px', background: '#fafafa', border: '3px solid #000', marginBottom: '80px' };
const directoryTitle = { fontWeight: '900', marginBottom: '30px', fontSize: '24px' };
const subHeader = { fontSize: '13px', color: '#aaa', fontWeight: '900', marginBottom: '15px' };
const linkGrid = { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' };
const directoryLink = { fontSize: '13px', color: '#000', textDecoration: 'none', fontWeight: '600' };
const mainFooter = { backgroundColor: '#000', color: '#fff', padding: '100px 40px' };
const footerGrid = { display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '80px' };
const footerLogo = { color: '#facc15', margin: 0, fontSize: '36px', fontWeight: '900' };
const footerPara = { color: '#ccc', fontSize: '15px', lineHeight: '1.7', margin: '25px 0' };
const claimBtn = { backgroundColor: '#facc15', color: '#000', border: 'none', padding: '18px 45px', fontWeight: '900', cursor: 'pointer' };
const footerLinks = { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px' };
const footerHeading = { color: '#facc15', marginBottom: '20px' };
const footerSubLinks = { fontSize: '12px', color: '#888', lineHeight: '2.2' };

export default StarterPage;