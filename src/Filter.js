import React, { useState } from 'react';
import './Filter.css';
import { RadioButton } from "./RadioButton";
import logo from './avocado.png';


function Filter() {

  const [selectedValue, setSelectedValue] = useState("tout");
  const [selectedBeforeDate, setSelectedBeforeDate] = useState("");
  const [selectedAfterDate, setSelectedAfterDate] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  }

  const handleInputBeforeChange = (event) => {
    setSelectedBeforeDate(event.target.value);
  }

  const handleInputAfterChange = (event) => {
    setSelectedAfterDate(event.target.value);
  }

  return (
    <div className="filter flex flex-col pl-10 pt-10">
      
        <div className="flex flex-col">
          <RadioButton
            changed={handleChange}
            id="1"
            isSelected={selectedValue === "tout"}
            label="tout"
            value="tout"
          />
          <div className='pl-5'>
            <RadioButton
              changed={handleChange}
              id="2"
              isSelected={selectedValue === "conge"}
              label="en congé"
              value="conge"
            />

            <RadioButton
              changed={handleChange}
              id="3"
              isSelected={selectedValue === "ouvert"}
              label="ouvert"
              value="ouvert"
            />
          </div>
        </div>

        <div className="flex flex-col mt-8">
          <div className='title1'>date de création</div>
          <div className='title2 pl-5 pt-2'>aprés</div>
          <input
            id="4"
            onChange={handleInputAfterChange}
            value={selectedAfterDate}
            type="date"
            className='date pl-5 pr-2 mt-2 ml-5'
          />
          <div className='title2 pl-5 pt-2'>avant</div>
          <input
            id="4"
            onChange={handleInputBeforeChange}
            value={selectedBeforeDate}
            type="date"
            className='date pl-5 pr-2 mt-2 ml-5'
          />
        </div>

    </div>
  );
}

export default Filter;
