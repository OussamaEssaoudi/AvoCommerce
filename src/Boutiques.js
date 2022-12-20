import React from 'react';
import './Boutiques.css';
import Header from './Header';
import Filter from './Filter';
import BoutiquesListe from './BoutiquesListe';

function Boutiques() {
  return (
   <div className='h-screen'>

      <Header/>

      <div className='flex items-center mx-10 mt-4'>
        <div className='title'>Bonjour Oussama, voici vos boutiques !</div>
        <div className='ml-auto'>
          <button className='greenButton mr-6'>Gérer les catégories</button>
          <button className='greenButton'>Créer une boutique</button>
        </div>
      </div>


      <div className='flex mx-10 mt-4'>
        <Filter/>
        <div className='flex flex-col ml-10 w-full'>
          <div className='trie mb-5'>
            <label className='pl-3'>trier par</label>
            <select name="trie" className='pl-2'>
                <option value="nbr">nombre de produits</option>
                <option value="nbrde">nombre de </option>
            </select>
          </div>
          <BoutiquesListe />
        </div>
        
      </div>

   </div> 
  );
}

export default Boutiques;
