import React from "react";
import ReactDOM from "react-dom";

const fName = "Clara";
const lName = "Magaldi";
const num = 11;

ReactDOM.render(
  <div>
    <h1>
      Hello World, {fName} {lName}!
    </h1>
    <h1>Hello World, {`${fName} ${lName}`}!</h1>
    <p> Your lucky number ir {num}.</p>
  </div>,
  document.getElementById("root")
);
