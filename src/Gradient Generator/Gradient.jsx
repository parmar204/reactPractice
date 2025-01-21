import React, { useState } from 'react'

const Gradient = () => {

    const [color1, setColor1] = useState('#ff0000')
    const [color2, setColor2] = useState('#0000ff')

    // Function to generate a random color
    const getRandomColor = () => {
        return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")}`;
    };

    // Handlers for generating random colors
    const handleColor1 = () => setColor1(getRandomColor());
    const handleColor2 = () => setColor2(getRandomColor());

    const copytoClipBoard = () => {
        navigator.clipboard.writeText(`background: "linear-gradient(to right, ${color1}, ${color2})"`)
        alert("copied to clip board")
    }

  return (
    <div
      className="h-screen flex flex-col justify-center items-center"
      style={{
        background: `linear-gradient(to right, ${color1}, ${color2})`,
      }}
    >
        <h1 className="text-3xl text-white font-bold mb-6">Gradient Generator</h1>
        <div className="flex gap-4 mx-2">
            <button
            onClick={handleColor1}
            className="py-2 px-4 rounded-md bg-blue-500 text-white hover:bg-blue-700 transition"
            >
            Change First Color
            </button>
            <button
            onClick={handleColor2}
            className="py-2 px-4 rounded-md bg-green-500 text-white hover:bg-green-700 transition"
            >
            Change Second Color
            </button>
        </div>
        <div className="text-white mt-4 cursor-pointer mx-2" onClick={copytoClipBoard}>
            <p className='text-center'>Copy to Clipboard:</p>
            <p>background: 'linear-gradient(to right, {color1}, {color2})'</p>
        </div>
    </div>
  )
}

export default Gradient