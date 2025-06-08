<template>
  <div class="home">
    <h1>EU AI Act Readiness Checker</h1>
    <p>Evaluate your AI system’s compliance with the EU AI Act.</p>

    <div class="card-group">
      <router-link to="/assess" class="card assess">Assess</router-link>
      <router-link to="/analyze" class="card analyze">Analyze</router-link>
      <router-link to="/act" class="card act">Act</router-link>
    </div>

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
      <router-link to="/assess" class="start-btn">Start Assessment</router-link>
    </div>
  </div>
</template>

<style scoped>
.home {
  text-align: center;
  font-family: 'Segoe UI', sans-serif;
  padding: 2rem;
}

.card-group {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0;
}

.card {
  padding: 1rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  color: white;
  font-weight: bold;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.assess {
  background-color: #1f3a93;
}

.analyze {
  background-color: #26a69a;
}

.act {
  background-color: #1f3a93;
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
  text-decoration: none;
}
</style>
