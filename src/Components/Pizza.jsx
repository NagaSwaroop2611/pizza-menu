import React from 'react';

export function Pizza({ pizzaObj }) {
  // console.log(pizzaObj);
  // console.log(Pizza.className);
  return (
    <>
      <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ''}`}>
        <img src={pizzaObj.photoName} alt={pizzaObj.name} />
        <div>
          <h3>{pizzaObj.name}</h3>
          <p>{pizzaObj.ingredients}</p>
          <span>{pizzaObj.soldOut ?"SOLD OUT": parseInt(pizzaObj.price)+20 }</span>
        </div>
      </li>
    </>
  );
}
