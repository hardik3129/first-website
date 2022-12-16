import logo from './logo.svg';
import './App.css';
import data from './data.json'

function App() {
  
  let chek = data.filter((i) => i.id === 555)
  chek.map((i) => {
    return console.log(i);
  });

  let loot = data.filter((i) => i.title === "post title 444");
  loot.map((i) => {
    return console.log(loot);
  })
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        HARDIK CHAUHAN
        </a>
      </header>
    </div>
  );
}

export default App;
