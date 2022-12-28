import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './Boutique.css';


function Boutique(props) {

  function handleStoreChange(newValue) {
    props.onChange(newValue);
  }
  

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
          <Link to="/produits" state={{ produits: props.produits }}>
            <button className='storeButton'>Ouvrir</button>
          </Link>
          <button className='ml-5 storeButton' onClick={() => {handleStoreChange(props.id)}}>Modifier</button>
        </div>

     </div>
    </div>
  );
}

export default Boutique;
