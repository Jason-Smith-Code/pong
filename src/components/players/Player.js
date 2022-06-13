import React, { useEffect, useRef } from "react";
import "./Players.css";

export const Player = ({ xpos }) => {
  // Set players position equal to the coords passed down from game
  const inputEl = useRef();
  console.log(inputEl);
  useEffect(() => {
    if (inputEl != null) {
      inputEl.current.style.left = `${xpos}px`;
    }
  }, [xpos]);

  return (
    <>
      <p>Rendered from Player:{xpos}</p>
      <div ref={inputEl} id="Player" className="bar"></div>
    </>
  );
};
