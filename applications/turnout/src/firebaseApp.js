import firebase from 'firebase'

const firebaseConfig = {};

export const firebaseApp = firebase.initializeApp(firebaseConfig)
export const eventsRef = firebaseApp.database().ref().child('events')
