<template>
  <NuxtLayout name="default">
    <div class="min-h-screen bg-corporate-gray-light py-8">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Page Header -->
        <div class="mb-8">
          <h1 class="text-4xl font-bold text-corporate-navy font-heading">Yeni İlan Ekle</h1>
          <p class="text-gray-600 mt-2 text-lg font-body">Gayrimenkul ilanınızı oluşturun ve profesyonel danışmanlarımız size ulaşsın</p>
        </div>

        <form @submit.prevent="submitProperty" class="space-y-8">
          <!-- Basic Information -->
          <div class="bg-white rounded-xl shadow-corporate-lg p-8 border border-corporate-gray">
            <h2 class="text-2xl font-bold text-corporate-navy mb-6 font-heading">Temel Bilgiler</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Property Type -->
              <div>
                <label for="propertyType" class="block text-sm font-bold text-corporate-navy mb-2 font-body">Gayrimenkul Türü *</label>
                <select id="propertyType" v-model="form.propertyType" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent font-body">
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
                <label for="transactionType" class="block text-sm font-bold text-corporate-navy mb-2 font-body">İşlem Türü *</label>
                <select id="transactionType" v-model="form.transactionType" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent font-body">
                  <option value="">Seçiniz</option>
                  <option value="sale">Satılık</option>
                  <option value="rent">Kiralık</option>
                </select>
              </div>

              <!-- Title -->
              <div class="md:col-span-2">
                <label for="title" class="block text-sm font-bold text-corporate-navy mb-2 font-body">Başlık *</label>
                <input type="text" id="title" v-model="form.title" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent font-body" placeholder="Örn: 3+1 Daire, Kadıköy">
              </div>

              <!-- Description -->
              <div class="md:col-span-2">
                <label for="description" class="block text-sm font-bold text-corporate-navy mb-2 font-body">Açıklama *</label>
                <textarea id="description" v-model="form.description" required rows="4" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent font-body" placeholder="Gayrimenkul hakkında detaylı bilgi verin..."></textarea>
              </div>
            </div>
          </div>

          <!-- Property Details -->
          <div class="bg-white rounded-xl shadow-corporate-lg p-8 border border-corporate-gray">
            <h2 class="text-2xl font-bold text-corporate-navy mb-6 font-heading">Gayrimenkul Detayları</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <!-- Price -->
              <div>
                <label for="price" class="block text-sm font-bold text-corporate-navy mb-2 font-body">Fiyat (₺) *</label>
                <input type="number" id="price" v-model="form.price" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent font-body" placeholder="2450000">
              </div>

              <!-- Bedrooms -->
              <div>
                <label for="bedrooms" class="block text-sm font-bold text-corporate-navy mb-2 font-body">Yatak Odası *</label>
                <select id="bedrooms" v-model="form.bedrooms" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent font-body">
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
                <label for="bathrooms" class="block text-sm font-bold text-corporate-navy mb-2 font-body">Banyo *</label>
                <select id="bathrooms" v-model="form.bathrooms" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent font-body">
                  <option value="">Seçiniz</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4+</option>
                </select>
              </div>

              <!-- Area -->
              <div>
                <label for="area" class="block text-sm font-bold text-corporate-navy mb-2 font-body">Alan (m²) *</label>
                <input type="number" id="area" v-model="form.area" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent font-body" placeholder="120">
              </div>

              <!-- Floor -->
              <div>
                <label for="floor" class="block text-sm font-bold text-corporate-navy mb-2 font-body">Kat</label>
                <input type="number" id="floor" v-model="form.floor" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent font-body" placeholder="5">
              </div>

              <!-- Age -->
              <div>
                <label for="age" class="block text-sm font-bold text-corporate-navy mb-2 font-body">Bina Yaşı</label>
                <input type="number" id="age" v-model="form.age" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent font-body" placeholder="10">
              </div>

              <!-- Property Condition -->
              <div>
                <label for="condition" class="block text-sm font-bold text-corporate-navy mb-2 font-body">Evin Durumu *</label>
                <select id="condition" v-model="form.condition" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent font-body">
                  <option value="">Seçiniz</option>
                  <option value="new">Yeni</option>
                  <option value="renovated">Tadilatlı</option>
                  <option value="rented">Kiracılı</option>
                  <option value="need_renovation">Tadilat Gerekli</option>
                  <option value="ready_to_move">Kullanıma Hazır</option>
                </select>
              </div>

              <!-- Years Used -->
              <div>
                <label for="yearsUsed" class="block text-sm font-bold text-corporate-navy mb-2 font-body">Kaç Yıl Kullanıldı?</label>
                <input type="number" id="yearsUsed" v-model="form.yearsUsed" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent font-body" placeholder="5" min="0">
              </div>
            </div>
          </div>

          <!-- Location -->
          <div class="bg-white rounded-xl shadow-corporate-lg p-8 border border-corporate-gray">
            <h2 class="text-2xl font-bold text-corporate-navy mb-6 font-heading">Konum Bilgileri</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- City -->
              <div>
                <label for="city" class="block text-sm font-bold text-corporate-navy mb-2 font-body">Şehir *</label>
                <select id="city" v-model="form.city" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent font-body">
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
                <label for="district" class="block text-sm font-bold text-corporate-navy mb-2 font-body">İlçe *</label>
                <input type="text" id="district" v-model="form.district" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent font-body" placeholder="Kadıköy">
              </div>

              <!-- Neighborhood -->
              <div>
                <label for="neighborhood" class="block text-sm font-bold text-corporate-navy mb-2 font-body">Mahalle</label>
                <input type="text" id="neighborhood" v-model="form.neighborhood" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent font-body" placeholder="Moda">
              </div>

              <!-- Address -->
              <div>
                <label for="address" class="block text-sm font-bold text-corporate-navy mb-2 font-body">Adres</label>
                <input type="text" id="address" v-model="form.address" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent font-body" placeholder="Moda Caddesi No: 123">
              </div>

              <!-- Address Description (NEW) -->
              <div class="md:col-span-2">
                <label for="addressDescription" class="block text-sm font-bold text-corporate-navy mb-2 font-body">Adres Tarifi</label>
                <textarea 
                  id="addressDescription" 
                  v-model="form.addressDescription" 
                  rows="3" 
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent font-body" 
                  placeholder="Örn: Metrobüs durağına 5 dk yürüme mesafesinde, Moda İskelesi karşısında, ana cadde üzeri..."
                ></textarea>
                <p class="text-xs text-gray-500 mt-1 font-body">Danışmanların ve alıcıların evi kolayca bulması için yol tarifi ekleyin</p>
              </div>
            </div>
          </div>

          <!-- Property Images -->
          <div class="bg-white rounded-xl shadow-corporate-lg p-8 border border-corporate-gray">
            <h2 class="text-2xl font-bold text-corporate-navy mb-6 font-heading">Gayrimenkul Fotoğrafları</h2>
            
            <!-- Image Upload Area -->
            <div class="border-2 border-dashed border-corporate-blue/30 bg-corporate-blue/5 rounded-lg p-8 text-center mb-6 hover:border-corporate-blue/50 transition-all">
              <svg class="mx-auto h-12 w-12 text-corporate-blue" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <div class="mt-4">
                <label for="file-upload" class="cursor-pointer">
                  <span class="mt-2 block text-sm font-bold text-corporate-navy font-body">
                    Fotoğraf yüklemek için tıklayın
                  </span>
                  <span class="mt-1 block text-sm text-gray-500 font-body">
                    PNG, JPG, GIF dosyaları (Max 10MB)
                  </span>
                </label>
                <input id="file-upload" name="file-upload" type="file" class="sr-only" multiple accept="image/*" @change="handleFileUpload">
              </div>
            </div>

            <!-- Uploaded Images Preview -->
            <div v-if="uploadedImages.length > 0" class="mb-6">
              <h3 class="text-lg font-bold text-corporate-navy mb-4 font-heading">Yüklenen Fotoğraflar ({{ uploadedImages.length }})</h3>
              <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div v-for="(image, index) in uploadedImages" :key="index" class="relative group">
                  <img :src="image.url" :alt="`Property image ${index + 1}`" class="w-full h-32 object-cover rounded-lg border-2 border-corporate-gray">
                  <button @click="removeImage(index)" class="absolute top-2 right-2 bg-red-500 text-white rounded-full w-7 h-7 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                  <div class="absolute bottom-2 left-2 bg-corporate-navy text-white text-xs px-2 py-1 rounded font-bold">
                    {{ index + 1 }}
                  </div>
                </div>
              </div>
            </div>

            <!-- Sample Images -->
            <div class="mb-6">
              <h3 class="text-lg font-bold text-corporate-navy mb-4 font-heading">Örnek Fotoğraflar</h3>
              <p class="text-sm text-gray-600 mb-4 font-body">Aşağıdaki örnek fotoğrafları kullanabilir veya kendi fotoğraflarınızı yükleyebilirsiniz.</p>
              <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div v-for="(sampleImage, index) in sampleImages" :key="index" class="relative group cursor-pointer" @click="addSampleImage(sampleImage)">
                  <img :src="sampleImage.url" :alt="sampleImage.alt" class="w-full h-32 object-cover rounded-lg border-2 border-gray-200 group-hover:border-corporate-blue transition-all">
                  <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-200 rounded-lg flex items-center justify-center">
                    <svg class="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                  </div>
                  <div class="absolute bottom-2 left-2 bg-corporate-blue text-white text-xs px-2 py-1 rounded font-bold">
                    {{ sampleImage.type }}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Features -->
          <div class="bg-white rounded-xl shadow-corporate-lg p-8 border border-corporate-gray">
            <h2 class="text-2xl font-bold text-corporate-navy mb-6 font-heading">Özellikler</h2>
            
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
              <label v-for="feature in availableFeatures" :key="feature.value" class="flex items-center p-3 rounded-lg hover:bg-corporate-blue/5 transition-all cursor-pointer">
                <input type="checkbox" :id="feature.value" v-model="form.features" :value="feature.value" class="h-5 w-5 text-corporate-blue focus:ring-corporate-blue border-gray-300 rounded">
                <label :for="feature.value" class="ml-3 text-sm font-medium text-corporate-navy font-body cursor-pointer">{{ feature.label }}</label>
              </label>
            </div>
          </div>

          <!-- Realtor Assignment Options -->
          <div class="bg-white rounded-xl shadow-corporate-lg p-8 border border-corporate-gray">
            <h2 class="text-2xl font-bold text-corporate-navy mb-6 font-heading">Satış Yönetimi</h2>
            <p class="text-sm text-gray-600 mb-6 font-body">İlanınızı nasıl yönetmek istersiniz?</p>
            
            <div class="space-y-4">
              <!-- Option 1: Estate90 Sells -->
              <div class="relative overflow-hidden bg-gradient-to-br from-corporate-navy to-corporate-blue rounded-xl p-6 cursor-pointer border-4 transition-all" :class="form.assignmentType === 'estate90' ? 'border-white shadow-corporate-xl' : 'border-transparent'">
                <!-- Decorative background -->
                <div class="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
                <div class="absolute bottom-0 left-0 -mb-4 -ml-4 w-32 h-32 bg-corporate-light-blue/20 rounded-full blur-2xl"></div>
                
                <div class="relative flex items-start space-x-4">
                  <input
                    id="assignEstate90"
                    v-model="form.assignmentType"
                    value="estate90"
                    type="radio"
                    name="assignmentType"
                    class="h-6 w-6 text-white focus:ring-white focus:ring-offset-2 focus:ring-offset-corporate-navy border-white/30 mt-1 cursor-pointer"
                  />
                  <label for="assignEstate90" class="block cursor-pointer flex-1">
                    <div class="flex items-center gap-2 mb-2">
                      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                      </svg>
                      <span class="text-xl font-bold text-white font-heading">Estate90 İlanımı Satsın</span>
                      <span class="bg-white/20 text-white px-2 py-1 rounded-full text-xs font-bold">ÖNERİLEN</span>
                    </div>
                    <p class="text-sm text-white/90 leading-relaxed mb-3">
                      İlanınızı Estate90 profesyonel ekibi yönetsin. Hızlı ve güvenli satış garantisi.
                    </p>
                    <div class="space-y-2">
                      <div class="flex items-start gap-2">
                        <svg class="w-5 h-5 text-corporate-light-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                        </svg>
                        <span class="text-sm text-white/90">Profesyonel fotoğraf çekimi ve ilan hazırlama</span>
                      </div>
                      <div class="flex items-start gap-2">
                        <svg class="w-5 h-5 text-corporate-light-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                        </svg>
                        <span class="text-sm text-white/90">Geniş alıcı ağımızla hızlı satış</span>
                      </div>
                      <div class="flex items-start gap-2">
                        <svg class="w-5 h-5 text-corporate-light-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                        </svg>
                        <span class="text-sm text-white/90">Tüm süreç boyunca 7/24 destek</span>
                      </div>
                      <div class="flex items-start gap-2">
                        <svg class="w-5 h-5 text-corporate-light-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                        </svg>
                        <span class="text-sm text-white/90">Yasal işlemler ve evrak takibi</span>
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              <!-- Option 2: Open to All Realtors -->
              <div class="relative overflow-hidden bg-white rounded-xl p-6 cursor-pointer border-2 transition-all" :class="form.assignmentType === 'open' ? 'border-corporate-blue shadow-corporate-lg' : 'border-gray-300 hover:border-corporate-blue/50'">
                <div class="relative flex items-start space-x-4">
                  <input
                    id="openToRealtors"
                    v-model="form.assignmentType"
                    value="open"
                    type="radio"
                    name="assignmentType"
                    class="h-6 w-6 text-corporate-blue focus:ring-corporate-blue border-gray-300 mt-1 cursor-pointer"
                  />
                  <label for="openToRealtors" class="block cursor-pointer flex-1">
                    <div class="flex items-center gap-2 mb-2">
                      <svg class="w-6 h-6 text-corporate-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                      </svg>
                      <span class="text-xl font-bold text-corporate-navy font-heading">Emlakçılara Açık İlan (Portföy Paylaş)</span>
                    </div>
                    <p class="text-sm text-gray-600 leading-relaxed mb-3">
                      İlanınızı platformdaki tüm emlakçıların görmesini sağlayın. Talip olanlar arasından siz seçim yapın.
                    </p>
                    <div class="space-y-2">
                      <div class="flex items-start gap-2">
                        <svg class="w-5 h-5 text-corporate-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                        </svg>
                        <span class="text-sm text-gray-700">Birden fazla emlakçı talip olabilir</span>
                      </div>
                      <div class="flex items-start gap-2">
                        <svg class="w-5 h-5 text-corporate-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                        </svg>
                        <span class="text-sm text-gray-700">Emlakçı profillerini inceleyip seçim yapın</span>
                      </div>
                      <div class="flex items-start gap-2">
                        <svg class="w-5 h-5 text-corporate-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                        </svg>
                        <span class="text-sm text-gray-700">Emlakçı seçimi tamamen sizin kontrolünüzde</span>
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              <!-- Option 3: Private Listing -->
              <div class="relative overflow-hidden bg-white rounded-xl p-6 cursor-pointer border-2 transition-all" :class="form.assignmentType === 'private' ? 'border-corporate-blue shadow-corporate-lg' : 'border-gray-300 hover:border-corporate-blue/50'">
                <div class="relative flex items-start space-x-4">
                  <input
                    id="privateList"
                    v-model="form.assignmentType"
                    value="private"
                    type="radio"
                    name="assignmentType"
                    class="h-6 w-6 text-corporate-blue focus:ring-corporate-blue border-gray-300 mt-1 cursor-pointer"
                  />
                  <label for="privateList" class="block cursor-pointer flex-1">
                    <div class="flex items-center gap-2 mb-2">
                      <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                      </svg>
                      <span class="text-xl font-bold text-corporate-navy font-heading">Özel İlan</span>
                    </div>
                    <p class="text-sm text-gray-600 leading-relaxed mb-3">
                      İlanınızı sadece siz yönetin. Emlakçılara açmadan kendi başınıza satış yapın.
                    </p>
                    <div class="space-y-2">
                      <div class="flex items-start gap-2">
                        <svg class="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                        </svg>
                        <span class="text-sm text-gray-700">Tam kontrol sizde</span>
                      </div>
                      <div class="flex items-start gap-2">
                        <svg class="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                        </svg>
                        <span class="text-sm text-gray-700">Dilediğiniz zaman emlakçılara açabilirsiniz</span>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>

   
          <!-- Submit Buttons -->
          <div class="flex justify-end space-x-4">
            <button type="button" @click="goBack" class="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all font-bold font-body">
              İptal
            </button>
            <button type="submit" :disabled="isSubmitting" class="px-8 py-3 bg-gradient-to-r from-corporate-navy to-corporate-blue text-white rounded-lg hover:from-corporate-blue hover:to-corporate-light-blue transition-all font-bold shadow-corporate disabled:opacity-50 disabled:cursor-not-allowed flex items-center font-body">
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
  condition: '', // NEW: Evin durumu
  yearsUsed: '', // NEW: Kaç yıl kullanıldı
  city: '',
  district: '',
  neighborhood: '',
  address: '',
  addressDescription: '', // NEW: Adres tarifi
  features: [],
  consultant: '',
  autoAssign: false,
  assignmentType: '', // NEW: estate90 | open | private
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
    
    // Show success message based on assignment type
    if (form.value.assignmentType === 'estate90') {
      alert(`İlan başarıyla oluşturuldu! ${uploadedImages.value.length} fotoğraf eklendi.\n\n🎉 İlanınız Estate90 profesyonel ekibine atandı!\n\nEkibimiz en kısa sürede sizinle iletişime geçecek ve satış sürecini başlatacaktır.`)
    } else if (form.value.assignmentType === 'open') {
      alert(`İlan başarıyla oluşturuldu! ${uploadedImages.value.length} fotoğraf eklendi.\n\nİlanınız emlakçılar tarafından görülebilir durumda. Talip olan emlakçıları "İlanlarım" sayfasından görebilirsiniz.`)
    } else if (form.value.assignmentType === 'private') {
      alert(`İlan başarıyla oluşturuldu! ${uploadedImages.value.length} fotoğraf eklendi.\n\nİlanınız özel olarak yayında. Dilediğiniz zaman emlakçılara açabilirsiniz.`)
    } else {
      alert(`İlan başarıyla oluşturuldu! ${uploadedImages.value.length} fotoğraf eklendi.\n\nLütfen satış yönetimi seçeneğini belirleyin.`)
    }
    
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
