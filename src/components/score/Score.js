import React, { useState } from "react";
import "./Score.css";
export const Score = () => {
  const [playerScore, setPlayerScore] = useState(0);
  const [opponentScore, setOpponentScore] = useState(0);

  //  When either score reaches 5, scores are reset and game ends
  return (
    <div id="Score">
      <h1>React Pong</h1>
      <h2>Score</h2>
      <p>
        {playerScore} : {opponentScore}
      </p>
    </div>
  );
};
