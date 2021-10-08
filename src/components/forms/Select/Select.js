import {forwardRef} from 'react'
import PropTypes from 'prop-types'
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

Select.defaultProps = TextField.defaultProps

Select.propTypes = {
  children: PropTypes.node.isRequired,
  ...TextField.propTypes,
}
