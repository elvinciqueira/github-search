import {HiCode} from 'react-icons/hi'
import {FaUsers} from 'react-icons/fa'

import {IconButton} from '../../forms/IconButton'
import {Flex} from '../../foundation/layout/Flex'
import {Text} from '../../foundation/Text'

const SideBar = () => (
  <Flex as="aside" flexDirection="column" pl={4} mt={4}>
    <Text variant="sidebarTitle" mb={4}>
      Menu
    </Text>
    <Flex alignItems="center" mb={3}>
      <IconButton icon={<HiCode color="white" size={20} />} />
      <Text ml={3} variant="body">
        Editor de código
      </Text>
    </Flex>
    <Flex alignItems="center">
      <IconButton icon={<FaUsers color="white" size={20} />} />
      <Text ml={3} variant="body">
        Comunidade
      </Text>
    </Flex>
  </Flex>
)

export default SideBar
