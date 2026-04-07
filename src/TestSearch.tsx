import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function TestSearch() {
  const [results, setResults] = useState<any[]>([]);
  const [status, setStatus] = useState('Initializing Test...');
  const [debugInfo, setDebugInfo] = useState('');

  useEffect(() => {
    async function runDiagnostic() {
      try {
        setStatus('Connecting to Supabase...');
        
        // 1. We are looking for 'SONY' (Case Sensitive check)
        // Ensure you ran the SQL: INSERT INTO businesses (name) VALUES ('SONY');
        const { data, error, status: httpStatus } = await supabase
          .from('businesses')
          .select('*')
          .eq('name', 'SONY');

        setDebugInfo(`HTTP Status: ${httpStatus}`);

        if (error) {
          setStatus(`ERROR: ${error.message}`);
          console.error('Supabase Error:', error);
        } else if (data && data.length > 0) {
          setResults(data);
          setStatus('✅ SUCCESS: SONY Found in Database!');
        } else {
          setStatus('❌ FAILED: Connection worked, but SONY is missing from the table.');
        }
      } catch (err: any) {
        setStatus(`CRITICAL FAILURE: ${err.message}`);
      }
    }

    runDiagnostic();
  }, []);

  return (
    <div style={{ 
      padding: '40px', 
      backgroundColor: '#111', 
      color: '#fff', 
      minHeight: '100vh',
      fontFamily: 'monospace' 
    }}>
      <h1 style={{ color: '#facc15' }}>Terminal: Database Diagnostic</h1>
      <hr style={{ borderColor: '#333' }} />
      
      <div style={{ margin: '20px 0', padding: '20px', border: '1px solid #facc15' }}>
        <p style={{ fontSize: '1.2rem' }}>Status: <strong>{status}</strong></p>
        <p>Debug: {debugInfo}</p>
      </div>

      <h3>Raw Data Result:</h3>
      <pre style={{ 
        backgroundColor: '#000', 
        padding: '15px', 
        border: '1px solid #333',
        overflowX: 'auto' 
      }}>
        {results.length > 0 ? JSON.stringify(results, null, 2) : 'No data to display'}
      </pre>

      <div style={{ marginTop: '30px', color: '#888', fontSize: '0.8rem' }}>
        <p>Target Table: <strong>businesses</strong></p>
        <p>Target Column: <strong>name</strong></p>
        <p>Target Value: <strong>SONY</strong></p>
      </div>
    </div>
  );
}