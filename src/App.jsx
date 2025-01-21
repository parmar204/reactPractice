import React from 'react'
import { Route, Routes } from 'react-router-dom'
import TodoList from './ToDoList/TodoList'
import HomePage from './HomePage'
import Temperature from './Temperature Conversion/Temperature'
import Wheather from './Wheather App/Wheather'
import Notes from './Notes/Notes'
import Quiz from './Quiz/Quiz'
import ColorGenerator from './Color generator/ColorGenerator'
import Gradient from './Gradient Generator/Gradient'
import Password from './Password Generator/Password'
import QrCode from './QrCode generator/QrCode'
import RSPGame from './RPS Game/RPSGame'
import Typing from './Typing speed tester/Typing'
import Paragraph from './Random Paragraph Generator/Paragraph'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/todo' element={<TodoList />} />
      <Route path='/temperature' element={<Temperature />} />
      <Route path='wheather' element={<Wheather />} />
      <Route path='/note' element={<Notes />} />
      <Route path='/quiz' element={<Quiz />} />
      <Route path='/color' element={<ColorGenerator />} />
      <Route path='/gradient' element={<Gradient />} />
      <Route path='/password' element={<Password />} />
      <Route path='/qrcode' element={<QrCode />} />
      <Route path='/rsp' element={<RSPGame />} />
      <Route path='/typing' element={<Typing />} />
      <Route path='/para' element={<Paragraph />} />
    </Routes>
  )
}

export default App