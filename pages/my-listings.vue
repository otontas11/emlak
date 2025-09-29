<template>
  <NuxtLayout name="default">
    <div class="min-h-screen bg-gray-50 py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Page Header -->
        <div class="mb-8">
          <h1 class="text-3xl font-bold text-gray-900">İlanlarım</h1>
          <p class="text-gray-600 mt-2">Gayrimenkul ilanlarınızı yönetin ve hareketleri takip edin</p>
        </div>

        <!-- Stats Cards -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div class="bg-white rounded-xl shadow-lg p-6">
            <div class="flex items-center">
              <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
              </div>
              <div class="ml-4">
                <p class="text-sm font-medium text-gray-600">Toplam İlan</p>
                <p class="text-2xl font-bold text-gray-900">3</p>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-xl shadow-lg p-6">
            <div class="flex items-center">
              <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div class="ml-4">
                <p class="text-sm font-medium text-gray-600">Aktif İlan</p>
                <p class="text-2xl font-bold text-gray-900">2</p>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-xl shadow-lg p-6">
            <div class="flex items-center">
              <div class="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5 5-5-5h5v-5a7.5 7.5 0 00-15 0v5h5l-5 5-5-5h5v-5a7.5 7.5 0 0115 0v5z"></path>
                </svg>
              </div>
              <div class="ml-4">
                <p class="text-sm font-medium text-gray-600">Bekleyen Teklif</p>
                <p class="text-2xl font-bold text-gray-900">5</p>
              </div>
            </div>
          </div>


        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Left Column - Property Listings -->
          <div class="lg:col-span-2">
            <div class="bg-white rounded-xl shadow-lg">
              <div class="p-6 border-b border-gray-200">
                <div class="flex justify-between items-center">
                  <h2 class="text-xl font-bold text-gray-900">İşlemdeki Gayrimenkuller</h2>
                  <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    + Yeni İlan Ekle
                  </button>
                </div>
              </div>

              <div class="divide-y divide-gray-200">
                <!-- Property 1 -->
                <div class="p-6 hover:bg-gray-50 transition-colors">
                  <div class="flex items-start space-x-4">
                    <div class="w-24 h-24 bg-gradient-to-br from-blue-200 to-blue-300 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                      </svg>
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
                        <span>Kadıköy, İstanbul</span>
                      </div>
                      <!-- Consultant Assignment -->
                      <div class="mt-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                        <div class="flex items-center justify-between">
                          <div class="flex items-center">
                            <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                              <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                              </svg>
                            </div>
                            <div>
                              <p class="text-sm font-medium text-gray-900">Atanan Danışman</p>
                              <p class="text-sm text-blue-600">Ahmet Yılmaz</p>
                            </div>
                          </div>
                          <button @click="viewConsultant('ahmet-yilmaz')" class="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center">
                            Profili Görüntüle
                            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                            </svg>
                          </button>
                        </div>
                      </div>

                      <div class="flex items-center justify-between mt-3">

                        <div class="flex space-x-2">
                          <button class="text-blue-600 hover:text-blue-700 text-sm font-medium">Düzenle</button>
                          <button class="text-red-600 hover:text-red-700 text-sm font-medium">Sil</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Property 2 -->
                <div class="p-6 hover:bg-gray-50 transition-colors">
                  <div class="flex items-start space-x-4">
                    <div class="w-24 h-24 bg-gradient-to-br from-green-200 to-green-300 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                      </svg>
                    </div>
                    <div class="flex-1 min-w-0">
                      <div class="flex items-center justify-between">
                        <h3 class="text-lg font-semibold text-gray-900">2+1 Daire, Beşiktaş</h3>
                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                          Beklemede
                        </span>
                      </div>
                      <p class="text-2xl font-bold text-green-600 mt-1">₺1,850,000</p>
                      <div class="flex items-center text-gray-600 text-sm mt-2">
                        <span class="mr-4">2 Yatak</span>
                        <span class="mr-4">1 Banyo</span>
                        <span class="mr-4">95 m²</span>
                        <span>Beşiktaş, İstanbul</span>
                      </div>
                      <!-- Consultant Assignment -->
                      <div class="mt-3 p-3 bg-green-50 rounded-lg border border-green-200">
                        <div class="flex items-center justify-between">
                          <div class="flex items-center">
                            <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                              <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                              </svg>
                            </div>
                            <div>
                              <p class="text-sm font-medium text-gray-900">Atanan Danışman</p>
                              <p class="text-sm text-green-600">Fatma Demir</p>
                            </div>
                          </div>
                          <button @click="viewConsultant('fatma-demir')" class="text-green-600 hover:text-green-700 text-sm font-medium flex items-center">
                            Profili Görüntüle
                            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                            </svg>
                          </button>
                        </div>
                      </div>

                      <div class="flex items-center justify-between mt-3">

                        <div class="flex space-x-2">
                          <button class="text-blue-600 hover:text-blue-700 text-sm font-medium">Düzenle</button>
                          <button class="text-red-600 hover:text-red-700 text-sm font-medium">Sil</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Property 3 -->
                <div class="p-6 hover:bg-gray-50 transition-colors">
                  <div class="flex items-start space-x-4">
                    <div class="w-24 h-24 bg-gradient-to-br from-purple-200 to-purple-300 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                      </svg>
                    </div>
                    <div class="flex-1 min-w-0">
                      <div class="flex items-center justify-between">
                        <h3 class="text-lg font-semibold text-gray-900">Villa, Şişli</h3>
                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                          Satıldı
                        </span>
                      </div>
                      <p class="text-2xl font-bold text-purple-600 mt-1">₺4,200,000</p>
                      <div class="flex items-center text-gray-600 text-sm mt-2">
                        <span class="mr-4">4 Yatak</span>
                        <span class="mr-4">3 Banyo</span>
                        <span class="mr-4">280 m²</span>
                        <span>Şişli, İstanbul</span>
                      </div>
                      <!-- Consultant Assignment -->
                      <div class="mt-3 p-3 bg-purple-50 rounded-lg border border-purple-200">
                        <div class="flex items-center justify-between">
                          <div class="flex items-center">
                            <div class="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                              <svg class="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                              </svg>
                            </div>
                            <div>
                              <p class="text-sm font-medium text-gray-900">Satış Danışmanı</p>
                              <p class="text-sm text-purple-600">Mehmet Kaya</p>
                            </div>
                          </div>
                          <button @click="viewConsultant('mehmet-kaya')" class="text-purple-600 hover:text-purple-700 text-sm font-medium flex items-center">
                            Profili Görüntüle
                            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                            </svg>
                          </button>
                        </div>
                      </div>

                      <div class="flex items-center justify-between mt-3">

                        <div class="flex space-x-2">
                          <button class="text-gray-400 text-sm font-medium cursor-not-allowed">Düzenle</button>
                          <button class="text-gray-400 text-sm font-medium cursor-not-allowed">Sil</button>
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
</script>
