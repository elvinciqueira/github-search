import React from 'react'
import get from 'lodash/get'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {layout, space, compose} from 'styled-system'

import {Text} from '../../foundation/Text'

const StyledInput = styled(Text)`
  width: 100%;
  color: #fff;
  border-radius: ${({theme}) => get(theme, 'borderRadius')};
  background: rgba(255, 255, 255, 0.16);
  border: 0;
  padding: 10px 16px;
  transition: background 0.3s;
  &:hover {
    background: rgba(255, 255, 255, 0.24);
  }

  option {
    color: black;
  }

  ${compose(layout, space)}
`
export const TextField = React.forwardRef((props, ref) => {
  const {placeholder, name, onChange, value, type} = props

  return (
    <StyledInput
      as="input"
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...props}
      ref={ref}
    />
  )
})

TextField.defaultProps = {
  onChange: () => {},
}

TextField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string.isRequired,
}
