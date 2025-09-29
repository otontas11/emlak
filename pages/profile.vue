<template>
  <NuxtLayout name="default">
    <div class="min-h-screen bg-gray-50 py-8">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Page Header -->
        <div class="mb-8">
          <h1 class="text-3xl font-bold text-gray-900">Profilim</h1>
          <p class="text-gray-600 mt-2">Hesap bilgilerinizi yönetin ve güncelleyin</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Left Sidebar - User Info & Actions -->
          <div class="lg:col-span-1">
            <div class="bg-white rounded-xl shadow-lg p-6">
              <!-- Profile Picture -->
              <div class="text-center mb-6">
                <div class="relative inline-block">
                  <div class="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto border-4 border-red-500">
                    <svg class="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <button class="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </button>
                </div>
                <h2 class="text-xl font-bold text-gray-900 mt-4">{{ authStore.fullName }}</h2>
                <p class="text-red-600 text-sm">{{ authStore.user?.email }}</p>
              </div>

              <!-- User Stats -->
              <div class="space-y-4 mb-6">
                <div class="flex justify-between items-center py-2 border-b border-gray-200">
                  <span class="text-sm text-gray-600">KAYIT TARİHİ:</span>
                  <span class="text-sm font-medium text-gray-900">{{ formatDate(new Date()) }}</span>
                </div>
                <div class="flex justify-between items-center py-2 border-b border-gray-200">
                  <span class="text-sm text-gray-600">SON GİRİŞ TARİHİ:</span>
                  <span class="text-sm font-medium text-gray-900">{{ formatDate(new Date()) }}</span>
                </div>
                <div v-if="authStore.user?.isConsultant" class="flex justify-between items-center py-2 border-b border-gray-200">
                  <span class="text-sm text-gray-600">DANIŞMAN DURUMU:</span>
                  <span class="text-sm font-medium text-green-600">Aktif</span>
                </div>
              </div>

              <!-- Action Buttons -->
              <div class="space-y-3">
                <button @click="changeProfilePicture" class="w-full flex items-center space-x-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 p-3 rounded-lg transition-colors">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span>Profil Resmini Değiştir</span>
                </button>

                <button @click="changePassword" class="w-full flex items-center space-x-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 p-3 rounded-lg transition-colors">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                  <span>Parola Oluştur</span>
                </button>

                <button @click="deleteAccount" class="w-full flex items-center space-x-3 text-red-600 hover:text-red-700 hover:bg-red-50 p-3 rounded-lg transition-colors">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                  </svg>
                  <span>Hesabı Sil</span>
                </button>
              </div>
            </div>
          </div>

          <!-- Right Content - Edit Form -->
          <div class="lg:col-span-2">
            <div class="bg-white rounded-xl shadow-lg p-8">
              <h3 class="text-2xl font-bold text-gray-900 mb-6">Kullanıcı Bilgileri</h3>
              
              <form @submit.prevent="updateProfile" class="space-y-6">
                <!-- Name Fields -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label for="firstName" class="block text-sm font-medium text-gray-700 mb-2">
                      Ad *
                    </label>
                    <input
                      id="firstName"
                      v-model="profileForm.firstName"
                      type="text"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label for="lastName" class="block text-sm font-medium text-gray-700 mb-2">
                      Soyad *
                    </label>
                    <input
                      id="lastName"
                      v-model="profileForm.lastName"
                      type="text"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <!-- Phone Field -->
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Telefon
                  </label>
                  <div class="flex space-x-3">
                    <div class="flex items-center space-x-2 px-4 py-3 border border-gray-300 rounded-lg bg-gray-50">
                      <span class="text-2xl">🇹🇷</span>
                      <span class="text-sm font-medium text-gray-700">TR (+90)</span>
                    </div>
                    <input
                      v-model="profileForm.phone"
                      type="tel"
                      class="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+90 545 363 21 25"
                    />
                  </div>
                </div>

                <!-- Email Field -->
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                    E-posta
                  </label>
                  <input
                    id="email"
                    v-model="profileForm.email"
                    type="email"
                    disabled
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-500 cursor-not-allowed"
                  />
                  <p class="text-sm text-gray-500 mt-1">E-posta adresinizi değiştirmek için destek ekibiyle iletişime geçin</p>
                </div>

                <!-- Consultant Info (if applicable) -->
                <div v-if="authStore.user?.isConsultant" class="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div class="flex items-center space-x-2 mb-2">
                    <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span class="text-sm font-medium text-green-800">Danışman Hesabı</span>
                  </div>
                  <p class="text-sm text-green-700">Bu hesap danışman olarak kayıtlıdır. Danışman paneline erişim için ek özellikler mevcuttur.</p>
                </div>

                <!-- Save Button -->
                <div class="flex justify-end space-x-4 pt-6">
                  <button
                    type="button"
                    @click="resetForm"
                    class="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    İptal
                  </button>
                  <button
                    type="submit"
                    :disabled="isUpdating"
                    class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span v-if="isUpdating" class="flex items-center">
                      <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Güncelleniyor...
                    </span>
                    <span v-else>Kaydet</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { useAuthStore } from '~/stores/auth'

const authStore = useAuthStore()
const isUpdating = ref(false)

// Profile form
const profileForm = ref({
  firstName: authStore.user?.firstName || '',
  lastName: authStore.user?.lastName || '',
  email: authStore.user?.email || '',
  phone: '+90 545 363 21 25'
})

// Format date helper
const formatDate = (date) => {
  return new Intl.DateTimeFormat('tr-TR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date).toUpperCase()
}

// Form handlers
const updateProfile = async () => {
  isUpdating.value = true
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Update store
    if (authStore.user) {
      authStore.user.firstName = profileForm.value.firstName
      authStore.user.lastName = profileForm.value.lastName
    }
    
    // Show success message
    alert('Profil başarıyla güncellendi!')
  } catch (error) {
    alert('Profil güncellenirken bir hata oluştu')
  } finally {
    isUpdating.value = false
  }
}

const resetForm = () => {
  profileForm.value = {
    firstName: authStore.user?.firstName || '',
    lastName: authStore.user?.lastName || '',
    email: authStore.user?.email || '',
    phone: '+90 545 363 21 25'
  }
}

const changeProfilePicture = () => {
  alert('Profil resmi değiştirme özelliği yakında eklenecek!')
}

const changePassword = () => {
  alert('Parola değiştirme özelliği yakında eklenecek!')
}

const deleteAccount = () => {
  if (confirm('Hesabınızı silmek istediğinizden emin misiniz? Bu işlem geri alınamaz.')) {
    alert('Hesap silme özelliği yakında eklenecek!')
  }
}

// Initialize form with user data
onMounted(() => {
  if (authStore.user) {
    profileForm.value = {
      firstName: authStore.user.firstName,
      lastName: authStore.user.lastName,
      email: authStore.user.email,
      phone: '+90 545 363 21 25'
    }
  }
})
</script>
