import {Box} from '../../foundation/layout/Box'
import {Flex} from '../../foundation/layout/Flex'
import PropTypes from 'prop-types'

const BaseTemplate = ({header, nav, aside, children}) => (
  <Flex flexDirection="column" minHeight="100vh" px={3}>
    <Box>{header}</Box>
    <Flex flex={1} flexDirection={['column', 'row']}>
      <Box as="main" flex={1} minWidth={0}>
        {children}
      </Box>
      <Box
        display={{xs: 'none', md: 'block', sm: 'none'}}
        flexBasis={['auto', 64]}
        order="-1"
      >
        {nav}
      </Box>
      <Box
        display={{xs: 'none', md: 'block', sm: 'none'}}
        pr={3}
        width="15%"
        ml={3}
        as="aside"
      >
        {aside}
      </Box>
    </Flex>
  </Flex>
)

BaseTemplate.propTypes = {
  header: PropTypes.node,
  nav: PropTypes.node,
  aside: PropTypes.node,
  children: PropTypes.node,
}

export default BaseTemplate
