import React from 'react';
import './App.css';
import DisplayTodo from './components/DisplayTodo';
import Todo from './components/Todo';

function App() {
  return (
    <div className='p-10 h-screen bg-gradient-to-b from-indigo-700 to-cyan-500'>
      <div className='text-center'>
        <h1 className='text-4xl font-main'>TO DO LIST</h1>
      </div>
      <div className='my-10'>
        <Todo/>
      </div>
      <div className='mx-10 mt-10 h-3/4 overflow-scroll'>
        <DisplayTodo/>
      </div>
    </div>
  );
}

export default App;
