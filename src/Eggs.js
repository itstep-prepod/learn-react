import React, { useState } from "react";


export const Eggs = () => {
  const [counter, setCounter] = useState(0);

  const inc = () => {
      setCounter(ctr => ctr + 10); 
  };

  const dec = () => {
    setCounter(ctr => ctr - 10); 
};



  return (
    <>
      <div>
        <h1>Eggs:</h1>
        <p>{counter}</p>
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
      </div>
    </>
  );
};




