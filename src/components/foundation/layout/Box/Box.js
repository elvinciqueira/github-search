import styled from 'styled-components'
import {
  compose,
  space,
  layout,
  color,
  border,
  flexbox,
  position,
} from 'styled-system'

export const Box = styled.div(
  compose(space, color, flexbox, layout, border, position),
)

Box.displayName = 'Box'

Box.propTypes = {
  ...position.propTypes,
  ...border.propTypes,
  ...flexbox.propTypes,
  ...layout.propTypes,
  ...color.propTypes,
  ...space.propTypes,
}
