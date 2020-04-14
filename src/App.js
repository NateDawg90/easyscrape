import React from 'react';
import './assets/App.css';
import Sidebar from './components/Sidebar/sidebar.js';
import Header from './components/Header/header.js';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <Header name='JP'/>
    </div>
  );
}

export default App;
