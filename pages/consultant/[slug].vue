<template>
  <NuxtLayout name="default">
    <div class="min-h-screen bg-gray-50 py-8">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Consultant Profile Header -->
        <div class="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div class="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
            <!-- Profile Picture -->
            <div class="relative">
              <div class="w-32 h-32 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                {{ consultantInitials }}
              </div>
              <!-- Consultant Badge -->
              <div class="absolute -bottom-2 -right-2 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
              </div>
            </div>

            <!-- Consultant Info -->
            <div class="flex-1">
              <h1 class="text-3xl font-bold text-gray-900 mb-2">{{ consultantName }}</h1>
              <p class="text-xl text-gray-600 mb-4">{{ consultantSpecialty }}</p>
              
              <!-- Rating and Stats -->
              <div class="flex flex-wrap items-center space-x-6 mb-4">
                <div class="flex items-center">
                  <div class="flex text-yellow-400">
                    <span v-for="i in 5" :key="i">★</span>
                  </div>
                  <span class="ml-2 text-gray-600 font-medium">4.9 (127 değerlendirme)</span>
                </div>
                <div class="text-gray-600">
                  <span class="font-semibold">{{ consultantExperience }}</span> yıllık deneyim
                </div>
                <div class="text-gray-600">
                  <span class="font-semibold">{{ consultantSales }}</span> başarılı satış
                </div>
              </div>


            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Left Column - About & Stats -->
          <div class="lg:col-span-2 space-y-8">
            <!-- About Section -->
            <div class="bg-white rounded-xl shadow-lg p-8">
              <h2 class="text-2xl font-bold text-gray-900 mb-6">Hakkında</h2>
              <p class="text-gray-600 leading-relaxed mb-6">
                {{ consultantAbout }}
              </p>
              
              <!-- Specializations -->
              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-4">Uzmanlık Alanları</h3>
                <div class="flex flex-wrap gap-2">
                  <span v-for="specialty in consultantSpecializations" :key="specialty" 
                        class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {{ specialty }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Recent Listings -->
            <div class="bg-white rounded-xl shadow-lg p-8">
              <h2 class="text-2xl font-bold text-gray-900 mb-6">Aktif İlanlar</h2>
              <div class="space-y-4">
                <div v-for="listing in consultantListings" :key="listing.id" 
                     class="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div class="w-16 h-16 bg-gradient-to-br from-blue-200 to-blue-300 rounded-lg flex items-center justify-center">
                    <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                    </svg>
                  </div>
                  <div class="flex-1">
                    <h3 class="font-semibold text-gray-900">{{ listing.title }}</h3>
                    <p class="text-gray-600 text-sm">{{ listing.location }}</p>
                    <p class="text-blue-600 font-bold">{{ listing.price }}</p>
                  </div>
                  <div class="text-right">
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {{ listing.status }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column - Contact & Reviews -->
          <div class="space-y-8">
            <!-- Contact Info -->
            <div class="bg-white rounded-xl shadow-lg p-8">
              <h2 class="text-xl font-bold text-gray-900 mb-6">İletişim Bilgileri</h2>
              <div class="space-y-4">
                <div class="flex items-center">
                  <svg class="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <span class="text-gray-600">{{ consultantPhone }}</span>
                </div>
                <div class="flex items-center">
                  <svg class="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <span class="text-gray-600">{{ consultantEmail }}</span>
                </div>
                <div class="flex items-center">
                  <svg class="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span class="text-gray-600">{{ consultantLocation }}</span>
                </div>
              </div>
            </div>

            <!-- Recent Reviews -->
            <div class="bg-white rounded-xl shadow-lg p-8">
              <h2 class="text-xl font-bold text-gray-900 mb-6">Son Yorumlar</h2>
              <div class="space-y-4">
                <div v-for="review in consultantReviews" :key="review.id" class="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                  <div class="flex items-center justify-between mb-2">
                    <span class="font-semibold text-gray-900">{{ review.clientName }}</span>
                    <div class="flex text-yellow-400">
                      <span v-for="i in review.rating" :key="i">★</span>
                    </div>
                  </div>
                  <p class="text-gray-600 text-sm">{{ review.comment }}</p>
                  <p class="text-gray-400 text-xs mt-2">{{ review.date }}</p>
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
const consultantSlug = route.params.slug

// Consultant data based on slug
const consultantData = {
  'ahmet-yilmaz': {
    name: 'Ahmet Yılmaz',
    specialty: 'Kadıköy Uzmanı',
    initials: 'AY',
    experience: '5',
    sales: '200+',
    phone: '+90 532 123 45 67',
    email: 'ahmet.yilmaz@emlak.com',
    location: 'Kadıköy, İstanbul',
    about: 'Kadıköy bölgesinde 5 yıllık deneyime sahip uzman emlak danışmanı. Müşteri memnuniyetini ön planda tutarak, doğru evi doğru fiyata bulmanızda size yardımcı oluyorum. Kadıköy\'ün tüm mahallelerini detaylı olarak biliyorum ve bölgedeki pazar trendlerini yakından takip ediyorum.',
    specializations: ['Kadıköy', 'Moda', 'Fenerbahçe', 'Bostancı', 'Kozyatağı'],
    listings: [
      { id: 1, title: '3+1 Daire, Moda', location: 'Moda, Kadıköy', price: '₺2,450,000', status: 'Aktif' },
      { id: 2, title: '2+1 Daire, Fenerbahçe', location: 'Fenerbahçe, Kadıköy', price: '₺1,850,000', status: 'Aktif' }
    ],
    reviews: [
      { id: 1, clientName: 'Mehmet Kaya', rating: 5, comment: 'Çok profesyonel ve yardımsever. Evimi hızlıca sattı.', date: '2 gün önce' },
      { id: 2, clientName: 'Ayşe Demir', rating: 5, comment: 'Kadıköy bölgesini çok iyi biliyor. Tavsiye ederim.', date: '1 hafta önce' }
    ]
  },
  'Ayşe-demir': {
    name: 'Ayşe Demir',
    specialty: 'Beşiktaş Uzmanı',
    initials: 'FD',
    experience: '8',
    sales: '350+',
    phone: '+90 533 987 65 43',
    email: 'Ayşe.demir@emlak.com',
    location: 'Beşiktaş, İstanbul',
    about: 'Beşiktaş bölgesinde 8 yıllık deneyime sahip uzman emlak danışmanı. Özellikle lüks daireler ve villalar konusunda uzmanım. Müşterilerimin ihtiyaçlarını anlayarak, en uygun gayrimenkulü bulmalarında yardımcı oluyorum.',
    specializations: ['Beşiktaş', 'Etiler', 'Levent', 'Ortaköy', 'Arnavutköy'],
    listings: [
      { id: 1, title: '4+1 Daire, Etiler', location: 'Etiler, Beşiktaş', price: '₺4,200,000', status: 'Aktif' },
      { id: 2, title: '3+1 Daire, Levent', location: 'Levent, Beşiktaş', price: '₺3,100,000', status: 'Aktif' }
    ],
    reviews: [
      { id: 1, clientName: 'Ali Yılmaz', rating: 5, comment: 'Mükemmel hizmet. Evimi çok iyi fiyata sattı.', date: '3 gün önce' },
      { id: 2, clientName: 'Zeynep Kaya', rating: 5, comment: 'Çok detaylı ve profesyonel yaklaşım.', date: '1 hafta önce' }
    ]
  },
  'mehmet-kaya': {
    name: 'Mehmet Kaya',
    specialty: 'Şişli Uzmanı',
    initials: 'MK',
    experience: '6',
    sales: '280+',
    phone: '+90 534 555 77 88',
    email: 'mehmet.kaya@emlak.com',
    location: 'Şişli, İstanbul',
    about: 'Şişli bölgesinde 6 yıllık deneyime sahip uzman emlak danışmanı. Hem satış hem kiralama konularında uzmanım. Müşteri odaklı yaklaşımımla, ihtiyaçlarınıza en uygun çözümleri sunuyorum.',
    specializations: ['Şişli', 'Mecidiyeköy', 'Gayrettepe', 'Nişantaşı', 'Harbiye'],
    listings: [
      { id: 1, title: 'Villa, Nişantaşı', location: 'Nişantaşı, Şişli', price: '₺6,500,000', status: 'Aktif' },
      { id: 2, title: '3+1 Daire, Mecidiyeköy', location: 'Mecidiyeköy, Şişli', price: '₺2,800,000', status: 'Aktif' }
    ],
    reviews: [
      { id: 1, clientName: 'Can Özkan', rating: 5, comment: 'Çok başarılı bir satış süreci yaşadık.', date: '1 gün önce' },
      { id: 2, clientName: 'Elif Yılmaz', rating: 5, comment: 'Şişli bölgesini çok iyi biliyor.', date: '5 gün önce' }
    ]
  }
}

const consultant = consultantData[consultantSlug] || consultantData['ahmet-yilmaz']

const consultantName = consultant.name
const consultantSpecialty = consultant.specialty
const consultantInitials = consultant.initials
const consultantExperience = consultant.experience
const consultantSales = consultant.sales
const consultantPhone = consultant.phone
const consultantEmail = consultant.email
const consultantLocation = consultant.location
const consultantAbout = consultant.about
const consultantSpecializations = consultant.specializations
const consultantListings = consultant.listings
const consultantReviews = consultant.reviews
</script>
