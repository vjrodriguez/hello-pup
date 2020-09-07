import React, {useEffect, useRef} from 'react'
import{createPortal} from 'react-dom'

let modalRoot

const Modal = ({ children }) => {
  modalRoot = modalRoot ? modalRoot : document.getElementById("modal")
  const elRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    modalRoot.appendChild(elRef.current);

    //run this when modal root gets closed
    return () => modalRoot.removeChild(elRef.current);
  }, []); //using the empty array to run only once

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
