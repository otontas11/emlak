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
                <p class="text-2xl font-bold text-corporate-navy">6</p>
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
                <p class="text-2xl font-bold text-corporate-navy">5</p>
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
                      
                      <!-- Realtor Applicants -->
                      <div class="mt-4 p-4 bg-corporate-blue/5 rounded-xl border-2 border-corporate-blue/20">
                        <div class="flex items-center justify-between mb-3">
                          <div class="flex items-center">
                            <div class="w-10 h-10 bg-gradient-to-br from-corporate-navy to-corporate-blue rounded-full flex items-center justify-center mr-3 shadow-corporate">
                              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                              </svg>
                            </div>
                            <div>
                              <p class="text-xs font-medium text-corporate-navy font-body">Talip Olan Emlakçılar</p>
                              <p class="text-sm font-bold text-corporate-navy">3 Emlakçı talip oldu</p>
                              <p class="text-xs text-corporate-blue mt-0.5">Aralarından birini seçebilirsiniz</p>
                            </div>
                          </div>
                          <button @click.stop="showApplicants('1')" class="bg-gradient-to-r from-corporate-navy to-corporate-blue text-white px-4 py-2 rounded-lg hover:from-corporate-blue hover:to-corporate-light-blue transition-all font-bold text-sm shadow-corporate flex items-center">
                            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                            </svg>
                            Talip Olanları Gör
                          </button>
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
                      
                      <!-- No Realtor Yet -->
                      <div class="mt-4 p-4 bg-yellow-50 rounded-xl border-2 border-yellow-200">
                        <div class="flex items-center justify-between">
                          <div class="flex items-center">
                            <div class="w-10 h-10 bg-yellow-200 rounded-full flex items-center justify-center mr-3">
                              <svg class="w-5 h-5 text-yellow-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                              </svg>
                            </div>
                            <div>
                              <p class="text-xs font-medium text-yellow-700 font-body">Emlakçı Bekleniyor</p>
                              <p class="text-sm font-bold text-yellow-900">Henüz talip olan emlakçı yok</p>
                              <p class="text-xs text-yellow-600 mt-0.5">İlanınız emlakçılar tarafından görüntülenebilir</p>
                            </div>
                          </div>
                          <button class="text-yellow-700 hover:text-yellow-800 text-sm font-semibold flex items-center">
                            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            Detay
                          </button>
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
                      
                      <!-- Realtor Info - Sold -->
                      <div class="mt-4 p-4 bg-green-100 rounded-xl border-2 border-green-300">
                        <div class="flex items-center justify-between">
                          <div class="flex items-center">
                            <div class="w-10 h-10 bg-gradient-to-br from-green-600 to-green-500 rounded-full flex items-center justify-center mr-3 shadow-corporate">
                              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                              </svg>
                            </div>
                            <div>
                              <p class="text-xs font-medium text-green-800 font-body">Satışı Gerçekleştiren Emlakçı</p>
                              <p class="text-sm font-bold text-green-900">Mehmet Kaya</p>
                              <p class="text-xs text-green-700 mt-0.5">İlanınızı başarıyla sattı</p>
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


                      <div class="flex items-center justify-between mt-4">
                        <div class="flex space-x-3">
                          <button class="text-gray-400 text-sm font-semibold cursor-not-allowed">Düzenle</button>
                          <button class="text-gray-400 text-sm font-semibold cursor-not-allowed">Sil</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Property 4 - Active with Selected Realtor -->
                <div class="p-6 hover:bg-gray-50 transition-colors">
                  <div class="flex items-start space-x-4">
                    <div class="w-24 h-24 bg-gradient-to-br from-corporate-blue/20 to-corporate-blue/30 rounded-lg flex items-center justify-center flex-shrink-0 cursor-pointer" @click="viewProperty('4')">
                      <svg class="w-8 h-8 text-corporate-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                      </svg>
                    </div>
                    <div class="flex-1 min-w-0">
                      <div class="flex items-center justify-between cursor-pointer" @click="viewProperty('4')">
                        <h3 class="text-xl font-bold text-corporate-navy font-heading">1+1 Stüdyo Daire, Üsküdar</h3>
                        <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-800">
                          Aktif
                        </span>
                      </div>
                      <p class="text-2xl font-bold text-corporate-blue mt-1">₺1,650,000</p>
                      <div class="flex items-center text-gray-600 text-sm mt-2 font-body">
                        <span class="mr-4">1 Yatak</span>
                        <span class="mr-4">1 Banyo</span>
                        <span class="mr-4">55 m²</span>
                        <span>Üsküdar, İstanbul</span>
                      </div>
                      
                      <!-- Selected Realtor -->
                      <div class="mt-4 p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl border-2 border-green-300">
                        <div class="flex items-center justify-between">
                          <div class="flex items-center">
                            <div class="w-10 h-10 bg-gradient-to-br from-green-600 to-green-500 rounded-full flex items-center justify-center mr-3 shadow-corporate">
                              <span class="text-white text-xs font-bold">AD</span>
                            </div>
                            <div>
                              <p class="text-xs font-medium text-green-800 font-body flex items-center gap-1">
                                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                                </svg>
                                Seçilen Emlakçı
                              </p>
                              <p class="text-sm font-bold text-green-900">Ayşe Demir</p>
                              <p class="text-xs text-green-700 mt-0.5">İlanınızı yönetiyor</p>
                            </div>
                          </div>
                          <div class="flex space-x-2">
                            <button @click.stop="viewConsultant('ayse-demir')" class="text-green-700 hover:text-green-800 text-sm font-semibold flex items-center">
                              <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                              </svg>
                              Profil
                            </button>
                            <button @click.stop="contactRealtor('ayse-demir')" class="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-lg text-sm font-semibold flex items-center transition-all">
                              <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                              </svg>
                              İletişim
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

                <!-- Property 5 - Active with Multiple Applicants -->
                <div class="p-6 hover:bg-gray-50 transition-colors">
                  <div class="flex items-start space-x-4">
                    <div class="w-24 h-24 bg-gradient-to-br from-corporate-blue/20 to-corporate-blue/30 rounded-lg flex items-center justify-center flex-shrink-0 cursor-pointer" @click="viewProperty('5')">
                      <svg class="w-8 h-8 text-corporate-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                      </svg>
                    </div>
                    <div class="flex-1 min-w-0">
                      <div class="flex items-center justify-between cursor-pointer" @click="viewProperty('5')">
                        <h3 class="text-xl font-bold text-corporate-navy font-heading">3+1 Daire, Maltepe</h3>
                        <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-800">
                          Aktif
                        </span>
                      </div>
                      <p class="text-2xl font-bold text-corporate-blue mt-1">₺3,200,000</p>
                      <div class="flex items-center text-gray-600 text-sm mt-2 font-body">
                        <span class="mr-4">3 Yatak</span>
                        <span class="mr-4">2 Banyo</span>
                        <span class="mr-4">135 m²</span>
                        <span>Maltepe, İstanbul</span>
                      </div>
                      
                      <!-- Realtor Applicants -->
                      <div class="mt-4 p-4 bg-corporate-blue/5 rounded-xl border-2 border-corporate-blue/20">
                        <div class="flex items-center justify-between mb-3">
                          <div class="flex items-center">
                            <div class="w-10 h-10 bg-gradient-to-br from-corporate-navy to-corporate-blue rounded-full flex items-center justify-center mr-3 shadow-corporate">
                              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                              </svg>
                            </div>
                            <div>
                              <p class="text-xs font-medium text-corporate-navy font-body">Talip Olan Emlakçılar</p>
                              <p class="text-sm font-bold text-corporate-navy">2 Emlakçı talip oldu</p>
                              <p class="text-xs text-corporate-blue mt-0.5">Aralarından birini seçebilirsiniz</p>
                            </div>
                          </div>
                          <button @click.stop="showApplicants('5')" class="bg-gradient-to-r from-corporate-navy to-corporate-blue text-white px-4 py-2 rounded-lg hover:from-corporate-blue hover:to-corporate-light-blue transition-all font-bold text-sm shadow-corporate flex items-center">
                            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                            </svg>
                            Talip Olanları Gör
                          </button>
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

                <!-- Property 6 - Active with No Applicants -->
                <div class="p-6 hover:bg-gray-50 transition-colors">
                  <div class="flex items-start space-x-4">
                    <div class="w-24 h-24 bg-gradient-to-br from-corporate-blue/20 to-corporate-blue/30 rounded-lg flex items-center justify-center flex-shrink-0 cursor-pointer" @click="viewProperty('6')">
                      <svg class="w-8 h-8 text-corporate-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                      </svg>
                    </div>
                    <div class="flex-1 min-w-0">
                      <div class="flex items-center justify-between cursor-pointer" @click="viewProperty('6')">
                        <h3 class="text-xl font-bold text-corporate-navy font-heading">2+1 Daire, Ataşehir</h3>
                        <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-800">
                          Aktif
                        </span>
                      </div>
                      <p class="text-2xl font-bold text-corporate-blue mt-1">₺2,100,000</p>
                      <div class="flex items-center text-gray-600 text-sm mt-2 font-body">
                        <span class="mr-4">2 Yatak</span>
                        <span class="mr-4">1 Banyo</span>
                        <span class="mr-4">90 m²</span>
                        <span>Ataşehir, İstanbul</span>
                      </div>
                      
                      <!-- No Realtor Yet -->
                      <div class="mt-4 p-4 bg-yellow-50 rounded-xl border-2 border-yellow-200">
                        <div class="flex items-center justify-between">
                          <div class="flex items-center">
                            <div class="w-10 h-10 bg-yellow-200 rounded-full flex items-center justify-center mr-3">
                              <svg class="w-5 h-5 text-yellow-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                              </svg>
                            </div>
                            <div>
                              <p class="text-xs font-medium text-yellow-700 font-body">Emlakçı Bekleniyor</p>
                              <p class="text-sm font-bold text-yellow-900">Henüz talip olan emlakçı yok</p>
                              <p class="text-xs text-yellow-600 mt-0.5">İlanınız emlakçılar tarafından görüntülenebilir</p>
                            </div>
                          </div>
                          <button class="text-yellow-700 hover:text-yellow-800 text-sm font-semibold flex items-center">
                            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            Detay
                          </button>
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

    <!-- Applicants Modal -->
    <div v-if="showApplicantsModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" @click.self="closeApplicantsModal">
      <div class="bg-white rounded-2xl shadow-corporate-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div class="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex justify-between items-center rounded-t-2xl">
          <div>
            <h3 class="text-2xl font-bold text-corporate-navy font-heading">Talip Olan Emlakçılar</h3>
            <p class="text-sm text-gray-600 mt-1">{{ applicants.length }} emlakçı ilanınıza talip oldu</p>
          </div>
          <button @click="closeApplicantsModal" class="text-gray-400 hover:text-gray-600 transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        
        <div class="p-8 space-y-6">
          <!-- Applicant Card -->
          <div v-for="applicant in applicants" :key="applicant.id" class="bg-gradient-to-br from-corporate-gray-light to-white rounded-xl p-6 border-2 border-corporate-gray hover:border-corporate-blue transition-all shadow-corporate">
            <div class="flex items-start justify-between mb-4">
              <div class="flex items-start space-x-4">
                <div class="w-16 h-16 bg-gradient-to-br from-corporate-navy to-corporate-blue rounded-full flex items-center justify-center shadow-corporate flex-shrink-0">
                  <span class="text-white text-lg font-bold">{{ applicant.avatar }}</span>
                </div>
                <div class="flex-1">
                  <h4 class="text-xl font-bold text-corporate-navy font-heading">{{ applicant.name }}</h4>
                  <p class="text-sm text-corporate-blue font-semibold">{{ applicant.speciality }}</p>
                  <div class="flex items-center gap-4 mt-2 text-sm text-gray-600">
                    <div class="flex items-center gap-1">
                      <svg class="w-4 h-4 text-corporate-blue" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <span class="font-semibold">{{ applicant.rating }}</span>
                    </div>
                    <span>{{ applicant.experience }} deneyim</span>
                    <span>{{ applicant.sales }} satış</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="bg-white rounded-lg p-4 mb-4 border border-gray-200">
              <p class="text-sm text-gray-700 leading-relaxed font-body">{{ applicant.message }}</p>
            </div>
            
            <div class="flex gap-3">
              <button @click="navigateTo(`/consultant/${applicant.slug}`)" class="flex-1 px-4 py-3 border-2 border-corporate-blue text-corporate-blue rounded-lg hover:bg-corporate-blue/5 font-semibold transition-all flex items-center justify-center">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
                Profili Görüntüle
              </button>
              <button @click="selectRealtor(applicant)" class="flex-1 px-4 py-3 bg-gradient-to-r from-corporate-navy to-corporate-blue text-white rounded-lg hover:from-corporate-blue hover:to-corporate-light-blue font-bold transition-all shadow-corporate flex items-center justify-center">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Bu Emlakçıyı Seç
              </button>
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

// Modal states
const showChangeModal = ref(false)
const showRatingModal = ref(false)
const showApplicantsModal = ref(false)
const selectedPropertyId = ref(null)
const selectedConsultantName = ref('')
const changeReason = ref('')
const rating = ref(0)
const ratingComment = ref('')

// Mock applicants data
const applicants = ref([
  {
    id: 1,
    name: 'Ahmet Yılmaz',
    slug: 'ahmet-yilmaz',
    experience: '5 yıl',
    sales: '200+',
    rating: 4.8,
    avatar: 'AY',
    speciality: 'Kadıköy Bölge Uzmanı',
    message: 'İlanınızla ilgileniyorum. Bölgede 5 yıllık deneyimim var ve bu tür gayrimenkullerde uzmanım.'
  },
  {
    id: 2,
    name: 'Ayşe Demir',
    slug: 'ayse-demir',
    experience: '8 yıl',
    sales: '350+',
    rating: 4.9,
    avatar: 'AD',
    speciality: 'Beşiktaş Bölge Uzmanı',
    message: 'Merhaba, ilanınızı inceledim. Benzer gayrimenkullerde çok başarılı satışlarım var. Sizinle çalışmak isterim.'
  },
  {
    id: 3,
    name: 'Mehmet Kaya',
    slug: 'mehmet-kaya',
    experience: '6 yıl',
    sales: '280+',
    rating: 4.7,
    avatar: 'MK',
    speciality: 'Şişli Bölge Uzmanı',
    message: 'İlanınız çok güzel. Geniş müşteri ağım sayesinde hızlı satış yapabilirim.'
  }
])

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

// Show applicants modal
const showApplicants = (propertyId) => {
  selectedPropertyId.value = propertyId
  showApplicantsModal.value = true
}

const closeApplicantsModal = () => {
  showApplicantsModal.value = false
  selectedPropertyId.value = null
}

const selectRealtor = (realtor) => {
  if (confirm(`${realtor.name} emlakçısını seçmek istediğinize emin misiniz?`)) {
    console.log('Seçilen emlakçı:', {
      propertyId: selectedPropertyId.value,
      realtor: realtor
    })
    alert(`${realtor.name} başarıyla ilanınıza atandı! Sizinle iletişime geçecektir.`)
    closeApplicantsModal()
  }
}

const contactRealtor = (realtorSlug) => {
  // Navigate to chat or open contact modal
  console.log('İletişim:', realtorSlug)
  alert('İletişim özelliği yakında eklenecek!')
}
</script>
