<template>
  <NuxtLayout name="default">
    <div class="min-h-screen bg-corporate-gray-light py-8">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Page Header -->


        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <!-- Conversations List -->
          <div class="lg:col-span-1">
            <div class="bg-white rounded-xl shadow-corporate-lg border border-corporate-gray">
              <div class="p-4 border-b border-gray-200">
                <h3 class="text-lg font-bold text-corporate-navy font-heading">Konuşmalar</h3>
                <p class="text-xs text-gray-500 mt-1">{{ unreadCount }} okunmamış mesaj</p>
              </div>
              
              <div class="divide-y divide-gray-200 max-h-[600px] overflow-y-auto">
                <div 
                  v-for="conversation in conversations" 
                  :key="conversation.id"
                  @click="selectConversation(conversation.id)"
                  class="p-4 hover:bg-gray-50 cursor-pointer transition-colors"
                  :class="{ 
                    'bg-blue-50': !conversation.read,
                    'bg-corporate-blue/5 border-l-4 border-corporate-blue': selectedConversation?.id === conversation.id
                  }"
                >
                  <div class="flex items-start gap-3">
                    <div class="w-12 h-12 bg-gradient-to-br from-corporate-navy to-corporate-blue rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                      {{ conversation.initials }}
                    </div>
                    <div class="flex-1 min-w-0">
                      <div class="flex items-center justify-between mb-1">
                        <p class="text-sm font-bold text-corporate-navy">{{ conversation.name }}</p>
                        <span class="text-xs text-gray-500">{{ conversation.time }}</span>
                      </div>
                      <p class="text-sm text-gray-600 truncate">{{ conversation.lastMessage }}</p>
                      <span v-if="!conversation.read" class="inline-block mt-1 w-2 h-2 bg-blue-600 rounded-full"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Chat Area -->
          <div class="lg:col-span-2">
            <div class="bg-white rounded-xl shadow-corporate-lg border border-corporate-gray h-[600px] flex flex-col">
              <!-- Chat Header -->
              <div v-if="selectedConversation" class="p-4 border-b border-gray-200">
                <div class="flex items-center gap-3">
                  <div class="w-12 h-12 bg-gradient-to-br from-corporate-navy to-corporate-blue rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {{ selectedConversation.initials }}
                  </div>
                  <div>
                    <h3 class="text-lg font-bold text-corporate-navy">{{ selectedConversation.name }}</h3>
                    <p class="text-xs text-gray-500">{{ selectedConversation.propertyTitle }}</p>
                  </div>
                </div>
              </div>

              <!-- Messages -->
              <div v-if="selectedConversation" class="flex-1 overflow-y-auto p-6 space-y-4">
                <div 
                  v-for="message in selectedConversation.messages" 
                  :key="message.id"
                  class="flex"
                  :class="message.isOwn ? 'justify-end' : 'justify-start'"
                >
                  <div 
                    class="max-w-sm rounded-xl px-4 py-3"
                    :class="message.isOwn 
                      ? 'bg-gradient-to-r from-corporate-navy to-corporate-blue text-white' 
                      : 'bg-gray-100 text-gray-900'"
                  >
                    <p class="text-sm">{{ message.text }}</p>
                    <p class="text-xs mt-1 opacity-70">{{ message.time }}</p>
                  </div>
                </div>
              </div>

              <!-- Empty State -->
              <div v-else class="flex-1 flex items-center justify-center text-gray-500">
                <div class="text-center">
                  <svg class="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                  </svg>
                  <p class="text-lg font-semibold">Bir konuşma seçin</p>
                  <p class="text-sm mt-2">Mesajlaşmaya başlamak için soldaki listeden seçim yapın</p>
                </div>
              </div>

              <!-- Message Input -->
              <div v-if="selectedConversation" class="p-4 border-t border-gray-200">
                <div class="flex items-center gap-3">
                  <input 
                    v-model="newMessage"
                    type="text" 
                    placeholder="Mesajınızı yazın..."
                    class="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-corporate-blue focus:outline-none font-body"
                    @keyup.enter="sendMessage"
                  >
                  <button 
                    @click="sendMessage"
                    class="bg-gradient-to-r from-corporate-navy to-corporate-blue text-white px-6 py-3 rounded-lg hover:from-corporate-blue hover:to-corporate-light-blue transition-all font-bold shadow-corporate"
                  >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                    </svg>
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
const newMessage = ref('')
const selectedConversation = ref(null)

// Mock conversations data
const conversations = ref([
  {
    id: 1,
    name: 'Ahmet Yılmaz',
    initials: 'AY',
    lastMessage: 'İlanınızla ilgili görüşmek istiyorum. Müsait olduğunuz bir...',
    time: '5 dk',
    read: false,
    propertyTitle: 'Kadıköy 3+1 Daire',
    messages: [
      { id: 1, text: 'Merhaba, ilanınızla ilgileniyorum.', time: '10:30', isOwn: false },
      { id: 2, text: 'Merhaba, tabii. Nasıl yardımcı olabilirim?', time: '10:32', isOwn: true },
      { id: 3, text: 'İlanınızla ilgili görüşmek istiyorum. Müsait olduğunuz bir zaman var mı?', time: '10:35', isOwn: false },
    ]
  },
  {
    id: 2,
    name: 'Ayşe Demir',
    initials: 'AD',
    lastMessage: 'Fiyat konusunda teklifte bulunmak istiyorum.',
    time: '1 saat',
    read: false,
    propertyTitle: 'Beşiktaş 2+1 Daire',
    messages: [
      { id: 1, text: 'Fiyat konusunda teklifte bulunmak istiyorum.', time: '09:15', isOwn: false },
      { id: 2, text: 'Elbette, teklifinizi dinlemek isterim.', time: '09:20', isOwn: true },
    ]
  },
  {
    id: 3,
    name: 'Mehmet Kaya',
    initials: 'MK',
    lastMessage: 'Görüşme randevusu için uygun musunuz?',
    time: '2 saat',
    read: false,
    propertyTitle: 'Şişli Villa',
    messages: [
      { id: 1, text: 'İyi günler, villa için görüşme randevusu alabilir miyim?', time: '08:45', isOwn: false },
      { id: 2, text: 'Merhaba, tabii. Hangi gün size uygun?', time: '08:50', isOwn: true },
      { id: 3, text: 'Görüşme randevusu için uygun musunuz?', time: '08:55', isOwn: false },
    ]
  },
  {
    id: 4,
    name: 'Nur Şahin',
    initials: 'FŞ',
    lastMessage: 'Teşekkür ederim, çok yardımcı oldunuz.',
    time: '1 gün',
    read: true,
    propertyTitle: 'Maltepe 3+1 Daire',
    messages: [
      { id: 1, text: 'İlanınız hakkında bilgi alabilir miyim?', time: 'Dün 15:20', isOwn: false },
      { id: 2, text: 'Elbette! Sorularınızı bekliyorum.', time: 'Dün 15:25', isOwn: true },
      { id: 3, text: 'Teşekkür ederim, çok yardımcı oldunuz.', time: 'Dün 16:00', isOwn: false },
    ]
  }
])

const unreadCount = computed(() => conversations.value.filter(c => !c.read).length)

const selectConversation = (conversationId) => {
  selectedConversation.value = conversations.value.find(c => c.id === conversationId)
  // Mark as read when opened
  if (selectedConversation.value) {
    selectedConversation.value.read = true
  }
}

const sendMessage = () => {
  if (!newMessage.value.trim() || !selectedConversation.value) return
  
  const now = new Date()
  const time = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`
  
  selectedConversation.value.messages.push({
    id: Date.now(),
    text: newMessage.value,
    time: time,
    isOwn: true
  })
  
  newMessage.value = ''
}
</script>

