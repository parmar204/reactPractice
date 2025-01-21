import React, { useState } from 'react'

const RPSGame = () => {

    const [userChoice, setUserChoice] = useState(null)
    const [computerChoice, setComputerChoice] = useState(null);
    const [result, setResult] = useState("");
    const [userScore, setUserScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);
    const [round, setRound] = useState(1);

    const choices = ["Rock", "Paper", "Scissors"]

    const playRound = (choice) => {
        if (round > 10) return

        const computerRandomChoice  = choices[Math.floor(Math.random() * 3)]
        setUserChoice(choice);
        setComputerChoice(computerRandomChoice);
        // Determine the winner of the round
        if (choice === computerRandomChoice) {
            setResult("It's a Tie!");
        } else if (
            (choice === "Rock" && computerRandomChoice === "Scissors") ||
            (choice === "Paper" && computerRandomChoice === "Rock") ||
            (choice === "Scissors" && computerRandomChoice === "Paper")
        ) {
            setResult("You Win!");
            setUserScore(userScore + 1);
        } else {
            setResult("Computer Wins!");
            setComputerScore(computerScore + 1);
        }

        setRound(round + 1)
    }

    const resetGame = () => {
        setUserChoice(null);
        setComputerChoice(null);
        setResult("");
        setUserScore(0);
        setComputerScore(0);
        setRound(1);
    }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-400 to-purple-500 text-white">
      <h1 className="text-4xl font-bold mb-6">Rock, Paper, Scissors</h1>
      {round <= 10 ? (
        <>
          <p className="mb-4 text-xl">Round: {round} / 10</p>
          <div className="flex space-x-4 mb-6">
            {choices.map((choice) => (
              <button
                key={choice}
                onClick={() => playRound(choice)}
                className="px-4 py-2 bg-blue-700 hover:bg-blue-800 rounded-lg"
              >
                {choice}
              </button>
            ))}
          </div>
          {userChoice && computerChoice && (
            <div className="text-center mb-6">
              <p>Your Choice: {userChoice}</p>
              <p>Computer's Choice: {computerChoice}</p>
              <p className="font-bold mt-4">{result}</p>
            </div>
          )}
        </>
      ) : (
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold mb-4">Game Over</h2>
          <p className="text-xl">Final Scores:</p>
          <p className="mt-2">You: {userScore}</p>
          <p>Computer: {computerScore}</p>
          <h3 className="mt-4 text-2xl">
            {userScore > computerScore
              ? "🎉 You are the Winner!"
              : userScore === computerScore
              ? "It's a Draw!"
              : "💻 Computer Wins!"}
          </h3>
          <button
            onClick={resetGame}
            className="mt-6 px-6 py-2 bg-green-600 hover:bg-green-700 rounded-lg"
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  )
}

export default RPSGame