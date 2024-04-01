import TodoList from '@/components/todo-list';
import { TodoProvider } from '@/context/todo-context';

export default function Home() {
  return (
    <TodoProvider>
      <h3>Todo List</h3>
      <TodoList />
    </TodoProvider>
  );
}
