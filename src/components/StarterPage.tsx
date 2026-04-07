import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

// --- DATA ENGINE (LIVE APRIL 2026 INTELLIGENCE) ---
const localData: { [key: string]: any } = {
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
  },
  "san-antonio": {
    motto: "ALAMO CITY",
    flagCode: "us-tx",
    topCompanies: [{ name: "H-E-B", industry: "Retail", status: "INTEGRITY INDEX: 9.9", passType: "food" }],
    sports: [{ team: "San Antonio Spurs", update: "Wembanyama leads league in blocks; playoff push continues." }]
  },
  "phoenix": {
    motto: "VALLEY OF THE SUN",
    flagCode: "us-az",
    topCompanies: [{ name: "Banner Health", industry: "Medical", status: "VERIFIED PARTNER", passType: "med" }],
    sports: [{ team: "NCAA Women's Final Four", update: "Tipping off TODAY (April 3) at Mortgage Matchup Center." }]
  }
};

const CITIES = ["Houston", "San Antonio", "Las Vegas", "Phoenix", "Miami", "Los Angeles", "Chicago", "Dallas", "Orlando", "Philadelphia", "Atlanta", "Oklahoma City", "Indianapolis", "Memphis", "Charlotte", "Louisville", "Jacksonville", "El Paso", "Detroit", "Denver", "Milwaukee", "Columbus", "Saint Louis", "Fort Worth", "Kansas City", "Albuquerque", "Baltimore", "Baton Rouge", "Sacramento", "Fresno", "Austin", "Nashville", "Tulsa", "Tucson", "Tampa", "Birmingham", "Bakersfield", "New York", "Cleveland", "Brooklyn", "San Diego", "Corpus Christi", "Salt Lake City", "Cincinnati", "Fort Lauderdale", "New Orleans", "Knoxville", "Columbia", "Bronx", "Long Island"];

// --- KIN OS INTAKE CATEGORY MAPPING ---
const CATEGORIES = [
  { title: "HOME SERVICES", pass: "HOME PASS", items: ["Storage Units", "Plumbers", "Electricians", "Carpet Cleaning", "Moving Companies"] },
  { title: "MEDICAL SERVICES", pass: "MED PASS", items: ["Dentists", "Dermatologists", "Optometrists", "Physical Therapy", "Hospitals"] },
  { title: "AUTO SERVICES", pass: "AUTO PASS", items: ["Auto Parts", "Oil Change", "Tire Shops", "Auto Repair", "Window Tinting"] },
  { title: "LEGAL SERVICES", pass: "LEGAL PASS", items: ["Bail Bonds", "Divorce Attorneys", "Car Accident Attorneys", "Family Law Attorneys", "Bankruptcy Attorneys"] },
  { title: "PET SERVICES", pass: "PET PASS", items: ["Animal Shelters", "Dog Training", "Doggy Day Care", "Veterinarians", "Mobile Pet Grooming"] },
  { title: "BEAUTY & CARE", pass: "BEAUTY PASS", items: ["Salons", "Nail Salons", "Hair Extensions", "Massage Therapists"] },
  { title: "RESTAURANTS", pass: "FOOD PASS", items: ["Catering", "Seafood", "Family Dining", "Steakhouses"] }
];

// FIX: "Georgia" duplicate handled by context
const STATES = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia (USA)", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];

const COUNTRIES = ["Afghanistan", "Albania", "Algeria", "Argentina", "Australia", "Belgium", "Brazil", "Canada", "China", "Colombia", "Egypt", "France", "Germany", "Georgia (Country)", "India", "Ireland", "Italy", "Japan", "Mexico", "Netherlands", "Norway", "Spain", "Sweden", "Switzerland", "United Kingdom", "United States"];

export const StarterPage = () => {
  const { id } = useParams<{ id: string }>();
  const [searchQuery, setSearchQuery] = useState("");
  
  const entryId = id?.toLowerCase() || "pennsylvania";
  const data = localData[entryId] || {
    motto: "IDENTITY SOVEREIGNTY ZONE",
    flagCode: "us",
    topCompanies: [{ name: "Public Registry Data", industry: "General", status: "CLAIM HUB", passType: "home" }],
    sports: [{ team: "Local Feed", update: "Connecting to regional satellite..." }]
  };

  const displayName = entryId.replace(/-/g, ' ').toUpperCase();

  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh', color: '#000', fontFamily: 'Inter, sans-serif' }}>
      
      {/* 1. FLOATING SEARCH & AUTH BAR */}
      <div style={{ 
        position: 'fixed', bottom: '30px', left: '50%', transform: 'translateX(-50%)',
        width: '90%', maxWidth: '850px', backgroundColor: '#000', padding: '15px 25px',
        borderRadius: '50px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        boxShadow: '0 15px 40px rgba(0,0,0,0.4)', zIndex: 2000, border: '2px solid #facc15'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
          <span style={{ color: '#facc15', marginRight: '15px', fontWeight: '900', fontSize: '11px', letterSpacing: '1px' }}>KIN_LOCAL</span>
          <input 
            type="text" 
            placeholder={`Search ${displayName} services...`}
            style={{ background: 'transparent', border: 'none', color: '#fff', outline: 'none', fontSize: '14px', width: '100%' }}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div style={{ display: 'flex', gap: '15px', borderLeft: '1px solid #333', paddingLeft: '20px' }}>
          <button style={{ background: 'transparent', border: 'none', color: '#fff', fontWeight: '800', cursor: 'pointer', fontSize: '12px' }}>LOG IN</button>
          <button style={{ background: '#facc15', color: '#000', border: 'none', padding: '10px 25px', fontWeight: '900', borderRadius: '25px', cursor: 'pointer', fontSize: '12px' }}>JOIN KIN</button>
        </div>
      </div>

      {/* 2. TOP GLOBAL NAV */}
      <nav style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))', backgroundColor: '#000', position: 'sticky', top: 0, zIndex: 1000 }}>
        {['KIN INDEX', 'MYAIKIN', 'YOURREALAIID', 'INTEGRITY INDEX', 'EVERWARD TOURS', 'KINOS INTAKE', 'GRAVEYARD™', 'PERSONA HUB', 'REALAIID VERIFIED', 'MY PROFILE'].map(link => (
          <a key={link} href="#" style={{ color: '#facc15', fontSize: '9px', textAlign: 'center', textDecoration: 'none', fontWeight: '900', padding: '12px 5px', borderRight: '1px solid #222' }}>{link}</a>
        ))}
      </nav>

      {/* 3. HERO / IDENTITY BAR */}
      <header style={{ padding: '60px 40px', borderBottom: '12px solid #000' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
          <div style={{ width: '120px', height: '70px', border: '4px solid #000', overflow: 'hidden' }}>
             <img src={`https://flagcdn.com/w160/${data.flagCode.split('-')[1] || 'us'}.png`} alt="Flag" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div>
            <h1 style={{ fontSize: '5.5rem', fontWeight: '900', letterSpacing: '-5px', margin: 0, lineHeight: 0.8 }}>{displayName}</h1>
            <p style={{ letterSpacing: '4px', fontWeight: 'bold', color: '#facc15', backgroundColor: '#000', display: 'inline-block', padding: '6px 18px', marginTop: '15px', fontSize: '14px' }}>{data.motto}</p>
          </div>
        </div>
      </header>

      <main style={{ padding: '40px', paddingBottom: '160px' }}>
        
        {/* 4. ENHANCED CORPORATE REGISTRY CARDS (With Public Record Logic) */}
        <section style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '900', borderBottom: '6px solid #000', paddingBottom: '12px', marginBottom: '30px' }}>PRIMARY CORPORATE REGISTRY</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
            {data.topCompanies.map((co: any, i: number) => {
              const isPublic = co.status === "PUBLIC RECORD SYNC";
              return (
                <div key={i} style={{ 
                  border: isPublic ? '2px dashed #ccc' : '5px solid #000', 
                  padding: '45px', 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center', 
                  backgroundColor: isPublic ? '#fafafa' : (i === 0 ? '#fffef0' : '#fff'), 
                  boxShadow: (!isPublic && i === 0) ? '12px 12px 0px #facc15' : 'none',
                  opacity: isPublic ? 0.8 : 1
                }}>
                  <div>
                    <h3 style={{ margin: 0, fontSize: '30px', fontWeight: '900', color: isPublic ? '#666' : '#000' }}>
                      {co.name.toUpperCase()}
                    </h3>
                    <p style={{ margin: '5px 0', fontSize: '14px', color: '#555', letterSpacing: '1px' }}>
                      {co.industry.toUpperCase()} // {isPublic ? "IDENTITY UNCLAIMED" : "IDENTITY VERIFIED"}
                    </p>
                    {isPublic && (
                      <button style={{ 
                        marginTop: '15px', backgroundColor: '#000', color: '#facc15', 
                        border: 'none', padding: '10px 20px', fontWeight: '900', cursor: 'pointer', fontSize: '11px' 
                      }}>
                        CLAIM THIS BUSINESS CARD
                      </button>
                    )}
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '11px', fontWeight: '900', color: '#aaa' }}>KIN STATUS</div>
                    <div style={{ 
                      fontWeight: '900', fontSize: '18px', 
                      color: isPublic ? '#aaa' : '#000',
                      border: isPublic ? '1px solid #ddd' : 'none',
                      padding: isPublic ? '4px 8px' : '0'
                    }}>
                      {co.status}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 5. LIVE REGIONAL SPORTS FEED */}
        <section style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '40px', marginBottom: '80px' }}>
          <div>
            <h3 style={{ borderBottom: '4px solid #000', paddingBottom: '10px', fontWeight: '900', fontSize: '22px' }}>REGIONAL SPORTS: APRIL 2026</h3>
            {data.sports.map((s: any, i: number) => (
              <div key={i} style={{ padding: '25px 0', borderBottom: '1px solid #eee' }}>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '19px', fontWeight: '900' }}>{s.team}</h4>
                <p style={{ margin: 0, fontSize: '15px', color: '#444', lineHeight: '1.6' }}>{s.update}</p>
              </div>
            ))}
          </div>
          <div style={{ backgroundColor: '#000', color: '#fff', padding: '45px' }}>
            <h3 style={{ color: '#facc15', fontSize: '24px', fontWeight: '900', margin: '0 0 20px 0' }}>KIN DATA METRICS</h3>
            <div style={{ marginBottom: '25px' }}>
              <div style={{ fontSize: '12px', color: '#888' }}>IDENTITY_CORE SYNC</div>
              <div style={{ fontSize: '20px', fontWeight: 'bold' }}>84% INTEGRITY REACH</div>
              <div style={{ width: '100%', height: '5px', background: '#333', marginTop: '10px' }}><div style={{ width: '84%', height: '100%', background: '#facc15' }}></div></div>
            </div>
            <button style={{ width: '100%', padding: '20px', background: '#facc15', color: '#000', border: 'none', fontWeight: '900', fontSize: '16px', cursor: 'pointer' }}>SECURE YOUR REALAIID</button>
          </div>
        </section>

        {/* 6. POPULAR CITIES GRID */}
        <section style={{ marginBottom: '80px' }}>
          <h3 style={{ fontWeight: '900', color: '#888', fontSize: '14px', marginBottom: '25px', borderBottom: '2px solid #eee', paddingBottom: '10px' }}>POPULAR CITIES</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '15px' }}>
            {CITIES.map(city => <Link key={city} to={`/directory/${city.toLowerCase().replace(/ /g, '-')}`} style={{ color: '#000', fontSize: '13px', textDecoration: 'none', fontWeight: '600' }}>{city}</Link>)}
          </div>
        </section>

        {/* 7. BUSINESS CATEGORIES + KIN OS PASS TAGS */}
        <section style={{ marginBottom: '80px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '50px' }}>
          {CATEGORIES.map(cat => (
            <div key={cat.title}>
              <h4 style={{ fontWeight: '900', fontSize: '15px', borderBottom: '3px solid #000', paddingBottom: '8px' }}>{cat.title}</h4>
              <div style={{ fontSize: '9px', fontWeight: '900', color: '#facc15', backgroundColor: '#000', display: 'inline-block', padding: '2px 8px', marginTop: '5px' }}>
                {cat.pass} SYSTEM ACTIVE
              </div>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '15px' }}>
                {cat.items.map(item => <li key={item} style={{ marginBottom: '8px' }}><a href="#" style={{ color: '#666', fontSize: '14px', textDecoration: 'none' }}>{item}</a></li>)}
              </ul>
            </div>
          ))}
        </section>

        {/* 8. WORLDWIDE NAV (STATES & NATIONS) */}
        <section style={{ padding: '50px', background: '#fafafa', border: '3px solid #000' }}>
          <h3 style={{ fontWeight: '900', marginBottom: '30px', fontSize: '24px' }}>WORLDWIDE KIN DIRECTORY</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }}>
            <div>
              <h4 style={{ fontSize: '13px', color: '#aaa', fontWeight: '900', marginBottom: '15px' }}>UNITED STATES</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
                {STATES.map(state => <Link key={state} to={`/directory/${state.toLowerCase().split(' ')[0]}`} style={{ fontSize: '13px', color: '#000', textDecoration: 'none', fontWeight: '600' }}>{state}</Link>)}
              </div>
            </div>
            <div>
              <h4 style={{ fontSize: '13px', color: '#aaa', fontWeight: '900', marginBottom: '15px' }}>GLOBAL NATIONS</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
                {COUNTRIES.map(country => <Link key={country} to={`/directory/${country.toLowerCase().split(' ')[0]}`} style={{ fontSize: '13px', color: '#000', textDecoration: 'none', fontWeight: '600' }}>{country}</Link>)}
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* 9. THE BIG FOOTER */}
      <footer style={{ backgroundColor: '#000', color: '#fff', padding: '100px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '80px' }}>
          <div>
            <h2 style={{ color: '#facc15', margin: 0, fontSize: '36px', fontWeight: '900' }}>CLAIM YOUR BUSINESS</h2>
            <p style={{ color: '#ccc', fontSize: '15px', lineHeight: '1.7', margin: '25px 0' }}>Position your digital identity at the top of the Kin Index. Verified entities receive priority ranking across the Global Hub.</p>
            <button style={{ backgroundColor: '#facc15', color: '#000', border: 'none', padding: '18px 45px', fontWeight: '900', cursor: 'pointer', fontSize: '14px' }}>CLAIM LISTING NOW</button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
            <div>
              <h5 style={{ color: '#facc15', marginBottom: '20px' }}>DIRECTORY</h5>
              <div style={{ fontSize: '12px', color: '#888', lineHeight: '2.2' }}>Free Advertising<br/>Kin Categories<br/>Delivery Opt-Out<br/>Kin White Pages</div>
            </div>
            <div>
              <h5 style={{ color: '#facc15', marginBottom: '20px' }}>ABOUT KIN</h5>
              <div style={{ fontSize: '12px', color: '#888', lineHeight: '2.2' }}>Our Ecosystem<br/>Advertise With Us<br/>Kin Patents<br/>Partner Network</div>
            </div>
            <div>
              <h5 style={{ color: '#facc15', marginBottom: '20px' }}>LEGAL</h5>
              <div style={{ fontSize: '12px', color: '#666', lineHeight: '2.2' }}>© 2026 KinYellow Inc.<br/>Privacy & Data Sovereignty<br/>Terms of Governance</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};