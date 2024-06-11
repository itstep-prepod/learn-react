import React, { useState } from "react";
import { data } from "./data";
import { CardItem } from "./CardItem";
import { UserForm } from "./UserForm";


export const App = () => {
  const [persons, setPersons] = useState(data);

  const onDeletePerson = (personId) => {
    setPersons((prevPersons) =>
      prevPersons.filter((person) => person.id !== personId)
    );
  };

  const onUserAdd = (userObj) => {
    setPersons((prevPersons) => [...prevPersons, userObj])
  };

  return (
    <>
      <div>hello world!</div>
      <UserForm onUserAdd={onUserAdd}/>
      {/* <CardItem name={name} age={age} phone={phone} /> */}
      {persons.map((person) => (
        <CardItem {...person} key={person.id} onDeletePerson={onDeletePerson} />
      ))}
    </>
  );
};
