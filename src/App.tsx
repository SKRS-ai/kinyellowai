import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import ResultsPage from './components/ResultsPage';
import StarterPage from './components/StarterPage'; 
import TacticalMap from './components/TacticalMap'; // NEW IMPORT
import Footer from './components/Footer';
import Exa from "exa-js";

const exa = new Exa("79297709-2dae-4103-8635-2b8069afe3d1");

const App: React.FC = () => {
  const [results, setResults] = useState<any[]>([]);
  const [query, setQuery] = useState('');
  const [searchMode, setSearchMode] = useState<'DIRECTORY' | 'WORLDWIDE' | 'ALL'>('WORLDWIDE');
  const [isLoading, setIsLoading] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();

  // Reset app state when returning to home via Logo
  useEffect(() => {
    if (location.pathname === '/') {
      setResults([]);
      setQuery('');
    }
  }, [location.pathname]);

  const executeSearch = async (searchQuery: string, mode: 'DIRECTORY' | 'WORLDWIDE' | 'ALL') => {
    if (!searchQuery) return;
    
    setQuery(searchQuery);
    setSearchMode(mode);
    setIsLoading(true);
    
    // Move to results page if we aren't there
    if (location.pathname !== '/results') {
      navigate('/results');
    }

    try {
      let combinedResults: any[] = [];

      // EXA / WORLDWIDE STREAM
      if (mode === 'WORLDWIDE' || mode === 'ALL') {
        const response = await exa.search(searchQuery, { type: "auto", numResults: 15 });
        const formatted = response.results.map((r: any) => ({
          title: r.title || 'Sovereign Result',
          url: r.url,
          snippet: r.highlights?.[0] || 'Neural data captured.',
          source: 'WORLDWIDE'
        }));
        combinedResults = [...combinedResults, ...formatted];
      }

      // GOOGLE / DIRECTORY STREAM
      if (mode === 'DIRECTORY' || mode === 'ALL') {
        const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyAT0-NXFmnCJjD8wV-F43X7ktS8hbAsptQ&cx=d30d65e3b6f1a4707&q=${searchQuery}`);
        const data = await response.json();
        const formatted = (data.items || []).map((r: any) => ({
          title: r.title,
          url: r.link,
          snippet: r.snippet,
          source: 'DIRECTORY'
        }));
        combinedResults = [...combinedResults, ...formatted];
      }

      setResults(combinedResults);
    } catch (e) { 
      console.error("Search Logic Error:", e); 
    } finally { 
      setIsLoading(false); 
    }
  };

  // Check if we are on the full-page map to hide the standard Footer
  const isMapPage = location.pathname === '/map';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: '#fff' }}>
      <Header 
        onSearch={executeSearch} 
        currentMode={searchMode} 
        setMode={setSearchMode}
        isLoggedIn={false}
      />

      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={
            <StarterPage onSearch={executeSearch} currentMode={searchMode} setMode={setSearchMode} />
          } />
          <Route path="/results" element={
            <ResultsPage results={results} query={query} isLoading={isLoading} />
          } />
          
          {/* NEW TACTICAL ROUTE */}
          <Route path="/map" element={<TacticalMap />} />
        </Routes>
      </main>

      {/* Hide footer on full-screen map for a cleaner Tactical UI */}
      {!isMapPage && <Footer />}
    </div>
  );
};

export default App;