import { GeneralLayout } from '../Layout/GeneralLayout'
import { Formik, Form, Field, FormikHelpers } from 'formik'

interface Values {
  name: string,
  email: string,
  service: string,
  comment: string,
  isEnterprise: boolean
}

const Contact = () => {
  return (
    <GeneralLayout>
      <section className='min-h-screen mt-3'>
        <div className='w-100 mb-8 xl:mb-12 h-64 md:h-64 xl:h-96 relative  bg-gray-900 rounded-lg bg-no-repeat inset-0 bg-opacity-30 bg-cover bg-center' style={{backgroundImage: "URL('https://images.unsplash.com/photo-1462332420958-a05d1e002413?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2107&q=80')"}}>
          <div className='absolute inset-0 bg-black bg-opacity-60 rounded-lg flex items-center justify-center text-center text-white text-3xl xl:text-5xl font-bold flex-col gap-4 xl:gap-8'>
            <h2>Raise the level of your brand</h2>
            <h2>and turn your ideas into reality.</h2>
          </div>
        </div>
        <div>
          <h2 className='font-bold text-3xl text-center'>Fill in the form below to contact me</h2>
          <Formik
            initialValues={{
              name: '',
              email: '',
              service: '',
              comment: '',
              isEnterprise: false
            }}
            onSubmit={(
              values: Values,
              { setSubmitting }: FormikHelpers<Values>
            ) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 500);
            }}
          >
            <Form className='grid grid-cols-2 pt-12 justify-center items-center gap-4 px-6'>
              <div className='flex flex-col gap-2'>
                <label htmlFor="name">{"What's your full name"}</label>
                <Field id="name" name="name" placeholder="E.x: Vicente Jorquera" className=' border-2 px-2 py-1 rounded-md' />
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor="email">{"What's your email"}</label>
                <Field id="email" name="email" placeholder="E.x: vicente@gmail.com" className=' border-2 px-2 py-1 rounded-md' />
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor="service">What kind of service do you need help with?</label>
                <Field id="service" name="service" placeholder="E.x: vicente@gmail.com" className='border-2 px-2 py-1 rounded-md' />
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor="isCompany">Are you representing a company?</label>
                <select id="isCompany" name="isCompany" className='border-2 px-2 py-1 rounded-md'>
                  <option selected disabled>Seleccione una opción</option>
                  <option value='yes'>Yes</option>
                  <option value='yes'>No</option>
                </select>
              </div>
              <button type="submit">Enviar</button>
            </Form>
          </Formik>
        </div>
      </section>
    </GeneralLayout>
  )
}

export default Contact