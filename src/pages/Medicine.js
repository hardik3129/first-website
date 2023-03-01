import React, { useEffect, useState } from 'react'
import AddMedicine from '../components/AddMedicine'
import Table from 'react-bootstrap/Table'
import EditMedicine from '../components/EditMedicine';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { DeleteContactData } from '../redux/action/Contact.action';


const Medicine = () => {
    const Dispatch = useDispatch()
    const Navigate = useNavigate()
    const [show, setShow] = useState(false);
    const [Editshow, setEditShow] = useState(false);
    const [MedicineList, setMedicineList] = useState([])
    const [selectdelete, setselectdelete] = useState([])
    const [Sorting, setSorting] = useState([])
    const [Editdata, setEditdata] = useState('')
    const Data = useSelector((data) => data.Contactreduser.ContactData) //----- GET DATA from Redux Store by Provider -----

    const modalshow = () => {
        setShow(true)
    }
    const Editmodalshow = (data) => {
      setEditdata(data)
      Navigate(`/updatemedicine/${data}`)
    }

    useEffect(() => {
      setMedicineList(JSON.parse(localStorage.getItem('medicineData')) || [])
    },[show,Editshow,selectdelete,Sorting])

    // ================ BULK DELETE ==============
    const OnChangeBulkDelete = (event , value) => {
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

    // ================= SEARCHING =================
    const OnChangeSearch = (event) =>{
      const Data = JSON.parse(localStorage.getItem('medicineData'))
      const filter = Data.filter((i) => i.name.toLowerCase().includes(event.target.value.toLowerCase()))
      if (!event.target.value) {
        setMedicineList(Data)
      } else {
        setMedicineList(filter)
      }
    }

    const OnclickTime = () => {
      const sort = MedicineList.sort((a, b) => b.id - a.id)
      setSorting(sort)
      localStorage.setItem('medicineData',JSON.stringify(sort))
    }

    // ==================== SORTING ==================
    const OnclickSorting = (byName) =>{
      const sort = MedicineList.sort((a, b) => a[byName] - b[byName])
      setSorting(sort)
      localStorage.setItem('medicineData',JSON.stringify(sort))
    }
    const OnclickSortingName = () =>{
      const sort = MedicineList.sort((a, b) => a.name.localeCompare(b.name))
      setSorting(sort)
      localStorage.setItem('medicineData',JSON.stringify(sort))
    }

    // ============================== REDUX PROGRAM ==========================
    const onClickReduxDelete = (id) => {
      Dispatch(DeleteContactData(id))
    }
    const onClickReduxEdit = (id) => {
      Navigate(`/contact/${id}`)
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
        <div className='text-center mb-3'>
          <input type='text' className='col-md-6 ' onChange={OnChangeSearch} placeholder='Search' />
        </div>
        <Table striped bordered hover size="sm">
          <tbody>
            <tr>
              <th>Select Data</th>
              <th>Id</th>
              <th onClick={() => OnclickSortingName()}>Medicine Name</th>
              <th onClick={() => OnclickSorting('price')}>Medicine Price</th>
              <th onClick={() => OnclickSorting('quantity')}>Medicine Quantity</th>
              <th onClick={() => OnclickTime()}>last update time</th>
              <th>Edit / Delete</th>
              <th>image</th>
            </tr>
            {
              MedicineList.map((i) => {
                return (
                  <tr className='align-middle' key={Math.random()}>
                    <td>
                      <input type='checkbox' checked={selectdelete.includes(i.id)} onClick={(event) => OnChangeBulkDelete(event,i.id)} />
                    </td>
                    <td>{i.id}</td>
                    <td>{i.name}</td>
                    <td>{i.price}</td>
                    <td>{i.quantity}</td>
                    <td>{new Date(i.id).toLocaleTimeString()}</td>
                    <td>
                      <button className='btn btn-danger me-3' onClick={() => OnClickDelete(i.id)}>Delete</button>
                      <button className='btn btn-success' onClick={() => Editmodalshow(i.id)}>Edit</button>
                    </td>
                    <td>
                      <img src={i.img} width='50px' />
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table> 
        <img src={localStorage.getItem('Profile')} width='300' />
          <h3 className='text-center fw-bold'>Contact info Table</h3>
          <div className='text-center mb-3'>
            <input type='text' className='col-md-6 ' onChange={OnChangeSearch} placeholder='Search' />
          </div>
          <Table striped bordered hover size="sm">
            <tbody>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Subject</th>
                <th>Message</th>
                <th>Delete</th>
                <th>Edit</th>
              </tr>
              {
                Data?.map((i) => {
                  return (
                    <tr className='align-middle' key={Math.random()}>
                      <td>{i.id}</td>
                      <td>{i.name}</td>
                      <td>{i.email}</td>
                      <td>{i.subject}</td>
                      <td>{i.message}</td>
                      <td>
                        <button className='btn btn-danger me-3' onClick={() => onClickReduxDelete(i.id)}>Delete</button>
                      </td>
                      <td>
                        <button className='btn btn-success' onClick={() => onClickReduxEdit(i.id)}>Edit</button>
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
