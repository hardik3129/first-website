import React, { Component,useEffect, useState } from 'react'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      count : 1,
      valid : true
    }
  }

  componentWillMount() {
    this.setState({count : this.state.count + 1})
  }

  componentDidUpdate(prevProps, prevstate) {
    if (prevstate.count !== this.state.count) {
      this.setState({valid : this.state.valid ? false : true})
    }
  }
  
  sub = () => {
    this.setState({count : this.state.count + 1})
  }
  
  render() {
    return (
      <div style={{backgroundColor:'green'}}>
        <h2>Function Component</h2>
        <FunRed Cnt={Function}/>
        <br/>
        <h2>Class Component</h2>
        count is {this.state.count} <br />
        valid is {this.state.valid ? "yes" : "no"}
        <button onClick={this.sub}>submit</button>
      </div>
    )
  }
}

export default App

const FunRed = (props) => {

  return (
    <div style={{backgroundColor : 'red'}}>
      <props.Cnt />
    </div>
  )
}

function Function() {

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
        if (ind === 1) {
          i.name = "Rushabh Shutariya"
        }
        return i
      })
    )
    // First run
    return () => {
      // Last run
    }
  },[])

  useEffect(() => {
    return () => {
      console.info(val)
    }
  },[val])

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