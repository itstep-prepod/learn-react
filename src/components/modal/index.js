import React, { useContext, useMemo, memo } from "react";
import { createPortal } from "react-dom";
import styles from "./index.module.css";
import { ModalContext } from "./context";
import { ModalHeader } from "./header";

// 1. state
// 2. parent
// 3. props
// 4. context
// 5. force

export const Modal = memo(({ children, isOpen, onClose }) => {
  const value = useMemo(() => ({ onClose }), [onClose]);

  if (!isOpen) {
    return null;
  }

  // PORTAL
  return createPortal(
    <ModalContext.Provider value={value}>
      <div className={styles.modal}>{children}</div>
    </ModalContext.Provider>,
    document.body
  );
});

Modal.Header = ModalHeader;
