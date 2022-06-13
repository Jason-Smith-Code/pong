import React, { useState, useEffect } from "react";

import { Ball } from "../ball/Ball";
import { Opponent } from "../players/Opponent";
import { Player } from "../players/Player";
import "./Game.css";
export const Game = () => {
  const [coords, setCoords] = useState(0);
  const [globalCoords, setGlobalCoords] = useState(0);

  useEffect(() => {
    // 👇️ get global mouse coordinates
    const handleWindowMouseMove = (event) => {
      setGlobalCoords(event.screenX);
    };
    window.addEventListener("mousemove", handleWindowMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
    };
  }, []);

  const handleMouseMove = (event) => {
    setCoords(event.clientX - event.target.offsetLeft);
  };

  return (
    <div id="game-container" onMouseMove={handleMouseMove}>
      <Opponent />
      <Ball />
      <Player xpos={coords} />
    </div>
  );
};
