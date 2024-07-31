import { useState } from "react";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleTodos(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }
  return (
    <form className="form" onSubmit={handleTodos}>
      <div className="container">
        <input
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
          type="text"
          placeholder="Enter To do item"
          value={todo.name}
        />
        <button type="submit">Add</button>
      </div>
    </form>
  );
}
