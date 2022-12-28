import React, { useState } from 'react';
import './Produits.css';
import Header from './../Header';
import langue from './../img/i18.png';
import ProduitsListe from './ProduitsListe';
import PopUpProduct from './PopUpProduct';


function Produits() {


  const [currentProduct, setCurrentProduct] = useState(0);
  const [showProduct, setShowProduct] = useState(0);
  const [selectedProductName, setSelectedProductName] = useState("");
  const [selectedProductPrice, setSelectedProductPrice] = useState("");
  const [selectedProductDesc, setSelectedProductDesc] = useState("");
  const [selectedProductCat, setSelectedProductCat] = useState([]);

  function handleProductChange(newValue) {
    setCurrentProduct(newValue);
    setShowProduct(1);
    setSelectedProductName(Produits[newValue].nom);
    setSelectedProductPrice(Produits[newValue].prix);
    setSelectedProductCat(Produits[newValue].categories);
    setSelectedProductDesc(Produits[newValue].description);
  }

  function handleShowProduct(value) {
    setShowProduct(value);
  }

  //input nom produit
  function handleInputNameChange(newValue) {
    setSelectedProductName(newValue);
  }

  //input prix produit
  function handlePriceChange(newValue) {
    setSelectedProductPrice(newValue);
  }

  //input categories produit
  function handleCatChange(newValue) {
    setSelectedProductCat(newValue);
  }

  //input description produit
  function handleDescChange(newValue) {
    setSelectedProductDesc(newValue);
  }

  //bouton modifier produit
  function editProductName() {
    Produits[currentProduct].nom = selectedProductName;
    Produits[currentProduct].prix = selectedProductPrice;
    Produits[currentProduct].categories = selectedProductCat;
    Produits[currentProduct].description = selectedProductDesc;
    console.log(Produits[currentProduct]);
    handleShowProduct(0);
  }

  //Bouton Ajouter Produit
  function newProduct() {
    handleShowProduct(2);
  }

  //bouton cree Produit
  function createProduct() {
    let prod = {
      id: (Produits[Produits.length-1].id + 1),
      nom: selectedProductName,
      prix: selectedProductPrice,
      categories: selectedProductCat,
      description: selectedProductDesc,
    };
    Produits.push(prod);
    console.log(Produits[Produits.length-1]);
    handleShowProduct(0);
  }

  let Produits = [
    {
      id: 0,
      nom: "Produit 1",
      prix: "29",
      categories: [
        "categorie1",
        "categorie2",
      ],
      description: "Lorum ipsum",
    },
    {
      id: 1,
      nom: "Produit 2",
      prix: "29",
      categories: [
        "categorie1",
        "categorie2",
      ],
      description: "Lorum ipsum",
    },
    {
      id: 2,
      nom: "Produit 3",
      prix: "29",
      categories: [
        "categorie1",
        "categorie2",
      ],
      description: "Lorum ipsum",
    },
    {
      id: 3,
      nom: "Produit 1",
      prix: "29",
      categories: [
        "categorie1",
        "categorie2",
      ],
      description: "Lorum ipsum",
    },
    {
      id: 4,
      nom: "Produit 2",
      prix: "29",
      categories: [
        "categorie1",
        "categorie2",
      ],
      description: "Lorum ipsum",
    },
    {
      id: 5,
      nom: "Produit 3",
      prix: "29",
      categories: [
        "categorie1",
        "categorie2",
      ],
      description: "Lorum ipsum",
    },
    {
      id: 6,
      nom: "Produit 4",
      prix: "29",
      categories: [
        "categorie1",
        "categorie2",
      ],
      description: "Lorum ipsum",
    },
  ];


  return (
    <>
    <div className={`h-screen ${(showProduct === 1 || showProduct === 2) ? ("blur"):("")} `}>

      <Header/>

      <div className='flex items-center mx-10 mt-4'>
        <div className='title'>Voici les produits de boutique 1 !</div>
        <div className='ml-auto'>
          <button className='greenButton' onClick={() => {newProduct();}}>Ajouter un produit</button>
        </div>
      </div>


      <div className='flex mx-10 mt-4'>
        <div className='flex flex-col w-full'>
          <div className='flex flex-row mb-5'>
            <div className='trie flex mr-5'>
              <input
                id="4"
                // onChange={handleInputAfterChange}
                // value={selectedAfterDate}
                type="search"
                placeholder='nom du produit'
                className='search pl-3'
              />
              <button type="submit">Search</button>
            </div>
            <div className='trie'>
              <select name="trie" className='search pl-2'>
                  <option value="">categorie</option>
                  <option value="nbrde">nombre de </option>
              </select>
            </div>
            <img alt='langue' src={langue} className='ml-auto w-6 h-6'/>
          </div>
          
          <ProduitsListe onChange={handleProductChange} produits={Produits} />
        </div>
        
      </div>

   </div> 
   {showProduct === 1 ? 
   (<PopUpProduct selectedProductName={selectedProductName} nameChange={handleInputNameChange} selectedProductPrice={selectedProductPrice} priceChange={handlePriceChange} selectedProductCat={selectedProductCat} catChange={handleCatChange} selectedProductDesc={selectedProductDesc} descChange={handleDescChange} firstButton={handleShowProduct} secondButton={editProductName} action="Modifier" />)
   : (
    showProduct === 2 ?
    (<PopUpProduct selectedProductName={selectedProductName} nameChange={handleInputNameChange} selectedProductPrice={selectedProductPrice} priceChange={handlePriceChange} selectedProductCat={selectedProductCat} catChange={handleCatChange} selectedProductDesc={selectedProductDesc} descChange={handleDescChange} firstButton={handleShowProduct} secondButton={createProduct} action="Créer" />)
    :(null)
   )
   }
   </>
  );
}

export default Produits;
