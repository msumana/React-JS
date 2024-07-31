import "./css/style.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="app">
      <Header />
      <Todo />
    </div>
  );
}

export default App;
