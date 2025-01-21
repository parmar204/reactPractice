import React, { useState } from 'react'

const Password = () => {

    const [password, setPassword] = useState('')
    const [uppercase, setUppercase] = useState(true);
    const [lowercase, setLowercase] = useState(false);
    const [numbers, setNumbers] = useState(false);
    const [symbols, setSymbols] = useState(false);
    const [length, setLength] = useState(10);

    const generatePassword = () => {
        const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowerSet = "abcdefghijklmnopqrstuvwxyz";
        const numberSet = "0123456789";
        const symbolSet = "!@#$%^&*()_+=-{}[]|:;<>,.?/";

        let allCharacters = "";
        if (uppercase) allCharacters += upperSet;
        if (lowercase) allCharacters += lowerSet;
        if (numbers) allCharacters += numberSet;
        if (symbols) allCharacters += symbolSet;

        if (allCharacters.length === 0) {
            alert("Please select at least one character type!");
            return;
        }

        let newPassword = "";

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * allCharacters.length)
            newPassword += allCharacters[randomIndex]
        }

        setPassword(newPassword)
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(password);
        alert("Password copied to clipboard!");
    };

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-r from-blue-400 to-indigo-600">
      <div className="sm:w-[400px] w-full mx-2 p-4 rounded-md bg-white shadow-2xl">
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
          Random Password Generator
        </h2>
        <div className="flex gap-1 mb-4">
          <input
            type="text"
            readOnly
            value={password}
            className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={copyToClipboard}
            className="bg-blue-500 text-white py-2 px-3 rounded-md hover:bg-blue-700 transition"
          >
            Copy
          </button>
        </div>
        <div className="flex flex-col gap-3 p-2">
          <div className="flex justify-between items-center">
            <label htmlFor="upper" className="text-gray-700">
              Include Uppercase Letters
            </label>
            <input
              type="checkbox"
              id="upper"
              checked={uppercase}
              onChange={(e) => setUppercase(e.target.checked)}
            />
          </div>
          <div className="flex justify-between items-center">
            <label htmlFor="lower" className="text-gray-700">
              Include Lowercase Letters
            </label>
            <input
              type="checkbox"
              id="lower"
              checked={lowercase}
              onChange={(e) => setLowercase(e.target.checked)}
            />
          </div>
          <div className="flex justify-between items-center">
            <label htmlFor="number" className="text-gray-700">
              Include Numbers
            </label>
            <input
              type="checkbox"
              id="number"
              checked={numbers}
              onChange={(e) => setNumbers(e.target.checked)}
            />
          </div>
          <div className="flex justify-between items-center">
            <label htmlFor="symbol" className="text-gray-700">
              Include Symbols
            </label>
            <input
              type="checkbox"
              id="symbol"
              checked={symbols}
              onChange={(e) => setSymbols(e.target.checked)}
            />
          </div>
          <div className="flex justify-between items-center">
            <label htmlFor="length" className="text-gray-700">
              Password Length
            </label>
            <input
              type="number"
              id="length"
              value={length}
              max={30}
              min={4}
              className="w-16 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setLength(Number(e.target.value))}
            />
          </div>
        </div>
        <button
          onClick={generatePassword}
          className="w-full bg-blue-500 py-2 mt-4 rounded-md text-white font-bold hover:bg-blue-700 transition"
        >
          Generate Password
        </button>
      </div>
    </div>
  )
}

export default Password