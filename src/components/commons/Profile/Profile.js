import {Box} from '../../foundation/layout/Box'
import {Avatar} from '../Avatar'

export const Profile = () => (
  <Box display={{xs: 'none', md: 'block', sm: 'none'}}>
    <Avatar src="https://github.com/elvinciqueira.png" title="Harry" />
  </Box>
)
