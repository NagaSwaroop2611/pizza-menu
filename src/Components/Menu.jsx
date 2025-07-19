import React from 'react';
import { Pizza } from './Pizza';

// export function Menu({pizzaData}) {
//   return (
//     <main className='menu'>
//       <h2>Our Menu</h2>
//       <ul className="pizzas"> {/* Added a ul to contain the pizza list */}
//         {pizzaData.map((pizza) => (
//           // <Pizza
//           //   key={pizza.name}
//           //   name={pizza.name}
//           //   ingredients={pizza.ingredients}
//           //   photoName={pizza.photoName}
//           //   price={pizza.price}
//           //   soldOut={pizza.soldOut}
//           // />
//           <Pizza
//             key={pizza.name} // Added a key prop
//             pizzaObj={pizza} />
//         ))}
//       </ul>
//     </main>
//   );
// }

export function Menu({pizzaData}) {
  return (
    <main className='menu'>
      <h2>Our Menu</h2>
      {pizzaData.length>0 ? (
        <ul className="pizzas"> {/* Added a ul to contain the pizza list */}
        {pizzaData.map((pizza) => (
          // <Pizza
          //   key={pizza.name}
          //   name={pizza.name}
          //   ingredients={pizza.ingredients}
          //   photoName={pizza.photoName}
          //   price={pizza.price}
          //   soldOut={pizza.soldOut}
          // />
          <Pizza
            key={pizza.name} // Added a key prop
            pizzaObj={pizza} />
        ))}
      </ul>
      ):(<p>We are currently looking for MENU</p>)}
    </main>
  );
}
