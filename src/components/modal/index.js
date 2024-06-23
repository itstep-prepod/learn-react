import React, { useContext } from "react";
import styles from "./index.module.css";
import { ModalContext } from "./context";
import {ModalHeader} from './header';



export const Modal = ({ children, isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  // PORTAL
  return (
    <ModalContext.Provider value={{ onClose }}>
      <div className={styles.modal}>{children}</div>
    </ModalContext.Provider>
  ); 
};

Modal.Header = ModalHeader;
