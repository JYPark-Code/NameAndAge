import React from "react";

import "./Modal.css";

const Modal = (props) => {
  return (
    <div className={"openModal modal"}>
      <section>
        <header>{props.title}</header>
        <main>{props.message}</main>
        <footer>
          <button className="close" onClick={props.onConfirm}>
            Okay
          </button>
        </footer>
      </section>
    </div>
  );
};

export default Modal;
