import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './Pages/Home';
import EndpointPage from './Pages/EndpointPage';
import './styles/main.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/endpoint/:id" element={<EndpointPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
