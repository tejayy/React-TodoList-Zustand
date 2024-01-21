import { useState } from "react";
import { useTodoStore } from "../components/useTodoListStore";

const TodoList = () => {
  const [todoValue, setTodoValue] = useState("");
  const { todos, addTodo, deleteTodo, completeTodo } = useTodoStore(
    (state) => state
  );


  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(todoValue);
    setTodoValue("");
  }

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <label htmlFor="new-todo" className=" ">New Todo</label>
        <div style={{ display: "flex" }}>
          <input
            type="text"
            name="newTodo"
            id="new-todo"
            value={todoValue}
            onChange={(e) => setTodoValue(e.target.value)}
            style={{ marginRight: "10px", backgroundColor:'#ccc',  }}
          />
          <button type="submit">Add</button>
        </div>
      </form>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              marginBottom: "10px",
              padding: "10px",
              border: "1px solid #ddd",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderRadius: "5px",
            }}
          >
            <span
              style={{
                textDecoration: todo.isCompleted ? "line-through" : "none",
              }}
            >
              {todo.text}{" "}
            </span>
            {!todo.isCompleted ? (
              <button
                onClick={() => completeTodo(todo.id)}
                style={{ marginLeft: "10px" }}
              >
                Done
              </button>
            ) : null}
            <button
              onClick={() => deleteTodo(todo.id)}
              style={{ marginLeft: "10px", color: "red" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
