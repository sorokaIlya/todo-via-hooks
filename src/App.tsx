import './App.css';
import { TodoInput } from './todo-components/todo-input';
import { TodoList } from './todo-components/todo-list';
import { TodoFiler } from './todo-components/todo-filter';

function App() {
  return (
    <div className="App">
      <h3>Todo application</h3>
      <TodoFiler />
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
