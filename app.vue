<template>
  <div>
    <NuxtRouteAnnouncer />
    
    <!-- Header -->
    <header class="w-full bg-white">
      <!-- Top Border Line -->
      <div class="w-full h-0.5 bg-gray-800"></div>
      
      <!-- Main Header Content -->
      <div class="px-6 py-4 flex justify-between items-center">
        <!-- Logo -->
        <div class="text-2xl font-bold text-indigo-600">
          Emlak Danışmanınız
        </div>
        
        <!-- Navigation Links -->
        <nav class="hidden md:flex items-center space-x-8">
          <a href="#" class="text-gray-900 hover:text-indigo-600 transition-colors">Satın Al</a>
          <a href="#" class="text-gray-900 hover:text-indigo-600 transition-colors border-b-2 border-gray-900 pb-1">Sat</a>
          <a href="#" class="text-gray-900 hover:text-indigo-600 transition-colors">Kirala</a>
          <a href="#" class="text-gray-900 hover:text-indigo-600 transition-colors">Mortgage</a>
          <a href="#" class="text-gray-900 hover:text-indigo-600 transition-colors">Danışman Bul</a>
          <a href="#" class="text-gray-900 hover:text-indigo-600 transition-colors">Evim</a>
          <a href="#" class="text-gray-900 hover:text-indigo-600 transition-colors">Haberler & İçgörüler</a>
        </nav>
        
        <!-- User Actions -->
        <div class="flex items-center space-x-4">
          <a href="#" class="text-gray-900 hover:text-indigo-600 transition-colors">Giriş Yap</a>
          <a href="#" class="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">Kayıt Ol</a>
        </div>
        
        <!-- Mobile Menu Button -->
        <button class="md:hidden text-gray-900 hover:text-indigo-600">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="flex flex-col items-center justify-center text-center py-24 px-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
      <h2 class="text-3xl md:text-5xl font-bold mb-6">Doğru Evi, Doğru Danışmanla Bulun</h2>
      <p class="max-w-2xl mb-10 text-lg md:text-xl">
        Emlakçılara yüksek komisyon ödemeden, istediğiniz zaman danışmanınızı değiştirme özgürlüğü ile.
      </p>
      <div class="flex flex-col sm:flex-row gap-6">
        <a href="#satmak" class="px-8 py-4 bg-white text-indigo-600 font-semibold rounded-xl shadow hover:bg-gray-100">
          Evimi Satmak İstiyorum
        </a>
        <a href="#almak" class="px-8 py-4 bg-indigo-800 font-semibold rounded-xl shadow hover:bg-indigo-900">
          Ev Satın Almak İstiyorum
        </a>
      </div>
    </section>

    <!-- House Selling Comparison Section -->
    <section class="py-20 px-6 bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <!-- Section Header -->
        <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16">
          <div class="lg:w-1/2 mb-8 lg:mb-0">
            <h2 class="text-4xl md:text-5xl font-bold text-green-800 mb-6">Evinizi Hızlı Satın</h2>
            <p class="text-lg text-gray-700 leading-relaxed">
              Bir evi hızlı bir şekilde satmanın ne kadar zor olabileceğini anlıyoruz. Bu yüzden, evleri hızlı (sadece yedi gün gibi kısa bir sürede) ve sorunsuz bir şekilde satın alıyoruz! Gecikme yok. Belirsizlik yok.
            </p>
          </div>
          <div class="lg:w-1/2 lg:text-right">
            <button class="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors">
              Evinizi Hızlı Satın
            </button>
          </div>
        </div>

        <!-- Three Column Cards -->
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Left Card: Local Agent -->
          <div class="bg-white rounded-xl p-8 shadow-lg">
            <h3 class="text-2xl font-bold text-green-800 mb-6">Yerel Emlakçı</h3>
            <div class="space-y-4 text-gray-700">
              <p>Evinizi emlakçılar aracılığıyla satmak zor olabilir.</p>
              <p>6 ay veya daha uzun sürebilir. Ve başarılı bir satış garanti edilmez.</p>
              <p>Dikkat çekici maliyetler var, bunlar arasında şunlar yer alıyor:</p>
              <ul class="space-y-3">
                <li class="flex items-start">
                  <span class="text-green-600 mr-2">→</span>
                  <span>Emlakçı komisyonu için satış fiyatının %1-3'ü oranında ücret alınır</span>
                </li>
                <li class="flex items-start">
                  <span class="text-green-600 mr-2">→</span>
                  <span>Pazarlama, hukuki hizmetler, onarım ve yenilemeler</span>
                </li>
              </ul>
            </div>
            <button class="w-full mt-8 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
              Evinizi Hızlı Satın
            </button>
          </div>

          <!-- Middle Card: We Buy Any House (Highlighted) -->
          <div class="bg-teal-700 rounded-xl p-8 shadow-lg text-white">
            <h3 class="text-2xl font-bold text-white mb-6">Herhangi Bir Evi Satın Alıyoruz</h3>
            <div class="space-y-4">
              <p>Evinizi satın alabilecek paramız hazır.</p>
              <p>Bu, ipotek onayları, müzakereler, mülk zincirleri vb. ihtiyacını ve riskini ortadan kaldırır.</p>
              <p>Hızlı ev satışında uzmanlaşıyoruz, yani:</p>
              <ul class="space-y-3">
                <li class="flex items-start">
                  <span class="text-green-400 mr-2">→</span>
                  <span>En kısa 7 iş günü içinde tamamlanabilir</span>
                </li>
                <li class="flex items-start">
                  <span class="text-green-400 mr-2">→</span>
                  <span>Hızlı bir satış için mümkün olan en iyi fiyatı size sunuyoruz</span>
                </li>
                <li class="flex items-start">
                  <span class="text-green-400 mr-2">→</span>
                  <span>Satış garantili (düşme riski yok)</span>
                </li>
              </ul>
            </div>
            <button class="w-full mt-8 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
              Evinizi Hızlı Satın
            </button>
          </div>

          <!-- Right Card: Online Portals -->
          <div class="bg-white rounded-xl p-8 shadow-lg">
            <h3 class="text-2xl font-bold text-green-800 mb-6">Çevrimiçi Emlak Portalları</h3>
            <div class="space-y-4 text-gray-700">
              <p>Çevrimiçi emlak portallarının başarısı piyasa koşullarına ve pazarlama çabalarına bağlıdır.</p>
              <p>Emlakçı ücretlerinden tasarruf sağlar, ancak kişisel katılım ve maliyet gerektirir:</p>
              <ul class="space-y-3">
                <li class="flex items-start">
                  <span class="text-green-600 mr-2">→</span>
                  <span>Satıcılar, listeleme, profesyonel fotoğrafçılık ve diğer pazarlama maliyetlerini karşılamalıdır</span>
                </li>
                <li class="flex items-start">
                  <span class="text-green-600 mr-2">→</span>
                  <span>Bu süreç, ziyaretler ve müzakereler de dahil olmak üzere önemli miktarda zaman gerektirir</span>
                </li>
                <li class="flex items-start">
                  <span class="text-green-600 mr-2">→</span>
                  <span>Önemli çaba ve planlama gerekiyor</span>
                </li>
              </ul>
            </div>
            <button class="w-full mt-8 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
              Evinizi Hızlı Satın
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Skilled Local Agents Section -->
    <section class="py-20 px-6 bg-white">
      <div class="max-w-7xl mx-auto">
        <!-- Section Header -->
        <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16">
          <div class="lg:w-1/2 mb-8 lg:mb-0">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Deneyimli Yerel Danışmanlar</h2>
            <p class="text-lg text-gray-600">Deneyimli emlak profesyonelleri ağımıza erişin</p>
          </div>
          <div class="lg:w-1/2 lg:text-right">
            <button class="border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-colors flex items-center">
              Danışmanınızı Bulun
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Agent Profiles -->
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Agent 1 -->
          <div class="text-center">
            <div class="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
              <div class="w-full h-full bg-pink-200 flex items-center justify-center text-4xl font-bold text-pink-600">
                GK
              </div>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Ahmet Yılmaz</h3>
            <p class="text-gray-600 mb-4">Ahmet'in Ekibi, Keller Williams #472276</p>
            <div class="space-y-2">
              <p class="text-gray-700"><span class="font-bold">78</span> Geçen yıl satılan</p>
              <p class="text-gray-700"><span class="font-bold">26 yıl</span> Deneyim</p>
            </div>
          </div>

          <!-- Agent 2 -->
          <div class="text-center">
            <div class="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
              <div class="w-full h-full bg-blue-200 flex items-center justify-center text-4xl font-bold text-blue-600">
                TS
              </div>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Mehmet Kaya</h3>
            <p class="text-gray-600 mb-4">Keller Williams Realty #0840186</p>
            <div class="space-y-2">
              <p class="text-gray-700"><span class="font-bold">9</span> Geçen yıl satılan</p>
              <p class="text-gray-700"><span class="font-bold">3 yıl</span> Deneyim</p>
            </div>
          </div>

          <!-- Agent 3 -->
          <div class="text-center">
            <div class="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
              <div class="w-full h-full bg-blue-100 flex items-center justify-center text-4xl font-bold text-blue-500">
                SL
              </div>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Ali Demir</h3>
            <p class="text-gray-600 mb-4">Central Metro Realty</p>
            <div class="space-y-2">
              <p class="text-gray-700"><span class="font-bold">24</span> Geçen yıl satılan</p>
              <p class="text-gray-700"><span class="font-bold">21 yıl</span> Deneyim</p>
            </div>
          </div>

          <!-- Agent 4 -->
          <div class="text-center">
            <div class="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
              <div class="w-full h-full bg-indigo-200 flex items-center justify-center text-4xl font-bold text-indigo-600">
                SN
              </div>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Can Özkan</h3>
            <p class="text-gray-600 mb-4">Avenue İstanbul Realty #556991</p>
            <div class="space-y-2">
              <p class="text-gray-700"><span class="font-bold">16</span> Geçen yıl satılan</p>
              <p class="text-gray-700"><span class="font-bold">19 yıl</span> Deneyim</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="w-full py-6 bg-white border-t text-center text-sm text-gray-600">
      © 2025 Emlak Danışmanınız. Tüm hakları saklıdır.
    </footer>
  </div>
</template>

<style>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
</style>
