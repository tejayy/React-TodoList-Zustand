import AnotherComponent from './components/AnotherComponent'
import TodoList from './components/TodoList'


const App = () => {



  return (
    <div>
      <h1 className="items-center">Todo list App with Zustand</h1>
      <TodoList />
      <AnotherComponent />
    </div>
  );
}

export default App