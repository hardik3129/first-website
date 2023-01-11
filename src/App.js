import React from "react";

function App() {
  return (
    <div>
      {
        <ul>
          {['a', 'b', 'c'].map(function(item) {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      }
    </div>
  );
}

export default App;
