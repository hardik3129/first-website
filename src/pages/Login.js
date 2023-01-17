import { Field, Form, Formik, ErrorMessage } from 'formik'
import React from 'react'
import * as yup from 'yup'

const Login = () => {
    
  return (
    <Formik
        initialValues={{ email:'', password:'' }}
        onSubmit = {(value) => {
            alert(JSON.stringify(value, null, 2))
            yup.object().shape({
                email: yup.string().email(),
                password: yup.string().min(8)
            })
        }}
    >
        {() => (
            <Form>
                <div className='d-flex justify-content-center'>
                    <div className="col-md-4 form-group">
                        <h2 className='text-center'>Login</h2>
                        <br />
                        <Field type="text" name="email" className="form-control" placeholder="Enter Your Email" />
                        <ErrorMessage name="email" className='text-danger' component="div" />
                        <br/>
                        <Field type="password" name="password" className="form-control" placeholder="Enter Your Password" />
                        <ErrorMessage name="password" className='text-danger' component="div" />
                        <br/>
                        <div className="text-center"><button type="submit" className='appointment-btn'>Send Message</button></div>
                    </div>
                </div>
            </Form>
        )}
    </Formik>
  )
}

export default Login
