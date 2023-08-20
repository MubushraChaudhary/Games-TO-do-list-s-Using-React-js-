import React, { Component } from "react";
import "./hangmanstyle.css";

const words = ["Task", "Programming", "Mubushra", "Bottle", "Mobile"];
const maxAttempts = 7;

class Hangman extends Component {
  constructor() {
    super();
    this.state = {
      selectedWord: "",
      attempts: 0,
      guessedLetters: new Set(),
      winningStreak: 0,
    };
  }

  componentDidMount() {
    this.resetGame();
  }

  componentDidUpdate() {
    if (this.state.attempts >= maxAttempts) {
      alert("Game Over! The word was: " + this.state.selectedWord);
      this.resetGame();
    } else if (!this.getDisplayWord().includes("_")) {
      alert("Congratulations! You won!");
      this.setState((prevState) => ({
        winningStreak: prevState.winningStreak + 1,
      }));
      this.resetGame();
    }
  }

  handleGuess = (letter) => {
    const { guessedLetters, selectedWord, attempts } = this.state;
    if (!guessedLetters.has(letter)) {
      this.setState((prevState) => ({
        guessedLetters: new Set([...prevState.guessedLetters, letter]),
        attempts: selectedWord.includes(letter)
          ? prevState.attempts
          : prevState.attempts + 1,
      }));
    }
  };

  resetGame = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    this.setState({
      selectedWord: words[randomIndex].toUpperCase(),
      attempts: 0,
      guessedLetters: new Set(),
    });
  };

  getDisplayWord = () => {
    const { selectedWord, guessedLetters } = this.state;
    return selectedWord
      .split("")
      .map((letter) => (guessedLetters.has(letter) ? letter : "_"))
      .join(" ");
  };

  render() {
    const { attempts, winningStreak } = this.state;
    const attemptsLeft = maxAttempts - attempts;

    return (
      <div className="hangman-container">
        <h1>Hangman Game</h1>
        <div className="word">{this.getDisplayWord()}</div>
        <div className="attempts">Attempts Left: {attemptsLeft}</div>
        <div className="letters">
          {Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ").map((letter) => (
            <button
              key={letter}
              onClick={() => this.handleGuess(letter)}
              disabled={
                this.state.guessedLetters.has(letter) || attempts >= maxAttempts
              }
            >
              {letter}
            </button>
          ))}
        </div>
        <div>Winning Streak: {winningStreak}</div>
        <button onClick={this.resetGame}>Restart</button>
      </div>
    );
  }
}

export default Hangman;
