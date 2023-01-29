import React from "react";
import ReactDOM from "react-dom";

const Protal = () => {
  return ReactDOM.createPortal(
    <h1>Protal</h1>,
    document.getElementById("isRoot")
  )
};

export default Protal;
