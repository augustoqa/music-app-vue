import { setActivePinia, createPinia } from 'pinia'

import useUserStore from '@/stores/user'

vi.mock('firebase/auth', () => ({
  signInWithEmailAndPassword: vi.fn().mockResolvedValue({}),
}))

vi.mock('@/includes/firebase', () => ({
  auth: {},
}))

describe('stores', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  test('authenticates user', async () => {
    const store = useUserStore()

    expect(store.userLoggedIn).not.toBe(true)

    await store.authenticate({})

    expect(store.userLoggedIn).toBe(true)
  })
})
