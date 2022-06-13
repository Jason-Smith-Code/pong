import React, { useState } from "react";

export const Score = () => {
  const [playerScore, setPlayerScore] = useState(0);
  const [opponentScore, setOpponentScore] = useState(0);
  return (
    <div id="Score">
      <p>
        {playerScore} : {opponentScore}
      </p>
    </div>
  );
};
