<template>
  <NuxtLayout name="default">
    <div class="min-h-screen bg-corporate-gray-light py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Page Header -->
        <div class="mb-8">
          <h1 class="text-4xl font-bold text-corporate-navy font-heading">İlanlarım</h1>
          <p class="text-gray-600 mt-2 text-lg font-body">Gayrimenkul ilanlarınızı yönetin ve hareketleri takip edin</p>
        </div>

        <!-- Stats Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div class="bg-white rounded-xl shadow-corporate p-6 border border-corporate-gray">
            <div class="flex items-center">
              <div class="w-12 h-12 bg-corporate-blue/10 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-corporate-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
              </div>
              <div class="ml-4">
                <p class="text-sm font-medium text-gray-600 font-body">Toplam İlan</p>
                <p class="text-2xl font-bold text-corporate-navy">3</p>
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
                <p class="text-sm font-medium text-gray-600 font-body">Aktif İlan</p>
                <p class="text-2xl font-bold text-corporate-navy">2</p>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-xl shadow-corporate p-6 border border-corporate-gray">
            <div class="flex items-center">
              <div class="w-12 h-12 bg-corporate-navy/10 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-corporate-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div class="ml-4">
                <p class="text-sm font-medium text-gray-600 font-body">Satılan İlan</p>
                <p class="text-2xl font-bold text-corporate-navy">1</p>
              </div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Left Column - Property Listings -->
          <div class="lg:col-span-2">
            <div class="bg-white rounded-xl shadow-corporate-lg border border-corporate-gray">
              <div class="p-6 border-b border-gray-200">
                <div class="flex justify-between items-center">
                  <h2 class="text-2xl font-bold text-corporate-navy font-heading">İşlemdeki Gayrimenkuller</h2>
                  <button @click="addNewProperty" class="bg-gradient-to-r from-corporate-navy to-corporate-blue text-white px-6 py-3 rounded-lg hover:from-corporate-blue hover:to-corporate-light-blue transition-all font-bold shadow-corporate">
                    + Yeni İlan Ekle
                  </button>
                </div>
              </div>

              <div class="divide-y divide-gray-200">
                <!-- Property 1 - Active -->
                <div class="p-6 hover:bg-gray-50 transition-colors">
                  <div class="flex items-start space-x-4">
                    <div class="w-24 h-24 bg-gradient-to-br from-corporate-blue/20 to-corporate-blue/30 rounded-lg flex items-center justify-center flex-shrink-0 cursor-pointer" @click="viewProperty('1')">
                      <svg class="w-8 h-8 text-corporate-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                      </svg>
                    </div>
                    <div class="flex-1 min-w-0">
                      <div class="flex items-center justify-between cursor-pointer" @click="viewProperty('1')">
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
                        <span>Kadıköy, İstanbul</span>
                      </div>
                      
                      <!-- Consultant Assignment -->
                      <div class="mt-4 p-4 bg-corporate-blue/5 rounded-xl border-2 border-corporate-blue/20">
                        <div class="flex items-center justify-between mb-3">
                          <div class="flex items-center">
                            <div class="w-10 h-10 bg-gradient-to-br from-corporate-navy to-corporate-blue rounded-full flex items-center justify-center mr-3 shadow-corporate">
                              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                              </svg>
                            </div>
                            <div>
                              <p class="text-xs font-medium text-gray-600 font-body">Atanan Danışman</p>
                              <p class="text-sm font-bold text-corporate-navy">Ahmet Yılmaz</p>
                            </div>
                          </div>
                          <div class="flex space-x-2">
                            <button @click.stop="viewConsultant('ahmet-yilmaz')" class="text-corporate-blue hover:text-corporate-navy text-sm font-semibold flex items-center">
                              <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                              </svg>
                              Görüntüle
                            </button>
                            <button @click.stop="requestConsultantChange('1', 'Ahmet Yılmaz')" class="text-orange-600 hover:text-orange-700 text-sm font-semibold flex items-center">
                              <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
                              </svg>
                              Değiştirme Talebi
                            </button>
                          </div>
                        </div>
                      </div>

                      <div class="flex items-center justify-between mt-4">
                        <div class="flex space-x-3">
                          <button class="text-corporate-blue hover:text-corporate-navy text-sm font-semibold">Düzenle</button>
                          <button class="text-red-600 hover:text-red-700 text-sm font-semibold">Sil</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Property 2 - Pending -->
                <div class="p-6 hover:bg-gray-50 transition-colors">
                  <div class="flex items-start space-x-4">
                    <div class="w-24 h-24 bg-gradient-to-br from-corporate-blue/20 to-corporate-blue/30 rounded-lg flex items-center justify-center flex-shrink-0 cursor-pointer" @click="viewProperty('2')">
                      <svg class="w-8 h-8 text-corporate-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                      </svg>
                    </div>
                    <div class="flex-1 min-w-0">
                      <div class="flex items-center justify-between cursor-pointer" @click="viewProperty('2')">
                        <h3 class="text-xl font-bold text-corporate-navy font-heading">2+1 Daire, Beşiktaş</h3>
                        <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-yellow-100 text-yellow-800">
                          Beklemede
                        </span>
                      </div>
                      <p class="text-2xl font-bold text-corporate-blue mt-1">₺1,850,000</p>
                      <div class="flex items-center text-gray-600 text-sm mt-2 font-body">
                        <span class="mr-4">2 Yatak</span>
                        <span class="mr-4">1 Banyo</span>
                        <span class="mr-4">95 m²</span>
                        <span>Beşiktaş, İstanbul</span>
                      </div>
                      
                      <!-- Consultant Assignment -->
                      <div class="mt-4 p-4 bg-corporate-blue/5 rounded-xl border-2 border-corporate-blue/20">
                        <div class="flex items-center justify-between mb-3">
                          <div class="flex items-center">
                            <div class="w-10 h-10 bg-gradient-to-br from-corporate-navy to-corporate-blue rounded-full flex items-center justify-center mr-3 shadow-corporate">
                              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                              </svg>
                            </div>
                            <div>
                              <p class="text-xs font-medium text-gray-600 font-body">Atanan Danışman</p>
                              <p class="text-sm font-bold text-corporate-navy">Ayşe Demir</p>
                            </div>
                          </div>
                          <div class="flex space-x-2">
                            <button @click.stop="viewConsultant('ayse-demir')" class="text-corporate-blue hover:text-corporate-navy text-sm font-semibold flex items-center">
                              <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                              </svg>
                              Görüntüle
                            </button>
                            <button @click.stop="requestConsultantChange('2', 'Ayşe Demir')" class="text-orange-600 hover:text-orange-700 text-sm font-semibold flex items-center">
                              <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
                              </svg>
                              Değiştir
                            </button>
                          </div>
                        </div>
                      </div>

                      <div class="flex items-center justify-between mt-4">
                        <div class="flex space-x-3">
                          <button class="text-corporate-blue hover:text-corporate-navy text-sm font-semibold">Düzenle</button>
                          <button class="text-red-600 hover:text-red-700 text-sm font-semibold">Sil</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Property 3 - Sold -->
                <div class="p-6 bg-green-50/50 transition-colors">
                  <div class="flex items-start space-x-4">
                    <div class="w-24 h-24 bg-gradient-to-br from-green-200 to-green-300 rounded-lg flex items-center justify-center flex-shrink-0 cursor-pointer" @click="viewProperty('3')">
                      <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div class="flex-1 min-w-0">
                      <div class="flex items-center justify-between cursor-pointer" @click="viewProperty('3')">
                        <h3 class="text-xl font-bold text-corporate-navy font-heading">Villa, Şişli</h3>
                        <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-800 border-2 border-green-300">
                          ✓ Satıldı
                        </span>
                      </div>
                      <p class="text-2xl font-bold text-green-600 mt-1">₺4,200,000</p>
                      <div class="flex items-center text-gray-600 text-sm mt-2 font-body">
                        <span class="mr-4">4 Yatak</span>
                        <span class="mr-4">3 Banyo</span>
                        <span class="mr-4">280 m²</span>
                        <span>Şişli, İstanbul</span>
                      </div>
                      
                      <!-- Consultant Info - Sold -->
                      <div class="mt-4 p-4 bg-green-100 rounded-xl border-2 border-green-300">
                        <div class="flex items-center justify-between">
                          <div class="flex items-center">
                            <div class="w-10 h-10 bg-gradient-to-br from-green-600 to-green-500 rounded-full flex items-center justify-center mr-3 shadow-corporate">
                              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                              </svg>
                            </div>
                            <div>
                              <p class="text-xs font-medium text-green-800 font-body">Satışı Gerçekleştiren</p>
                              <p class="text-sm font-bold text-green-900">Mehmet Kaya</p>
                            </div>
                          </div>
                          <button @click.stop="viewConsultant('mehmet-kaya')" class="text-green-700 hover:text-green-800 text-sm font-semibold flex items-center">
                            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                            </svg>
                            Profil
                          </button>
                        </div>
                      </div>

                      <!-- Rating Section for Sold Property -->
                      <div class="mt-4 p-4 bg-white rounded-xl border-2 border-green-200">
                        <div class="flex items-center justify-between">
                          <div>
                            <p class="text-sm font-bold text-corporate-navy mb-1">Danışmanı Değerlendirin</p>
                            <p class="text-xs text-gray-600">Deneyiminizi paylaşın</p>
                          </div>
                          <button @click.stop="rateConsultant('3', 'Mehmet Kaya')" class="bg-gradient-to-r from-corporate-navy to-corporate-blue text-white px-4 py-2 rounded-lg hover:from-corporate-blue hover:to-corporate-light-blue transition-all font-bold text-sm shadow-corporate">
                            Değerlendir
                          </button>
                        </div>
                      </div>

                      <div class="flex items-center justify-between mt-4">
                        <div class="flex space-x-3">
                          <button class="text-gray-400 text-sm font-semibold cursor-not-allowed">Düzenle</button>
                          <button class="text-gray-400 text-sm font-semibold cursor-not-allowed">Sil</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column - Activity Feed -->
          <div class="lg:col-span-1">
            <div class="bg-white rounded-xl shadow-lg">
              <div class="p-6 border-b border-gray-200">
                <h2 class="text-xl font-bold text-gray-900">Gayrimenkul Hareketleri</h2>
                <p class="text-sm text-gray-600 mt-1">Son aktiviteler ve teklifler</p>
              </div>

              <div class="p-6">
                <div class="space-y-4">
                  <!-- Activity 1 -->
                  <div class="flex items-start space-x-3">
                    <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </div>
                    <div class="flex-1 min-w-0">
                      <p class="text-sm text-gray-900">
                        <span class="font-medium">Ahmet Yılmaz</span> 3+1 Daire, Kadıköy için atandı
                      </p>
                      <p class="text-xs text-gray-500 mt-1">2 saat önce</p>
                    </div>
                  </div>

                  <!-- Activity 2 -->

                  <!-- Activity 3 -->

                  <!-- Activity 4 -->

                  <!-- Activity 5 -->
                  <div class="flex items-start space-x-3">
                    <div class="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg class="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                      </svg>
                    </div>
                    <div class="flex-1 min-w-0">
                      <p class="text-sm text-gray-900">
                        <span class="font-medium">Sistem</span> Villa, Şişli başarıyla satıldı
                      </p>
                      <p class="text-xs text-gray-500 mt-1">3 gün önce</p>
                    </div>
                  </div>
                </div>

                <!-- Load More Button -->
                <div class="mt-6 text-center">
                  <button class="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    Daha Fazla Göster
                  </button>
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
// This page is for normal users to manage their property listings
// and view activity related to their properties

const viewConsultant = (consultantSlug) => {
  // Navigate to consultant profile page
  navigateTo(`/consultant/${consultantSlug}`)
}

const viewProperty = (propertyId) => {
  // Navigate to property detail page
  navigateTo(`/property/${propertyId}`)
}

const addNewProperty = () => {
  // Navigate to add property page
  navigateTo('/add-property')
}
</script>
