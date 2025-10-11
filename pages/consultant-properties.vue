<template>
  <NuxtLayout name="default">
    <div class="min-h-screen bg-corporate-gray-light py-8">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Page Header -->
        <div class="mb-8">
          <h1 class="text-4xl font-bold text-corporate-navy font-heading">Portföy İlanlarım</h1>
          <p class="text-gray-600 mt-2 text-lg font-body">Kendi portföyünüzdeki gayrimenkul ilanlarınızı yönetin</p>
        </div>

        <div class="max-w-5xl mx-auto">
          <!-- Property Listings -->
          <div>
            <div class="bg-white rounded-xl shadow-corporate-lg border border-corporate-gray">
              <div class="p-6 border-b border-gray-200">
                <div class="flex justify-between items-center mb-6">
                  <h2 class="text-2xl font-bold text-corporate-navy font-heading">Portföy Gayrimenkulleri</h2>
                  <button @click="addNewProperty" class="bg-gradient-to-r from-corporate-navy to-corporate-blue text-white px-6 py-3 rounded-lg hover:from-corporate-blue hover:to-corporate-light-blue transition-all font-bold shadow-corporate">
                    + Yeni İlan Ekle
                  </button>
                </div>
                
                <!-- Tabs -->
                <div class="mb-4">
                  <h3 class="text-sm font-bold text-gray-700 mb-3">Durum Filtresi</h3>
                  <v-tabs 
                    v-model="statusFilter" 
                    color="corporate-blue"
                    align-tabs="start"
                    class="property-tabs"
                  >
                    <v-tab value="active" class="font-semibold">
                      <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      Aktif ({{ properties.filter(p => p.status === 'active').length }})
                    </v-tab>
                    <v-tab value="passive" class="font-semibold">
                      <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path>
                      </svg>
                      Pasif ({{ properties.filter(p => p.status === 'passive').length }})
                    </v-tab>
                    <v-tab value="sold" class="font-semibold">
                      <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Satıldı ({{ properties.filter(p => p.status === 'sold').length }})
                    </v-tab>
                  </v-tabs>
                </div>

                <!-- Source Filter -->
                <div>
                  <h3 class="text-sm font-bold text-gray-700 mb-3">İlan Kaynağı</h3>
                  <v-tabs 
                    v-model="sourceFilter" 
                    color="purple"
                    align-tabs="start"
                    class="property-tabs"
                  >
                    <v-tab value="own" class="font-semibold">
                      <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                      </svg>
                      Kendi İlanlarım ({{ properties.filter(p => p.source === 'own').length }})
                    </v-tab>
                    <v-tab value="received" class="font-semibold">
                      <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"></path>
                      </svg>
                      Alınan Portföyler ({{ properties.filter(p => p.source === 'received').length }})
                    </v-tab>
                    <v-tab value="shared" class="font-semibold">
                      <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                      </svg>
                      Paylaşılan Portföy ({{ properties.filter(p => p.source === 'own' && p.sharingEnabled === true).length }})
                    </v-tab>
                  </v-tabs>
                </div>
              </div>

              <div class="divide-y divide-gray-200">
                <!-- Dynamic Property List -->
                <div 
                  v-for="property in filteredProperties" 
                  :key="property.id" 
                  class="p-6 hover:bg-gray-50 transition-colors"
                  :class="{ 'bg-green-50/50': property.status === 'sold' }"
                >
                  <div class="flex items-start space-x-4">
                    <div 
                      class="w-32 h-32 rounded-xl flex items-center justify-center flex-shrink-0 cursor-pointer overflow-hidden border-2 border-corporate-gray" 
                      :class="property.status === 'sold' 
                        ? 'bg-gradient-to-br from-green-200 to-green-300' 
                        : 'bg-gradient-to-br from-corporate-blue/20 to-corporate-blue/30'"
                      @click="viewProperty(property.id)"
                    >
                      <img v-if="property.image" :src="property.image" alt="Property" class="w-full h-full object-cover">
                      <svg 
                        v-else-if="property.status === 'sold'" 
                        class="w-12 h-12 text-green-600" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <svg 
                        v-else
                        class="w-12 h-12 text-corporate-blue" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                      </svg>
                    </div>
                    <div class="flex-1 min-w-0">
                      <div class="flex items-center justify-between cursor-pointer" @click="viewProperty(property.id)">
                        <div class="flex items-center gap-2">
                          <h3 class="text-xl font-bold text-corporate-navy font-heading hover:text-corporate-blue transition-colors">{{ property.title }}</h3>
                          <!-- Source Badge -->
                          <span 
                            v-if="property.source === 'own' && property.sharingEnabled === true"
                            class="inline-flex items-center px-2 py-1 rounded-full text-xs font-bold bg-teal-100 text-teal-800 border border-teal-300"
                          >
                            <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 20 20">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                            </svg>
                            Paylaşımda
                          </span>
                          <span 
                            v-else-if="property.source === 'received'"
                            class="inline-flex items-center px-2 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-800 border border-purple-300"
                          >
                            <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                            </svg>
                            Alınan
                          </span>
                        </div>
                        <span 
                          class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold"
                          :class="{
                            'bg-green-100 text-green-800': property.status === 'active',
                            'bg-gray-100 text-gray-800': property.status === 'passive',
                            'bg-green-100 text-green-800 border-2 border-green-300': property.status === 'sold'
                          }"
                        >
                          <span v-if="property.status === 'active'">Aktif</span>
                          <span v-else-if="property.status === 'passive'">Pasif</span>
                          <span v-else-if="property.status === 'sold'">✓ Satıldı</span>
                        </span>
                      </div>
                      <p 
                        class="text-2xl font-bold mt-1"
                        :class="property.status === 'sold' ? 'text-green-600' : 'text-corporate-blue'"
                      >
                        ₺{{ property.price.toLocaleString('tr-TR') }}
                      </p>
                      <div class="flex items-center text-gray-600 text-sm mt-2 font-body">
                        <span class="mr-4">{{ property.bedrooms }} Yatak</span>
                        <span class="mr-4">{{ property.bathrooms }} Banyo</span>
                        <span class="mr-4">{{ property.area }} m²</span>
                        <span>{{ property.location }}</span>
                      </div>

                      <!-- Received Portfolio Info -->
                      <div 
                        v-if="property.source === 'received' && (property.receivedFromUser || property.receivedFromRealtor)"
                        class="mt-3 p-3 bg-purple-50 rounded-lg border border-purple-200"
                      >
                        <div class="flex items-center gap-2">
                          <div class="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-500 rounded-full flex items-center justify-center">
                            <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"></path>
                            </svg>
                          </div>
                          <div>
                            <p class="text-xs font-medium text-purple-700">
                              {{ property.receivedFromUser ? 'Portföy Sahibi (Kullanıcı)' : 'Portföy Veren Emlakçı' }}
                            </p>
                            <p class="text-sm font-bold text-corporate-navy">
                              {{ property.receivedFromUser || property.receivedFromRealtor }}
                            </p>
                          </div>
                        </div>
                      </div>

                      <!-- Sharing Status (Only for own properties) -->
                      <div 
                        v-if="property.source === 'own' && property.sharingEnabled !== null"
                        class="mt-3 p-3 rounded-lg border"
                        :class="property.sharingEnabled 
                          ? 'bg-teal-50 border-teal-300' 
                          : 'bg-slate-50 border-slate-300'"
                      >
                        <div class="flex items-center justify-between">
                          <div class="flex items-center gap-2">
                            <div class="w-8 h-8 rounded-full flex items-center justify-center"
                              :class="property.sharingEnabled 
                                ? 'bg-gradient-to-br from-teal-600 to-teal-500' 
                                : 'bg-gradient-to-br from-slate-600 to-slate-500'"
                            >
                              <svg v-if="property.sharingEnabled" class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                              </svg>
                              <svg v-else class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                              </svg>
                            </div>
                            <div>
                              <p class="text-xs font-medium"
                                :class="property.sharingEnabled ? 'text-teal-700' : 'text-slate-700'"
                              >
                                Portföy Paylaşımı
                              </p>
                              <p class="text-sm font-bold"
                                :class="property.sharingEnabled ? 'text-teal-900' : 'text-slate-900'"
                              >
                                {{ property.sharingEnabled ? 'Paylaşıma Açık' : 'Paylaşıma Kapalı' }}
                              </p>
                            </div>
                          </div>
                          <button 
                            @click.stop="toggleSharing(property.id)" 
                            class="text-sm font-semibold flex items-center gap-1 transition-colors"
                            :class="property.sharingEnabled 
                              ? 'text-slate-700 hover:text-slate-800' 
                              : 'text-teal-700 hover:text-teal-800'"
                          >
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
                            </svg>
                            {{ property.sharingEnabled ? 'Kapat' : 'Aç' }}
                          </button>
                        </div>
                      </div>

                      <div class="flex items-center justify-between mt-4">
                        <div class="text-sm text-gray-500 font-body">
                          <svg class="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                          {{ property.addedDate }}
                        </div>
                        <div class="flex space-x-3">
                          <button 
                            v-if="property.status !== 'sold'"
                            @click.stop="togglePassiveStatus(property.id)" 
                            class="text-sm font-semibold flex items-center gap-1"
                            :class="property.status === 'passive' ? 'text-green-600 hover:text-green-700' : 'text-orange-600 hover:text-orange-700'"
                          >
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path v-if="property.status === 'passive'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path>
                            </svg>
                            {{ property.status === 'passive' ? 'Aktife Al' : 'Pasife Al' }}
                          </button>
                          <button 
                            @click.stop="viewProperty(property.id)" 
                            class="bg-gradient-to-r from-corporate-navy to-corporate-blue text-white px-4 py-2 rounded-lg hover:from-corporate-blue hover:to-corporate-light-blue text-sm font-bold shadow-corporate"
                          >
                            İlan Detayı
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- Empty State -->
                <div v-if="filteredProperties.length === 0" class="p-12 text-center">
                  <svg class="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path>
                  </svg>
                  <p class="text-gray-600 text-lg font-body">Bu kategoride ilan bulunamadı.</p>
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
import { useAuthStore } from '~/stores/auth'

const authStore = useAuthStore()

// Redirect if not a consultant
onMounted(() => {
  if (!authStore.user?.isConsultant) {
    navigateTo('/my-listings')
  }
})

// Filter states
const statusFilter = ref('active')
const sourceFilter = ref('all')

// Mock properties data - Emlakçının portföy ilanları
const properties = ref([
  {
    id: '1',
    title: '3+1 Daire, Kadıköy',
    price: 2450000,
    status: 'active', // active, sold
    source: 'received', // own, received, shared
    bedrooms: 3,
    bathrooms: 1,
    area: 120,
    location: 'Kadıköy, İstanbul',
    addedDate: '2 gün önce alındı',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop',
    receivedFromUser: 'Ahmet Yılmaz', // Kullanıcıdan alınan portföy
    receivedFromRealtor: null,
    sharingEnabled: null
  },
  {
    id: '2',
    title: '2+1 Daire, Fenerbahçe',
    price: 1850000,
    status: 'active',
    source: 'received',
    bedrooms: 2,
    bathrooms: 1,
    area: 95,
    location: 'Fenerbahçe, İstanbul',
    addedDate: '5 gün önce alındı',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
    receivedFromUser: null,
    receivedFromRealtor: 'Demir Emlak', // Emlakçıdan alınan portföy
    sharingEnabled: null
  },
  {
    id: '3',
    title: '4+2 Villa, Göktürk',
    price: 8500000,
    status: 'active',
    source: 'own',
    bedrooms: 4,
    bathrooms: 3,
    area: 350,
    location: 'Göktürk, İstanbul',
    addedDate: '1 hafta önce eklendi',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop',
    receivedFromUser: null,
    receivedFromRealtor: null,
    sharingEnabled: true // Portföy paylaşımına açık
  },
  {
    id: '4',
    title: '3+1 Daire, Mecidiyeköy',
    price: 2300000,
    status: 'sold',
    source: 'received',
    bedrooms: 3,
    bathrooms: 2,
    area: 110,
    location: 'Mecidiyeköy, Şişli',
    addedDate: '3 hafta önce satıldı',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop',
    receivedFromUser: 'Mehmet Kaya',
    receivedFromRealtor: null,
    sharingEnabled: null
  },
  {
    id: '5',
    title: '2+1 Modern Daire, Etiler',
    price: 3200000,
    status: 'active',
    source: 'own',
    bedrooms: 2,
    bathrooms: 1,
    area: 105,
    location: 'Etiler, Beşiktaş',
    addedDate: '10 gün önce eklendi',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop',
    receivedFromUser: null,
    receivedFromRealtor: null,
    sharingEnabled: true // Portföy paylaşımına açık - diğer emlakçılar görebilir
  },
  {
    id: '6',
    title: '1+1 Stüdyo, Nişantaşı',
    price: 2800000,
    status: 'active',
    source: 'own',
    bedrooms: 1,
    bathrooms: 1,
    area: 65,
    location: 'Nişantaşı, Şişli',
    addedDate: '4 gün önce eklendi',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop',
    receivedFromUser: null,
    receivedFromRealtor: null,
    sharingEnabled: false // Portföy paylaşımına kapalı
  },
  {
    id: '7',
    title: '3+1 Deniz Manzaralı, Suadiye',
    price: 4500000,
    status: 'active',
    source: 'received',
    bedrooms: 3,
    bathrooms: 2,
    area: 145,
    location: 'Suadiye, Kadıköy',
    addedDate: '1 gün önce alındı',
    image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=400&h=300&fit=crop',
    receivedFromUser: null,
    receivedFromRealtor: 'Premium Emlak', // Başka emlakçıdan alınan portföy
    sharingEnabled: null
  },
  {
    id: '8',
    title: '2+1 Daire, Bostancı',
    price: 1950000,
    status: 'passive',
    source: 'own',
    bedrooms: 2,
    bathrooms: 1,
    area: 95,
    location: 'Bostancı, İstanbul',
    addedDate: '2 hafta önce pasife alındı',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop',
    receivedFromUser: null,
    receivedFromRealtor: null,
    sharingEnabled: false
  }
])

// Filter properties based on status and source
const filteredProperties = computed(() => {
  let filtered = properties.value.filter(p => p.status === statusFilter.value)
  
  if (sourceFilter.value === 'own') {
    filtered = filtered.filter(p => p.source === 'own')
  } else if (sourceFilter.value === 'received') {
    filtered = filtered.filter(p => p.source === 'received')
  } else if (sourceFilter.value === 'shared') {
    // Paylaşılan portföy = Kendi ilanlarından paylaşıma açık olanlar
    filtered = filtered.filter(p => p.source === 'own' && p.sharingEnabled === true)
  }
  // 'all' için tümünü göster
  
  return filtered
})

const viewProperty = (propertyId) => {
  navigateTo(`/property/${propertyId}`)
}

const addNewProperty = () => {
  alert('Yeni ilan ekleme özelliği yakında eklenecek!')
}

const togglePassiveStatus = (propertyId) => {
  const property = properties.value.find(p => p.id === propertyId)
  if (!property) return
  
  if (property.status === 'passive') {
    // Pasiften aktife alma
    if (confirm('Bu ilanı tekrar aktif hale getirmek istiyor musunuz?')) {
      property.status = 'active'
      alert('İlan başarıyla aktif hale getirildi.')
    }
  } else if (property.status === 'active') {
    // Aktiften pasife alma
    if (confirm('Bu ilanı pasif duruma almak istiyor musunuz?\n\nİlan yayından kaldırılacak ancak bilgileri korunacak.')) {
      property.status = 'passive'
      alert('İlan pasif duruma alındı. İstediğiniz zaman tekrar aktif edebilirsiniz.')
    }
  }
}

const toggleSharing = (propertyId) => {
  const property = properties.value.find(p => p.id === propertyId)
  if (!property || property.source !== 'own') return
  
  if (property.sharingEnabled) {
    if (confirm('Bu ilanı portföy paylaşımından kaldırmak istiyor musunuz?\n\nDiğer emlakçılar bu ilanı artık göremeyecek.')) {
      property.sharingEnabled = false
      alert('İlan portföy paylaşımından kaldırıldı. Sadece sizin tarafınızdan yönetiliyor.')
    }
  } else {
    if (confirm('Bu ilanı portföy paylaşımına açmak istiyor musunuz?\n\nDiğer emlakçılar bu ilanı görebilecek ve müşterilerine sunabilecek.')) {
      property.sharingEnabled = true
      alert('İlan portföy paylaşımına açıldı. Diğer emlakçılar bu ilanı artık görebilir.')
    }
  }
}
</script>
