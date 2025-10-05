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
            <div class="bg-white rounded-xl shadow-corporate-lg border border-corporate-gray">
              <div class="p-6 border-b border-gray-200">
                <h2 class="text-2xl font-bold text-corporate-navy font-heading">Son Hareketler</h2>
                <p class="text-sm text-gray-600 mt-1 font-body">Aktiviteler ve bildirimler</p>
              </div>

              <div class="p-6">
                <div class="space-y-4">
                  <!-- Activity 1 -->
                  <div class="flex items-start space-x-3 p-3 bg-corporate-blue/5 rounded-lg">
                    <div class="w-8 h-8 bg-corporate-blue rounded-full flex items-center justify-center flex-shrink-0">
                      <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>
                    </div>
                    <div class="flex-1 min-w-0">
                      <p class="text-sm text-corporate-navy font-body">
                        <span class="font-bold">Ahmet Yılmaz</span> 3+1 Daire için atandı
                      </p>
                      <p class="text-xs text-gray-500 mt-1">2 saat önce</p>
                    </div>
                  </div>

                  <!-- Activity 2 -->
                  <div class="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                    <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div class="flex-1 min-w-0">
                      <p class="text-sm text-corporate-navy font-body">
                        <span class="font-bold">Villa, Şişli</span> başarıyla satıldı
                      </p>
                      <p class="text-xs text-gray-500 mt-1">3 gün önce</p>
                    </div>
                  </div>
                </div>

                <!-- Load More Button -->
                <div class="mt-6 text-center">
                  <button class="text-corporate-blue hover:text-corporate-navy text-sm font-semibold">
                    Daha Fazla Göster
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Consultant Change Request Modal -->
    <div v-if="showChangeModal" class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-2xl shadow-corporate-xl max-w-md w-full p-6">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-2xl font-bold text-corporate-navy font-heading">Danışman Değiştirme Talebi</h3>
          <button @click="closeChangeModal" class="text-gray-400 hover:text-gray-600">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        
        <div class="mb-4 p-4 bg-orange-50 rounded-lg border border-orange-200">
          <p class="text-sm text-orange-800 font-body">
            <span class="font-bold">{{ selectedConsultantName }}</span> danışmanınızı değiştirmek istiyorsunuz.
          </p>
        </div>

        <div class="mb-6">
          <label class="block text-sm font-bold text-corporate-navy mb-2">Değiştirme Sebebiniz</label>
          <textarea 
            v-model="changeReason" 
            rows="4" 
            class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-corporate-blue focus:outline-none font-body"
            placeholder="Lütfen danışman değiştirmek isteme sebebinizi açıklayın..."
          ></textarea>
        </div>

        <div class="flex space-x-3">
          <button @click="closeChangeModal" class="flex-1 px-4 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-semibold transition-all">
            İptal
          </button>
          <button @click="submitChangeRequest" class="flex-1 px-4 py-3 bg-gradient-to-r from-corporate-navy to-corporate-blue text-white rounded-lg hover:from-corporate-blue hover:to-corporate-light-blue font-bold transition-all shadow-corporate">
            Talep Gönder
          </button>
        </div>
      </div>
    </div>

    <!-- Consultant Rating Modal -->
    <div v-if="showRatingModal" class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-2xl shadow-corporate-xl max-w-md w-full p-6">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-2xl font-bold text-corporate-navy font-heading">Danışman Değerlendirme</h3>
          <button @click="closeRatingModal" class="text-gray-400 hover:text-gray-600">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        
        <div class="mb-6 text-center">
          <div class="w-20 h-20 bg-gradient-to-br from-corporate-navy to-corporate-blue rounded-full flex items-center justify-center mx-auto mb-3 shadow-corporate">
            <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
          </div>
          <p class="text-lg font-bold text-corporate-navy">{{ selectedConsultantName }}</p>
          <p class="text-sm text-gray-600">Danışmanınızı değerlendirin</p>
        </div>

        <div class="mb-4">
          <label class="block text-sm font-bold text-corporate-navy mb-3 text-center">Puan Verin</label>
          <div class="flex justify-center space-x-2">
            <button 
              v-for="star in 5" 
              :key="star"
              @click="rating = star"
              class="text-4xl transition-all hover:scale-110"
              :class="star <= rating ? 'text-corporate-blue' : 'text-gray-300'"
            >
              ★
            </button>
          </div>
        </div>

        <div class="mb-6">
          <label class="block text-sm font-bold text-corporate-navy mb-2">Yorumunuz</label>
          <textarea 
            v-model="ratingComment" 
            rows="4" 
            class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-corporate-blue focus:outline-none font-body"
            placeholder="Danışmanınız hakkındaki görüşlerinizi paylaşın..."
          ></textarea>
        </div>

        <div class="flex space-x-3">
          <button @click="closeRatingModal" class="flex-1 px-4 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-semibold transition-all">
            İptal
          </button>
          <button @click="submitRating" class="flex-1 px-4 py-3 bg-gradient-to-r from-corporate-navy to-corporate-blue text-white rounded-lg hover:from-corporate-blue hover:to-corporate-light-blue font-bold transition-all shadow-corporate">
            Gönder
          </button>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
// This page is for normal users to manage their property listings
// and view activity related to their properties

// Modal states
const showChangeModal = ref(false)
const showRatingModal = ref(false)
const selectedPropertyId = ref(null)
const selectedConsultantName = ref('')
const changeReason = ref('')
const rating = ref(0)
const ratingComment = ref('')

const viewConsultant = (consultantSlug) => {
  navigateTo(`/consultant/${consultantSlug}`)
}

const viewProperty = (propertyId) => {
  navigateTo(`/property/${propertyId}`)
}

const addNewProperty = () => {
  navigateTo('/add-property')
}

// Request consultant change
const requestConsultantChange = (propertyId, consultantName) => {
  selectedPropertyId.value = propertyId
  selectedConsultantName.value = consultantName
  showChangeModal.value = true
}

const closeChangeModal = () => {
  showChangeModal.value = false
  changeReason.value = ''
  selectedPropertyId.value = null
  selectedConsultantName.value = ''
}

const submitChangeRequest = () => {
  if (!changeReason.value.trim()) {
    alert('Lütfen değiştirme sebebinizi belirtin.')
    return
  }
  
  // Here you would send the request to the server
  console.log('Danışman değiştirme talebi:', {
    propertyId: selectedPropertyId.value,
    currentConsultant: selectedConsultantName.value,
    reason: changeReason.value
  })
  
  alert('Danışman değiştirme talebiniz sistem yöneticilerine iletildi. En kısa sürede size geri dönüş yapılacaktır.')
  closeChangeModal()
}

// Rate consultant (for sold properties)
const rateConsultant = (propertyId, consultantName) => {
  selectedPropertyId.value = propertyId
  selectedConsultantName.value = consultantName
  showRatingModal.value = true
}

const closeRatingModal = () => {
  showRatingModal.value = false
  rating.value = 0
  ratingComment.value = ''
  selectedPropertyId.value = null
  selectedConsultantName.value = ''
}

const submitRating = () => {
  if (rating.value === 0) {
    alert('Lütfen bir puan seçin.')
    return
  }
  
  // Here you would send the rating to the server
  console.log('Danışman değerlendirmesi:', {
    propertyId: selectedPropertyId.value,
    consultant: selectedConsultantName.value,
    rating: rating.value,
    comment: ratingComment.value
  })
  
  alert(`${selectedConsultantName.value} için ${rating.value} yıldız değerlendirmeniz kaydedildi. Teşekkür ederiz!`)
  closeRatingModal()
}
</script>
