import React, { useContext } from "react";
import styles from "./Modal.module.css";
import { createPortal } from "react-dom";

const Backdrop = (props) => {
  return <div onClick={props.onCloseCart} className={styles.backdrop} />;
};

const ModalOverly = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

function Modal(props) {

  const portalElement = document.getElementById("overlay");

  return (
    <>
      {createPortal(<Backdrop onCloseCart={props.onCloseCart} />, portalElement)}
      {createPortal(<ModalOverly>{props.children}</ModalOverly>, portalElement)}
    </>
  );
}

export default Modal;
