import React, { useState, useEffect } from 'react';
import './Boutiques.css';
import Header from './../Header';
import Filter from './../Filter';
import BoutiquesListe from './BoutiquesListe';
import PopUpStore from './PopUpStore';
import { fetchShops } from '../redux/reducers/stores';
import { useSelector, useDispatch } from 'react-redux';

function Boutiques() {

  const [currentStore, setCurrentStore] = useState(0);
  const [showStore, setShowStore] = useState(0);
  const [selectedName, setSelectedName] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedHours, setSelectedHours] = useState([]);
  const [stores, setStores] = useState([]);

  function handleStoreChange(newValue) {
    setCurrentStore(newValue);
    setSelectedName(Boutiques[newValue].nom);
    setSelectedStatus(Boutiques[newValue].status);
    setSelectedHours(Boutiques[newValue].hours);
    setShowStore(1);
  }

  function handleShowStore(value) {
    setShowStore(value);
  }

  //input nom boutique
  function handleNameChange(newValue) {
    setSelectedName(newValue);
  }

  //input status boutique
  function handleStatusChange(newValue) {
    setSelectedStatus(newValue);
  }

  //input hours boutique
  function handleHoursChange(newValue) {
    setSelectedHours(newValue);
  }

  //bouton modifier boutique
  function editStore() {
    Boutiques[currentStore].nom = selectedName;
    Boutiques[currentStore].status = selectedStatus;
    Boutiques[currentStore].hours = selectedHours;
    console.log(Boutiques[currentStore]);
    handleShowStore(0);
  }

  //Bouton Ajouter boutique
  function newStore() {
    handleShowStore(2);
  }

  //bouton cree boutique
  function createStore() {
    let store = {
      id: (Boutiques[Boutiques.length-1].id + 1),
      nom: selectedName,
      status: selectedStatus,
      hours: selectedHours,
    };
    Boutiques.push(store);
    console.log(Boutiques[Boutiques.length-1]);
    handleShowStore(0);
  }

  // const getBoutiques = async () => {
  //   const response = await fetchShops();
  //   setStores(response);
  // }

  const dispatch = useDispatch();
  const { shops, error, loading } = useSelector((state) => state.shops);


  useEffect(() => {
    dispatch(fetchShops());
  },[dispatch])
  
  // let Boutiques = [
  //   {
  //     id: 0,
  //     nom: "Boutique 1",
  //     nbProduit: "24",
  //     nbCategorie: "03",
  //     status: "En congé",
  //     date: "09 Dec, 2022",
  //     produits: [
  //       {
  //         id: 0,
  //         nom: "Produit 1",
  //         prix: "29",
  //         categories: [
  //           "categorie1",
  //           "categorie2",
  //         ],
  //         description: "Lorum ipsum",
  //       },
  //       {
  //         id: 1,
  //         nom: "Produit 2",
  //         prix: "29",
  //         categories: [
  //           "categorie1",
  //           "categorie2",
  //         ],
  //         description: "Lorum ipsum",
  //       },
  //       {
  //         id: 2,
  //         nom: "Produit 3",
  //         prix: "29",
  //         categories: [
  //           "categorie1",
  //           "categorie2",
  //         ],
  //         description: "Lorum ipsum",
  //       },
  //       {
  //         id: 3,
  //         nom: "Produit 1",
  //         prix: "29",
  //         categories: [
  //           "categorie1",
  //           "categorie2",
  //         ],
  //         description: "Lorum ipsum",
  //       },
  //       {
  //         id: 4,
  //         nom: "Produit 2",
  //         prix: "29",
  //         categories: [
  //           "categorie1",
  //           "categorie2",
  //         ],
  //         description: "Lorum ipsum",
  //       },
  //       {
  //         id: 5,
  //         nom: "Produit 3",
  //         prix: "29",
  //         categories: [
  //           "categorie1",
  //           "categorie2",
  //         ],
  //         description: "Lorum ipsum",
  //       },
  //       {
  //         id: 6,
  //         nom: "Produit 4",
  //         prix: "29",
  //         categories: [
  //           "categorie1",
  //           "categorie2",
  //         ],
  //         description: "Lorum ipsum",
  //       },
  //     ],
  //   },
  //   {
  //     id: 1,
  //     nom: "Boutique 2",
  //     nbProduit: "32",
  //     nbCategorie: "07",
  //     status: "Ouvert",
  //     date: "15 Dec, 2022",
  //     produits: [
  //       {
  //         id: 0,
  //         nom: "Produit 1",
  //         prix: "29",
  //         categories: [
  //           "categorie1",
  //           "categorie2",
  //         ],
  //         description: "Lorum ipsum",
  //       },
  //       {
  //         id: 1,
  //         nom: "Produit 2",
  //         prix: "29",
  //         categories: [
  //           "categorie1",
  //           "categorie2",
  //         ],
  //         description: "Lorum ipsum",
  //       },
  //       {
  //         id: 2,
  //         nom: "Produit 3",
  //         prix: "29",
  //         categories: [
  //           "categorie1",
  //           "categorie2",
  //         ],
  //         description: "Lorum ipsum",
  //       },
  //       {
  //         id: 3,
  //         nom: "Produit 1",
  //         prix: "29",
  //         categories: [
  //           "categorie1",
  //           "categorie2",
  //         ],
  //         description: "Lorum ipsum",
  //       },
  //       {
  //         id: 4,
  //         nom: "Produit 2",
  //         prix: "29",
  //         categories: [
  //           "categorie1",
  //           "categorie2",
  //         ],
  //         description: "Lorum ipsum",
  //       },
  //       {
  //         id: 5,
  //         nom: "Produit 3",
  //         prix: "29",
  //         categories: [
  //           "categorie1",
  //           "categorie2",
  //         ],
  //         description: "Lorum ipsum",
  //       },
  //       {
  //         id: 6,
  //         nom: "Produit 4",
  //         prix: "29",
  //         categories: [
  //           "categorie1",
  //           "categorie2",
  //         ],
  //         description: "Lorum ipsum",
  //       },
  //     ],
  //   },{
  //     id: 2,
  //     nom: "Boutique 3",
  //     nbProduit: "24",
  //     nbCategorie: "03",
  //     status: "En congé",
  //     date: "09 Dec, 2022",
  //     produits: [
  //       {
  //         id: 0,
  //         nom: "Produit 1",
  //         prix: "29",
  //         categories: [
  //           "categorie1",
  //           "categorie2",
  //         ],
  //         description: "Lorum ipsum",
  //       },
  //       {
  //         id: 1,
  //         nom: "Produit 2",
  //         prix: "29",
  //         categories: [
  //           "categorie1",
  //           "categorie2",
  //         ],
  //         description: "Lorum ipsum",
  //       },
  //       {
  //         id: 2,
  //         nom: "Produit 3",
  //         prix: "29",
  //         categories: [
  //           "categorie1",
  //           "categorie2",
  //         ],
  //         description: "Lorum ipsum",
  //       },
  //       {
  //         id: 3,
  //         nom: "Produit 1",
  //         prix: "29",
  //         categories: [
  //           "categorie1",
  //           "categorie2",
  //         ],
  //         description: "Lorum ipsum",
  //       },
  //       {
  //         id: 4,
  //         nom: "Produit 2",
  //         prix: "29",
  //         categories: [
  //           "categorie1",
  //           "categorie2",
  //         ],
  //         description: "Lorum ipsum",
  //       },
  //       {
  //         id: 5,
  //         nom: "Produit 3",
  //         prix: "29",
  //         categories: [
  //           "categorie1",
  //           "categorie2",
  //         ],
  //         description: "Lorum ipsum",
  //       },
  //       {
  //         id: 6,
  //         nom: "Produit 4",
  //         prix: "29",
  //         categories: [
  //           "categorie1",
  //           "categorie2",
  //         ],
  //         description: "Lorum ipsum",
  //       },
  //     ],
  //   },
  // ];


  return (
    <>
    <div className={`h-screen ${(showStore === 1 || showStore === 2) ? ("blur"):("")} `}>

      <Header/>

      <div className='flex items-center mx-10 mt-4'>
        <div className='title'>Bonjour Oussama, voici vos boutiques ! </div>
        <div className='ml-auto'>
          <button className='greenButton mr-6' onClick={() => {console.log(stores);}}>Gérer les catégories</button>
          <button className='greenButton' onClick={() => {newStore();}}>Créer une boutique</button>
        </div>
      </div>


      <div className='flex mx-10 mt-4'>
        <Filter/>
        <div className='flex flex-col ml-10 w-full'>
          <div className='trie mb-5'>
            <label className='pl-3'>trier par</label>
            <select name="trie" className='pl-2'>
                <option value="nbr">nombre de produits</option>
                <option value="nbrde">nombre de </option>
            </select>
          </div>
          <BoutiquesListe onChange={handleStoreChange} boutiques={shops}/>
        </div>
        
      </div>

      </div> 
   {showStore === 1 ? 
   (<PopUpStore selectedName={selectedName} nameChange={handleNameChange} selectedStatus={selectedStatus} statusChange={handleStatusChange} selectedHours={selectedHours} hoursChange={handleHoursChange} onChange={handleStoreChange} firstButton={handleShowStore} secondButton={editStore} action="Modifier" />)
   : (
    showStore === 2 ?
    (<PopUpStore selectedName={selectedName} nameChange={handleNameChange} selectedStatus={selectedStatus} statusChange={handleStatusChange} selectedHours={selectedHours} hoursChange={handleHoursChange} onChange={handleStoreChange} firstButton={handleShowStore} secondButton={createStore} action="Créer" />)
    :(null)
   )
   }
   </>
  );
}

export default Boutiques;
