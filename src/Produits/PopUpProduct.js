import React, { useState } from 'react';
import { Multiselect } from "multiselect-react-dropdown";
import './PopUpProduct.css';


function PopUpProduct(props) {

  
  const [selectedProductName, setSelectedProductName] = useState(props.selectedProductName);
  const [selectedProductPrice, setSelectedProductPrice] = useState(props.selectedProductPrice);
  const [selectedProductCat, setSelectedProductCat] = useState(props.selectedProductCat);
  const [selectedProductDesc, setSelectedProductDesc] = useState(props.selectedProductDesc);

  function handleProductNameChange(event) {
    setSelectedProductName(event.target.value);
    props.nameChange(event.target.value);
  }

  function handleProductPriceChange(event) {
    setSelectedProductPrice(event.target.value);
    props.priceChange(event.target.value);
  }

  function handleProductDescChange(event) {
    setSelectedProductDesc(event.target.value);
    props.descChange(event.target.value);
  }

  function action() {
    props.secondButton();
  }

  function handleShowProduct() {
    props.nameChange("");
    props.priceChange("");
    props.catChange([]);
    props.descChange("");
    props.firstButton(0);
  }

  // quand on ajoute une categorie
  function onSelect(selectedList, selectedItem) {
    setSelectedProductCat(selectedList);
    props.catChange(selectedList);
  }

  // quand on supprime une categorie
  function onRemove(selectedList, selectedItem) {
    setSelectedProductCat(selectedList);
    props.catChange(selectedList);
  }

  let plainArray= ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];

  return (
    <div className='showProduct'>
      <div className='flex flex-col h-full items-center justify-center'>

        <div className='widthBox'>
          <div className='titleInput mb-3'>Nom :</div>
          <input
            id="4"
            onChange={handleProductNameChange}
            value={selectedProductName}
            type="text"
            className='inputProductName pl-5 mb-5'
          />
        </div>

        <div className='flex flex-row mb-5'>
          <div>
            <div className='titleInput mb-3'>Prix :</div>
            <input
              id="4"
              onChange={handleProductPriceChange}
              value={selectedProductPrice}
              type="text"
              className='inputProductName pl-5 mr-5'
            />
          </div>
          <div>
            <div className='titleInput mb-3'>Categories :</div>
            <Multiselect 
              showArrow 
              options={plainArray} 
              isObject={false} 
              className="inputProductCategorie"
              onSelect={onSelect}
              onRemove={onRemove}
            />
          </div>
        </div>

        <div>
          <div className='titleInput mb-3'>Description :</div>
          <textarea
            id="4"
            onChange={handleProductDescChange}
            value={selectedProductDesc}
            type="textarea"
            className='inputProductDesc pt-2 pl-5 mb-12'
          />
        </div>

        <div className='flex flex-row'>
          <button className='grayButton mr-5' onClick={handleShowProduct}>Annuler</button>
          <button className='greenButton' onClick={action}>{props.action}</button>
        </div>

      </div>
   </div>
  );
}

export default PopUpProduct;
