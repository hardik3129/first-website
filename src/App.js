import './App.css';
import data from './data.json'
import Header from './pages/header'
import About from './pages/about.js'

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
    <>
      <Header data1={data} name="admin1"/>
      <About />
      {data.map((i) => {
            return (
              <div key={Math.random()}>
                <br></br>
                element id {i.id} <button onClick={() => copy_path(i)}>Copy id</button>
                <br></br>
                element Title {i.title}
                <br></br>
                element no. {Math.floor(Math.random()*1000)}
              </div>
            )
      })}
    </>
  )
}

export default App;
