import { createUserWithEmailAndPassword } from 'firebase/auth'
import { addDoc, doc, setDoc } from 'firebase/firestore'
import { auth, usersCollection } from '@/includes/firebase'
import { defineStore } from 'pinia'

export default defineStore('user', {
  state: () => ({
    userLoggedIn: false,
  }),
  actions: {
    async register(values) {
      const userCred = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      )

      await setDoc(doc(usersCollection, userCred.user.uid), {
        name: values.name,
        email: values.email,
        age: values.age,
        country: values.country,
      })

      await userCred.user.updateProfile({
        displayName: values.name,
      })

      this.userLoggedIn = true
    },
  },
})
