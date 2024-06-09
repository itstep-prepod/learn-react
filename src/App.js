import React, {useState} from "react";
import { data } from "./data";
import { CardItem } from "./CardItem";
import { UserForm } from "./UserForm";


export const App = () => {
    const [persons, setPersons] = useState(data); 


    const onDeletePerson = (personId) => {
        // TODO дописать логику удаления, и укоротить код
        setPersons((prevPersons) => prevPersons.filter((person) => person.id !== personId));
        };
       
    const addUserForm = (inpName,inpAge,inpPhone) => {
          return <div>
            <hr/>
            <h2>{inpName}</h2>
            <p>{inpAge}</p>
            <p>{inpPhone}</p>
            <button>Добавить</button>
            <hr/>
          </div>
    }
  

    return <>
        <div>hello world!</div>
        {/* <CardItem name={name} age={age} phone={phone} /> */}
        <UserForm addUserForm={addUserForm}/>
        { persons.map((person) => <CardItem {...person} key={person.id} onDeletePerson={onDeletePerson} />) }
    </>
};
