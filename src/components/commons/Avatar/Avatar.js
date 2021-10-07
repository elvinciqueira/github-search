import styled from 'styled-components'
import PropTypes from 'prop-types'
import get from 'lodash/get'

import {Box} from '../../foundation/layout/Box'
import {Text} from '../../foundation/Text'
import {Flex} from '../../foundation/layout/Flex'

const Wrapper = styled.div`
  border-radius: ${({theme}) => get(theme, 'borderRadius')};
  cursor: pointer;
  padding: 12px;
  transition: background 0.3s;
  &:hover {
    background: rgba(255, 255, 255, 0.08);
  }
`

const StyledImage = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-size: cover;
  background-image: url(${(props) => props.src});
`

export const Avatar = ({
  title,
  src,
  size,
  color,
  altText,
  initials,
  ...props
}) => (
  <Wrapper>
    <Flex>
      <StyledImage
        role="img"
        src={src}
        alt={altText}
        size={size}
        color={color}
        p={2}
        {...props}
      >
        {!src && initials && <Text fontSize={1}>{initials.toUpperCase()}</Text>}
      </StyledImage>
      {title && (
        <Flex flexDirection="column" justifyContent="center" ml={3}>
          <Text>{title}</Text>
        </Flex>
      )}
    </Flex>
  </Wrapper>
)

Avatar.displayName = 'Avatar'

Avatar.propTypes = {
  title: PropTypes.string,
  src: PropTypes.string,
  altText: PropTypes.string,
  initials: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
}

Avatar.defaultProps = {
  size: 40,
  altText: 'avatar',
  color: 'blue200',
}
