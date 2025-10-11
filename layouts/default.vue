<template>
  <div class="min-h-screen bg-corporate-gray-light">
    <NuxtRouteAnnouncer />
    
    <!-- Header -->
    <header class="w-full bg-white shadow-corporate sticky top-0 z-50">
      <!-- Top Border Line -->
      <div class="w-full h-1 bg-gradient-to-r from-corporate-navy via-corporate-light-blue to-corporate-blue"></div>
      
          <!-- Main Header Content -->
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
              <!-- Left Side: Logo + Navigation -->
              <div class="flex items-center space-x-4 md:space-x-8">
                <!-- Logo -->
                <div class="flex-shrink-0">
                  <NuxtLink to="/" class="flex items-center hover:opacity-80 transition-opacity">
                    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-corporate-navy to-corporate-blue rounded-lg flex items-center justify-center mr-2 sm:mr-3 shadow-corporate">
                      <svg class="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                      </svg>
                    </div>
                    <span class="text-lg sm:text-2xl font-bold text-corporate-navy font-heading">Estate<span class="text-corporate-blue">90</span></span>
                  </NuxtLink>
                </div>
                
                <!-- Navigation Links -->
                <nav class="hidden lg:flex items-center space-x-6">
                  <NuxtLink 
                    to="/buy" 
                    class="transition-colors font-semibold font-body"
                    :class="$route.path === '/buy' ? 'text-corporate-blue border-b-2 border-corporate-blue pb-1' : 'text-corporate-navy hover:text-corporate-blue'"
                  >
                    Satın Al
                  </NuxtLink>
                  <NuxtLink 
                    to="/portfolios" 
                    class="transition-colors font-semibold font-body flex items-center gap-1"
                    :class="$route.path === '/portfolios' ? 'text-corporate-blue border-b-2 border-corporate-blue pb-1' : 'text-corporate-navy hover:text-corporate-blue'"
                  >
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                    </svg>
                    Portföy Paylaşımı
                  </NuxtLink>
                  <NuxtLink 
                    to="/add-property" 
                    class="transition-colors font-bold font-body"
                    :class="$route.path === '/add-property' ? 'text-corporate-blue border-b-2 border-corporate-blue pb-1' : 'text-corporate-navy hover:text-corporate-blue'"
                  >
                    İlan Ver
                  </NuxtLink>
                </nav>
              </div>
              
              <!-- Right Side: User Actions -->
          <div class="flex items-center space-x-2 sm:space-x-4">
            <!-- Not Logged In -->
            <template v-if="!authStore.isLoggedIn">
              <NuxtLink to="/auth" class="hidden sm:inline-block text-corporate-navy hover:text-corporate-blue transition-colors font-semibold font-body text-sm md:text-base">Giriş Yap</NuxtLink>
              <NuxtLink to="/auth" class="hidden sm:inline-block bg-gradient-to-r from-corporate-navy to-corporate-blue text-white px-6 py-2.5 rounded-lg hover:from-corporate-blue hover:to-corporate-light-blue transition-all duration-300 font-bold shadow-corporate hover:shadow-corporate-lg font-body">
                Kayıt Ol
              </NuxtLink>
            </template>
            
            <!-- Logged In -->
            <template v-else>
              <!-- Messages Dropdown -->
              <div class="relative">
                <!-- Mobile: Direct link, Desktop: Dropdown button -->
                <NuxtLink to="/messages" class="lg:hidden relative p-2 text-corporate-navy hover:text-corporate-blue transition-colors block">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                  </svg>
                  <!-- Unread Messages Badge -->
                  <span v-if="unreadMessages > 0" class="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {{ unreadMessages > 9 ? '9+' : unreadMessages }}
                  </span>
                </NuxtLink>
                
                <button @click="toggleMessages" class="hidden lg:block relative p-2 text-corporate-navy hover:text-corporate-blue transition-colors">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                  </svg>
                  <!-- Unread Messages Badge -->
                  <span v-if="unreadMessages > 0" class="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {{ unreadMessages > 9 ? '9+' : unreadMessages }}
                  </span>
                </button>

                <!-- Messages Dropdown (Desktop Only) -->
                <div v-if="showMessagesMenu" class="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-corporate-lg border-2 border-corporate-gray z-50">
                  <div class="p-4 border-b border-gray-200">
                    <h3 class="text-lg font-bold text-corporate-navy font-heading">Mesajlar</h3>
                    <p class="text-xs text-gray-500 mt-1">{{ unreadMessages }} okunmamış mesaj</p>
                  </div>
                  <div class="max-h-80 overflow-y-auto">
                    <div v-for="message in recentMessages.slice(0, 3)" :key="message.id" @click="goToMessages" class="p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 transition-colors" :class="{ 'bg-blue-50': !message.read }">
                      <div class="flex items-start gap-2">
                        <div class="w-9 h-9 bg-gradient-to-br from-corporate-navy to-corporate-blue rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                          {{ message.initials }}
                        </div>
                        <div class="flex-1 min-w-0">
                          <div class="flex items-center justify-between mb-1">
                            <p class="text-sm font-bold text-corporate-navy truncate">{{ message.sender }}</p>
                            <span class="text-xs text-gray-500 flex-shrink-0 ml-2">{{ message.time }}</span>
                          </div>
                          <p class="text-sm text-gray-600 truncate">{{ message.preview }}</p>
                          <span v-if="!message.read" class="inline-block mt-1 text-xs font-bold text-blue-600">Yeni</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="p-3 border-t border-gray-200 text-center">
                    <NuxtLink to="/messages" @click="showMessagesMenu = false" class="text-sm font-semibold text-corporate-blue hover:text-corporate-navy transition-colors inline-block">
                      Tüm Mesajları Görüntüle
                    </NuxtLink>
                  </div>
                </div>
              </div>

              <!-- Notifications Dropdown -->
              <div class="relative">
                <!-- Mobile: Direct link, Desktop: Dropdown button -->
                <NuxtLink to="/notifications" class="lg:hidden relative p-2 text-corporate-navy hover:text-corporate-blue transition-colors block">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                  </svg>
                  <!-- Unread Notifications Badge -->
                  <span v-if="unreadNotifications > 0" class="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {{ unreadNotifications > 9 ? '9+' : unreadNotifications }}
                  </span>
                </NuxtLink>
                
                <button @click="toggleNotifications" class="hidden lg:block relative p-2 text-corporate-navy hover:text-corporate-blue transition-colors">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                  </svg>
                  <!-- Unread Notifications Badge -->
                  <span v-if="unreadNotifications > 0" class="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {{ unreadNotifications > 9 ? '9+' : unreadNotifications }}
                  </span>
                </button>

                <!-- Notifications Dropdown (Desktop Only) -->
                <div v-if="showNotificationsMenu" class="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-corporate-lg border-2 border-corporate-gray z-50">
                  <div class="p-4 border-b border-gray-200">
                    <h3 class="text-lg font-bold text-corporate-navy font-heading">Bildirimler</h3>
                    <p class="text-xs text-gray-500 mt-1">{{ unreadNotifications }} okunmamış bildirim</p>
                  </div>
                  <div class="max-h-80 overflow-y-auto">
                    <div v-for="notification in recentNotifications.slice(0, 3)" :key="notification.id" @click="goToNotifications" class="p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 transition-colors" :class="{ 'bg-blue-50': !notification.read }">
                      <div class="flex items-start gap-2">
                        <div class="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                          :class="{
                            'bg-green-100': notification.type === 'success',
                            'bg-blue-100': notification.type === 'info',
                            'bg-yellow-100': notification.type === 'warning',
                            'bg-red-100': notification.type === 'error'
                          }"
                        >
                          <svg class="w-5 h-5" 
                            :class="{
                              'text-green-600': notification.type === 'success',
                              'text-blue-600': notification.type === 'info',
                              'text-yellow-600': notification.type === 'warning',
                              'text-red-600': notification.type === 'error'
                            }"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24"
                          >
                            <path v-if="notification.type === 'success'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            <path v-else-if="notification.type === 'info'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            <path v-else-if="notification.type === 'warning'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                        </div>
                        <div class="flex-1 min-w-0">
                          <p class="text-sm font-semibold text-corporate-navy mb-1">{{ notification.title }}</p>
                          <p class="text-sm text-gray-600 line-clamp-2">{{ notification.message }}</p>
                          <div class="flex items-center justify-between mt-2">
                            <span class="text-xs text-gray-500">{{ notification.time }}</span>
                            <span v-if="!notification.read" class="text-xs font-bold text-blue-600">Yeni</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="p-3 border-t border-gray-200 text-center">
                    <NuxtLink to="/notifications" @click="showNotificationsMenu = false" class="text-sm font-semibold text-corporate-blue hover:text-corporate-navy transition-colors inline-block">
                      Tüm Bildirimleri Görüntüle
                    </NuxtLink>
                  </div>
                </div>
              </div>

              <div class="relative group hidden lg:block">
                <button @click="toggleProfileMenu" class="flex items-center space-x-2 text-corporate-navy hover:text-corporate-blue transition-colors font-semibold">
                  <div class="w-10 h-10 bg-gradient-to-br from-corporate-navy to-corporate-blue rounded-full flex items-center justify-center text-white text-sm font-bold relative shadow-corporate">
                    {{ authStore.userInitials }}
                    <!-- Consultant Badge -->
                    <div v-if="authStore.user?.isConsultant" class="absolute -top-1 -right-1 w-5 h-5 bg-corporate-blue rounded-full flex items-center justify-center border-2 border-white">
                      <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                      </svg>
                    </div>
                  </div>
                  <div class="flex flex-col">
                    <span class="font-body">{{ authStore.fullName }}</span>
                    <span v-if="authStore.user?.isConsultant" class="text-xs text-corporate-blue font-bold">Emlak Danışmanı</span>
                  </div>
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                
                <!-- Profile Dropdown -->
                <div v-if="showProfileMenu" class="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-corporate-lg border-2 border-corporate-gray py-2 z-50">
                  <!-- Consultant specific options -->
                  <template v-if="authStore.user?.isConsultant">
                    <NuxtLink to="/consultant-profile" class="block px-5 py-3 text-sm text-corporate-blue hover:bg-corporate-blue/10 font-semibold transition-colors">
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
          <button @click="toggleMobileMenu" data-mobile-button class="lg:hidden text-corporate-navy hover:text-corporate-blue p-2 relative">
            <svg v-if="!showMobileMenu" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>

    </header>

    <!-- Mobile Menu Overlay -->
    <div 
      v-if="showMobileMenu" 
      @click="showMobileMenu = false"
      class="fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity"
    ></div>

    <!-- Mobile Menu Sidebar -->
    <div 
      data-mobile-menu
      class="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 lg:hidden transform transition-transform duration-300"
      :class="showMobileMenu ? 'translate-x-0' : 'translate-x-full'"
    >
      <!-- Menu Header -->
      <div class="bg-gradient-to-r from-corporate-navy to-corporate-blue text-white p-6 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
            </svg>
          </div>
          <span class="text-xl font-bold">Menü</span>
        </div>
        <button @click="showMobileMenu = false" class="text-white hover:text-gray-200">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      <!-- Menu Content -->
      <div class="overflow-y-auto h-[calc(100%-88px)] p-6">
        <div class="space-y-2">
          <!-- User Profile Info (If Logged In) -->
          <div v-if="authStore.isLoggedIn" class="mb-6 pb-6 border-b border-gray-200">
            <div class="flex items-center gap-4 mb-4">
              <div class="w-14 h-14 bg-gradient-to-br from-corporate-navy to-corporate-blue rounded-full flex items-center justify-center text-white text-lg font-bold relative shadow-lg">
                {{ authStore.userInitials }}
                <!-- Consultant Badge -->
                <div v-if="authStore.user?.isConsultant" class="absolute -bottom-1 -right-1 w-6 h-6 bg-corporate-blue rounded-full flex items-center justify-center border-2 border-white">
                  <svg class="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
              </div>
              <div class="flex-1">
                <p class="font-bold text-corporate-navy text-base">{{ authStore.fullName }}</p>
                <p v-if="authStore.user?.isConsultant" class="text-sm text-corporate-blue font-semibold">Emlak Danışmanı</p>
                <p v-else class="text-sm text-gray-600">Kullanıcı</p>
              </div>
            </div>
          </div>

          <!-- Navigation Links -->
          <div class="mb-6">
            <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Navigasyon</p>
            <NuxtLink 
              to="/buy" 
              @click="showMobileMenu = false"
              class="block px-4 py-3 rounded-lg transition-colors font-semibold flex items-center gap-3"
              :class="$route.path === '/buy' ? 'bg-corporate-blue text-white' : 'text-corporate-navy hover:bg-gray-100'"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
              </svg>
              Satın Al
            </NuxtLink>
            <NuxtLink 
              to="/portfolios" 
              @click="showMobileMenu = false"
              class="block px-4 py-3 rounded-lg transition-colors font-semibold flex items-center gap-3 mt-2"
              :class="$route.path === '/portfolios' ? 'bg-corporate-blue text-white' : 'text-corporate-navy hover:bg-gray-100'"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
              </svg>
              Portföy Paylaşımı
            </NuxtLink>
            <NuxtLink 
              to="/add-property" 
              @click="showMobileMenu = false"
              class="block px-4 py-3 rounded-lg transition-colors font-bold flex items-center gap-3 mt-2"
              :class="$route.path === '/add-property' ? 'bg-corporate-blue text-white' : 'text-corporate-navy hover:bg-gray-100'"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
              </svg>
              İlan Ver
            </NuxtLink>
          </div>

          <!-- Auth Links for non-logged in users -->
          <template v-if="!authStore.isLoggedIn">
            <div class="border-t border-gray-200 pt-6">
              <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Hesap</p>
              <NuxtLink to="/auth" @click="showMobileMenu = false" class="block px-4 py-3 rounded-lg text-corporate-navy hover:bg-gray-100 transition-colors font-semibold flex items-center gap-3">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
                </svg>
                Giriş Yap
              </NuxtLink>
              <NuxtLink to="/auth" @click="showMobileMenu = false" class="block px-4 py-3 mt-2 rounded-lg bg-gradient-to-r from-corporate-navy to-corporate-blue text-white font-bold text-center shadow-lg">
                Kayıt Ol
              </NuxtLink>
            </div>
          </template>

          <!-- User Menu for logged in users -->
          <template v-else>
            <div class="border-t border-gray-200 pt-6">
              <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Hesabım</p>
              <template v-if="authStore.isConsultant">
                <NuxtLink to="/consultant-profile" @click="showMobileMenu = false" class="block px-4 py-3 rounded-lg text-corporate-navy hover:bg-gray-100 transition-colors font-semibold flex items-center gap-3">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                  Danışman Profilim
                </NuxtLink>
                <NuxtLink to="/consultant-properties" @click="showMobileMenu = false" class="block px-4 py-3 mt-2 rounded-lg text-corporate-navy hover:bg-gray-100 transition-colors flex items-center gap-3">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                  </svg>
                  Atanan İlanlarım
                </NuxtLink>
              </template>
              <template v-else>
                <NuxtLink to="/profile" @click="showMobileMenu = false" class="block px-4 py-3 rounded-lg text-corporate-navy hover:bg-gray-100 transition-colors font-semibold flex items-center gap-3">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                  Profilim
                </NuxtLink>
                <NuxtLink to="/my-listings" @click="showMobileMenu = false" class="block px-4 py-3 mt-2 rounded-lg text-corporate-navy hover:bg-gray-100 transition-colors flex items-center gap-3">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                  </svg>
                  İlanlarım
                </NuxtLink>
              </template>
              
              <!-- Messages & Notifications (Mobile Only) -->
              <NuxtLink to="/messages" @click="showMobileMenu = false" class="block px-4 py-3 mt-2 rounded-lg text-corporate-navy hover:bg-gray-100 transition-colors flex items-center gap-3 relative">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                </svg>
                <span>Mesajlar</span>
                <span v-if="unreadMessages > 0" class="ml-auto w-6 h-6 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {{ unreadMessages > 9 ? '9+' : unreadMessages }}
                </span>
              </NuxtLink>
              
              <NuxtLink to="/notifications" @click="showMobileMenu = false" class="block px-4 py-3 mt-2 rounded-lg text-corporate-navy hover:bg-gray-100 transition-colors flex items-center gap-3 relative">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                </svg>
                <span>Bildirimler</span>
                <span v-if="unreadNotifications > 0" class="ml-auto w-6 h-6 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {{ unreadNotifications > 9 ? '9+' : unreadNotifications }}
                </span>
              </NuxtLink>

              <button @click="logout" class="block w-full text-left px-4 py-3 mt-4 rounded-lg text-red-600 hover:bg-red-50 transition-colors font-semibold flex items-center gap-3">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                </svg>
                Çıkış Yap
              </button>
            </div>
          </template>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <main>
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-gradient-to-br from-corporate-navy via-corporate-dark to-corporate-blue text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <!-- Top Border Line -->
        <div class="w-full h-1 bg-gradient-to-r from-corporate-blue via-white to-corporate-light-blue mb-8 sm:mb-10 md:mb-12"></div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
          <!-- Company Info -->
          <div class="col-span-1 sm:col-span-2">
            <div class="flex items-center mb-4 sm:mb-6">
              <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-corporate-blue to-corporate-light-blue rounded-lg flex items-center justify-center mr-2 sm:mr-3 shadow-corporate">
                <svg class="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
              </div>
              <span class="text-xl sm:text-2xl font-bold text-white font-heading">Estate<span class="text-corporate-light-blue">90</span></span>
            </div>
            <p class="text-white/80 mb-4 sm:mb-6 max-w-md text-sm sm:text-base leading-relaxed font-body">
              Türkiye'nin portföy paylaşımı ve emlakçı işbirliği platformu.
            </p>
            <div class="flex space-x-3 sm:space-x-4">
              <a href="#" class="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all hover:scale-110 transform">
                <svg class="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" class="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all hover:scale-110 transform">
                <svg class="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" class="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all hover:scale-110 transform">
                <svg class="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <!-- Quick Links -->
          <div>
            <ul class="space-y-2 sm:space-y-3">
              <li><a href="#" class="text-white/80 hover:text-white transition-colors font-medium font-body text-sm sm:text-base">Satın Al</a></li>
              <li><a href="#" class="text-white/80 hover:text-white transition-colors font-medium font-body text-sm sm:text-base">Portföy Paylaşımı</a></li>
              <li><a href="#" class="text-white/80 hover:text-white transition-colors font-medium font-body text-sm sm:text-base">İlan Ver</a></li>
              <li><a href="#" class="text-white/80 hover:text-white transition-colors font-medium font-body text-sm sm:text-base">Emlakçılar</a></li>
            </ul>
          </div>
          
          <!-- Support -->
          <div>
            <ul class="space-y-2 sm:space-y-3">
              <li><a href="#" class="text-white/80 hover:text-white transition-colors font-medium font-body text-sm sm:text-base">Yardım Merkezi</a></li>
              <li><a href="#" class="text-white/80 hover:text-white transition-colors font-medium font-body text-sm sm:text-base">İletişim</a></li>
              <li><a href="#" class="text-white/80 hover:text-white transition-colors font-medium font-body text-sm sm:text-base">Gizlilik</a></li>
              <li><a href="#" class="text-white/80 hover:text-white transition-colors font-medium font-body text-sm sm:text-base">Kullanım Şartları</a></li>
            </ul>
          </div>
        </div>
        
        <div class="border-t border-white/20 mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 text-center">
          <p class="text-white/70 font-body text-sm sm:text-base">&copy; 2025 <span class="text-white font-semibold">Estate90</span>. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { useAuthStore } from '~/stores/auth'

const authStore = useAuthStore()
const showProfileMenu = ref(false)
const showMessagesMenu = ref(false)
const showNotificationsMenu = ref(false)
const showMobileMenu = ref(false)

// Mock unread counts - in real app, these would come from API
const unreadMessages = computed(() => recentMessages.value.filter(m => !m.read).length)
const unreadNotifications = computed(() => recentNotifications.value.filter(n => !n.read).length)

// Mock messages data
const recentMessages = ref([
  {
    id: 1,
    sender: 'Ahmet Yılmaz',
    initials: 'AY',
    preview: 'İlanınızla ilgili görüşmek istiyorum. Müsait olduğunuz bir...',
    time: '5 dk',
    read: false
  },
  {
    id: 2,
    sender: 'Ayşe Demir',
    initials: 'AD',
    preview: 'Fiyat konusunda teklifte bulunmak istiyorum.',
    time: '1 saat',
    read: false
  },
  {
    id: 3,
    sender: 'Mehmet Kaya',
    initials: 'MK',
    preview: 'Görüşme randevusu için uygun musunuz?',
    time: '2 saat',
    read: false
  },
  {
    id: 4,
    sender: 'Nur Şahin',
    initials: 'FŞ',
    preview: 'Teşekkür ederim, çok yardımcı oldunuz.',
    time: '1 gün',
    read: true
  }
])

// Mock notifications data
const recentNotifications = ref([
  {
    id: 1,
    type: 'success',
    title: 'Yeni Başvuru',
    message: 'Veli Yılmaz 3+1 Daire ilanınıza talip oldu.',
    time: '10 dk',
    read: false
  },
  {
    id: 2,
    type: 'info',
    title: 'Randevu Hatırlatması',
    message: 'Yarın saat 14:00\'te Kadıköy\'de randevunuz var.',
    time: '30 dk',
    read: false
  },
  {
    id: 3,
    type: 'success',
    title: 'Başvurunuz Kabul Edildi',
    message: 'Etiler 2+1 Daire için başvurunuz kabul edildi!',
    time: '2 saat',
    read: false
  },
  {
    id: 4,
    type: 'warning',
    title: 'İlan Süresi Doluyor',
    message: 'Beşiktaş 3+1 Daire ilanınızın süresi 3 gün sonra dolacak.',
    time: '5 saat',
    read: false
  },
  {
    id: 5,
    type: 'info',
    title: 'Yeni Mesaj',
    message: 'Ahmet Yılmaz size bir mesaj gönderdi.',
    time: '1 gün',
    read: false
  },
  {
    id: 6,
    type: 'success',
    title: 'İlan Yayında',
    message: 'Kadıköy 3+1 Daire ilanınız başarıyla yayına alındı.',
    time: '2 gün',
    read: true
  }
])

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
  showProfileMenu.value = false
  showMessagesMenu.value = false
  showNotificationsMenu.value = false
}

const toggleProfileMenu = () => {
  showProfileMenu.value = !showProfileMenu.value
  showMessagesMenu.value = false
  showNotificationsMenu.value = false
  showMobileMenu.value = false
}

const toggleMessages = () => {
  showMessagesMenu.value = !showMessagesMenu.value
  showProfileMenu.value = false
  showNotificationsMenu.value = false
  showMobileMenu.value = false
}

const toggleNotifications = () => {
  showNotificationsMenu.value = !showNotificationsMenu.value
  showProfileMenu.value = false
  showMessagesMenu.value = false
  showMobileMenu.value = false
}

const goToMessages = () => {
  showMessagesMenu.value = false
  navigateTo('/messages')
}

const goToNotifications = () => {
  showNotificationsMenu.value = false
  navigateTo('/notifications')
}

const logout = () => {
  authStore.logout()
  showProfileMenu.value = false
  navigateTo('/')
}

// Close menus when clicking outside
onMounted(() => {
  document.addEventListener('click', (e) => {
    // Don't close if clicking the mobile menu button or inside the mobile menu
    if (e.target.closest('[data-mobile-menu]') || e.target.closest('[data-mobile-button]')) {
      return
    }
    
    const isClickInsideDropdown = e.target.closest('.relative')
    if (!isClickInsideDropdown) {
      showProfileMenu.value = false
      showMessagesMenu.value = false
      showNotificationsMenu.value = false
    }
  })
})
</script>
