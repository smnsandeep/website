'use client'
import React, { useState, useEffect } from "react";

const Maze = () => {
  const gridSize = 10;
  const [playerPosition, setPlayerPosition] = useState(
    Math.floor(gridSize / 2)
  );
  const [mazeGrid, setMazeGrid] = useState(
    Array(gridSize)
      .fill()
      .map(() => Array(gridSize).fill(false))
  );
  const [stockData, setStockData] = useState(1000);

  useEffect(() => {
    const interval = setInterval(() => {
      const newStockData =
        stockData +
        (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 100);
      setStockData(newStockData);

      let newMazeGrid = mazeGrid.map((row) => [...row]);
      newMazeGrid.pop();
      newMazeGrid.unshift(Array(gridSize).fill(false));

      if (newStockData > stockData) {
        if (playerPosition + 1 < gridSize) {
          newMazeGrid[0][playerPosition + 1] = true;
        }
      } else {
        if (playerPosition - 1 >= 0) {
          newMazeGrid[0][playerPosition - 1] = true;
        }
      }

      setMazeGrid(newMazeGrid);
    }, 1000);

    return () => clearInterval(interval);
  }, [stockData, mazeGrid, playerPosition]);

  const movePlayer = (direction) => {
    const newPosition = playerPosition + (direction === "right" ? 1 : -1);
    if (newPosition >= 0 && newPosition < gridSize) {
      setPlayerPosition(newPosition);
    }
  };

  const renderMaze = () => {
    return mazeGrid.map((row, rowIndex) => (
      <div key={rowIndex} className="flex justify-center h-10">
        {row.map((cell, cellIndex) => (
          <div
            key={cellIndex}
            className={`w-10 h-10 border border-gray-400 ${
              cell ? "bg-green-500" : "bg-white"
            } ${
              cellIndex === playerPosition && rowIndex === gridSize - 1
                ? "bg-blue-500"
                : ""
            }`}
          ></div>
        ))}
      </div>
    ));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="h-1/2 w-full flex flex-col justify-end">
        {renderMaze()}
      </div>
      <div className="flex mt-4">
        <button
          onClick={() => movePlayer("left")}
          className="bg-blue-500 text-white py-2 px-4 rounded mr-2"
        >
          Left
        </button>
        <button
          onClick={() => movePlayer("right")}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Right
        </button>
      </div>
    </div>
  );
};

export default Maze;
