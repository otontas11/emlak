<template>
  <NuxtLayout name="default">
    <div class="min-h-screen bg-gray-50 py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Property Header -->
        <div class="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div class="flex flex-col lg:flex-row gap-8">
            <!-- Property Image -->
            <div class="lg:w-1/2">
              <div class="w-full h-80 bg-gradient-to-br from-blue-200 to-blue-300 rounded-xl flex items-center justify-center">
                <svg class="w-24 h-24 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
              </div>
            </div>

            <!-- Property Info -->
            <div class="lg:w-1/2">
              <div class="flex items-center justify-between mb-4">
                <h1 class="text-3xl font-bold text-gray-900">{{ property.title }}</h1>
                <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium" :class="statusClass">
                  {{ property.status }}
                </span>
              </div>
              
              <p class="text-2xl font-bold text-blue-600 mb-4">{{ property.price }}</p>
              
              <div class="grid grid-cols-2 gap-4 mb-6">
                <div class="flex items-center text-gray-600">
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z"></path>
                  </svg>
                  {{ property.bedrooms }} Yatak
                </div>
                <div class="flex items-center text-gray-600">
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M10.5 3L12 2l1.5 1H21v6H3V3h7.5z"></path>
                  </svg>
                  {{ property.bathrooms }} Banyo
                </div>
                <div class="flex items-center text-gray-600">
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path>
                  </svg>
                  {{ property.area }} m²
                </div>
                <div class="flex items-center text-gray-600">
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  {{ property.location }}
                </div>
              </div>

              <!-- Consultant Assignment -->
              <div class="p-4 bg-blue-50 rounded-lg border border-blue-200 mb-6">
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>
                    </div>
                    <div>
                      <p class="text-sm font-medium text-gray-900">Atanan Danışman</p>
                      <p class="text-sm text-blue-600 font-semibold">{{ property.consultant }}</p>
                    </div>
                  </div>
                  <button @click="viewConsultant(property.consultantSlug)" class="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center">
                    Profili Görüntüle
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </button>
                </div>
              </div>

              <!-- Action Buttons -->
              <div class="flex flex-wrap gap-3">
                <button class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center">
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                  </svg>
                  Düzenle
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Left Column - Property Details -->
          <div class="lg:col-span-2 space-y-8">
            <!-- Property Description -->
            <div class="bg-white rounded-xl shadow-lg p-8">
              <h2 class="text-2xl font-bold text-gray-900 mb-6">Gayrimenkul Açıklaması</h2>
              <p class="text-gray-600 leading-relaxed">{{ property.description }}</p>
            </div>

            <!-- Property Features -->
            <div class="bg-white rounded-xl shadow-lg p-8">
              <h2 class="text-2xl font-bold text-gray-900 mb-6">Özellikler</h2>
              <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div v-for="feature in property.features" :key="feature" class="flex items-center text-gray-600">
                  <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {{ feature }}
                </div>
              </div>
            </div>

            <!-- Property Images -->
            <div class="bg-white rounded-xl shadow-lg p-8">
              <h2 class="text-2xl font-bold text-gray-900 mb-6">Fotoğraflar</h2>
              <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div v-for="i in 8" :key="i" class="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
                  <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column - Activity Feed -->
          <div class="lg:col-span-1">
            <div class="bg-white rounded-xl shadow-lg">
              <div class="p-6 border-b border-gray-200">
                <h2 class="text-xl font-bold text-gray-900">Gayrimenkul Hareketleri</h2>
                <p class="text-sm text-gray-600 mt-1">Bu gayrimenkul ile ilgili tüm aktiviteler</p>
              </div>

              <div class="p-6">
                <div class="space-y-4">
                  <div v-for="activity in propertyActivities" :key="activity.id" class="flex items-start space-x-3">
                    <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" :class="activity.iconBg">
                      <svg class="w-4 h-4" :class="activity.iconColor" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="activity.iconPath"></path>
                      </svg>
                    </div>
                    <div class="flex-1 min-w-0">
                      <p class="text-sm text-gray-900">
                        <span class="font-medium">{{ activity.userName }}</span> {{ activity.action }}
                        <span v-if="activity.amount" class="font-semibold text-green-600">{{ activity.amount }}</span>
                      </p>
                      <p class="text-xs text-gray-500 mt-1">{{ activity.time }}</p>
                    </div>
                  </div>
                </div>

                <!-- Load More Button -->
                <div class="mt-6 text-center">
                  <button class="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    Daha Fazla Göster
                  </button>
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
    title: '2+1 Daire, Beşiktaş',
    price: '₺1,850,000',
    status: 'Beklemede',
    bedrooms: 2,
    bathrooms: 1,
    area: 95,
    location: 'Beşiktaş, İstanbul',
    consultant: 'Fatma Demir',
    consultantSlug: 'fatma-demir',
    description: 'Beşiktaş\'ın kalbinde, Boğaz manzaralı, şık ve modern 2+1 daire. Deniz manzarası ve şehir manzarası bir arada. Metro ve otobüs hatlarına yakın, ulaşım kolaylığı. Alışveriş, eğlence ve iş merkezlerine yürüme mesafesinde.',
    features: [
      'Balkon',
      'Asansör',
      'Güvenlik',
      'Otopark',
      'Klima',
      'Bulaşık Makinesi',
      'Çamaşır Makinesi',
      'Buzdolabı',
      'Televizyon',
      'İnternet',
      'Uydu',
      'Boğaz Manzarası'
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

// Status class for styling
const statusClass = computed(() => {
  switch (property.status) {
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
