import React from "react";
import styles from './index.module.css';
import {Close, ErrorOutline, CheckCircleOutline, HelpOutline} from '@mui/icons-material';

const icons = {
    'alarm': <ErrorOutline/>,
    'success': <CheckCircleOutline/>,
    'info': <HelpOutline/>
};


export const Modal = ({children}) => {
    return <div className={styles.modal}>{children}</div>
};

Modal.Header = ({text, iconName}) => {
    const icon = Object.keys(icons).includes(iconName) ? icons[iconName] : icons['info'];

    return (<h3 className={styles.header}>
        <span className={styles.icon}> {icon} </span>
        <span className={styles.headerText}>{text}</span>
        <span className={styles.closeBtn}><Close/></span>
    </h3>);
};


