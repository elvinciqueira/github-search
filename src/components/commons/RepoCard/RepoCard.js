import {AiOutlineStar} from 'react-icons/ai'
import PropTypes from 'prop-types'
import {Text} from '../../foundation/Text'
import {Box} from '../../foundation/layout/Box'
import {Flex} from '../../foundation/layout/Flex'

export default function RepoCard({name, description, url}) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Box
        backgroundColor="rgba(0, 0, 0, 0.16)"
        padding={3}
        width="100%"
        borderRadius="8px"
      >
        <Flex justifyContent="space-between" alignItems="center">
          <Text as="h2" variant="title">
            {name}
          </Text>
          <AiOutlineStar color="white" size={20} />
        </Flex>
        <Text as="p" variant="body" mt={2}>
          {description}
        </Text>
      </Box>
    </a>
  )
}

RepoCard.propTypes = {
  description: '',
}

RepoCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  url: PropTypes.string.isRequired,
}
