import React from "react";
import style from './index.module.css';
import { Close, ErrorOutline, ChekCercleOutLine, HelpOutline } from '@mui/icon-material';



const Icons = {
    'alarm': <ErrorOutline/>
    'success': <ChekCercleOutLine/>
    'info': <HelpOutline/>

}

export const Modal = ({children}) => {
    return <div className ={style.modal}>{children}</div>
};


Modal.Header = ({text, iconName ='info'}) => {
    consi icon = Object.keys(icons).includes(iconName)
    
    return (<h3 className ={style.header}>
        <span className ={style.icon}>{icons[iconName]}</span>
        <span className ={style.headerText}>{text}</span>
        <span className ={style.closeBth}><Close/></span>
    </h3>);
};

// TODO: compound

