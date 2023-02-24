import React from 'react'
import { Navigate } from 'react-router'

const PublickRouting = (props) => {

    if(!localStorage.getItem('user')) {
      return <Navigate to='/login' />
    }
    
  return (
    <>
        {props.children}
    </>
  )
}

export default PublickRouting
