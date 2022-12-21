import React from 'react'
import About from './about';

function Header(props) {
  // console.log(props.name);
  // props.data1.map((i) => {
  //   console.log(i.title);
  // })
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
      },
  ]
  console.log(emp);
  return (
    <div>
        <About employ={emp} />
        <h1>header</h1>
        {
          props.data1.map((i) => {
            return (
              <p key={Math.random()}>{"header id "+i.id}</p>
            )
          })
        }
    </div>
  )
}

export default Header
