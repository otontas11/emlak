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

          <!-- Property Images -->
          <div class="bg-white rounded-xl shadow-lg p-8">
            <h2 class="text-xl font-bold text-gray-900 mb-6">Gayrimenkul Fotoğrafları</h2>
            
            <!-- Image Upload Area -->
            <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-6">
              <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <div class="mt-4">
                <label for="file-upload" class="cursor-pointer">
                  <span class="mt-2 block text-sm font-medium text-gray-900">
                    Fotoğraf yüklemek için tıklayın
                  </span>
                  <span class="mt-1 block text-sm text-gray-500">
                    PNG, JPG, GIF dosyaları (Max 10MB)
                  </span>
                </label>
                <input id="file-upload" name="file-upload" type="file" class="sr-only" multiple accept="image/*" @change="handleFileUpload">
              </div>
            </div>

            <!-- Uploaded Images Preview -->
            <div v-if="uploadedImages.length > 0" class="mb-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Yüklenen Fotoğraflar ({{ uploadedImages.length }})</h3>
              <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div v-for="(image, index) in uploadedImages" :key="index" class="relative group">
                  <img :src="image.url" :alt="`Property image ${index + 1}`" class="w-full h-32 object-cover rounded-lg">
                  <button @click="removeImage(index)" class="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                  <div class="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
                    {{ index + 1 }}
                  </div>
                </div>
              </div>
            </div>

            <!-- Sample Images -->
            <div class="mb-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Örnek Fotoğraflar</h3>
              <p class="text-sm text-gray-600 mb-4">Aşağıdaki örnek fotoğrafları kullanabilir veya kendi fotoğraflarınızı yükleyebilirsiniz.</p>
              <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div v-for="(sampleImage, index) in sampleImages" :key="index" class="relative group cursor-pointer" @click="addSampleImage(sampleImage)">
                  <img :src="sampleImage.url" :alt="sampleImage.alt" class="w-full h-32 object-cover rounded-lg">
                  <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-200 rounded-lg flex items-center justify-center">
                    <svg class="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                  </div>
                  <div class="absolute bottom-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                    {{ sampleImage.type }}
                  </div>
                </div>
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
  autoAssign: false,
  images: []
})

const isSubmitting = ref(false)
const uploadedImages = ref([])

// Sample images for demonstration
const sampleImages = ref([
  {
    url: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop',
    alt: 'Modern living room',
    type: 'Salon'
  },
  {
    url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
    alt: 'Kitchen',
    type: 'Mutfak'
  },
  {
    url: 'https://images.unsplash.com/photo-1631889993959-41b763b5b2e8?w=400&h=300&fit=crop',
    alt: 'Bedroom',
    type: 'Yatak Odası'
  },
  {
    url: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
    alt: 'Bathroom',
    type: 'Banyo'
  },
  {
    url: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop',
    alt: 'Balcony',
    type: 'Balkon'
  },
  {
    url: 'https://images.unsplash.com/photo-1571055107559-3e67626fa8be?w=400&h=300&fit=crop',
    alt: 'Building exterior',
    type: 'Dış Görünüm'
  },
  {
    url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    alt: 'Parking area',
    type: 'Otopark'
  },
  {
    url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop',
    alt: 'Garden view',
    type: 'Bahçe'
  }
])

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
    // Add images to form data
    form.value.images = uploadedImages.value.map(img => ({
      url: img.url,
      name: img.name,
      isSample: img.isSample || false
    }))
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Show success message
    alert(`İlan başarıyla oluşturuldu! ${uploadedImages.value.length} fotoğraf eklendi.`)
    
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

// Image handling functions
const handleFileUpload = (event) => {
  const files = event.target.files
  if (files) {
    Array.from(files).forEach(file => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader()
        reader.onload = (e) => {
          uploadedImages.value.push({
            url: e.target.result,
            file: file,
            name: file.name
          })
        }
        reader.readAsDataURL(file)
      }
    })
  }
}

const addSampleImage = (sampleImage) => {
  uploadedImages.value.push({
    url: sampleImage.url,
    name: `${sampleImage.type}.jpg`,
    isSample: true
  })
}

const removeImage = (index) => {
  uploadedImages.value.splice(index, 1)
}
</script>
