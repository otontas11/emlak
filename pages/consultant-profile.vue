<template>
  <NuxtLayout name="default">
    <div class="min-h-screen bg-gray-50 py-8">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Page Header -->
        <div class="mb-8">
          <h1 class="text-3xl font-bold text-gray-900">Danışman Profilim</h1>
          <p class="text-gray-600 mt-2">Danışman hesap bilgilerinizi yönetin</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Left Sidebar - Consultant Info -->
          <div class="lg:col-span-1">
            <div class="bg-white rounded-xl shadow-lg p-6">
              <!-- Profile Picture -->
              <div class="text-center mb-6">
                <div class="relative inline-block">
                  <div class="w-24 h-24 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold">
                    {{ authStore.userInitials }}
                  </div>
                  <!-- Consultant Badge -->
                  <div class="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center border-4 border-white">
                    <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                </div>
                <h2 class="text-xl font-bold text-gray-900 mt-4">{{ authStore.fullName }}</h2>
                <p class="text-green-600 text-sm font-semibold">Emlak Danışmanı</p>
                <p class="text-gray-600 text-sm mt-1">{{ authStore.user?.email }}</p>
              </div>

              <!-- Stats -->
              <div class="grid grid-cols-2 gap-4 mb-6">
                <div class="bg-blue-50 rounded-lg p-4 text-center">
                  <div class="text-2xl font-bold text-blue-600">12</div>
                  <div class="text-sm text-gray-600">Aktif İlan</div>
                </div>
                <div class="bg-green-50 rounded-lg p-4 text-center">
                  <div class="text-2xl font-bold text-green-600">24</div>
                  <div class="text-sm text-gray-600">Başarılı Satış</div>
                </div>
                <div class="bg-yellow-50 rounded-lg p-4 text-center">
                  <div class="text-2xl font-bold text-yellow-600">8</div>
                  <div class="text-sm text-gray-600">Bekleyen</div>
                </div>
                <div class="bg-purple-50 rounded-lg p-4 text-center">
                  <div class="text-2xl font-bold text-purple-600">4.9</div>
                  <div class="text-sm text-gray-600">Puan</div>
                </div>
              </div>

              <!-- Action Buttons -->
              <div class="space-y-3">
                <NuxtLink to="/consultant-properties" class="w-full flex items-center space-x-3 text-gray-700 hover:text-green-600 hover:bg-green-50 p-3 rounded-lg transition-colors">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                  </svg>
                  <span>Atanan İlanlarım</span>
                </NuxtLink>

                <button class="w-full flex items-center space-x-3 text-gray-700 hover:text-green-600 hover:bg-green-50 p-3 rounded-lg transition-colors">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  <span>Randevularım</span>
                </button>

                <button class="w-full flex items-center space-x-3 text-gray-700 hover:text-green-600 hover:bg-green-50 p-3 rounded-lg transition-colors">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                  <span>Müşterilerim</span>
                </button>
              </div>
            </div>
          </div>

          <!-- Right Content - Profile Form -->
          <div class="lg:col-span-2">
            <div class="bg-white rounded-xl shadow-lg p-8">
              <h3 class="text-2xl font-bold text-gray-900 mb-6">Danışman Bilgileri</h3>
              
              <form @submit.prevent="updateProfile" class="space-y-6">
                <!-- Name Fields -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label for="firstName" class="block text-sm font-medium text-gray-700 mb-2">Ad *</label>
                    <input type="text" id="firstName" v-model="profileForm.firstName" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
                  </div>
                  <div>
                    <label for="lastName" class="block text-sm font-medium text-gray-700 mb-2">Soyad *</label>
                    <input type="text" id="lastName" v-model="profileForm.lastName" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
                  </div>
                </div>

                <!-- Email -->
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-2">E-posta</label>
                  <input type="email" id="email" v-model="profileForm.email" disabled class="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-500 cursor-not-allowed">
                </div>

                <!-- Phone -->
                <div>
                  <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">Telefon</label>
                  <input type="tel" id="phone" v-model="profileForm.phone" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="+90 532 123 45 67">
                </div>

                <!-- Specialty Area -->
                <div>
                  <label for="specialty" class="block text-sm font-medium text-gray-700 mb-2">Uzmanlık Alanı</label>
                  <input type="text" id="specialty" v-model="profileForm.specialty" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="Kadıköy Uzmanı">
                </div>

                <!-- About -->
                <div>
                  <label for="about" class="block text-sm font-medium text-gray-700 mb-2">Hakkımda</label>
                  <textarea id="about" v-model="profileForm.about" rows="4" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="Kendiniz hakkında kısa bir açıklama..."></textarea>
                </div>

                <!-- Save Button -->
                <div class="flex justify-end space-x-4 pt-6">
                  <button type="button" class="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">İptal</button>
                  <button type="submit" :disabled="isUpdating" class="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                    <span v-if="isUpdating">Güncelleniyor...</span>
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

const profileForm = ref({
  firstName: authStore.user?.firstName || '',
  lastName: authStore.user?.lastName || '',
  email: authStore.user?.email || '',
  phone: '+90 532 123 45 67',
  specialty: 'Kadıköy Uzmanı',
  about: ''
})

const updateProfile = async () => {
  isUpdating.value = true
  try {
    await new Promise(resolve => setTimeout(resolve, 1000))
    if (authStore.user) {
      authStore.user.firstName = profileForm.value.firstName
      authStore.user.lastName = profileForm.value.lastName
    }
    alert('Profil başarıyla güncellendi!')
  } catch (error) {
    alert('Profil güncellenirken bir hata oluştu')
  } finally {
    isUpdating.value = false
  }
}
</script>
