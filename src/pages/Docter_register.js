import React from 'react'
import { Field, Form, Formik, ErrorMessage } from 'formik'
import * as yup from 'yup'
import 'yup-phone'

const Docter_register = () => {
  const validate = yup.object().shape({
    empDoc: yup.mixed().required()
  })
  return (
    <div>
      <h1>Docter Register</h1>
      <Formik
        initialValues={{
          empDoc: ''
        }}
        validationSchema={validate}
        onSubmit={(values) => {
          alert(JSON.stringify(values));
        }}
      >
        <Form>
          <Field type='file' name='empDoc' />
          <ErrorMessage name="empDoc" className='text-danger' component="div" />
          <div className="text-center"><button type="submit" className='appointment-btn'>Submit</button></div>
        </Form>
      </Formik>
    </div>
  )
}

export default Docter_register
