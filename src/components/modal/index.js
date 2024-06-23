import React, { useContext } from "react";
import styles from './index.module.css';
import {Close, ErrorOutline, CheckCircleOutline, HelpOutline} from '@mui/icons-material';
import { ModalContex}

const icons = {
    'alarm': <ErrorOutline htmlcolor="a36c6c"/>,
    'success': <CheckCircleOutline htmlcolor=" #6d9d71"/>,
    'info': <HelpOutline/>
};

;

export const Modal = ({children, isOpen, onClose}) => {
    if (!isOpen) {
        return null
    }

    // PORTAL

    return <ModalContex.Provider value={{a:3}}>
    <div className={styles.modal}> {children}</div>
    </ModalContex.Provider>
};

Modal.Header = ({text, iconName}) => {
  const data  = useContext(ModalContex)

  console.log(data)
}

Modal.Header = ({text, iconName}) => {
    const icon = Object.keys(icons).includes(iconName) ? 
    icons[iconName] : icons['info'];

    return (<div className={styles.header}>
        <span> {icon} </span>
        <span className={styles.headerText}>{text}</span>
        <span className={styles.closeBtn}><Close/></span>
    </div>);
};

Modal.Header = ({text, iconName}) {}

Modal.Header = ModalHeader
