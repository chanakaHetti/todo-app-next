'use client';

import React, { useContext } from 'react';

import { TodoContext } from '@/context/todo-context';

const TodoList = () => {
  const { todos } = useContext(TodoContext);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            // onChange={() => handleToggleCompleted(todo.id)}
            className="mr-2 accent-emerald-500/25"
          />
          <span
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          >
            {todo.title}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
