import React, { useState, useEffect } from "react";

const HangmanGame = () => {
  const words = ["react", "javascript", "hangman", "programming", "computer"];
  const maxAttempts = 6;

  const [word, setWord] = useState("");
  const [attemptedLetters, setAttemptedLetters] = useState([]);
  const [attemptsLeft, setAttemptsLeft] = useState(maxAttempts);
  const [winningStreak, setWinningStreak] = useState(0);

  const getRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  };

  const resetGame = () => {
    setWord(getRandomWord());
    setAttemptedLetters([]);
    setAttemptsLeft(maxAttempts);
  };

  const handleLetterClick = (letter) => {
    if (!attemptedLetters.includes(letter)) {
      setAttemptedLetters([...attemptedLetters, letter]);
      if (!word.includes(letter)) {
        setAttemptsLeft(attemptsLeft - 1);
      }
    }
  };

  useEffect(() => {
    resetGame();
  }, []);

  useEffect(() => {
    if (attemptsLeft === 0) {
      alert(`You lost! The word was "${word}".`);
      resetGame();
      setWinningStreak(0);
    }
  }, [attemptsLeft]);

  useEffect(() => {
    if (word && attemptedLetters) {
      const wordSet = new Set(word);
      const correctLetters = [...wordSet].filter((letter) =>
        attemptedLetters.includes(letter)
      );
      if (correctLetters.length === wordSet.size) {
        alert(`You won! The word was "${word}".`);
        resetGame();
        setWinningStreak(winningStreak + 1);
      }
    }
  }, [attemptedLetters]);

  const renderWord = () => {
    return word
      .split("")
      .map((letter, index) => (
        <span key={index}>
          {attemptedLetters.includes(letter) ? letter : "_"}
        </span>
      ));
  };

  const renderAlphabet = () => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    return alphabet.map((letter) => (
      <button
        key={letter}
        onClick={() => handleLetterClick(letter)}
        disabled={attemptedLetters.includes(letter) || attemptsLeft === 0}
      >
        {letter}
      </button>
    ));
  };

  return (
    <div>
      <h1>Hangman Game</h1>
      <p>Attempts Left: {attemptsLeft}</p>
      <p>Winning Streak: {winningStreak}</p>
      <div className="word">{renderWord()}</div>
      <div className="alphabet">{renderAlphabet()}</div>
    </div>
  );
};

export default HangmanGame;
