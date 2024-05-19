import React, { useState } from "react";


export const Ground = () => {
  const [counter, setCounter] = useState(0);

  const inc = () => {
      setCounter(ctr => ctr + 1000); 
  };

  const dec = () => {
    setCounter(ctr => ctr - 1000); 
};



  return (
    <>
      <div>
        <h1>Ground:</h1>
        <p>{counter}</p>
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
      </div>
    </>
  );
};




