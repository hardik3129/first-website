import React, { useState } from 'react'
import Add_Medicine from '../components/Add_Medicine'

const Medicine = () => {
    const [show, setShow] = useState(false);
    const modalshow = () => {
        setShow(true)
    }
  return (
    <div className='my-3'>
        <h3 className='text-center'>Medicine Table</h3>
        <Add_Medicine display={show} setdisplay={setShow} />
        <div className='text-center'>
            <button className='btn btn-primary' onClick={modalshow}>Add Medicine</button>
        </div>
    </div>
  )
}

export default Medicine
