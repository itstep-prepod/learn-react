import React, { useState } from "react";
// Rerender
// 1. state change
// 2. parent rerender
// 3. context change
// 4. props change
// 5. force rerender

// TODO hook use rules

export const Playstation = () => {
  const [counter, setCounter] = useState(0);

  const inc = () => {
    setCounter((ctr) => ctr + 1);
    // console.log(counter);
  };

  const dec = () => {
    setCounter((ctr) => ctr - 1);
  };

  return (
    <>
      <div>
        <h1>Sony Playstations:</h1>
        <p>{counter}</p>
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
      </div>
    </>
  );
};
