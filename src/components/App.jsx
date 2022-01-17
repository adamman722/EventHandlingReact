import React, { useState } from "react";
let count = 0;

function App() {
  const [heading, setHeading] = useState("Hello");
  const [isMouseOver, setMouseOver] = useState(false);
  const [colorrr, setColor] = useState("Black");
  function ClickMe() {
    count < 1 ? setHeading("Submitted") : setHeading("Already submitted");
    count++;
    console.log(count);
  }

  function mouseOver() {
    setMouseOver(true);
  }
  function mouseOut() {
    setMouseOver(false);
  }
  return (
    <div className="container">
      <h1>{heading}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMouseOver ? "Black" : "white" }}
        onMouseOver={mouseOver}
        onMouseOut={mouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
