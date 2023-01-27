import React, { useEffect, useState } from 'react'
import AddMedicine from '../components/AddMedicine'
import Table from 'react-bootstrap/Table'

const Medicine = () => {
    const [show, setShow] = useState(false);
    const [MedicineList, setMedicineList] = useState([])
    const [selectdelete, setselectdelete] = useState([])

    const modalshow = () => {
        setShow(true)
    }

    useEffect(() => {
      setMedicineList(JSON.parse(localStorage.getItem('medicineData')) || [])
    },[show])

    const OnClickBulkDelete = (event) => {
      const {value, checked} = event.target
      if (checked === true) {
        setselectdelete([...selectdelete,value])
      } else {
        let Deletedata = selectdelete.filter((event) => event !== value)
        setselectdelete(Deletedata)
      }
    }
    const BulkDelete = () => {
      console.log(selectdelete);
    }

    const OnClickDelete = (id) => {
      const FilterData = MedicineList.filter((i) => {
        return i.id !== id
      })
      setMedicineList(FilterData)
      localStorage.setItem('medicineData',JSON.stringify(FilterData))
    }
    
  return (
    <div className='my-3 container'>
        <AddMedicine display={show} setdisplay={setShow} />
        <h3 className='text-center fw-bold'>Medicine Table</h3>
        <div className='text-center my-3'>
            <button className='btn btn-danger me-3' onClick={BulkDelete}>Bulk Delete</button>
            <button className='btn btn-primary' onClick={modalshow}>Add Medicine</button>
        </div>
        <Table striped bordered hover size="sm">
          <tbody>
            <tr>
              <th>Select Data</th>
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
                    <td>
                      <input type='checkbox' value={i.id} onClick={(event) => OnClickBulkDelete(event)} />
                    </td>
                    <td>{i.id}</td>
                    <td>{i.name}</td>
                    <td>{i.price}</td>
                    <td>{i.quantity}</td>
                    <td>
                      <button className='btn btn-danger me-3' onClick={() => OnClickDelete(i.id)}>Delete</button>
                      <button className='btn btn-success'>Edit</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
    </div>
  )
}

export default Medicine
