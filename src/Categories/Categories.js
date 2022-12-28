import React, { useState } from 'react';
import './Categories.css';
import Header from '../Header';
import langue from './../img/i18.png';
import CategoriesListe from './CategoriesListe';
import PopUpCategorie from './PopUpCategorie';

function Categories() {


  const [currentCategorie, setCurrentCategorie] = useState(0);
  const [showCategorie, setShowCategorie] = useState(0);
  const [selectedInputCat, setSelectedInputCat] = useState("");

  function handleCategorieChange(newValue) {
    setCurrentCategorie(newValue);
    setShowCategorie(1);
    setSelectedInputCat(Categories[newValue].nom);
  }

  function handleShowCategorie(value) {
    setShowCategorie(value);
  }

  //input nom categorie
  function handleInputCatChange(newValue) {
    setSelectedInputCat(newValue);
  }

  //bouton modifier categorie
  function editCategorieName() {
    Categories[currentCategorie].nom = selectedInputCat;
    console.log(Categories[currentCategorie]);
    handleShowCategorie(0);
  }

  //Bouton Ajouter categorie
  function newCategorie() {
    handleShowCategorie(2);
  }

  //bouton cree categorie
  function createCategorie() {
    let cat = {
      id: (Categories[Categories.length-1].id + 1),
      nom: selectedInputCat,
    };
    Categories.push(cat);
    console.log(Categories[Categories.length-1]);
    handleShowCategorie(0);
  }

  let Categories = [
    {
      id: 0,
      nom: "Categorie 1",
    },
    {
      id: 1,
      nom: "Categorie 2",
    },
    {
      id: 2,
      nom: "Categorie 3",
    },
    {
      id: 3,
      nom: "Categorie 4",
    },
    {
      id: 4,
      nom: "Categorie 5",
    },
    {
      id: 5,
      nom: "Categorie 6",
    },
    {
      id: 6,
      nom: "Categorie 7",
    },
    {
      id: 7,
      nom: "Categorie 8",
    },
    {
      id: 8,
      nom: "Categorie 9",
    },
    {
      id: 9,
      nom: "Categorie 10",
    },
    {
      id: 10,
      nom: "Categorie 11",
    },
    {
      id: 11,
      nom: "Categorie 12",
    },
    {
      id: 12,
      nom: "Categorie 13",
    },
  ];

  return (
    <>
   <div className={`h-screen ${(showCategorie === 1 || showCategorie === 2) ? ("blur"):("")} `}>
    
      <Header/>

      <div className='flex items-center mx-10 mt-4'>
        <div className='title'>Voici les catégories de boutique 1 !</div>
        <div className='ml-auto'>
          <button className='greenButton' onClick={() => {newCategorie();}}>Ajouter une categorie</button>
        </div>
      </div>


      <div className='flex mx-10 mt-4'>
        <div className='flex flex-col w-full'>
            <div className='trie flex mr-5 mb-5'>
              <input
                id="4"
                // onChange={handleInputAfterChange}
                // value={selectedAfterDate}
                type="search"
                placeholder='nom d’une catégorie'
                className='search pl-3'
              />
              <button type="submit">Search</button>
            </div>
          
          <CategoriesListe onChange={handleCategorieChange} categories={Categories}/>
        </div>
        
      </div>

   </div> 
   {showCategorie === 1 ? 
   (<PopUpCategorie selectedInputCat={selectedInputCat} inputChange={handleInputCatChange} firstButton={handleShowCategorie} secondButton={editCategorieName} action="Modifier" />)
   : (
    showCategorie === 2 ?
    (<PopUpCategorie selectedInputCat={selectedInputCat} inputChange={handleInputCatChange} firstButton={handleShowCategorie} secondButton={createCategorie} action="Créer" />)
    :(null)
   )
   }
   </>
  );
}

export default Categories;
