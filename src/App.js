import React from "react";
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/home"
import Head_foot from './layouts/header_footer'
import Contact from "./pages/ContactRedux";
import Login from "./pages/Login";
import './App.css'
import Appoinment from "./pages/Appoinment";
import Docter_register from "./pages/Docter_register";
import Medicine from "./pages/Medicine";
import Signup from './pages/Sginup'
import PrivetRouting from "./utils/PrivetRouting";
import UpdateMedicine from "./pages/UpdateMedicine";
import Patient from "./pages/Patient";
import DataTable from "./pages/DataTable";
import ManualyDataTable from './pages/ManualyDataTable'
import AdminRouting from "./utils/AdminRouting";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Head_foot><Home /></Head_foot>}/>
        <Route path="/datatable" element={<Head_foot><DataTable /></Head_foot>}/>
        <Route path="/menuledatatable" element={<Head_foot><ManualyDataTable /></Head_foot>}/>
        <Route path="/medicine" element={<PrivetRouting><Head_foot><Medicine /></Head_foot></PrivetRouting>}/>
        <Route path="/updatemedicine/:id" element={<PrivetRouting><Head_foot><UpdateMedicine /></Head_foot></PrivetRouting>}/>
        <Route path="/patient" element={<AdminRouting><Head_foot><Patient /></Head_foot></AdminRouting>}/>
        <Route path="/contact" element={<Head_foot><Contact /></Head_foot>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/appoinment" element={<Head_foot> <Appoinment /> </Head_foot>}/>
        <Route path="/docRegister" element={<Head_foot> <Docter_register /> </Head_foot>}/>
        <Route path="/signup" element={<Signup />}/>
      </Routes>
    </div>
  )
}

export default App;
