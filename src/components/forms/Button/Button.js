import {forwardRef} from 'react'
import PropTypes from 'prop-types'
import {
  border,
  compose,
  flexbox,
  layout,
  position,
  space,
  variant,
} from 'styled-system'
import styled from 'styled-components'

const defaultButtonStyles = {
  position: 'relative',
  fontFamily: 'body',
  fontSize: 1,
  fontWeight: 'normal',
  borderRadius: '8px',
  padding: 3,
  border: 0,
  ml: 0,
  mr: 0,
  mb: 0,
  appearance: 'none',
  transition: 'background 0.3s',
}

const buttonVariants = variant({
  variants: {
    filled: {
      ...defaultButtonStyles,
      bg: 'blue300',
      color: 'darkBlue',
      '&:hover': {
        backgroundColor: 'blue200',
      },
      '&:focus': {
        backgroundColor: 'blue100',
      },
      '&:active': {
        border: '4px solid rgba(80, 129, 251, 0.72)',
      },
    },
    ghost: {
      ...defaultButtonStyles,
      bg: 'rgba(80, 129, 251, 0.08)',
      color: 'white',
      '&:hover': {
        backgroundColor: 'rgba(80, 129, 251, 0.16)',
      },
      '&:focus': {
        backgroundColor: 'rgba(80, 129, 251, 0.24)',
      },
      '&:active': {
        border: '4px solid rgba(80, 129, 251, 0.24)',
      },
    },
  },
})

const StyledButton = styled.button`
  ${buttonVariants}
  ${compose(space, layout, flexbox, border, position)}
`

export const Button = forwardRef(
  ({children, as: Comp, type, variant, ...rest}, ref) => (
    <StyledButton ref={ref} as={Comp} type={type} variant={variant} {...rest}>
      {children}
    </StyledButton>
  ),
)

Button.displayName = 'Button'

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['filled', 'ghost']),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
}

Button.defaultProps = {
  variant: 'filled',
  type: 'button',
  as: 'button',
}
