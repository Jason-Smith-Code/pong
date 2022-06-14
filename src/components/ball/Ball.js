import "./Ball.css";
import React, { useRef, useEffect } from "react";

export const Ball = ({ start, context }) => {
  const ball = useRef();

  // trigger the ball movement

  if (start) {
    // context.beginPath();
    // //arena.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI);
    // context.closePath();
    // context.fill();
  }

  // the balls speed will increase by 1 after each collision with the player or opponent
  // This will make the game mroe and more difficult as time goes by
  // The speed will reset when either player wins a round
  let speed = 5;

  // The ball starts in the middle, and will drop towards the player 1st
  // The direct will be altered on every collision
  let angle = "down";

  // direction
  let dx = Math.cos(angle) * speed;
  let dy = Math.sin(angle) * speed;

  useEffect(() => {
    if (ball !== null && ball !== undefined) {
      // when the ball has changed its position get the bounding clientrect
      const boundries = ball.current.getBoundingClientRect();
      console.log(boundries);
    }
  }, []);

  return <div ref={ball} id="Ball"></div>;
};
