import {forwardRef} from 'react'
import {TextField} from '../TextField'
import {Box} from '../../foundation/layout/Box'

export const Select = forwardRef(({children, placeholder, ...rest}, ref) => {
  return (
    <Box position="relative" width="100%">
      <TextField as="select" ref={ref} placeholder={placeholder} {...rest}>
        {placeholder && <option value="">{placeholder}</option>}
        {children}
      </TextField>
    </Box>
  )
})
