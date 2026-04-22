import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../actions/modalAction";
import Login from "./Login";
import "./Modal.css";

const Modal = () => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);
  const { openClose, content } = modal;

  const closeModalHandler = () => {
    dispatch(openModal("close", ""));
  };

  // Only render if modal is open
  if (openClose !== "open") {
    return null;
  }

  return (
    <>
      {/* Backdrop overlay - click to close */}
      <div 
        className="modal_backdrop" 
        onClick={closeModalHandler}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 999,
        }}
      />
      
      {/* Modal content */}
      <div 
        className="site_modal"
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1000,
          backgroundColor: "white",
          borderRadius: "8px",
          maxWidth: "500px",
          width: "90%",
        }}
      >
        <div className="modal_content">
          <div className="col right" style={{ textAlign: "right", padding: "10px" }}>
            <span 
              onClick={closeModalHandler} 
              className="close"
              style={{ cursor: "pointer", fontSize: "28px" }}
            >
              &times;
            </span>
          </div>
          <div>
            {content === "login" && <Login />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;