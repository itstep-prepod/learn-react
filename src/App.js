import React, { useState } from "react";
// Rerender
// 1. state change
// 2. parent rerender
// 3. context change
// 4. props change
// 5. force rerender

// TODO hook use rules

export const App = () => {
  const [counter, setCounter] = useState(0);

  const inc = () => {
    setCounter(counter + 1);

    // DO NOT DO THAT!
    // counter = ????

    console.log(counter);
  };

  console.log('RENDER')

  return (
    <>
      <div>
        <h1>Hello world!</h1>
        <p>{counter}</p>
        <button onClick={inc}>+</button>
      </div>
    </>
  );
};
