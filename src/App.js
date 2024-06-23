import React, { useState } from "react";
import { Button } from "./components/button";
import { Center } from "./components/center";
import { Modal } from "./components/modal";

export const App = () => {
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggler = (prev) => !prev;

  return (
    <>
        <Modal isOpen={showError} onClose={() => setShowError(false)}>
        <Modal.Header text={'Failed to featch'} iconName={'alarm'}/>
        <span style={{textAlign:'center'}}>Please check</span>
        </Modal> 
    
      
      {showSuccess && <div>Success</div>}
      {showModal && <div>Modal</div>}
      <Center>
        <Button text="Error" onClick={() => setShowError(toggler)} />
        <Button
          text="Success"
          view="secondary"
          onClick={() => setShowSuccess(toggler)
          }
        />
        <Button
          text="Modal"
          view="secondaryAlt"
          onClick={() => setShowModal(toggler)}
        />
      </Center>
    </>
  );
};