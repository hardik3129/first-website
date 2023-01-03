// import React, { useState } from 'react'
// import './App.css'
// import Clock from './pages/clock'

// const App = () => {

//   const [time, settime] = useState(null)

//   setInterval(() => {
//     settime(new Date().toLocaleTimeString())
//   }, 1000);
  
//   return (
//     <div>
//       {time}
//     </div>
//   )
// }

// export default App

import React, { Component } from 'react'

class clock extends Component {

  constructor() {
    super()
    this.state = {
      clk : null
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({clk : new Date().toLocaleTimeString()})
    }, 1000);
  }
    
  render() {
    return (
      <div>
        {this.state.clk}
      </div>
    )
  }
}

export default clock