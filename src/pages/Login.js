import { Field, Form, Formik, ErrorMessage } from 'formik'
import React, { useState } from 'react'
import * as yup from 'yup'
import 'yup-phone'
import MultiCheckboxValidate from './multyCheckboxValidate'

const Login = () => {

    const [passwordType, setpasswordType] = useState('password')

    const OnchangePassword = () => {
        if(passwordType === 'password') {
            return setpasswordType('text')
        }
        setpasswordType('password')
    }

    const validate = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().required('Please Enter your password').min(8).matches(/[0-9]/,"Enter One Number").matches("^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]",
        "One Uppercase, One Lowercase and one special case Character"),
        age: yup.number().min(18).max(68).required(),
        phone: yup.string().phone().required(),
        Gender: yup.string().required(),
        hobby: yup.string()
    })
    
  return (
    // ========================= LOGIN =========================
    <>
    <MultiCheckboxValidate />
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
                <div className='d-flex justify-content-center vh-100 align-items-center'>
                    <div className="form-group col-3">
                        <h2 className='text-center mb-4'>Signup</h2>
                        <h6>email</h6>
                        <div className='mb-4'>
                            <Field type="text" name="email" className={`form-control ${props.touched.email && props.errors.email ? 'inp-border' : ''}`} placeholder="Enter Your Email" />
                            <ErrorMessage name="email" className='text-danger' component="div" />
                        </div>
                        <h6>password</h6>
                        <div className='mb-4'>
                            <div className='position-relative'>
                                <Field type={passwordType} name="password" className={`form-control inputEye ${props.touched.password && props.errors.password ? 'inp-border' : ''}`} placeholder="Enter Your Password" />
                                <i class="far fa-eye" onClick={OnchangePassword} id="togglePassword"></i>
                            </div>
                            <ErrorMessage name="password" className='text-danger' component="div" />
                        </div>
                        <div className='d-flex'>
                            <div className='mb-4 me-2 col-3'>
                                <h6>Age : </h6><Field type="number" placeholder='Enter Age' className={`form-control ${props.touched.age && props.errors.age ? 'inp-border' : ''}`} name="age" />
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
    </>
  )
}

export default Login
