import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function EndpointList({ searchQuery }) {
  const [endpoints, setEndpoints] = useState([]);
  const [filteredEndpoints, setFilteredEndpoints] = useState([]);

  useEffect(() => {
    // Mock data to replace Firebase data
    const mockData = [
      { id: 1, name: 'Get User Data' },
      { id: 2, name: 'Create New User' },
      { id: 3, name: 'Update User Data' },
      { id: 4, name: 'Delete User' },
      { id: 5, name: 'List All Users' },
    ];
    
    setEndpoints(mockData);
    setFilteredEndpoints(mockData);
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
