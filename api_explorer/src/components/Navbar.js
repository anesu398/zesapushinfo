import React, { useState } from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #333;
  color: white;
  padding: 1rem;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Input = styled.input`
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

function Navbar({ onSearch }) {
  const [search, setSearch] = useState('');

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearch(value);
    onSearch(value);
  };

  return (
    <Nav>
      <h1>API Explorer</h1>
      <Input 
        type="text" 
        placeholder="Search endpoints..." 
        value={search} 
        onChange={handleSearch} 
      />
    </Nav>
  );
}

export default Navbar;
