import React, { useEffect, useState } from 'react';
import OrderDetails from '@/components/OrderData/OrderData';
import axios from 'axios';

const MyFormComponent: React.FC = () => {
  const [apiData, setApiData] = useState<any>(null); 

  useEffect(() => {
    // Make API call when component mounts
    axios.get('http://localhost:8080')
      .then(response => {
        console.log('Response from API:', response.data);
        setApiData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data from API:', error);
      });
  }, []); // Empty dependency array ensures that this effect runs only once when the component mounts

  return (
    <div className="App">
      {apiData && <OrderDetails order={apiData} />} {/* Render OrderDetails only when apiData is available */}
    </div>
  );
};

export default MyFormComponent;
