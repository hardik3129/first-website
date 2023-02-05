import React, { useEffect, useState } from 'react'
import AddMedicine from '../components/AddMedicine'
import Table from 'react-bootstrap/Table'
import EditMedicine from '../components/EditMedicine';

const Medicine = () => {
    const [show, setShow] = useState(false);
    const [Editshow, setEditShow] = useState(false);
    const [MedicineList, setMedicineList] = useState([])
    const [selectdelete, setselectdelete] = useState([])
    const [Editdata, setEditdata] = useState('')

    const modalshow = () => {
        setShow(true)
    }
    const Editmodalshow = (data) => {
      setEditdata(data)
      setEditShow(true)
    }

    useEffect(() => {
      setMedicineList(JSON.parse(localStorage.getItem('medicineData')) || [])
    },[show,Editshow,selectdelete])

    // ================ BULK DELETE ==============
    const OnClickBulkDelete = (event , value) => {
      const {checked} = event.target
      if (checked === true) {
        setselectdelete([...selectdelete,value])
      } else {
        let Deletedata = selectdelete.filter((event) => event !== value)
        setselectdelete([Deletedata])
      }
    }
    const BulkDelete = () => {
      let Med = MedicineList.filter((i) => {
        return !selectdelete.includes(i.id)
      })
      setselectdelete([])
      localStorage.setItem('medicineData',JSON.stringify(Med))
    }

    // ============= DELETE ===============
    const OnClickDelete = (id) => {
      if (window.confirm() === true) {
        const FilterData = MedicineList.filter((i) => {
          return i.id !== id
        })
        setMedicineList(FilterData)
        localStorage.setItem('medicineData',JSON.stringify(FilterData))
      }
    }
    
  return (
    <div className='my-3 container'>
        <AddMedicine display={show} setdisplay={setShow} />
        <EditMedicine display={Editshow} setdisplay={setEditShow} Edit={Editdata} />
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
                  <tr className='align-middle' key={Math.random()}>
                    <td>
                      <input type='checkbox' checked={selectdelete.includes(i.id)} onClick={(event) => OnClickBulkDelete(event,i.id)} />
                    </td>
                    <td>{i.id}</td>
                    <td>{i.name}</td>
                    <td>{i.price}</td>
                    <td>{i.quantity}</td>
                    <td>
                      <button className='btn btn-danger me-3' onClick={() => OnClickDelete(i.id)}>Delete</button>
                      <button className='btn btn-success' onClick={() => Editmodalshow(i)}>Edit</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
        <img src={localStorage.getItem('Profile')} width='300' />
    </div>
  )
}

export default Medicine
