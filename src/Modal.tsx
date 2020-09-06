import React, { useEffect, useRef, FunctionComponent } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal");

const Modal: FunctionComponent = ({ children }) => {
  const elRef = useRef(document.createElement("div"));

  useEffect(() => {
    if (!modalRoot) return;
    modalRoot.appendChild(elRef.current);

    // run this when modal root gets closed
    return () => {
      modalRoot.removeChild(elRef.current);
    };
  }, []); // using the empty array to run only once

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
