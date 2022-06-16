import React from "react";
import { Transition } from "react-transition-group";
import Backdrop from "../Backdrop/Backdrop";

import "./Modal.css";

const modal = (props) => {
  return (
    <>
      <Transition in={props.show} timeout={300} mountOnEnter unmountOnExit>
        {(state) => {
          const cssClasses = `Modal ${
            state === "entering"
              ? "showModal"
              : state === "exiting"
              ? "hideModal"
              : null
          }`;
          return (
            <>
              <div className={cssClasses}>
                <h1>A Modal</h1>
                <button className="Button" onClick={props.closed}>
                  Dismiss
                </button>
              </div>
              <Backdrop className={cssClasses} />
            </>
          );
        }}
      </Transition>
    </>
  );
};

export default modal;
