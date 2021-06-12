import React from 'react';

function TodoItem({ todo, deleteTodo }) {
  return (
    <div className="todo-item">
      <h2 className="title">{todo.title}</h2>
      <p className="desc">{todo.desc}</p>
      <button className="delete" onClick={() => deleteTodo(todo)}>
        DELETE
      </button>
    </div>
  );
}

export default TodoItem;
