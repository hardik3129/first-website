import React from 'react'
import Header from './header'
const about = (props) => {
  
  return (
    <div>
      <h1>This is First Object data {props.value[0].name}</h1>
      <h1>This is First Object data {props.value[1].name}</h1>
      <h1>This is First Object data {props.value[2].name}</h1>
      <Header Head={props.value} />
    </div>
  )
}

export default about
