import {useState} from 'react'
import {AiOutlineStar, AiFillStar} from 'react-icons/ai'
import PropTypes from 'prop-types'
import {Text} from '../../foundation/Text'
import {Box} from '../../foundation/layout/Box'
import {Flex} from '../../foundation/layout/Flex'
import {IconButton} from '../../commons/IconButton'

export default function RepoCard({onClick, ...props}) {
  const [isStarred, setIsStarred] = useState(props.isStarred || false)

  return (
    <Box
      backgroundColor="rgba(0, 0, 0, 0.16)"
      padding={3}
      width="100%"
      borderRadius="8px"
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Text as="h2" variant="title">
          {props.name}
        </Text>
        <IconButton
          icon={
            isStarred ? (
              <AiFillStar size={20} color="white" />
            ) : (
              <AiOutlineStar size={20} color="white" />
            )
          }
          variant="ghost"
          borderRadius="8px"
          p={2}
          onClick={() => {
            onClick({...props, isStarred: true})
            setIsStarred(!isStarred)
          }}
        />
      </Flex>
      <Text as="p" variant="body" mt={2}>
        {props.description}
      </Text>
    </Box>
  )
}

RepoCard.propTypes = {
  description: '',
}

RepoCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  id: PropTypes.number.isRequired,
}
