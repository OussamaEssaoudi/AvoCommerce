import React, { useState } from 'react';
import './ProduitsListe.css';
import right from './../img/right.png';
import left from './../img/left.png';
import Produit from './Produit';


function ProduitsListe(props) {


  const [currentItems, setCurrentItems] = useState(0);
  
  function handleProductChange(newValue) {
    props.onChange(newValue);
  }
  const nextPage = () => {
    if (props.produits.length > currentItems+6) setCurrentItems(currentItems+6);
  }
  
  const previousPage = () => {
    if (currentItems !== 0) setCurrentItems(currentItems-6);
  }

  const list = []

  for(let i = currentItems ; i < (currentItems+6) ; i++){
    list.push(props.produits[i] ? (<Produit key={props.produits[i].id} id={(props.produits[i].id)*10}  nom={props.produits[i].nom} prix={props.produits[i].prix} onChange={handleProductChange} />) : (<div  key={i*10} className='emptyProduit mb-5'></div>))
  }

  return (
    <div>
        <div className="grid grid-cols-3">
        {list}
        </div>
        <div className='flex justify-center'>
          <img alt='previous' src={left} className={'mr-6 cursor-pointer' + (currentItems !== 0 ? '' : 'pointer-events-none opacity-50')} onClick={previousPage}/>
          <img alt='next' src={right} className={(props.produits.length > currentItems+6 ? 'cursor-pointer' : 'pointer-events-none opacity-50')} onClick={nextPage}/>
        </div>
    </div>
  );
}

export default ProduitsListe;
