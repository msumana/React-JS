import TodoItem from "./TodoItem";

export default function TodoList({ todos, setTodos }) {
  const sortedTodos = todos.slice().sort((a, b) => a.done - b.done);
  return (
    <div className="list">
      {sortedTodos.map((item) => (
        <TodoItem
          key={item.name}
          item={item}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
      ;
    </div>
  );
}
