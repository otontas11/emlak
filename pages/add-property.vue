<template>
  <NuxtLayout name="default">
    <div class="min-h-screen bg-gray-50 py-8">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Page Header -->
        <div class="mb-8">
          <h1 class="text-3xl font-bold text-gray-900">Yeni İlan Ekle</h1>
          <p class="text-gray-600 mt-2">Gayrimenkul ilanınızı oluşturun ve yayınlayın</p>
        </div>

        <form @submit.prevent="submitProperty" class="space-y-8">
          <!-- Basic Information -->
          <div class="bg-white rounded-xl shadow-lg p-8">
            <h2 class="text-xl font-bold text-gray-900 mb-6">Temel Bilgiler</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Property Type -->
              <div>
                <label for="propertyType" class="block text-sm font-medium text-gray-700 mb-2">Gayrimenkul Türü *</label>
                <select id="propertyType" v-model="form.propertyType" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">Seçiniz</option>
                  <option value="apartment">Daire</option>
                  <option value="house">Ev</option>
                  <option value="villa">Villa</option>
                  <option value="office">Ofis</option>
                  <option value="shop">Dükkan</option>
                </select>
              </div>

              <!-- Transaction Type -->
              <div>
                <label for="transactionType" class="block text-sm font-medium text-gray-700 mb-2">İşlem Türü *</label>
                <select id="transactionType" v-model="form.transactionType" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">Seçiniz</option>
                  <option value="sale">Satılık</option>
                  <option value="rent">Kiralık</option>
                </select>
              </div>

              <!-- Title -->
              <div class="md:col-span-2">
                <label for="title" class="block text-sm font-medium text-gray-700 mb-2">Başlık *</label>
                <input type="text" id="title" v-model="form.title" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Örn: 3+1 Daire, Kadıköy">
              </div>

              <!-- Description -->
              <div class="md:col-span-2">
                <label for="description" class="block text-sm font-medium text-gray-700 mb-2">Açıklama *</label>
                <textarea id="description" v-model="form.description" required rows="4" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Gayrimenkul hakkında detaylı bilgi verin..."></textarea>
              </div>
            </div>
          </div>

          <!-- Property Details -->
          <div class="bg-white rounded-xl shadow-lg p-8">
            <h2 class="text-xl font-bold text-gray-900 mb-6">Gayrimenkul Detayları</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <!-- Price -->
              <div>
                <label for="price" class="block text-sm font-medium text-gray-700 mb-2">Fiyat (₺) *</label>
                <input type="number" id="price" v-model="form.price" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="2450000">
              </div>

              <!-- Bedrooms -->
              <div>
                <label for="bedrooms" class="block text-sm font-medium text-gray-700 mb-2">Yatak Odası *</label>
                <select id="bedrooms" v-model="form.bedrooms" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">Seçiniz</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5+</option>
                </select>
              </div>

              <!-- Bathrooms -->
              <div>
                <label for="bathrooms" class="block text-sm font-medium text-gray-700 mb-2">Banyo *</label>
                <select id="bathrooms" v-model="form.bathrooms" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">Seçiniz</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4+</option>
                </select>
              </div>

              <!-- Area -->
              <div>
                <label for="area" class="block text-sm font-medium text-gray-700 mb-2">Alan (m²) *</label>
                <input type="number" id="area" v-model="form.area" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="120">
              </div>

              <!-- Floor -->
              <div>
                <label for="floor" class="block text-sm font-medium text-gray-700 mb-2">Kat</label>
                <input type="number" id="floor" v-model="form.floor" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="5">
              </div>

              <!-- Age -->
              <div>
                <label for="age" class="block text-sm font-medium text-gray-700 mb-2">Bina Yaşı</label>
                <input type="number" id="age" v-model="form.age" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="10">
              </div>
            </div>
          </div>

          <!-- Location -->
          <div class="bg-white rounded-xl shadow-lg p-8">
            <h2 class="text-xl font-bold text-gray-900 mb-6">Konum Bilgileri</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- City -->
              <div>
                <label for="city" class="block text-sm font-medium text-gray-700 mb-2">Şehir *</label>
                <select id="city" v-model="form.city" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">Seçiniz</option>
                  <option value="istanbul">İstanbul</option>
                  <option value="ankara">Ankara</option>
                  <option value="izmir">İzmir</option>
                  <option value="antalya">Antalya</option>
                  <option value="bursa">Bursa</option>
                </select>
              </div>

              <!-- District -->
              <div>
                <label for="district" class="block text-sm font-medium text-gray-700 mb-2">İlçe *</label>
                <input type="text" id="district" v-model="form.district" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Kadıköy">
              </div>

              <!-- Neighborhood -->
              <div>
                <label for="neighborhood" class="block text-sm font-medium text-gray-700 mb-2">Mahalle</label>
                <input type="text" id="neighborhood" v-model="form.neighborhood" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Moda">
              </div>

              <!-- Address -->
              <div>
                <label for="address" class="block text-sm font-medium text-gray-700 mb-2">Adres</label>
                <input type="text" id="address" v-model="form.address" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Moda Caddesi No: 123">
              </div>
            </div>
          </div>

          <!-- Features -->
          <div class="bg-white rounded-xl shadow-lg p-8">
            <h2 class="text-xl font-bold text-gray-900 mb-6">Özellikler</h2>
            
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
              <label v-for="feature in availableFeatures" :key="feature.value" class="flex items-center">
                <input type="checkbox" :id="feature.value" v-model="form.features" :value="feature.value" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded">
                <label :for="feature.value" class="ml-2 text-sm text-gray-700">{{ feature.label }}</label>
              </label>
            </div>
          </div>

          <!-- Consultant Assignment -->
          <div class="bg-white rounded-xl shadow-lg p-8">
            <h2 class="text-xl font-bold text-gray-900 mb-6">Danışman Ataması</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Consultant Selection -->
              <div>
                <label for="consultant" class="block text-sm font-medium text-gray-700 mb-2">Danışman Seçin *</label>
                <select id="consultant" v-model="form.consultant" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">Seçiniz</option>
                  <option value="ahmet-yilmaz">Ahmet Yılmaz - Kadıköy Uzmanı</option>
                  <option value="fatma-demir">Fatma Demir - Beşiktaş Uzmanı</option>
                  <option value="mehmet-kaya">Mehmet Kaya - Şişli Uzmanı</option>
                </select>
              </div>

              <!-- Auto Assignment -->
              <div class="flex items-center">
                <input type="checkbox" id="autoAssign" v-model="form.autoAssign" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded">
                <label for="autoAssign" class="ml-2 text-sm text-gray-700">Otomatik danışman ataması yap</label>
              </div>
            </div>
          </div>

          <!-- Submit Buttons -->
          <div class="flex justify-end space-x-4">
            <button type="button" @click="goBack" class="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-semibold">
              İptal
            </button>
            <button type="submit" :disabled="isSubmitting" class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center">
              <svg v-if="isSubmitting" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {{ isSubmitting ? 'Kaydediliyor...' : 'İlanı Yayınla' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
const form = ref({
  propertyType: '',
  transactionType: '',
  title: '',
  description: '',
  price: '',
  bedrooms: '',
  bathrooms: '',
  area: '',
  floor: '',
  age: '',
  city: '',
  district: '',
  neighborhood: '',
  address: '',
  features: [],
  consultant: '',
  autoAssign: false
})

const isSubmitting = ref(false)

const availableFeatures = [
  { value: 'balcony', label: 'Balkon' },
  { value: 'elevator', label: 'Asansör' },
  { value: 'security', label: 'Güvenlik' },
  { value: 'parking', label: 'Otopark' },
  { value: 'heating', label: 'Kalorifer' },
  { value: 'air_conditioning', label: 'Klima' },
  { value: 'dishwasher', label: 'Bulaşık Makinesi' },
  { value: 'washing_machine', label: 'Çamaşır Makinesi' },
  { value: 'refrigerator', label: 'Buzdolabı' },
  { value: 'tv', label: 'Televizyon' },
  { value: 'internet', label: 'İnternet' },
  { value: 'satellite', label: 'Uydu' },
  { value: 'furnished', label: 'Eşyalı' },
  { value: 'sea_view', label: 'Deniz Manzarası' },
  { value: 'city_view', label: 'Şehir Manzarası' },
  { value: 'garden', label: 'Bahçe' },
  { value: 'terrace', label: 'Teras' },
  { value: 'fireplace', label: 'Şömine' },
  { value: 'jacuzzi', label: 'Jakuzi' },
  { value: 'pool', label: 'Havuz' }
]

const submitProperty = async () => {
  isSubmitting.value = true
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Show success message
    alert('İlan başarıyla oluşturuldu!')
    
    // Redirect to my listings page
    navigateTo('/my-listings')
  } catch (error) {
    alert('Bir hata oluştu. Lütfen tekrar deneyin.')
  } finally {
    isSubmitting.value = false
  }
}

const goBack = () => {
  navigateTo('/my-listings')
}
</script>
