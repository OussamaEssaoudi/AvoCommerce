import React, { useState } from 'react';
import Boutique from './Boutique';
import './BoutiquesListe.css';
import right from './right.png';
import left from './left.png';


function BoutiquesListe() {

  let Boutiques = [
    {
      id: 0,
      nom: "Boutique 1",
      nbProduit: "24",
      nbCategorie: "03",
      status: "En congé",
      date: "09 Dec, 2022",
    },
    {
      id: 1,
      nom: "Boutique 2",
      nbProduit: "32",
      nbCategorie: "07",
      status: "Ouvert",
      date: "15 Dec, 2022",
    },{
      id: 2,
      nom: "Boutique 3",
      nbProduit: "24",
      nbCategorie: "03",
      status: "En congé",
      date: "09 Dec, 2022",
    },
  ];

  const [currentItems, setCurrentItems] = useState(0);
  
  const nextPage = () => {
    if (Boutiques.length > currentItems+1) setCurrentItems(currentItems+2);
  }
  
  const previousPage = () => {
    if (currentItems !== 0) setCurrentItems(currentItems-2);
  }

  return (
    <div>
      
        {Boutiques[currentItems] ? (<Boutique id={Boutiques[currentItems].id}  nom={Boutiques[currentItems].nom} nbProduit={Boutiques[currentItems].nbProduit} nbCategorie={Boutiques[currentItems].nbCategorie} status={Boutiques[currentItems].status} date={Boutiques[currentItems].date} />) : (null)}
        {Boutiques[currentItems+1] ? (<Boutique id={Boutiques[currentItems+1].id}  nom={Boutiques[currentItems+1].nom} nbProduit={Boutiques[currentItems+1].nbProduit} nbCategorie={Boutiques[currentItems+1].nbCategorie} status={Boutiques[currentItems+1].status} date={Boutiques[currentItems+1].date} />) : (<div className='emptyBoutique mb-5'></div>)}
        
        <div className='flex justify-center'>
          <img alt='previous' src={left} className={'mr-6 cursor-pointer' + (currentItems !== 0 ? '' : 'pointer-events-none opacity-50')} onClick={previousPage}/>
          <img alt='next' src={right} className={(Boutiques.length > currentItems+1 ? 'cursor-pointer' : 'pointer-events-none opacity-50')} onClick={nextPage}/>
        </div>
    </div>
  );
}

export default BoutiquesListe;
