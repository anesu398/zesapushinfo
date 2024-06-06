import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/endpoint/:id" component={EndpointPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
