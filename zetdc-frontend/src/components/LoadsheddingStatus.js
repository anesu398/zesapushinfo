import { useEffect, useState } from 'react';

function LoadsheddingStatus() {
  const [statuses, setStatuses] = useState([]);

  useEffect(() => {
    fetch('/api/loadshedding-status')
      .then(response => response.json())
      .then(data => setStatuses(data));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Loadshedding Status</h2>
      <ul>
        {statuses.map(status => (
          <li key={status.id} className="mb-2">
            <div className="p-4 border rounded shadow">
              <h3 className="text-xl font-bold">{status.suburb}</h3>
              <p>Status: {status.status}</p>
              <p>Stage: {status.stage}</p>
              <p>Start Time: {status.startTime}</p>
              <p>End Time: {status.endTime}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LoadsheddingStatus;
