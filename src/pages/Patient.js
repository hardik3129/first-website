import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import PatientModal from '../components/PatientModal'
import UpdatePatient from '../components/UpdatePatientModal'

const Patient = () => {

    const [validsow, setvalidsow] = useState(false)
    const [Editshow, setEditShow] = useState(false);
    const [PatientList, setPatientList] = useState([])
    const [Editdata, setEditdata] = useState({})

    useEffect(() => {
        setPatientList(JSON.parse(localStorage.getItem('PatientData')) || [])
    },[validsow,Editshow])
    
    // =============== EDIT =====================
    const Editmodalshow = (data) => {
        setEditdata(data)
        console.log(data);
        setEditShow(true)
    }
    
    const modalshow = () => {
        setvalidsow(true)
    }
    // =============== DELETE =================
    const OnClickDelete = (id) => {
        if (window.confirm(`Confirm this id:${id} of data for Delete`) === true) {
          const FilterData = PatientList.filter((i) => {
            return i.id !== id
          })
          setPatientList(FilterData)
          localStorage.setItem('PatientData',JSON.stringify(FilterData))
        }
      }
    
  return (
    <div>
        <PatientModal look={validsow} setlook={setvalidsow}/>
        <UpdatePatient look={Editshow} setlook={setEditShow} Editdata={Editdata} />
        <div className="section-title">
            <h2>Patient</h2>
        </div>
        <div className='text-center my-3'>
            <button className='btn btn-primary' onClick={modalshow}>Add Patient</button>
        </div>
        <Table striped bordered hover size="sm" className='container'>
            <tbody>
            <tr>
                <td>Id</td>
                <td>Name</td>
                <td>DOB</td>
                <td>Appoinment <br /> Date</td>
                <td>Email</td>
                <td>Phone</td>
                <td>Gender</td>
                <td>Dental <br /> Service</td>
                <td>Edit / Delete</td>
            </tr>
                {
                    PatientList.map((i) => {
                      return (
                        <tr className='align-middle' key={Math.random()}>
                          <td>{i.id}</td>
                          <td>{i.name}</td>
                          <td>{i.dob}</td>
                          <td>{i.appoinment}</td>
                          <td>{i.email}</td>
                          <td>{i.phone}</td>
                          <td>{i.gender}</td>
                          <td>{i.dental}</td>
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
    </div>
  )
}

export default Patient
