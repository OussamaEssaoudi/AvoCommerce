import React, { useState } from 'react';
import './Produit.css';


function Produit(props) {

  function handleProductChange() {
    let product = {
      id : props.id,
      title : props.nom,
      description : props.description,
      price : props.prix,
      categories : props.categories,
    }
    props.onChange(product);
  }

  return (
    <div className="produit flex flex-col px-10 pt-5 mb-5 cursor-pointer" onClick={() => {handleProductChange()}}>

      {props.nom && (<div className='storeTitle'>{props.lang === "fr" ? props.nom.fr : props.nom.en}</div>)}


      <div className='flex flex-col'>
        <div className='title4'>Prix</div>
        <div className='number'>{props.prix} $</div>
      </div>

        

    </div>
  );
}

export default Produit;
