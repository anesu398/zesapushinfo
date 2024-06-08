// src/components/IoTIntegration.js
import { useEffect, useState } from 'react';

const IoTIntegration = () => {
  const [iotData, setIoTData] = useState(null);

  useEffect(() => {
    fetch('/api/iot')
      .then(response => response.json())
      .then(data => setIoTData(data));
  }, []);

  return (
    <div>
      <h2>IoT Data</h2>
      {iotData ? (
        <pre>{JSON.stringify(iotData, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default IoTIntegration;
