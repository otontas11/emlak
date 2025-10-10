<template>
  <NuxtLayout name="default">
    <div class="min-h-screen bg-corporate-gray-light py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Page Header -->
        <div class="mb-8">
          <h1 class="text-4xl font-bold text-corporate-navy font-heading">İlanlarım</h1>
          <p class="text-gray-600 mt-2 text-lg font-body">Gayrimenkul ilanlarınızı yönetin ve hareketleri takip edin</p>
        </div>

        <div class="max-w-5xl mx-auto">
          <!-- Property Listings -->
          <div>
            <div class="bg-white rounded-xl shadow-corporate-lg border border-corporate-gray">
              <div class="p-6 border-b border-gray-200">
                <div class="flex justify-between items-center mb-6">
                  <h2 class="text-2xl font-bold text-corporate-navy font-heading">İşlemdeki Gayrimenkuller</h2>
                  <button @click="addNewProperty" class="bg-gradient-to-r from-corporate-navy to-corporate-blue text-white px-6 py-3 rounded-lg hover:from-corporate-blue hover:to-corporate-light-blue transition-all font-bold shadow-corporate">
                    + Yeni İlan Ekle
                  </button>
                </div>
                
                <!-- Tabs -->
                <v-tabs 
                  v-model="activeTab" 
                  color="corporate-blue"
                  align-tabs="start"
                  class="property-tabs"
                >
                  <v-tab value="all" class="font-semibold">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                    </svg>
                    Tüm İlanlar ({{ properties.length }})
                  </v-tab>
                  <v-tab value="active" class="font-semibold">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Aktif ({{ properties.filter(p => p.status === 'active').length }})
                  </v-tab>
                  <v-tab value="pending" class="font-semibold">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Beklemede ({{ properties.filter(p => p.status === 'pending').length }})
                  </v-tab>
                  <v-tab value="self-managed" class="font-semibold">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                    Kendim Yönetiyorum ({{ properties.filter(p => p.selfManaged).length }})
                  </v-tab>
                  <v-tab value="sold" class="font-semibold">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Satıldı ({{ properties.filter(p => p.status === 'sold').length }})
                  </v-tab>
                </v-tabs>
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
                      class="w-24 h-24 rounded-lg flex items-center justify-center flex-shrink-0 cursor-pointer" 
                      :class="property.status === 'sold' 
                        ? 'bg-gradient-to-br from-green-200 to-green-300' 
                        : 'bg-gradient-to-br from-corporate-blue/20 to-corporate-blue/30'"
                      @click="viewProperty(property.id)"
                    >
                      <svg 
                        v-if="property.status === 'sold'" 
                        class="w-8 h-8 text-green-600" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <svg 
                        v-else
                        class="w-8 h-8 text-corporate-blue" 
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
                          <h3 class="text-xl font-bold text-corporate-navy font-heading">{{ property.title }}</h3>
                          <span 
                            v-if="property.selfManaged"
                            class="inline-flex items-center px-2 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-800 border border-purple-300"
                          >
                            <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                            </svg>
                            Kendim
                          </span>
                        </div>
                        <span 
                          class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold"
                          :class="{
                            'bg-green-100 text-green-800': property.status === 'active',
                            'bg-yellow-100 text-yellow-800': property.status === 'pending',
                            'bg-green-100 text-green-800 border-2 border-green-300': property.status === 'sold'
                          }"
                        >
                          <span v-if="property.status === 'active'">Aktif</span>
                          <span v-else-if="property.status === 'pending'">Beklemede</span>
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
                      
                      <!-- Self Managed Badge -->
                      <div 
                        v-if="property.selfManaged"
                        class="mt-4 p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl border-2 border-purple-300"
                      >
                        <div class="flex items-center justify-between">
                          <div class="flex items-center">
                            <div class="w-10 h-10 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full flex items-center justify-center mr-3 shadow-lg">
                              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                              </svg>
                            </div>
                            <div>
                              <p class="text-xs font-medium text-purple-800 font-body flex items-center gap-1">
                                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                                </svg>
                                Kendi İlanım
                              </p>
                              <p class="text-sm font-bold text-purple-900">Bu ilanı kendiniz yönetiyorsunuz</p>
                              <p class="text-xs text-purple-700 mt-0.5">Emlakçı desteği almadan direkt satış yapıyorsunuz</p>
                            </div>
                          </div>
                          <button @click.stop="toggleSelfManagement(property.id)" class="text-purple-700 hover:text-purple-800 text-sm font-semibold flex items-center whitespace-nowrap">
                            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
                            </svg>
                            Emlakçıya Aç
                          </button>
                        </div>
                      </div>
                      
                      <!-- Realtor Applicants -->
                      <div 
                        v-else-if="property.hasApplicants && !property.selectedRealtor && !property.selfManaged"
                        class="mt-4 p-4 bg-corporate-blue/5 rounded-xl border-2 border-corporate-blue/20"
                      >
                        <div class="flex items-center justify-between mb-3">
                          <div class="flex items-center">
                            <div class="w-10 h-10 bg-gradient-to-br from-corporate-navy to-corporate-blue rounded-full flex items-center justify-center mr-3 shadow-corporate">
                              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                              </svg>
                            </div>
                            <div>
                              <p class="text-xs font-medium text-corporate-navy font-body">Talip Olan Emlakçılar</p>
                              <p class="text-sm font-bold text-corporate-navy">{{ property.applicantsCount }} Emlakçı talip oldu</p>
                              <p class="text-xs text-corporate-blue mt-0.5">Aralarından birini seçebilirsiniz</p>
                            </div>
                          </div>
                          <button @click.stop="showApplicants(property.id)" class="bg-gradient-to-r from-corporate-navy to-corporate-blue text-white px-4 py-2 rounded-lg hover:from-corporate-blue hover:to-corporate-light-blue transition-all font-bold text-sm shadow-corporate flex items-center">
                            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                            </svg>
                            Talip Olanları Gör
                          </button>
                        </div>
                      </div>

                      <!-- No Realtor Yet -->
                      <div 
                        v-else-if="!property.hasApplicants && !property.selectedRealtor && property.status !== 'sold' && !property.selfManaged"
                        class="mt-4 p-4 bg-yellow-50 rounded-xl border-2 border-yellow-200"
                      >
                        <div class="flex items-center justify-between">
                          <div class="flex items-center">
                            <div class="w-10 h-10 bg-yellow-200 rounded-full flex items-center justify-center mr-3">
                              <svg class="w-5 h-5 text-yellow-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                              </svg>
                            </div>
                            <div>
                              <p class="text-xs font-medium text-yellow-700 font-body">Emlakçı Bekleniyor</p>
                              <p class="text-sm font-bold text-yellow-900">Henüz talip olan emlakçı yok</p>
                              <p class="text-xs text-yellow-600 mt-0.5">İlanınız emlakçılar tarafından görüntülenebilir</p>
                            </div>
                          </div>
                          <button @click.stop="toggleSelfManagement(property.id)" class="text-yellow-700 hover:text-yellow-800 text-sm font-semibold flex items-center whitespace-nowrap">
                            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                            </svg>
                            Kendim Satacağım
                          </button>
                        </div>
                      </div>

                      <!-- Selected Realtor -->
                      <div 
                        v-else-if="property.selectedRealtor && property.status !== 'sold'"
                        class="mt-4 p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl border-2 border-green-300"
                      >
                        <div class="flex items-center justify-between">
                          <div class="flex items-center">
                            <div class="w-10 h-10 bg-gradient-to-br from-green-600 to-green-500 rounded-full flex items-center justify-center mr-3 shadow-corporate">
                              <span class="text-white text-xs font-bold">{{ property.selectedRealtor.name.split(' ').map(n => n[0]).join('') }}</span>
                            </div>
                            <div>
                              <p class="text-xs font-medium text-green-800 font-body flex items-center gap-1">
                                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                                </svg>
                                Seçilen Emlakçı
                              </p>
                              <p class="text-sm font-bold text-green-900">{{ property.selectedRealtor.name }}</p>
                              <p class="text-xs text-green-700 mt-0.5">İlanınızı yönetiyor</p>
                            </div>
                          </div>
                          <div class="flex space-x-2">
                            <button @click.stop="viewConsultant(property.selectedRealtor.slug)" class="text-green-700 hover:text-green-800 text-sm font-semibold flex items-center">
                              <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                              </svg>
                              Profil
                            </button>
                            <button @click.stop="contactRealtor(property.selectedRealtor.slug)" class="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-lg text-sm font-semibold flex items-center transition-all">
                              <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                              </svg>
                              İletişim
                            </button>
                          </div>
                        </div>
                      </div>

                      <!-- Realtor Info - Sold -->
                      <div 
                        v-else-if="property.selectedRealtor && property.status === 'sold'"
                        class="mt-4 p-4 bg-green-100 rounded-xl border-2 border-green-300"
                      >
                        <div class="flex items-center justify-between">
                          <div class="flex items-center">
                            <div class="w-10 h-10 bg-gradient-to-br from-green-600 to-green-500 rounded-full flex items-center justify-center mr-3 shadow-corporate">
                              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                              </svg>
                            </div>
                            <div>
                              <p class="text-xs font-medium text-green-800 font-body">Satışı Gerçekleştiren Emlakçı</p>
                              <p class="text-sm font-bold text-green-900">{{ property.selectedRealtor.name }}</p>
                              <p class="text-xs text-green-700 mt-0.5">İlanınızı başarıyla sattı</p>
                            </div>
                          </div>
                          <button @click.stop="viewConsultant(property.selectedRealtor.slug)" class="text-green-700 hover:text-green-800 text-sm font-semibold flex items-center">
                            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                            </svg>
                            Profil
                          </button>
                        </div>
                      </div>

                      <div class="flex items-center justify-between mt-4">
                        <div class="flex space-x-3">
                          <button 
                            class="text-sm font-semibold"
                            :class="property.status === 'sold' ? 'text-gray-400 cursor-not-allowed' : 'text-corporate-blue hover:text-corporate-navy'"
                            :disabled="property.status === 'sold'"
                          >
                            Düzenle
                          </button>
                          <button 
                            class="text-sm font-semibold"
                            :class="property.status === 'sold' ? 'text-gray-400 cursor-not-allowed' : 'text-red-600 hover:text-red-700'"
                            :disabled="property.status === 'sold'"
                          >
                            Sil
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

    <!-- Consultant Change Request Modal -->
    <div v-if="showChangeModal" class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-2xl shadow-corporate-xl max-w-md w-full p-6">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-2xl font-bold text-corporate-navy font-heading">Danışman Değiştirme Talebi</h3>
          <button @click="closeChangeModal" class="text-gray-400 hover:text-gray-600">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        
        <div class="mb-4 p-4 bg-orange-50 rounded-lg border border-orange-200">
          <p class="text-sm text-orange-800 font-body">
            <span class="font-bold">{{ selectedConsultantName }}</span> danışmanınızı değiştirmek istiyorsunuz.
          </p>
        </div>

        <div class="mb-6">
          <label class="block text-sm font-bold text-corporate-navy mb-2">Değiştirme Sebebiniz</label>
          <textarea 
            v-model="changeReason" 
            rows="4" 
            class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-corporate-blue focus:outline-none font-body"
            placeholder="Lütfen danışman değiştirmek isteme sebebinizi açıklayın..."
          ></textarea>
        </div>

        <div class="flex space-x-3">
          <button @click="closeChangeModal" class="flex-1 px-4 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-semibold transition-all">
            İptal
          </button>
          <button @click="submitChangeRequest" class="flex-1 px-4 py-3 bg-gradient-to-r from-corporate-navy to-corporate-blue text-white rounded-lg hover:from-corporate-blue hover:to-corporate-light-blue font-bold transition-all shadow-corporate">
            Talep Gönder
          </button>
        </div>
      </div>
    </div>

    <!-- Consultant Rating Modal -->
    <div v-if="showRatingModal" class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-2xl shadow-corporate-xl max-w-md w-full p-6">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-2xl font-bold text-corporate-navy font-heading">Danışman Değerlendirme</h3>
          <button @click="closeRatingModal" class="text-gray-400 hover:text-gray-600">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        
        <div class="mb-6 text-center">
          <div class="w-20 h-20 bg-gradient-to-br from-corporate-navy to-corporate-blue rounded-full flex items-center justify-center mx-auto mb-3 shadow-corporate">
            <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
          </div>
          <p class="text-lg font-bold text-corporate-navy">{{ selectedConsultantName }}</p>
          <p class="text-sm text-gray-600">Danışmanınızı değerlendirin</p>
        </div>

        <div class="mb-4">
          <label class="block text-sm font-bold text-corporate-navy mb-3 text-center">Puan Verin</label>
          <div class="flex justify-center space-x-2">
            <button 
              v-for="star in 5" 
              :key="star"
              @click="rating = star"
              class="text-4xl transition-all hover:scale-110"
              :class="star <= rating ? 'text-corporate-blue' : 'text-gray-300'"
            >
              ★
            </button>
          </div>
        </div>

        <div class="mb-6">
          <label class="block text-sm font-bold text-corporate-navy mb-2">Yorumunuz</label>
          <textarea 
            v-model="ratingComment" 
            rows="4" 
            class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-corporate-blue focus:outline-none font-body"
            placeholder="Danışmanınız hakkındaki görüşlerinizi paylaşın..."
          ></textarea>
        </div>

        <div class="flex space-x-3">
          <button @click="closeRatingModal" class="flex-1 px-4 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-semibold transition-all">
            İptal
          </button>
          <button @click="submitRating" class="flex-1 px-4 py-3 bg-gradient-to-r from-corporate-navy to-corporate-blue text-white rounded-lg hover:from-corporate-blue hover:to-corporate-light-blue font-bold transition-all shadow-corporate">
            Gönder
          </button>
        </div>
      </div>
    </div>

    <!-- Applicants Modal -->
    <div v-if="showApplicantsModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" @click.self="closeApplicantsModal">
      <div class="bg-white rounded-2xl shadow-corporate-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div class="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex justify-between items-center rounded-t-2xl">
          <div>
            <h3 class="text-2xl font-bold text-corporate-navy font-heading">Talip Olan Emlakçılar</h3>
            <p class="text-sm text-gray-600 mt-1">{{ applicants.length }} emlakçı ilanınıza talip oldu</p>
          </div>
          <button @click="closeApplicantsModal" class="text-gray-400 hover:text-gray-600 transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        
        <div class="p-8 space-y-6">
          <!-- Applicant Card -->
          <div v-for="applicant in applicants" :key="applicant.id" class="bg-gradient-to-br from-corporate-gray-light to-white rounded-xl p-6 border-2 border-corporate-gray hover:border-corporate-blue transition-all shadow-corporate">
            <div class="flex items-start justify-between mb-4">
              <div class="flex items-start space-x-4">
                <div class="w-16 h-16 bg-gradient-to-br from-corporate-navy to-corporate-blue rounded-full flex items-center justify-center shadow-corporate flex-shrink-0">
                  <span class="text-white text-lg font-bold">{{ applicant.avatar }}</span>
                </div>
                <div class="flex-1">
                  <h4 class="text-xl font-bold text-corporate-navy font-heading">{{ applicant.name }}</h4>
                  <p class="text-sm text-corporate-blue font-semibold">{{ applicant.speciality }}</p>
                  <div class="flex items-center gap-4 mt-2 text-sm text-gray-600">
                    <div class="flex items-center gap-1">
                      <svg class="w-4 h-4 text-corporate-blue" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <span class="font-semibold">{{ applicant.rating }}</span>
                    </div>
                    <span>{{ applicant.experience }} deneyim</span>
                    <span>{{ applicant.sales }} satış</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="bg-white rounded-lg p-4 mb-4 border border-gray-200">
              <p class="text-sm text-gray-700 leading-relaxed font-body">{{ applicant.message }}</p>
            </div>
            
            <div class="flex gap-3">
              <button @click="navigateTo(`/consultant/${applicant.slug}`)" class="flex-1 px-4 py-3 border-2 border-corporate-blue text-corporate-blue rounded-lg hover:bg-corporate-blue/5 font-semibold transition-all flex items-center justify-center">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
                Profili Görüntüle
              </button>
              <button @click="selectRealtor(applicant)" class="flex-1 px-4 py-3 bg-gradient-to-r from-corporate-navy to-corporate-blue text-white rounded-lg hover:from-corporate-blue hover:to-corporate-light-blue font-bold transition-all shadow-corporate flex items-center justify-center">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Bu Emlakçıyı Seç
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
// This page is for normal users to manage their property listings
// and view activity related to their properties

// Modal states
const showChangeModal = ref(false)
const showRatingModal = ref(false)
const showApplicantsModal = ref(false)
const selectedPropertyId = ref(null)
const selectedConsultantName = ref('')
const changeReason = ref('')
const rating = ref(0)
const ratingComment = ref('')

// Tab state
const activeTab = ref('all')

// Mock properties data
const properties = ref([
  {
    id: '1',
    title: '3+1 Daire, Kadıköy',
    price: 2450000,
    type: 'sale', // sale or rent
    status: 'active', // active, pending, sold
    bedrooms: 3,
    bathrooms: 1,
    area: 120,
    location: 'Kadıköy, İstanbul',
    applicantsCount: 3,
    hasApplicants: true,
    selectedRealtor: null,
    selfManaged: false // Emlakçı ile çalışılıyor
  },
  {
    id: '2',
    title: '2+1 Daire, Beşiktaş',
    price: 1850000,
    type: 'sale',
    status: 'active',
    bedrooms: 2,
    bathrooms: 1,
    area: 95,
    location: 'Beşiktaş, İstanbul',
    applicantsCount: 0,
    hasApplicants: false,
    selectedRealtor: null,
    selfManaged: true // Kullanıcı kendisi yönetiyor
  },
  {
    id: '3',
    title: 'Villa, Şişli',
    price: 4200000,
    type: 'sale',
    status: 'sold',
    bedrooms: 4,
    bathrooms: 3,
    area: 280,
    location: 'Şişli, İstanbul',
    applicantsCount: 0,
    hasApplicants: false,
    selectedRealtor: { name: 'Mehmet Kaya', slug: 'mehmet-kaya' },
    selfManaged: false
  },
  {
    id: '4',
    title: '1+1 Stüdyo Daire, Üsküdar',
    price: 15000,
    type: 'rent',
    status: 'active',
    bedrooms: 1,
    bathrooms: 1,
    area: 55,
    location: 'Üsküdar, İstanbul',
    applicantsCount: 0,
    hasApplicants: false,
    selectedRealtor: { name: 'Ayşe Demir', slug: 'ayse-demir' },
    selfManaged: false
  },
  {
    id: '5',
    title: '3+1 Daire, Maltepe',
    price: 25000,
    type: 'rent',
    status: 'active',
    bedrooms: 3,
    bathrooms: 2,
    area: 135,
    location: 'Maltepe, İstanbul',
    applicantsCount: 2,
    hasApplicants: true,
    selectedRealtor: null,
    selfManaged: false
  },
  {
    id: '6',
    title: '2+1 Daire, Ataşehir',
    price: 18000,
    type: 'rent',
    status: 'active',
    bedrooms: 2,
    bathrooms: 1,
    area: 90,
    location: 'Ataşehir, İstanbul',
    applicantsCount: 0,
    hasApplicants: false,
    selectedRealtor: null,
    selfManaged: true // Kullanıcı kendisi yönetiyor
  },
  {
    id: '7',
    title: '4+1 Dubleks, Sarıyer',
    price: 5800000,
    type: 'sale',
    status: 'pending',
    bedrooms: 4,
    bathrooms: 2,
    area: 185,
    location: 'Sarıyer, İstanbul',
    applicantsCount: 0,
    hasApplicants: false,
    selectedRealtor: null,
    selfManaged: false
  }
])

// Filter properties based on active tab
const filteredProperties = computed(() => {
  if (activeTab.value === 'all') {
    return properties.value
  } else if (activeTab.value === 'active') {
    return properties.value.filter(p => p.status === 'active')
  } else if (activeTab.value === 'pending') {
    return properties.value.filter(p => p.status === 'pending')
  } else if (activeTab.value === 'sold') {
    return properties.value.filter(p => p.status === 'sold')
  } else if (activeTab.value === 'self-managed') {
    return properties.value.filter(p => p.selfManaged === true)
  }
  return properties.value
})

// Calculate stats based on active tab
const stats = computed(() => {
  const props = filteredProperties.value
  return {
    total: props.length,
    active: props.filter(p => p.status === 'active').length,
    sold: props.filter(p => p.status === 'sold').length
  }
})

// Mock applicants data
const applicants = ref([
  {
    id: 1,
    name: 'Ahmet Yılmaz',
    slug: 'ahmet-yilmaz',
    experience: '5 yıl',
    sales: '200+',
    rating: 4.8,
    avatar: 'AY',
    speciality: 'Kadıköy Bölge Uzmanı',
    message: 'İlanınızla ilgileniyorum. Bölgede 5 yıllık deneyimim var ve bu tür gayrimenkullerde uzmanım.'
  },
  {
    id: 2,
    name: 'Ayşe Demir',
    slug: 'ayse-demir',
    experience: '8 yıl',
    sales: '350+',
    rating: 4.9,
    avatar: 'AD',
    speciality: 'Beşiktaş Bölge Uzmanı',
    message: 'Merhaba, ilanınızı inceledim. Benzer gayrimenkullerde çok başarılı satışlarım var. Sizinle çalışmak isterim.'
  },
  {
    id: 3,
    name: 'Mehmet Kaya',
    slug: 'mehmet-kaya',
    experience: '6 yıl',
    sales: '280+',
    rating: 4.7,
    avatar: 'MK',
    speciality: 'Şişli Bölge Uzmanı',
    message: 'İlanınız çok güzel. Geniş müşteri ağım sayesinde hızlı satış yapabilirim.'
  }
])

const viewConsultant = (consultantSlug) => {
  navigateTo(`/consultant/${consultantSlug}`)
}

const viewProperty = (propertyId) => {
  navigateTo(`/property/${propertyId}`)
}

const addNewProperty = () => {
  navigateTo('/add-property')
}

// Request consultant change
const requestConsultantChange = (propertyId, consultantName) => {
  selectedPropertyId.value = propertyId
  selectedConsultantName.value = consultantName
  showChangeModal.value = true
}

const closeChangeModal = () => {
  showChangeModal.value = false
  changeReason.value = ''
  selectedPropertyId.value = null
  selectedConsultantName.value = ''
}

const submitChangeRequest = () => {
  if (!changeReason.value.trim()) {
    alert('Lütfen değiştirme sebebinizi belirtin.')
    return
  }
  
  // Here you would send the request to the server
  console.log('Danışman değiştirme talebi:', {
    propertyId: selectedPropertyId.value,
    currentConsultant: selectedConsultantName.value,
    reason: changeReason.value
  })
  
  alert('Danışman değiştirme talebiniz sistem yöneticilerine iletildi. En kısa sürede size geri dönüş yapılacaktır.')
  closeChangeModal()
}

// Rate consultant (for sold properties)
const rateConsultant = (propertyId, consultantName) => {
  selectedPropertyId.value = propertyId
  selectedConsultantName.value = consultantName
  showRatingModal.value = true
}

const closeRatingModal = () => {
  showRatingModal.value = false
  rating.value = 0
  ratingComment.value = ''
  selectedPropertyId.value = null
  selectedConsultantName.value = ''
}

const submitRating = () => {
  if (rating.value === 0) {
    alert('Lütfen bir puan seçin.')
    return
  }
  
  // Here you would send the rating to the server
  console.log('Danışman değerlendirmesi:', {
    propertyId: selectedPropertyId.value,
    consultant: selectedConsultantName.value,
    rating: rating.value,
    comment: ratingComment.value
  })
  
  alert(`${selectedConsultantName.value} için ${rating.value} yıldız değerlendirmeniz kaydedildi. Teşekkür ederiz!`)
  closeRatingModal()
}

// Show applicants modal
const showApplicants = (propertyId) => {
  selectedPropertyId.value = propertyId
  showApplicantsModal.value = true
}

const closeApplicantsModal = () => {
  showApplicantsModal.value = false
  selectedPropertyId.value = null
}

const selectRealtor = (realtor) => {
  if (confirm(`${realtor.name} emlakçısını seçmek istediğinize emin misiniz?`)) {
    console.log('Seçilen emlakçı:', {
      propertyId: selectedPropertyId.value,
      realtor: realtor
    })
    alert(`${realtor.name} başarıyla ilanınıza atandı! Sizinle iletişime geçecektir.`)
    closeApplicantsModal()
  }
}

const contactRealtor = (realtorSlug) => {
  // Navigate to chat or open contact modal
  console.log('İletişim:', realtorSlug)
  alert('İletişim özelliği yakında eklenecek!')
}

// Toggle self management
const toggleSelfManagement = (propertyId) => {
  const property = properties.value.find(p => p.id === propertyId)
  if (!property) return
  
  if (property.selfManaged) {
    // İlanı emlakçılara açma
    if (confirm('Bu ilanı emlakçıların görmesine izin vermek istiyor musunuz?')) {
      property.selfManaged = false
      alert('İlanınız artık emlakçılar tarafından görülebilir ve başvuru alabilirsiniz.')
    }
  } else {
    // İlanı kendisi yönetmeye başlama
    if (confirm('Bu ilanı emlakçı desteği olmadan kendiniz mi yönetmek istiyorsunuz?')) {
      property.selfManaged = true
      property.hasApplicants = false
      property.applicantsCount = 0
      alert('İlanınız artık sadece sizin tarafınızdan yönetiliyor. Emlakçılar bu ilanı göremeyecek.')
    }
  }
}
</script>

