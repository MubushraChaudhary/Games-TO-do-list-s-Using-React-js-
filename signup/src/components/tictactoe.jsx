import React, { useState, useEffect } from "react";
import "./tictactoe.css";

const initialBoard = Array(9).fill("");

const Tictactoe = () => {
  const [board, setBoard] = useState(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    if (!winner && currentPlayer === "O") {
      const computerMove = getComputerMove();
      if (computerMove !== null) {
        makeMove(computerMove);
      }
    }
  }, [currentPlayer, winner]);

  const getAvailableCells = (board) => {
    const availableCells = [];
    for (let i = 0; i < board.length; i++) {
      if (!board[i]) {
        availableCells.push(i);
      }
    }
    return availableCells;
  };

  const checkWinner = (board) => {
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    return null;
  };

  const makeMove = (index) => {
    if (!board[index] && !winner) {
      const updatedBoard = [...board];
      updatedBoard[index] = currentPlayer;
      setBoard(updatedBoard);

      const gameWinner = checkWinner(updatedBoard);
      if (gameWinner) {
        setWinner(gameWinner);
      } else {
        setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
      }
    }
  };

  const getComputerMove = () => {
    const availableCells = getAvailableCells(board);
    if (availableCells.length === 0) {
      return null;
    }
    return availableCells[Math.floor(Math.random() * availableCells.length)];
  };

  const resetGame = () => {
    setBoard(initialBoard);
    setCurrentPlayer("X");
    setWinner(null);
  };

  return (
    <div className="tictactoe">
      <h1>Tic Tac Toe</h1>
      <div className="board">
        {board.map((cell, index) => (
          <div key={index} className="cell" onClick={() => makeMove(index)}>
            {cell}
          </div>
        ))}
      </div>
      {winner && <p>Winner: {winner}</p>}
      {!winner && board.every((cell) => cell) && <p>It's a tie!</p>}
      <button onClick={resetGame}>Restart</button>
    </div>
  );
};

export default Tictactoe;
