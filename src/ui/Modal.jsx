"use client";
import ModalLib from "react-responsive-modal";

const Modal = ({ open, onClose, children }) => {
  return (
    <ModalLib
      onClose={onClose}
      open={open}
      center
      classNames={{
        overlay: "bg-black/75",
        modal: "rounded-lg p-5 bg-white shadow w-full max-w-md!",
        closeButton: "right-2 top-2 text-gray-500 hover:text-gray-700",
      }}
    >
      {children}
    </ModalLib>
  );
};

export default Modal;
