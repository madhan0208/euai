<template>
  <div class="app">
    <h1>Counter: {{ counter }}</h1>

    <div v-if="loading" class="loading">
      <p>Loading...</p>
    </div>

    <div v-if="success" class="success">
      <p>Counter incremented successfully!</p>
    </div>

    <div v-if="error" class="error">
      <p>Error: {{ error }}</p>
    </div>

    <button @click="incrementCounter" :disabled="loading">
      Increment Counter
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue' 

const counter = ref(0);
const loading = ref(false);
const success = ref(false);
const error = ref(null);

let socket;

const getCounter = async () => {
  try {
    loading.value = true;
    const response = await fetch('http://192.168.0.106:3000/api/counter');  //replace with current ip address
    const data = await response.json();
    counter.value = data.value;
    loading.value = false;
  } catch (err) {
    loading.value = false;
    error.value = 'Error fetching counter: ' + err.message;
  }
};

const incrementCounter = async () => {
  try {
    loading.value = true;
    const response = await fetch('http://192.168.0.106:3000/api/counter/increment', {  //replace with current ip address
      method: 'POST',
    });
    const data = await response.json();
    counter.value = data.value;
    success.value = true;
    error.value = null;
    loading.value = false;

    setTimeout(() => {
      success.value = false;
    }, 2000);
  } catch (err) {
    loading.value = false;
    error.value = 'Error incrementing counter: ' + err.message;
    success.value = false;
  }
};

// Set up WebSocket connection to receive real-time updates
onMounted(() => {
  getCounter(); // Fetch initial counter value

  socket = new WebSocket('ws://192.168.0.106:3000');  //replace with current ip address
  
  socket.onopen = () => {
    console.log('WebSocket connected');
  };

  socket.onmessage = (event) => {
    const msg = JSON.parse(event.data);
    if (msg.type === 'update') {
      counter.value = msg.value;
    }
  };

  socket.onerror = (error) => {
    console.log('WebSocket Error:', error);
  };

  socket.onclose = () => {
    console.log('WebSocket connection closed');
  };
});
</script>

<style scoped>
.app {
  text-align: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 2rem;
  background: #f4f6f8;
  min-height: 100vh;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #333;
}

.counter-value {
  font-size: 3rem;
  font-weight: bold;
  margin: 1rem 0;
  color: #2c3e50;
}

button {
  padding: 12px 24px;
  background: linear-gradient(to right, #4CAF50, #45a049);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background 0.3s ease, transform 0.2s;
}

button:hover {
  background: linear-gradient(to right, #45a049, #388e3c);
  transform: scale(1.05);
}

button:disabled {
  background-color: #bbb;
  cursor: not-allowed;
  transform: none;
}

.loading,
.success,
.error {
  font-size: 18px;
  margin-top: 1rem;
  font-weight: 500;
}

.loading {
  color: #007bff;
}

.success {
  color: #28a745;
}

.error {
  color: #dc3545;
}
</style>
