import React, { useState } from 'react';
import Boutique from './Boutique';
import './ProduitsListe.css';
import right from './right.png';
import left from './left.png';
import Produit from './Produit';


function ProduitsListe() {

  let Produits = [
    {
      id: 0,
      nom: "Produit 1",
      prix: "29",
    },
    {
      id: 1,
      nom: "Produit 2",
      prix: "29",
    },
    {
      id: 2,
      nom: "Produit 3",
      prix: "29",
    },
    {
      id: 3,
      nom: "Produit 1",
      prix: "29",
    },
    {
      id: 4,
      nom: "Produit 2",
      prix: "29",
    },
    {
      id: 5,
      nom: "Produit 3",
      prix: "29",
    },
    {
      id: 6,
      nom: "Produit 4",
      prix: "29",
    },
  ];

  const [currentItems, setCurrentItems] = useState(0);
  
  const nextPage = () => {
    if (Produits.length > currentItems+5) setCurrentItems(currentItems+6);
  }
  
  const previousPage = () => {
    if (currentItems !== 0) setCurrentItems(currentItems-6);
  }

  return (
    <div>
        <div className="grid grid-cols-3">
        {Produits[currentItems] ? (<Produit id={Produits[currentItems].id}  nom={Produits[currentItems].nom} prix={Produits[currentItems].prix} />) : (<div className='emptyProduit mb-5'></div>)}
        {Produits[currentItems+1] ? (<Produit id={Produits[currentItems+1].id}  nom={Produits[currentItems+1].nom} prix={Produits[currentItems+1].prix}  />) : (<div className='emptyProduit mb-5'></div>)}
        {Produits[currentItems+2] ? (<Produit id={Produits[currentItems+2].id}  nom={Produits[currentItems+2].nom} prix={Produits[currentItems+2].prix}  />) : (<div className='emptyProduit mb-5'></div>)}
        {Produits[currentItems+3] ? (<Produit id={Produits[currentItems+3].id}  nom={Produits[currentItems+3].nom} prix={Produits[currentItems+3].prix}  />) : (<div className='emptyProduit mb-5'></div>)}
        {Produits[currentItems+4] ? (<Produit id={Produits[currentItems+4].id}  nom={Produits[currentItems+4].nom} prix={Produits[currentItems+4].prix}  />) : (<div className='emptyProduit mb-5'></div>)}
        {Produits[currentItems+5] ? (<Produit id={Produits[currentItems+5].id}  nom={Produits[currentItems+5].nom} prix={Produits[currentItems+5].prix}  />) : (<div className='emptyProduit mb-5'></div>)}
        </div>
        <div className='flex justify-center'>
          <img alt='previous' src={left} className={'mr-6 cursor-pointer' + (currentItems !== 0 ? '' : 'pointer-events-none opacity-50')} onClick={previousPage}/>
          <img alt='next' src={right} className={(Produits.length > currentItems+1 ? 'cursor-pointer' : 'pointer-events-none opacity-50')} onClick={nextPage}/>
        </div>
    </div>
  );
}

export default ProduitsListe;
