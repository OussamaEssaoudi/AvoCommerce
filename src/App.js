import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BoutiquesListe from './BoutiquesListe';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<BoutiquesListe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
