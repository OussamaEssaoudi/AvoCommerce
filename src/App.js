import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Boutiques from './Boutiques';
import './App.css';
import Produits from './Produits';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Boutiques />} />
          <Route exact path="/produits" element={<Produits />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
