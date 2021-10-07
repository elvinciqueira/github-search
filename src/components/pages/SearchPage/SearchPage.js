import {Flex} from '../../foundation/layout/Flex'
import {Box} from '../../foundation/layout/Box'
import {Text} from '../../foundation/Text'
import {TextField} from '../../forms/TextField'
import {Button} from '../../commons/Button'

const SearchPage = () => {
  return (
    <Flex alignItems="center" justifyContent="center" flex={1}>
      <Box maxWidth="768px" mx="auto" px={3} py={4}>
        <Text as="h1" mb={3} variant="title">
          Github Explorer
        </Text>
        <form>
          <Flex alignItems="center">
            <TextField
              label="Search"
              name="search"
              borderRadius="8px 0 0 8px"
              placeholder="Busque por um usuário"
            />
            <Button
              type="submit"
              borderRadius="0px 8px 8px 0px"
              padding="14px 16px"
            >
              Search
            </Button>
          </Flex>
        </form>
      </Box>
    </Flex>
  )
}

export default SearchPage
