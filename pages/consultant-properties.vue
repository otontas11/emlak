<template>
  <NuxtLayout name="default">
    <div class="min-h-screen bg-corporate-gray-light py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Page Header -->
        <div class="mb-8">
          <h1 class="text-4xl font-bold text-corporate-navy font-heading">Atanan İlanlarım</h1>
          <p class="text-gray-600 mt-2 text-lg font-body">Size atanan gayrimenkulleri yönetin ve işlemlerinizi takip edin</p>
        </div>

        <!-- Stats Cards -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div class="bg-white rounded-xl shadow-corporate p-6 border border-corporate-gray">
            <div class="flex items-center">
              <div class="w-12 h-12 bg-corporate-blue/10 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-corporate-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
              </div>
              <div class="ml-4">
                <p class="text-sm font-medium text-gray-600 font-body">Toplam İlan</p>
                <p class="text-2xl font-bold text-corporate-navy">12</p>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-xl shadow-corporate p-6 border border-corporate-gray">
            <div class="flex items-center">
              <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div class="ml-4">
                <p class="text-sm font-medium text-gray-600 font-body">Aktif</p>
                <p class="text-2xl font-bold text-corporate-navy">8</p>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-xl shadow-corporate p-6 border border-corporate-gray">
            <div class="flex items-center">
              <div class="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div class="ml-4">
                <p class="text-sm font-medium text-gray-600 font-body">Görüşmede</p>
                <p class="text-2xl font-bold text-corporate-navy">3</p>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-xl shadow-corporate p-6 border border-corporate-gray">
            <div class="flex items-center">
              <div class="w-12 h-12 bg-corporate-navy/10 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-corporate-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <div class="ml-4">
                <p class="text-sm font-medium text-gray-600 font-body">Bu Ay Satılan</p>
                <p class="text-2xl font-bold text-corporate-navy">1</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Properties List -->
        <div class="bg-white rounded-xl shadow-corporate-lg border border-corporate-gray">
          <div class="p-6 border-b border-gray-200">
            <h2 class="text-2xl font-bold text-corporate-navy font-heading">Atanan Gayrimenkuller</h2>
          </div>

          <div class="divide-y divide-gray-200">
            <!-- Property 1 -->
            <div class="p-6 hover:bg-gray-50 transition-colors">
              <div class="flex items-start space-x-4">
                <div class="w-32 h-32 bg-gradient-to-br from-corporate-blue/20 to-corporate-blue/30 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden border-2 border-corporate-gray">
                  <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop" alt="Property" class="w-full h-full object-cover">
                </div>
                <div class="flex-1 min-w-0">
                  <div class="flex items-center justify-between">
                    <h3 class="text-xl font-bold text-corporate-navy font-heading">3+1 Daire, Kadıköy</h3>
                    <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-800">
                      Aktif
                    </span>
                  </div>
                  <p class="text-2xl font-bold text-corporate-blue mt-1">₺2,450,000</p>
                  <div class="flex items-center text-gray-600 text-sm mt-2 font-body">
                    <span class="mr-4">3 Yatak</span>
                    <span class="mr-4">1 Banyo</span>
                    <span class="mr-4">120 m²</span>
                  </div>

                  <!-- Actions -->
                  <div class="flex items-center justify-between mt-4">
                    <div class="flex items-center text-sm text-gray-500 font-body">
                      <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      2 gün önce atandı
                    </div>
                    <div class="flex space-x-3">
                      <button class="bg-gradient-to-r from-corporate-navy to-corporate-blue text-white px-4 py-2 rounded-lg hover:from-corporate-blue hover:to-corporate-light-blue text-sm font-bold shadow-corporate">İlan Detayı</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Property 2 -->
            <div class="p-6 hover:bg-gray-50 transition-colors">
              <div class="flex items-start space-x-4">
                <div class="w-32 h-32 bg-gradient-to-br from-corporate-blue/20 to-corporate-blue/30 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden border-2 border-corporate-gray">
                  <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop" alt="Property" class="w-full h-full object-cover">
                </div>
                <div class="flex-1 min-w-0">
                  <div class="flex items-center justify-between">
                    <h3 class="text-xl font-bold text-corporate-navy font-heading">2+1 Daire, Fenerbahçe</h3>
                    <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-yellow-100 text-yellow-800">
                      Görüşme Aşamasında
                    </span>
                  </div>
                  <p class="text-2xl font-bold text-corporate-blue mt-1">₺1,850,000</p>
                  <div class="flex items-center text-gray-600 text-sm mt-2 font-body">
                    <span class="mr-4">2 Yatak</span>
                    <span class="mr-4">1 Banyo</span>
                    <span class="mr-4">95 m²</span>
                  </div>

                  <!-- Actions -->
                  <div class="flex items-center justify-between mt-4">
                    <div class="flex items-center text-sm text-gray-500 font-body">
                      <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      5 gün önce atandı
                    </div>
                    <div class="flex space-x-3">
                      <button class="bg-gradient-to-r from-corporate-navy to-corporate-blue text-white px-4 py-2 rounded-lg hover:from-corporate-blue hover:to-corporate-light-blue text-sm font-bold shadow-corporate">İlan Detayı</button>
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
