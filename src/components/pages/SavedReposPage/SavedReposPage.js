import {useState} from 'react'
import {useAuth} from '../../../infra/hooks/auth/useAuth'
import {Avatar} from '../../commons/Avatar'
import {Box} from '../../foundation/layout/Box'
import {Grid} from '../../foundation/layout/Grid'
import Header from '../../patterns/Header'
import RepoList from '../../patterns/RepoList'
import SideBar from '../../patterns/Sidebar'
import BaseTemplate from '../../templates/BaseTemplate'
import * as _ from '../../../lib/functions'

const sortByDate = _.sort(
  (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt),
)

const SavedReposPage = () => {
  const {userInfo} = useAuth()
  const [repos, setRepos] = useState(() => {
    const storagedRepositories = localStorage.getItem('@Github:repos')
    if (storagedRepositories) {
      console.log(JSON.parse(storagedRepositories))
      return sortByDate(JSON.parse(storagedRepositories))
    }
    return []
  })

  const handleUnfavorite = (repo) => {
    const filteredRepos = repos.filter((r) => r.id !== repo.id)
    setRepos(filteredRepos)
    localStorage.setItem('@Github:repos', JSON.stringify(filteredRepos))
  }

  return (
    <BaseTemplate
      header={
        <Header
          rightContent={
            <Box display={{xs: 'none', md: 'block', sm: 'none'}} ml="auto">
              <Avatar
                src={userInfo.owner?.avatar}
                title={userInfo.owner?.username}
              />
            </Box>
          }
        />
      }
      nav={<SideBar />}
    >
      <Grid
        gridTemplateColumns={{xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)'}}
        gridGap={3}
      >
        <RepoList data={repos} onClick={handleUnfavorite} />
      </Grid>
    </BaseTemplate>
  )
}

export default SavedReposPage
