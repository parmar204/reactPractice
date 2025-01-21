import React, { useState } from 'react'

const ColorGenerator = () => {

  const [color, setColor] = useState("#ff0000")

  const generateRandomColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`
    setColor(randomColor)
  }

  const copyToClipBoard = () => {
    navigator.clipboard.writeText(color)
    alert(`Copied ${color} to clipboard!`)
  }

  return ( 
    <div className='h-screen flex justify-center items-center bg-gray-800'>
      <div className='sm:w-[400px] w-full p-2 bg-white mx-2 rounded-md'>
        <h2 className='text-xl text-center mb-2'>Random color generator</h2>
        <div className='h-[200px] rounded-md mb-2' style={{ backgroundColor: color }}></div>
        <div className='flex gap-3 items-center'>
          <p className='bg-slate-200 w-full text-center p-2 rounded-md cursor-pointer' onClick={copyToClipBoard} style={{color: color}}>{color}</p>
          <button className='bg-blue-500 text-white p-2 rounded-md' onClick={generateRandomColor}>Randomize</button>
        </div>
      </div>
    </div>
  )
}

export default ColorGenerator