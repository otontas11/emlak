<template>
  <NuxtLayout name="default">
    <div class="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <!-- Header -->
      <div class="text-center">
        <div class="flex items-center justify-center mb-6">
          <div class="w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center mr-3">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
            </svg>
          </div>
          <h1 class="text-2xl font-bold text-gray-900">Emlak Danışmanınız</h1>
        </div>
      </div>

      <!-- Tab Navigation -->
      <div class="flex border-b border-gray-200">
        <button
          @click="activeTab = 'login'"
          :class="[
            'flex-1 py-4 px-1 text-center text-sm font-medium border-b-2 transition-colors',
            activeTab === 'login'
              ? 'border-gray-900 text-gray-900'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
          ]"
        >
          GİRİŞ YAP
        </button>
        <button
          @click="activeTab = 'register'"
          :class="[
            'flex-1 py-4 px-1 text-center text-sm font-medium border-b-2 transition-colors',
            activeTab === 'register'
              ? 'border-gray-900 text-gray-900'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
          ]"
        >
          ÜYE OL
        </button>
      </div>

      <!-- Login Form -->
      <div v-if="activeTab === 'login'" class="mt-8 space-y-6">
        <form @submit.prevent="handleLogin" class="space-y-6">
          <!-- Email Field -->
          <div>
            <label for="login-email" class="block text-sm font-medium text-gray-700 mb-2">
              E-POSTA ADRESİNİZ
            </label>
            <input
              id="login-email"
              v-model="loginForm.email"
              type="email"
              required
              class="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="E-posta adresinizi girin"
            />
          </div>

          <!-- Password Field -->
          <div>
            <label for="login-password" class="block text-sm font-medium text-gray-700 mb-2">
              ŞİFRENİZ
            </label>
            <div class="relative">
              <input
                id="login-password"
                v-model="loginForm.password"
                :type="showLoginPassword ? 'text' : 'password'"
                required
                class="w-full px-3 py-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Şifrenizi girin"
              />
              <button
                type="button"
                @click="showLoginPassword = !showLoginPassword"
                class="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path v-if="showLoginPassword" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"></path>
                  <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </button>
            </div>
          </div>

          <!-- Remember Me & Forgot Password -->
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input
                id="remember-me"
                v-model="loginForm.rememberMe"
                type="checkbox"
                class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label for="remember-me" class="ml-2 block text-sm text-gray-700">
                BENİ HATIRLA
              </label>
            </div>
            <div class="text-sm">
              <a href="#" class="font-medium text-blue-600 hover:text-blue-500 flex items-center">
                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
                ŞİFREMİ UNUTTUM
              </a>
            </div>
          </div>

          <!-- Login Button -->
          <div>
            <button
              type="submit"
              class="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors"
            >
              GİRİŞ YAP
            </button>
          </div>

          <!-- Phone Login Button -->
          <div>
            <button
              type="button"
              class="w-full flex justify-center py-3 px-4 border border-orange-600 rounded-lg text-sm font-medium text-orange-600 hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors"
            >
              TELEFON NUMARASI İLE GİRİŞ
            </button>
          </div>
        </form>
      </div>

      <!-- Register Form -->
      <div v-if="activeTab === 'register'" class="mt-8 space-y-6">
        <form @submit.prevent="handleRegister" class="space-y-6">
          <!-- Name Fields -->
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label for="first-name" class="block text-sm font-medium text-gray-700 mb-2">
                ADINIZ *
              </label>
              <input
                id="first-name"
                v-model="registerForm.firstName"
                type="text"
                required
                class="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Adınız"
              />
            </div>
            <div>
              <label for="last-name" class="block text-sm font-medium text-gray-700 mb-2">
                SOYADINIZ *
              </label>
              <input
                id="last-name"
                v-model="registerForm.lastName"
                type="text"
                required
                class="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Soyadınız"
              />
            </div>
          </div>

          <!-- Email Field -->
          <div>
            <label for="register-email" class="block text-sm font-medium text-gray-700 mb-2">
              E-POSTA ADRESİNİZ *
            </label>
            <input
              id="register-email"
              v-model="registerForm.email"
              type="email"
              required
              class="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="E-posta adresinizi girin"
            />
          </div>

          <!-- Password Field -->
          <div>
            <label for="register-password" class="block text-sm font-medium text-gray-700 mb-2">
              ŞİFRENİZ *
            </label>
            <div class="relative">
              <input
                id="register-password"
                v-model="registerForm.password"
                :type="showRegisterPassword ? 'text' : 'password'"
                required
                class="w-full px-3 py-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Şifrenizi girin"
              />
              <button
                type="button"
                @click="showRegisterPassword = !showRegisterPassword"
                class="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path v-if="showRegisterPassword" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"></path>
                  <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </button>
            </div>
          </div>

          <!-- Phone Field -->
          <div>
            <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">
              CEP TELEFONUNUZ *
            </label>
            <input
              id="phone"
              v-model="registerForm.phone"
              type="tel"
              required
              class="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="0(5"
            />
          </div>

          <!-- Birth Date Field -->
          <div>
            <label for="birth-date" class="block text-sm font-medium text-gray-700 mb-2">
              DOĞUM TARİHİNİZ
            </label>
            <div class="relative">
              <input
                id="birth-date"
                v-model="registerForm.birthDate"
                type="text"
                class="w-full px-3 py-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="gg.aa.yyyy"
              />
              <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </div>
            </div>
          </div>

          <!-- Gender Field -->
          <div>
            <label for="gender" class="block text-sm font-medium text-gray-700 mb-2">
              CİNSİYET
            </label>
            <div class="relative">
              <select
                id="gender"
                v-model="registerForm.gender"
                class="w-full px-3 py-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
              >
                <option value="">Cinsiyet seçin</option>
                <option value="male">Erkek</option>
                <option value="female">Kadın</option>
                <option value="other">Diğer</option>
              </select>
              <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
          </div>

          <!-- Checkboxes -->
          <div class="space-y-4">
            <div class="flex items-start">
              <input
                id="newsletter"
                v-model="registerForm.newsletter"
                type="checkbox"
                class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
              />
              <label for="newsletter" class="ml-2 block text-sm text-gray-700">
                YENİLİKLERDEN HABERDAR OLMAK İSTİYORUM
              </label>
            </div>
            <div class="flex items-start">
              <input
                id="agreement"
                v-model="registerForm.agreement"
                type="checkbox"
                required
                class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
              />
              <label for="agreement" class="ml-2 block text-sm text-gray-700">
                MESAFELİ SATIŞ SÖZLEŞMESİ'Nİ OKUDUM, ONAYLIYORUM.
              </label>
            </div>
          </div>

          <!-- Register Button -->
          <div>
            <button
              type="submit"
              class="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors"
            >
              ÜYE OL
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { ref } from 'vue'

// Tab management
const activeTab = ref('login')

// Password visibility
const showLoginPassword = ref(false)
const showRegisterPassword = ref(false)

// Login form
const loginForm = ref({
  email: '',
  password: '',
  rememberMe: false
})

// Register form
const registerForm = ref({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  phone: '',
  birthDate: '',
  gender: '',
  newsletter: false,
  agreement: false
})

// Form handlers
const handleLogin = () => {
  console.log('Login form submitted:', loginForm.value)
  // Add login logic here
}

const handleRegister = () => {
  console.log('Register form submitted:', registerForm.value)
  // Add registration logic here
}
</script>
