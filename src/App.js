import "./App.css";
import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const onAdd = () => {
    setCount((num) => {
      return num + 1;
    });
  };

  const onSub = (num) => {
    setCount((num) => {
      if (num > 0) return num - 1;
      else alert("Sorry,Already Zero");
      return 0;
    });
  };

  return (
    <div className="App">
      <div className="card">
        <h1>Counter App</h1>
        <h1>{count}</h1>
        <button className="incr" onClick={onAdd}>
          Increament
        </button>
        <button className="decr" onClick={onSub}>
          Decreament
        </button>
      </div>
    </div>
  );
};

export default App;
