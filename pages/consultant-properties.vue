<template>
  <NuxtLayout name="default">
    <div class="min-h-screen bg-gray-50 py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Page Header -->
        <div class="mb-8">
          <h1 class="text-3xl font-bold text-gray-900">Atanan İlanlarım</h1>
          <p class="text-gray-600 mt-2">Size atanan gayrimenkulleri yönetin ve müşterilerinizle iletişim kurun</p>
        </div>

        <!-- Stats Cards -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div class="bg-white rounded-xl shadow-lg p-6">
            <div class="flex items-center">
              <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
              </div>
              <div class="ml-4">
                <p class="text-sm font-medium text-gray-600">Toplam İlan</p>
                <p class="text-2xl font-bold text-gray-900">12</p>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-xl shadow-lg p-6">
            <div class="flex items-center">
              <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div class="ml-4">
                <p class="text-sm font-medium text-gray-600">Aktif</p>
                <p class="text-2xl font-bold text-gray-900">8</p>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-xl shadow-lg p-6">
            <div class="flex items-center">
              <div class="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div class="ml-4">
                <p class="text-sm font-medium text-gray-600">Görüşme Aşamasında</p>
                <p class="text-2xl font-bold text-gray-900">3</p>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-xl shadow-lg p-6">
            <div class="flex items-center">
              <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                </svg>
              </div>
              <div class="ml-4">
                <p class="text-sm font-medium text-gray-600">Bu Ay Satılan</p>
                <p class="text-2xl font-bold text-gray-900">1</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Properties List -->
        <div class="bg-white rounded-xl shadow-lg">
          <div class="p-6 border-b border-gray-200">
            <h2 class="text-xl font-bold text-gray-900">Atanan Gayrimenkuller</h2>
          </div>

          <div class="divide-y divide-gray-200">
            <!-- Property 1 -->
            <div class="p-6 hover:bg-gray-50 transition-colors">
              <div class="flex items-start space-x-4">
                <div class="w-32 h-32 bg-gradient-to-br from-blue-200 to-blue-300 rounded-lg flex items-center justify-center flex-shrink-0">
                  <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop" alt="Property" class="w-full h-full object-cover rounded-lg">
                </div>
                <div class="flex-1 min-w-0">
                  <div class="flex items-center justify-between">
                    <h3 class="text-lg font-semibold text-gray-900">3+1 Daire, Kadıköy</h3>
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Aktif
                    </span>
                  </div>
                  <p class="text-2xl font-bold text-blue-600 mt-1">₺2,450,000</p>
                  <div class="flex items-center text-gray-600 text-sm mt-2">
                    <span class="mr-4">3 Yatak</span>
                    <span class="mr-4">1 Banyo</span>
                    <span class="mr-4">120 m²</span>
                  </div>
                  
                  <!-- Client Info -->
                  <div class="mt-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <div class="flex items-center justify-between">
                      <div>
                        <p class="text-sm font-medium text-gray-900">Müşteri: Ayşe Yılmaz</p>
                        <p class="text-sm text-gray-600">+90 532 123 45 67</p>
                      </div>
                      <div class="flex space-x-2">
                        <button class="bg-blue-600 text-white px-3 py-1.5 rounded-lg hover:bg-blue-700 text-xs font-medium">
                          Ara
                        </button>
                        <button class="bg-green-600 text-white px-3 py-1.5 rounded-lg hover:bg-green-700 text-xs font-medium">
                          Mesaj
                        </button>
                      </div>
                    </div>
                  </div>

                  <!-- Actions -->
                  <div class="flex items-center justify-between mt-3">
                    <div class="flex items-center text-sm text-gray-500">
                      <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      2 gün önce atandı
                    </div>
                    <div class="flex space-x-2">
                      <button class="text-green-600 hover:text-green-700 text-sm font-medium">Detaylar</button>
                      <button class="text-blue-600 hover:text-blue-700 text-sm font-medium">Randevu</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Property 2 -->
            <div class="p-6 hover:bg-gray-50 transition-colors">
              <div class="flex items-start space-x-4">
                <div class="w-32 h-32 bg-gradient-to-br from-green-200 to-green-300 rounded-lg flex items-center justify-center flex-shrink-0">
                  <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop" alt="Property" class="w-full h-full object-cover rounded-lg">
                </div>
                <div class="flex-1 min-w-0">
                  <div class="flex items-center justify-between">
                    <h3 class="text-lg font-semibold text-gray-900">2+1 Daire, Fenerbahçe</h3>
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      Görüşme Aşamasında
                    </span>
                  </div>
                  <p class="text-2xl font-bold text-green-600 mt-1">₺1,850,000</p>
                  <div class="flex items-center text-gray-600 text-sm mt-2">
                    <span class="mr-4">2 Yatak</span>
                    <span class="mr-4">1 Banyo</span>
                    <span class="mr-4">95 m²</span>
                  </div>
                  
                  <!-- Client Info -->
                  <div class="mt-3 p-3 bg-green-50 rounded-lg border border-green-200">
                    <div class="flex items-center justify-between">
                      <div>
                        <p class="text-sm font-medium text-gray-900">Müşteri: Mehmet Kaya</p>
                        <p class="text-sm text-gray-600">+90 533 987 65 43</p>
                      </div>
                      <div class="flex space-x-2">
                        <button class="bg-blue-600 text-white px-3 py-1.5 rounded-lg hover:bg-blue-700 text-xs font-medium">
                          Ara
                        </button>
                        <button class="bg-green-600 text-white px-3 py-1.5 rounded-lg hover:bg-green-700 text-xs font-medium">
                          Mesaj
                        </button>
                      </div>
                    </div>
                  </div>

                  <!-- Actions -->
                  <div class="flex items-center justify-between mt-3">
                    <div class="flex items-center text-sm text-gray-500">
                      <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      5 gün önce atandı
                    </div>
                    <div class="flex space-x-2">
                      <button class="text-green-600 hover:text-green-700 text-sm font-medium">Detaylar</button>
                      <button class="text-blue-600 hover:text-blue-700 text-sm font-medium">Randevu</button>
                    </div>
                  </div>
                </div>
              </div>
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

// Redirect if not a consultant
onMounted(() => {
  if (!authStore.user?.isConsultant) {
    navigateTo('/my-listings')
  }
})
</script>
