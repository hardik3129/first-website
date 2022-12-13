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

  let array1 = [
    {
      id: "555",
      title: "post title 555",
      desc: "This is a test desc 555"
    },
    {
      id: "666",
      title: "post title 666",
      desc: "This is a test desc 666"
    },
    {
      id: "777",
      title: "post title 777",
      desc: "This is a test desc 777"
    }
  ];
  let array2 = [
    {
      id: "888",
      title: "post title 888",
      desc: "This is a test desc 888"
    },
    {
      id: "999",
      title: "post title 999",
      desc: "This is a test desc 999"
    },
    {
      id: "000",
      title: "post title 000",
      desc: "This is a test desc 000"
    }
  ];

  let array = [...array1,...array2];

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
          {array.map((i) => {
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
