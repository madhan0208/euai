<template>
  <div class="app">

    <div v-if="showSplash" class="splash-screen">
      <h1>Welcome to EU AI Assesment</h1>
      <p>Loading...</p>
    </div>


    <div v-else>
      <router-view />


      <button class="gemini-button" @click="openPopup">💬 Gemini</button>


      <div v-if="showPopup" class="gemini-modal-overlay" @click.self="closePopup">
        <div class="gemini-modal">
          <h2>Ask Gemini</h2>
          <textarea v-model="prompt" placeholder="Type your question..." />

          <div class="button-group">
            <button @click="sendToGPT" :disabled="loading || !prompt.trim()">Send</button>
            <button class="close-btn" @click="closePopup">Close</button>
          </div>

          <div v-if="loading" class="loading">Loading...</div>
          <div v-if="gptResponse" class="gpt-response">
            <strong>Response:</strong>
            <p>{{ gptResponse }}</p>
          </div>
          <div v-if="error" class="error">Error: {{ error }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const showSplash = ref(true)
const prompt = ref('')
const gptResponse = ref('')
const error = ref(null)
const loading = ref(false)
const showPopup = ref(false)

const openPopup = () => {
  showPopup.value = true
}

const closePopup = () => {
  showPopup.value = false
  prompt.value = ''
  gptResponse.value = ''
  error.value = null
  loading.value = false
}

const sendToGPT = async () => {
  if (!prompt.value.trim()) return

  loading.value = true
  error.value = null
  gptResponse.value = ''

  try {
    const response = await fetch('http://localhost:3000/api/ask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: prompt.value }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.error || 'Unexpected server error')
    }

    const data = await response.json()
    gptResponse.value = data.reply
  } catch (err) {
    error.value = 'Failed to reach GPT API: ' + err.message
  } finally {
    loading.value = false
  }
}


onMounted(() => {

  setTimeout(() => {
    showSplash.value = false
  }, 3000)

  try {
    const socket = new WebSocket('ws://localhost:3000') // Update IP if needed
    socket.onopen = () => console.log('WebSocket connected')
    socket.onmessage = (event) => {
      const msg = JSON.parse(event.data)
      if (msg.type === 'update') {
        console.log('Counter updated to:', msg.value)
      }
    }
    socket.onerror = (e) => console.warn('WebSocket error:', e)
  } catch (e) {
    console.warn('WebSocket setup failed:', e)
  }
})


const handleKeyDown = (e) => {
  if (e.key === 'Escape' && showPopup.value) {
    closePopup()
  }
}

window.addEventListener('keydown', handleKeyDown)

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeyDown)
})
</script>

<style scoped>

html,body{
  height: 100%;
  margin: 0;
  padding: 0;
}
.app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #f4f6f8;
  min-height: 100vh;
  padding: 1rem;
}

.gemini-button {
  position: fixed;
  bottom: 20px;
  left: 50%; 
  transform: translateX(-50%); 
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 50px;
  padding: 12px 20px;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  z-index: 9999;
}

.gemini-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9998;
}

.gemini-modal {
  background: white;
  padding: 2rem;
  width: 90%;
  max-width: 500px;
  border-radius: 10px;
  position: relative;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.gemini-modal textarea {
  width: 100%;
  height: 100px;
  margin-top: 1rem;
  padding: 10px;
  font-size: 16px;
  border-radius: 6px;
}

.button-group {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 1rem;
}

.gemini-modal button {
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 6px;
  border: none;
  background: #4CAF50;
  color: white;
  cursor: pointer;
}

.gemini-modal .close-btn {
  background: #d9534f;
}

.gpt-response {
  margin-top: 1rem;
  background: #f0f0f0;
  padding: 10px;
  border-radius: 6px;
}

.error {
  color: red;
  margin-top: 10px;
}

.loading {
  margin-top: 10px;
  color: #007bff;
}
.app {
  position: relative;
  font-family: Arial, sans-serif;
}


.splash-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #282c34;
  color: #61dafb;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  z-index: 9999;
}





.gemini-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
}

/* Modal box */
.gemini-modal {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  max-width: 90%;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}

textarea {
  width: 100%;
  height: 100px;
  margin-top: 10px;
  margin-bottom: 15px;
  padding: 8px;
  font-size: 1rem;
  resize: vertical;
}

.button-group {
  display: flex;
  justify-content: space-between;
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.loading {
  margin-top: 10px;
  color: #333;
}

.gpt-response {
  margin-top: 15px;
  background: #f6f6f6;
  padding: 10px;
  border-radius: 5px;
}

.error {
  margin-top: 10px;
  color: red;
}

</style>
