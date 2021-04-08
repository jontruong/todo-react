import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList'

function App() {
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
      <h1>
        Jon's To Do List {inputText}</h1>
        
      </header>
      <Form 
      todos={todos} 
      setTodos={setTodos} 
      inputText = {inputText}
      setInputText={setInputText}></Form>
      <TodoList setTodos={setTodos} todos={todos}></TodoList>
      

    </div>
  );
}

export default App;
