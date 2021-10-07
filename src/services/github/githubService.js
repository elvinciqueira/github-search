import {GithubAuthProvider, getAuth, signInWithPopup} from 'firebase/auth'
const provider = new GithubAuthProvider()
provider.addScope('repo', 'user')
const auth = getAuth()

const GITHUB_API_URL = 'https://api.github.com'
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const githubService = {
  async getUser(githubUsername) {
    return fetch(`${GITHUB_API_URL}/users/${githubUsername}`, {
      headers: {
        Authorization: `${GITHUB_TOKEN}`,
      },
    })
      .then((response) => response.json())
      .then((data) => ({
        id: data.id,
        avatar: data.avatar_url,
        username: data.login,
        location: data.location,
      }))
      .catch((error) => {
        console.log('Ooops', error)
      })
  },

  async getRepos(githubUsername, accessToken) {
    return fetch(`${GITHUB_API_URL}/users/${githubUsername}/repos`, {
      headers: {
        Authorization: `${accessToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        return {
          owner: {
            id: data[0].owner.id,
            avatar: data[0].owner.avatar_url,
            username: data[0].owner.login,
          },
          repos: data.map((repo) => ({
            id: repo.id,
            name: repo.name,
            description: repo.description,
            url: repo.html_url,
            language: repo.language,
            stars: repo.stargazers_count,
            forks: repo.forks,
            updatedAt: repo.updated_at,
          })),
        }
      })
      .catch((error) => {
        console.log('Ooops', error)
      })
  },

  async loginOauth(githubUsername) {
    return signInWithPopup(auth, provider)
      .then(async (result) => {
        const credential = GithubAuthProvider.credentialFromResult(result)
        const token = credential.accessToken
        const repos = await this.getRepos(githubUsername, token)
        return repos
      })
      .catch((error) => {
        console.log('Ooops', error.message)
      })
  },
}
