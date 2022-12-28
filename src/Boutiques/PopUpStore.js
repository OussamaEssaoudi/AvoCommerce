import React, { useState } from 'react';
import { Multiselect } from "multiselect-react-dropdown";
import './PopUpStore.css';


function PopUpStore(props) {

  
  const [selectedStoreName, setSelectedStoreName] = useState(props.selectedName);
  const [selectedStoreStatus, setSelectedStoreStatus] = useState(props.selectedStatus);
  const [selectedStoreHours, setSelectedStoreHours] = useState(props.selectedHours);

  function handleStoreNameChange(event) {
    setSelectedStoreName(event.target.value);
    props.nameChange(event.target.value);
  }

  function handleStoreStatusChange(event) {
    setSelectedStoreStatus(event.target.value);
    props.priceChange(event.target.value);
  }

  function handleStoreHoursChange(event) {
    setSelectedStoreHours(event.target.value);
    props.descChange(event.target.value);
  }

  function action() {
    props.secondButton();
  }

  function handleShowProduct() {
    props.nameChange("");
    props.statusChange("");
    props.hoursChange([]);
    props.firstButton(0);
  }

  return (
    <div className='showStore'>
      <div className='flex flex-col h-full items-center justify-center'>

        <div className='widthBox'>
          <div className='title3 mb-8'>Crée le 09/12/2022</div>
        </div>

        <div className='flex flex-row mb-5'>
          <div>
            <div className='titleInput mb-3'>Nom :</div>
            <input
              id="4"
              onChange={handleStoreNameChange}
              value={selectedStoreName}
              type="text"
              className='inputStoreName pl-5 mb-5 mr-5'
            />
          </div>
          <div>
            <div className='titleInput mb-3'>Statut :</div>
            <select onChange={handleStoreStatusChange} value={selectedStoreStatus} className="inputStoreName">
              <option>En congé</option>
              <option>Ouvert</option>
            </select>
          </div>
        </div>

        <div className='widthBox'>
          <div className='titleInput underline cursor-pointer mb-12'>Définir les horaires d’ouverture</div>
        </div>
        

        <div className='flex flex-row'>
          <button className='grayButton mr-5' onClick={handleShowProduct}>Annuler</button>
          <button className='greenButton' onClick={action}>{props.action}</button>
        </div>

      </div>
   </div>
  );
}

export default PopUpStore;
