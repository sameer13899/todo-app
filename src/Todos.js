import React from 'react';
import TodoItem from './TodoItem';

function Todos(props) {
  return (
    <div className='todos'>
      <h1 className='todos-heading'>Todo List</h1>
      {props.todos.length === 0
        ? 'No Todos to display'
        : props.todos.map((todo, i) => (
            <TodoItem key={i} todo={todo} deleteTodo={props.deleteTodo} />
          ))}
    </div>
  );
}

export default Todos;
