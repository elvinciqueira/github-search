import {Switch, Route} from 'react-router-dom'
import SearchPage from '../../components/pages/SearchPage'
import HomePage from '../../components/pages/HomePage'
import SavedReposPage from '../../components/pages/SavedReposPage'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={SearchPage} />
    <Route exact path="/home" component={HomePage} />
    <Route exact path="/savedRepos" component={SavedReposPage} />
  </Switch>
)

export default Routes
