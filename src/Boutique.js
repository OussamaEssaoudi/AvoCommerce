import React, { useState } from 'react';
import './Boutique.css';


function Boutique(props) {



  return (
    <div className="boutique flex flex-col px-10 pt-5 mb-5">

      <div className='flex flex-row'>

        <div className='storeTitle'>{props.nom}</div>

        <div className='flex flex-col ml-auto mt-5'>
          <div className='title3'>{props.status}</div>
          <div className='title3 pt-5'>{props.date}</div>
        </div>

     </div>

     <div className='flex flex-row'>

        <div className='flex flex-col'>
          <div className='title4'>Produits</div>
          <div className='number'>{props.nbProduit}</div>
        </div>

        <div className='flex flex-col ml-10'>
          <div className='title4'>Catégories</div>
          <div className='number'>{props.nbCategorie}</div>
        </div>

        <div className='ml-auto mt-10'>
          <button className='storeButton'>Ouvrir</button>
          <button className='ml-5 storeButton'>Modifier</button>
        </div>

     </div>
    </div>
  );
}

export default Boutique;
