import * as yup from 'yup'

export const contactSchema = yup.object().shape({
  name: yup.string().min(4, 'This field should have at least 4 characters').required(),
  email: yup.string().email('Enter a valid email address').required(),
  serviceType: yup.string().oneOf(['Web developer', 'Transform your business', 'Develop your product', 'Work with AWS', 'Other'], 'You should select at least one option').required(),
})