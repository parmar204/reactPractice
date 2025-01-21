import React, { useState } from 'react'
import queAndAns from '.'

const Quiz = () => {

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0) // Track the current question index
    const [score, setScore] = useState(0) // Track the score
    const [selectedOption, setSelectedOption] = useState('') // Track the selected option
    const [showScore, setShowScore] = useState(false) // show the score at end

    const currentQuestion = queAndAns[currentQuestionIndex]

    const handleOptionClick = (option) => {
        setSelectedOption(option)
    }

    const handleNextOption = () => {
        if (selectedOption === currentQuestion.ans) {
            setScore(score + 1)
        }

        setSelectedOption('');

        if (currentQuestionIndex < queAndAns.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1)
        } else {
            setShowScore(true)
        }
    }

    const handleResetQuiz = () => {
        setScore(0);
        setCurrentQuestionIndex(0);
        setShowScore(false);
        setSelectedOption('');
    };

  return (
    <div className='h-screen flex justify-center items-center bg-gray-100'>
        <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg">
            {
                showScore ? (
                    <div className='text-center'>
                        <h2 className="text-2xl font-bold mb-4">Your Score: {score}/{queAndAns.length}</h2>
                        <button className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700" onClick={handleResetQuiz}>Restart Quiz</button>
                    </div>
                ) : (
                    <div>
                        <h2 className="text-xl font-bold mb-4">Question {currentQuestionIndex + 1}/{queAndAns.length}</h2>
                        <p className="mb-4">{currentQuestion.question}</p>
                        <div className="flex flex-col gap-2">
                            {
                                [currentQuestion.opt1, currentQuestion.opt2, currentQuestion.opt3, currentQuestion.opt4].map((option, index) => (
                                    <button key={index}
                                        className={`py-2 px-4 rounded ${selectedOption === option ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                                        onClick={() => handleOptionClick(option)}
                                    >
                                        {option}
                                    </button>
                                ))
                            }
                        </div>
                        <div className='mt-4 flex justify-end'>
                            <button className="py-2 px-4 bg-green-500 text-white rounded hover:bg-green-700"
                                disabled={!selectedOption} // Disable if no option is selected
                                onClick={handleNextOption}
                            >
                                {currentQuestionIndex === queAndAns.length - 1 ? 'Finish' : 'Next'}
                            </button>
                        </div>
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default Quiz