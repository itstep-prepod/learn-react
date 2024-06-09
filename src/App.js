import React, {useState} from "react";
import { data } from "./data";
import { CardItem } from "./CardItem";


export const App = () => {
    const [persons, setPersons] = useState(data); 


    const onDeletePerson = (personId) => {
        // TODO дописать логику удаления, и укоротить код
        setPersons((prevPersons) => {
            return prevPersons.filter((person) => {
                if (person.id !== personId) {
                    return true;
                } else {
                    return false;
                }
            });
        });
    };

    return <>
        <div>hello world!</div>
        {/* <CardItem name={name} age={age} phone={phone} /> */}
        { persons.map((person) => <CardItem {...person} key={person.id} />) }
    </>
};