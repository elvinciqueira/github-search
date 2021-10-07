import {Switch, Route} from 'react-router-dom'
import SearchPage from '../../components/pages/SearchPage'
import HomePage from '../../components/pages/HomePage'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={SearchPage} />
    <Route exact path="/home" component={HomePage} />
  </Switch>
)

export default Routes
