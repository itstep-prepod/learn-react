import React from "react";


export const Modal = ({children}) => {
    return <div>{children}</div>
};

Modal.Header = ({text, iconName}) => {
    return (<h3>
        <span>{iconName}</span>
        <span>{text}</span>
        <span>X</span>
    </h3>);
};

// TODO: compound

