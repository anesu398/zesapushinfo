import React, { useEffect, useState } from 'react';
import axios from 'axios';

function EndpointPage({ match }) {
  const { id } = match.params;
  const [endpointData, setEndpointData] = useState(null);

  useEffect(() => {
    axios.get(`https://api.example.com/endpoints/${id}`)
      .then(response => {
        setEndpointData(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the endpoint data!', error);
      });
  }, [id]);

  if (!endpointData) return <p>Loading...</p>;

  return (
    <div className="endpoint-page">
      <h2>Endpoint {id}</h2>
      <pre>{JSON.stringify(endpointData, null, 2)}</pre>
    </div>
  );
}

export default EndpointPage;
