import React from "react";

// dum

export const CardItem = ({name, age, phone}) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>{age}</p>
            <p>{phone}</p>
        </div>
    )
};