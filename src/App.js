import { useState } from "react";
import './App.css'

function App() {

  const [count, setcount] = useState(0)
  const changePlush = () => {
    if (count < 5) {
      setcount(count + 1)
    }
  }
  const changeMinus = () => {
    if (count > 0) {
      setcount(count - 1)
    }
  }
  
  return (
    <div className="App">
      <button onClick={changeMinus}>-</button>
      {count}
      <button onClick={changePlush}>+</button>
    </div>
  );
}

export default App;
