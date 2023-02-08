import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router';

const UpdateMedicine = () => {

    const Navigate = useNavigate()
    const {id} = useParams()
    const [EditData, setEditdata] = useState()
    
    useEffect(() => {
        const MedData = JSON.parse(localStorage.getItem('medicineData'))
        const filter = MedData.find((i) => i.id === Number(id))
        setEditdata(filter)
    },[])
    const onUpdateData = (event) => {
        event.preventDefault()
        const {target} = event
        const medicineObj = {
            id : id,
            name : target.name.value,
            price : target.price.value,
            quantity : target.quantity.value
        }
        let medData = JSON.parse(localStorage.getItem('medicineData'))
        const editeddata = medData.map((i) => {
            if (i.id === Number(id)) {
                i = medicineObj
            }
            return i
        })
        localStorage.setItem('medicineData',JSON.stringify(editeddata))
        Navigate('/medicine')
    }
    
  return (
    <Card className='col-md-4 p-3 mx-auto my-5'>
        <Form onSubmit={onUpdateData}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Medicine Name</Form.Label>
                <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter Medicine Name"
                    autoFocus
                    defaultValue={EditData?.name}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Price</Form.Label>
                <Form.Control
                    type="number" 
                    rows={3} 
                    name="price"
                    placeholder="Enter Price"
                    defaultValue={EditData?.price}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                    type="number" 
                    rows={3} 
                    placeholder="Enter Quantity"
                    name="quantity"
                    defaultValue={EditData?.quantity}
                />
            </Form.Group>
            <div className='text-end'>
                <button className="btn btn-secondary me-2">
                    Close
                </button>
                <button className="btn btn-primary" type='submit'>
                    Save Changes
                </button>
            </div>
        </Form>
    </Card>
  )
}

export default UpdateMedicine
