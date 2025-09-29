<template>
  <NuxtLayout name="default">
    <div>
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(99, 102, 241, 0.15) 0%, transparent 50%), radial-gradient(circle at 40% 60%, rgba(16, 185, 129, 0.1) 0%, transparent 50%);"></div>
      </div>
      <div class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
      
      <div class="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="text-center">
          <h1 class="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Türkiye'nin #1 Emlak Platformu
          </h1>
          <p class="max-w-3xl mx-auto mb-8 text-lg md:text-xl text-slate-200 leading-relaxed">
            Profesyonel emlak danışmanları güveniyor. Doğru evi, doğru fiyata bulun.
          </p>
          

          <!-- Filter Buttons -->
          <div class="flex flex-wrap justify-center gap-3 mb-6">
            <button class="bg-white bg-opacity-90 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-opacity-100 transition-all shadow-lg">
              Satın Al
            </button>
            <button class="bg-white bg-opacity-90 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-opacity-100 transition-all shadow-lg">
              Kirala
            </button>
            <button class="bg-white bg-opacity-90 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-opacity-100 transition-all shadow-lg">
              Sat
            </button>
            <button class="bg-white bg-opacity-90 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-opacity-100 transition-all shadow-lg">
              Ev Değeri
            </button>
          </div>
          
          <!-- Trust Indicators -->
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 inline-flex items-center mb-6 border border-white/20">
            <div class="flex items-center space-x-6">
              <div class="text-center">
                <div class="text-2xl font-bold text-green-400">500+</div>
                <div class="text-sm text-blue-200">Başarılı Satış</div>
              </div>
              <div class="w-px h-12 bg-white/30"></div>
              <div class="text-center">
                <div class="text-2xl font-bold text-green-400">7 Gün</div>
                <div class="text-sm text-blue-200">Ortalama Süre</div>
              </div>
              <div class="w-px h-12 bg-white/30"></div>
              <div class="text-center">
                <div class="text-2xl font-bold text-green-400">%100</div>
                <div class="text-sm text-blue-200">Güvenilir</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Decorative Banner -->
      <div class="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 via-green-500 to-indigo-500"></div>
    </section>

    <!-- Property Categories Section -->
    <section class="py-16 bg-white">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">
          İstanbul'da Evleri Keşfedin
        </h2>
        
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          <!-- New Listings -->
          <div class="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow cursor-pointer border border-gray-200">
            <div class="w-full h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg mb-3 flex items-center justify-center">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900 text-sm">Yeni İlanlar</h3>
            <p class="text-blue-600 font-bold text-lg">(1,247)</p>
          </div>

          <!-- Price Reduced -->
          <div class="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow cursor-pointer border border-gray-200">
            <div class="w-full h-24 bg-gradient-to-br from-red-100 to-red-200 rounded-lg mb-3 flex items-center justify-center">
              <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"></path>
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900 text-sm">Fiyat Düşenler</h3>
            <p class="text-red-600 font-bold text-lg">(342)</p>
          </div>

          <!-- Open Houses -->
          <div class="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow cursor-pointer border border-gray-200">
            <div class="w-full h-24 bg-gradient-to-br from-green-100 to-green-200 rounded-lg mb-3 flex items-center justify-center">
              <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900 text-sm">Açık Evler</h3>
            <p class="text-green-600 font-bold text-lg">(28)</p>
          </div>

          <!-- Recently Sold -->
          <div class="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow cursor-pointer border border-gray-200">
            <div class="w-full h-24 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg mb-3 flex items-center justify-center">
              <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900 text-sm">Yakın Zamanda Satılan</h3>
            <p class="text-purple-600 font-bold text-lg">(89)</p>
          </div>

          <!-- Foreclosures -->
          <div class="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow cursor-pointer border border-gray-200">
            <div class="w-full h-24 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg mb-3 flex items-center justify-center">
              <svg class="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900 text-sm">İcra İlanları</h3>
            <p class="text-yellow-600 font-bold text-lg">(156)</p>
          </div>

          <!-- New Construction -->
          <div class="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow cursor-pointer border border-gray-200">
            <div class="w-full h-24 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-lg mb-3 flex items-center justify-center">
              <svg class="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900 text-sm">Yeni Yapı</h3>
            <p class="text-indigo-600 font-bold text-lg">(73)</p>
          </div>

          <!-- Coming Soon -->
          <div class="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow cursor-pointer border border-gray-200">
            <div class="w-full h-24 bg-gradient-to-br from-pink-100 to-pink-200 rounded-lg mb-3 flex items-center justify-center">
              <svg class="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900 text-sm">Yakında</h3>
            <p class="text-pink-600 font-bold text-lg">(45)</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Tools Section -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">
          Alıcı ve Satıcılar İçin Araçlar
        </h2>
        
        <div class="grid md:grid-cols-2 gap-8">
          <!-- For Buyers -->
          <div class="bg-white rounded-xl p-8 shadow-lg">
            <h3 class="text-xl font-bold text-gray-900 mb-6">Alıcılar İçin</h3>
            
            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">Ev Değerleme</h4>
                  <p class="text-gray-600 text-sm">Evinizin güncel değerini öğrenin</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">Mortgage Hesaplayıcı</h4>
                  <p class="text-gray-600 text-sm">Aylık ödeme tutarınızı hesaplayın</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">Konum Analizi</h4>
                  <p class="text-gray-600 text-sm">Bölge hakkında detaylı bilgi alın</p>
                </div>
              </div>
            </div>
          </div>

          <!-- For Sellers -->
          <div class="bg-white rounded-xl p-8 shadow-lg">
            <h3 class="text-xl font-bold text-gray-900 mb-6">Satıcılar İçin</h3>
            
            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">Hızlı Satış</h4>
                  <p class="text-gray-600 text-sm">Evinizi 7 gün içinde satın</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">Pazar Analizi</h4>
                  <p class="text-gray-600 text-sm">Bölgenizdeki fiyat trendlerini görün</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">Profesyonel Fotoğraf</h4>
                  <p class="text-gray-600 text-sm">Evinizi en iyi şekilde tanıtın</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section class="py-16 bg-white">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">
          Nasıl Çalışır?
        </h2>
        
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl font-bold text-blue-600">1</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Arama Yapın</h3>
            <p class="text-gray-600">İstediğiniz özelliklerde ev arayın</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl font-bold text-green-600">2</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">İletişime Geçin</h3>
            <p class="text-gray-600">Emlak danışmanımızla görüşün</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl font-bold text-purple-600">3</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Evinizi Bulun</h3>
            <p class="text-gray-600">Hayalinizdeki eve kavuşun</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Skilled Local Agents Section -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">
          Uzman Yerel Acenteler
        </h2>
        
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white rounded-xl p-6 shadow-lg text-center">
            <div class="w-20 h-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Ahmet Yılmaz</h3>
            <p class="text-gray-600 mb-4">Kadıköy Uzmanı</p>
            <div class="flex justify-center space-x-2 mb-4">
              <span class="text-yellow-400">★★★★★</span>
            </div>
            <p class="text-sm text-gray-600">5 yıllık deneyim, 200+ başarılı satış</p>
          </div>
          
          <div class="bg-white rounded-xl p-6 shadow-lg text-center">
            <div class="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Fatma Demir</h3>
            <p class="text-gray-600 mb-4">Beşiktaş Uzmanı</p>
            <div class="flex justify-center space-x-2 mb-4">
              <span class="text-yellow-400">★★★★★</span>
            </div>
            <p class="text-sm text-gray-600">8 yıllık deneyim, 350+ başarılı satış</p>
          </div>
          
          <div class="bg-white rounded-xl p-6 shadow-lg text-center">
            <div class="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Mehmet Kaya</h3>
            <p class="text-gray-600 mb-4">Şişli Uzmanı</p>
            <div class="flex justify-center space-x-2 mb-4">
              <span class="text-yellow-400">★★★★★</span>
            </div>
            <p class="text-sm text-gray-600">6 yıllık deneyim, 280+ başarılı satış</p>
          </div>
        </div>
      </div>
    </section>
    </div>
  </NuxtLayout>
</template>
