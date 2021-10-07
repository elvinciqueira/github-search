import {useAuth} from '../../../infra/hooks/auth/useAuth'
import {TextField} from '../../forms/TextField'
import {Select} from '../../forms/Select'
import {Profile} from '../../commons/Profile'
import {Box} from '../../foundation/layout/Box'
import {Grid} from '../../foundation/layout/Grid'
import {Flex} from '../../foundation/layout/Flex'
import Header from '../../patterns/Header'
import RepoList from '../../patterns/RepoList'
import SideBar from '../../patterns/Sidebar'

const HomePage = () => {
  const {userInfo} = useAuth()

  return (
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
            <RepoList data={userInfo?.repos} />
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
}

export default HomePage
