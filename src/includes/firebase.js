import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { collection, getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyBATsrNaRZXeASr_PBU3BTaHWiaykOtR-w',
  authDomain: 'music-d1209.firebaseapp.com',
  projectId: 'music-d1209',
  storageBucket: 'music-d1209.appspot.com',
  appId: '1:687819039612:web:1cc11eedff95bedd817af9',
}

const app = initializeApp(firebaseConfig)

const auth = getAuth()
const db = getFirestore(app)
const storage = getStorage()

const usersCollection = collection(db, 'users')

export { auth, db, usersCollection, storage }
