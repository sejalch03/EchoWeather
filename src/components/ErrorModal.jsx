import React from "react";

const ErrorModal = ({ message, onClose }) => {
  if (!message) return null;
  return (
    <div className="error-modal-inline">
      <span>{message}</span>
      <button className="modal-close" onClick={onClose} aria-label="close">&times;</button>
    </div>
  );
};

export default ErrorModal;




