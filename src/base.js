import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDzHx30JX5g0GKJRh07gOEyqZ0UloukndQ",
  authDomain: "mes-recettes-e08a6.firebaseapp.com",
  databaseURL: "https://mes-recettes-e08a6.firebaseio.com",
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
