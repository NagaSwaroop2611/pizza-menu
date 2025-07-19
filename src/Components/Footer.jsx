import React from 'react';


export function Footer() {
  const hour = new Date().getHours();
  // console.log(hour);
  const openHour = 12;
  const closeHour = 23;

  let isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className='footer'>
      {isOpen ? (
        <div className='order'>
          <p>We are open until {closeHour}:00, Come visit us or Order Online</p>
          <button className='btn'>Order</button>
        </div>
      ) : (<p> We are happy to serve you between {openHour}:00 and {closeHour}:00</p>)}
    </footer>
  );
}
