<<<<<<< HEAD
import React from "react"

export const CardItem = ({name, age, phone}) => {
   
    return (
         <div>
            <h2>{name}</h2>
            <p>{age}</p>
            <p>{phone}</p>
         </div>
    )
}
=======
import React from "react";


export const CardItem = ({name, age, phone}) => {
    return (
        <div>
            <hr/>
            <h2>{name}</h2>
            <p>{age}</p>
            <p>{phone}</p>
            <button onClick={() => {}}>delete</button>
            <hr/>
        </div>
    )
};
>>>>>>> 65bc0e4c50b3df398c5018c51d96976e75d0fd1d
