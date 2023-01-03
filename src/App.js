import React, { useState, Component  } from 'react'
import './App.css'

const App = () => {

  const [time, settime] = useState(null)

  setInterval(() => {
    settime(new Date().toLocaleTimeString())
  }, 1000);
  
  return (
    <div style={{fontFamily:"digital-7", fontSize:"30px"}}>
      {time}
      <Clock />
    </div>
  )
}

class Clock extends Component {

  constructor() {
    super()
    this.state = {
      clk : new Date().toLocaleTimeString()
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
export default App