import styled from 'styled-components'
import {variant} from 'styled-system'
import {typographyFunctions} from './typography-functions'

const defaultextStyles = {
  letterSpaging: 'default',
  fontWeight: 'normal',
  color: 'white',
  mt: 0,
  mb: 0,
}

const textVariants = variant({
  variants: {
    title: {
      ...defaultextStyles,
      fontSize: 2,
      lineHeight: 'title',
      fontWeight: 'bold',
    },
    body: {
      ...defaultextStyles,
      fontSize: 1,
      lineHeight: 'body',
    },
    sidebarTitle: {
      ...defaultextStyles,
      fontSize: 0,
      lineHeight: 'sidebarTitle',
      letterSpacing: 'tracked',
      textTransform: 'uppercase',
    },
  },
})

export const Text = styled.span`
  ${textVariants}
  ${typographyFunctions}
`

Text.defaultProps = {
  variant: 'body',
}
