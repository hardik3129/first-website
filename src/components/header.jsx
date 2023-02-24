import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Header = () => {

    const Location = useLocation()
    const [user, setuser] = useState(false)

    useEffect(() => {
        if (localStorage.getItem('user')) {
            setuser(true)
        } else {
            setuser(false)
        }   
    },[Location])

    let OnclickLogout = () => {
        localStorage.removeItem('user')
    }
    
  return (
    <div>
        <div className="main-header">
            <div id="topbar" className="d-flex align-items-center fixed-top">
            <div className="container d-flex justify-content-between">
                <div className="contact-info d-flex align-items-center">
                <i className="bi bi-envelope" /> <a href="mailto:contact@example.com">cityhospital@example.com</a>
                <i className="bi bi-phone" /> +91 9988776655
                </div>
                <div className="d-none d-lg-flex social-links align-items-center">
                <a href="#" className="twitter"><i className="bi bi-twitter" /></a>
                <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
                <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
                <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
                </div>
            </div>
            </div>
            <header id="header" className="fixed-top">
            <div className="container d-flex align-items-center">
                <div className="logo">
                <a href="index.html">
                    <h1 className="logo me-auto">City</h1><br />
                    <h2 className="logo-tiny-text me-auto">Multispeciality Hospital</h2>
                </a>
                </div>
                <nav id="navbar" className="navbar order-last order-lg-0">
                <ul>
                    <li><Link className="nav-link scrollto active" to="/">Home</Link></li>
                    <li><Link className="nav-link scrollto" to="/datatable">Data Table</Link></li>
                    <li><Link className="nav-link scrollto" to="/menuledatatable">Manualy Data Table</Link></li>
                    <li><Link className="nav-link scrollto" to="/medicine">Medicine</Link></li>
                    <li>
                        {
                            JSON.parse(localStorage.getItem('user'))?.role === 'admin' ? <Link className="nav-link scrollto" to="/patient">Patient</Link> : 
                            <Link className="nav-link scrollto" to="/contact">Promice Api</Link>
                        }
                    </li>
                    {/* <li></li> */}
                    <li><Link className="nav-link scrollto" to='/docRegister'>Docter Register</Link></li>
                </ul>
                <i className="bi bi-list mobile-nav-toggle" />
                </nav>
                <Link to='/appoinment' className="appointment-btn scrollto"><span className="d-none d-md-inline">Make an</span>
                Appointment</Link>
                {user === false ? <Link to='/login' className="appointment-btn scrollto">
                <span className="d-none d-md-inline">Login/ Signup</span>
                </Link> : 
                <Link onClick={OnclickLogout} to="/login" className="appointment-btn scrollto">
                <span className="d-none d-md-inline">Logout</span>
                </Link>}
            </div>
            </header>
        </div>
    </div>
  )
}

export default Header
