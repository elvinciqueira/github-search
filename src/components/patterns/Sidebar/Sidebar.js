import {AiFillHome, AiFillStar} from 'react-icons/ai'
import {useHistory} from 'react-router-dom'
import {IconButton} from '../../commons/IconButton'
import {Flex} from '../../foundation/layout/Flex'
import {Text} from '../../foundation/Text'

const SideBar = () => {
  const history = useHistory()

  return (
    <Flex as="aside" width="265px" flexDirection="column" pl={4} mt={4}>
      <Text variant="sidebarTitle" mb={4}>
        Menu
      </Text>
      <Flex alignItems="center" mb={3}>
        <IconButton
          icon={<AiFillHome color="white" size={20} />}
          onClick={() => history.push('/home')}
        />
        <Text ml={3} variant="body">
          Home
        </Text>
      </Flex>
      <Flex alignItems="center">
        <IconButton
          icon={<AiFillStar color="white" size={20} />}
          onClick={() => history.push('/savedRepos')}
        />
        <Text ml={3} variant="body">
          Projetos salvos
        </Text>
      </Flex>
    </Flex>
  )
}

export default SideBar
