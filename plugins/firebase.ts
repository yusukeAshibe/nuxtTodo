import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// SDKを使用するためのConfig情報
const firebaseConfig = {
    apiKey: "AIzaSyDg5eHzBW1KMBLlBn1Hqd3nVAGqSuwt7n8",
    authDomain: "todo-ca05a.firebaseapp.com",
    projectId: "todo-ca05a",
    storageBucket: "todo-ca05a.appspot.com",
    messagingSenderId: "247096553813",
    appId: "1:247096553813:web:f3843f701c1c855d20ffdc"
}
// Appの初期化
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}
// 今回使用するAPI
export const auth = firebase.auth()
export const firestore = firebase.firestore()
export default firebase;