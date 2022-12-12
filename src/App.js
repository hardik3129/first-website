import logo from './logo.svg';
import './App.css';
import data from './data.json'

function App() {
  
  // function clickevent () {
  //   class student {
  //     constructor (name,id) {
  //       this.name = name
  //       this.id = id
  //     }
  //     bus () {
  //       console.log(`${this.name} and ${this.id}`);
  //     }
  //   }
  //   let d = new student("hardik",Math.floor(Math.random()*1000)).bus();
  // }
  
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
          
          RUSHABH SUTARIYA
        </a>
      </header>
      {data.map((i) => {
        return <div key={Math.random()}>
          <br></br>
          element id {i.id}
          <br></br>
          element Title {i.title}
          <br></br>
          element no. {Math.floor(Math.random()*1000)}
        </div>
      })}
    </div>
  );
}

export default App;
