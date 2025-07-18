import React from 'react'
import { ToDoList } from './components/ToDo'

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md text-amber-300 ">
        <h1 className="text-3xl font-bold mb-4 text-center">My To-Do List</h1>
        <ToDoList />
      </div>
    </div>
  )
}

export default App
