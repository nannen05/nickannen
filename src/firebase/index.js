import firebase from 'firebase/app'
import 'firebase/database'

const config = {
  apiKey: 'AIzaSyDehVhBmLaJvlFf3JomRL065eh-ut107zI',
  authDomain: 'nickannen-15a9e.firebaseapp.com',
  databaseURL: 'https://nickannen-15a9e.firebaseio.com',
  projectId: 'nickannen-15a9e',
  storageBucket: 'nickannen-15a9e.appspot.com',
  messagingSenderId: '930663421523'
}

const FIREBASE_APP = firebase.initializeApp(config)

const FIREBASE_DATABASE = FIREBASE_APP.database()

export const DATAHEADER = FIREBASE_DATABASE.ref('/flamelink/environments/production/content/headerSection/en-US')
export const DATAFORMPOSTS = FIREBASE_DATABASE.ref('/formposts')
