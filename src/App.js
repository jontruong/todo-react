import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList'

function App() {
  const [inputText, setInputText] = useState("")
  return (
    <div className="App">
      <header>
      Jon's To Do List
      </header>
      <Form></Form>
      <TodoList></TodoList>
      

    </div>
  );
}

export default App;
