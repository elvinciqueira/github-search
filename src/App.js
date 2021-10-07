import {BrowserRouter} from 'react-router-dom'
import {UIProvider} from '../src/theme/provider/UIProvider'
import Routes from '../src/infra/routes'

function App() {
  return (
    <UIProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </UIProvider>
  )
}

export default App
