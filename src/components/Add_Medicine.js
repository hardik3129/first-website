import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const Add_Medicine = ({ display, setdisplay }) => {

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
            quantity : target.quantity.value
        }
        
        if (localStorage.getItem('medicineData')) {
            let val = JSON.parse(localStorage.getItem('medicineData'))
            val.push(medicineObj)
            localStorage.setItem('medicineData',JSON.stringify(val))
            alert("Data Empty")
        } else {
            localStorage.setItem('medicineData',JSON.stringify([medicineObj]))
            alert("Data Runing")
        }

        setdisplay(false)
    }
    
    return (
        <Modal show={display}>
            <Modal.Header closeButton onClick={handleClose}>
            <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form onSubmit={OnMedicineAdd}>
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
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" type='submit'>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Form>
            </Modal.Body>
        </Modal>
    )
}

export default Add_Medicine
