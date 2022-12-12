import logo from './logo.svg';
import './App.css';

function App() {
  
  // class student{
  //   constructor (name,email,password) {
  //     this.name = name
  //     this.email = email
  //     this.password = password
  //   }
  //   neWork() {
  //     console.log(`my self ${this.name} ${this.email} ${this.password}`);
  //   }
  // }

  // class food extends student {
  //   constructor (name,email,password,pizza) {
  //     super(name,email,password,pizza);
  //     this.pizza = pizza
  //   }
  // }
  
  // function onclickevent () {
  //   const std = new student('Hardik','hardik@gmail.com','12345');
  //   const coalge = new student('Krunal','krunal@gmail.com','67890');
  //   console.log(std);
  //   console.log(coalge);
  //   const foods = new food('Rushabh','rushabh@gmail.com','098765','double cheez pizza');
  //   console.log(foods);
  //   console.log(coalge.neWork());
  // }

  class student {
    constructor (name,id,password) {
      this.name = name
      this.id = id
      this.password = password
    }
  }

  class bus extends student {
    constructor (name,id,password,bus) {
      super (name,id,password,bus)
      this.bus = bus
    }
  }

  function std() {
    const school = new student("Hardik","123","0909");
    const coalge = new student("Hardik1","hard123","hard0909");
    const openBus = new bus("Hardik","123","0909","volvo");
    console.log(school);
    console.log(coalge);
    console.log(openBus);
  }
  
  const onclickevent = () => {
    console.log(std());
  }
  
  return (
    <div className="App">
      <header onClick={onclickevent} className="App-header">
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
    </div>
  );
}

export default App;
