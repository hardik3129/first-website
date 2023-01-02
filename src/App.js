import React, { useEffect, useState } from 'react'
import './App.css'

const App = () => {

  const [time, settime] = useState(new Date().toLocaleTimeString())

  useEffect(() => {
    setInterval(() => {
      settime(new Date().toLocaleTimeString())
    }, 1000);
  },[])
  
  return (
    <div>
      {time}
    </div>
  )
}

export default App
