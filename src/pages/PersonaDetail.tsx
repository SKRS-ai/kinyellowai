import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';

export default function PersonaDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [persona, setPersona] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIdentityData = async () => {
      setLoading(true);
      
      // 1. GENESIS ANCHOR OVERRIDE
      if (id === 'nehemiah-brown') {
        setPersona({
          name: "Nehemiah Brown",
          title: "Digital Human Likeness Architect",
          videoUrl: "https://vjs.zencdn.net/v/oceans.mp4",
          bio: "Founding Architect of the KinYellow Identity Hub and Digital Human Likeness anchor.",
          achievements: ["AI Likeness Integration", "Sovereign Identity Hashing", "Genesis Identity Anchor"],
          realIdUrl: "https://MyrealAiid.me",
          isClaimed: true
        });
        setLoading(false);
        return;
      }

      // 2. MASTER REGISTRY LOOKUP (Supports new columns)
      try {
        const { data, error } = await supabase
          .from('businesses')
          .select('*')
          .eq('id', id)
          .single();

        if (error) throw error;

        if (data) {
          setPersona({
            name: data.name,
            title: data.entity_type || "CORPORATE ENTITY",
            videoUrl: data.logo_url || "https://vjs.zencdn.net/v/oceans.mp4",
            bio: data.description || "Official documentation pending for this sovereign registry update.",
            address: `${data.address || ''} ${data.city || ''}, ${data.state || ''}`.trim(),
            phone: data.phone_number,
            website: data.website_url,
            isClaimed: data.claimed_status || false,
            achievements: [
              `Jurisdiction: ${data.jurisdiction || 'Global'}`,
              `Registry ID: ${data.id.substring(0, 8)}`,
              `Status: ${data.claimed_status ? 'VERIFIED OWNER' : 'PUBLIC RECORD'}`,
              `Location: ${data.city || 'Remote'}`
            ],
            realIdUrl: "https://MyrealAiid.me"
          });
        }
      } catch (err) {
        console.error("❌ REGISTRY ERROR:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchIdentityData();
  }, [id]);

  if (loading) return (
    <div style={{ padding: '100px', textAlign: 'center', backgroundColor: '#000', color: '#fff', height: '100vh' }}>
      <h2 style={{ letterSpacing: '4px' }}>SYNCHRONIZING GENESIS ANCHOR...</h2>
    </div>
  );

  if (!persona) return (
    <div style={{ padding: '100px', textAlign: 'center', backgroundColor: '#000', color: '#fff', height: '100vh' }}>
      <h2>IDENTITY NOT FOUND</h2>
      <button onClick={() => navigate('/search')}>RETURN TO REGISTRY</button>
    </div>
  );

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', fontFamily: "'Courier New', monospace" }}>
      <nav style={{ padding: '25px 40px', borderBottom: '1px solid #222', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, backgroundColor: '#000', zIndex: 100 }}>
        <button onClick={() => navigate(-1)} style={{ background: 'none', border: '1px solid #facc15', color: '#facc15', cursor: 'pointer', padding: '8px 20px' }}>← EXIT HUB</button>
        <div style={{ letterSpacing: '8px', fontWeight: '900', color: '#facc15' }}>IDENTITY_HUB // {persona.name.toUpperCase()}</div>
      </nav>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px' }}>
        <section style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{ border: '4px solid #facc15', position: 'relative', maxWidth: '950px', margin: '0 auto' }}>
            <video autoPlay loop muted playsInline style={{ width: '100%', height: '534px', objectFit: 'cover' }}>
              <source src={persona.videoUrl} type="video/mp4" />
            </video>
            {!persona.isClaimed && (
              <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <h3 style={{ color: '#facc15' }}>UNCLAIMED PUBLIC PROFILE</h3>
                <button style={{ backgroundColor: '#facc15', color: '#000', border: 'none', padding: '15px 30px', fontWeight: '900', cursor: 'pointer' }}>CLAIM THIS IDENTITY</button>
              </div>
            )}
          </div>
          <h1 style={{ fontSize: '64px', fontWeight: '900', marginTop: '30px' }}>{persona.name}</h1>
          <p style={{ color: '#facc15', letterSpacing: '4px' }}>{persona.title}</p>
        </section>

        <section style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '50px' }}>
          <div>
            <h3 style={{ color: '#facc15' }}>[IDENTITY_BIO]</h3>
            <p style={{ fontSize: '18px', lineHeight: '1.8' }}>{persona.bio}</p>
            
            {/* NEW PUBLIC DATA FIELDS */}
            <div style={{ marginTop: '40px', padding: '20px', border: '1px solid #333' }}>
              <p><strong>📍 LOCATION:</strong> {persona.address || 'GLOBAL INDEX'}</p>
              <p><strong>📞 CONTACT:</strong> {persona.phone || 'ENCRYPTED'}</p>
              {persona.website && (
                <p><strong>🌐 WEB:</strong> <a href={persona.website} target="_blank" style={{ color: '#facc15' }}>{persona.website}</a></p>
              )}
            </div>
          </div>

          <div>
            <h3 style={{ color: '#facc15' }}>[SYSTEM_METRICS]</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {persona.achievements.map((item: any, i: number) => (
                <li key={i} style={{ padding: '15px', borderLeft: '3px solid #facc15', backgroundColor: '#0a0a0a', marginBottom: '10px' }}>▷ {item}</li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}