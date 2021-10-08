import {initializeApp} from 'firebase/app'

const API_KEY = process.env.REACT_APP_FIREBASE_API_KEY

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: 'coherent-ranger-234413.firebaseapp.com',
  databaseURL: 'https://coherent-ranger-234413.firebaseio.com',
  projectId: 'coherent-ranger-234413',
  storageBucket: 'coherent-ranger-234413.appspot.com',
  messagingSenderId: '711141973356',
  appId: '1:711141973356:web:633ec1966bcdef473da749',
}

// Initialize Firebase
initializeApp(firebaseConfig)
