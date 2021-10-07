import {useAuth} from '../../../infra/hooks/auth/useAuth'
import {TextField} from '../../forms/TextField'
import {Select} from '../../forms/Select'
import {Avatar} from '../../commons/Avatar'
import {Box} from '../../foundation/layout/Box'
import {Grid} from '../../foundation/layout/Grid'
import Header from '../../patterns/Header'
import RepoList from '../../patterns/RepoList'
import SideBar from '../../patterns/Sidebar'
import BaseTemplate from '../../templates/BaseTemplate'

const HomePage = () => {
  const {userInfo} = useAuth()

  return (
    <BaseTemplate
      header={
        <Header
          centerContent={
            <TextField
              width={{xs: '100%', md: '50%'}}
              mx="auto"
              placeholder="Busque por algo"
            />
          }
          rightContent={
            <Box display={{xs: 'none', md: 'block', sm: 'none'}}>
              <Avatar
                src={userInfo.owner?.avatar}
                title={userInfo.owner?.username}
              />
            </Box>
          }
        />
      }
      nav={<SideBar />}
      aside={
        <Select placeholder="Ordernar por">
          <option>Option 1</option>
          <option>Option 2</option>
        </Select>
      }
    >
      <Grid
        gridTemplateColumns={{xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)'}}
        gridGap={3}
      >
        <RepoList data={userInfo?.repos} />
      </Grid>
    </BaseTemplate>
  )
}

export default HomePage
