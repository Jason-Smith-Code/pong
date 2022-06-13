import React, { useEffect, useRef } from "react";
import "./Players.css";

export const Player = ({ xpos }) => {
  // When hovernig directly over the bar, it causes bugs

  // collision detection
  // velocity

  const inputEl = useRef();
  console.log(inputEl);
  useEffect(() => {
    if (inputEl != null) {
      inputEl.current.style.left = `${xpos}px`;
      if (xpos < 0) {
        inputEl.current.style.left = "0px";
      }
      if (xpos > 598) {
        inputEl.current.style.left = "598px";
      }
    }
  }, [xpos]);

  return (
    <>
      <p>Rendered from Player:{xpos}</p>
      <div ref={inputEl} id="Player" className="bar"></div>
    </>
  );
};
