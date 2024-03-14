import { initializeApp } from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBATsrNaRZXeASr_PBU3BTaHWiaykOtR-w',
  authDomain: 'music-d1209.firebaseapp.com',
  projectId: 'music-d1209',
  storageBucket: 'music-d1209.appspot.com',
  appId: '1:687819039612:web:1cc11eedff95bedd817af9',
}

export default initializeApp(firebaseConfig)
