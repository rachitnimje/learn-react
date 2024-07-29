import { useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }

  function decreaseCount() {
    if (count > 0) setCount(count - 1);
  }

  return (
    <>
      <h1>Chicken Counter</h1>
      <h2>Count: {count}</h2>
      <button onClick={increaseCount}>
        Increase (will become {count + 1})
      </button>
      <br /> <br />
      <button onClick={decreaseCount}>
        Decrease (will become {count - 1})
      </button>
    </>
  );
}

export default App;
