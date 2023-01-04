import React from "react";
import { Route, Routes } from 'react-router-dom'
import Header from "./components/header"
import Home from "./pages/home"
import Departments from "./pages/departments";
import Head_foot from './layouts/header_footer'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Head_foot><Home /></Head_foot>}/>
        <Route path="/departments" element={<Head_foot><Departments /></Head_foot>}/>
      </Routes>
    </div>
  )
}

export default App;
