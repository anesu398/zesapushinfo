import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../firebase';

function EndpointList({ searchQuery }) {
  const [endpoints, setEndpoints] = useState([]);
  const [filteredEndpoints, setFilteredEndpoints] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection('endpoints').onSnapshot(snapshot => {
      const endpointsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setEndpoints(endpointsData);
      setFilteredEndpoints(endpointsData);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    setFilteredEndpoints(
      endpoints.filter(endpoint =>
        endpoint.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, endpoints]);

  return (
    <div className="endpoint-list">
      {filteredEndpoints.map(endpoint => (
        <Link key={endpoint.id} to={`/endpoint/${endpoint.id}`}>
          {endpoint.name}
        </Link>
      ))}
    </div>
  );
}

export default EndpointList;
