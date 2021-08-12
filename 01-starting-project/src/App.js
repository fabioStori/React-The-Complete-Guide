import Todo from "./components/Todo";

//jsx code - html code in js
function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo title="Lean React" />
      <Todo title="Master React" />
      <Todo title="Explore React" />
    </div>
  );
}

export default App; //a component is a function that returns a JSX (something that can be rendered in the browser, including just html)
