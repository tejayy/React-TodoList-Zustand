
import { useTodoStore } from './useTodoListStore'

const AnotherComponent = () => {
  const {todos} = useTodoStore();

  return (
    <div>
      <h2>Another Component</h2>
      {todos.map((todo) => (
        <p key={todo.id}>{todo.text}</p>
      ))}
    </div>
  )
}

export default AnotherComponent