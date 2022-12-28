import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Boutiques from './Boutiques/Boutiques';
import './App.css';
import Produits from './Produits/Produits';
import Categories from './Categories/Categories';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Boutiques />} />
          <Route exact path="/produits" element={<Produits />} />
          <Route exact path="/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
