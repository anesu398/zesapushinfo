import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../firebase';

function Sidebar({ searchQuery }) {
  const [endpoints, setEndpoints] = useState([]);
  const [filteredEndpoints, setFilteredEndpoints] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection('endpoints').onSnapshot(snapshot => {
      const endpointsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setEndpoints(endpointsData);
      setFilteredEndpoints(
        endpointsData.filter(endpoint =>
          endpoint.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    });

    return () => unsubscribe();
  }, [searchQuery]);

  return (
    <aside className="sidebar">
      {filteredEndpoints.map(endpoint => (
        <Link key={endpoint.id} to={`/endpoint/${endpoint.id}`}>
          {endpoint.name}
        </Link>
      ))}
    </aside>
  );
}

export default Sidebar;
