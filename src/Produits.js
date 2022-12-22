import React from 'react';
import './Produits.css';
import Header from './Header';
import langue from './i18.png';
import BoutiquesListe from './BoutiquesListe';
import ProduitsListe from './ProduitsListe';

function Produits() {
  return (
   <div className='h-screen'>

      <Header/>

      <div className='flex items-center mx-10 mt-4'>
        <div className='title'>Voici les produits de boutique 1 !</div>
        <div className='ml-auto'>
          <button className='greenButton'>Ajouter un produit</button>
        </div>
      </div>


      <div className='flex mx-10 mt-4'>
        <div className='flex flex-col w-full'>
          <div className='flex flex-row mb-5'>
            <div className='trie flex mr-5'>
              <input
                id="4"
                // onChange={handleInputAfterChange}
                // value={selectedAfterDate}
                type="search"
                placeholder='nom du produit'
                className='search pl-3'
              />
              <button type="submit">Search</button>
            </div>
            <div className='trie'>
              <select name="trie" className='search pl-2'>
                  <option value="">categorie</option>
                  <option value="nbrde">nombre de </option>
              </select>
            </div>
            <img alt='langue' src={langue} className='ml-auto w-6 h-6'/>
          </div>
          
          <ProduitsListe />
        </div>
        
      </div>

   </div> 
  );
}

export default Produits;
