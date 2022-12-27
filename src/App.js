import { useState } from 'react';
import './App.css';

function App() {
  const emp = [
    {
      name : "hardik1",
      email : "hardik1@gmail.com"
    },
    {
      name : "mayur2",
      email : "mayur2@gmail.com"
    },
    {
      name : "milan3",
      email : "milan3@gmail.com"
    }
  ]

  const [student, setStudent] = useState(emp);

  let onClickChange = () => {
    let data = student.map((i,ind) => {
      if (ind === 0) {
        i.name = i.name ? "blank" : "hardik"
      }
      return i
    })
    console.log(data);
    setStudent(data);
  }

  return (
      <div className='App'>
        hooks
        {
          student.map((i) => {
            return (
              <p key={Math.random()}>name is {i.name}</p>
            )
          })
        }
        <button onClick={onClickChange}>Change</button>
      </div>
  )
}

export default App;
