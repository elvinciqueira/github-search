import {Box} from '../../foundation/layout/Box'
import PropTypes from 'prop-types'

export const Form = ({children, onSubmit, ...props}) => (
  <Box
    p={4}
    backgroundColor="darkBlue"
    position="absolute"
    top={{xs: 0, md: '20%'}}
    left={{xs: 0, md: '10%'}}
    borderRadius="8px"
    width={{xs: '100%', md: '400px'}}
    {...props}
  >
    <form onSubmit={onSubmit}>{children}</form>
  </Box>
)

Form.propTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
}
