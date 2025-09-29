import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isLoggedIn: false,
    user: null as {
      id: string
      firstName: string
      lastName: string
      email: string
      isConsultant: boolean
    } | null
  }),

  getters: {
    fullName: (state) => {
      if (!state.user) return ''
      return `${state.user.firstName} ${state.user.lastName}`
    },
    
    userInitials: (state) => {
      if (!state.user) return ''
      return `${state.user.firstName.charAt(0)}${state.user.lastName.charAt(0)}`.toUpperCase()
    }
  },

  actions: {
    login(email: string, password: string) {
      // Simulate API call
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          // Simple validation for demo
          if (email && password) {
            this.isLoggedIn = true
            this.user = {
              id: '1',
              firstName: 'Oktay',
              lastName: 'tnts',
              email: email,
              isConsultant: false
            }
            resolve({ success: true })
          } else {
            reject(new Error('Geçersiz bilgiler'))
          }
        }, 1000)
      })
    },

    register(userData: {
      firstName: string
      lastName: string
      email: string
      password: string
      phone: string
      birthDate?: string
      newsletter: boolean
      agreement: boolean
      isConsultant: boolean
    }) {
      // Simulate API call
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          // Simple validation for demo
          if (userData.firstName && userData.lastName && userData.email && userData.password) {
            this.isLoggedIn = true
            this.user = {
              id: '1',
              firstName: userData.firstName,
              lastName: userData.lastName,
              email: userData.email,
              isConsultant: userData.isConsultant
            }
            resolve({ success: true })
          } else {
            reject(new Error('Eksik bilgiler'))
          }
        }, 1000)
      })
    },

    logout() {
      this.isLoggedIn = false
      this.user = null
    }
  }
})
