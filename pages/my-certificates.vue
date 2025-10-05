<template>
  <NuxtLayout name="default">
    <div class="min-h-screen bg-corporate-gray-light py-8">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Page Header -->
        <div class="mb-8 flex justify-between items-center flex-wrap gap-4">
          <div>
            <h1 class="text-4xl font-bold text-corporate-navy font-heading">Sertifikalarım</h1>
            <p class="text-gray-600 mt-2 text-lg font-body">Profesyonel sertifikalarınızı yönetin ve görüntüleyin</p>
          </div>
          <button @click="showAddCertificate = !showAddCertificate" class="bg-gradient-to-r from-corporate-navy to-corporate-blue text-white px-6 py-3 rounded-lg hover:from-corporate-blue hover:to-corporate-light-blue transition-all font-bold flex items-center shadow-corporate font-body">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
            Yeni Sertifika Ekle
          </button>
        </div>

        <!-- Add Certificate Form -->
        <div v-if="showAddCertificate" class="bg-white rounded-xl shadow-corporate-lg p-8 mb-8 border border-corporate-gray">
          <h3 class="text-2xl font-bold text-corporate-navy mb-6 font-heading">Yeni Sertifika Ekle</h3>
          <form @submit.prevent="addCertificate" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-bold text-corporate-navy mb-2 font-body">Sertifika Adı *</label>
                <input v-model="newCertificate.name" type="text" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent font-body" placeholder="Ör: Emlak Danışmanlığı Sertifikası">
              </div>
              <div>
                <label class="block text-sm font-bold text-corporate-navy mb-2 font-body">Veren Kurum</label>
                <input v-model="newCertificate.organization" type="text" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent font-body" placeholder="Ör: Türkiye Emlakçılar Birliği">
              </div>
              <div>
                <label class="block text-sm font-bold text-corporate-navy mb-2 font-body">Alınma Tarihi</label>
                <input v-model="newCertificate.date" type="text" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent font-body" placeholder="Ör: Eylül 2023">
              </div>
              <div>
                <label class="block text-sm font-bold text-corporate-navy mb-2 font-body">Sertifika Numarası</label>
                <input v-model="newCertificate.certificateNo" type="text" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent font-body" placeholder="Ör: TEB-2023-45678">
              </div>
            </div>

            <div>
              <label class="block text-sm font-bold text-corporate-navy mb-2 font-body">Belge Dosyası (PDF veya Resim)</label>
              <div class="border-2 border-dashed border-corporate-gray rounded-lg p-6 text-center hover:border-corporate-blue transition-colors">
                <input type="file" id="cert-upload" accept="image/*,.pdf" @change="handleCertificateUpload" class="hidden">
                <label for="cert-upload" class="cursor-pointer">
                  <svg class="mx-auto h-12 w-12 text-corporate-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                  </svg>
                  <p class="mt-2 text-sm text-gray-600 font-body">Dosya yüklemek için tıklayın</p>
                  <p v-if="newCertificate.file" class="mt-2 text-sm text-corporate-blue font-bold font-body">{{ newCertificate.file.name }}</p>
                </label>
              </div>
            </div>

            <div class="flex justify-end space-x-4">
              <button type="button" @click="showAddCertificate = false" class="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all font-bold font-body">
                İptal
              </button>
              <button type="submit" class="px-6 py-3 bg-gradient-to-r from-corporate-navy to-corporate-blue text-white rounded-lg hover:from-corporate-blue hover:to-corporate-light-blue transition-all font-bold shadow-corporate font-body">
                Sertifikayı Ekle
              </button>
            </div>
          </form>
        </div>

        <!-- Certificates Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(cert, index) in certificates" :key="index" class="bg-white rounded-xl shadow-corporate-lg overflow-hidden hover:shadow-2xl transition-all border border-corporate-gray group">
            <!-- Certificate Image/Icon -->
            <div class="h-48 bg-gradient-to-br from-corporate-blue/10 to-corporate-blue/30 flex items-center justify-center relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-corporate-navy/5 to-corporate-blue/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <svg class="w-20 h-20 text-corporate-blue relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
              </svg>
            </div>

            <!-- Certificate Info -->
            <div class="p-6">
              <h3 class="text-lg font-bold text-corporate-navy mb-2 font-heading">{{ cert.name }}</h3>
              <p class="text-sm text-gray-600 mb-1 font-body">{{ cert.organization }}</p>
              <div class="flex items-center text-sm text-gray-500 mb-3 font-body">
                <svg class="w-4 h-4 mr-1 text-corporate-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                {{ cert.date }}
              </div>
              <p v-if="cert.certificateNo" class="text-xs text-gray-500 mb-4 font-body bg-corporate-gray-light px-2 py-1 rounded inline-block">
                Sertifika No: {{ cert.certificateNo }}
              </p>

              <!-- Actions -->
              <div class="flex space-x-2 mt-4">
                <button class="flex-1 bg-corporate-blue/10 text-corporate-blue px-4 py-2 rounded-lg hover:bg-corporate-blue hover:text-white transition-all text-sm font-bold flex items-center justify-center font-body border border-corporate-blue/20">
                  <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                  Görüntüle
                </button>
                <button @click="removeCertificate(index)" class="bg-red-50 text-red-600 px-4 py-2 rounded-lg hover:bg-red-600 hover:text-white transition-all text-sm font-bold border border-red-200">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-if="certificates.length === 0 && !showAddCertificate" class="bg-white rounded-xl shadow-corporate-lg p-12 text-center border border-corporate-gray">
          <svg class="mx-auto h-20 w-20 text-corporate-blue mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
          </svg>
          <h3 class="text-2xl font-bold text-corporate-navy mb-2 font-heading">Henüz sertifika eklenmemiş</h3>
          <p class="text-gray-600 mb-6 font-body text-lg">Profesyonel sertifikalarınızı ekleyerek güvenilirliğinizi artırın</p>
          <button @click="showAddCertificate = true" class="inline-flex items-center bg-gradient-to-r from-corporate-navy to-corporate-blue text-white px-6 py-3 rounded-lg hover:from-corporate-blue hover:to-corporate-light-blue transition-all font-bold shadow-corporate font-body">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
            İlk Sertifikanızı Ekleyin
          </button>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { useAuthStore } from '~/stores/auth'

const authStore = useAuthStore()
const showAddCertificate = ref(false)

// Certificates data
const certificates = ref([
  {
    name: 'Emlak Danışmanlığı Sertifikası',
    organization: 'Türkiye Emlakçılar Birliği',
    date: 'Eylül 2023',
    certificateNo: 'TEB-2023-45678',
    file: null
  },
  {
    name: 'Gayrimenkul Değerleme Sertifikası',
    organization: 'SPK - Sermaye Piyasası Kurulu',
    date: 'Ocak 2024',
    certificateNo: 'SPK-2024-12345',
    file: null
  },
  {
    name: 'Profesyonel Satış Eğitimi',
    organization: 'İstanbul Ticaret Odası',
    date: 'Mart 2024',
    certificateNo: 'ITO-2024-98765',
    file: null
  }
])

const newCertificate = ref({
  name: '',
  organization: '',
  date: '',
  certificateNo: '',
  file: null
})

// Certificate functions
const addCertificate = () => {
  if (newCertificate.value.name) {
    certificates.value.push({
      name: newCertificate.value.name,
      organization: newCertificate.value.organization,
      date: newCertificate.value.date,
      certificateNo: newCertificate.value.certificateNo,
      file: newCertificate.value.file
    })
    
    // Reset form
    newCertificate.value = {
      name: '',
      organization: '',
      date: '',
      certificateNo: '',
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

// Redirect if not a consultant
onMounted(() => {
  if (!authStore.user?.isConsultant) {
    navigateTo('/profile')
  }
})
</script>
