import './App.css';
import React, { useState } from 'react';

function App() {

  let [valid, setvalid] = useState(true)

  let OnChnage = () => {
    setvalid(valid ? false : true)
  }
  
  return (
    <div className="App">
      {valid ? <h1>Apoinment Panding</h1> : <h1>Apoinment is ready</h1>}
      {}
      <button onClick={OnChnage}>Chnage</button>
    </div>
  );
}

export default App;
