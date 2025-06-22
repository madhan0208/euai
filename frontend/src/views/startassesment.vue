<template>
  <div class="assessment-container">
    <div class="header">
      <router-link to="/" class="logo-link">
        <img src="@/assets/logo.jpg" alt="Company Logo" class="header-logo" />
      </router-link>
      <div class="header-content">
        <h2>EU AI Act Readiness Assessment</h2>
        <p>Answer these questions to evaluate your AI system's compliance with EU regulations</p>
      </div>
      <div class="progress-bar-container">
        <span class="progress-text">Step {{ currentPage }} of 5</span>
        <div class="progress-bar">
          <div class="progress" :style="{ width: progressPercentage }"></div>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="navigation-tabs">
        <div :class="['tab', { active: currentPage >= 1 }]">System Overview</div>
        <div :class="['tab', { active: currentPage >= 2 }]">Data & Processing</div>
        <div :class="['tab', { active: currentPage >= 3 }]">Model Ownership</div>
        <div :class="['tab', { active: currentPage >= 4 }]">Security & Governance</div>
        <div :class="['tab', { active: currentPage >= 5 }]">Impact & Risk</div>
      </div>

      <div v-if="currentPage === 1">
        <div class="question-group">
          <div class="question-item">
            <div class="question-text">
              <span class="question-number">1</span>
              Does your AI system provide email summarization functionality?
            </div>
            <div class="question-weight">Weight: 3%</div>
            <div class="radio-options">
              <label>
                <input type="radio" value="Yes" v-model="page1Answers.q1" /> Yes
              </label>
              <label>
                <input type="radio" value="No" v-model="page1Answers.q1" /> No
              </label>
              <label>
                <input type="radio" value="Partially" v-model="page1Answers.q1" /> Partially
              </label>
              <label>
                <input type="radio" value="Not Sure" v-model="page1Answers.q1" /> Not Sure
              </label>
            </div>
          </div>

          <div class="question-item">
            <div class="question-text">
              <span class="question-number">2</span>
              Is this system accessible to end-users in the EU?
            </div>
            <div class="question-weight">Weight: 5%</div>
            <div class="radio-options">
              <label>
                <input type="radio" value="Yes" v-model="page1Answers.q2" /> Yes
              </label>
              <label>
                <input type="radio" value="No" v-model="page1Answers.q2" /> No
              </label>
              <label>
                <input type="radio" value="Partially" v-model="page1Answers.q2" /> Partially
              </label>
              <label>
                <input type="radio" value="Not Sure" v-model="page1Answers.q2" /> Not Sure
              </label>
            </div>
          </div>

          <div class="question-item">
            <div class="question-text">
              <span class="question-number">3</span>
              Does the system provide real-time responses?
            </div>
            <div class="question-weight">Weight: 2%</div>
            <div class="radio-options">
              <label>
                <input type="radio" value="Yes" v-model="page1Answers.q3" /> Yes
              </label>
              <label>
                <input type="radio" value="No" v-model="page1Answers.q3" /> No
              </label>
              <label>
                <input type="radio" value="Partially" v-model="page1Answers.q3" /> Partially
              </label>
              <label>
                <input type="radio" value="Not Sure" v-model="page1Answers.q3" /> Not Sure
              </label>
            </div>
          </div>
        </div>
      </div>

      <div v-if="currentPage === 2">
        <div class="question-group">
          <div class="question-item">
            <div class="question-text">
              <span class="question-number">1</span>
              Does your system process personal data such as names and email addresses?
            </div>
            <div class="radio-options">
              <label>
                <input type="radio" value="Yes" v-model="page2Answers.q1" /> Yes
              </label>
              <label>
                <input type="radio" value="No" v-model="page2Answers.q1" /> No
              </label>
              <label>
                <input type="radio" value="Partially" v-model="page2Answers.q1" /> Partially
              </label>
              <label>
                <input type="radio" value="Not Sure" v-model="page2Answers.q1" /> Not Sure
              </label>
            </div>
          </div>

          <div class="question-item">
            <div class="question-text">
              <span class="question-number">2</span>
              Are you processing peer-to-peer communication data?
            </div>
            <div class="radio-options">
              <label>
                <input type="radio" value="Yes" v-model="page2Answers.q2" /> Yes
              </label>
              <label>
                <input type="radio" value="No" v-model="page2Answers.q2" /> No
              </label>
              <label>
                <input type="radio" value="Partially" v-model="page2Answers.q2" /> Partially
              </label>
              <label>
                <input type="radio" value="Not Sure" v-model="page2Answers.q2" /> Not Sure
              </label>
            </div>
          </div>

          <div class="question-item">
            <div class="question-text">
              <span class="question-number">3</span>
              Does the system use personal identifiers (names, email IDs)?
            </div>
            <div class="radio-options">
              <label>
                <input type="radio" value="Yes" v-model="page2Answers.q3" /> Yes
              </label>
              <label>
                <input type="radio" value="No" v-model="page2Answers.q3" /> No
              </label>
              <label>
                <input type="radio" value="Partially" v-model="page2Answers.q3" /> Partially
              </label>
              <label>
                <input type="radio" value="Not Sure" v-model="page2Answers.q3" /> Not Sure
              </label>
            </div>
          </div>
        </div>
      </div>

      <div v-if="currentPage === 3">
        <div class="question-group">
          <div class="question-item">
            <div class="question-text">
              <span class="question-number">1</span>
              Are you using third-party APIs (e.g., Gemini) for your model?
            </div>
            <div class="radio-options">
              <label>
                <input type="radio" value="Yes" v-model="page3Answers.q1" /> Yes
              </label>
              <label>
                <input type="radio" value="No" v-model="page3Answers.q1" /> No
              </label>
              <label>
                <input type="radio" value="Partially" v-model="page3Answers.q1" /> Partially
              </label>
              <label>
                <input type="radio" value="Not Sure" v-model="page3Answers.q1" /> Not Sure
              </label>
            </div>
          </div>

          <div class="question-item">
            <div class="question-text">
              <span class="question-number">2</span>
              Do you fine-tune pre-trained models on your own data?
            </div>
            <div class="radio-options">
              <label>
                <input type="radio" value="Yes" v-model="page3Answers.q2" /> Yes
              </label>
              <label>
                <input type="radio" value="No" v-model="page3Answers.q2" /> No
              </label>
              <label>
                <input type="radio" value="Partially" v-model="page3Answers.q2" /> Partially
              </label>
              <label>
                <input type="radio" value="Not Sure" v-model="page3Answers.q2" /> Not Sure
              </label>
            </div>
          </div>

          <div class="question-item">
            <div class="question-text">
              <span class="question-number">3</span>
              Can you explain the rationale behind your model architecture choice?
            </div>
            <div class="radio-options">
              <label>
                <input type="radio" value="Yes" v-model="page3Answers.q3" /> Yes
              </label>
              <label>
                <input type="radio" value="No" v-model="page3Answers.q3" /> No
              </label>
              <label>
                <input type="radio" value="Partially" v-model="page3Answers.q3" /> Partially
              </label>
              <label>
                <input type="radio" value="Not Sure" v-model="page3Answers.q3" /> Not Sure
              </label>
            </div>
          </div>
        </div>
      </div>

      <div v-if="currentPage === 4">
        <div class="question-group">
          <div class="question-item">
            <div class="question-text">
              <span class="question-number">1</span>
              Do you monitor for prompt injections or adversarial inputs?
            </div>
            <div class="radio-options">
              <label>
                <input type="radio" value="Yes" v-model="page4Answers.q1" /> Yes
              </label>
              <label>
                <input type="radio" value="No" v-model="page4Answers.q1" /> No
              </label>
              <label>
                <input type="radio" value="Partially" v-model="page4Answers.q1" /> Partially
              </label>
              <label>
                <input type="radio" value="Not Sure" v-model="page4Answers.q1" /> Not Sure
              </label>
            </div>
          </div>

          <div class="question-item">
            <div class="question-text">
              <span class="question-number">2</span>
              Is the model output audited or explainable?
            </div>
            <div class="radio-options">
              <label>
                <input type="radio" value="Yes" v-model="page4Answers.q2" /> Yes
              </label>
              <label>
                <input type="radio" value="No" v-model="page4Answers.q2" /> No
              </label>
              <label>
                <input type="radio" value="Partially" v-model="page4Answers.q2" /> Partially
              </label>
              <label>
                <input type="radio" value="Not Sure" v-model="page4Answers.q2" /> Not Sure
              </label>
            </div>
          </div>

          <div class="question-item">
            <div class="question-text">
              <span class="question-number">3</span>
              Can the system behavior be overridden by a human?
            </div>
            <div class="radio-options">
              <label>
                <input type="radio" value="Yes" v-model="page4Answers.q3" /> Yes
              </label>
              <label>
                <input type="radio" value="No" v-model="page4Answers.q3" /> No
              </label>
              <label>
                <input type="radio" value="Partially" v-model="page4Answers.q3" /> Partially
              </label>
              <label>
                <input type="radio" value="Not Sure" v-model="page4Answers.q3" /> Not Sure
              </label>
            </div>
          </div>
        </div>
      </div>

      <div v-if="currentPage === 5">
        <div class="question-group">
          <div class="question-item">
            <div class="question-text">
              <span class="question-number">1</span>
              Have you identified potential risks (bias, hallucination) in the use case?
            </div>
            <div class="radio-options">
              <label>
                <input type="radio" value="Yes" v-model="page5Answers.q1" /> Yes
              </label>
              <label>
                <input type="radio" value="No" v-model="page5Answers.q1" /> No
              </label>
              <label>
                <input type="radio" value="Partially" v-model="page5Answers.q1" /> Partially
              </label>
              <label>
                <input type="radio" value="Not Sure" v-model="page5Answers.q1" /> Not Sure
              </label>
            </div>
          </div>

          <div class="question-item">
            <div class="question-text">
              <span class="question-number">2</span>
              Is the output being used for decision-making that impacts users?
            </div>
            <div class="radio-options">
              <label>
                <input type="radio" value="Yes" v-model="page5Answers.q2" /> Yes
              </label>
              <label>
                <input type="radio" value="No" v-model="page5Answers.q2" /> No
              </label>
              <label>
                <input type="radio" value="Partially" v-model="page5Answers.q2" /> Partially
              </label>
              <label>
                <input type="radio" value="Not Sure" v-model="page5Answers.q2" /> Not Sure
              </label>
            </div>
          </div>

          <div class="question-item">
            <div class="question-text">
              <span class="question-number">3</span>
              Do users have the ability to dispute or correct summaries?
            </div>
            <div class="radio-options">
              <label>
                <input type="radio" value="Yes" v-model="page5Answers.q3" /> Yes
              </label>
              <label>
                <input type="radio" value="No" v-model="page5Answers.q3" /> No
              </label>
              <label>
                <input type="radio" value="Partially" v-model="page5Answers.q3" /> Partially
              </label>
              <label>
                <input type="radio" value="Not Sure" v-model="page5Answers.q3" /> Not Sure
              </label>
            </div>
          </div>
        </div>
      </div>

      <div class="navigation">
        <button v-if="currentPage > 1" @click="prevPage">Back</button>
        <button v-if="currentPage < 5" @click="nextPage" :disabled="!canProceed">
          Next
        </button>
        <button v-else @click="submitAssessment" :disabled="!canProceed">
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
      page1Answers: {
        q1: '', // Does your AI system provide email summarization functionality?
        q2: '', // Is this system accessible to end-users in the EU?
        q3: '', // Does the system provide real-time responses?
      },
      page2Answers: {
        q1: '', // Does your system process personal data such as names and email addresses?
        q2: '', // Are you processing peer-to-peer communication data?
        q3: '', // Does the system use personal identifiers (names, email IDs)?
      },
      page3Answers: {
        q1: '', // Are you using third-party APIs (e.g., Gemini) for your model?
        q2: '', // Do you fine-tune pre-trained models on your own data?
        q3: '', // Can you explain the rationale behind your model architecture choice?
      },
      page4Answers: {
        q1: '', // Do you monitor for prompt injections or adversarial inputs?
        q2: '', // Is the model output audited or explainable?
        q3: '', // Can the system behavior be overridden by a human?
      },
      page5Answers: {
        q1: '', // Have you identified potential risks (bias, hallucination) in the use case?
        q2: '', // Is the output being used for decision-making that impacts users?
        q3: '', // Do users have the ability to dispute or correct summaries?
      },
    };
  },
  computed: {
    canProceed() {
      const pageAnswers = {
        1: this.page1Answers,
        2: this.page2Answers,
        3: this.page3Answers,
        4: this.page4Answers,
        5: this.page5Answers,
      };
      const currentAnswers = pageAnswers[this.currentPage];
      return Object.values(currentAnswers).every((ans) => ans.trim() !== '');
    },
    progressPercentage() {
      // Calculate progress based on 5 steps
      return (this.currentPage / 5) * 100 + '%';
    },
  },
  methods: {
    nextPage() {
      if (this.canProceed && this.currentPage < 5) {
        this.currentPage += 1;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage -= 1;
      }
    },
    submitAssessment() {
      if (this.canProceed) {
        alert('Assessment submitted!');
        // TODO: Replace this with actual submission logic, e.g., sending data to an API
        console.log('Page 1 Answers:', this.page1Answers);
        console.log('Page 2 Answers:', this.page2Answers);
        console.log('Page 3 Answers:', this.page3Answers);
        console.log('Page 4 Answers:', this.page4Answers);
        console.log('Page 5 Answers:', this.page5Answers);
      }
    },
  },
};
</script>

<style scoped>
.assessment-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
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
  position: relative; /* Needed for absolute positioning of logo */
}

.logo-link {
  position: absolute;
  top: 20px; /* Adjust as needed */
  left: 20px; /* Adjust as needed */
  z-index: 10; /* Ensure it's above other elements */
}

.header-logo {
  height: 40px; /* Adjust size as needed */
  width: auto;
}

.header-content {
  flex-grow: 1; /* Allows content to take available space */
  text-align: center; /* Center the text content */
  margin-left: 60px; /* Offset for logo */
  margin-right: 60px; /* Balance the offset */
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
  min-width: 150px; /* Ensure it doesn't get too narrow */
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
  background-color: #2ecc71; /* Green color for progress */
  height: 100%;
  border-radius: 5px;
  transition: width 0.3s ease-in-out;
}

.card {
  background: #ffffff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  margin-top: -20px; /* Overlap with header for a continuous look */
}

.navigation-tabs {
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #eee;
  margin-bottom: 20px;
  padding-bottom: 10px;
  overflow-x: auto; /* Enable horizontal scrolling for many tabs */
}

.tab {
  padding: 10px 15px;
  cursor: pointer;
  font-weight: 600;
  color: #777;
  white-space: nowrap; /* Prevent text wrapping */
  flex-shrink: 0; /* Prevent tabs from shrinking */
}

.tab.active {
  color: #3498db;
  border-bottom: 2px solid #3498db;
}

.question-group {
  padding: 10px 0;
}

.question-item {
  background-color: #f9f9f9;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 15px 20px;
  margin-bottom: 20px;
}

.question-text {
  font-weight: bold;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
}

.question-number {
  background-color: #3498db;
  color: white;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  margin-right: 10px;
  flex-shrink: 0;
}

.question-weight {
  font-size: 12px;
  color: #666;
  margin-left: 34px; /* Align with question text indentation */
  margin-bottom: 10px;
}

.radio-options {
  display: flex;
  flex-wrap: wrap;
  gap: 20px; /* Space between radio buttons */
  margin-left: 34px; /* Align with question text indentation */
}

.radio-options label {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.radio-options input[type="radio"] {
  margin-right: 8px;
  transform: scale(1.1); /* Slightly larger radio buttons */
}

.question {
  margin-bottom: 15px;
}

.question label {
  display: block;
  font-weight: 600;
  margin-bottom: 5px;
}

.question input {
  width: calc(100% - 16px); /* Account for padding */
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
}

.navigation {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
}

.navigation button {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.2s ease;
}

.navigation button:hover:not(:disabled) {
  background-color: #2980b9;
}

.navigation button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

/* Responsive adjustments */
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
  .radio-options {
    flex-direction: column;
    gap: 10px;
  }
  .logo-link {
    position: static; /* Remove absolute positioning on small screens */
    margin-bottom: 10px; /* Add space below logo */
  }
  .header-content {
    margin-left: 0; /* Reset margin for logo */
    margin-right: 0; /* Reset margin for logo */
  }
}
</style>