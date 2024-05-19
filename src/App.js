import React, { useState } from "react";
import { Playstation } from "./Playstation";
import { Eggs } from "./Eggs";
import { Ground } from "./Ground";

// TODO input value two way binding

export const App = () => {
  const [shouldShowText, setShouldShowText] = useState(false);

  const onChange = (e) => {
    console.log(e.target.value);
  };

  const show = () => {
    setShouldShowText((prevShowText) => !prevShowText);
  };

  return (
    <>
      <button onClick={show}>show</button>
      {shouldShowText && <span>text</span>}
      <input type="text" onChange={onChange} />
      <Playstation />
      <Eggs />
      <Ground />
    </>
  );
};

