import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SiteMap() {
  const navigate = useNavigate();

  const sections = [
    { title: "CORE DIRECTORY", links: ["Home", "Global Search", "Sovereign Network"] },
    { title: "LEGACY ARCHITECTURE", links: ["Digital Graveyard™", "Digital Tombstone™", "Identity Hub"] },
    { title: "INSTITUTIONAL API", links: ["Funeral Director Portal", "Solomon Kin Licensing", "RealAIID Verification"] },
    { title: "CORPORATE REGISTRY", links: ["IBINGOD TRADE", "VEXILLA AITS", "CLEAN BLUE GREEN CORP"] },
    { title: "PRECEPTED EXPANSIONS", links: ["Sovereign Village OS", "SKRMG Catalog", "Identity Bureau", "KinOS Technical Home"] }
  ];

  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh', padding: '50px', fontFamily: 'sans-serif' }}>
      <h1 style={{ letterSpacing: '8px', borderBottom: '2px solid #000', paddingBottom: '20px' }}>
        KIN<span style={{ color: '#facc15' }}>YELLOW</span> SITE MAP // REV 2026.04.02
      </h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginTop: '40px' }}>
        {sections.map(section => (
          <div key={section.title}>
            <h3 style={{ fontSize: '12px', color: '#facc15', letterSpacing: '2px' }}>{section.title}</h3>
            <ul style={{ listStyle: 'none', padding: 0, marginTop: '15px' }}>
              {section.links.map(link => (
                <li key={link} style={{ padding: '8px 0', borderBottom: '1px solid #eee', fontSize: '14px', fontWeight: 'bold', cursor: 'pointer' }}>
                  {link} <span style={{ float: 'right', color: '#ccc' }}>→</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
