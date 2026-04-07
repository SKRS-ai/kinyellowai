import React from 'react';

export default function LawTable() {
  return (
    <div className="bg-black/50 p-4 border border-yellow-500/30 rounded">
      <h2 className="text-yellow-500 font-mono mb-2">JURISDICTION_RECORDS</h2>
      <table className="w-full text-white text-xs">
        <thead>
          <tr className="border-b border-white/20">
            <th className="text-left p-1">ID</th>
            <th className="text-left p-1">STATUS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-1">#8821</td>
            <td className="p-1 text-green-400">ACTIVE</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}