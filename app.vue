<template>
  <div class="min-h-screen bg-gray-50">
    <NuxtRouteAnnouncer />
    
    <!-- Header -->
    <header class="w-full bg-white shadow-sm sticky top-0 z-50">
      <!-- Top Border Line -->
      <div class="w-full h-1 bg-gradient-to-r from-blue-600 to-green-600"></div>
      
      <!-- Main Header Content -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- Logo -->
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <div class="flex items-center">
                <div class="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center mr-3">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                  </svg>
                </div>
                <span class="text-2xl font-bold text-gray-900">Emlak Danışmanınız</span>
              </div>
            </div>
          </div>
          
          <!-- Navigation Links -->
          <nav class="hidden md:flex items-center space-x-8">
            <a href="#" class="text-gray-700 hover:text-blue-600 transition-colors font-medium">Satın Al</a>
            <a href="#" class="text-blue-600 border-b-2 border-blue-600 pb-1 font-semibold">Sat</a>
            <a href="#" class="text-gray-700 hover:text-blue-600 transition-colors font-medium">Kirala</a>
            <a href="#" class="text-gray-700 hover:text-blue-600 transition-colors font-medium">Mortgage</a>
            <a href="#" class="text-gray-700 hover:text-blue-600 transition-colors font-medium">Danışman Bul</a>
            <a href="#" class="text-gray-700 hover:text-blue-600 transition-colors font-medium">Evim</a>
            <a href="#" class="text-gray-700 hover:text-blue-600 transition-colors font-medium">Haberler</a>
          </nav>
          
          <!-- User Actions -->
          <div class="flex items-center space-x-4">
            <a href="#" class="text-gray-700 hover:text-blue-600 transition-colors font-medium">Giriş Yap</a>
            <a href="#" class="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-green-700 transition-all duration-200 font-semibold shadow-md hover:shadow-lg">
              Kayıt Ol
            </a>
          </div>
          
          <!-- Mobile Menu Button -->
          <button class="md:hidden text-gray-700 hover:text-blue-600 p-2">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>

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
          
          <!-- Search Bar -->
          <div class="max-w-4xl mx-auto mb-6">
            <div class="bg-white rounded-2xl p-2 shadow-2xl">
              <div class="flex flex-col md:flex-row">
                <div class="flex-1 relative">
                  <input 
                    type="text" 
                    placeholder="Adres, Okul, Şehir, Posta Kodu veya Mahalle"
                    class="w-full px-6 py-4 text-gray-900 text-lg border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                  <svg class="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
                <button class="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors mt-2 md:mt-0 md:ml-2">
                  Ara
                </button>
              </div>
            </div>
          </div>
          
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
              Ön Onay
            </button>
            <button class="bg-white bg-opacity-90 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-opacity-100 transition-all shadow-lg">
              Günlük Fırsatlar
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
            <h3 class="font-semibold text-gray-900 text-sm">Son Satılanlar</h3>
            <p class="text-purple-600 font-bold text-lg">(2,156)</p>
          </div>

          <!-- New Communities -->
          <div class="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow cursor-pointer border border-gray-200">
            <div class="w-full h-24 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg mb-3 flex items-center justify-center">
              <svg class="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900 text-sm">Yeni Projeler</h3>
            <p class="text-yellow-600 font-bold text-lg">(45)</p>
          </div>

          <!-- Land -->
          <div class="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow cursor-pointer border border-gray-200">
            <div class="w-full h-24 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-lg mb-3 flex items-center justify-center">
              <svg class="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900 text-sm">Arsa</h3>
            <p class="text-indigo-600 font-bold text-lg">(67)</p>
          </div>

          <!-- Foreclosures -->
          <div class="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow cursor-pointer border border-gray-200">
            <div class="w-full h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-3 flex items-center justify-center">
              <svg class="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900 text-sm">İcra İlanları</h3>
            <p class="text-gray-600 font-bold text-lg">(12)</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Properties Section -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center mb-8">
          <h2 class="text-3xl font-bold text-gray-900">Öne Çıkan Fırsatlar</h2>
          <button class="text-blue-600 font-semibold hover:text-blue-700">Tümünü Gör</button>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <!-- Property 1 -->
          <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div class="relative">
              <div class="w-full h-48 bg-gradient-to-br from-blue-200 to-blue-300 flex items-center justify-center">
                <svg class="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
              </div>
              <div class="absolute top-3 left-3 bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold">
                İndirimli Fiyat
              </div>
              <button class="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50">
                <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </button>
            </div>
            <div class="p-4">
              <h3 class="font-semibold text-gray-900 mb-2">Müstakil Ev</h3>
              <p class="text-2xl font-bold text-blue-600 mb-2">₺2,450,000</p>
              <div class="flex items-center text-gray-600 text-sm mb-2">
                <span class="mr-4">3 Yatak</span>
                <span class="mr-4">2 Banyo</span>
                <span>150 m²</span>
              </div>
              <p class="text-gray-600 text-sm">Kadıköy, İstanbul</p>
            </div>
          </div>

          <!-- Property 2 -->
          <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div class="relative">
              <div class="w-full h-48 bg-gradient-to-br from-green-200 to-green-300 flex items-center justify-center">
                <svg class="w-16 h-16 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
              </div>
              <div class="absolute top-3 left-3 bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold">
                İndirimli Fiyat
              </div>
              <button class="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50">
                <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </button>
            </div>
            <div class="p-4">
              <h3 class="font-semibold text-gray-900 mb-2">Daire</h3>
              <p class="text-2xl font-bold text-green-600 mb-2">₺1,850,000</p>
              <div class="flex items-center text-gray-600 text-sm mb-2">
                <span class="mr-4">2 Yatak</span>
                <span class="mr-4">1 Banyo</span>
                <span>95 m²</span>
              </div>
              <p class="text-gray-600 text-sm">Beşiktaş, İstanbul</p>
            </div>
          </div>

          <!-- Property 3 -->
          <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div class="relative">
              <div class="w-full h-48 bg-gradient-to-br from-purple-200 to-purple-300 flex items-center justify-center">
                <svg class="w-16 h-16 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
              </div>
              <div class="absolute top-3 left-3 bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold">
                İndirimli Fiyat
              </div>
              <button class="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50">
                <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </button>
            </div>
            <div class="p-4">
              <h3 class="font-semibold text-gray-900 mb-2">Villa</h3>
              <p class="text-2xl font-bold text-purple-600 mb-2">₺4,200,000</p>
              <div class="flex items-center text-gray-600 text-sm mb-2">
                <span class="mr-4">4 Yatak</span>
                <span class="mr-4">3 Banyo</span>
                <span>280 m²</span>
              </div>
              <p class="text-gray-600 text-sm">Şişli, İstanbul</p>
            </div>
          </div>

          <!-- Property 4 -->
          <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div class="relative">
              <div class="w-full h-48 bg-gradient-to-br from-yellow-200 to-yellow-300 flex items-center justify-center">
                <svg class="w-16 h-16 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
              </div>
              <div class="absolute top-3 left-3 bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold">
                İndirimli Fiyat
              </div>
              <button class="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50">
                <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </button>
            </div>
            <div class="p-4">
              <h3 class="font-semibold text-gray-900 mb-2">Ofis</h3>
              <p class="text-2xl font-bold text-yellow-600 mb-2">₺3,100,000</p>
              <div class="flex items-center text-gray-600 text-sm mb-2">
                <span class="mr-4">5 Oda</span>
                <span class="mr-4">2 Banyo</span>
                <span>200 m²</span>
              </div>
              <p class="text-gray-600 text-sm">Levent, İstanbul</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tools Section -->
    <section class="py-16 bg-white">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">
          Size Nasıl Yardımcı Olabiliriz?
        </h2>
        
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Buying Tools -->
          <div class="text-center">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Satın Alma</h3>
            <div class="space-y-4">
              <div class="bg-gray-50 rounded-lg p-4">
                <h4 class="font-medium text-gray-900 mb-2">Ne kadar ödeyebilirsiniz?</h4>
                <p class="text-gray-600 text-sm mb-3">Uygun fiyat aralığınızı öğrenin</p>
                <button class="text-blue-600 font-semibold text-sm hover:text-blue-700">Uygunluk hesaplayıcısını deneyin</button>
              </div>
              <div class="bg-gray-50 rounded-lg p-4">
                <h4 class="font-medium text-gray-900 mb-2">Aylık maliyetlerinizi anlayın</h4>
                <p class="text-gray-600 text-sm mb-3">Kredi ve diğer masrafları hesaplayın</p>
                <button class="text-blue-600 font-semibold text-sm hover:text-blue-700">Kredi hesaplayıcısını deneyin</button>
              </div>
              <div class="bg-gray-50 rounded-lg p-4">
                <h4 class="font-medium text-gray-900 mb-2">Peşinat yardımı alın</h4>
                <p class="text-gray-600 text-sm mb-3">Mevcut programları keşfedin</p>
                <button class="text-blue-600 font-semibold text-sm hover:text-blue-700">Peşinat yardımı bulun</button>
              </div>
            </div>
          </div>

          <!-- Selling Tools -->
          <div class="text-center">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Satış</h3>
            <div class="space-y-4">
              <div class="bg-gray-50 rounded-lg p-4">
                <h4 class="font-medium text-gray-900 mb-2">Ev değerinizi öğrenin</h4>
                <p class="text-gray-600 text-sm mb-3">Ücretsiz ev değer tahmini alın</p>
                <button class="text-green-600 font-semibold text-sm hover:text-green-700">Değer tahmini alın</button>
              </div>
              <div class="bg-gray-50 rounded-lg p-4">
                <h4 class="font-medium text-gray-900 mb-2">Yerel emlakçıları karşılaştırın</h4>
                <p class="text-gray-600 text-sm mb-3">En iyi danışmanı bulun</p>
                <button class="text-green-600 font-semibold text-sm hover:text-green-700">Danışman bulun</button>
              </div>
              <div class="bg-gray-50 rounded-lg p-4">
                <h4 class="font-medium text-gray-900 mb-2">Hızlı satış seçenekleri</h4>
                <p class="text-gray-600 text-sm mb-3">7 günde evinizi satın</p>
                <button class="text-green-600 font-semibold text-sm hover:text-green-700">Hızlı satış</button>
              </div>
            </div>
          </div>

          <!-- Renting Tools -->
          <div class="text-center">
            <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Kiralama</h3>
            <div class="space-y-4">
              <div class="bg-gray-50 rounded-lg p-4">
                <h4 class="font-medium text-gray-900 mb-2">Kiralık evler bulun</h4>
                <p class="text-gray-600 text-sm mb-3">İhtiyaçlarınıza uygun evler</p>
                <button class="text-purple-600 font-semibold text-sm hover:text-purple-700">Ev ara</button>
              </div>
              <div class="bg-gray-50 rounded-lg p-4">
                <h4 class="font-medium text-gray-900 mb-2">Kira hesaplayıcısı</h4>
                <p class="text-gray-600 text-sm mb-3">Aylık kira maliyetlerinizi hesaplayın</p>
                <button class="text-purple-600 font-semibold text-sm hover:text-purple-700">Hesapla</button>
              </div>
              <div class="bg-gray-50 rounded-lg p-4">
                <h4 class="font-medium text-gray-900 mb-2">Ev sahibi olun</h4>
                <p class="text-gray-600 text-sm mb-3">Evinizi kiralama konusunda yardım</p>
                <button class="text-purple-600 font-semibold text-sm hover:text-purple-700">Yardım al</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section class="py-20 bg-white">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-green-800 mb-6">
            Nasıl Çalışır?
          </h2>
          <p class="text-xl text-green-700 max-w-3xl mx-auto">
            Ev satış sürecimizde tamamen şeffafız. İşte nasıl çalıştığımız:
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- Step 1 -->
          <div class="text-center">
            <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-green-800 mb-2">Adım 1</h3>
            <h4 class="text-lg font-semibold text-green-600 mb-4">Online Formu Doldurun</h4>
            <p class="text-gray-700 leading-relaxed">
              Bizi 0800 123 45 67 numaralı telefondan arayın veya Değerleme Formumuz aracılığıyla detaylarınızı online olarak doldurun.
            </p>
          </div>

          <!-- Step 2 -->
          <div class="text-center">
            <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-green-800 mb-2">Adım 2</h3>
            <h4 class="text-lg font-semibold text-green-600 mb-4">Teklif Alın</h4>
            <p class="text-gray-700 leading-relaxed">
              Mülkünüzün detaylarını aldıktan sonra, 24 saat içinde size bir teklif sunacağız.
            </p>
          </div>

          <!-- Step 3 -->
          <div class="text-center">
            <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-green-800 mb-2">Adım 3</h3>
            <h4 class="text-lg font-semibold text-green-600 mb-4">Satış Anlaşması</h4>
            <p class="text-gray-700 leading-relaxed">
              Satış anlaşması yapılır! Arkanıza yaslanın, rahatlayın ve tüm işleri bizim halletmemize izin verin.
            </p>
          </div>
        </div>

        <!-- Call to Action -->
        <div class="text-center mt-16">
          <button class="bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl">
            Hemen Başlayın
          </button>
        </div>
      </div>
    </section>

    <!-- House Selling Comparison Section -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Evinizi Nasıl Satmak İstiyorsunuz?
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Farklı satış yöntemlerini karşılaştırın ve size en uygun olanı seçin
          </p>
        </div>

        <!-- Three Column Cards -->
        <div class="grid lg:grid-cols-3 gap-8">
          <!-- Left Card: Local Agent -->
          <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <div class="text-center mb-6">
              <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-2">Yerel Emlakçı</h3>
              <p class="text-gray-600">Geleneksel Yöntem</p>
            </div>
            
            <div class="space-y-4 text-gray-700 mb-8">
              <div class="flex items-start">
                <svg class="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                <span>6 ay veya daha uzun sürebilir</span>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                <span>Başarılı satış garanti edilmez</span>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                <span>%1-3 komisyon ücreti</span>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                <span>Ek pazarlama ve onarım maliyetleri</span>
              </div>
            </div>
            
            <button class="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors">
              Bu Yöntemi Seç
            </button>
          </div>

          <!-- Middle Card: We Buy Any House (Highlighted) -->
          <div class="bg-gradient-to-br from-blue-600 to-green-600 rounded-2xl p-8 shadow-2xl text-white relative transform scale-105">
            <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span class="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">ÖNERİLEN</span>
            </div>
            
            <div class="text-center mb-6">
              <div class="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-white mb-2">Hızlı Satış</h3>
              <p class="text-blue-100">Profesyonel Çözüm</p>
            </div>
            
            <div class="space-y-4 mb-8">
              <div class="flex items-start">
                <svg class="w-5 h-5 text-green-300 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>En kısa 7 iş gününde tamamlanır</span>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-green-300 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>%100 satış garantisi</span>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-green-300 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Komisyon yok, gizli ücret yok</span>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-green-300 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Onarım gerekmez, olduğu gibi alırız</span>
              </div>
            </div>
            
            <button class="w-full bg-white text-blue-600 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors">
              Hemen Başla
            </button>
          </div>

          <!-- Right Card: Online Portals -->
          <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <div class="text-center mb-6">
              <div class="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-2">Online Platformlar</h3>
              <p class="text-gray-600">Kendi Başınıza</p>
            </div>
            
            <div class="space-y-4 text-gray-700 mb-8">
              <div class="flex items-start">
                <svg class="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                </svg>
                <span>Piyasa koşullarına bağlı başarı</span>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                </svg>
                <span>Yüksek zaman ve çaba gerektirir</span>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                </svg>
                <span>Pazarlama maliyetleri sizin</span>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                </svg>
                <span>Müzakere ve görüşme yükü</span>
              </div>
            </div>
            
            <button class="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors">
              Bu Yöntemi Seç
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Customer Testimonials Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Müşteri Yorumları
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Müşterilerimizin deneyimlerini okuyun ve neden bizi tercih ettiklerini öğrenin
          </p>
        </div>

        <!-- Testimonials Grid -->
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Testimonial 1 -->
          <div class="bg-gray-50 rounded-2xl p-8 relative">
            <!-- Green line above quote -->
            <div class="w-16 h-1 bg-green-500 mb-6"></div>
            
            <!-- Quote -->
            <blockquote class="text-2xl font-bold text-teal-800 mb-6 leading-tight">
              "Süreç çok basitti"
            </blockquote>
            
            <!-- Testimonial text -->
            <p class="text-teal-800 mb-6 leading-relaxed">
              Emlak Danışmanınız'dan Ahmet ve Mehmet harikaydı. Sürecin başında şüpheliydim ama mülk için çok uygun bir fiyat aldım ve teslim tarihim konusunda son derece esnek davrandılar. Süreç çok basitti. Birkaç kez ev değiştirdim ve her zaman çok stresliydi, ama bu çok kolaydı. Kesinlikle tekrar onlarla çalışırım.
            </p>
            
            <!-- Customer info -->
            <div class="flex items-center">
              <div class="w-16 h-16 rounded-full bg-gradient-to-r from-pink-400 to-pink-600 flex items-center justify-center text-white font-bold text-xl mr-4">
                AY
              </div>
              <div>
                <h4 class="font-bold text-teal-800 text-lg">Ayşe Yılmaz</h4>
                <p class="text-gray-600 text-sm">İstanbul</p>
              </div>
            </div>
          </div>

          <!-- Testimonial 2 -->
          <div class="bg-gray-50 rounded-2xl p-8 relative">
            <!-- Green line above quote -->
            <div class="w-16 h-1 bg-green-500 mb-6"></div>
            
            <!-- Quote -->
            <blockquote class="text-2xl font-bold text-teal-800 mb-6 leading-tight">
              "Kesinlikle muhteşem!"
            </blockquote>
            
            <!-- Testimonial text -->
            <p class="text-teal-800 mb-6 leading-relaxed">
              Bu arkadaşlar baştan sona harika bir iş çıkardılar ve hayalimizdeki eve geçişimizi mümkün kıldılar. Potansiyel alıcılar evimizi satmak için verdikleri teklifi birkaç kez geri çektikten sonra, Emlak Danışmanınız hayalimizi gerçekleştirmeyi başardı. Onları yeterince tavsiye edemem.
            </p>
            
            <!-- Customer info -->
            <div class="flex items-center">
              <div class="w-16 h-16 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-xl mr-4">
                MK
              </div>
              <div>
                <h4 class="font-bold text-teal-800 text-lg">Mehmet Kaya</h4>
                <p class="text-gray-600 text-sm">Ankara</p>
              </div>
            </div>
          </div>

          <!-- Testimonial 3 -->
          <div class="bg-gray-50 rounded-2xl p-8 relative">
            <!-- Green line above quote -->
            <div class="w-16 h-1 bg-green-500 mb-6"></div>
            
            <!-- Quote -->
            <blockquote class="text-2xl font-bold text-teal-800 mb-6 leading-tight">
              "Profesyonel ve güvenilir"
            </blockquote>
            
            <!-- Testimonial text -->
            <p class="text-teal-800 mb-6 leading-relaxed">
              Evimi satmak için birçok emlakçı ile görüştüm ama hiçbiri bu kadar profesyonel değildi. Süreç boyunca her adımda bilgilendirildim ve hiçbir sürpriz yaşamadım. Fiyat teklifi de çok adil ve gerçekçiydi. 7 gün içinde evimi sattım ve hiç stres yaşamadım. Herkese tavsiye ederim.
            </p>
            
            <!-- Customer info -->
            <div class="flex items-center">
              <div class="w-16 h-16 rounded-full bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center text-white font-bold text-xl mr-4">
                FD
              </div>
              <div>
                <h4 class="font-bold text-teal-800 text-lg">Fatma Demir</h4>
                <p class="text-gray-600 text-sm">İzmir</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Call to Action -->
        <div class="text-center mt-16">
          <p class="text-xl text-gray-600 mb-8">Siz de deneyimlerinizi paylaşın</p>
          <button class="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-200 shadow-lg hover:shadow-xl">
            Yorumunuzu Yazın
          </button>
        </div>
      </div>
    </section>

    <!-- Skilled Local Agents Section -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Deneyimli Yerel Danışmanlarımız
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Alanında uzman, güvenilir ve başarılı emlak profesyonelleri ile çalışın
          </p>
          <button class="inline-flex items-center bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-200 shadow-lg hover:shadow-xl">
            Danışmanınızı Bulun
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>

        <!-- Agent Profiles -->
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Agent 1 -->
          <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <div class="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-pink-400 to-pink-600 flex items-center justify-center text-2xl font-bold text-white">
              AY
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Ahmet Yılmaz</h3>
            <p class="text-gray-600 mb-4 text-sm">Ahmet'in Ekibi, Keller Williams</p>
            <div class="space-y-2 text-sm">
              <div class="flex justify-between items-center">
                <span class="text-gray-600">Geçen yıl satılan:</span>
                <span class="font-bold text-blue-600">78</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-600">Deneyim:</span>
                <span class="font-bold text-green-600">26 yıl</span>
              </div>
            </div>
            <button class="w-full mt-4 bg-gray-100 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors">
              Profili Gör
            </button>
          </div>

          <!-- Agent 2 -->
          <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <div class="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center text-2xl font-bold text-white">
              MK
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Mehmet Kaya</h3>
            <p class="text-gray-600 mb-4 text-sm">Keller Williams Realty</p>
            <div class="space-y-2 text-sm">
              <div class="flex justify-between items-center">
                <span class="text-gray-600">Geçen yıl satılan:</span>
                <span class="font-bold text-blue-600">9</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-600">Deneyim:</span>
                <span class="font-bold text-green-600">3 yıl</span>
              </div>
            </div>
            <button class="w-full mt-4 bg-gray-100 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors">
              Profili Gör
            </button>
          </div>

          <!-- Agent 3 -->
          <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <div class="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center text-2xl font-bold text-white">
              AD
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Ali Demir</h3>
            <p class="text-gray-600 mb-4 text-sm">Central Metro Realty</p>
            <div class="space-y-2 text-sm">
              <div class="flex justify-between items-center">
                <span class="text-gray-600">Geçen yıl satılan:</span>
                <span class="font-bold text-blue-600">24</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-600">Deneyim:</span>
                <span class="font-bold text-green-600">21 yıl</span>
              </div>
            </div>
            <button class="w-full mt-4 bg-gray-100 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors">
              Profili Gör
            </button>
          </div>

          <!-- Agent 4 -->
          <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <div class="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 flex items-center justify-center text-2xl font-bold text-white">
              CO
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Can Özkan</h3>
            <p class="text-gray-600 mb-4 text-sm">Avenue İstanbul Realty</p>
            <div class="space-y-2 text-sm">
              <div class="flex justify-between items-center">
                <span class="text-gray-600">Geçen yıl satılan:</span>
                <span class="font-bold text-blue-600">16</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-600">Deneyim:</span>
                <span class="font-bold text-green-600">19 yıl</span>
              </div>
            </div>
            <button class="w-full mt-4 bg-gray-100 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors">
              Profili Gör
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid md:grid-cols-4 gap-8">
          <!-- Company Info -->
          <div class="md:col-span-2">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center mr-3">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
              </div>
              <span class="text-2xl font-bold">Emlak Danışmanınız</span>
            </div>
            <p class="text-gray-400 mb-6 max-w-md">
              Türkiye'nin en güvenilir emlak platformu. Hızlı, güvenli ve şeffaf ev satış süreçleri.
            </p>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-400 hover:text-white transition-colors">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <!-- Quick Links -->
          <div>
            <h3 class="text-lg font-semibold mb-4">Hızlı Linkler</h3>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Ev Satın Al</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Ev Sat</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Ev Kirala</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Danışman Bul</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Hakkımızda</a></li>
            </ul>
          </div>
          
          <!-- Contact -->
          <div>
            <h3 class="text-lg font-semibold mb-4">İletişim</h3>
            <ul class="space-y-2 text-gray-400">
              <li>📞 +90 (212) 555-0123</li>
              <li>✉️ info@emlakdanismaniniz.com</li>
              <li>📍 İstanbul, Türkiye</li>
            </ul>
          </div>
        </div>
        
        <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Emlak Danışmanınız. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
</style>
