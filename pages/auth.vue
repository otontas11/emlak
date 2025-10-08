<template>
  <NuxtLayout name="default">
    <div class="min-h-screen bg-gradient-to-br from-gray-50 to-corporate-gray-light flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-xl w-full">
      <!-- Logo & Header -->
      <div class="text-center mb-8">
        <div class="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-corporate-navy to-corporate-blue shadow-corporate-xl mb-4">
          <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
          </svg>
        </div>
        <h1 class="text-3xl font-heading font-bold text-corporate-navy mb-2">Estate90</h1>
        <p class="text-sm text-gray-600">Profesyonel Emlak Platformu</p>
      </div>

      <!-- Tab Navigation -->
      <div class="flex border-b border-gray-200 bg-white rounded-t-lg overflow-hidden shadow-corporate">
        <button
          @click="activeTab = 'login'"
          :class="[
            'flex-1 py-4 px-1 text-center text-sm font-semibold border-b-2 transition-all duration-300',
            activeTab === 'login'
              ? 'border-corporate-blue text-corporate-navy bg-corporate-blue/5'
              : 'border-transparent text-gray-500 hover:text-corporate-blue hover:bg-gray-50'
          ]"
        >
          GİRİŞ YAP
        </button>
        <button
          @click="activeTab = 'register'"
          :class="[
            'flex-1 py-4 px-1 text-center text-sm font-semibold border-b-2 transition-all duration-300',
            activeTab === 'register'
              ? 'border-corporate-blue text-corporate-navy bg-corporate-blue/5'
              : 'border-transparent text-gray-500 hover:text-corporate-blue hover:bg-gray-50'
          ]"
        >
          ÜYE OL
        </button>
      </div>

      <!-- Login Form -->
      <div v-if="activeTab === 'login'" class="bg-white rounded-b-lg shadow-corporate-lg p-8 space-y-6">
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
              class="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent transition-all"
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
                class="w-full px-3 py-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent transition-all"
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
                class="h-4 w-4 text-corporate-blue focus:ring-corporate-blue border-gray-300 rounded"
              />
              <label for="remember-me" class="ml-2 block text-sm text-gray-700">
                BENİ HATIRLA
              </label>
            </div>
            <div class="text-sm">
              <a href="#" class="font-medium text-corporate-blue hover:text-corporate-navy flex items-center transition-colors">
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
              class="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-corporate-lg text-sm font-medium text-white bg-gradient-to-r from-corporate-navy to-corporate-blue hover:from-corporate-blue hover:to-corporate-light-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-corporate-blue transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
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

          <!-- Consultant Login Button -->
          <div>
            <button
              type="button"
              @click="loginAsConsultant"
              :disabled="isLoggingIn"
              class="w-full flex justify-center items-center py-3 px-4 border-2 border-corporate-blue rounded-lg text-sm font-medium text-corporate-blue hover:bg-gradient-to-r hover:from-corporate-navy hover:to-corporate-blue hover:text-white hover:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-corporate-blue transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-corporate"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              EMLAKÇI OLARAK GİRİŞ YAP
            </button>
          </div>


        </form>
      </div>

      <!-- Register Form -->
      <div v-if="activeTab === 'register'" class="bg-white rounded-b-lg shadow-corporate-lg p-8 space-y-6">
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
                class="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent transition-all"
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
                class="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent transition-all"
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
              class="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent transition-all"
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
                class="w-full px-3 py-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent transition-all"
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
              class="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent transition-all"
              placeholder="0(5XX) XXX XX XX"
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
                class="w-full px-3 py-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent transition-all"
                placeholder="gg.aa.yyyy"
              />
              <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </div>
            </div>
          </div>

          <!-- Consultant Option -->
          <div class="relative overflow-hidden bg-gradient-to-br from-corporate-navy to-corporate-blue rounded-xl p-6 shadow-corporate-lg">
            <!-- Decorative background -->
            <div class="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
            <div class="absolute bottom-0 left-0 -mb-4 -ml-4 w-32 h-32 bg-corporate-light-blue/20 rounded-full blur-2xl"></div>
            
            <div class="relative flex items-start space-x-4">
              <input
                id="isConsultant"
                v-model="registerForm.isConsultant"
                type="checkbox"
                class="h-6 w-6 text-corporate-light-blue focus:ring-white focus:ring-offset-2 focus:ring-offset-corporate-navy border-white/30 rounded mt-1 cursor-pointer transition-all"
              />
              <label for="isConsultant" class="block cursor-pointer flex-1">
                <div class="flex items-center gap-2 mb-2">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <span class="text-xl font-bold text-white font-heading">EMLAKÇI OLARAK KAYIT OL</span>
                </div>
                <p class="text-sm text-white/90 leading-relaxed mb-3">
                  Profesyonel emlak danışmanı olarak platforma katılın ve yeni imkanların kapısını aralayın.
                </p>
                <div class="space-y-2">
                  <div class="flex items-start gap-2">
                    <svg class="w-5 h-5 text-corporate-light-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <span class="text-sm text-white/90">Kendi portföyünüzü paylaşın ve müşteri bulun</span>
                  </div>
                  <div class="flex items-start gap-2">
                    <svg class="w-5 h-5 text-corporate-light-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <span class="text-sm text-white/90">Diğer emlakçıların portföylerine talip olun</span>
                  </div>
                  <div class="flex items-start gap-2">
                    <svg class="w-5 h-5 text-corporate-light-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <span class="text-sm text-white/90">Müşteri ilanlarını yönetin ve komisyon kazanın</span>
                  </div>
                  <div class="flex items-start gap-2">
                    <svg class="w-5 h-5 text-corporate-light-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <span class="text-sm text-white/90">Ajanda sistemi ile randevularınızı organize edin</span>
                  </div>
                </div>
              </label>
            </div>
          </div>

          <!-- Checkboxes -->
          <div class="space-y-4">
            <div class="flex items-start">
              <input
                id="newsletter"
                v-model="registerForm.newsletter"
                type="checkbox"
                class="h-4 w-4 text-corporate-blue focus:ring-corporate-blue border-gray-300 rounded mt-1"
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
                class="h-4 w-4 text-corporate-blue focus:ring-corporate-blue border-gray-300 rounded mt-1"
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
              class="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-corporate-lg text-sm font-medium text-white bg-gradient-to-r from-corporate-navy to-corporate-blue hover:from-corporate-blue hover:to-corporate-light-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-corporate-blue transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
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
  email: 'turkcodestek@gmail.com',
  password: '1234567',
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
  agreement: false,
  isConsultant: false
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

const loginAsConsultant = async () => {
  if (!loginForm.value.email || !loginForm.value.password) {
    loginError.value = 'E-posta ve şifre gereklidir'
    return
  }

  isLoggingIn.value = true
  loginError.value = ''

  try {
    await authStore.login(loginForm.value.email, loginForm.value.password, true) // true = login as consultant
    router.push('/consultant-profile')
  } catch (error) {
    loginError.value = error.message || 'Danışman girişi yapılırken bir hata oluştu'
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
