import React from 'react';

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-20 pb-10 bg-white">
      <h1 className="text-7xl font-bold text-slate-900 mb-8">kinyellow</h1>
      
      <div className="w-full max-w-2xl px-4">
        <div className="relative group">
          <input 
            type="text" 
            placeholder="Every business has a story. Find yours..." 
            className="w-full py-4 px-6 rounded-full border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all text-lg"
          />
          <span className="absolute right-6 top-1/2 -translate-y-1/2 text-yellow-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>
          </span>
        </div>
        
        <div className="flex gap-4 justify-center mt-8">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-8 rounded-lg shadow-md transition-colors">
            Search Directory
          </button>
          <button className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-semibold py-2 px-8 rounded-lg shadow-sm transition-colors">
            Trending: Black-Owned
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
