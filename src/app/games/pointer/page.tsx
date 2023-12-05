'use client'
import React, { useState, useEffect } from "react";

interface Target {
  x: number;
  y: number;
  speedX: number;
  speedY: number;
  isStar?: boolean;
  isTimeReducer?: boolean;
}

const PointerCatcherGame: React.FC = () => {
  const [targets, setTargets] = useState<Target[]>([]);
  const [score, setScore] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(60);
  const [gameOver, setGameOver] = useState<boolean>(false);

  useEffect(() => {
    const createTarget = (
      isStar: boolean = false,
      isTimeReducer: boolean = false
    ): Target => {
      const maxX = window.innerWidth - (isStar || isTimeReducer ? 30 : 50);
      const maxY = window.innerHeight - (isStar || isTimeReducer ? 30 : 50);

      const x = Math.random() * maxX;
      const y = Math.random() * maxY;
      const speedX = (Math.random() - 0.5) * 5;
      const speedY = (Math.random() - 0.5) * 5;

      return { x, y, speedX, speedY, isStar, isTimeReducer };
    };

    const initialTargets = Array.from({ length: 5 }, () =>
      createTarget(false, false)
    );
    initialTargets.push(createTarget(true, false));
    initialTargets.push(createTarget(false, true));

    setTargets(initialTargets);

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timer);
          setGameOver(true);
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleTargetInteraction = (index: number): void => {
    const clickedTarget = targets[index];
    if (clickedTarget.isStar) {
      setTimeLeft((prevTime) => prevTime + 2);
    } else if (clickedTarget.isTimeReducer) {
      setTimeLeft((prevTime) => (prevTime >= 2 ? prevTime - 2 : 0));
    } else {
      setScore((prevScore) => prevScore + 1);
    }

    const updatedTargets = [...targets];
    updatedTargets.splice(
      index,
      1,
      createTarget(clickedTarget.isStar, clickedTarget.isTimeReducer)
    );
    setTargets(updatedTargets);

    setTimeLeft((prevTime) => (prevTime > 1 ? prevTime - 1 : prevTime));
  };

  const createTarget = (
    isStar: boolean = false,
    isTimeReducer: boolean = false
  ): Target => {
    const maxX = window.innerWidth - (isStar || isTimeReducer ? 30 : 50);
    const maxY = window.innerHeight - (isStar || isTimeReducer ? 30 : 50);

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    const speedX = (Math.random() - 0.5) * 5;
    const speedY = (Math.random() - 0.5) * 5;

    return { x, y, speedX, speedY, isStar, isTimeReducer };
  };

  const moveTargets = (): void => {
    setTargets((prevTargets) => {
      return prevTargets.map((target) => {
        let { x, y, speedX, speedY } = target;

        // Easing function
        const easingFactor = 0.1;
        const dx = target.x - x;
        const dy = target.y - y;
        speedX += dx * easingFactor;
        speedY += dy * easingFactor;

        x += speedX;
        y += speedY;

        // Bounce off the walls
        if (
          x <= 0 ||
          x >=
            window.innerWidth -
              (target.isStar || target.isTimeReducer ? 30 : 50)
        ) {
          speedX = -speedX;
        }
        if (
          y <= 0 ||
          y >=
            window.innerHeight -
              (target.isStar || target.isTimeReducer ? 30 : 50)
        ) {
          speedY = -speedY;
        }

        return {
          x,
          y,
          speedX,
          speedY,
          isStar: target.isStar,
          isTimeReducer: target.isTimeReducer,
        };
      });
    });
  };

  useEffect(() => {
    if (!gameOver) {
      const updateInterval = setInterval(() => {
        moveTargets();
      }, 30);

      return () => clearInterval(updateInterval);
    }
  }, [gameOver]);

  const handleShareLinkedIn = (): void => {
    const url = encodeURIComponent("https://your-game-url.com");
    const title = encodeURIComponent(
      `Check out my score on the Pointer Catcher Game: ${score}`
    );
    const summary = encodeURIComponent("Can you beat my score? Play now!");
    const linkedInShareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}&summary=${summary}`;
    window.open(linkedInShareUrl, "_blank");
  };

  const handleShareTwitter = (): void => {
    const twitterShareUrl = `https://twitter.com/intent/tweet?text=Check+out+my+score+on+the+Pointer+Catcher+Game%3A+${score}!+Can+you+beat+me%3F+Play+now%21&url=https%3A%2F%2Fyour-game-url.com`;
    window.open(twitterShareUrl, "_blank");
  };

  return (
    <div className="game-container relative h-screen dark:bg-gray-800">
      {!gameOver ? (
        targets.map((target, index) => (
          <div
            key={index}
            className={`target ${target.isStar ? "star bg-green-600" : ""} ${
              target.isTimeReducer
                ? "time-reducer bg-red-600"
                : "regular bg-blue-400"
            } w-10 h-10 absolute cursor-pointer rounded-full`}
            style={{
              left: `${target.x}px`,
              top: `${target.y}px`,
            }}
            onMouseOver={() => handleTargetInteraction(index)}
            onTouchStart={() => handleTargetInteraction(index)}
          ></div>
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
