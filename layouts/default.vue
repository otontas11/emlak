<template>
  <div class="min-h-screen bg-corporate-gray-light">
    <NuxtRouteAnnouncer />
    
    <!-- Header -->
    <header class="w-full bg-white shadow-corporate sticky top-0 z-50">
      <!-- Top Border Line -->
      <div class="w-full h-1 bg-gradient-to-r from-corporate-navy via-corporate-gold to-corporate-blue"></div>
      
          <!-- Main Header Content -->
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
              <!-- Logo -->
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <NuxtLink to="/" class="flex items-center hover:opacity-80 transition-opacity">
                    <div class="w-12 h-12 bg-gradient-to-br from-corporate-navy to-corporate-blue rounded-lg flex items-center justify-center mr-3 shadow-corporate">
                      <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                      </svg>
                    </div>
                    <span class="text-2xl font-bold text-corporate-navy font-heading">Emlak <span class="text-corporate-gold">Danışmanınız</span></span>
                  </NuxtLink>
                </div>
              </div>
              
              <!-- Navigation Links -->
              <nav class="hidden md:flex items-center space-x-8">
                <NuxtLink to="/buy" class="text-corporate-navy hover:text-corporate-gold transition-colors font-semibold font-body">Satın Al</NuxtLink>
                <NuxtLink to="/add-property" class="text-corporate-gold border-b-2 border-corporate-gold pb-1 font-bold hover:text-corporate-dark-gold transition-colors font-body">İlan Ver</NuxtLink>
                <NuxtLink to="/add-property" class="text-corporate-navy hover:text-corporate-gold transition-colors font-semibold font-body">Kirala</NuxtLink>
              </nav>
              
              <!-- User Actions -->
          <div class="flex items-center space-x-4">
            <!-- Not Logged In -->
            <template v-if="!authStore.isLoggedIn">
              <NuxtLink to="/auth" class="text-corporate-navy hover:text-corporate-blue transition-colors font-semibold font-body">Giriş Yap</NuxtLink>
              <NuxtLink to="/auth" class="bg-gradient-to-r from-corporate-navy to-corporate-blue text-white px-6 py-2.5 rounded-lg hover:from-corporate-blue hover:to-corporate-gold transition-all duration-300 font-bold shadow-corporate hover:shadow-corporate-lg font-body">
                Kayıt Ol
              </NuxtLink>
            </template>
            
            <!-- Logged In -->
            <template v-else>
              <div class="relative group">
                <button @click="toggleProfileMenu" class="flex items-center space-x-2 text-corporate-navy hover:text-corporate-gold transition-colors font-semibold">
                  <div class="w-10 h-10 bg-gradient-to-br from-corporate-navy to-corporate-blue rounded-full flex items-center justify-center text-white text-sm font-bold relative shadow-corporate">
                    {{ authStore.userInitials }}
                    <!-- Consultant Badge -->
                    <div v-if="authStore.user?.isConsultant" class="absolute -top-1 -right-1 w-5 h-5 bg-corporate-gold rounded-full flex items-center justify-center border-2 border-white">
                      <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                      </svg>
                    </div>
                  </div>
                  <div class="flex flex-col">
                    <span class="font-body">{{ authStore.fullName }}</span>
                    <span v-if="authStore.user?.isConsultant" class="text-xs text-corporate-gold font-bold">Emlak Danışmanı</span>
                  </div>
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                
                <!-- Profile Dropdown -->
                <div v-if="showProfileMenu" class="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-corporate-lg border-2 border-corporate-gray py-2 z-50">
                  <!-- Consultant specific options -->
                  <template v-if="authStore.user?.isConsultant">
                    <NuxtLink to="/consultant-profile" class="block px-5 py-3 text-sm text-corporate-gold hover:bg-corporate-gold/10 font-semibold transition-colors">
                      <svg class="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>
                      Danışman Profilim
                    </NuxtLink>
                    <NuxtLink to="/consultant-properties" class="block px-5 py-3 text-sm text-corporate-navy hover:bg-corporate-blue/10 font-medium transition-colors">
                      <svg class="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                      </svg>
                      Atanan İlanlarım
                    </NuxtLink>


                  </template>
                  
                  <!-- Regular user options -->
                  <template v-else>
                    <NuxtLink to="/profile" class="block px-5 py-3 text-sm text-corporate-navy hover:bg-corporate-blue/10 font-semibold transition-colors">
                      <svg class="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>
                      Profilim
                    </NuxtLink>
                    <NuxtLink to="/my-listings" class="block px-5 py-3 text-sm text-corporate-navy hover:bg-corporate-blue/10 font-medium transition-colors">
                      <svg class="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                      </svg>
                      İlanlarım
                    </NuxtLink>
                  </template>
                  
                  <hr class="my-2 border-corporate-gray">
                  <button @click="logout" class="block w-full text-left px-5 py-3 text-sm text-red-600 hover:bg-red-50 font-semibold transition-colors">
                    <svg class="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                    </svg>
                    Çıkış Yap
                  </button>
                </div>
              </div>
            </template>
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

    <!-- Main Content -->
    <main>
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-gradient-to-br from-corporate-navy via-corporate-dark to-corporate-blue text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <!-- Top Border Line -->
        <div class="w-full h-1 bg-gradient-to-r from-corporate-gold via-corporate-light-blue to-corporate-gold mb-12"></div>
        
        <div class="grid grid-cols-1 md:grid-cols-4 gap-10">
          <!-- Company Info -->
          <div class="col-span-1 md:col-span-2">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-gradient-to-br from-corporate-gold to-corporate-dark-gold rounded-lg flex items-center justify-center mr-3 shadow-corporate">
                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
              </div>
              <span class="text-2xl font-bold text-white font-heading">Emlak <span class="text-corporate-gold">Danışmanınız</span></span>
            </div>
            <p class="text-white/80 mb-6 max-w-md text-base leading-relaxed font-body">
              Türkiye'nin en güvenilir ve profesyonel emlak platformu. Uzman danışmanlarımızla doğru evi, doğru fiyata, güvenli bir şekilde bulun.
            </p>
            <div class="flex space-x-4">
              <a href="#" class="w-10 h-10 bg-white/10 hover:bg-corporate-gold rounded-lg flex items-center justify-center transition-all hover:scale-110 transform">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" class="w-10 h-10 bg-white/10 hover:bg-corporate-gold rounded-lg flex items-center justify-center transition-all hover:scale-110 transform">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" class="w-10 h-10 bg-white/10 hover:bg-corporate-gold rounded-lg flex items-center justify-center transition-all hover:scale-110 transform">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <!-- Quick Links -->
          <div>
            <h3 class="text-xl font-bold text-white mb-6 font-heading">Hızlı Linkler</h3>
            <ul class="space-y-3">
              <li><a href="#" class="text-white/80 hover:text-corporate-gold transition-colors font-medium font-body">Satın Al</a></li>
              <li><a href="#" class="text-white/80 hover:text-corporate-gold transition-colors font-medium font-body">İlan Ver</a></li>
              <li><a href="#" class="text-white/80 hover:text-corporate-gold transition-colors font-medium font-body">Kirala</a></li>
              <li><a href="#" class="text-white/80 hover:text-corporate-gold transition-colors font-medium font-body">Ev Değerleme</a></li>
              <li><a href="#" class="text-white/80 hover:text-corporate-gold transition-colors font-medium font-body">Danışman Bul</a></li>
            </ul>
          </div>
          
          <!-- Support -->
          <div>
            <h3 class="text-xl font-bold text-white mb-6 font-heading">Destek</h3>
            <ul class="space-y-3">
              <li><a href="#" class="text-white/80 hover:text-corporate-gold transition-colors font-medium font-body">Yardım Merkezi</a></li>
              <li><a href="#" class="text-white/80 hover:text-corporate-gold transition-colors font-medium font-body">İletişim</a></li>
              <li><a href="#" class="text-white/80 hover:text-corporate-gold transition-colors font-medium font-body">Gizlilik Politikası</a></li>
              <li><a href="#" class="text-white/80 hover:text-corporate-gold transition-colors font-medium font-body">Kullanım Şartları</a></li>
              <li><a href="#" class="text-white/80 hover:text-corporate-gold transition-colors font-medium font-body">Çerez Politikası</a></li>
            </ul>
          </div>
        </div>
        
        <div class="border-t border-white/20 mt-12 pt-8 text-center">
          <p class="text-white/70 font-body">&copy; 2025 <span class="text-corporate-gold font-semibold">Emlak Danışmanınız</span>. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { useAuthStore } from '~/stores/auth'

const authStore = useAuthStore()
const showProfileMenu = ref(false)

const toggleProfileMenu = () => {
  showProfileMenu.value = !showProfileMenu.value
}

const logout = () => {
  authStore.logout()
  showProfileMenu.value = false
  navigateTo('/')
}

// Close profile menu when clicking outside
onMounted(() => {
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.group')) {
      showProfileMenu.value = false
    }
  })
})
</script>
