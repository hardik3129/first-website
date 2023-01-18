import React from "react";
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/home"
import Departments from "./pages/departments";
import Head_foot from './layouts/header_footer'
import Context from "./pages/contact";
import Login from "./pages/Login";
import './App.css'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Head_foot><Home /></Head_foot>}/>
        <Route path="/departments" element={<Head_foot><Departments /></Head_foot>}/>
        <Route path="/contact" element={<Head_foot><Context /></Head_foot>}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </div>
  )
}

export default App;
