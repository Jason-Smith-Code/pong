import React, { useEffect, useRef } from "react";
import "./Players.css";

export const Player = ({ xpos }) => {
  // collision detection

  // https://stackoverflow.com/questions/9768291/check-collision-between-certain-divs

  // velocity

  const player = useRef();
  useEffect(() => {
    if (player != null) {
      player.current.style.left = `${xpos}px`;
      if (xpos < 0) {
        player.current.style.left = "0px";
      }
      if (xpos > 598) {
        player.current.style.left = "598px";
      }
    }
  }, [xpos]);

  return (
    <>
      <div ref={player} id="Player" className="bar"></div>
    </>
  );
};
