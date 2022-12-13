import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BoutiqueListe from './BoutiquesListe';
import logo from './logo.png';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<BoutiqueListe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
