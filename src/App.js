import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Boutiques from './Boutiques';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Boutiques />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
