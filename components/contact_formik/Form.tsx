import { contactSchema } from "../../schemas/contact";

import { withFormik, FormikProps, FormikErrors, Form, Field } from 'formik';

interface FormValues {
  name: string,
  email: string,
  service: string,
  comment: string,
}

interface OtherProps {
  message: string
}

const FormFormik = (props : OtherProps & FormikProps<FormValues>) => {
  const { touched, errors, isSubmitting, message } = props
  return (
    <Form>
      <h1>{message}</h1>
      <Field type='email' name='email' />
      { touched.email && errors.email && <div>{errors.email}</div>}

      <Field type='text' name='name' />
      {touched.name && errors.name && <div>{errors.name}</div> }

      <button type="submit" disabled={isSubmitting}>Submit</button>
    </Form>
  )
}

export default FormFormik