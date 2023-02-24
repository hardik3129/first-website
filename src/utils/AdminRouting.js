import React from 'react'
import { Navigate } from 'react-router'

const AdminRouting = (props) => {

    if(!JSON.parse(localStorage.getItem('user'))?.role) {
      return <Navigate to='/login' />
    }
    
  return (
    <>
        {props.children}
    </>
  )
}

export default AdminRouting
