<template>
  <NuxtLayout name="default">
    <div class="min-h-screen bg-corporate-gray-light py-8">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Page Header -->
        <div class="mb-8">
          <h1 class="text-4xl font-bold text-corporate-navy font-heading">Bildirimler</h1>
          <p class="text-gray-600 mt-2 text-lg font-body">Tüm bildirimlerinizi görüntüleyin ve yönetin</p>
        </div>

        <!-- Notifications List -->
        <div class="bg-white rounded-xl shadow-corporate-lg border border-corporate-gray">
          <div class="divide-y divide-gray-200">
            <div 
              v-for="notification in notifications" 
              :key="notification.id" 
              class="p-6 hover:bg-gray-50 cursor-pointer transition-colors"
              :class="{ 'bg-blue-50/50': !notification.read }"
              @click="markAsRead(notification.id)"
            >
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  :class="{
                    'bg-green-100': notification.type === 'success',
                    'bg-blue-100': notification.type === 'info',
                    'bg-yellow-100': notification.type === 'warning',
                    'bg-red-100': notification.type === 'error'
                  }"
                >
                  <svg class="w-6 h-6" 
                    :class="{
                      'text-green-600': notification.type === 'success',
                      'text-blue-600': notification.type === 'info',
                      'text-yellow-600': notification.type === 'warning',
                      'text-red-600': notification.type === 'error'
                    }"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path v-if="notification.type === 'success'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    <path v-else-if="notification.type === 'info'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    <path v-else-if="notification.type === 'warning'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                    <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div class="flex-1 min-w-0">
                  <div class="flex items-start justify-between mb-2">
                    <h3 class="text-base font-bold text-corporate-navy">{{ notification.title }}</h3>
                    <div class="flex items-center gap-2">
                      <span class="text-xs text-gray-500 whitespace-nowrap">{{ notification.time }}</span>
                      <span v-if="!notification.read" class="w-2 h-2 bg-blue-600 rounded-full"></span>
                    </div>
                  </div>
                  <p class="text-sm text-gray-600">{{ notification.message }}</p>
                </div>
              </div>
            </div>

            <!-- Empty State -->
            <div v-if="notifications.length === 0" class="p-12 text-center">
              <svg class="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
              </svg>
              <p class="text-gray-600 text-lg font-body">Henüz bildiriminiz yok</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
// Mock notifications data
const notifications = ref([
  {
    id: 1,
    type: 'success',
    title: 'Yeni Başvuru',
    message: 'Veli Yılmaz 3+1 Daire ilanınıza talip oldu.',
    time: '10 dk önce',
    read: false,
    actionLink: '/my-listings',
    actionText: 'İlanı Görüntüle'
  },
  {
    id: 2,
    type: 'info',
    title: 'Randevu Hatırlatması',
    message: 'Yarın saat 14:00\'te Kadıköy\'de randevunuz var.',
    time: '30 dk önce',
    read: false,
    actionLink: '/consultant-profile',
    actionText: 'Ajandayı Aç'
  },
  {
    id: 3,
    type: 'success',
    title: 'Başvurunuz Kabul Edildi',
    message: 'Etiler 2+1 Daire için başvurunuz kabul edildi!',
    time: '2 saat önce',
    read: false,
    actionLink: '/consultant-profile',
    actionText: 'Detayları Gör'
  },
  {
    id: 4,
    type: 'warning',
    title: 'İlan Süresi Doluyor',
    message: 'Beşiktaş 3+1 Daire ilanınızın süresi 3 gün sonra dolacak.',
    time: '5 saat önce',
    read: false,
    actionLink: '/my-listings',
    actionText: 'İlanı Görüntüle'
  },
  {
    id: 5,
    type: 'info',
    title: 'Yeni Mesaj',
    message: 'Ahmet Yılmaz size bir mesaj gönderdi.',
    time: '1 gün önce',
    read: false,
    actionLink: '#',
    actionText: 'Mesajı Oku'
  },
  {
    id: 6,
    type: 'success',
    title: 'İlan Yayında',
    message: 'Kadıköy 3+1 Daire ilanınız başarıyla yayına alındı.',
    time: '2 gün önce',
    read: true,
    actionLink: '/my-listings',
    actionText: 'İlanı Görüntüle'
  },
  {
    id: 7,
    type: 'success',
    title: 'Portföy Paylaşımı',
    message: 'Göktürk Villa ilanınız 2 emlakçı tarafından görüntülendi.',
    time: '3 gün önce',
    read: true,
    actionLink: '/consultant-properties',
    actionText: 'İstatistikleri Gör'
  },
  {
    id: 8,
    type: 'info',
    title: 'Profil Güncellemesi',
    message: 'Profilinizi tamamlayarak daha fazla başvuru alabilirsiniz.',
    time: '5 gün önce',
    read: true,
    actionLink: '/consultant-profile',
    actionText: 'Profili Düzenle'
  }
])

const markAsRead = (notificationId) => {
  const notification = notifications.value.find(n => n.id === notificationId)
  if (notification) {
    notification.read = true
  }
}
</script>

