<template>
  <NuxtLayout name="default">
    <div class="min-h-screen bg-gray-50 py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Page Header -->
        <div class="mb-8">
          <h1 class="text-3xl font-bold text-gray-900">Satın Al</h1>
          <p class="text-gray-600 mt-2">İstediğiniz evi bulun ve hayalinizdeki eve kavuşun</p>
        </div>

        <!-- Search and Filters -->
        <div class="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
            <!-- Location -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Konum</label>
              <select class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
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
              <label class="block text-sm font-medium text-gray-700 mb-2">Gayrimenkul Türü</label>
              <select class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Tümü</option>
                <option value="apartment">Daire</option>
                <option value="house">Ev</option>
                <option value="villa">Villa</option>
              </select>
            </div>

            <!-- Price Range -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Fiyat Aralığı</label>
              <select class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
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
              <button class="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                Ara
              </button>
            </div>
          </div>
        </div>

        <!-- Results Count -->
        <div class="flex justify-between items-center mb-6">
          <p class="text-gray-600">{{ properties.length }} ilan bulundu</p>
          <div class="flex items-center space-x-2">
            <span class="text-sm text-gray-600">Sırala:</span>
            <select class="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="newest">En Yeni</option>
              <option value="price-low">Fiyat (Düşük-Yüksek)</option>
              <option value="price-high">Fiyat (Yüksek-Düşük)</option>
              <option value="area">Alan (Büyük-Küçük)</option>
            </select>
          </div>
        </div>

        <!-- Properties Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="property in properties" :key="property.id" class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer" @click="viewProperty(property.id)">
            <!-- Property Image -->
            <div class="relative h-48 bg-gradient-to-br from-blue-200 to-blue-300">
              <img v-if="property.image" :src="property.image" :alt="property.title" class="w-full h-full object-cover">
              <div v-else class="w-full h-full flex items-center justify-center">
                <svg class="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
              </div>
              <!-- Status Badge -->
              <div class="absolute top-3 left-3">
                <span class="px-2 py-1 text-xs font-semibold rounded-full" :class="property.statusClass">
                  {{ property.status }}
                </span>
              </div>
              <!-- Price Badge -->
              <div class="absolute top-3 right-3 bg-white bg-opacity-90 px-2 py-1 rounded-lg">
                <span class="text-sm font-bold text-gray-900">{{ property.price }}</span>
              </div>
            </div>

            <!-- Property Details -->
            <div class="p-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ property.title }}</h3>
              <p class="text-gray-600 text-sm mb-3">{{ property.location }}</p>
              
              <!-- Property Features -->
              <div class="flex items-center text-gray-600 text-sm space-x-4 mb-4">
                <span class="flex items-center">
                  <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path>
                  </svg>
                  {{ property.bedrooms }} Yatak
                </span>
                <span class="flex items-center">
                  <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M10.5 3L12 2l1.5 1H21v6H3V3h7.5z"></path>
                  </svg>
                  {{ property.bathrooms }} Banyo
                </span>
                <span class="flex items-center">
                  <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path>
                  </svg>
                  {{ property.area }} m²
                </span>
              </div>

              <!-- Consultant Info -->
              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                    <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                  </div>
                  <div>
                    <p class="text-sm font-medium text-gray-900">{{ property.consultant }}</p>
                    <p class="text-xs text-gray-500">{{ property.consultantTitle }}</p>
                  </div>
                </div>
                <button @click.stop="viewConsultant(property.consultantSlug)" class="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Profil
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Load More Button -->
        <div class="text-center mt-12">
          <button class="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors font-semibold">
            Daha Fazla Göster
          </button>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
// Sample properties data
const properties = ref([
  {
    id: 1,
    title: '3+1 Daire, Moda',
    location: 'Moda, Kadıköy, İstanbul',
    price: '₺2,450,000',
    bedrooms: 3,
    bathrooms: 1,
    area: 120,
    status: 'Satılık',
    statusClass: 'bg-green-100 text-green-800',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop',
    consultant: 'Ahmet Yılmaz',
    consultantTitle: 'Kadıköy Uzmanı',
    consultantSlug: 'ahmet-yilmaz'
  },
  {
    id: 2,
    title: '2+1 Daire, Etiler',
    location: 'Etiler, Beşiktaş, İstanbul',
    price: '₺3,200,000',
    bedrooms: 2,
    bathrooms: 1,
    area: 95,
    status: 'Satılık',
    statusClass: 'bg-green-100 text-green-800',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
    consultant: 'Fatma Demir',
    consultantTitle: 'Beşiktaş Uzmanı',
    consultantSlug: 'fatma-demir'
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
    statusClass: 'bg-green-100 text-green-800',
    image: 'https://images.unsplash.com/photo-1631889993959-41b763b5b2e8?w=400&h=300&fit=crop',
    consultant: 'Mehmet Kaya',
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
    statusClass: 'bg-green-100 text-green-800',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
    consultant: 'Ahmet Yılmaz',
    consultantTitle: 'Kadıköy Uzmanı',
    consultantSlug: 'ahmet-yilmaz'
  },
  {
    id: 5,
    title: '2+1 Daire, Levent',
    location: 'Levent, Beşiktaş, İstanbul',
    price: '₺2,100,000',
    bedrooms: 2,
    bathrooms: 1,
    area: 85,
    status: 'Satılık',
    statusClass: 'bg-green-100 text-green-800',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop',
    consultant: 'Fatma Demir',
    consultantTitle: 'Beşiktaş Uzmanı',
    consultantSlug: 'fatma-demir'
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
    statusClass: 'bg-green-100 text-green-800',
    image: 'https://images.unsplash.com/photo-1571055107559-3e67626fa8be?w=400&h=300&fit=crop',
    consultant: 'Mehmet Kaya',
    consultantTitle: 'Şişli Uzmanı',
    consultantSlug: 'mehmet-kaya'
  }
])

const viewProperty = (propertyId) => {
  navigateTo(`/property/${propertyId}`)
}

const viewConsultant = (consultantSlug) => {
  navigateTo(`/consultant/${consultantSlug}`)
}
</script>
