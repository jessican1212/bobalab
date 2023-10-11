import React, { useState } from 'react'
import './Delivery.css'

const Delivery = (props) => {

  const [clicked, setClicked] = useState(false);

  const handleCheck = () => {
    props.onCheckboxChange(props.name, props.items, props.cost, props.distance);
    setClicked(!clicked);
  };

  return (
    <div className="delivery-container">
      <div className="bottom">
      <h4>{props.name}</h4>
      <h2>${props.cost}</h2>
      </div>
      <hr></hr>
      <p>{props.items} items</p>
      <p>{props.distance} miles</p>
      <button id="btn" onClick={handleCheck} style={{backgroundImage: clicked ? "linear-gradient(to right,#89235b,#992f1d)" : "linear-gradient(to right,#e052a0,#f15c41)"}}>
        {clicked ? 'Selected!' : 'Select'}
      </button>
    </div>
  )
}

export default Delivery