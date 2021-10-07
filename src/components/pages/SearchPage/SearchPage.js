import {useEffect, useState} from 'react'
import {useForm} from '../../../infra/hooks/forms/useForm'
import {useAuth} from '../../../infra/hooks/auth/useAuth'
import {Text} from '../../foundation/Text'
import {TextField} from '../../forms/TextField'
import {Button} from '../../commons/Button'
import {Map} from '../../commons/Map'
import {Form} from '../../forms/Form'
import {Avatar} from '../../commons/Avatar'
import {githubService} from '../../../services/github/githubService'
import {mapBoxService} from '../../../services/mapBox/mapBoxService'

const SearchPage = () => {
  const {loginWithGithub} = useAuth()
  const [coordinates, setCoordinates] = useState({lat: -34.397, lng: 150.644})
  const [githubUser, setGithubUser] = useState({
    id: null,
    avatar: '',
    username: '',
    location: '',
  })
  const [open, setOpen] = useState(false)
  const initialValues = {search: ''}
  const form = useForm({
    initialValues,
    onSubmit: (values) => {
      const searchResult = values.search
      githubService.getUser(searchResult).then((user) => {
        setGithubUser(user)
        setOpen(true)
      })
    },
  })

  useEffect(() => {
    mapBoxService.getCoordinates(githubUser.location).then((coordinates) => {
      setCoordinates(coordinates)
    })
  }, [githubUser.location])

  return (
    <>
      <Map
        coordinates={coordinates}
        isMarkerShown
        infoWindowContent={
          <Text
            as="a"
            textDecoration="none"
            href="#"
            onClick={() => loginWithGithub(githubUser.username)}
          >
            <Avatar
              src={githubUser?.avatar}
              title={githubUser?.username}
              textColor="darkBlue"
              onClick={() => loginWithGithub(githubUser.username)}
            />
          </Text>
        }
        onToggleOpen={() => setOpen(!open)}
        open={open}
      />
      <Form onSubmit={form.handleSubmit}>
        <Text as="h1" variant="title" mb={2}>
          Github Explorer
        </Text>
        <TextField
          name="search"
          type="text"
          value={form.values.search}
          placeholder="Busque por um usuário github"
          onChange={form.handleChange}
        />
        <Button type="submit" isFullWidth mt={4}>
          Buscar
        </Button>
      </Form>
    </>
  )
}

export default SearchPage
