import React, { useState } from 'react';
import Boutique from './Boutique';
import './BoutiquesListe.css';
import right from './../img/right.png';
import left from './../img/left.png';


function BoutiquesListe(props) {


  const [currentItems, setCurrentItems] = useState(0);
  
  function handleStoreChange(newValue) {
    props.onChange(newValue);
  }

  const nextPage = () => {
    if (props.boutiques.length > currentItems+1) setCurrentItems(currentItems+2);
  }
  
  const previousPage = () => {
    if (currentItems !== 0) setCurrentItems(currentItems-2);
  }

  return (
    <div>
      
        {props.boutiques[currentItems] ? (<Boutique id={props.boutiques[currentItems].id}  nom={props.boutiques[currentItems].title} nbProduit={props.boutiques[currentItems].products ? (props.boutiques[currentItems].products.length) : 0} nbCategorie={props.boutiques[currentItems].categories ? (props.boutiques[currentItems].categories.length) : 0} status={props.boutiques[currentItems].isOpen} date={props.boutiques[currentItems].createdAt} onChange={handleStoreChange} produits={props.boutiques[currentItems].products} />) : (null)}
        {props.boutiques[currentItems+1] ? (<Boutique key={props.boutiques[currentItems+1].id} id={props.boutiques[currentItems+1].id}  nom={props.boutiques[currentItems+1].nom} nbProduit={props.boutiques[currentItems+1].nbProduit} nbCategorie={props.boutiques[currentItems+1].nbCategorie} status={props.boutiques[currentItems+1].status} date={props.boutiques[currentItems+1].date} onChange={handleStoreChange} produits={props.boutiques[currentItems].produits} />) : (<div className='emptyBoutique mb-5'></div>)}
        
        <div className='flex justify-center'>
          <img alt='previous' src={left} className={'mr-6 cursor-pointer' + (currentItems !== 0 ? '' : 'pointer-events-none opacity-50')} onClick={previousPage}/>
          <img alt='next' src={right} className={(props.boutiques.length > currentItems+1 ? 'cursor-pointer' : 'pointer-events-none opacity-50')} onClick={nextPage}/>
        </div>
    </div>
  );
}

export default BoutiquesListe;
