import React, { useState, useEffect } from 'react';
import AddTodo from './AddTodo';
import './App.css';
import Header from './Header';
import Todos from './Todos';

function App() {
  let initTodo;
  if (localStorage.getItem('todos') === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem('todos'));
  }
  const deleteTodo = todo => {
    setTodos(todos.filter(e => e !== todo));
    // localStorage.setItem('todos', JSON.stringify(todos));
  };
  const addTodo = (title, desc) => {
    if (title && desc) {
      const todo = {
        title,
        desc,
      };
      setTodos([...todos, todo]);
    } else {
      alert('Title and Description cannot be blank !!!');
    }
    // localStorage.setItem('todos', JSON.stringify(todos));
  };
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App">
      <Header />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
