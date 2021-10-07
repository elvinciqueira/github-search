import {useState} from 'react'
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
import * as _ from '../../../lib/functions'

const sortByDate = _.sort(
  (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt),
)
const sortByAlphabet = _.sort((a, b) => a.name.localeCompare(b.name))

const filterBy = (search) =>
  _.filter(({name}) => name.toUpperCase().indexOf(search.toUpperCase()) > -1)

const HomePage = () => {
  const {userInfo} = useAuth()
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState('Data')
  const [repos, setRepos] = useState(sortByDate([...(userInfo.repos || [])]))

  const sortBy = (propField) => {
    const sorted = {
      Data: sortByDate([...userInfo.repos]),
      'Ordem alfabética': sortByAlphabet([...userInfo.repos]),
    }
    return sorted[propField]
  }

  const handleSort = ({target}) => {
    const {value} = target
    if (value) {
      setRepos(sortBy(value))
      setSelected(value)
    }
  }

  const handleChange = ({target}) => {
    const {value} = target
    const filteredRepos = filterBy(value)([...userInfo.repos])
    setSearch(value)
    setRepos(filteredRepos)
  }

  return (
    <BaseTemplate
      header={
        <Header
          centerContent={
            <TextField
              width={{xs: '100%', md: '50%'}}
              mx="auto"
              name="search"
              type="text"
              value={search}
              placeholder="Busque por algo"
              onChange={handleChange}
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
        <Select
          name="orderBy"
          value={selected}
          placeholder="Ordernar por"
          onChange={handleSort}
        >
          <option>Data</option>
          <option>Ordem alfabética</option>
        </Select>
      }
    >
      <Grid
        gridTemplateColumns={{xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)'}}
        gridGap={3}
      >
        <RepoList data={repos} />
      </Grid>
    </BaseTemplate>
  )
}

export default HomePage
