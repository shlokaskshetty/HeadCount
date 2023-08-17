import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './index.css';
import Login from './Login'; 
import Header from './header';
import Home from './Home'; 
import Table from './table';
import Dashboards from './Dashboards';

function App() {
  return (
    <div className="App bg-gradient">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<div><Header /><Home /></div>} />
        <Route path="/table" element={<div><Header /><Table /></div>} />
        <Route path="/dashboards" element={<div><Header /><Dashboards /></div>} />
      </Routes>
    </div>
  );
}

export default App;
