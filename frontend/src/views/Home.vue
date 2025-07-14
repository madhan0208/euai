<template>
  <div class="assessment-container">
    <div class="header">
      <router-link to="/" class="logo-link">
        <img src="@/assets/logo.jpg" alt="Company Logo" class="header-logo" />
      </router-link>
      <div class="header-content">
        <h2>EU AI Act Readiness Checker</h2>
        <p>Evaluate your AI system’s compliance with the EU AI Act.</p>
      </div>
      <div class="progress-bar-container">
        <span class="progress-text">Welcome</span>
        <div class="progress-bar">
          <div class="progress" style="width: 0%;"></div> </div>
      </div>
    </div>

    <div class="card">
      <div class="navigation-tabs">
        <div class="tab active">Overview</div>
      </div>

      <div class="content-section">
        <div class="card-group">
          <button to="/assess" class="feature-card">
            <h1 class="card-title">Assess</h1>
            <h4 class="card-description">Complete our 50-question assessment across 5 key compliance areas.</h4>
          </button>
          <button to="/analyze" class="feature-card">
            <h1 class="card-title">Analyze</h1>
            <h4 class="card-description">Get your risk score based on a weighted analysis of your answers.</h4>
          </button>
          <button to="/act" class="feature-card">
            <h1 class="card-title">Act</h1>
            <h4 class="card-description">Receive tailored recommendations to improve compliance.</h4>
          </button>
        </div>

        <div class="info-box">
          <h2>PoC Demo: Gmail Email Summarizer</h2>
          <p>This assessment is pre-configured to test Gemini’s Gmail summarization.</p>
          <ul>
            <li>50 targeted questions across 5 regulatory categories</li>
            <li>Weighted scoring based on regulatory importance</li>
            <li>Risk classification (Low, Medium, High)</li>
            <li>Detailed compliance memo with recommendations</li>
          </ul>
          <p><strong>Time Required:</strong> 15–20 minutes</p>
          <router-link to="/startassesment" class="start-assessment-btn">Start Assessment</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.assessment-container {
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  font-family: Arial, sans-serif;
}

.header {
  background-color: #2c3e50;
  color: white;
  padding: 20px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  position: relative;
}

.logo-link {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 10;
}

.header-logo {
  height: 40px;
  width: auto;
}

.header-content {
  flex-grow: 1;
  text-align: center;
  margin-left: 60px;
  margin-right: 60px;
}

.header-content h2 {
  margin-top: 0;
  margin-bottom: 5px;
  font-size: 24px;
}

.header-content p {
  margin-bottom: 0;
  font-size: 14px;
  opacity: 0.8;
}

.progress-bar-container {
  text-align: right;
  margin-top: 10px;
  min-width: 150px;
}

.progress-text {
  font-size: 14px;
  margin-bottom: 5px;
  display: block;
}

.progress-bar {
  background-color: #555;
  border-radius: 5px;
  height: 8px;
  overflow: hidden;
}

.progress {
  background-color: #2ecc71;
  height: 100%;
  border-radius: 5px;
  transition: width 0.3s ease-in-out;
}

.card {
  background: #ffffff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  margin-top: -20px;
}

.navigation-tabs {
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #eee;
  margin-bottom: 20px;
  padding-bottom: 10px;
  overflow-x: auto;
}

.tab {
  padding: 10px 15px;
  cursor: pointer;
  font-weight: 600;
  color: #777;
  white-space: nowrap;
  flex-shrink: 0;
}

.tab.active {
  color: #3498db;
  border-bottom: 2px solid #3498db;
}

.content-section {
  padding: 10px 0;
  text-align: center; /* Center content within the card */
}

.card-group {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0;
  flex-wrap: wrap; /* Allow cards to wrap on smaller screens */
}

.feature-card {
  padding: 1rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  color: white;
  font-weight: bold;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  flex: 1; /* Allow cards to grow and shrink */
  min-width: 200px; /* Minimum width for each card */
  max-width: 28%; /* Adjust for 3 cards per row */
  display: flex; /* Use flex for internal content alignment */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform 0.2s ease-in-out;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-card h1 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-size: 1.8rem; /* Adjusted for better fit */
}

.feature-card h4 {
  font-size: 0.9rem;
  line-height: 1.4;
  margin: 0;
}

/* Specific background colors for feature cards, like original */
.card-group .feature-card:nth-child(1) { /* Assess */
  background-color: #1f3a93;
}

.card-group .feature-card:nth-child(2) { /* Analyze */
  background-color: #26a69a;
}

.card-group .feature-card:nth-child(3) { /* Act */
  background-color: #1f3a93;
}


.card {
  flex: 1;
  background: #ffffff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  margin-top: -20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.assessment-container {
  background-color: #f0f2f5; /* light background */
}

.card-title {
  color: white; /* Changed from red to white for consistency with card background */
  margin-top: 0;
  margin-bottom: 0.5rem;
}

.card-description {
  color: white;
  background-color: transparent; /* Remove red background, rely on card's background */
  padding: 0; /* Remove padding if any */
  margin: 0;
}

.info-box {
  margin-top: 2rem;
  background-color: #f9f9f9; /* Lighter background like question items */
  border: 1px solid #e0e0e0; /* Border like question items */
  padding: 2rem;
  border-radius: 8px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  text-align: left; /* Keep text alignment to left for readability of lists */
}

.info-box h2 {
  color: #333;
  margin-top: 0;
  margin-bottom: 1rem;
}

.info-box p {
  color: #555;
  margin-bottom: 0.8rem;
}

.info-box ul {
  list-style-type: disc;
  margin-left: 20px;
  color: #555;
  margin-bottom: 1rem;
}

.info-box li {
  margin-bottom: 5px;
}

.start-assessment-btn {
  display: inline-block;
  margin-top: 1rem;
  background-color: #3498db; /* Consistent with button color on questions page */
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 6px; /* Consistent with button border-radius */
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.2s ease;
}

.start-assessment-btn:hover {
  background-color: #2980b9; /* Consistent hover state */
}

/* Responsive adjustments for smaller screens */
@media (max-width: 768px) {
  .header {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .progress-bar-container {
    margin-top: 15px;
  }
  .navigation-tabs {
    flex-wrap: wrap;
    justify-content: center;
  }
  .tab {
    padding: 8px 10px;
    font-size: 14px;
  }
  .logo-link {
    position: static;
    margin-bottom: 10px;
  }
  .header-content {
    margin-left: 0;
    margin-right: 0;
  }
  .card-group {
    flex-direction: column; /* Stack cards vertically on small screens */
    align-items: center;
  }
  .feature-card {
    max-width: 90%; /* Make cards wider when stacked */
    margin-bottom: 1rem; /* Add space between stacked cards */
  }
}


.info-box {
  margin-top: 2rem;
  background-color: #f9f9f9;
  border: 1px solid #e0e0e0;
  padding: 3rem; /* increased from 2rem */
  border-radius: 10px;
  max-width: 700px; /* increased from 600px */
  margin-left: auto;
  margin-right: auto;
  text-align: left;
  font-size: 1.1rem; /* increased font size */
  line-height: 1.6; /* improve readability */
}

</style>