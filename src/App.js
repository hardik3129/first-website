// import React, { Component } from 'react'

// class App extends Component {

//   constructor(props) {
//     super(props)
//     this.state = {
//       count : 1,
//       valid : true
//     }
//   }

//   componentWillMount() {
//     this.setState({count : this.state.count + 1})
//   }

//   componentDidUpdate(prevProps, prevstate) {
//     if (prevstate.count !== this.state.count) {
//       this.setState({valid : this.state.valid ? false : true})
//     }
//   }
  
//   sub = () => {
//     this.setState({count : this.state.count + 1})
//   }
  
//   render() {
//     return (
//       <div>
//         count is {this.state.count} <br />
//         valid is {this.state.valid ? "yes" : "no"}
//         <button onClick={this.sub}>submit</button>
//       </div>
//     )
//   }
// }

// export default App

import userEvent from '@testing-library/user-event';
import React, { useEffect, useState, useSyncExternalStore } from 'react'

function App() {

  let data = [
    {
      name : "hardik",
      couunt : 0,
      valid : true
    },
    {
      name : "rushabh",
      couunt : 5,
      valid : false
    }
  ]
  const [val, setval] = useState(data)
  useEffect(() => {
    setval(
      val.map((i,ind) => {
        if (ind === 0) {
          i.name = "Hardik Chauhan"
        }
        return i
      })
    )
    return () => {
      // alert("are you sure to leave this page");
    }
  },[])

  let updatedata = () => {
    setval(
      val.map((i,ind) => {
        if (ind === 0) {
          i.name = "Hardik"
        }
        return i
      })
    )
  }
  
  return (
    <div>
      {val.map((i) => {
        return ( 
          <div key={Math.random()}>
            name is  {i.name} <br/>
            count is {i.couunt} <br/>
            valid is {i.valid ? "yes" : "no"} <br/>
          </div>
        )
      })}
      <button onClick={updatedata}>Submit</button>
    </div>
  )
}

export default App