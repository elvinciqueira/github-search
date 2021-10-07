import styled from 'styled-components'
import {grid} from 'styled-system'
import {Box} from '../Box'

export const Grid = styled(Box)({
  display: 'grid',
  grid,
})

Grid.displayName = 'Grid'

Grid.propTypes = {
  ...grid.propTypes,
}
