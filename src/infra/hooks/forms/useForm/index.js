import {useState} from 'react'

export const useForm = ({initialValues, onSubmit}) => {
  const [values, setValues] = useState(initialValues)

  const handleChange = (event) => {
    const fieldName = event.target.getAttribute('name')
    const {value} = event.target
    setValues((values) => ({
      ...values,
      [fieldName]: value,
    }))
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit(values)
  }

  return {
    values,
    handleChange,
    handleSubmit,
  }
}
