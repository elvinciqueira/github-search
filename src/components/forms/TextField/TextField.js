import React from 'react'
import get from 'lodash/get'
import styled from 'styled-components'
import {layout} from 'styled-system'

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
  ${layout}
`
export const TextField = React.forwardRef((props, ref) => {
  return <StyledInput as="input" ref={ref} {...props} />
})
