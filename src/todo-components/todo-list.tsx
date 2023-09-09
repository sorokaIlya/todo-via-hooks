import { useTodoStore } from '../provider/todo-provider';
import { TodoItem } from './todo-item';

export const TodoList = () => {
  const { todoStore } = useTodoStore();
  return (
    <div>
      {todoStore.getTodos.map(todo => (
        <TodoItem key={todo.id} todoItem={todo} />
      ))}
    </div>
  );
};
