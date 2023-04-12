import React, { useState } from 'react'
import { Field, Form, Formik, ErrorMessage } from 'formik'
import * as yup from 'yup'
import 'yup-phone'
import MedicineProduct from '../MedicineData.json'

const Docter_register = () => {

  const [product, setproduct] = useState([
    {
      ProdName : '',
      ProdPrice : 0,
      prodOption : 0
    }
  ])

  const productQun = (event) => {
    setproduct({
      prodOption : event  
    })
  }
  
  const validate = yup.object().shape({
    medcine: yup.string(),
    name: yup.string().matches(/^[aA-zZ\s]+$/,"Only alphabets are allowed for this field ").required(),
    email: yup.string().email().required(),
    Gender: yup.string().required(),
    age: yup.number().min(18).max(68).required(),
    phone: yup.string().phone().required(),
    dental: yup.string(),
    address: yup.string()
    .when(['city', 'zipcode', 'country'], {
        is: (city, zipcode, country) => city !== undefined || zipcode !== null || country !== undefined,
        then: yup.string().required('requied')
    }),
    city: yup.string().required(),
    pincode: yup.string().matches(/^[0-9]+$/, "Must be only digits").min(6,"Enter Corect Pincode").max(6,"Enter Corect code").required(),
    payment_method: yup.string().required(),
  })
  
  return (
    <div>
      <h2 className='text-center mb-4'>Product Order</h2>
      <Formik
        initialValues={{
          name: '',
          email : '',
          Gender : '',
          age : '',
          phone : '',
          address: '',
          city : '',
          pincode : '',
          payment_method:'',
          product
        }}
        validationSchema={validate}
        onSubmit={(values) => {
          // alert(JSON.stringify(values));
          console.log("Submit",values);
        }}
      >
        {(props) => (
          <Form>
            {console.log(props.values)}
            <div className='d-flex justify-content-center my-5'>
              <div className="form-group col-5">
                  <h3>Select Product</h3>
                    {MedicineProduct.map((i) => {
                      return (
                        <div className='mb-4' key={Math.random()}>
                          <h5>{i.ProductName}</h5>
                          <div className='product-card d-flex align-items-center'>
                            <Field type='checkbox' name={i.ProductName} className='me-2' />                    
                            <img src={i.ProductImg} width={'200px'} />
                            <p className='mx-2'>Quantity : </p>
                            <select className='mb-3' onChange={(event) => productQun(event.target.value)}>
                              {i.option.map((i) => {
                                return (
                                    <option key={Math.random()} value={i.value}>{i.lable}</option>
                                )
                              })}
                            </select> 
                            <p className='mx-2'>Price : {i.ProductPrice}</p>
                          </div>
                        </div>
                      )
                    })}
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
                          <h6>Pincode No. : </h6><Field type="number" name="pincode" className={`form-control ${props.touched.pincode && props.errors.pincode ? 'inp-border' : ''}`} placeholder='Enter Your Pincode' />
                          <ErrorMessage name="pincode" className='text-danger' component="div" />
                      </div>
                  </div>
                  <div className='mb-4'>
                      <h6>Payment Method : </h6>
                      <label className='me-1'>Upi</label><Field type="radio" className='me-3' value='upi' name="payment_method" />
                      <label className='me-1'>Card</label><Field type="radio" className='me-3' value='card' name="payment_method" />
                      <label className='me-1'>Online Payment</label><Field type="radio" className='me-3' value='Online Payment' name="payment_method" />
                      <label className='me-1'>Cash on delivery</label><Field type="radio" className='me-3' value='Cash on delivery' name="payment_method" />
                      <ErrorMessage name="payment_method" className='text-primary' component="div" />
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
