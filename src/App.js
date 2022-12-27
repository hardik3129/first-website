// import { useState } from 'react';
// import './App.css';

// function App() {
//   const emp = [
//     {
//       name : "hardik1",
//       email : "hardik1@gmail.com"
//     },
//     {
//       name : "mayur2",
//       email : "mayur2@gmail.com"
//     },
//     {
//       name : "milan3",
//       email : "milan3@gmail.com"
//     }
//   ]

//   const [student, setStudent] = useState(emp);
  
//   let changeData = () => {
//     let g = 
//       student.map((i,index) => 
//           {
//             if (index === 0) {
//               i.name = "blank"
//             }
//             return i
//           }
//       )
    
//     console.log(g);
//     setStudent(g)
//   }

//   return (
//       <div className='App'>
//         Life cycle
//         {student.map((i) => {
//           return (
//             <div key={Math.random()}>
//               name is {i.name}
//             </div>
//           )
//         })}
//         <button onClick={changeData}>Change</button>
//       </div>
//   )
// }

// export default App;

import React, { Component } from 'react'
import './App.css'

export default class App extends Component {
  
  componentWillMount() {
    this.setState({cnt : this.state.cnt + 1})
  }
  
  constructor () {
    super();
    this.state = {
      cnt : 0,
      valid : true,
      name : "hardik"
    }
    this.props = {
      email : "dkfndkf@gmail.com"
    }
    console.log(this.state.cnt);
  }
  
  render() {
    console.log(this);
    return (
      <div className='App'>
        {this.state.cnt}
        <button onClick={this.onclickhandler}>submit</button>
      </div>
    )
  }
}
