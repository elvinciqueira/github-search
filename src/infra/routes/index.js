import {Switch, Route} from 'react-router-dom'
import SearchPage from '../../components/pages/SearchPage'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={SearchPage} />
  </Switch>
)

export default Routes
