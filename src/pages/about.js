import React from "react"
import Contact from './contact.js'

function about({employ}) {
    const newdata = [
        {
          name : "hardik",
          email : "hardik@gmail.com"
        },
        {
          name : "mayur",
          email : "mayur@gmail.com"
        },
        {
          name : "milan",
          email : "milan@gmail.com"
        },
    ]
    console.log(employ);
    return (
        <>
            <Contact newcnt={newdata}/>
            <h1>About</h1>
        </>
    )
}

export default about;