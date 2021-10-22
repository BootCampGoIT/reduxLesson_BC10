import React, { useEffect } from "react";
import { Overlay } from "./ModalStyled";

const Modal = ({ closeModal, children }) => {
  useEffect(() => {
    window.addEventListener("keydown", handleEscape);
    const body = document.querySelector("body");
    body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleEscape);
      const body = document.querySelector("body");
      body.style.overflow = "auto";
    };
  });

  const handleEscape = (e) => e.code === "Escape" && closeModal();

  const onOverlayClick = ({ target, currentTarget }) => {
    target === currentTarget && closeModal();
  };
  return (
    <Overlay onClick={onOverlayClick}>
      <div className='modal'>{children}</div>
    </Overlay>
  );
};

export default Modal;
