<template>
  <NuxtLayout name="default">
    <div class="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
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
        <!-- Error Message -->
        <div v-if="loginError" class="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
          {{ loginError }}
        </div>
        
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
              :disabled="isLoggingIn"
              class="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="isLoggingIn" class="flex items-center">
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Giriş yapılıyor...
              </span>
              <span v-else>GİRİŞ YAP</span>
            </button>
          </div>


        </form>
      </div>

      <!-- Register Form -->
      <div v-if="activeTab === 'register'" class="mt-8 space-y-6">
        <!-- Error Message -->
        <div v-if="registerError" class="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
          {{ registerError }}
        </div>
        
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
              :disabled="isRegistering"
              class="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="isRegistering" class="flex items-center">
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Kayıt olunuyor...
              </span>
              <span v-else>ÜYE OL</span>
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
import { useAuthStore } from '~/stores/auth'

const authStore = useAuthStore()
const router = useRouter()

// Tab management
const activeTab = ref('login')

// Password visibility
const showLoginPassword = ref(false)
const showRegisterPassword = ref(false)

// Loading states
const isLoggingIn = ref(false)
const isRegistering = ref(false)

// Error messages
const loginError = ref('')
const registerError = ref('')

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
  newsletter: false,
  agreement: false
})

// Form handlers
const handleLogin = async () => {
  if (!loginForm.value.email || !loginForm.value.password) {
    loginError.value = 'E-posta ve şifre gereklidir'
    return
  }

  isLoggingIn.value = true
  loginError.value = ''

  try {
    await authStore.login(loginForm.value.email, loginForm.value.password)
    router.push('/')
  } catch (error) {
    loginError.value = error.message || 'Giriş yapılırken bir hata oluştu'
  } finally {
    isLoggingIn.value = false
  }
}

const handleRegister = async () => {
  if (!registerForm.value.firstName || !registerForm.value.lastName || !registerForm.value.email || !registerForm.value.password) {
    registerError.value = 'Tüm zorunlu alanları doldurun'
    return
  }

  if (!registerForm.value.agreement) {
    registerError.value = 'Mesafeli satış sözleşmesini onaylamalısınız'
    return
  }

  isRegistering.value = true
  registerError.value = ''

  try {
    await authStore.register(registerForm.value)
    router.push('/')
  } catch (error) {
    registerError.value = error.message || 'Kayıt olurken bir hata oluştu'
  } finally {
    isRegistering.value = false
  }
}
</script>
