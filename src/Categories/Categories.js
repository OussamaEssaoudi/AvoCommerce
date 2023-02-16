import React, { useState, useEffect } from 'react';
import './Categories.css';
import Header from '../Header';
import langue from './../img/i18.png';
import CategoriesListe from './CategoriesListe';
import PopUpCategorie from './PopUpCategorie';
import { useParams } from 'react-router-dom';
import { addNewCategorie, editaCategorie, fetchCategories } from '../redux/reducers/categories';
import { useSelector, useDispatch } from 'react-redux';

function Categories() {

  const { id } = useParams();


  const [currentCategorie, setCurrentCategorie] = useState(0);
  const [showCategorie, setShowCategorie] = useState(0);
  const [selectedInputCat, setSelectedInputCat] = useState("");
  const [refresh, setRefresh] = useState(0);

  function handleCategorieChange(newValue) {
    setCurrentCategorie(newValue.id);
    setSelectedInputCat(newValue.title);
    setShowCategorie(1);
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
    let cat = {
      title: selectedInputCat,
    };
    console.log(currentCategorie);
    editaCategorie(cat, currentCategorie);
    setSelectedInputCat("");
    handleShowCategorie(0);
    setRefresh(1);
  }

  //Bouton Ajouter categorie
  function newCategorie() {
    handleShowCategorie(2);
  }

  
	const userID = JSON.parse(localStorage.getItem("userID"));

  //bouton cree categorie
  function createCategorie() {
    let cat = {
      userId: userID,
      StoreId: id,
      title: selectedInputCat,
    };
    addNewCategorie(cat);
    handleShowCategorie(0);
    setRefresh(2);
  }

  const dispatch = useDispatch();
  const { categories, error, loading } = useSelector((state) => state.categories);
  const { store, errorS, loadingS } = useSelector((state) => state.shops);


  useEffect(() => {
    dispatch(fetchCategories(id));
  },[dispatch,showCategorie,refresh])

  // let Categories = [
  //   {
  //     id: 0,
  //     nom: "Categorie 1",
  //   },
  //   {
  //     id: 1,
  //     nom: "Categorie 2",
  //   },
  //   {
  //     id: 2,
  //     nom: "Categorie 3",
  //   },
  //   {
  //     id: 3,
  //     nom: "Categorie 4",
  //   },
  //   {
  //     id: 4,
  //     nom: "Categorie 5",
  //   },
  //   {
  //     id: 5,
  //     nom: "Categorie 6",
  //   },
  //   {
  //     id: 6,
  //     nom: "Categorie 7",
  //   },
  //   {
  //     id: 7,
  //     nom: "Categorie 8",
  //   },
  //   {
  //     id: 8,
  //     nom: "Categorie 9",
  //   },
  //   {
  //     id: 9,
  //     nom: "Categorie 10",
  //   },
  //   {
  //     id: 10,
  //     nom: "Categorie 11",
  //   },
  //   {
  //     id: 11,
  //     nom: "Categorie 12",
  //   },
  //   {
  //     id: 12,
  //     nom: "Categorie 13",
  //   },
  // ];

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
          
          <CategoriesListe onChange={handleCategorieChange} categories={categories}/>
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
