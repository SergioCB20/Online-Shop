import React from 'react';
import { useState, useEffect } from 'react';
import { Tienda } from './components/Pages/Tienda/Tienda';
import {Routes,Route,BrowserRouter} from 'react-router-dom';
import { Navbar } from './components/Extra/Navbar';
import { Home } from './components/Pages/HomePage/Home';
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Tienda" element={<Tienda/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
