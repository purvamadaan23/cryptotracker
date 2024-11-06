import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Table from './components/Table';

function App() {
  const [data, setData] = useState([]);
  const [currency, setCurrency] = useState('INR');

  useEffect(() => {
    axios.get('http://localhost:10000/api/top10') // Ensure this matches the backend server's port
      .then(response => {
        setData(response.data);
        console.log('Data fetched:', response.data); // Debugging log
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header currency={currency} setCurrency={setCurrency} />
      <Table data={data} currency={currency} />
    </div>
  );
}

export default App;


