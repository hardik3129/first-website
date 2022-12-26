import { Component } from 'react';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        id: "111",
        title: "post title 111",
        desc: "This is a test desc 111",
        student : {
          name : "krunal",
          id : 123
        },
        age : 20,
        valid : true
      }
  }
  onClickChange = () => {
    this.setState({student : {name : "hardik",id : this.state.valid ? 456 : 123}})
    this.setState({valid : this.state.valid ? false : true})
  }

  render() {
    return (
        <div className='App'>
          name is {this.state.student.name} <br />
          id is {this.state.student.id} <br />
          valid is {this.state.valid ? "yes" : "no"} <br />
          <button onClick={this.onClickChange}>Change</button>
        </div>
    )
  }
}

export default App;
