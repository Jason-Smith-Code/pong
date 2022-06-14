import React, { useState, useRef, useEffect } from "react";

import { Opponent } from "../players/Opponent";
import { Player } from "../players/Player";
import { Score } from "../score/Score";
import "./Game.css";
import "../ball/Ball.css";

export const Game = () => {
  const [start, setStart] = useState(false);
  const [xPosition, setXPosition] = useState(0);
  const [ballPosition, setBallPosition] = useState({
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  });
  const [arenaPosition, setArenaPosition] = useState({
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  });

  let screenWidth = window.innerWidth;
  let gameWidth = 800;
  let configuredWidth = screenWidth / 2 - gameWidth / 2 + 98;

  const handleMouseMove = (event) => {
    // Centre the tracking point to the middle of the game view
    setXPosition(event.screenX - configuredWidth);
  };

  function startGame() {
    setStart(true);
  }

  const arena = useRef();
  const ball = useRef();

  useEffect(() => {
    let arenaBoundaries = arena.current.getBoundingClientRect();
    setArenaPosition({
      left: arenaBoundaries.x,
      top: arenaBoundaries.y,
      right: arenaBoundaries.x + arenaBoundaries.width,
      bottom: arenaBoundaries.y + arenaBoundaries.height,
    });

    if (start) {
      if (ball != null) {
        // Get & set the ball boundaries so that I can use them for collision detection
        let ballBoundaries = ball.current.getBoundingClientRect();
        setBallPosition({
          left: ballBoundaries.x,
          top: ballBoundaries.y,
          right: ballBoundaries.x + ballBoundaries.width,
          bottom: ballBoundaries.y + ballBoundaries.height,
        });
      }
    }
  });

  return (
    <div onMouseMove={handleMouseMove} id="screen">
      <Score />
      <div id="metrics">
        <p>Ball Left {ballPosition.left}</p>
        <p>Ball Top {ballPosition.top}</p>
        <p>Ball Right {ballPosition.right}</p>
        <p>Ball Bottom {ballPosition.bottom}</p>
        <br></br>
        <p>Arena Left {arenaPosition.left}</p>
        <p>Arena Top {arenaPosition.top}</p>
        <p>Arena Right {arenaPosition.right}</p>
        <p>Arena Bottom {arenaPosition.bottom}</p>
      </div>
      <div ref={arena} id="game-container">
        {!start && (
          <button id="start" onClick={startGame}>
            Start
          </button>
        )}
        {start && (
          <>
            <Opponent />
            <div ref={ball} id="Ball"></div>
            <Player xpos={xPosition} />
          </>
        )}
      </div>
    </div>
  );
};
