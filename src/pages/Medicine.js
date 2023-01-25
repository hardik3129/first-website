import React, { useEffect, useState } from 'react'
import Add_Medicine from '../components/Add_Medicine'
import Table from 'react-bootstrap/Table'

const Medicine = () => {
    const [show, setShow] = useState(false);
    const [MedicineList, setMedicineList] = useState([])
    const modalshow = () => {
        setShow(true)
    }

    useEffect(() => {
      setMedicineList(JSON.parse(localStorage.getItem('medicineData')) || [])
    },[show])

    const OnClickDelete = (id) => {
      const FilterData = MedicineList.filter((i) => {
        return i.id !== id
      })
      setMedicineList(FilterData)
      localStorage.setItem('medicineData',JSON.stringify(FilterData))
    }

    const OnClickEdit = () => {

    }
    
  return (
    <div className='my-3 container'>
        <h3 className='text-center fw-bold'>Medicine Table</h3>
        <Table striped bordered hover size="sm">
          <tbody>
            <tr>
              <th>Id</th>
              <th>Medicine Name</th>
              <th>Medicine Price</th>
              <th>Medicine Quantity</th>
              <th>Edit / Delete</th>
            </tr>
            {
              MedicineList.map((i) => {
                return (
                  <tr key={Math.random()}>
                    <td>{i.id}</td>
                    <td>{i.name}</td>
                    <td>{i.price}</td>
                    <td>{i.quantity}</td>
                    <td>
                      <button className='btn btn-danger me-3' onClick={() => OnClickDelete(i.id)}>Delete</button>
                      <button className='btn btn-success' onClick={() => OnClickEdit(i.id)}>Edit</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
        <Add_Medicine display={show} setdisplay={setShow} />
        <div className='text-center'>
            <button className='btn btn-primary' onClick={modalshow}>Add Medicine</button>
        </div>
    </div>
  )
}

export default Medicine
