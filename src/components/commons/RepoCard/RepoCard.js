import {AiOutlineStar} from 'react-icons/ai'
import {Text} from '../../foundation/Text'
import {Box} from '../../foundation/layout/Box'
import {Flex} from '../../foundation/layout/Flex'

export default function RepoCard() {
  return (
    <Box backgroundColor="rgba(0, 0, 0, 0.16)" padding={4} borderRadius="8px">
      <Flex justifyContent="space-between" alignItems="center">
        <Text as="h2" variant="title">
          Titulo do projeto
        </Text>
        <AiOutlineStar color="white" size={20} />
      </Flex>
      <Text as="p" variant="body" mt={2}>
        Descrição do projeto
      </Text>
    </Box>
  )
}
