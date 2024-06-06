import React from "react";
import { data } from "./data";
import { CardItem } from "./CardItem";


export const App = () => {
    // const [person] = data;
    // const {name, age, phone} = person

    const [persons, setPersons] = useState(data);

    // setPersons([])
   const onDeletePerson = (personId) => {
       setPersons( (prevPersons) => {
          return prevPersons.filter((person) => {
            if(person.id !== personId) {
              return true;
            } else {
              return false;
            }
            
          })
       })
   };

    return <>
        <div>hello world!</div>
        {/* <CardItem name={name} age={age} phone={phone} /> */}
        {persons.map((person) => <CardItem {...person} key ={person.id}/>)

        }
    </>
};
 
