import { Field, Form, Formik, ErrorMessage } from 'formik'
import React from 'react'
import * as yup from 'yup'
import 'yup-phone'

const Login = () => {

    const validate = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(8).required(),
        age: yup.number().min(18).max(68).required(),
        phone: yup.string().phone().required(),
        Gender: yup.string().required(),
        hobby: yup.string()
    })
    
  return (
    <Formik
        initialValues={{ email:'', password:'', age:'', phone:'', Gender:'', hobby:''}}
        validationSchema={validate}
        onSubmit = {(value) => {
            alert(JSON.stringify(value, null, 2))
        }}
    >
        {(props) => (
            <Form>
                {console.log(props.values)}
                <div className='d-flex justify-content-center vh-100 align-items-center col-12'>
                    <div className="form-group">
                        <h2 className='text-center mb-4'>Login</h2>
                        <h6>email</h6>
                        <div className='mb-4'>
                            <Field type="text" name="email" className={`form-control ${props.touched.email && props.errors.email ? 'inp-border' : ''}`} placeholder="Enter Your Email" />
                            <ErrorMessage name="email" className='text-danger' component="div" />
                        </div>
                        <h6>password</h6>
                        <div className='mb-4'>
                            <Field type="password" name="password" className={`form-control ${props.touched.password && props.errors.password ? 'inp-border' : ''}`} placeholder="Enter Your Password" />
                            <ErrorMessage name="password" className='text-danger' component="div" />
                        </div>
                        <div className='d-flex'>
                            <div className='mb-4 me-2 col-3'>
                                <h6>Age : </h6><Field type="number" className={`form-control ${props.touched.age && props.errors.age ? 'inp-border' : ''}`} name="age" />
                                <ErrorMessage name="age" className='text-danger' component="div" />
                            </div>
                            <div className='mb-4 col-9'>
                                <h6>Phone No. : </h6><Field type="number" name="phone" className={`form-control ${props.touched.phone && props.errors.phone ? 'inp-border' : ''}`} placeholder='Enter Your Number' />
                                <ErrorMessage name="phone" className='text-danger' component="div" />
                            </div>
                        </div>
                        <div className='mb-4'>
                            <h6 className='d-inline'>Gender : </h6>
                            <label className='me-1'>Male</label><Field type="radio" className='me-3' value='male' name="Gender" />
                            <label className='me-1'>Female</label><Field type="radio" className='me-3' value='female' name="Gender" />
                            <ErrorMessage name="Gender" className='text-primary' component="div" />
                        </div>
                        <div className='mb-4'>
                            <h6 className='d-inline'>Hobby : </h6>
                            <label className='me-1'>Cricket</label><Field type="checkbox" className='me-3' value='Cricket' name="hobby" />
                            <label className='me-1'>Dancing</label><Field type="checkbox" className='me-3' value='Dancing' name="hobby" />
                            <ErrorMessage name="hobby" className='text-primary' component="div" />
                        </div>
                        <div className="text-center"><button type="submit" className='appointment-btn'>Send Message</button></div>
                    </div>
                </div>
            </Form>
        )}
    </Formik>
  )
}

export default Login
