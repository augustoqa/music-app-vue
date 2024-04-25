import { createUserWithEmailAndPassword } from 'firebase/auth'
import { addDoc } from 'firebase/firestore'
import { auth, usersCollection } from '@/includes/firebase'
import { defineStore } from 'pinia'

export default defineStore('user', {
  state: () => ({
    userLoggedIn: false,
  }),
  actions: {
    async register(values) {
      await createUserWithEmailAndPassword(auth, values.email, values.password)

      await addDoc(usersCollection, {
        name: values.name,
        email: values.email,
        age: values.age,
        country: values.country,
      })

      this.userLoggedIn = true
    },
  },
})
