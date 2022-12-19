import React from 'react';
import './BoutiquesListe.css';
import logo from './avocado.png';
import Header from './Header';
import Filter from './Filter';

function BoutiquesListe() {
  return (
   <div className='h-screen'>
      <Header/>
      <div className='flex items-center mx-10 mt-4'>
        <div className='title'>Bonjour Oussama, voici vos boutiques !</div>
        <div className='ml-auto'>
          <button className='mr-6'>Gérer les catégories</button>
          <button>Créer une boutique</button>
        </div>
      </div>
      <Filter/>
   </div> 
  );
}

export default BoutiquesListe;
