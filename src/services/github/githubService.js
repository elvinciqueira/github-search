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
}
