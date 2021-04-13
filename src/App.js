import React, { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList'

function App() {
 //state
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([])
  
  //functions
  useEffect(() => {
    filterHandler();
  }, [todos, status])
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
          setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
        default:
          setFilteredTodos(todos);
          break;
    }
  }
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
      setInputText={setInputText}
      setStatus={setStatus}></Form>
      <TodoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos}></TodoList>
      

    </div>
  );
}

export default App;
