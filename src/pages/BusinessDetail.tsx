import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';

export default function EntityDetail() {
  const { id } = useParams();
  const [entity, setEntity] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getEntityDetails = async () => {
      try {
        const { data, error } = await supabase
          .from('businesses')
          .select('id, name, description, jurisdiction, entity_type')
          .eq('id', id)
          .single();

        if (error) throw error;
        setEntity(data);
      } catch (err) {
        console.error("❌ ERROR FETCHING IDENTITY:", err);
      } finally {
        setLoading(false);
      }
    };
    getEntityDetails();
  }, [id]);

  if (loading) return <div style={{ padding: '50px', textAlign: 'center' }}>DECRYPTING...</div>;
  if (!entity) return <div style={{ padding: '50px', textAlign: 'center' }}>IDENTITY NOT FOUND</div>;

  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <Link to="/search" style={{ color: '#000', fontWeight: 'bold' }}>← RETURN TO REGISTRY</Link>
      
      <div style={{ marginTop: '40px', border: '5px solid #000', padding: '40px', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '-15px', right: '20px', backgroundColor: '#facc15', padding: '5px 15px', fontWeight: '900', border: '2px solid #000' }}>
          VERIFIED IDENTITY
        </div>
        
        <h1 style={{ fontSize: '3rem', margin: 0, fontWeight: '900' }}>{entity.name?.toUpperCase()}</h1>
        <p style={{ color: '#666', fontWeight: 'bold', margin: '10px 0' }}>
          {entity.entity_type} // {entity.jurisdiction}
        </p>
        
        <hr style={{ border: '1px solid #eee', margin: '30px 0' }} />
        
        <h3 style={{ textTransform: 'uppercase', fontSize: '12px', letterSpacing: '2px' }}>Operational Briefing</h3>
        <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
          {entity.description || "No legacy documentation found for this specific entity registry."}
        </p>
      </div>
    </div>
  );
}