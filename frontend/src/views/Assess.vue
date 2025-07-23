<template>
  <div class="assess-page">
    <h2>Assess Page</h2>

    <div class="demo-box">
      <h2>PoC Demo: Gmail Email Summarizer</h2>
      <p>This assessment is pre-configured to test Gemini’s Gmail summarization.</p>
      <ul>
        <li>50 targeted questions across 5 regulatory categories</li>
        <li>Weighted scoring based on regulatory importance</li>
        <li>Risk classification (Low, Medium, High)</li>
        <li>Detailed compliance memo with recommendations</li>
      </ul>
      <p><strong>Time Required:</strong> 15–20 minutes</p>
      
      <button class="start-btn">Start Now</button>
    </div>
  </div>
</template>

<script setup>
console.log("Assess.vue loaded");
</script>

<style scoped>
.assess-page {
  text-align: center;
  padding: 2rem;
  font-family: 'Segoe UI', sans-serif;
}

.demo-box {
  margin-top: 2rem;
  background: #e3f2fd;
  padding: 2rem;
  border-radius: 8px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.start-btn {
  display: inline-block;
  margin-top: 1rem;
  background-color: #00796b;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}
</style>
