import GlobalStyle from '../../GlobalStyle'
import {ThemeProvider} from 'styled-components'
import {theme} from '../../index'

export const UIProvider = ({children}) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
)
