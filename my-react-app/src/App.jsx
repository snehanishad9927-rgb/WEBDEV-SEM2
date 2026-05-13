function App() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <div className="card">
        <h1>React Counter Application</h1>
        <h2>{count}</h2>

        <div className="buttons">
          <button onClick={increment}>Increment (+)</button>
          <button onClick={decrement}>Decrement (-)</button>
        </div>

        <button className="reset" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}
