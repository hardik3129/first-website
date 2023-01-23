import React, { useState } from 'react'
import { Field, Form, Formik, ErrorMessage } from 'formik'
import * as yup from 'yup'
import 'yup-phone'

const Docter_register = () => {
  const [option, setoption] = useState(0)
  const handlechange = (event) => {
    console.log(event);
    setoption(event.target.value)
  }
  
  const validate = yup.object().shape({
    medcine: yup.string(),
    name: yup.string().matches(/^[aA-zZ\s]+$/,"Only alphabets are allowed for this field ").required(),
    email: yup.string().email().required(),
    Gender: yup.string().required(),
    age: yup.number().min(18).max(68).required(),
    phone: yup.string().phone().required(),
    dental: yup.string(),
    address: yup.string().required(),
    city: yup.string().required(),
    pincode: yup.number().min(6,"Enter Corect Pincode").max(6,"Enter Corect Pincode").required()
  })

  const producArr = [
    {
      ProductName: '1. Nimeson',
      ProductValue: 'Nimeson',
      ProductImg: 'https://cdn01.pharmeasy.in/dam/products/123315/nimeson-tablet-7-1641534931.jpg',
      ProductPrice: '$20',
      ProductQuantity: option 
    },
    {
      ProductName: '2. Crestor',
      ProductValue: 'Crestor',
      ProductImg: 'https://media.cnn.com/api/v1/images/stellar/prod/161123201756-01-most-prescribed-medications-restricted.jpg?q=w_3000,h_1688,x_0,y_0,c_fill/w_1280',
      ProductPrice: '$30',
      ProductQuantity: option
    },
    {
      ProductName: '3. Paracetamol tablets ip',
      ProductValue: 'Paracetamol tablels',
      ProductImg: 'https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/cropped/mu5bahqxfrp28cut6que.jpg',
      ProductPrice: '$44',
      ProductQuantity: option
    }
  ]

  console.log(producArr);
  
  return (
    <div>
      <h2 className='text-center mb-4'>Product Order</h2>
      <Formik
        initialValues={{
          medcine: '',
          name: '',
          email : '',
          Gender : '',
          age : '',
          phone : '',
          address: '',
          city : '',
          pincode : '',
        }}
        validationSchema={validate}
        onSubmit={(values) => {
          alert(JSON.stringify(values));
          console.log(values);
        }}
      >
        {(props) => (
          <Form>
            {console.log(props.values)}
            <div className='d-flex justify-content-center my-5'>
              <div className="form-group col-5">
                  <h3>Select Product</h3>
                    {producArr.map((i) => {
                      return (
                        <div className='mb-4' key={Math.random()}>
                          <h5>{i.ProductName}</h5>
                          <div className='product-card d-flex align-items-center'>
                            <Field type='checkbox' name='medcine' value={i.ProductValue} className='me-2' />                    
                            <img src={i.ProductImg} width={'200px'} />
                            <p className='mx-2'>Quantity : </p>
                            <select onChange={handlechange} style={{borderRadius:'5px', padding:'2px 10px', marginBottom:'10px'}}>
                            <option style={{borderRadius:'5px'}}>Box</option>
                            <option value={1} style={{borderRadius:'5px'}}>1 Box</option>
                            <option value={2} style={{borderRadius:'5px'}}>2 Box</option>
                            <option value={3} style={{borderRadius:'5px'}}>3 Box</option>
                            <option value={4} style={{borderRadius:'5px'}}>4 Box</option>
                            <option value={5} style={{borderRadius:'5px'}}>5 Box</option>
                            <option value={6} style={{borderRadius:'5px'}}>6 Box</option>
                            </select>
                            <p className='mx-2'>Price : {i.ProductPrice}</p>
                          </div>
                        </div>
                      )
                    })}
                    <h5 className='text-end'>Total : </h5>
                  <h6>Name</h6>
                  <div className='mb-4'>
                      <Field type="text" name="name" className={`form-control ${props.touched.name && props.errors.name ? 'inp-border' : ''}`} placeholder="Enter Your Name" />
                      <ErrorMessage name="name" className='text-danger' component="div" />
                  </div>
                  <h6>Email</h6>
                  <div className='mb-4'>
                      <Field type="text" name="email" className={`form-control ${props.touched.email && props.errors.email ? 'inp-border' : ''}`} placeholder="Enter Your Email" />
                      <ErrorMessage name="email" className='text-danger' component="div" />
                  </div>
                  <div className='mb-4'>
                      <h6 className='d-inline'>Gender : </h6>
                      <label className='me-1'>Male</label><Field type="radio" className='me-3' value='male' name="Gender" />
                      <label className='me-1'>Female</label><Field type="radio" className='me-3' value='female' name="Gender" />
                      <ErrorMessage name="Gender" className='text-primary' component="div" />
                  </div>
                  <div className='d-flex'>
                      <div className='mb-4 me-2 col-3'>
                          <h6>Age : </h6><Field type="number" className={`form-control ${props.touched.age && props.errors.age ? 'inp-border' : ''}`} name="age" placeholder='Enter Age' />
                          <ErrorMessage name="age" className='text-danger' component="div" />
                      </div>
                      <div className='mb-4 col-9'>
                          <h6>Phone No. : </h6><Field type="number" name="phone" className={`form-control ${props.touched.phone && props.errors.phone ? 'inp-border' : ''}`} placeholder='Enter Your Number' />
                          <ErrorMessage name="phone" className='text-danger' component="div" />
                      </div>
                  </div>
                  <h6>Address</h6>
                  <div className='mb-4'>
                      <Field type="text" name="address" className={`form-control ${props.touched.address && props.errors.address ? 'inp-border' : ''}`} placeholder="20, example recidancy, example near" />
                      <ErrorMessage name="address" className='text-danger' component="div" />
                  </div>
                  <div className='d-flex'>
                      <div className='mb-4 me-2 col-6'>
                          <h6>City : </h6><Field type="text" className={`form-control ${props.touched.city && props.errors.city ? 'inp-border' : ''}`} name="city" placeholder='Enter City Name' />
                          <ErrorMessage name="city" className='text-danger' component="div" />
                      </div>
                      <div className='mb-4 col-6'>
                          <h6>Pincode No. : </h6><Field type="number" name="pincode" className={`form-control ${props.touched.pincode && props.errors.pincode ? 'inp-border' : ''}`} placeholder='Enter Your Number' />
                          <ErrorMessage name="pincode" className='text-danger' component="div" />
                      </div>
                  </div>
                  <div className="text-center"><button type="submit" className='appointment-btn'>Send Message</button></div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Docter_register
