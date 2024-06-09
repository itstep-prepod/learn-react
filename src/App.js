import React from "react";
import { data } from "./data";
import { CardItem } from "./CardItem";



export const App = () => {
   const[person] = data;

    return <>
      <div>hello world!</div>
      <CardItem name={person.name} age={person.age} phone={person.phone} />
    </>
}
