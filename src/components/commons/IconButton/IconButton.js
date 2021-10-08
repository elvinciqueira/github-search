import {forwardRef} from 'react'
import PropTypes from 'prop-types'
import {Button} from '../Button'

export const IconButton = forwardRef(({icon, ...rest}, ref) => (
  <Button
    ref={ref}
    variant="filled"
    justifyContent="center"
    alignItems="center"
    borderRadius="16px"
    {...rest}
  >
    {icon}
  </Button>
))

IconButton.propTypes = {
  icon: PropTypes.node.isRequired,
}

IconButton.displayName = 'IconButton'

IconButton.defaultProps = Button.defaultProps
