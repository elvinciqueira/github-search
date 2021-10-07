import {compose, withProps} from 'recompose'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from 'react-google-maps'

const API_KEY = `key=${process.env.REACT_APP_API_KEY}`

export const Map = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?${API_KEY}v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{height: `100%`}} />,
    containerElement: <div style={{height: `400px`}} />,
    mapElement: <div style={{height: `100vh`}} />,
  }),
  withScriptjs,
  withGoogleMap,
)((props) => (
  <GoogleMap defaultZoom={4.5} defaultCenter={props.coordinates}>
    {props.isMarkerShown && (
      <Marker position={props.coordinates} onClick={props.onToggleOpen}>
        {props.open && (
          <InfoWindow onCloseClick={props.onToggleOpen} onClick={props.onClick}>
            {props.infoWindowContent}
          </InfoWindow>
        )}
      </Marker>
    )}
  </GoogleMap>
))
