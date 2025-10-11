<template>
  <NuxtLayout name="default">
    <div>
    <!-- Hero Section -->
    <section class="relative min-h-[70vh] flex">
      <!-- Left Side - Corporate Blue Background with Content -->
      <div class="w-full md:w-2/5 bg-gradient-to-br from-corporate-navy to-corporate-blue text-white flex flex-col justify-center px-8 py-12">

        <!-- Main Title -->
        <h1 class="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Portföy Paylaşım<br />
          <span class="text-white">Platformu</span>
        </h1>
        
        <!-- Action Buttons -->
        <div class="flex flex-col sm:flex-row gap-3 mb-8">
          <button class="bg-white text-corporate-navy px-6 py-3 rounded-lg font-bold hover:bg-corporate-light-blue hover:text-white transition-all flex items-center justify-center gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
            </svg>
            Portföy Paylaş
          </button>
          <button class="bg-white text-corporate-navy px-6 py-3 rounded-lg font-bold hover:bg-corporate-light-blue hover:text-white transition-all flex items-center justify-center gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            Emlakçı Ol
          </button>
        </div>
        
        <!-- Search/Filter -->
        <div class="bg-white rounded-lg p-4 mb-6">
          <div class="flex flex-col sm:flex-row gap-3">
            <select class="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-corporate-blue">
              <option>Türkiye</option>
            </select>
            <select class="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-corporate-blue">
              <option value="">İl Seçin</option>
              <option>İstanbul</option>
              <option>Ankara</option>
              <option>İzmir</option>
            </select>
            <button class="bg-corporate-blue text-white px-6 py-3 rounded-lg hover:bg-corporate-navy transition-all">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </div>
        </div>
        
        <!-- Feature Highlight -->
        <div class="flex items-center gap-3 mb-6">
          <span class="bg-white text-corporate-blue px-3 py-1 rounded-full text-xs font-bold">Yeni</span>
          <span class="text-sm text-white/90">Portföy paylaşımı ve emlakçı işbirliği platformu</span>
        </div>
        
        <!-- Testimonial -->
        <div class="bg-white/10 backdrop-blur-sm rounded-lg p-4">
          <div class="flex items-center gap-1 mb-2">
            <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          </div>
          <p class="text-white text-sm mb-1">"portföy paylaşımı sayesinde daha fazla müşteriye ulaştım"</p>
          <p class="text-white/70 text-xs">Mehmet K. - Perşembe, 9 Ekim 2024 11:33</p>
        </div>
      </div>
      
      <!-- Right Side - Istanbul Image -->
      <div class="hidden md:block w-3/5 relative">
        <img 
          src="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1920&h=1080&fit=crop&q=80" 
          alt="Istanbul Panorama" 
          class="w-full h-full object-cover"
        />
        <!-- Interactive Icons -->
        <div class="absolute bottom-6 right-6 flex gap-3">
          <div class="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-500 transition-all">
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
            </svg>
          </div>
          <div class="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-500 transition-all">
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>

      <!-- Featured Properties Section -->
      <section class="py-24 bg-gray-50">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-5xl font-bold text-corporate-navy mb-6 font-heading">
              Öne Çıkan İlanlar
            </h2>

          </div>

          <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            <!-- Property 1 -->
            <div class="bg-white rounded-3xl overflow-hidden shadow-corporate-lg hover:shadow-corporate-xl transition-all duration-300 group cursor-pointer transform hover:-translate-y-2">
              <div class="relative h-64 overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80"
                    alt="Modern Apartment"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div class="absolute top-4 left-4">
                  <span class="bg-corporate-blue text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">Emlakçı Portföyü</span>
                </div>
                <div class="absolute top-4 right-4">
                  <span class="bg-white/95 text-corporate-navy px-4 py-2 rounded-full text-sm font-bold shadow-lg">Satılık</span>
                </div>
              </div>
              <div class="p-8">
                <div class="flex items-center justify-between mb-4">
                  <h3 class="text-3xl font-bold text-corporate-navy">₺8.500.000</h3>
                  <div class="flex items-center gap-2">
                    <svg class="w-5 h-5 text-corporate-blue" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <span class="text-lg text-gray-600 font-semibold">4.8</span>
                  </div>
                </div>
                <h4 class="text-xl font-bold text-corporate-navy mb-3 group-hover:text-corporate-blue transition-colors">3+1 Lüks Daire - Kadıköy</h4>
                <div class="flex items-center justify-between text-gray-600 mb-6">
                  <div class="flex items-center gap-2">
                    <svg class="w-5 h-5 text-corporate-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path>
                    </svg>
                    <span class="font-medium">150 m²</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <svg class="w-5 h-5 text-corporate-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                    </svg>
                    <span class="font-medium">3+1</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <svg class="w-5 h-5 text-corporate-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <span class="font-medium">2020</span>
                  </div>
                </div>
                <div class="flex items-center justify-between pt-6 border-t border-gray-200">
                  <div class="flex items-center gap-3">
                    <div class="w-12 h-12 rounded-full bg-gradient-to-br from-corporate-blue to-corporate-light-blue flex items-center justify-center shadow-lg">
                      <span class="text-white text-sm font-bold">AY</span>
                    </div>
                    <div>
                      <p class="text-gray-600 font-medium">Ahmet Yılmaz</p>
                      <p class="text-sm text-gray-500">Emlakçı</p>
                    </div>
                  </div>
                  <button class="text-corporate-blue hover:text-corporate-navy font-semibold text-lg transition-colors">Detaylar →</button>
                </div>
              </div>
            </div>

            <!-- Property 2 -->
            <div class="bg-white rounded-3xl overflow-hidden shadow-corporate-lg hover:shadow-corporate-xl transition-all duration-300 group cursor-pointer transform hover:-translate-y-2">
              <div class="relative h-64 overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80"
                    alt="Modern Apartment Interior"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div class="absolute top-4 left-4">
                  <span class="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">Kullanıcı İlanı</span>
                </div>
                <div class="absolute top-4 right-4">
                  <span class="bg-white/95 text-corporate-navy px-4 py-2 rounded-full text-sm font-bold shadow-lg">Kiralık</span>
                </div>
              </div>
              <div class="p-8">
                <div class="flex items-center justify-between mb-4">
                  <h3 class="text-3xl font-bold text-corporate-navy">₺35.000/ay</h3>
                  <span class="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold">Yeni</span>
                </div>
                <h4 class="text-xl font-bold text-corporate-navy mb-3 group-hover:text-corporate-blue transition-colors">2+1 Modern Daire - Beşiktaş</h4>
                <div class="flex items-center justify-between text-gray-600 mb-6">
                  <div class="flex items-center gap-2">
                    <svg class="w-5 h-5 text-corporate-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path>
                    </svg>
                    <span class="font-medium">110 m²</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <svg class="w-5 h-5 text-corporate-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                    </svg>
                    <span class="font-medium">2+1</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <svg class="w-5 h-5 text-corporate-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <span class="font-medium">2018</span>
                  </div>
                </div>
                <div class="flex items-center justify-between pt-6 border-t border-gray-200">
                  <div class="flex items-center gap-3">
                    <div class="w-12 h-12 rounded-full bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center shadow-lg">
                      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>
                    </div>
                    <div>
                      <p class="text-gray-600 font-medium">Zeynep K.</p>
                      <p class="text-sm text-gray-500">Ev Sahibi</p>
                    </div>
                  </div>
                  <button class="text-corporate-blue hover:text-corporate-navy font-semibold text-lg transition-colors">Detaylar →</button>
                </div>
              </div>
            </div>

            <!-- Property 3 -->
            <div class="bg-white rounded-3xl overflow-hidden shadow-corporate-lg hover:shadow-corporate-xl transition-all duration-300 group cursor-pointer transform hover:-translate-y-2">
              <div class="relative h-64 overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Luxury Villa"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div class="absolute top-4 left-4">
                  <span class="bg-corporate-blue text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">Emlakçı Portföyü</span>
                </div>
                <div class="absolute top-4 right-4">
                  <span class="bg-white/95 text-corporate-navy px-4 py-2 rounded-full text-sm font-bold shadow-lg">Satılık</span>
                </div>
              </div>
              <div class="p-8">
                <div class="flex items-center justify-between mb-4">
                  <h3 class="text-3xl font-bold text-corporate-navy">₺12.750.000</h3>
                  <div class="flex items-center gap-2">
                    <svg class="w-5 h-5 text-corporate-blue" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <span class="text-lg text-gray-600 font-semibold">4.9</span>
                  </div>
                </div>
                <h4 class="text-xl font-bold text-corporate-navy mb-3 group-hover:text-corporate-blue transition-colors">4+1 Villa - Şişli</h4>
                <div class="flex items-center justify-between text-gray-600 mb-6">
                  <div class="flex items-center gap-2">
                    <svg class="w-5 h-5 text-corporate-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path>
                    </svg>
                    <span class="font-medium">220 m²</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <svg class="w-5 h-5 text-corporate-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                    </svg>
                    <span class="font-medium">4+1</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <svg class="w-5 h-5 text-corporate-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <span class="font-medium">2019</span>
                  </div>
                </div>
                <div class="flex items-center justify-between pt-6 border-t border-gray-200">
                  <div class="flex items-center gap-3">
                    <div class="w-12 h-12 rounded-full bg-gradient-to-br from-corporate-blue to-corporate-light-blue flex items-center justify-center shadow-lg">
                      <span class="text-white text-sm font-bold">MK</span>
                    </div>
                    <div>
                      <p class="text-gray-600 font-medium">Mehmet Kaya</p>
                      <p class="text-sm text-gray-500">Emlakçı</p>
                    </div>
                  </div>
                  <button class="text-corporate-blue hover:text-corporate-navy font-semibold text-lg transition-colors">Detaylar →</button>
                </div>
              </div>
            </div>
          </div>

          <div class="text-center mt-12">
            <button class="bg-gradient-to-r from-corporate-navy to-corporate-blue text-white px-8 py-4 rounded-xl font-bold hover:from-corporate-blue hover:to-corporate-light-blue transition-all shadow-corporate-lg hover:shadow-corporate-xl">
              Tüm İlanları Görüntüle
            </button>
          </div>
        </div>
      </section>
    <!-- Property Categories Section -->
    <section class="py-20 bg-white">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl font-bold text-corporate-navy mb-4 text-center font-heading">
          Platformda Neler Var?
        </h2>
        <p class="text-center text-gray-600 mb-12 text-lg font-body">Emlakçı portföyleri ve kullanıcı ilanları</p>
        
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          <!-- New Listings -->
          <div class="bg-white rounded-2xl p-5 shadow-corporate cursor-pointer border border-corporate-gray">
            <div class="w-full h-24 bg-corporate-navy/5 rounded-xl mb-4 flex items-center justify-center">
              <svg class="w-10 h-10 text-corporate-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
              </svg>
            </div>
            <h3 class="font-bold text-corporate-navy text-sm mb-1">Yeni İlanlar</h3>
            <p class="text-corporate-navy font-bold text-lg">(1,247)</p>
          </div>

          <!-- Price Reduced -->
          <div class="bg-white rounded-2xl p-5 shadow-corporate cursor-pointer border border-corporate-gray">
            <div class="w-full h-24 bg-corporate-navy/5 rounded-xl mb-4 flex items-center justify-center">
              <svg class="w-10 h-10 text-corporate-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
              </svg>
            </div>
            <h3 class="font-bold text-corporate-navy text-sm mb-1">Fiyat Düşenler</h3>
            <p class="text-corporate-navy font-bold text-lg">(342)</p>
          </div>

          <!-- Open Houses -->
          <div class="bg-white rounded-2xl p-5 shadow-corporate cursor-pointer border border-corporate-gray">
            <div class="w-full h-24 bg-corporate-navy/5 rounded-xl mb-4 flex items-center justify-center">
              <svg class="w-10 h-10 text-corporate-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path>
              </svg>
            </div>
            <h3 class="font-bold text-corporate-navy text-sm mb-1">Açık Evler</h3>
            <p class="text-corporate-navy font-bold text-lg">(28)</p>
          </div>

          <!-- Recently Sold -->
          <div class="bg-white rounded-2xl p-5 shadow-corporate cursor-pointer border border-corporate-gray">
            <div class="w-full h-24 bg-corporate-navy/5 rounded-xl mb-4 flex items-center justify-center">
              <svg class="w-10 h-10 text-corporate-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <h3 class="font-bold text-corporate-navy text-sm mb-1">Satılan İlanlar</h3>
            <p class="text-corporate-navy font-bold text-lg">(89)</p>
          </div>

          <!-- Foreclosures -->
          <div class="bg-white rounded-2xl p-5 shadow-corporate cursor-pointer border border-corporate-gray">
            <div class="w-full h-24 bg-corporate-navy/5 rounded-xl mb-4 flex items-center justify-center">
              <svg class="w-10 h-10 text-corporate-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="font-bold text-corporate-navy text-sm mb-1">İcra İlanları</h3>
            <p class="text-corporate-navy font-bold text-lg">(156)</p>
          </div>

          <!-- New Construction -->
          <div class="bg-white rounded-2xl p-5 shadow-corporate cursor-pointer border border-corporate-gray">
            <div class="w-full h-24 bg-corporate-navy/5 rounded-xl mb-4 flex items-center justify-center">
              <svg class="w-10 h-10 text-corporate-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a4 4 0 00-4-4H9a4 4 0 00-4 4v16M3 21h18m-9-8v8m-4-4h8"></path>
              </svg>
            </div>
            <h3 class="font-bold text-corporate-navy text-sm mb-1">Yeni Yapı</h3>
            <p class="text-corporate-navy font-bold text-lg">(73)</p>
          </div>

          <!-- Coming Soon -->
          <div class="bg-white rounded-2xl p-5 shadow-corporate cursor-pointer border border-corporate-gray">
            <div class="w-full h-24 bg-corporate-navy/5 rounded-xl mb-4 flex items-center justify-center">
              <svg class="w-10 h-10 text-corporate-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="font-bold text-corporate-navy text-sm mb-1">Yakında Gelenler</h3>
            <p class="text-corporate-navy font-bold text-lg">(45)</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Tools Section -->
    <section class="py-20 bg-white">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl font-bold text-corporate-navy mb-4 text-center font-heading">
          Emlakçılar ve Ev Sahipleri İçin Özellikler
        </h2>
        <p class="text-center text-gray-600 mb-12 text-lg font-body">Her iki kullanıcı grubu için güçlü araçlar</p>
        
        <div class="grid md:grid-cols-2 gap-8">
          <!-- For Realtors -->
          <div class="bg-gradient-to-br from-corporate-blue to-corporate-light-blue rounded-2xl p-8 shadow-corporate-lg text-white">
            <div class="flex items-center mb-6">
              <div class="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold font-heading">Emlakçılar İçin</h3>
            </div>
            
            <div class="space-y-5">
              <div class="flex items-start space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all">
                <div class="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-white mb-1 font-heading">Portföy Paylaşımı</h4>
                  <p class="text-white/80 text-sm font-body">Kendi portföyünüzü platformda paylaşın ve geniş kitleye ulaşın</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all">
                <div class="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-white mb-1 font-heading">Emlakçı İşbirliği</h4>
                  <p class="text-white/80 text-sm font-body">Diğer emlakçıların portföylerine talip olun, komisyon kazanın</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all">
                <div class="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-white mb-1 font-heading">Ajanda Yönetimi</h4>
                  <p class="text-white/80 text-sm font-body">Randevularınızı ve müsaitlik durumunuzu kolayca yönetin</p>
                </div>
              </div>
            </div>
          </div>

          <!-- For Home Owners -->
          <div class="bg-gradient-to-br from-corporate-blue to-corporate-light-blue rounded-2xl p-8 shadow-corporate-lg text-white">
            <div class="flex items-center mb-6">
              <div class="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold font-heading">Ev Sahipleri İçin</h3>
            </div>
            
            <div class="space-y-5">
              <div class="flex items-start space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all">
                <div class="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-white mb-1 font-heading">Kolay İlan Ekleme</h4>
                  <p class="text-white/80 text-sm font-body">Evinizi kolayca platforma ekleyin, profesyonel emlakçılara ulaştırın</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all">
                <div class="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-white mb-1 font-heading">Emlakçı Eşleştirme</h4>
                  <p class="text-white/80 text-sm font-body">Bölgenizdeki en uygun emlakçılarla otomatik eşleşin</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all">
                <div class="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-white mb-1 font-heading">Güvenli İşlem</h4>
                  <p class="text-white/80 text-sm font-body">Tüm süreç boyunca güvenli ve şeffaf işlem garantisi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>



    <!-- How It Works Section -->
    <section class="py-20 bg-white">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl font-bold text-corporate-navy mb-4 text-center font-heading">
          Nasıl Çalışır?
        </h2>
        <p class="text-center text-gray-600 mb-16 text-lg font-body">Emlakçılar ve ev sahipleri için basit süreç</p>
        
        <div class="grid md:grid-cols-3 gap-12 relative">
          <!-- Connecting Lines -->
          <div class="hidden md:block absolute top-10 left-1/6 right-1/6 h-1 bg-gradient-to-r from-corporate-blue via-corporate-light-blue to-corporate-blue"></div>
          
          <div class="text-center relative">
            <div class="w-20 h-20 bg-gradient-to-br from-corporate-blue to-corporate-light-blue rounded-full flex items-center justify-center mx-auto mb-6 shadow-corporate-lg relative z-10">
              <span class="text-3xl font-bold text-white">1</span>
            </div>
            <h3 class="text-2xl font-semibold text-corporate-navy mb-3 font-heading">Kayıt Olun</h3>
            <p class="text-gray-600 font-body leading-relaxed">Emlakçı veya ev sahibi olarak platforma ücretsiz kayıt olun</p>
          </div>
          
          <div class="text-center relative">
            <div class="w-20 h-20 bg-gradient-to-br from-corporate-blue to-corporate-light-blue rounded-full flex items-center justify-center mx-auto mb-6 shadow-corporate-lg relative z-10">
              <span class="text-3xl font-bold text-white">2</span>
            </div>
            <h3 class="text-2xl font-semibold text-corporate-navy mb-3 font-heading">Portföy/İlan Ekleyin</h3>
            <p class="text-gray-600 font-body leading-relaxed">Emlakçılar portföy paylaşır, ev sahipleri ilan ekler</p>
          </div>
          
          <div class="text-center relative">
            <div class="w-20 h-20 bg-gradient-to-br from-corporate-blue to-corporate-light-blue rounded-full flex items-center justify-center mx-auto mb-6 shadow-corporate-lg relative z-10">
              <span class="text-3xl font-bold text-white">3</span>
            </div>
            <h3 class="text-2xl font-semibold text-corporate-navy mb-3 font-heading">İşbirliği Yapın</h3>
            <p class="text-gray-600 font-body leading-relaxed">Emlakçılar birbirleriyle işbirliği yapar, ev sahipleri emlakçılarla buluşur</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Top Consultants Section -->
    <section class="py-24 bg-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-5xl font-bold text-corporate-navy mb-6 font-heading">
            En Başarılı Emlakçılar
          </h2>
          <p class="text-xl text-gray-600 font-body max-w-3xl mx-auto leading-relaxed">
            Portföy paylaşan ve işbirliği yapan profesyonel emlakçılarımız
          </p>
        </div>
        
        <div class="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          <div class="bg-white rounded-3xl p-8 shadow-corporate-lg hover:shadow-corporate-xl transition-all duration-300 border-2 border-corporate-gray hover:border-corporate-blue group transform hover:-translate-y-2">
            <div class="w-20 h-20 bg-gradient-to-br from-corporate-blue to-corporate-light-blue rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
              <span class="text-white text-2xl font-bold">AY</span>
            </div>
            <h3 class="text-2xl font-bold text-corporate-navy mb-2 text-center font-heading">Ahmet Yılmaz</h3>
            <p class="text-corporate-blue font-semibold mb-4 text-center text-lg">Kadıköy Bölge Uzmanı</p>
            <div class="flex justify-center space-x-1 mb-6">
              <span class="text-corporate-blue text-2xl">★★★★★</span>
            </div>
            <div class="bg-gradient-to-r from-corporate-gray-light to-gray-100 rounded-2xl p-6">
              <div class="flex justify-between items-center">
                <div class="text-center">
                  <p class="text-2xl font-bold text-corporate-navy">85</p>
                  <p class="text-sm text-gray-600 font-medium">Portföy</p>
                </div>
                <div class="text-center">
                  <p class="text-2xl font-bold text-corporate-navy">42</p>
                  <p class="text-sm text-gray-600 font-medium">İşbirliği</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="bg-white rounded-3xl p-8 shadow-corporate-lg hover:shadow-corporate-xl transition-all duration-300 border-2 border-corporate-gray hover:border-corporate-blue group transform hover:-translate-y-2">
            <div class="w-20 h-20 bg-gradient-to-br from-corporate-blue to-corporate-light-blue rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
              <span class="text-white text-2xl font-bold">AD</span>
            </div>
            <h3 class="text-2xl font-bold text-corporate-navy mb-2 text-center font-heading">Ayşe Demir</h3>
            <p class="text-corporate-blue font-semibold mb-4 text-center text-lg">Beşiktaş Bölge Uzmanı</p>
            <div class="flex justify-center space-x-1 mb-6">
              <span class="text-corporate-blue text-2xl">★★★★★</span>
            </div>
            <div class="bg-gradient-to-r from-corporate-gray-light to-gray-100 rounded-2xl p-6">
              <div class="flex justify-between items-center">
                <div class="text-center">
                  <p class="text-2xl font-bold text-corporate-navy">120</p>
                  <p class="text-sm text-gray-600 font-medium">Portföy</p>
                </div>
                <div class="text-center">
                  <p class="text-2xl font-bold text-corporate-navy">68</p>
                  <p class="text-sm text-gray-600 font-medium">İşbirliği</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="bg-white rounded-3xl p-8 shadow-corporate-lg hover:shadow-corporate-xl transition-all duration-300 border-2 border-corporate-gray hover:border-corporate-blue group transform hover:-translate-y-2">
            <div class="w-20 h-20 bg-gradient-to-br from-corporate-blue to-corporate-light-blue rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
              <span class="text-white text-2xl font-bold">MK</span>
            </div>
            <h3 class="text-2xl font-bold text-corporate-navy mb-2 text-center font-heading">Mehmet Kaya</h3>
            <p class="text-corporate-blue font-semibold mb-4 text-center text-lg">Şişli Bölge Uzmanı</p>
            <div class="flex justify-center space-x-1 mb-6">
              <span class="text-corporate-blue text-2xl">★★★★★</span>
            </div>
            <div class="bg-gradient-to-r from-corporate-gray-light to-gray-100 rounded-2xl p-6">
              <div class="flex justify-between items-center">
                <div class="text-center">
                  <p class="text-2xl font-bold text-corporate-navy">95</p>
                  <p class="text-sm text-gray-600 font-medium">Portföy</p>
                </div>
                <div class="text-center">
                  <p class="text-2xl font-bold text-corporate-navy">54</p>
                  <p class="text-sm text-gray-600 font-medium">İşbirliği</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-3xl p-8 shadow-corporate-lg hover:shadow-corporate-xl transition-all duration-300 border-2 border-corporate-gray hover:border-corporate-blue group transform hover:-translate-y-2">
            <div class="w-20 h-20 bg-gradient-to-br from-corporate-blue to-corporate-light-blue rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
              <span class="text-white text-2xl font-bold">FÖ</span>
            </div>
            <h3 class="text-2xl font-bold text-corporate-navy mb-2 text-center font-heading">Fatma Özkan</h3>
            <p class="text-corporate-blue font-semibold mb-4 text-center text-lg">Üsküdar Bölge Uzmanı</p>
            <div class="flex justify-center space-x-1 mb-6">
              <span class="text-corporate-blue text-2xl">★★★★★</span>
            </div>
            <div class="bg-gradient-to-r from-corporate-gray-light to-gray-100 rounded-2xl p-6">
              <div class="flex justify-between items-center">
                <div class="text-center">
                  <p class="text-2xl font-bold text-corporate-navy">78</p>
                  <p class="text-sm text-gray-600 font-medium">Portföy</p>
                </div>
                <div class="text-center">
                  <p class="text-2xl font-bold text-corporate-navy">35</p>
                  <p class="text-sm text-gray-600 font-medium">İşbirliği</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  </NuxtLayout>
</template>


<script setup lang="ts">
</script>