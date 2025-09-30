<template>
  <NuxtLayout name="default">
    <div class="min-h-screen bg-gray-50 py-8">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Page Header -->
        <div class="mb-8">
          <h1 class="text-3xl font-bold text-gray-900">Danışman Profilim</h1>
          <p class="text-gray-600 mt-2">Danışman hesap bilgilerinizi yönetin</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Left Sidebar - Consultant Info -->
          <div class="lg:col-span-1">
            <div class="bg-white rounded-xl shadow-lg p-6">
              <!-- Profile Picture -->
              <div class="text-center mb-6">
                <div class="relative inline-block">
                  <div class="w-24 h-24 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold">
                    {{ authStore.userInitials }}
                  </div>
                  <!-- Consultant Badge -->
                  <div class="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center border-4 border-white">
                    <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                </div>
                <h2 class="text-xl font-bold text-gray-900 mt-4">{{ authStore.fullName }}</h2>
                <p class="text-green-600 text-sm font-semibold">Emlak Danışmanı</p>
                <p class="text-gray-600 text-sm mt-1">{{ authStore.user?.email }}</p>
              </div>

              <!-- Stats -->
              <div class="grid grid-cols-2 gap-4 mb-6">
                <div class="bg-blue-50 rounded-lg p-4 text-center">
                  <div class="text-2xl font-bold text-blue-600">12</div>
                  <div class="text-sm text-gray-600">Aktif İlan</div>
                </div>
                <div class="bg-green-50 rounded-lg p-4 text-center">
                  <div class="text-2xl font-bold text-green-600">24</div>
                  <div class="text-sm text-gray-600">Başarılı Satış</div>
                </div>
                <div class="bg-yellow-50 rounded-lg p-4 text-center">
                  <div class="text-2xl font-bold text-yellow-600">8</div>
                  <div class="text-sm text-gray-600">Bekleyen</div>
                </div>

              </div>

              <!-- Action Buttons -->
              <div class="space-y-3">
                <NuxtLink to="/consultant-properties" class="w-full flex items-center space-x-3 text-gray-700 hover:text-green-600 hover:bg-green-50 p-3 rounded-lg transition-colors">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                  </svg>
                  <span>Atanan İlanlarım</span>
                </NuxtLink>

                <button @click="showCertificatesModal = true" class="w-full flex items-center space-x-3 text-gray-700 hover:text-green-600 hover:bg-green-50 p-3 rounded-lg transition-colors">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                  </svg>
                  <span>Sertifikalarım ({{ certificates.length }})</span>
                </button>
              </div>
            </div>
          </div>

          <!-- Right Content - Profile Form -->
          <div class="lg:col-span-2">
            <div class="bg-white rounded-xl shadow-lg p-8">
              <h3 class="text-2xl font-bold text-gray-900 mb-6">Danışman Bilgileri</h3>
              
              <form @submit.prevent="updateProfile" class="space-y-6">
                <!-- Name Fields -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label for="firstName" class="block text-sm font-medium text-gray-700 mb-2">Ad *</label>
                    <input type="text" id="firstName" v-model="profileForm.firstName" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
                  </div>
                  <div>
                    <label for="lastName" class="block text-sm font-medium text-gray-700 mb-2">Soyad *</label>
                    <input type="text" id="lastName" v-model="profileForm.lastName" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
                  </div>
                </div>

                <!-- Email -->
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-2">E-posta</label>
                  <input type="email" id="email" v-model="profileForm.email" disabled class="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-500 cursor-not-allowed">
                </div>

                <!-- Phone -->
                <div>
                  <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">Telefon</label>
                  <input type="tel" id="phone" v-model="profileForm.phone" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="+90 532 123 45 67">
                </div>

                <!-- Specialty Area -->
                <div>
                  <label for="specialty" class="block text-sm font-medium text-gray-700 mb-2">Uzmanlık Alanı</label>
                  <input type="text" id="specialty" v-model="profileForm.specialty" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="Kadıköy Uzmanı">
                </div>

                <!-- About -->
                <div>
                  <label for="about" class="block text-sm font-medium text-gray-700 mb-2">Hakkımda</label>
                  <textarea id="about" v-model="profileForm.about" rows="4" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="Kendiniz hakkında kısa bir açıklama..."></textarea>
                </div>

                <!-- Save Button -->
                <div class="flex justify-end space-x-4 pt-6">
                  <button type="button" class="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">İptal</button>
                  <button type="submit" :disabled="isUpdating" class="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                    <span v-if="isUpdating">Güncelleniyor...</span>
                    <span v-else>Kaydet</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Certificates Modal -->
    <div v-if="showCertificatesModal" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" @click="showCertificatesModal = false">
      <div class="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" @click.stop>
        <!-- Modal Header -->
        <div class="p-6 border-b border-gray-200 flex items-center justify-between sticky top-0 bg-white">
          <h2 class="text-2xl font-bold text-gray-900">Sertifikalarım</h2>
          <button @click="showCertificatesModal = false" class="text-gray-400 hover:text-gray-500">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <!-- Modal Body -->
        <div class="p-6">
          <!-- Add Certificate Button -->
          <button @click="showAddCertificate = true" class="w-full mb-6 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold flex items-center justify-center">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
            Yeni Sertifika Ekle
          </button>

          <!-- Add Certificate Form -->
          <div v-if="showAddCertificate" class="bg-gray-50 rounded-lg p-6 mb-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Yeni Sertifika Ekle</h3>
            <form @submit.prevent="addCertificate" class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Sertifika Adı *</label>
                <input v-model="newCertificate.name" type="text" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Ör: Emlak Danışmanlığı Sertifikası">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Kurum</label>
                <input v-model="newCertificate.organization" type="text" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Ör: Türkiye Emlakçılar Birliği">
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Tarih</label>
                  <input v-model="newCertificate.date" type="text" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Eylül 2023">
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Belge Dosyası</label>
                  <input type="file" accept="image/*,.pdf" @change="handleCertificateUpload" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm">
                </div>
              </div>
              <div class="flex space-x-3">
                <button type="button" @click="showAddCertificate = false" class="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                  İptal
                </button>
                <button type="submit" class="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                  Ekle
                </button>
              </div>
            </form>
          </div>

          <!-- Certificates List -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div v-for="(cert, index) in certificates" :key="index" class="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow">
              <div class="flex items-start justify-between">
                <div class="flex items-start space-x-3">
                  <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                    </svg>
                  </div>
                  <div class="flex-1">
                    <h4 class="font-semibold text-gray-900">{{ cert.name }}</h4>
                    <p class="text-sm text-gray-600">{{ cert.organization }}</p>
                    <p class="text-xs text-gray-500 mt-1">{{ cert.date }}</p>
                  </div>
                </div>
                <button @click="removeCertificate(index)" class="text-red-500 hover:text-red-700">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                  </svg>
                </button>
              </div>
              <div class="mt-3">
                <button class="text-green-600 hover:text-green-700 text-sm font-medium flex items-center">
                  <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                  Görüntüle
                </button>
              </div>
            </div>
          </div>

          <!-- Empty State -->
          <div v-if="certificates.length === 0 && !showAddCertificate" class="text-center py-12">
            <svg class="mx-auto h-16 w-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
            </svg>
            <h3 class="mt-4 text-lg font-medium text-gray-900">Henüz sertifika eklenmemiş</h3>
            <p class="mt-2 text-sm text-gray-500">İlk sertifikanızı eklemek için yukarıdaki butona tıklayın</p>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { useAuthStore } from '~/stores/auth'

const authStore = useAuthStore()
const isUpdating = ref(false)
const showCertificatesModal = ref(false)
const showAddCertificate = ref(false)

const profileForm = ref({
  firstName: authStore.user?.firstName || '',
  lastName: authStore.user?.lastName || '',
  email: authStore.user?.email || '',
  phone: '+90 532 123 45 67',
  specialty: 'Kadıköy Uzmanı',
  about: ''
})

// Certificates management
const certificates = ref([
  {
    name: 'Emlak Danışmanlığı Sertifikası',
    organization: 'Türkiye Emlakçılar Birliği',
    date: 'Eylül 2023',
    file: null
  },
  {
    name: 'Gayrimenkul Değerleme Sertifikası',
    organization: 'SPK - Sermaye Piyasası Kurulu',
    date: 'Ocak 2024',
    file: null
  },
  {
    name: 'Profesyonel Satış Eğitimi',
    organization: 'İstanbul Ticaret Odası',
    date: 'Mart 2024',
    file: null
  }
])

const newCertificate = ref({
  name: '',
  organization: '',
  date: '',
  file: null
})

const updateProfile = async () => {
  isUpdating.value = true
  try {
    await new Promise(resolve => setTimeout(resolve, 1000))
    if (authStore.user) {
      authStore.user.firstName = profileForm.value.firstName
      authStore.user.lastName = profileForm.value.lastName
    }
    alert('Profil başarıyla güncellendi!')
  } catch (error) {
    alert('Profil güncellenirken bir hata oluştu')
  } finally {
    isUpdating.value = false
  }
}

// Certificate functions
const addCertificate = () => {
  if (newCertificate.value.name) {
    certificates.value.push({
      name: newCertificate.value.name,
      organization: newCertificate.value.organization,
      date: newCertificate.value.date,
      file: newCertificate.value.file
    })
    
    // Reset form
    newCertificate.value = {
      name: '',
      organization: '',
      date: '',
      file: null
    }
    
    showAddCertificate.value = false
    alert('Sertifika başarıyla eklendi!')
  }
}

const removeCertificate = (index) => {
  if (confirm('Bu sertifikayı silmek istediğinizden emin misiniz?')) {
    certificates.value.splice(index, 1)
    alert('Sertifika silindi!')
  }
}

const handleCertificateUpload = (event) => {
  const file = event.target.files?.[0]
  if (file) {
    newCertificate.value.file = file
  }
}
</script>
