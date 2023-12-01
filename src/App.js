import React from 'react';
import './App.css';
import { Header } from './modules/header/Header.js';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
