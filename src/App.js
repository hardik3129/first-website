import React from "react";
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/home"
import Departments from "./pages/departments";
import Head_foot from './layouts/header_footer'
import Context from "./pages/contact";
import Login from "./pages/Login";
import './App.css'
import Appoinment from "./pages/Appoinment";
import Docter_register from "./pages/Docter_register";
import Medicine from "./pages/Medicine";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Head_foot><Home /></Head_foot>}/>
        <Route path="/departments" element={<Head_foot><Departments /></Head_foot>}/>
        <Route path="/medicine" element={<Head_foot><Medicine /></Head_foot>}/>
        <Route path="/contact" element={<Head_foot><Context /></Head_foot>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/appoinment" element={<Head_foot> <Appoinment /> </Head_foot>}/>
        <Route path="/docRegister" element={<Head_foot> <Docter_register /> </Head_foot>}/>
      </Routes>
    </div>
  )
}

export default App;
