import React from 'react'
import { Navigate } from 'react-router'

const PrivetRouting = (props) => {

    if(!JSON.parse(localStorage.getItem('user'))?.email) {
      return <Navigate to='/login' />
    }
    
  return (
    <>
        {props.children}
    </>
  )
}

export default PrivetRouting
