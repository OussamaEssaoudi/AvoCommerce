import React, { useState } from 'react';
import './Produit.css';


function Produit(props) {

  function handleProductChange(newValue) {
    props.onChange(newValue);
  }

  return (
    <div className="produit flex flex-col px-10 pt-5 mb-5 cursor-pointer" onClick={() => {handleProductChange(props.id)}}>

      <div className='storeTitle'>{props.nom}</div>


      <div className='flex flex-col'>
        <div className='title4'>Prix</div>
        <div className='number'>{props.prix} $</div>
      </div>

        

    </div>
  );
}

export default Produit;
