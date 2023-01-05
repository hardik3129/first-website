import { useEffect, useState } from "react";
import './App.css'

function App() {

  const [Count, setCount] = useState(0)
  useEffect(() => {
    console.log("mounting = ",Count);
    return () => {
      console.log("unmounting = ",Count)
    }
  },[Count])

  let changePlush = () => {
    setCount(Count + 1)
  }
  const changeMinus = () => {
    if (Count > 0) {
      setCount(Count - 1)
    }
  }
  
  return (
    <div className="App">
      <button onClick={changeMinus}>-</button>
      {Count}
      <button onClick={changePlush}>+</button>
    </div>
  );
}

export default App;
