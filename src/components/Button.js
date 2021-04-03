import React from "react";

const Button = ({ buttonFunc, disabled }) => (
  <button onClick={buttonFunc}>{disabled ? "START" : "RESTART"}</button>
);

export default Button;
