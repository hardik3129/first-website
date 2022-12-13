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

  function copy_path(i) {
    navigator.clipboard.writeText(i.id);
  } 
  
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
      <table>
        <tbody>
          <tr>
            <td>Element id</td>
            <td>Title</td>
            <td>no.</td>
          </tr>
          {data.map((i) => {
            return <tr key={Math.random()}>
                  <td>{i.id} <button onClick={() => copy_path(i)}>Copy id</button></td>
                  <td>{i.title}</td>
                  <td>{Math.floor(Math.random()*1000)}</td>
                </tr>
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
