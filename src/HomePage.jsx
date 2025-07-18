import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4">
      <div className="w-full max-w-screen-sm p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Welcome to the Apps Hub
        </h1>
        <div className="grid grid-cols-1 gap-4">
          <Link
            to="/todo"
            className="block bg-purple-600 text-white text-lg font-medium text-center py-3 rounded-lg hover:bg-purple-700 shadow-lg"
          >
            To Do List
          </Link>
          <Link
            to="/temperature"
            className="block bg-pink-600 text-white text-lg font-medium text-center py-3 rounded-lg hover:bg-pink-700 shadow-lg"
          >
            Temperature Conversion
          </Link>
          <Link
            to="/wheather"
            className="block bg-blue-600 text-white text-lg font-medium text-center py-3 rounded-lg hover:bg-blue-700 shadow-lg"
          >
            Weather App
          </Link>
          <Link
            to="/note"
            className="block bg-green-600 text-white text-lg font-medium text-center py-3 rounded-lg hover:bg-green-700 shadow-lg"
          >
            Notes App
          </Link>
          <Link
            to="/quiz"
            className="block bg-orange-600 text-white text-lg font-medium text-center py-3 rounded-lg hover:bg-orange-700 shadow-lg"
          >
            Quiz App
          </Link>
          <Link
            to="/color"
            className="block bg-yellow-600 text-white text-lg font-medium text-center py-3 rounded-lg hover:bg-yellow-700 shadow-lg"
          >
            Random Color Generator
          </Link>
          <Link
            to="/gradient"
            className="block bg-purple-600 text-white text-lg font-medium text-center py-3 rounded-lg hover:bg-purple-700 shadow-lg"
          >
            Random Gradient Generator
          </Link>
          <Link
            to="/password"
            className="block bg-pink-600 text-white text-lg font-medium text-center py-3 rounded-lg hover:bg-pink-700 shadow-lg"
          >
            Password Generator
          </Link>
          <Link
            to="/qrcode"
            className="block bg-blue-600 text-white text-lg font-medium text-center py-3 rounded-lg hover:bg-blue-700 shadow-lg"
          >
            QR Code Generator
          </Link>
          <Link
            to="/rsp"
            className="block bg-green-600 text-white text-lg font-medium text-center py-3 rounded-lg hover:bg-green-700 shadow-lg"
          >
            Rock Paper Scissor Game
          </Link>
          <Link
            to="/typing"
            className="block bg-orange-600 text-white text-lg font-medium text-center py-3 rounded-lg hover:bg-orange-700 shadow-lg"
          >
            Typing speed Tester
          </Link>
          <Link
            to="/para"
            className="block bg-yellow-600 text-white text-lg font-medium text-center py-3 rounded-lg hover:bg-yellow-700 shadow-lg"
          >
            Random Paragraph Generator
          </Link>
          <Link
            to="/tictactoe"
            className="block bg-purple-600 text-white text-lg font-medium text-center py-3 rounded-lg hover:bg-purple-700 shadow-lg"
          >
            Tic-Tac-Toe
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
