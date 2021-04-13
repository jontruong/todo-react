import React, { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList'

function App() {
 //STATE
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([])
  
//RUN ONCE WHEN THE APP STARTS
  useEffect(() => {
    getLocalTodos();
  }, []);

  //USE EFFECT
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
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

  const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos))
  };

  const getLocalTodos = () =>{
    if(localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));

    }else{
      let todoLocal = JSON.parse(localStorage.getItem('todos', JSON.stringify(todos)))
      setTodos(todoLocal)
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
