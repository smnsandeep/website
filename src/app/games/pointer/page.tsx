"use client";
// PointerCatcherGame.tsx
import React from "react";
import { TargetType, usePointerCatcherGame } from "./usePointer";

const PointerCatcherGame: React.FC = () => {
  const {
    targets,
    score,
    timeLeft,
    gameOver,
    handleTargetInteraction,
    handleShareLinkedIn,
    handleShareTwitter,
  } = usePointerCatcherGame();

  return (
    <div className="game-container relative h-screen dark:bg-gray-800">
      {!gameOver ? (
        targets.map((target, index) => (
          <div
            key={index}
            className={`target w-10 h-10 absolute cursor-pointer rounded-full`}
            style={{
              left: `${target.x}px`,
              top: `${target.y}px`,
            }}
            onMouseOver={() => handleTargetInteraction(index)}
            onTouchStart={() => handleTargetInteraction(index)}
          >
            {target.type === TargetType.Normal && <p>Normal</p>}
            {target.type === TargetType.PowerUp && (
              <p className="text-green-500">Powerup</p>
            )}
            {target.type === TargetType.Damage && (
              <p className="text-red-500">Damage</p>
            )}
          </div>
        ))
      ) : (
        <div className="end-screen flex flex-col justify-center items-center h-full">
          <h1 className="text-4xl font-bold mb-4 text-white">Game Over!</h1>
          <p className="text-xl mb-4 text-white">Your final score: {score}</p>
          <div className="share-buttons">
            <button
              onClick={handleShareLinkedIn}
              className="bg-green-500 text-white px-4 py-2 rounded-md mr-2"
            >
              Share on LinkedIn
            </button>
            <button
              onClick={handleShareTwitter}
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Share on Twitter
            </button>
          </div>
        </div>
      )}
      <div className="score-timer absolute top-4 right-4 text-xl text-gray-200">
        {!gameOver ? `Score: ${score} | Time Left: ${timeLeft}s` : ""}
      </div>
    </div>
  );
};

export default PointerCatcherGame;
