<template>
  <NuxtLayout name="default">
    <div class="min-h-screen bg-corporate-gray-light py-8">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Page Header -->
        <div class="mb-8">
          <h1 class="text-4xl font-bold text-corporate-navy font-heading">Emlakçı Profilim</h1>
          <p class="text-gray-600 mt-2 text-lg font-body">Emlakçı hesap bilgilerinizi, portföyünüzü ve ajandanızı yönetin</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Left Sidebar - Consultant Info -->
          <div class="lg:col-span-1">
            <div class="bg-white rounded-xl shadow-corporate-lg p-6 border border-corporate-gray">
              <!-- Profile Picture -->
              <div class="text-center mb-6">
                <div class="relative inline-block">
                  <div class="w-24 h-24 bg-gradient-to-br from-corporate-navy to-corporate-blue rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold shadow-corporate">
                    {{ authStore.userInitials }}
                  </div>
                  <!-- Consultant Badge -->
                  <div class="absolute -bottom-2 -right-2 w-8 h-8 bg-corporate-blue rounded-full flex items-center justify-center border-4 border-white">
                    <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                </div>
                <h2 class="text-xl font-bold text-corporate-navy mt-4 font-heading">{{ companyName }}</h2>
                <p class="text-corporate-blue text-sm font-bold">Emlak Ofisi</p>
                <div class="mt-2 pt-2 border-t border-gray-200">
                  <p class="text-xs text-gray-500">Yetkili Kişi</p>
                  <p class="text-sm text-gray-700 font-semibold">{{ authStore.fullName }}</p>
                </div>
              </div>

              <!-- Stats -->
              <div class="grid grid-cols-2 gap-4 mb-6">
                <div class="bg-corporate-blue/5 rounded-lg p-4 text-center border border-corporate-blue/20">
                  <div class="text-2xl font-bold text-corporate-blue">18</div>
                  <div class="text-sm text-gray-600 font-body">Portföy İlanı</div>
                </div>
                <div class="bg-green-50 rounded-lg p-4 text-center border border-green-200">
                  <div class="text-2xl font-bold text-green-600">32</div>
                  <div class="text-sm text-gray-600 font-body">Başarılı Satış</div>
                </div>
                <div class="bg-purple-50 rounded-lg p-4 text-center border border-purple-200">
                  <div class="text-2xl font-bold text-purple-600">5</div>
                  <div class="text-sm text-gray-600 font-body">Talip Olduğum</div>
                </div>
                <div class="bg-yellow-50 rounded-lg p-4 text-center border border-yellow-200">
                  <div class="text-2xl font-bold text-yellow-600">12</div>
                  <div class="text-sm text-gray-600 font-body">Randevular</div>
                </div>
              </div>

              <!-- Navigation Tabs -->
              <div class="space-y-3">
                <button @click="activeTab = 'profile'" :class="activeTab === 'profile' ? 'bg-corporate-blue text-white' : 'text-corporate-navy hover:bg-corporate-blue/10'" class="w-full flex items-center space-x-3 p-3 rounded-lg transition-all font-semibold font-body">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                  <span>Profil Bilgileri</span>
                </button>

                <NuxtLink to="/my-certificates" class="w-full flex items-center space-x-3 text-corporate-navy hover:text-corporate-blue hover:bg-corporate-blue/10 p-3 rounded-lg transition-all font-semibold font-body">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                  </svg>
                  <span>Sertifikalarım</span>
                </NuxtLink>

                <button @click="activeTab = 'agenda'" :class="activeTab === 'agenda' ? 'bg-corporate-blue text-white' : 'text-corporate-navy hover:bg-corporate-blue/10'" class="w-full flex items-center space-x-3 p-3 rounded-lg transition-all font-semibold font-body">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  <span>Ajandam</span>
                </button>

                <NuxtLink to="/consultant-properties" class="w-full flex items-center space-x-3 text-corporate-navy hover:text-corporate-blue hover:bg-corporate-blue/10 p-3 rounded-lg transition-all font-semibold font-body">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                  </svg>
                  <span>Portföy İlanlarım</span>
                </NuxtLink>
                
                <button @click="activeTab = 'applications'" :class="activeTab === 'applications' ? 'bg-corporate-blue text-white' : 'text-corporate-navy hover:bg-corporate-blue/10'" class="w-full flex items-center space-x-3 p-3 rounded-lg transition-all font-semibold font-body">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
                  </svg>
                  <span>Talip Olduklarım</span>
                </button>
              </div>
            </div>
          </div>

          <!-- Right Content - Tabs -->
          <div class="lg:col-span-2">
            <!-- Profile Tab -->
            <div v-if="activeTab === 'profile'" class="bg-white rounded-xl shadow-corporate-lg p-8 border border-corporate-gray">
              <h3 class="text-2xl font-bold text-corporate-navy mb-6 font-heading">Şirket Bilgileri</h3>
              
              <form @submit.prevent="updateProfile" class="space-y-6">
                <!-- Company Name -->
                <div>
                  <label for="companyName" class="block text-sm font-bold text-corporate-navy mb-2 font-body">Şirket Adı *</label>
                  <input type="text" id="companyName" v-model="profileForm.companyName" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent font-body" placeholder="Örn: Yılmaz Emlak">
                </div>

                <!-- Company Info Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label for="taxNumber" class="block text-sm font-bold text-corporate-navy mb-2 font-body">Vergi Numarası</label>
                    <input type="text" id="taxNumber" v-model="profileForm.taxNumber" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent font-body" placeholder="1234567890">
                  </div>
                  <div>
                    <label for="taxOffice" class="block text-sm font-bold text-corporate-navy mb-2 font-body">Vergi Dairesi</label>
                    <input type="text" id="taxOffice" v-model="profileForm.taxOffice" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent font-body" placeholder="Kadıköy">
                  </div>
                </div>

                <!-- Contact Info -->
                <div class="border-t pt-6 mt-6">
                  <h4 class="text-lg font-bold text-corporate-navy mb-4 font-heading">İletişim Bilgileri</h4>
                  
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label for="phone" class="block text-sm font-bold text-corporate-navy mb-2 font-body">Telefon *</label>
                      <input type="tel" id="phone" v-model="profileForm.phone" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent font-body" placeholder="+90 532 123 45 67">
                    </div>
                    <div>
                      <label for="email" class="block text-sm font-bold text-corporate-navy mb-2 font-body">E-posta</label>
                      <input type="email" id="email" v-model="profileForm.email" disabled class="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-500 cursor-not-allowed font-body">
                    </div>
                  </div>

                  <!-- Address -->
                  <div>
                    <label for="address" class="block text-sm font-bold text-corporate-navy mb-2 font-body">Adres</label>
                    <textarea id="address" v-model="profileForm.address" rows="3" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent font-body" placeholder="Şirket adresi..."></textarea>
                  </div>
                </div>

                <!-- Authorized Person (Private) -->
                <div class="border-t pt-6 mt-6 bg-gray-50 -mx-8 px-8 py-6">
                  <div class="flex items-center gap-2 mb-4">
                    <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                    </svg>
                    <h4 class="text-lg font-bold text-corporate-navy font-heading">Yetkili Kişi Bilgileri (Gizli)</h4>
                  </div>
                  <p class="text-xs text-gray-500 mb-4">Bu bilgiler sadece sizin görebilirsiniz, müşterilere gösterilmez.</p>
                  
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label for="firstName" class="block text-sm font-bold text-corporate-navy mb-2 font-body">Ad *</label>
                      <input type="text" id="firstName" v-model="profileForm.firstName" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent font-body bg-white">
                    </div>
                    <div>
                      <label for="lastName" class="block text-sm font-bold text-corporate-navy mb-2 font-body">Soyad *</label>
                      <input type="text" id="lastName" v-model="profileForm.lastName" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent font-body bg-white">
                    </div>
                  </div>
                </div>

                <!-- Specialty Area -->
                <div>
                  <label for="specialty" class="block text-sm font-bold text-corporate-navy mb-2 font-body">Uzmanlık Bölgesi</label>
                  <input type="text" id="specialty" v-model="profileForm.specialty" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent font-body" placeholder="Kadıköy, Beşiktaş">
                </div>

                <!-- About Company -->
                <div>
                  <label for="about" class="block text-sm font-bold text-corporate-navy mb-2 font-body">Şirket Hakkında</label>
                  <textarea id="about" v-model="profileForm.about" rows="4" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent font-body" placeholder="Şirketiniz hakkında kısa bir açıklama..."></textarea>
                </div>

                <!-- Save Button -->
                <div class="flex justify-end space-x-4 pt-6">
                  <button type="button" class="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all font-bold font-body">İptal</button>
                  <button type="submit" :disabled="isUpdating" class="px-6 py-3 bg-gradient-to-r from-corporate-navy to-corporate-blue text-white rounded-lg hover:from-corporate-blue hover:to-corporate-light-blue transition-all font-bold shadow-corporate disabled:opacity-50 disabled:cursor-not-allowed font-body">
                    <span v-if="isUpdating">Güncelleniyor...</span>
                    <span v-else>Kaydet</span>
                  </button>
                </div>
              </form>
            </div>

            <!-- Applications Tab -->
            <div v-if="activeTab === 'applications'" class="bg-white rounded-xl shadow-corporate-lg p-8 border border-corporate-gray">
              <h3 class="text-2xl font-bold text-corporate-navy mb-6 font-heading">Talip Olduğum İlanlar</h3>
              
              <div class="space-y-4">
                <div v-for="application in applications" :key="application.id" class="border-2 rounded-xl p-6 hover:shadow-corporate transition-all" :class="application.status === 'accepted' ? 'border-green-200 bg-green-50' : application.status === 'pending' ? 'border-blue-200 bg-blue-50' : 'border-gray-200 bg-white'">
                  <div class="flex items-start justify-between mb-4">
                    <div class="flex-1">
                      <h4 class="text-lg font-bold text-corporate-navy mb-1">{{ application.propertyTitle }}</h4>
                      <p class="text-sm text-gray-600 mb-2">{{ application.location }}</p>
                      <p class="text-xl font-bold text-corporate-blue">{{ application.price }}</p>
                    </div>
                    <div class="ml-4">
                      <span v-if="application.status === 'accepted'" class="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Kabul Edildi
                      </span>
                      <span v-else-if="application.status === 'pending'" class="px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-full">
                        Beklemede
                      </span>
                      <span v-else class="px-3 py-1 bg-gray-500 text-white text-xs font-bold rounded-full">
                        Reddedildi
                      </span>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div class="text-sm text-gray-600">
                      <span class="font-semibold">Başvuru Tarihi:</span> {{ application.appliedDate }}
                    </div>
                    <div class="flex gap-2">
                      <button v-if="application.status === 'accepted'" @click="viewProperty(application.propertyId)" class="px-4 py-2 bg-corporate-blue text-white rounded-lg hover:bg-corporate-navy transition-colors text-sm font-bold">
                        İlanı Görüntüle
                      </button>
                      <button v-else-if="application.status === 'pending'" class="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg text-sm font-bold cursor-not-allowed">
                        Yanıt Bekleniyor
                      </button>
                    </div>
                  </div>
                </div>
                
                <div v-if="applications.length === 0" class="text-center py-12 text-gray-500">
                  <svg class="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                  </svg>
                  <p class="font-semibold">Henüz talip olduğunuz ilan yok</p>
                  <p class="text-sm mt-2">Kullanıcı ilanlarına talip olarak portföyünüzü genişletebilirsiniz</p>
                </div>
              </div>
            </div>

            <!-- Agenda Tab -->
            <div v-if="activeTab === 'agenda'" class="bg-white rounded-xl shadow-corporate-lg p-8 border border-corporate-gray">
              <div class="flex items-center justify-between mb-6">
                <h3 class="text-2xl font-bold text-corporate-navy font-heading">Ajandanım</h3>
                <button @click="showAddSlotModal = true" class="bg-gradient-to-r from-corporate-navy to-corporate-blue text-white px-4 py-2 rounded-lg hover:from-corporate-blue hover:to-corporate-light-blue font-bold text-sm shadow-corporate">
                  + Müsaitlik Ekle
                </button>
              </div>

              <!-- Calendar View -->
              <div class="mb-6">
                <div class="flex items-center justify-between mb-4">
                  <h4 class="text-lg font-bold text-corporate-navy font-heading">{{ currentMonth }}</h4>
                  <div class="flex space-x-2">
                    <button @click="previousMonth" class="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                      </svg>
                    </button>
                    <button @click="nextMonth" class="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </button>
                  </div>
                </div>

                <!-- Calendar Grid -->
                <div class="grid grid-cols-7 gap-2">
                  <!-- Day Headers -->
                  <div v-for="day in ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz']" :key="day" class="text-center text-sm font-bold text-corporate-navy p-2 font-body">
                    {{ day }}
                  </div>
                  
                  <!-- Calendar Days -->
                  <div v-for="day in calendarDays" :key="day.date" 
                    :class="[
                      'text-center p-3 rounded-lg cursor-pointer border-2 transition-all',
                      day.isToday ? 'border-corporate-blue bg-corporate-blue/10' : 'border-gray-200 hover:border-corporate-blue',
                      day.hasAvailability ? 'bg-green-50' : '',
                      !day.isCurrentMonth ? 'opacity-40' : ''
                    ]"
                    @click="selectDay(day)"
                  >
                    <div class="text-sm font-bold" :class="day.isToday ? 'text-corporate-blue' : 'text-corporate-navy'">{{ day.day }}</div>
                    <div v-if="day.hasAvailability" class="text-xs text-green-600 font-bold mt-1">Müsait</div>
                  </div>
                </div>
              </div>

              <!-- Available Time Slots -->
              <div class="mt-6">
                <h4 class="text-lg font-bold text-corporate-navy mb-4 font-heading">Müsaitlik Durumum</h4>
                <div class="space-y-3">
                  <div v-for="slot in availableSlots" :key="slot.id" class="flex items-center justify-between p-4 bg-green-50 rounded-lg border-2 border-green-200">
                    <div class="flex items-center space-x-3">
                      <div class="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </div>
                      <div>
                        <p class="font-bold text-corporate-navy font-body">{{ slot.date }}</p>
                        <p class="text-sm text-gray-600 font-body">{{ slot.time }}</p>
                      </div>
                    </div>
                    <button @click="removeSlot(slot.id)" class="text-red-600 hover:text-red-700 p-2 rounded-lg hover:bg-red-50 transition-all">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                      </svg>
                    </button>
                  </div>

                  <div v-if="availableSlots.length === 0" class="text-center py-8 text-gray-500 font-body">
                    Henüz müsaitlik eklenmemiş. "Müsaitlik Ekle" butonuna tıklayarak randevu saatlerinizi belirleyin.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Add Availability Modal -->
    <div v-if="showAddSlotModal" class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-2xl shadow-corporate-xl max-w-md w-full p-6">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-2xl font-bold text-corporate-navy font-heading">Müsaitlik Ekle</h3>
          <button @click="closeAddSlotModal" class="text-gray-400 hover:text-gray-600">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <div class="space-y-4">
          <div>
            <label class="block text-sm font-bold text-corporate-navy mb-2 font-body">Tarih</label>
            <input type="date" v-model="newSlot.date" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent font-body">
          </div>

          <div>
            <label class="block text-sm font-bold text-corporate-navy mb-2 font-body">Başlangıç Saati</label>
            <input type="time" v-model="newSlot.startTime" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent font-body">
          </div>

          <div>
            <label class="block text-sm font-bold text-corporate-navy mb-2 font-body">Bitiş Saati</label>
            <input type="time" v-model="newSlot.endTime" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent font-body">
          </div>
        </div>

        <div class="flex space-x-3 mt-6">
          <button @click="closeAddSlotModal" class="flex-1 px-4 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-bold transition-all font-body">
            İptal
          </button>
          <button @click="addSlot" class="flex-1 px-4 py-3 bg-gradient-to-r from-corporate-navy to-corporate-blue text-white rounded-lg hover:from-corporate-blue hover:to-corporate-light-blue font-bold transition-all shadow-corporate font-body">
            Ekle
          </button>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { useAuthStore } from '~/stores/auth'

const authStore = useAuthStore()
const isUpdating = ref(false)
const activeTab = ref('profile')
const showAddSlotModal = ref(false)

// Company name for display
const companyName = ref('Yılmaz Emlak')

const profileForm = ref({
  // Company Info (Public)
  companyName: 'Yılmaz Emlak',
  taxNumber: '1234567890',
  taxOffice: 'Kadıköy',
  phone: '+90 532 123 45 67',
  email: authStore.user?.email || '',
  address: 'Caferağa Mahallesi, Moda Caddesi No: 123/A, Kadıköy, İstanbul',
  specialty: 'Kadıköy, Beşiktaş, Üsküdar',
  about: '2010 yılından beri Kadıköy ve çevresinde hizmet veren güvenilir emlak ofisidir.',
  
  // Authorized Person (Private)
  firstName: authStore.user?.firstName || '',
  lastName: authStore.user?.lastName || ''
})

// Applications data
const applications = ref([
  {
    id: 1,
    propertyId: 2,
    propertyTitle: '2+1 Modern Daire, Etiler',
    location: 'Etiler, Beşiktaş, İstanbul',
    price: '₺3,200,000',
    status: 'pending', // 'pending' | 'accepted' | 'rejected'
    appliedDate: '10 Ekim 2024'
  },
  {
    id: 2,
    propertyId: 4,
    propertyTitle: '3+1 Daire, Fenerbahçe',
    location: 'Fenerbahçe, Kadıköy, İstanbul',
    price: '₺2,800,000',
    status: 'accepted',
    appliedDate: '8 Ekim 2024'
  },
  {
    id: 3,
    propertyId: 6,
    propertyTitle: '3+1 Daire, Mecidiyeköy',
    location: 'Mecidiyeköy, Şişli, İstanbul',
    price: '₺2,300,000',
    status: 'pending',
    appliedDate: '12 Ekim 2024'
  },
  {
    id: 4,
    propertyId: 8,
    propertyTitle: '2+1 Daire, Ataşehir',
    location: 'Ataşehir, İstanbul',
    price: '₺2,100,000',
    status: 'rejected',
    appliedDate: '5 Ekim 2024'
  },
  {
    id: 5,
    propertyId: 10,
    propertyTitle: '4+2 Villa, Göktürk',
    location: 'Göktürk, İstanbul',
    price: '₺8,500,000',
    status: 'pending',
    appliedDate: '14 Ekim 2024'
  }
])

const viewProperty = (propertyId) => {
  navigateTo(`/property/${propertyId}`)
}

// Agenda functionality
const currentDate = ref(new Date())
const availableSlots = ref([
  { id: 1, date: '15 Ekim 2025, Çarşamba', time: '10:00 - 11:00' },
  { id: 2, date: '15 Ekim 2025, Çarşamba', time: '14:00 - 15:30' },
  { id: 3, date: '16 Ekim 2025, Perşembe', time: '09:00 - 10:00' },
  { id: 4, date: '17 Ekim 2025, Cuma', time: '15:00 - 17:00' },
])

const newSlot = ref({
  date: '',
  startTime: '',
  endTime: ''
})

const currentMonth = computed(() => {
  const months = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık']
  return `${months[currentDate.value.getMonth()]} ${currentDate.value.getFullYear()}`
})

const calendarDays = computed(() => {
  const year = currentDate.value.getFullYear()
  const month = currentDate.value.getMonth()
  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)
  const today = new Date()
  
  const days = []
  const startDay = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1
  
  // Previous month days
  for (let i = startDay - 1; i >= 0; i--) {
    const date = new Date(year, month, -i)
    days.push({
      day: date.getDate(),
      date: date,
      isCurrentMonth: false,
      isToday: false,
      hasAvailability: false
    })
  }
  
  // Current month days
  for (let i = 1; i <= lastDay.getDate(); i++) {
    const date = new Date(year, month, i)
    const isToday = date.toDateString() === today.toDateString()
    const hasAvailability = Math.random() > 0.7 // Simulated availability
    
    days.push({
      day: i,
      date: date,
      isCurrentMonth: true,
      isToday: isToday,
      hasAvailability: hasAvailability
    })
  }
  
  // Next month days
  const remainingDays = 35 - days.length
  for (let i = 1; i <= remainingDays; i++) {
    const date = new Date(year, month + 1, i)
    days.push({
      day: i,
      date: date,
      isCurrentMonth: false,
      isToday: false,
      hasAvailability: false
    })
  }
  
  return days
})

const previousMonth = () => {
  currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() - 1, 1)
}

const nextMonth = () => {
  currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() + 1, 1)
}

const selectDay = (day) => {
  console.log('Selected day:', day)
  // Here you can show available time slots for this day
}

const addSlot = () => {
  if (!newSlot.value.date || !newSlot.value.startTime || !newSlot.value.endTime) {
    alert('Lütfen tüm alanları doldurun')
    return
  }
  
  const dateObj = new Date(newSlot.value.date)
  const options = { day: 'numeric', month: 'long', year: 'numeric', weekday: 'long' }
  const formattedDate = dateObj.toLocaleDateString('tr-TR', options)
  
  availableSlots.value.push({
    id: Date.now(),
    date: formattedDate,
    time: `${newSlot.value.startTime} - ${newSlot.value.endTime}`
  })
  
  closeAddSlotModal()
}

const removeSlot = (id) => {
  if (confirm('Bu müsaitliği silmek istediğinize emin misiniz?')) {
    availableSlots.value = availableSlots.value.filter(slot => slot.id !== id)
  }
}

const closeAddSlotModal = () => {
  showAddSlotModal.value = false
  newSlot.value = { date: '', startTime: '', endTime: '' }
}

const updateProfile = async () => {
  isUpdating.value = true
  try {
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Update company name
    companyName.value = profileForm.value.companyName
    
    // Update authorized person (private)
    if (authStore.user) {
      authStore.user.firstName = profileForm.value.firstName
      authStore.user.lastName = profileForm.value.lastName
    }
    
    alert('Şirket bilgileri başarıyla güncellendi!')
  } catch (error) {
    alert('Bilgiler güncellenirken bir hata oluştu')
  } finally {
    isUpdating.value = false
  }
}
</script>