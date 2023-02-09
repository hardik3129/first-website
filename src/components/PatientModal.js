import React from 'react'
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const PatientModal = ({ look, setlook }) => {

    const handleClose = () => {
        setlook(false)
    }
    const OnPatientAdd = (event) => {
        event.preventDefault()
        const {target} = event
        const patientObj = {
            id : new Date().getTime(),
            name : target.name.value,
            email : target.email.value,
            age : target.age.value,
            phone : target.phone.value,
            dob : target.Dob.value,
            appoinment : target.appoinment.value,
            gender : target.Gender.value,
            dental : target.dental.value,
        }
        
        if (localStorage.getItem('PatientData')) {
            let val = JSON.parse(localStorage.getItem('PatientData'))
            val.push(patientObj)
            localStorage.setItem('PatientData',JSON.stringify(val))
        } else {
            localStorage.setItem('PatientData',JSON.stringify([patientObj]))
        }

        handleClose()
    }
    
  return (
    <div>
      <Modal show={look}>
            <Modal.Header closeButton onClick={handleClose}>
            <Modal.Title>Add Patient</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form onSubmit={OnPatientAdd}>
                <div className='d-flex justify-content-center'>
                    <div className="form-group">
                        <h6>Name</h6>
                        <div className='mb-4'>
                            <input type="text" name="name" className={`form-control`} placeholder="Enter Your Name" />
                        </div>
                        <h6>Email</h6>
                        <div className='mb-4'>
                            <input type="text" name="email" className={`form-control`} placeholder="Enter Your Email" />
                        </div>
                        <div className='d-flex'>
                            <div className='mb-4 me-2 col-3'>
                                <h6>Age : </h6><input type="number" className={`form-control`} name="age" />
                            </div>
                            <div className='mb-4 col-9'>
                                <h6>Phone No. : </h6><input type="number" name="phone" className={`form-control`} placeholder='Enter Your Number' />
                            </div>
                        </div>
                        <div className='mb-4'>
                            <h6>Date Of Birth : </h6>
                            <input type="date" name="Dob" className={`form-control`} />
                        </div>
                        <div className='mb-4'>
                            <h6>Appoinment Date : </h6>
                            <input type="date" name="appoinment" className={`form-control`} />
                        </div>
                        <div className='mb-4'>
                            <h6 className='d-inline'>Gender : </h6>
                            <label className='me-1'>Male</label><input type="radio" className='me-3' value='male' name="Gender" />
                            <label className='me-1'>Female</label><input type="radio" className='me-3' value='female' name="Gender" />
                        </div>
                        <div className='mb-4'>
                            <h6>Do you require dental surgery? : </h6>
                            <label className='me-1'>Yes</label><input type="radio" className='me-3' value='yes' name="dental" />
                            <label className='me-1'>No</label><input type="radio" className='me-3' value='no' name="dental" />
                        </div>
                        <div className="text-center"><button type="submit" className='appointment-btn'>Done</button></div>
                    </div>
                </div>
            </Form>
            </Modal.Body>
        </Modal>
    </div>
  )
}

export default PatientModal
