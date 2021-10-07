const ACCESS_TOKEN_MAP_BOX = `access_token=${process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX}`
const MAP_BOX_API_URL = `https://api.mapbox.com/geocoding/v5/mapbox.places/`

export const mapBoxService = {
  async getCoordinates(location) {
    return fetch(`${MAP_BOX_API_URL}${location}.json?${ACCESS_TOKEN_MAP_BOX}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.features) {
          const [lng, lat] = data.features[0].center
          return {lat, lng}
        }
        return {lat: -34.397, lng: 150.644}
      })
  },
}
