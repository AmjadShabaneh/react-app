import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Cart from './pages/Cart';

const App = () => {
 

  return (
    <div>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Home />
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={
          <>
            <Navbar />
            <Cart />
          </>
        } />
      </Routes>
    </div>
  );
};

export default App;