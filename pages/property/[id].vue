<template>
  <NuxtLayout name="default">
    <div class="min-h-screen bg-gray-50 py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Property Header -->
        <div class="bg-white rounded-xl shadow-corporate-lg p-8 mb-8 border border-corporate-gray">
          <div class="flex flex-col lg:flex-row gap-8">
            <!-- Property Image -->
            <div class="lg:w-1/2">
              <div class="relative w-full h-80 bg-gradient-to-br from-corporate-navy to-corporate-blue rounded-xl overflow-hidden group">
                <img v-if="property.image" :src="property.image" :alt="property.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                <div v-else class="w-full h-full flex items-center justify-center">
                  <svg class="w-24 h-24 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                  </svg>
                </div>
                
                <!-- Badges on Image -->
                <div class="absolute top-4 left-4 flex flex-col gap-2">
                  <span 
                    class="px-3 py-1 rounded-full text-xs font-bold shadow-corporate"
                    :class="property.status === 'Satılık' ? 'bg-green-500 text-white' : property.status === 'Kiralık' ? 'bg-blue-500 text-white' : 'bg-gray-500 text-white'"
                  >
                    {{ property.status }}
                  </span>
                  
                  <span 
                    v-if="property.listingType === 'both'"
                    class="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-corporate flex items-center gap-1"
                  >
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
                    </svg>
                    Portföy + Satış
                  </span>
                  
                  <span 
                    v-if="property.source === 'user'"
                    class="bg-white/90 text-corporate-navy px-3 py-1 rounded-full text-xs font-bold shadow-corporate flex items-center gap-1"
                  >
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                    Kullanıcı İlanı
                  </span>
                </div>
              </div>
            </div>

            <!-- Property Info -->
            <div class="lg:w-1/2">
              <div class="mb-4">
                <h1 class="text-2xl font-bold text-corporate-navy mb-2 font-heading">{{ property.title }}</h1>
                <div class="flex items-center gap-1 text-gray-600 font-body text-sm">
                  <svg class="w-4 h-4 text-corporate-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  {{ property.location }}
                </div>
              </div>
              
              <div class="bg-gradient-to-r from-corporate-navy to-corporate-blue p-4 rounded-xl mb-4 shadow-corporate">
                <p class="text-xs text-white/80 mb-1 font-body">Fiyat</p>
                <p class="text-2xl font-bold text-white">{{ property.price }}</p>
              </div>
              
              <!-- Property Stats -->
              <div class="grid grid-cols-2 gap-3 mb-6">
                <div class="bg-gray-50 p-3 rounded-lg border border-gray-200">
                  <div class="flex items-center text-corporate-blue mb-1">
                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path>
                    </svg>
                    <span class="text-xs font-bold text-gray-500 uppercase">Alan</span>
                  </div>
                  <p class="text-lg font-bold text-corporate-navy">{{ property.area }} m²</p>
                </div>
                
                <div class="bg-gray-50 p-3 rounded-lg border border-gray-200">
                  <div class="flex items-center text-corporate-blue mb-1">
                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                    </svg>
                    <span class="text-xs font-bold text-gray-500 uppercase">Oda Sayısı</span>
                  </div>
                  <p class="text-lg font-bold text-corporate-navy">{{ property.bedrooms }}+{{ property.bathrooms }}</p>
                </div>
                
                <div class="bg-gray-50 p-3 rounded-lg border border-gray-200">
                  <div class="flex items-center text-corporate-blue mb-1">
                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                    </svg>
                    <span class="text-xs font-bold text-gray-500 uppercase">Bina Yaşı</span>
                  </div>
                  <p class="text-lg font-bold text-corporate-navy">{{ property.buildingAge || '5' }} Yıl</p>
                </div>
                
                <div class="bg-gray-50 p-3 rounded-lg border border-gray-200">
                  <div class="flex items-center text-corporate-blue mb-1">
                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                    </svg>
                    <span class="text-xs font-bold text-gray-500 uppercase">Kat</span>
                  </div>
                  <p class="text-lg font-bold text-corporate-navy">{{ property.floor || '3' }}/{{ property.totalFloors || '8' }}</p>
                </div>
              </div>

              <!-- Owner/Realtor Info -->
              <div 
                v-if="property.source === 'realtor' && property.consultant"
                class="p-5 bg-gradient-to-r from-corporate-navy/5 to-corporate-blue/5 rounded-xl border-2 border-corporate-blue/20 mb-6"
              >
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <div class="w-12 h-12 bg-gradient-to-br from-corporate-navy to-corporate-blue rounded-full flex items-center justify-center mr-3 shadow-corporate">
                      <span class="text-white text-sm font-bold">{{ property.consultantInitials || 'AY' }}</span>
                    </div>
                    <div>
                      <p class="text-xs font-bold text-gray-500 uppercase mb-1">Emlakçı</p>
                      <p class="text-lg font-bold text-corporate-navy">{{ property.consultant }}</p>
                      <p class="text-xs text-gray-600">{{ property.consultantTitle }}</p>
                    </div>
                  </div>
                  <button 
                    @click="viewConsultant(property.consultantSlug)" 
                    class="bg-corporate-blue text-white px-4 py-2 rounded-lg hover:bg-corporate-navy transition-colors text-sm font-bold flex items-center gap-1 shadow-corporate"
                  >
                    Profil
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
              
              <!-- User Listing - Applicants Section -->
              <div 
                v-else-if="property.source === 'user'"
                class="mb-6"
              >
                <!-- Selected Realtor -->
                <div 
                  v-if="property.selectedRealtor"
                  class="p-5 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border-2 border-green-200 mb-4"
                >
                  <div class="flex items-center justify-between">
                    <div class="flex items-center">
                      <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mr-3 shadow-corporate">
                        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <div>
                        <p class="text-xs font-bold text-green-600 uppercase mb-1">Seçilen Emlakçı</p>
                        <p class="text-lg font-bold text-corporate-navy">{{ property.selectedRealtor.name }}</p>
                        <p class="text-xs text-gray-600">İlanınızı yönetiyor</p>
                      </div>
                    </div>
                    <div class="flex gap-2">
                      <button class="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors text-sm font-bold shadow-corporate">
                        Profil
                      </button>
                      <button class="bg-corporate-blue text-white px-4 py-2 rounded-lg hover:bg-corporate-navy transition-colors text-sm font-bold shadow-corporate">
                        İletişim
                      </button>
                    </div>
                  </div>
                </div>
                
                <!-- Applicants -->
                <div 
                  v-else-if="property.applicants && property.applicants.length > 0"
                  class="p-5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border-2 border-blue-200"
                >
                  <div class="flex items-center justify-between">
                    <div class="flex items-center">
                      <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mr-3 shadow-corporate">
                        <span class="text-white text-lg font-bold">{{ property.applicants.length }}</span>
                      </div>
                      <div>
                        <p class="text-xs font-bold text-blue-600 uppercase mb-1">Talip Olan Emlakçılar</p>
                        <p class="text-lg font-bold text-corporate-navy">{{ property.applicants.length }} emlakçı ilgilenmiş</p>
                        <p class="text-xs text-gray-600">Birini seçerek ilanınızı yönetmesini sağlayabilirsiniz</p>
                      </div>
                    </div>
                    <button class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors text-sm font-bold shadow-corporate flex items-center gap-2">
                      Talipleri Gör
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                
                <!-- No Applicants Yet -->
                <div 
                  v-else
                  class="p-5 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl border-2 border-yellow-200"
                >
                  <div class="flex items-center">
                    <div class="w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-400 rounded-full flex items-center justify-center mr-3 shadow-corporate">
                      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <p class="text-xs font-bold text-yellow-600 uppercase mb-1">Emlakçı Bekleniyor</p>
                      <p class="text-lg font-bold text-corporate-navy">Henüz talip olan emlakçı yok</p>
                      <p class="text-xs text-gray-600">İlanınız yayında, emlakçılar başvurabilir</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Action Buttons -->
              <div class="flex flex-wrap gap-3">
                <button class="bg-gradient-to-r from-corporate-navy to-corporate-blue text-white px-6 py-3 rounded-lg hover:from-corporate-blue hover:to-corporate-light-blue transition-all font-bold flex items-center gap-2 shadow-corporate">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                  </svg>
                  İlanı Düzenle
                </button>
                <button class="bg-white text-corporate-navy border-2 border-corporate-navy px-6 py-3 rounded-lg hover:bg-corporate-navy hover:text-white transition-all font-bold flex items-center gap-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                  </svg>
                  Paylaş
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <!-- Left Column - Property Details -->
          <div class="lg:col-span-2 space-y-6">
            <!-- Property Description -->
            <div class="bg-white rounded-xl shadow-corporate-lg p-6 border border-corporate-gray">
              <h2 class="text-xl font-bold text-corporate-navy mb-4 font-heading flex items-center gap-2">
                <svg class="w-5 h-5 text-corporate-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"></path>
                </svg>
                İlan Açıklaması
              </h2>
              <p class="text-gray-700 leading-relaxed text-sm font-body">{{ property.description }}</p>
            </div>

            <!-- Property Details Grid -->
            <div class="bg-white rounded-xl shadow-corporate-lg p-6 border border-corporate-gray">
              <h2 class="text-xl font-bold text-corporate-navy mb-4 font-heading flex items-center gap-2">
                <svg class="w-5 h-5 text-corporate-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                </svg>
                Detaylı Bilgiler
              </h2>
              <div class="grid grid-cols-2 gap-6">
                <div class="border-b border-gray-200 pb-4">
                  <p class="text-sm text-gray-500 mb-1 font-body">İlan Türü</p>
                  <p class="text-lg font-bold text-corporate-navy">{{ property.status }}</p>
                </div>
                <div class="border-b border-gray-200 pb-4">
                  <p class="text-sm text-gray-500 mb-1 font-body">Gayrimenkul Tipi</p>
                  <p class="text-lg font-bold text-corporate-navy">{{ property.propertyType || 'Daire' }}</p>
                </div>
                <div class="border-b border-gray-200 pb-4">
                  <p class="text-sm text-gray-500 mb-1 font-body">Brüt Alan</p>
                  <p class="text-lg font-bold text-corporate-navy">{{ property.area }} m²</p>
                </div>
                <div class="border-b border-gray-200 pb-4">
                  <p class="text-sm text-gray-500 mb-1 font-body">Net Alan</p>
                  <p class="text-lg font-bold text-corporate-navy">{{ property.netArea || (property.area - 15) }} m²</p>
                </div>
                <div class="border-b border-gray-200 pb-4">
                  <p class="text-sm text-gray-500 mb-1 font-body">Oda Sayısı</p>
                  <p class="text-lg font-bold text-corporate-navy">{{ property.bedrooms }}+{{ property.bathrooms }}</p>
                </div>
                <div class="border-b border-gray-200 pb-4">
                  <p class="text-sm text-gray-500 mb-1 font-body">Banyo Sayısı</p>
                  <p class="text-lg font-bold text-corporate-navy">{{ property.bathrooms }}</p>
                </div>
                <div class="border-b border-gray-200 pb-4">
                  <p class="text-sm text-gray-500 mb-1 font-body">Bina Yaşı</p>
                  <p class="text-lg font-bold text-corporate-navy">{{ property.buildingAge || '5' }} Yıl</p>
                </div>
                <div class="border-b border-gray-200 pb-4">
                  <p class="text-sm text-gray-500 mb-1 font-body">Kat Bilgisi</p>
                  <p class="text-lg font-bold text-corporate-navy">{{ property.floor || '3' }}/{{ property.totalFloors || '8' }}</p>
                </div>
                <div class="border-b border-gray-200 pb-4">
                  <p class="text-sm text-gray-500 mb-1 font-body">Isıtma</p>
                  <p class="text-lg font-bold text-corporate-navy">{{ property.heating || 'Kombi (Doğalgaz)' }}</p>
                </div>
                <div class="border-b border-gray-200 pb-4">
                  <p class="text-sm text-gray-500 mb-1 font-body">Cephe</p>
                  <p class="text-lg font-bold text-corporate-navy">{{ property.facade || 'Güney' }}</p>
                </div>
                <div class="border-b border-gray-200 pb-4">
                  <p class="text-sm text-gray-500 mb-1 font-body">Balkon</p>
                  <p class="text-lg font-bold text-corporate-navy">{{ property.balcony ? 'Var' : 'Yok' }}</p>
                </div>
                <div class="border-b border-gray-200 pb-4">
                  <p class="text-sm text-gray-500 mb-1 font-body">Kullanım Durumu</p>
                  <p class="text-lg font-bold text-corporate-navy">{{ property.usageStatus || 'Boş' }}</p>
                </div>
              </div>
            </div>
             
          </div>

          <!-- Right Column - Features -->
          <div class="lg:col-span-1 space-y-6">
            <!-- Property Features -->
            <div class="bg-white rounded-xl shadow-corporate-lg p-6 border border-corporate-gray">
              <h2 class="text-xl font-bold text-corporate-navy mb-4 font-heading flex items-center gap-2">
                <svg class="w-5 h-5 text-corporate-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Özellikler
              </h2>
              <div class="space-y-2">
                <div v-for="feature in property.features" :key="feature" class="flex items-center text-gray-700 bg-gray-50 p-2 rounded-lg border border-gray-200">
                  <svg class="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm font-semibold">{{ feature }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
const route = useRoute()
const propertyId = route.params.id

// Property data based on ID
const propertyData = {
  '1': {
    title: '3+1 Daire, Kadıköy',
    price: '₺2,450,000',
    status: 'Aktif',
    bedrooms: 3,
    bathrooms: 1,
    area: 120,
    location: 'Kadıköy, İstanbul',
    consultant: 'Ahmet Yılmaz',
    consultantSlug: 'ahmet-yilmaz',
    description: 'Kadıköy\'ün merkezi konumunda, ulaşım imkanlarına yakın, modern ve ferah 3+1 daire. Metro ve otobüs duraklarına yürüme mesafesinde. Alışveriş merkezleri, okullar ve hastanelere yakın konumda. Daire güney cepheli olup gün ışığını bol miktarda alır.',
    features: [
      'Balkon',
      'Asansör',
      'Güvenlik',
      'Otopark',
      'Kalorifer',
      'Klima',
      'Bulaşık Makinesi',
      'Çamaşır Makinesi',
      'Buzdolabı',
      'Televizyon',
      'İnternet',
      'Uydu'
    ]
  },
  '2': {
    title: '2+1 Modern Daire, Etiler',
    price: '₺3,200,000',
    status: 'Satılık',
    bedrooms: 2,
    bathrooms: 1,
    area: 95,
    netArea: 82,
    location: 'Etiler, Beşiktaş, İstanbul',
    source: 'user', // User listing
    listingType: 'sale-only',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
    propertyType: 'Daire',
    floor: 4,
    totalFloors: 10,
    buildingAge: 3,
    heating: 'Kombi (Doğalgaz)',
    facade: 'Güney-Batı',
    balcony: true,
    usageStatus: 'Boş',
    views: 312,
    favorites: 24,
    listingDate: '10 Ekim 2024',
    // User listing with applicants
    applicants: [
      { id: 1, name: 'Ahmet Yılmaz', rating: 4.8 },
      { id: 2, name: 'Mehmet Kaya', rating: 4.9 },
      { id: 3, name: 'Ayşe Demir', rating: 4.7 }
    ],
    description: 'Etiler\'in prestijli bölgesinde, modern ve ferah 2+1 daire. Geniş balkon ve şehir manzarası. Ulaşım imkanlarına yakın, alışveriş merkezleri, okullar ve hastanelere yürüme mesafesinde. Daire güney-batı cepheli olup gün ışığını bol miktarda alır. Site içerisinde 7/24 güvenlik, kapalı otopark ve sosyal tesisler bulunmaktadır.',
    features: [
      'Balkon',
      'Asansör',
      '7/24 Güvenlik',
      'Kapalı Otopark',
      'Kombi',
      'Klima',
      'Bulaşık Makinesi',
      'Çamaşır Makinesi',
      'Buzdolabı',
      'Ankastre Mutfak',
      'Laminat Parke',
      'PVC Pencere',
      'Duşakabin',
      'Hilton Banyo',
      'Amerikan Mutfak',
      'Geniş Balkon',
      'Şehir Manzarası',
      'Site İçerisinde',
      'Sosyal Tesis',
      'Spor Salonu',
      'Çocuk Oyun Parkı',
      'Yeşil Alan'
    ]
  },
  '3': {
    title: 'Villa, Şişli',
    price: '₺4,200,000',
    status: 'Satıldı',
    bedrooms: 4,
    bathrooms: 3,
    area: 280,
    location: 'Şişli, İstanbul',
    consultant: 'Mehmet Kaya',
    consultantSlug: 'mehmet-kaya',
    description: 'Şişli\'nin prestijli bölgesinde, geniş bahçeli, lüks villa. Modern mimari ve kaliteli malzemelerle inşa edilmiş. Özel otopark, bahçe ve teras alanları. Şehir merkezine yakın ama sakin bir konumda.',
    features: [
      'Bahçe',
      'Teras',
      'Otopark',
      'Güvenlik',
      'Klima',
      'Bulaşık Makinesi',
      'Çamaşır Makinesi',
      'Buzdolabı',
      'Televizyon',
      'İnternet',
      'Uydu',
      'Jakuzi',
      'Şömine'
    ]
  }
}

const property = propertyData[propertyId] || propertyData['1']

// Status class for styling (not used anymore but kept for compatibility)
const statusClass = computed(() => {
  switch (property.status) {
    case 'Satılık':
      return 'bg-green-100 text-green-800'
    case 'Kiralık':
      return 'bg-blue-100 text-blue-800'
    case 'Aktif':
      return 'bg-green-100 text-green-800'
    case 'Beklemede':
      return 'bg-yellow-100 text-yellow-800'
    case 'Satıldı':
      return 'bg-red-100 text-red-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
})

// Property activities
const propertyActivities = [
  {
    id: 1,
    userName: 'Ahmet Yılmaz',
    action: 'gayrimenkul için atandı',
    time: '2 saat önce',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    iconPath: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
  },
  {
    id: 2,
    userName: 'Mehmet Kaya',
    action: 'gayrimenkulü görüntüledi',
    time: '4 saat önce',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
    iconPath: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z'
  },

  {
    id: 5,
    userName: 'Sistem',
    action: 'gayrimenkul durumu güncellendi',
    time: '3 gün önce',
    iconBg: 'bg-gray-100',
    iconColor: 'text-gray-600',
    iconPath: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
  }
]

const viewConsultant = (consultantSlug) => {
  navigateTo(`/consultant/${consultantSlug}`)
}
</script>
