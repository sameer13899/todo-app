import React, { useState } from 'react';

function AddTodo({ addTodo }) {
  const [todoTitle, setTodoTitle] = useState('');
  const [todoDesc, setTodoDesc] = useState('');
  const submit = () => {
    addTodo(todoTitle, todoDesc);
    setTodoTitle('');
    setTodoDesc('');
  };
  return (
    <div className="todos">
      <h1>Add new task</h1>
      <div className="add-todo">
        <input
          type="text"
          value={todoTitle}
          onChange={e => setTodoTitle(e.target.value)}
          className="todo-input"
          placeholder="Title"
        />
        <textarea
          value={todoDesc}
          onChange={e => setTodoDesc(e.target.value)}
          className="todo-input"
          placeholder="Description"
          rows="4"
        ></textarea>
        <button onClick={submit} className="delete">
          ADD
        </button>
      </div>
    </div>
  );
}

export default AddTodo;
