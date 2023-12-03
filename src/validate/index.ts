import * as yup from 'yup';

export const formSchema = yup.object({
  name: yup.string()
  .typeError('Value must be a string')
  .required()
  .test('is Capital Letter','The capital letter must be uppercase', (value) => value.charAt(0) === value.charAt(0).toUpperCase()),
  age: yup.number().typeError('Value must be a number').required().positive('Age cannot be negative'),
  email: yup.string().typeError('Value must be a string').required().email('Incorrect email'),
  password: yup.string()
  .typeError('Value must be a string')
  .required()
  .matches(/[0-9]/, { message: 'The password must contain at least one number', excludeEmptyString: true })
  .matches(/[A-ZА-Я]/, { message: 'The password must contain at least one capital letter', excludeEmptyString: true })
  .matches(/[a-zа-я]/, { message: 'The password must contain at least one lowercase letter', excludeEmptyString: true })
  .matches(/[!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>/?]/, { message: 'The password must contain at least one special character', excludeEmptyString: true }),
  repeatPassword: yup.string()
  .typeError('Value must be a string')
  .required()
  .test('is Match','Passwords must match', (value, context) => context.parent.password === value),
  gender: yup.string()
  .typeError('Value must be a string')
  .required(),
  country: yup.string()
  .typeError('Value must be a string')
  .required(),
  image: yup.mixed((input): input is FileList => input instanceof FileList && Boolean(input.length))
  .typeError('Upload Image')
  .test("fileSize", "The file is too large", (value) => {
    if (value) {
      return value[0].size <= 2000000
    }
    return false
  })
  .test("fileExtension", "The file is not PNG or JPEG", (value) => {
    if (value) {
      return value[0].type === 'image/png' || value[0].type === 'image/jpeg'
    }
    return false
  }),
  agree: yup.boolean()
  .typeError('Value must be a string')
  .required()
  .test("is agree", "Agree to the terms", (item) => item)
});