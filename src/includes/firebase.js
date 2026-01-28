import { initializeApp } from 'firebase/app'
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth'
import {
  collection,
  getFirestore,
  enableIndexedDbPersistence,
} from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyBATsrNaRZXeASr_PBU3BTaHWiaykOtR-w',
  authDomain: 'music-d1209.firebaseapp.com',
  projectId: 'music-d1209',
  storageBucket: 'music-d1209.appspot.com',
  messagingSenderId: '687819039612',
  appId: '1:687819039612:web:1cc11eedff95bedd817af9',
}

const app = initializeApp(firebaseConfig)

const auth = getAuth()
const db = getFirestore(app)
const storage = getStorage()

// Enable Auth Persistence
setPersistence(auth, browserLocalPersistence).catch((err) => {
  console.error('Auth persistence error', err.code)
})

// Enable Firestore Persistence
enableIndexedDbPersistence(db).catch((err) => {
  if (err.code === 'failed-precondition') {
    console.warn(
      'Multiple tabs open, persistence can only be enabled in one tab at a time.'
    )
  } else if (err.code === 'unimplemented') {
    console.warn('The current browser does not support offline persistence.')
  } else {
    console.error('Firestore persistence error', err.code)
  }
})

const usersCollection = collection(db, 'users')
const songsCollection = collection(db, 'songs')
const commentsCollection = collection(db, 'comments')

export {
  auth,
  db,
  usersCollection,
  songsCollection,
  commentsCollection,
  storage,
}
