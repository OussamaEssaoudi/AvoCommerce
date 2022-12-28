import React, { useState } from 'react';
import './Categorie.css';


function Categorie(props) {


  function handleCategorieChange(newValue) {
    props.onChange(newValue);
  }

  return (
    <div className="categorie flex flex-col px-10 pt-5 mb-10 cursor-pointer" onClick={() => {handleCategorieChange(props.id)}}>

      <div className='categorieTitle'>{props.nom}</div>

    </div>
  );
}

export default Categorie;
