import {FaSearch} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'

import {Box} from '../../foundation/layout/Box'
import {Flex} from '../../foundation/layout/Flex'

const MobileMenu = () => (
  <Box display={{xs: 'block', md: 'none', sm: 'block'}}>
    <Flex alignItems="center">
      <Box mr={4} display={{xs: 'block', md: 'none', sm: 'none'}}>
        <FaSearch color="#FFF" size={18} />
      </Box>
      <Box display={{xs: 'block', md: 'none', sm: 'block'}}>
        <GiHamburgerMenu color="#FFF" size={20} />
      </Box>
    </Flex>
  </Box>
)

export default MobileMenu
