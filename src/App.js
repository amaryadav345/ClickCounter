import "./App.css";
import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

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
        {count ? <h1>{count}</h1> : <h1 id="text-display">{count}</h1>}
        <div className="buttonDiv">
        <Button id="incr" onClick={onAdd}>
          <AddIcon/>
        </Button>
        <Button id="decr" onClick={onSub}>
          <DeleteIcon/>
        </Button>
        </div>
      </div>
    </div>
  );
};

export default App;
