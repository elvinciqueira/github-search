import React from 'react'
import {useHistory} from 'react-router-dom'
import {githubService} from '../../../../services/github/githubService'

const AuthContext = React.createContext({
  loginWithGithub: () => {},
  userInfo: {
    repos: [],
    owner: {},
  },
})

const AuthProvider = ({children}) => {
  const history = useHistory()
  const [userInfo, setUserInfo] = React.useState({})

  function loginWithGithub(username) {
    githubService.loginOauth(username).then((userInfo) => {
      if (userInfo) {
        setUserInfo(userInfo)
        history.push('/home')
      }
    })
  }

  return (
    <AuthContext.Provider value={{loginWithGithub, userInfo}}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => {
  const context = React.useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider')
  }
  return context
}

export {AuthProvider, useAuth}
