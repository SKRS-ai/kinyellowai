import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = ({ onSearch, currentMode = 'WORLDWIDE', setMode, isLoggedIn = false }: any) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [showKinIndex, setShowKinIndex] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');
  const navigate = useNavigate();

  const identityFilters = [
    "All Heritage", "African American", "Indigenous/First Nations", "Asian American", 
    "Hispanic/Latino", "Pacific Islander", "Middle Eastern/North African", 
    "South Asian", "European/Caucasian", "Multiracial", "Sovereign/Stateless"
  ];

  const kinBrands = [
    "MYAIKIN", "YOURREALAIID", "INTEGRITY INDEX", 
    "EVERWARD TOUR", "KINOS INTAKE", "GRAVEYARD™", 
    "PERSONA HUB", " GET REALAIID VERIFIED"
  ];

  const categories: any = {
    Restaurants: {
      icon: "🍴",
      subs: [
        { name: "Takeout", icon: "🥡" }, { name: "Delivery", icon: "🚚" }, 
        { name: "Hot & Trendy", icon: "🔥" }, { name: "Breakfast", icon: "🍳" },
        { name: "Lunch", icon: "🍱" }, { name: "Dinner", icon: "🍽️" },
        { name: "Coffee & Cafes", icon: "☕" }, { name: "Pizza", icon: "🍕" },
        { name: "Chinese", icon: "🥢" }, { name: "Mexican", icon: "🌮" },
        { name: "Bakeries", icon: "🥐" }, { name: "Italian", icon: "🍝" }
      ]
    },
    "Home & Garden": {
      icon: "🏡",
      subs: [
        { name: "Contractors", icon: "🏗️" }, { name: "Handymen", icon: "🔨" },
        { name: "Plumbers", icon: "🔧" }, { name: "Electricians", icon: "⚡" },
        { name: "HVAC", icon: "🌬️" }, { name: "Roofing", icon: "🏠" },
        { name: "Painters", icon: "🖌️" }, { name: "Landscaping", icon: "🌳" }
      ]
    },
    "Auto Services": {
      icon: "🏎️",
      subs: [
        { name: "Auto Repair", icon: "👨‍🔧" }, { name: "Body Shops", icon: "🚗" },
        { name: "Oil Change", icon: "🛢️" }, { name: "Tires", icon: "🛞" },
        { name: "Car Wash", icon: "🧼" }, { name: "Car Dealers", icon: "🏪" }
      ]
    },
    "Health & Beauty": {
      icon: "✨",
      subs: [
        { name: "Dentists", icon: "🦷" }, { name: "Doctors", icon: "🩺" },
        { name: "Massage", icon: "💆" }, { name: "Hair Salons", icon: "✂️" },
        { name: "Nail Salons", icon: "💅" }, { name: "Barbers", icon: "💈" }
      ]
    },
    "Travel & Activities": {
      icon: "✈️",
      subs: [
        { name: "Venues & Events", icon: "🎟️" }, { name: "Shopping", icon: "🛍️" },
        { name: "Hotels", icon: "🏨" }, { name: "Nightlife", icon: "🍹" },
        { name: "Beaches", icon: "🏖️" }, { name: "Bowling", icon: "🎳" }
      ]
    },
    "More": {
      icon: "➕",
      subs: [
        { name: "Dry Cleaning", icon: "👔" }, { name: "Apartments", icon: "🏢" },
        { name: "Gyms", icon: "🏋️" }, { name: "Banks", icon: "🏦" },
        { name: "Real Estate", icon: "🏘️" }, { name: "Pet Groomers", icon: "🐕" }
      ]
    }
  };

  const handleExecuteSearch = (e?: React.FormEvent, customQuery?: string) => {
    if (e) e.preventDefault();
    const finalQuery = customQuery || query;
    if (!finalQuery) return;
    
    const searchPayload = {
      term: finalQuery,
      mode: currentMode,
      location: location || 'Global',
      filters: identityFilters,
      useDatabase: currentMode === 'DIRECTORY' || currentMode === 'ALL',
      useWeb: currentMode === 'WORLDWIDE' || currentMode === 'ALL'
    };

    onSearch(searchPayload.term, searchPayload.mode, searchPayload.location, searchPayload);
  };

  const handleCategoryAction = (catName: string) => {
    setQuery(catName);
    handleExecuteSearch(undefined, catName);
  };

  const resetToHome = () => {
    setQuery('');
    setLocation('');
    window.scrollTo(0, 0);
    navigate('/');
  };

  return (
    <header style={{...headerWrapper, borderColor: isFocused ? '#FFD700' : '#222'}}>
      <style>{pulseAnimation}</style>
      
      {/* --- TOP NAV BAR --- */}
      <div style={topNav}>
        <div onClick={resetToHome} style={logo}>
          KIN<span style={{ color: '#FFD700' }}>YELLOW</span> WORLDWIDE
        </div>

        <div style={topRightActions}>
          <div 
            onMouseEnter={() => setShowKinIndex(true)} 
            onMouseLeave={() => setShowKinIndex(false)}
            style={kinIndexTrigger}
          >
            KIN INDEX ▼
            {showKinIndex && (
              <div style={megaMenuStyle}>
                <p style={dropdownHeader}>KIN BRAND SUITE</p>
                {kinBrands.map((brand) => (
                  <div key={brand} style={dropdownItemDark}>{brand}</div>
                ))}
              </div>
            )}
          </div>
          
          <div style={triStateBtn}>TRI-STATE 2.0 PORTAL</div>
          
          <div style={authGroup}>
            {!isLoggedIn ? (
              <>
                <span style={secureAccess}>SECURE ACCESS</span>
                <button style={joinBtn}>JOIN KINOS REGISTRY</button>
              </>
            ) : (
              <span style={secureAccess}>MY PROFILE</span>
            )}
          </div>
        </div>
      </div>

      {/* --- SEARCH ROW --- */}
      <form onSubmit={handleExecuteSearch} style={searchRow}>
        <div style={{
          ...searchContainer, 
          boxShadow: isFocused ? '0 0 35px rgba(255, 215, 0, 0.9)' : '5px 5px 0 #FFD700',
          animation: isFocused ? 'pulseGlow 1.5s infinite' : 'none'
        }}>
          <select 
            value={currentMode} 
            onChange={(e) => setMode(e.target.value as any)}
            style={modeSelector}
          >
            <option value="WORLDWIDE">WORLDWIDE</option>
            <option value="DIRECTORY">DIRECTORY</option>
            <option value="ALL">ALL (LIMITLESS)</option>
          </select>

          <input 
            type="text" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={currentMode === 'ALL' ? "Merging Global & Directory Streams..." : "Search Legacies or the Web..."} 
            style={whatField} 
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <div style={divider} />
          <input 
            type="text" 
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="City, State, or Zip" 
            style={whereField} 
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <button type="submit" style={magnifierBtn}>🔍</button>
        </div>
      </form>

      {/* --- RIBBON / CATEGORIES --- */}
      <div style={ribbonRow}>
        {Object.entries(categories).map(([name, data]: [string, any]) => (
          <div 
            key={name} 
            onMouseEnter={() => setActiveCategory(name)}
            onMouseLeave={() => setActiveCategory(null)}
            style={categoryTab}
          >
            <span onClick={() => handleCategoryAction(name)} style={{display: 'flex', alignItems: 'center', gap: '6px'}}>
              <span style={{fontSize: '14px'}}>{data.icon}</span> {name}
            </span>
            
            {activeCategory === name && (
              <div style={categoryDropdown}>
                <p style={dropdownHeader}>{name.toUpperCase()} REGISTRY</p>
                <div style={brandGrid}>
                  {data.subs.map((sub: any) => (
                    <div 
                      key={sub.name} 
                      style={dropdownItem} 
                      onClick={() => handleCategoryAction(sub.name)}
                    >
                      <div style={yellowIcon}>{sub.icon}</div> 
                      <span style={itemText}>{sub.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </header>
  );
};

/* --- STYLES --- */
const pulseAnimation = `
  @keyframes pulseGlow {
    0% { box-shadow: 0 0 15px rgba(255, 215, 0, 0.4); }
    50% { box-shadow: 0 0 45px rgba(255, 215, 0, 0.95); }
    100% { box-shadow: 0 0 15px rgba(255, 215, 0, 0.4); }
  }
`;

const headerWrapper: React.CSSProperties = { backgroundColor: '#000', borderBottom: '2px solid #222', width: '100%', position: 'sticky', top: 0, zIndex: 3000, transition: 'border-color 0.3s ease' };
const topNav: React.CSSProperties = { display: 'flex', justifyContent: 'space-between', padding: '10px 40px', alignItems: 'center' };
const logo: React.CSSProperties = { color: '#FFF', fontWeight: '900', fontSize: '22px', cursor: 'pointer' };
const topRightActions = { display: 'flex', gap: '25px', alignItems: 'center' };
const kinIndexTrigger = { color: '#FFD700', fontSize: '11px', fontWeight: '900', cursor: 'pointer', position: 'relative' as const };
const triStateBtn = { border: '1px solid #FFD700', color: '#FFF', padding: '5px 12px', fontSize: '10px', fontWeight: '900', cursor: 'pointer' };
const megaMenuStyle: React.CSSProperties = { position: 'absolute', top: '100%', left: 0, backgroundColor: '#FFF', width: '200px', padding: '15px', boxShadow: '10px 10px 0 #FFD700', color: '#000', zIndex: 4000 };
const searchRow = { display: 'flex', justifyContent: 'center', padding: '10px 0' };
const searchContainer = { display: 'flex', width: '900px', backgroundColor: '#FFF', height: '55px', border: '2.5px solid #000', transition: 'all 0.3s ease' };
const modeSelector = { backgroundColor: '#000', color: '#FFD700', border: 'none', padding: '0 15px', fontWeight: '900', fontSize: '10px', cursor: 'pointer', outline: 'none' };
const whatField = { flex: 1.5, border: 'none', padding: '0 15px', outline: 'none', fontSize: '16px', fontWeight: '600' };
const whereField = { flex: 1, border: 'none', padding: '0 15px', outline: 'none', fontSize: '16px', fontWeight: '600', borderLeft: '1px solid #EEE' };
const divider = { width: '1px', backgroundColor: '#DDD', margin: '12px 0' };
const magnifierBtn = { backgroundColor: '#000', color: '#FFF', border: 'none', width: '80px', cursor: 'pointer', fontSize: '24px' };
const ribbonRow = { display: 'flex', justifyContent: 'center', gap: '35px', padding: '5px 0 15px 0' };
const categoryTab = { color: '#FFF', fontSize: '11px', fontWeight: '800', cursor: 'pointer', position: 'relative' as const };
const categoryDropdown: React.CSSProperties = { position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#FFF', width: '620px', boxShadow: '30px 30px 0 rgba(0,0,0,0.5)', padding: '25px', zIndex: 4000, border: '2px solid #000' };
const brandGrid = { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px' };
const dropdownHeader = { fontSize: '10px', fontWeight: '900', color: '#AAA', marginBottom: '15px', borderBottom: '1px solid #F0F0F0', paddingBottom: '5px', letterSpacing: '1px' };
const dropdownItem = { display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', padding: '8px', transition: 'background 0.2s' };
const yellowIcon = { backgroundColor: '#FFD700', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px', fontSize: '18px', boxShadow: '3px 3px 0 #000', flexShrink: 0 };
const itemText = { color: '#000', fontSize: '12px', fontWeight: '800' };
const dropdownItemDark = { color: '#000', fontSize: '12px', fontWeight: '900', padding: '8px 0', borderBottom: '1px solid #F5F5F5' };
const authGroup = { display: 'flex', gap: '20px', alignItems: 'center' };
const secureAccess = { color: '#FFD700', fontSize: '10px', fontWeight: '900', cursor: 'pointer' };
const joinBtn = { backgroundColor: '#FFD700', color: '#000', border: 'none', padding: '8px 18px', fontSize: '10px', fontWeight: '900', cursor: 'pointer' };

export default Header;