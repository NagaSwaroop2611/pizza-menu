import React from 'react';

// function Header(){
//   return <h1 style={{
//     backgroundColor:"#333",
//     color:"red", 
//     fontSize:"48px", 
//     textTransform:"uppercase"
//   }}>Fast React Pizza Co.</h1>
// }
export function Header() {
  // let style ={
  //   backgroundColor:"#333",
  //   color:"red", 
  //   fontSize:"48px", 
  //   textTransform:"uppercase"
  // };
  return (
    <header className='header'>
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}
