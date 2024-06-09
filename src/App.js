import React, {useState} from "react";
import { data } from "./data";
import { CardItem } from "./CardItem";


export const App = () => {
    const [persons, setPersons] = useState(data); 


    const onDeletePerson = (personId) => {
        // TODO дописать логику удаления, и укоротить код
        setPersons((prevPersons) => {
            return prevPersons.filter((person) => {
                person.id !== personId ? true : false
            });
        });
        if (setPersons === false) {
          data.splice(personId,1)  
        }
    };
  

    return <>
        <div>hello world!</div>
        {/* <CardItem name={name} age={age} phone={phone} /> */}
        { persons.map((person) => <CardItem {...person} key={person.id} onDeletePerson={onDeletePerson} />) }
    </>
};