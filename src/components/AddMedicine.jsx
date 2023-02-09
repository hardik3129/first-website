import React from 'react'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const AddMedicine = ({ display, setdisplay }) => {

    const [ image, setimage] = useState(localStorage.getItem('Profile'))
    
    const handleClose = () => {
        setdisplay(false)
    }
    const OnMedicineAdd = (event) => {
        event.preventDefault()
        const {target} = event
        const medicineObj = {
            id : new Date().getTime(),
            name : target.name.value,
            price : target.price.value,
            quantity : target.quantity.value,
            img : 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png'
        }
        
        if (localStorage.getItem('medicineData')) {
            let val = JSON.parse(localStorage.getItem('medicineData'))
            val.push(medicineObj)
            localStorage.setItem('medicineData',JSON.stringify(val))
        } else {
            localStorage.setItem('medicineData',JSON.stringify([medicineObj]))
        }

        handleClose()
    }

    // ================ UPDATE-IMAGE =====================
    const input = document.getElementById("fileToUpload");
    const reader = new FileReader();
    reader.onload = () => {
        const dataURL = reader.result;
        setimage(localStorage.setItem('Profile', dataURL))
    }
    const OnChangeImg = () => {
        reader.abort();
        reader.readAsDataURL(input.files[0]);
    }
    
    return (
        <Modal show={display} size='lg'>
            <Modal.Header closeButton onClick={handleClose}>
            <Modal.Title>Add Medicine</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form onSubmit={OnMedicineAdd}>
                <img src={localStorage.getItem('Profile')} width='300' />
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Medicine Name</Form.Label>
                    <Form.Control
                        onChange={OnChangeImg}
                        type="file"
                        autoFocus
                        id='fileToUpload'
                        // multiple={false}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Medicine Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        placeholder="Enter Medicine Name"
                        autoFocus
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        type="number" 
                        rows={3} 
                        name="price"
                        placeholder="Enter Price"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control
                        type="number" 
                        rows={3} 
                        placeholder="Enter Quantity"
                        name="quantity"
                    />
                </Form.Group>
                <div className='text-end'>
                    <button className="btn btn-secondary me-2" onClick={handleClose}>
                        Close
                    </button>
                    <button className="btn btn-primary" type='submit'>
                        Save Changes
                    </button>
                </div>
            </Form>
            </Modal.Body>
        </Modal>
    )
}

export default AddMedicine
