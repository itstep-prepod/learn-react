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