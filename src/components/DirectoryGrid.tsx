import React from 'react';

const US_STATES = [
  'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 
  'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 
  'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 
  'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 
  'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
];

const GLOBAL_NETWORK = [
  'UK', 'CAN', 'MEX', 'FRA', 'GER', 'JPN', 'AUS', 'BRA', 'IND', 'NGA', 
  'ZAF', 'ARE', 'KSA', 'ITA', 'ESP', 'KOR', 'CHN', 'RUS', 'ISR', 'EGY'
];

export const DirectoryGrid = () => {
  const renderGrid = (items: string[], type: 'state' | 'country') => (
    <div className="flex flex-wrap justify-center gap-2 md:gap-3 px-4">
      {items.map((item) => (
        <a
          key={item}
          href={`/directory/${item.toLowerCase()}`}
          className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-yellow-500/20 bg-black/50 text-[10px] md:text-xs font-mono text-yellow-500 hover:bg-yellow-500 hover:text-black hover:border-yellow-400 transition-all duration-200"
        >
          {item}
        </a>
      ))}
    </div>
  );

  return (
    <div className="w-full py-12 space-y-12">
      {/* US Section */}
      <section className="text-center">
        <h2 className="text-sm tracking-[0.3em] font-bold text-gray-400 mb-6 uppercase">
          United States Coverage
        </h2>
        {renderGrid(US_STATES, 'state')}
      </section>

      {/* Global Section */}
      <section className="text-center">
        <h2 className="text-sm tracking-[0.3em] font-bold text-gray-400 mb-6 uppercase">
          Global Kin Network
        </h2>
        {renderGrid(GLOBAL_NETWORK, 'country')}
      </section>

      {/* Corporate Registry Anchor */}
      <section className="text-center pt-8 border-t border-yellow-500/10">
        <a 
          href="/registry/corporate"
          className="text-xs tracking-widest text-yellow-600 hover:text-yellow-400 font-bold uppercase transition-colors"
        >
          Access Corporate Registry Archive →
        </a>
      </section>
    </div>
  );
};