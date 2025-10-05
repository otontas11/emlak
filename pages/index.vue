<template>
  <NuxtLayout name="default">
    <div>
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-corporate-navy via-corporate-blue to-corporate-light-blue text-white overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 20% 20%, rgba(0, 116, 183, 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(0, 59, 115, 0.2) 0%, transparent 50%), radial-gradient(circle at 40% 60%, rgba(255, 184, 28, 0.1) 0%, transparent 50%);"></div>
      </div>
      <div class="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
      
      <div class="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="text-center">
          <div class="inline-block mb-4">
            <span class="bg-corporate-gold/20 text-corporate-gold px-4 py-2 rounded-full text-sm font-semibold border border-corporate-gold/30">
              Türkiye'nin Güvenilir Emlak Platformu
            </span>
          </div>
          <h1 class="text-4xl md:text-6xl font-bold mb-6 leading-tight font-heading">
            Hayalinizdeki Evi<br />
            <span class="text-corporate-gold">Bulmak Artık Çok Kolay</span>
          </h1>
          <p class="max-w-3xl mx-auto mb-10 text-lg md:text-xl text-white/90 leading-relaxed font-body">
            Profesyonel emlak danışmanlarımız ile güvenli ve hızlı emlak deneyimi. <br class="hidden md:block"/>
            Doğru evi, doğru fiyata, doğru danışmanla bulun.
          </p>
          

          <!-- Filter Buttons -->
          <div class="flex flex-wrap justify-center gap-4 mb-8">
            <button class="bg-white text-corporate-navy px-8 py-4 rounded-xl font-bold hover:bg-corporate-gold hover:text-white transition-all shadow-corporate-xl hover:scale-105 transform">
              Satın Al
            </button>
            <button class="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-corporate-navy transition-all">
              Kirala
            </button>
            <button class="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-xl font-bold hover:bg-corporate-gold hover:border-corporate-gold transition-all">
              Sat
            </button>
            <button class="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-xl font-bold hover:bg-corporate-gold hover:border-corporate-gold transition-all">
              Ev Değerleme
            </button>
          </div>
          
          <!-- Trust Indicators -->
          <div class="bg-white/10 backdrop-blur-md rounded-2xl px-8 py-6 inline-flex items-center mb-6 border border-white/20 shadow-corporate-xl">
            <div class="flex items-center space-x-8">
              <div class="text-center">
                <div class="text-3xl font-bold text-corporate-gold">2,500+</div>
                <div class="text-sm text-white/80 font-medium">Başarılı Satış</div>
              </div>
              <div class="w-px h-14 bg-white/30"></div>
              <div class="text-center">
                <div class="text-3xl font-bold text-corporate-gold">5 Gün</div>
                <div class="text-sm text-white/80 font-medium">Ortalama Süre</div>
              </div>
              <div class="w-px h-14 bg-white/30"></div>
              <div class="text-center">
                <div class="text-3xl font-bold text-corporate-gold">%98</div>
                <div class="text-sm text-white/80 font-medium">Müşteri Memnuniyeti</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Decorative Banner -->
      <div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-corporate-gold via-corporate-light-blue to-corporate-gold"></div>
    </section>

    <!-- Property Categories Section -->
    <section class="py-20 bg-corporate-gray-light">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl font-bold text-corporate-navy mb-4 text-center font-heading">
          İstanbul'da Evleri Keşfedin
        </h2>
        <p class="text-center text-gray-600 mb-12 text-lg font-body">Sizin için özenle seçilmiş emlak kategorileri</p>
        
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
          Alıcı ve Satıcılar İçin Araçlar
        </h2>
        <p class="text-center text-gray-600 mb-12 text-lg font-body">Emlak işlemlerinizi kolaylaştıran profesyonel araçlarımız</p>
        
        <div class="grid md:grid-cols-2 gap-8">
          <!-- For Buyers -->
          <div class="bg-gradient-to-br from-corporate-blue to-corporate-light-blue rounded-2xl p-8 shadow-corporate-lg text-white">
            <div class="flex items-center mb-6">
              <div class="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold font-heading">Alıcılar İçin</h3>
            </div>
            
            <div class="space-y-5">
              <div class="flex items-start space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all">
                <div class="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-white mb-1 font-heading">Ev Değerleme</h4>
                  <p class="text-white/80 text-sm font-body">Evinizin güncel piyasa değerini profesyonel danışmanlarımızla öğrenin</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all">
                <div class="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-white mb-1 font-heading">Kredi Hesaplayıcı</h4>
                  <p class="text-white/80 text-sm font-body">Aylık ödeme tutarınızı ve kredi seçeneklerinizi hesaplayın</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all">
                <div class="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-white mb-1 font-heading">Konum Analizi</h4>
                  <p class="text-white/80 text-sm font-body">Bölge hakkında ulaşım, okul ve yaşam kalitesi bilgilerini inceleyin</p>
                </div>
              </div>
            </div>
          </div>

          <!-- For Sellers -->
          <div class="bg-gradient-to-br from-corporate-blue to-corporate-light-blue rounded-2xl p-8 shadow-corporate-lg text-white">
            <div class="flex items-center mb-6">
              <div class="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold font-heading">Satıcılar İçin</h3>
            </div>
            
            <div class="space-y-5">
              <div class="flex items-start space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all">
                <div class="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-white mb-1 font-heading">Hızlı Satış</h4>
                  <p class="text-white/80 text-sm font-body">Profesyonel danışmanlarımızla evinizi ortalama 5 günde satın</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all">
                <div class="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-white mb-1 font-heading">Pazar Analizi</h4>
                  <p class="text-white/80 text-sm font-body">Bölgenizdeki fiyat trendlerini ve rekabetçi fiyatları görün</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all">
                <div class="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-white mb-1 font-heading">Profesyonel Çekim</h4>
                  <p class="text-white/80 text-sm font-body">Evinizi en iyi şekilde tanıtmak için ücretsiz fotoğraf çekimi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section class="py-20 bg-corporate-gray-light">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl font-bold text-corporate-navy mb-4 text-center font-heading">
          Nasıl Çalışır?
        </h2>
        <p class="text-center text-gray-600 mb-16 text-lg font-body">Sadece 3 basit adımda hayalinizdeki eve kavuşun</p>
        
        <div class="grid md:grid-cols-3 gap-12 relative">
          <!-- Connecting Lines -->
          <div class="hidden md:block absolute top-10 left-1/6 right-1/6 h-1 bg-gradient-to-r from-corporate-blue via-corporate-gold to-corporate-navy"></div>
          
          <div class="text-center relative">
            <div class="w-20 h-20 bg-gradient-to-br from-corporate-navy to-corporate-blue rounded-full flex items-center justify-center mx-auto mb-6 shadow-corporate-lg relative z-10">
              <span class="text-3xl font-bold text-white">1</span>
            </div>
            <h3 class="text-2xl font-semibold text-corporate-navy mb-3 font-heading">İlan Girin veya Arayın</h3>
            <p class="text-gray-600 font-body leading-relaxed">Satmak istediğiniz evi ilan olarak girin veya almak istediğiniz özelliklerde ev arayın</p>
          </div>
          
          <div class="text-center relative">
            <div class="w-20 h-20 bg-gradient-to-br from-corporate-gold to-corporate-dark-gold rounded-full flex items-center justify-center mx-auto mb-6 shadow-corporate-lg relative z-10">
              <span class="text-3xl font-bold text-white">2</span>
            </div>
            <h3 class="text-2xl font-semibold text-corporate-navy mb-3 font-heading">Danışmanla Eşleşin</h3>
            <p class="text-gray-600 font-body leading-relaxed">Profesyonel emlak danışmanımız sizinle iletişime geçer ve süreci yönetir</p>
          </div>
          
          <div class="text-center relative">
            <div class="w-20 h-20 bg-gradient-to-br from-corporate-light-blue to-corporate-blue rounded-full flex items-center justify-center mx-auto mb-6 shadow-corporate-lg relative z-10">
              <span class="text-3xl font-bold text-white">3</span>
            </div>
            <h3 class="text-2xl font-semibold text-corporate-navy mb-3 font-heading">Anlaşmayı Tamamlayın</h3>
            <p class="text-gray-600 font-body leading-relaxed">Güvenli ve hızlı şekilde emlak işleminizi tamamlayın, yeni evinize taşının</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Skilled Local Agents Section -->
    <section class="py-20 bg-white">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl font-bold text-corporate-navy mb-4 text-center font-heading">
          Uzman Emlak Danışmanlarımız
        </h2>
        <p class="text-center text-gray-600 mb-16 text-lg font-body">Bölgelerinin en iyi emlak uzmanlarıyla tanışın</p>
        
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white rounded-2xl p-8 shadow-corporate-lg hover:shadow-corporate-xl transition-all border-2 border-corporate-gray hover:border-corporate-blue group">
            <div class="w-24 h-24 bg-gradient-to-br from-corporate-navy to-corporate-blue rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-corporate">
              <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-corporate-navy mb-2 text-center font-heading">Ahmet Yılmaz</h3>
            <p class="text-corporate-blue font-semibold mb-4 text-center">Kadıköy Bölge Uzmanı</p>
            <div class="flex justify-center space-x-1 mb-5">
              <span class="text-corporate-gold text-2xl">★★★★★</span>
            </div>
            <div class="bg-corporate-gray-light rounded-lg p-4">
              <p class="text-sm text-corporate-navy font-medium text-center"><strong>5 yıl</strong> deneyim</p>
              <p class="text-sm text-corporate-navy font-medium text-center mt-1"><strong>200+</strong> başarılı satış</p>
            </div>
          </div>
          
          <div class="bg-white rounded-2xl p-8 shadow-corporate-lg hover:shadow-corporate-xl transition-all border-2 border-corporate-gray hover:border-corporate-gold group">
            <div class="w-24 h-24 bg-gradient-to-br from-corporate-gold to-corporate-dark-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-corporate">
              <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-corporate-navy mb-2 text-center font-heading">Ayşe Demir</h3>
            <p class="text-corporate-gold font-semibold mb-4 text-center">Beşiktaş Bölge Uzmanı</p>
            <div class="flex justify-center space-x-1 mb-5">
              <span class="text-corporate-gold text-2xl">★★★★★</span>
            </div>
            <div class="bg-corporate-gray-light rounded-lg p-4">
              <p class="text-sm text-corporate-navy font-medium text-center"><strong>8 yıl</strong> deneyim</p>
              <p class="text-sm text-corporate-navy font-medium text-center mt-1"><strong>350+</strong> başarılı satış</p>
            </div>
          </div>
          
          <div class="bg-white rounded-2xl p-8 shadow-corporate-lg hover:shadow-corporate-xl transition-all border-2 border-corporate-gray hover:border-corporate-light-blue group">
            <div class="w-24 h-24 bg-gradient-to-br from-corporate-light-blue to-corporate-blue rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-corporate">
              <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-corporate-navy mb-2 text-center font-heading">Mehmet Kaya</h3>
            <p class="text-corporate-light-blue font-semibold mb-4 text-center">Şişli Bölge Uzmanı</p>
            <div class="flex justify-center space-x-1 mb-5">
              <span class="text-corporate-gold text-2xl">★★★★★</span>
            </div>
            <div class="bg-corporate-gray-light rounded-lg p-4">
              <p class="text-sm text-corporate-navy font-medium text-center"><strong>6 yıl</strong> deneyim</p>
              <p class="text-sm text-corporate-navy font-medium text-center mt-1"><strong>280+</strong> başarılı satış</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  </NuxtLayout>
</template>
