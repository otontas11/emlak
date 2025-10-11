<template>
  <NuxtLayout name="default">
    <div class="min-h-screen bg-gray-50 py-8">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Page Header -->
        <div class="mb-8">
          <h1 class="text-4xl font-bold text-corporate-navy font-heading">Satın Al</h1>
          <p class="text-gray-600 mt-2 text-lg font-body">İstediğiniz evi bulun ve hayalinizdeki eve kavuşun</p>
        </div>

        <!-- Search and Filters -->
        <div class="bg-white rounded-xl shadow-corporate-lg p-6 mb-8 border border-corporate-gray">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
            <!-- Location -->
            <div>
              <label class="block text-sm font-bold text-corporate-navy mb-2 font-body">Konum</label>
              <select class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent font-body">
                <option value="">Tüm İstanbul</option>
                <option value="kadikoy">Kadıköy</option>
                <option value="besiktas">Beşiktaş</option>
                <option value="sisli">Şişli</option>
                <option value="uskudar">Üsküdar</option>
                <option value="fatih">Fatih</option>
              </select>
            </div>

            <!-- Property Type -->
            <div>
              <label class="block text-sm font-bold text-corporate-navy mb-2 font-body">Gayrimenkul Türü</label>
              <select class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent font-body">
                <option value="">Tümü</option>
                <option value="apartment">Daire</option>
                <option value="house">Ev</option>
                <option value="villa">Villa</option>
              </select>
            </div>

            <!-- Price Range -->
            <div>
              <label class="block text-sm font-bold text-corporate-navy mb-2 font-body">Fiyat Aralığı</label>
              <select class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent font-body">
                <option value="">Tümü</option>
                <option value="0-1000000">0 - 1.000.000 ₺</option>
                <option value="1000000-2000000">1.000.000 - 2.000.000 ₺</option>
                <option value="2000000-3000000">2.000.000 - 3.000.000 ₺</option>
                <option value="3000000-5000000">3.000.000 - 5.000.000 ₺</option>
                <option value="5000000+">5.000.000+ ₺</option>
              </select>
            </div>

            <!-- Search Button -->
            <div class="flex items-end">
              <button class="w-full bg-gradient-to-r from-corporate-navy to-corporate-blue text-white px-6 py-3 rounded-lg hover:from-corporate-blue hover:to-corporate-light-blue transition-all font-bold shadow-corporate">
                Ara
              </button>
            </div>
          </div>
        </div>

        <!-- Results Count -->
        <div class="flex justify-between items-center mb-6">
          <p class="text-corporate-navy font-semibold font-body">
            <span class="text-2xl font-bold">{{ saleProperties.length }}</span> 
            <span class="text-gray-600">satılık ilan bulundu</span>
          </p>
          <div class="flex items-center space-x-2">
            <span class="text-sm text-gray-600 font-body">Sırala:</span>
            <select class="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent font-body">
              <option value="newest">En Yeni</option>
              <option value="price-low">Fiyat (Düşük-Yüksek)</option>
              <option value="price-high">Fiyat (Yüksek-Düşük)</option>
              <option value="area">Alan (Büyük-Küçük)</option>
            </select>
          </div>
        </div>

        <!-- Properties Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="property in saleProperties" :key="property.id" class="bg-white rounded-xl shadow-corporate-lg overflow-hidden hover:shadow-corporate-xl transition-all cursor-pointer border border-corporate-gray group" @click="viewProperty(property.id)">
            <!-- Property Image -->
            <div class="relative h-56 bg-gradient-to-br from-corporate-navy to-corporate-blue overflow-hidden">
              <img v-if="property.image" :src="property.image" :alt="property.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
              <div v-else class="w-full h-full flex items-center justify-center">
                <svg class="w-20 h-20 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
              </div>
              
              <!-- Top Badges -->
              <div class="absolute top-4 left-4 flex flex-col gap-2">
                <!-- Status Badge -->
                <span 
                  class="px-3 py-1 rounded-full text-xs font-bold shadow-corporate"
                  :class="property.status === 'Satılık' ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'"
                >
                  {{ property.status }}
                </span>
                
                <!-- Listing Type Badge - Only show if it's available in portfolio too -->
                <span 
                  v-if="property.listingType === 'both'"
                  class="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-corporate flex items-center gap-1"
                >
                  <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                  </svg>
                  {{ property.source === 'user' ? 'Portföy Paylaşımında' : 'Portföy + Satış' }}
                </span>
              </div>
              
              <!-- Price Badge (Bottom) -->
              <div class="absolute bottom-4 left-4 right-4">
                <div class="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-corporate">
                  <span class="text-xl font-bold text-corporate-navy">{{ property.price }}</span>
                </div>
              </div>
            </div>

            <!-- Property Details -->
            <div class="p-6">
              <h3 class="text-xl font-bold text-corporate-navy mb-2 group-hover:text-corporate-blue transition-colors font-heading">{{ property.title }}</h3>
              <p class="text-gray-600 text-sm mb-4 font-body flex items-center gap-1">
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                {{ property.location }}
              </p>
              
              <!-- Property Features -->
              <div class="flex items-center text-gray-600 text-sm space-x-4 mb-4 pb-4 border-b border-gray-200">
                <span class="flex items-center gap-1">
                  <svg class="w-4 h-4 text-corporate-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path>
                  </svg>
                  {{ property.area }} m²
                </span>
                <span class="flex items-center gap-1">
                  <svg class="w-4 h-4 text-corporate-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                  </svg>
                  {{ property.bedrooms }}+{{ property.bathrooms }}
                </span>
              </div>

              <!-- Consultant Info -->
              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <div 
                    class="w-10 h-10 rounded-full flex items-center justify-center mr-3 shadow-corporate"
                    :class="property.source === 'realtor' ? 'bg-gradient-to-br from-corporate-navy to-corporate-blue' : 'bg-gradient-to-br from-gray-400 to-gray-500'"
                  >
                    <span v-if="property.source === 'realtor' && property.consultantInitials" class="text-white text-xs font-bold">{{ property.consultantInitials }}</span>
                    <svg v-else class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                  </div>
                  <div>
                    <p class="text-xs text-gray-500 font-body">{{ property.source === 'realtor' ? 'Emlakçı' : 'İlan Sahibi' }}</p>
                    <p class="text-sm font-bold text-corporate-navy">{{ property.consultant }}</p>
                  </div>
                </div>
                <button 
                  v-if="property.source === 'realtor'"
                  @click.stop="viewConsultant(property.consultantSlug)" 
                  class="text-corporate-blue hover:text-corporate-navy text-sm font-bold flex items-center gap-1 transition-colors"
                >
                  Profil
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
                <button 
                  v-else
                  class="text-corporate-blue hover:text-corporate-navy text-sm font-bold flex items-center gap-1 transition-colors"
                >
                  İletişim
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Load More Button -->
        <div class="text-center mt-12">
          <button class="bg-gradient-to-r from-corporate-navy to-corporate-blue text-white px-8 py-4 rounded-xl hover:from-corporate-blue hover:to-corporate-light-blue transition-all font-bold shadow-corporate-lg">
            Daha Fazla Göster
          </button>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
// İlan Tipleri:
// 'sale-only': Sadece satış/kiralama için, portföy paylaşımı yok
// 'portfolio-only': Sadece portföy paylaşımında, direkt satış/kiralık değil
// 'both': Hem satış/kiralama için hem de portföy paylaşımında
//
// Kullanıcı İlanları (source: 'user'):
// - 'sale-only': Kullanıcı sadece kendi satıyor, emlakçı portföyüne açmamış
// - 'both': Kullanıcı hem kendisi satıyor hem de emlakçılara portföy olarak açmış
//
// Emlakçı İlanları (source: 'realtor'):
// - 'both': Emlakçı ilanı hem müşterilerine sunuyor hem portföy paylaşımında
// - 'sale-only': Emlakçı sadece kendi müşterilerine satıyor, paylaşmıyor
const properties = ref([
  {
    id: 1,
    title: '3+1 Lüks Daire, Moda',
    location: 'Moda, Kadıköy, İstanbul',
    price: '₺2,450,000',
    bedrooms: 3,
    bathrooms: 1,
    area: 120,
    status: 'Satılık',
    listingType: 'both', // Available for both sale and portfolio
    source: 'realtor',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop',
    consultant: 'Ahmet Yılmaz',
    consultantInitials: 'AY',
    consultantTitle: 'Kadıköy Uzmanı',
    consultantSlug: 'ahmet-yilmaz'
  },
  {
    id: 2,
    title: '2+1 Modern Daire, Etiler',
    location: 'Etiler, Beşiktaş, İstanbul',
    price: '₺3,200,000',
    bedrooms: 2,
    bathrooms: 1,
    area: 95,
    status: 'Satılık',
    listingType: 'both', // Kullanıcı hem kendisi satıyor hem emlakçı portföyüne açmış
    source: 'user',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
    consultant: 'Zeynep Kılıç',
    consultantTitle: 'İlan Sahibi',
    consultantSlug: null
  },
  {
    id: 3,
    title: '4+1 Villa, Nişantaşı',
    location: 'Nişantaşı, Şişli, İstanbul',
    price: '₺6,500,000',
    bedrooms: 4,
    bathrooms: 3,
    area: 280,
    status: 'Satılık',
    listingType: 'both', // Available for both sale and portfolio
    source: 'realtor',
    image: 'https://images.unsplash.com/photo-1631889993959-41b763b5b2e8?w=400&h=300&fit=crop',
    consultant: 'Mehmet Kaya',
    consultantInitials: 'MK',
    consultantTitle: 'Şişli Uzmanı',
    consultantSlug: 'mehmet-kaya'
  },
  {
    id: 4,
    title: '3+1 Daire, Fenerbahçe',
    location: 'Fenerbahçe, Kadıköy, İstanbul',
    price: '₺2,800,000',
    bedrooms: 3,
    bathrooms: 2,
    area: 135,
    status: 'Satılık',
    listingType: 'both', // Kullanıcı hem kendisi satıyor hem emlakçılara portföy olarak açmış
    source: 'user',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
    consultant: 'Mehmet Özkan',
    consultantTitle: 'İlan Sahibi',
    consultantSlug: null
  },
  {
    id: 5,
    title: '2+1 Daire, Levent',
    location: 'Levent, Beşiktaş, İstanbul',
    price: '₺2,100,000',
    bedrooms: 2,
    bathrooms: 1,
    area: 85,
    status: 'Kiralık',
    listingType: 'both', // Available for both rent and portfolio
    source: 'realtor',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop',
    consultant: 'Ayşe Demir',
    consultantInitials: 'AD',
    consultantTitle: 'Beşiktaş Uzmanı',
    consultantSlug: 'ayse-demir'
  },
  {
    id: 6,
    title: '3+1 Daire, Mecidiyeköy',
    location: 'Mecidiyeköy, Şişli, İstanbul',
    price: '₺2,300,000',
    bedrooms: 3,
    bathrooms: 2,
    area: 110,
    status: 'Satılık',
    listingType: 'sale-only', // Kullanıcı sadece kendi satıyor, portföy paylaşımı yapmamış
    source: 'user',
    image: 'https://images.unsplash.com/photo-1571055107559-3e67626fa8be?w=400&h=300&fit=crop',
    consultant: 'Elif Yıldız',
    consultantTitle: 'İlan Sahibi',
    consultantSlug: null
  },
  {
    id: 7,
    title: '5+2 Lüks Villa, Göktürk',
    location: 'Göktürk, İstanbul',
    price: '₺8,500,000',
    bedrooms: 5,
    bathrooms: 3,
    area: 350,
    status: 'Satılık',
    listingType: 'portfolio-only', // Only in portfolio, NOT in sale page
    source: 'realtor',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=400&h=300&fit=crop',
    consultant: 'Mehmet Kaya',
    consultantInitials: 'MK',
    consultantTitle: 'Şişli Uzmanı',
    consultantSlug: 'mehmet-kaya'
  },
  {
    id: 8,
    title: '1+1 Stüdyo, Üsküdar',
    location: 'Üsküdar, İstanbul',
    price: '₺1,650,000',
    bedrooms: 1,
    bathrooms: 1,
    area: 55,
    status: 'Satılık',
    listingType: 'both', // Available for both sale and portfolio
    source: 'realtor',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop',
    consultant: 'Ahmet Yılmaz',
    consultantInitials: 'AY',
    consultantTitle: 'Kadıköy Uzmanı',
    consultantSlug: 'ahmet-yilmaz'
  }
])

// Filter properties for sale page - exclude 'portfolio-only' listings
const saleProperties = computed(() => {
  return properties.value.filter(p => p.listingType !== 'portfolio-only')
})

const viewProperty = (propertyId) => {
  navigateTo(`/property/${propertyId}`)
}

const viewConsultant = (consultantSlug) => {
  navigateTo(`/consultant/${consultantSlug}`)
}
</script>
