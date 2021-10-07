import {createGlobalStyle} from 'styled-components'
import {normalize} from 'styled-normalize'
import get from 'lodash/get'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  ${normalize}
  button {
    cursor: pointer;
  }
  html,
  body {
    margin: 0;
    padding: 0;
    font-family: ${({theme}) => get(theme, 'fontFamily')};
    background-color: ${({theme}) => get(theme, 'colors.darkBlue')};
  }
  /* Full height layout */
  html, body {
    display: flex;
    min-height: 100vh;
    width: 100%;
  }
  #root {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`

export default GlobalStyle
