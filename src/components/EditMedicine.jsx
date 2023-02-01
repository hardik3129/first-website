import React from 'react'
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const EditMedicine = ({ display, setdisplay, Edit }) => {
    

    const handleClose = () => {
        setdisplay(false)
    }
    const OnMedicineAdd = (event) => {
        event.preventDefault()
        const {target} = event
        const medicineObj = {
            id : Edit.id,
            name : target.name.value,
            price : target.price.value,
            quantity : target.quantity.value
        }
        let medData = JSON.parse(localStorage.getItem('medicineData'))
        const editeddata = medData.map((i) => {
            if (i.id === Edit.id) {
                i = medicineObj
            }
            return i
        })
        localStorage.setItem('medicineData',JSON.stringify(editeddata))
        handleClose()
    }
    
    return (
        <Modal show={display}>
            <Modal.Header closeButton onClick={handleClose}>
            <Modal.Title>Edit Medicine</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form onSubmit={OnMedicineAdd}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Medicine Name</Form.Label>
                    <Form.Control
                        defaultValue={Edit.name}
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
                        defaultValue={Edit.price}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control
                        type="number" 
                        rows={3} 
                        placeholder="Enter Quantity"
                        name="quantity"
                        defaultValue={Edit.quantity}
                    />
                </Form.Group>
                {/* <Modal.Footer> */}
                <div className='text-end'>
                    <button className="btn btn-secondary me-2" onClick={handleClose}>
                        Close
                    </button>
                    <button className="btn btn-primary" type='submit'>
                        Save Changes
                    </button>
                </div>
                {/* </Modal.Footer> */}
            </Form>
            </Modal.Body>
        </Modal>
    )
}

export default EditMedicine
