import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import About from './pages/about.jsx'
import Home from './pages/home.jsx'
import Contact from './pages/contact.jsx'
import './App.css'

const App = () => {
  
  return (
    <div>
      <div className='d-flex justify-space'>
        <div>LoGo</div>
        <div className='d-flex'>
          <Link to='/'>Home</Link>
          <Link to='/About'>About</Link>
          <Link to='/Contact'>Contact</Link>
        </div>
      </div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Contact' element={<Contact/>} />
      </Routes>
    </div>
  )
}

export default App
