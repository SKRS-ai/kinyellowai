// 1. THE DEFINITIVE MAPPING (Use this exact object)
const identityCodes: { [key: string]: string } = {
  // --- US STATES (FlagCDN uses 'us-' prefix + lowercase 2-letter postal code) ---
  "Alabama": "us-al", "Alaska": "us-ak", "Arizona": "us-az", "Arkansas": "us-ar", "California": "us-ca",
  "Colorado": "us-co", "Connecticut": "us-ct", "Delaware": "us-de", "Florida": "us-fl", "Georgia": "us-ga",
  "Hawaii": "us-hi", "Idaho": "us-id", "Illinois": "us-il", "Indiana": "us-in", "Iowa": "us-ia",
  "Kansas": "us-ks", "Kentucky": "us-ky", "Louisiana": "us-la", "Maine": "us-me", "Maryland": "us-md",
  "Massachusetts": "us-ma", "Michigan": "us-mi", "Minnesota": "us-mn", "Mississippi": "us-ms", "Missouri": "us-mo",
  "Montana": "us-mt", "Nebraska": "us-ne", "Nevada": "us-nv", "New Hampshire": "us-nh", "New Jersey": "us-nj",
  "New Mexico": "us-nm", "New York": "us-ny", "North Carolina": "us-nc", "North Dakota": "us-nd", "Ohio": "us-oh",
  "Oklahoma": "us-ok", "Oregon": "us-or", "Pennsylvania": "us-pa", "Rhode Island": "us-ri", "South Carolina": "us-sc",
  "South Dakota": "us-sd", "Tennessee": "us-tn", "Texas": "us-tx", "Utah": "us-ut", "Vermont": "us-vt",
  "Virginia": "us-va", "Washington": "us-wa", "West Virginia": "us-wv", "Wisconsin": "us-wi", "Wyoming": "us-wy",

  // --- COUNTRIES (Ensure keys match your allCountries array exactly) ---
  "Afghanistan": "af", "Albania": "al", "Algeria": "dz", "Andorra": "ad", "Angola": "ao",
  "Antigua and Barbuda": "ag", "Argentina": "ar", "Armenia": "am", "Australia": "au", "Austria": "at",
  "Azerbaijan": "az", "Bahamas": "bs", "Bahrain": "bh", "Bangladesh": "bd", "Barbados": "bb",
  "Belarus": "by", "Belgium": "be", "Belize": "bz", "Benin": "bj", "Bhutan": "bt",
  "Bolivia": "bo", "Bosnia and Herzegovina": "ba", "Botswana": "bw", "Brazil": "br", "Brunei": "bn",
  "Bulgaria": "bg", "Burkina Faso": "bf", "Burundi": "bi", "Cabo Verde": "cv", "Cambodia": "kh",
  "Cameroon": "cm", "Canada": "ca", "CAR": "cf", "Chad": "td", "Chile": "cl", "China": "cn",
  "Colombia": "co", "Comoros": "km", "Congo": "cg", "Costa Rica": "cr", "Côte d'Ivoire": "ci",
  "Croatia": "hr", "Cuba": "cu", "Cyprus": "cy", "Czechia": "cz", "Denmark": "dk", "Djibouti": "dj",
  "Dominica": "dm", "Dominican Republic": "do", "DPRK": "kp", "DRC": "cd", "Ecuador": "ec",
  "Egypt": "eg", "El Salvador": "sv", "Equatorial Guinea": "gq", "Eritrea": "er", "Estonia": "ee",
  "Eswatini": "sz", "Ethiopia": "et", "Fiji": "fj", "Finland": "fi", "France": "fr", "Gabon": "ga",
  "Gambia": "gm", "Georgia": "ge", "Germany": "de", "Ghana": "gh", "Greece": "gr", "Grenada": "gd",
  "Guatemala": "gt", "Guinea": "gn", "Guinea-Bissau": "gw", "Guyana": "gy", "Haiti": "ht",
  "Holy See": "va", "Honduras": "hn", "Hungary": "hu", "Iceland": "is", "India": "in",
  "Indonesia": "id", "Iran": "ir", "Iraq": "iq", "Ireland": "ie", "Israel": "il", "Italy": "it",
  "Jamaica": "jm", "Japan": "jp", "Jordan": "jo", "Kazakhstan": "kz", "Kenya": "ke", "Kiribati": "ki",
  "Kuwait": "kw", "Kyrgyzstan": "kg", "Laos": "la", "Latvia": "lv", "Lebanon": "lb", "Lesotho": "ls",
  "Liberia": "lr", "Libya": "ly", "Liechtenstein": "li", "Lithuania": "lt", "Luxembourg": "lu",
  "Madagascar": "mg", "Malawi": "mw", "Malaysia": "my", "Maldives": "mv", "Mali": "ml", "Malta": "mt",
  "Marshall Islands": "mh", "Mauritania": "mr", "Mauritius": "mu", "Mexico": "mx", "Micronesia": "fm",
  "Moldova": "md", "Monaco": "mc", "Mongolia": "mn", "Montenegro": "me", "Morocco": "ma",
  "Mozambique": "mz", "Myanmar": "mm", "Namibia": "na", "Nauru": "nr", "Nepal": "np",
  "Netherlands": "nl", "New Zealand": "nz", "Nicaragua": "ni", "Niger": "ne", "Nigeria": "ng",
  "North Macedonia": "mk", "Norway": "no", "Oman": "om", "Pakistan": "pk", "Palau": "pw",
  "Panama": "pa", "Papua New Guinea": "pg", "Paraguay": "py", "Peru": "pe", "Philippines": "ph",
  "Poland": "pl", "Portugal": "pt", "Qatar": "qa", "Romania": "ro", "Russia": "ru", "Rwanda": "rw",
  "Saint Kitts and Nevis": "kn", "Saint Lucia": "lc", "Samoa": "ws", "San Marino": "sm",
  "Sao Tome and Principe": "st", "Saudi Arabia": "sa", "Senegal": "sn", "Serbia": "rs",
  "Seychelles": "sc", "Sierra Leone": "sl", "Singapore": "sg", "Slovakia": "sk", "Slovenia": "si",
  "Solomon Islands": "sb", "Somalia": "so", "South Africa": "za", "South Korea": "kr",
  "South Sudan": "ss", "Spain": "es", "Sri Lanka": "lk", "St. Vincent Grenadines": "vc",
  "State of Palestine": "ps", "Sudan": "sd", "Suriname": "sr", "Sweden": "se", "Switzerland": "ch",
  "Syria": "sy", "Tajikistan": "tj", "Tanzania": "tz", "Thailand": "th", "Timor-Leste": "tl",
  "Togo": "tg", "Tonga": "to", "Trinidad and Tobago": "tt", "Tunisia": "tn", "Turkey": "tr",
  "Turkmenistan": "tm", "Tuvalu": "tv", "U.A.E.": "ae", "U.K.": "gb", "U.S.": "us", "Uganda": "ug",
  "Ukraine": "ua", "Uruguay": "uy", "Uzbekistan": "uz", "Vanuatu": "vu", "Venezuela": "ve",
  "Vietnam": "vn", "Yemen": "ye", "Zambia": "zm", "Zimbabwe": "zw"
};

// --- UPDATED VISUAL DIRECTORY COMPONENT ---
const GlobalVisualDirectory = ({ title, items, type }: { title: string, items: string[], type: 'state' | 'country' }) => {
  return (
    <section style={{ marginBottom: '80px' }}>
      <h3 style={{ borderLeft: '10px solid #facc15', paddingLeft: '20px', fontSize: '22px', marginBottom: '40px', fontWeight: '900', letterSpacing: '3px' }}>
        {title.toUpperCase()}
      </h3>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', 
        gap: '25px' 
      }}>
        {items.map((name) => {
          const urlSlug = name.toLowerCase().replace(/\s+/g, '-');
          
          // CRITICAL: Look up the code in our identityCodes object
          const code = identityCodes[name];
          
          // Use FlagCDN consistently. If the code is missing from the map, it defaults to 'un'
          const flagSrc = `https://flagcdn.com/w160/${code || 'un'}.png`;

          return (
            <Link key={name} to={`/directory/${urlSlug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{ 
                border: '2px solid #000', 
                textAlign: 'center', 
                background: '#fff', 
                boxShadow: '4px 4px 0px #000',
                transition: '0.2s' 
              }}>
                <div style={{ backgroundColor: '#f9f9f9', padding: '20px', borderBottom: '2px solid #000', height: '110px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img 
                    src={flagSrc} 
                    alt={`${name} flag`}
                    style={{ maxWidth: '100%', maxHeight: '100%', filter: 'drop-shadow(2px 2px 2px rgba(0,0,0,0.1))' }}
                    onError={(e) => { 
                      // Final safety fallback to US or UN
                      (e.target as HTMLImageElement).src = type === 'state' 
                        ? 'https://flagcdn.com/w160/us.png' 
                        : 'https://flagcdn.com/w160/un.png'; 
                    }}
                  />
                </div>
                <div style={{ padding: '15px' }}>
                  <span style={{ fontSize: '12px', fontWeight: '900', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                    {name}
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
// --- GLOBAL VISUAL DIRECTORY COMPONENT ---
const GlobalVisualDirectory = ({ title, items, type }: { title: string, items: string[], type: 'state' | 'country' }) => {
  return (
    <section style={{ marginBottom: '80px' }}>
      <h3 style={{ borderLeft: '10px solid #facc15', paddingLeft: '20px', fontSize: '22px', marginBottom: '40px', fontWeight: '900', letterSpacing: '3px' }}>
        {title.toUpperCase()}
      </h3>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', 
        gap: '25px' 
      }}>
        {items.map((name) => {
          const urlSlug = name.toLowerCase().replace(/\s+/g, '-');
          
          // Get code from our combined mapping
          const code = identityCodes[name];
          
          // Use FlagCDN for EVERYTHING - it is much more reliable
          // If code is missing, it defaults to the UN flag (un)
          const flagSrc = `https://flagcdn.com/w160/${code || 'un'}.png`;

          return (
            <Link key={name} to={`/directory/${urlSlug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{ 
                border: '2px solid #000', 
                textAlign: 'center', 
                background: '#fff', 
                boxShadow: '4px 4px 0px #000',
                transition: '0.2s' 
              }}>
                <div style={{ backgroundColor: '#f9f9f9', padding: '20px', borderBottom: '2px solid #000', height: '110px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img 
                    src={flagSrc} 
                    alt={`${name} flag`}
                    style={{ maxWidth: '100%', maxHeight: '100%', filter: 'drop-shadow(2px 2px 2px rgba(0,0,0,0.1))' }}
                    onError={(e) => { 
                      // If a specific state flag fails, show the standard US flag
                      (e.target as HTMLImageElement).src = type === 'state' 
                        ? 'https://flagcdn.com/w160/us.png' 
                        : 'https://flagcdn.com/w160/un.png'; 
                    }}
                  />
                </div>
                <div style={{ padding: '15px' }}>
                  <span style={{ fontSize: '12px', fontWeight: '900', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                    {name}
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};