'use client';

import React, { createContext, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoContextProps {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
  // fetchTodos: () => Promise<Todo[]>;
  // createTodo: (title: string) => Promise<Todo>;
  // updateTodo: (todo: Todo) => Promise<Todo>;
  // deleteTodo: (id: number) => Promise<void>;
}

const MockTodo = [
  {
    id: 1,
    title: 'First Todo',
    completed: true,
  },
  {
    id: 2,
    title: 'Second Todo',
    completed: false,
  },
  {
    id: 3,
    title: 'Third Todo',
    completed: true,
  },
];

const TodoContext = createContext<TodoContextProps>({} as TodoContextProps);

const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>(MockTodo);
  // const queryClient = useQueryClient();

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
