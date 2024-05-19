import React, { useState } from "react";
import { useCounter } from "./hooks/useCounter";

export const Eggs = () => {
  const {inc, dec, counter} = useCounter(10);

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
