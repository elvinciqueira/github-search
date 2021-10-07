import {forwardRef} from 'react'
import PropTypes from 'prop-types'
import {Button} from '../Button'

export const IconButton = forwardRef(({icon, ...rest}, ref) => (
  <Button
    ref={ref}
    {...rest}
    variant="filled"
    justifyContent="center"
    alignItems="center"
    borderRadius="16px"
  >
    {icon}
  </Button>
))

IconButton.propTypes = {
  icon: PropTypes.string.isRequired,
}

IconButton.displayName = 'IconButton'

IconButton.defaultProps = Button.defaultProps
