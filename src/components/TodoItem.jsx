export default function TodoItem({ item, todos, setTodos }) {
  function deleteItem(item) {
    setTodos(todos.filter((todo) => todo != item));
  }
  function handleStrike(name) {
    const newTodos = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newTodos);
    console.log(todos);
  }
  const className = item.done ? "completed" : "";
  return (
    <div className="item">
      <div className="itemName">
        <span className={className} onClick={() => handleStrike(item.name)}>
          {item.name}
        </span>
        <span>
          <button onClick={() => deleteItem(item)} className="delteButton">
            x
          </button>
        </span>
      </div>
      <hr className="line" />
    </div>
  );
}
