import {TextField} from '../../forms/TextField'
import {Box} from '../../foundation/layout/Box'
import {Grid} from '../../foundation/layout/Grid'
import {Flex} from '../../foundation/layout/Flex'
import Header from '../../patterns/Header'
import {Profile} from '../../commons/Profile'
import RepoCard from '../../commons/RepoCard'
import {Select} from '../../forms/Select'

import SideBar from '../../patterns/Sidebar'

const HomePage = () => (
  <Flex flexDirection="column" minHeight="100vh" px={3}>
    <Box>
      <Header
        centerContent={
          <TextField
            width={{xs: '100%', md: '50%'}}
            mx="auto"
            placeholder="Busque por algo"
          />
        }
        rightContent={<Profile />}
      />
    </Box>
    <Flex flex={1} flexDirection={['column', 'row']}>
      <Box flex={1} minWidth={0}>
        <Grid
          gridTemplateColumns={{xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)'}}
          gridGap={3}
        >
          <RepoCard />
          <RepoCard />
          <RepoCard />
          <RepoCard />
          <RepoCard />
        </Grid>
      </Box>
      <Box
        display={{xs: 'none', md: 'block', sm: 'none'}}
        flexBasis={['auto', 64]}
        order="-1"
      >
        <SideBar />
      </Box>
      <Box
        display={{xs: 'none', md: 'block', sm: 'none'}}
        pr={3}
        width="15%"
        ml={3}
      >
        <Select placeholder="Ordernar por">
          <option>Option 1</option>
          <option>Option 2</option>
        </Select>
      </Box>
    </Flex>
  </Flex>
)

export default HomePage
