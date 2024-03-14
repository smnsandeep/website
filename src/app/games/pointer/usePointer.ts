import React, { useState, useEffect } from "react";

export enum TargetType {
  Normal,
  PowerUp,
  Damage,
}

interface Target {
  x: number;
  y: number;
  speedX: number;
  speedY: number;
  type: TargetType;
}

export const usePointerCatcherGame = () => {
  const [targets, setTargets] = useState<Target[]>([]);
  const [score, setScore] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(60);
  const [gameOver, setGameOver] = useState<boolean>(false);

  const createTarget = (type: TargetType): Target => {
    const maxX = window.innerWidth - (type === TargetType.PowerUp || type === TargetType.Damage ? 30 : 50);
    const maxY = window.innerHeight - (type === TargetType.PowerUp || type === TargetType.Damage ? 30 : 50);

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    const speedX = (Math.random() - 0.5) * 5;
    const speedY = (Math.random() - 0.5) * 5;

    return { x, y, speedX, speedY, type };
  };

  useEffect(() => {
    const initialTargets = Array.from({ length: 5 }, () =>
      createTarget(TargetType.Normal)
    );
    initialTargets.push(createTarget(TargetType.PowerUp));
    initialTargets.push(createTarget(TargetType.Damage));

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
    if (clickedTarget.type === TargetType.PowerUp) {
      setTimeLeft((prevTime) => prevTime + 2);
    } else if (clickedTarget.type === TargetType.Damage) {
      setTimeLeft((prevTime) => (prevTime >= 2 ? prevTime - 2 : 0));
    } else {
      setScore((prevScore) => prevScore + 1);
    }

    const updatedTargets = [...targets];
    updatedTargets.splice(
      index,
      1,
      createTarget(clickedTarget.type)
    );
    setTargets(updatedTargets);

    setTimeLeft((prevTime) => (prevTime > 1 ? prevTime - 1 : prevTime));
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
              (target.type === TargetType.PowerUp || target.type === TargetType.Damage ? 30 : 50)
        ) {
          speedX = -speedX;
        }
        if (
          y <= 0 ||
          y >=
            window.innerHeight -
              (target.type === TargetType.PowerUp || target.type === TargetType.Damage ? 30 : 50)
        ) {
          speedY = -speedY;
        }

        return {
          x,
          y,
          speedX,
          speedY,
          type: target.type,
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

  return {
    targets,
    score,
    timeLeft,
    gameOver,
    handleTargetInteraction,
    handleShareLinkedIn,
    handleShareTwitter,
  };
};
