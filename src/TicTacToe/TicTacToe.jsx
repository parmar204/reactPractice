import React, { useState } from 'react'

const TicTacToe = () => {

    const [board, setBoard] = useState(Array(9).fill(null))
    const [isXNext, setIsXNext] = useState(true);

    const winner = calculateWinner(board)

    const handleClick = (index) => {
        if (board[index] || winner) return

        const newBoard = [...board]
        newBoard[index] = isXNext ? "X" : "O"
        setBoard(newBoard)
        setIsXNext(!isXNext)
    }

    const renderCell = (index) => {
        return (
            <button onClick={() => handleClick(index)} className={`w-24 h-24 text-3xl font-bold flex items-center justify-center border border-white border-[2px] ${board[index] === "X" ? "text-blue-600" : "text-red-600"}`}>
                {board[index]}
            </button>
        )
    }

    const handleReset = () => {
        setBoard(Array(9).fill(null))
        setIsXNext(true)
    }

  return (
    <div className='h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 to-purple-200'>
        <h1 className="text-3xl font-bold mb-4 text-gray-700">Tic-Tac-Toe</h1>
        <div className='grid grid-cols-3 gap-1'>
            {board.map((_,index) => renderCell(index))}
        </div>
        <div className="mt-4">
            {winner ? (
            <p className="text-2xl font-bold text-green-600">
                Winner: {winner}
            </p>
            ) : (
            <p className="text-xl text-gray-700">
                Next Player: {isXNext ? "X" : "O"}
            </p>
            )}
            <button
            onClick={handleReset}
            className="mt-3 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
            Reset Game
            </button>
        </div>
    </div>
  )
}

const calculateWinner = (squares) => {
    const lines = [
        [0, 1, 2], // Rows
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6], // Columns
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8], // Diagonals
        [2, 4, 6],
    ];

    for(let line of lines){
        const [a,b,c] = line
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }

    return null
}

export default TicTacToe