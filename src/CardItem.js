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