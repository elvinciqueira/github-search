import '../src/infra/firebase'
import {BrowserRouter} from 'react-router-dom'
import {UIProvider} from '../src/theme/provider/UIProvider'
import {AuthProvider} from '../src/infra/hooks/auth/useAuth'
import Routes from '../src/infra/routes'

function App() {
  return (
    <UIProvider>
      <BrowserRouter>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </BrowserRouter>
    </UIProvider>
  )
}

export default App
