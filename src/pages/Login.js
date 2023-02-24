import { Field, Form, Formik, ErrorMessage } from 'formik'
import React from 'react'
import * as yup from 'yup'
import 'yup-phone'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate()
    const validate = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(8).required()
    })
    
  return (
    // ========================= LOGIN =========================
    <Formik
        initialValues={{ email:'', password:''}}
        validationSchema={validate}
        onSubmit = {(value) => {
            let logindata = value
            console.log(logindata);
            if (logindata.email == 'admin@gmail.com') {
                logindata = {...value, role : 'admin'}
            } else {
                logindata = {...value, role : 'user'}
            }
            localStorage.setItem('user',JSON.stringify(logindata))
            navigate('/')
        }}
    >
        {(props) => (
            <Form>
                <div className='d-flex justify-content-center vh-100 align-items-center'>
                    <div className="form-group col-3">
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
                        <div className="text-center">
                            <button type="submit" className='appointment-btn'>Login</button>
                            <Link to='/signup' className='appointment-btn'>Signup</Link>
                        </div>
                    </div>
                </div>
            </Form>
        )}
    </Formik>
  )
}

export default Login
