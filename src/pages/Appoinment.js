import React from 'react'
import { Field, Form, Formik, ErrorMessage } from 'formik'
import * as yup from 'yup'
import 'yup-phone'

const Appoinment = () => {

    let date = new Date().toLocaleDateString();
    const validate = yup.object().shape({
        name: yup.string().matches(/^[aA-zZ\s]+$/,"Only alphabets are allowed for this field ").required(),
        email: yup.string().email().required(),
        age: yup.number().min(18).max(68).required(),
        phone: yup.string().phone().required(),
        Dob: yup.date().required(),
        appoinment: yup.date().min(date).required(),
        Gender: yup.string().required(),
        dental: yup.string()
    })
    
  return (
    // ========================= APPOINMENT =========================
    <Formik
        initialValues={{
            name: '',
            email: '',
            age: '',
            phone: '',
            Dob:'',
            Gender: '',
            dental: '',
            appoinment: ''
        }}
        validationSchema={validate}
        onSubmit={(values) => {
            alert(JSON.stringify(values, null, 2))
        }}
    >
        {(props) => (
            <Form>
                {console.log(props.values)}
                <div className='d-flex justify-content-center my-5'>
                    <div className="form-group col-5">
                        <h2 className='text-center mb-4'>Make Appoinment</h2>
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
                            <h6>Date Of Birth : </h6>
                            <Field type="date" name="Dob" className={`form-control ${props.touched.Dob && props.errors.Dob ? 'inp-border' : ''}`} />
                            <ErrorMessage name="Dob" className='text-danger' component="div" />
                        </div>
                        <div className='mb-4'>
                            <h6>Appoinment Date : </h6>
                            <Field type="date" name="appoinment" className={`form-control ${props.touched.appoinment && props.errors.appoinment ? 'inp-border' : ''}`} />
                            <ErrorMessage name="appoinment" className='text-danger' component="div" />
                        </div>

                        <div className='mb-4'>
                            <h6 className='d-inline'>Gender : </h6>
                            <label className='me-1'>Male</label><Field type="radio" className='me-3' value='male' name="Gender" />
                            <label className='me-1'>Female</label><Field type="radio" className='me-3' value='female' name="Gender" />
                            <ErrorMessage name="Gender" className='text-primary' component="div" />
                        </div>
                        <div className='mb-4'>
                            <h6>Do you require dental surgery? : </h6>
                            <label className='me-1'>Yes</label><Field type="radio" className='me-3' value='yes' name="dental" />
                            <label className='me-1'>No</label><Field type="radio" className='me-3' value='no' name="dental" />
                            <ErrorMessage name="dental" className='text-primary' component="div" />
                        </div>
                        <div className="text-center"><button type="submit" className='appointment-btn'>Send Message</button></div>
                    </div>
                </div>
            </Form>
        )}
    </Formik>
  )
}
export default Appoinment