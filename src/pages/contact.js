import React from 'react'

function contact({newcnt}) {
  return (
    <div>
        <h2>Hardik Chauhan</h2>
        {
            newcnt.map((i) => {
                return (
                    <p key={Math.random()}>{i.name}</p>
                )
            })
        }
    </div>
  )
}

export default contact