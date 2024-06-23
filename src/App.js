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
      <Modal>
        <Modal.Header text={'hi there'} iconName={'some-icon'}/>
        <div>sdasd</div>
        <div>sdzxcxzczxcv</div>
        <span>cvxcvxcv</span>
      </Modal>
    

      {showError && <div>Error</div>}
      {showSuccess && <div>Success</div>}
      {showModal && <div>Modal</div>}
      <Center>
        <Button text="Error" onClick={() => setShowError(toggler)} />
        <Button
          text="Success"
          view="secondary"
          onClick={() => setShowSuccess(toggler)}
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