import {TextField} from '../../forms/TextField'
import {Box} from '../../foundation/layout/Box'
import {Flex} from '../../foundation/layout/Flex'
import {Logo} from '../../../theme/Logo'
import {Profile} from '../../commons/Profile'

import BaseTemplate from '../../templates/BaseTemplate'
import Header from '../../patterns/Header'
import MobileMenu from '../../patterns/MobileMenu'
import SideBar from '../../patterns/Sidebar'

const HomePage = () => (
  <BaseTemplate
    header={
      <Header
        leftContent={<Logo />}
        centerContent={
          <Box display={{xs: 'none', md: 'block', sm: 'block'}}>
            <TextField width={752} type="text" placeholder="Busque por algo" />
          </Box>
        }
        rightContent={
          <>
            <MobileMenu />
            <Profile />
          </>
        }
      />
    }
  >
    <Flex flex={1}>
      <SideBar />
    </Flex>
  </BaseTemplate>
)

export default HomePage
