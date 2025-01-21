import React, { useState, useEffect } from "react";

const Typing = () => {
  const [text, setText] = useState(""); // User input
  const [sampleText, setSampleText] = useState("This is a sample text for testing typing speed."); // Text to type
  const [timeLeft, setTimeLeft] = useState(60); // Countdown timer
  const [isStarted, setIsStarted] = useState(false); // Game state
  const [mistakes, setMistakes] = useState(0); // Mistakes count
  const [typedChars, setTypedChars] = useState(0); // Total characters typed
  const [wpm, setWpm] = useState(0); // Words per minute
  const [cpm, setCpm] = useState(0); // Characters per minute

  // Start the game
  const startGame = () => {
    setIsStarted(true);
    setTimeLeft(60);
    setText("");
    setMistakes(0);
    setTypedChars(0);
    setWpm(0);
    setCpm(0);
  };

  // Handle typing input and disable backspace
  const handleInput = (e) => {
    const input = e.target.value;

    // Disable backspace
    if (e.nativeEvent.inputType === "deleteContentBackward") {
      return;
    }

    // Count typed characters
    setTypedChars((prev) => prev + 1);

    // Check for mistakes
    const inputWords = text.trim().split(" "); // Split user input into words
    const sampleWords = sampleText.split(" "); // Split sample text into words

    let currentMistakes = 0;

    // Compare each word in user input with the corresponding word in sample text
    inputWords.forEach((word, i) => {
        if (word !== sampleWords[i]) {
            currentMistakes++;
        }
    });

// Update mistakes count
setMistakes(currentMistakes);


    setText(input);
  };

  // Handle submission
  const handleSubmit = () => {
    if (!isStarted) return;

    setIsStarted(false);

    // Calculate WPM and CPM
    const words = text.split(" ").filter((word, i) => word === sampleText.split(" ")[i]).length;
    setWpm(words);
    setCpm(typedChars);
  };

  // Timer countdown
  useEffect(() => {
    let timer;
    if (isStarted && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      clearInterval(timer);
      handleSubmit(); // Automatically submit when timer ends
    }
    return () => clearInterval(timer);
  }, [isStarted, timeLeft]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Typing Speed Tester</h1>
      {isStarted ? (
        <>
          <p className="mb-4 text-lg">
            Time Left: <span className="font-bold">{timeLeft}s</span>
          </p>
          <div className="mb-6 p-4 bg-white shadow-lg rounded-md w-full max-w-2xl">
            <p className="text-gray-800 text-lg">{sampleText}</p>
          </div>
          <input
            type="text"
            value={text}
            onChange={handleInput}
            disabled={!isStarted}
            className="w-full max-w-2xl p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleSubmit}
            className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Submit
          </button>
          <p className="mt-4 text-red-500 text-sm">Backspace is disabled during typing.</p>
        </>
      ) : (
        <>
          <div className="mb-6 p-4 bg-white shadow-lg rounded-md w-full max-w-2xl">
            <h2 className="text-xl font-semibold">Results</h2>
            <p>WPM: {wpm}</p>
            <p>CPM: {cpm}</p>
            <p>Mistakes: {mistakes}</p>
          </div>
          <button
            onClick={startGame}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Start Typing Test
          </button>
        </>
      )}
    </div>
  );
};

export default Typing;