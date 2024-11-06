import React from 'react';

function Table({ data, currency }) {
  const formatPrice = (price) => {
    if (currency === 'USD') {
      return (price / 80).toLocaleString(undefined, { style: 'currency', currency: 'USD' }); // Approx conversion to USD
    } else if (currency === 'EUR') {
      return (price / 90).toLocaleString(undefined, { style: 'currency', currency: 'EUR' }); // Approx conversion to EUR
    }
    return price.toLocaleString(undefined, { style: 'currency', currency: 'INR' });
  };

  return (
    <div className="overflow-x-auto mt-8">
      <table className="w-full border-collapse text-sm shadow-lg">
        <thead>
          <tr className="bg-gray-800 text-gray-300">
            <th className="p-4 border-b border-gray-700">#</th>
            <th className="p-4 border-b border-gray-700">Platform</th>
            <th className="p-4 border-b border-gray-700">Last Traded Price</th>
            <th className="p-4 border-b border-gray-700">Buy / Sell Price</th>
            <th className="p-4 border-b border-gray-700">Volume</th>
            <th className="p-4 border-b border-gray-700">Base Unit</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.name} className={`text-center ${index % 2 === 0 ? 'bg-gray-700' : 'bg-gray-800'} hover:bg-gray-600`}>
              <td className="p-4 border-b border-gray-700">{index + 1}</td>
              <td className="p-4 border-b border-gray-700">{item.name}</td>
              <td className="p-4 border-b border-gray-700">₹ {formatPrice(item.last)}</td>
              <td className="p-4 border-b border-gray-700">₹ {formatPrice(item.buy)} / ₹ {formatPrice(item.sell)}</td>
              <td className="p-4 border-b border-gray-700">{item.volume.toLocaleString()}</td>
              <td className="p-4 border-b border-gray-700">{item.base_unit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;

