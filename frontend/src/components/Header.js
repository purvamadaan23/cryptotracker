import React from 'react';

function Header({ currency, setCurrency }) {
  return (
    <div className="p-4 bg-gray-800">
      <h1 className="text-2xl font-bold text-center">HODLINFO</h1>
      <div className="flex justify-around mt-4">
        <span>0.1% (5 Mins)</span>
        <span>0.96% (1 Hour)</span>
        <span>2.73% (1 Day)</span>
        <span>7.51% (7 Days)</span>
      </div>
      <div className="mt-4 flex justify-center">
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="bg-gray-700 p-2 rounded"
        >
          <option value="INR">INR</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
        </select>
      </div>
    </div>
  );
}

export default Header;
