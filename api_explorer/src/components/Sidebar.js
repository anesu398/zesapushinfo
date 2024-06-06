import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  const [endpoints, setEndpoints] = useState([
    { id: 1, name: 'Get User Data' },
    { id: 2, name: 'Create New User' },
    { id: 3, name: 'Update User Data' },
    { id: 4, name: 'Delete User' },
    { id: 5, name: 'List All Users' },
  ]);

  return (
    <aside className="sidebar">
      {endpoints.map(endpoint => (
        <Link key={endpoint.id} to={`/endpoint/${endpoint.id}`}>
          {endpoint.name}
        </Link>
      ))}
    </aside>
  );
}

export default Sidebar;
