import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

function header_footer(props) {
  return (
    <div>
      <Header />
        {props.children}
      <Footer />
    </div>
  )
}

export default header_footer
