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
                <input type="radio" value="Yes" v-model="q1_model" /> Yes
              </label>
              <label>
                <input type="radio" value="No" v-model="q1_model" /> No
              </label>
              <label>
                <input type="radio" value="Partially" v-model="q1_model" /> Partially
              </label>
              <label>
                <input type="radio" value="Not Sure" v-model="q1_model" /> Not Sure
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
                <input type="radio" value="Yes" v-model="q2_model" /> Yes
              </label>
              <label>
                <input type="radio" value="No" v-model="q2_model" /> No
              </label>
              <label>
                <input type="radio" value="Partially" v-model="q2_model" /> Partially
              </label>
              <label>
                <input type="radio" value="Not Sure" v-model="q2_model" /> Not Sure
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
                <input type="radio" value="Yes" v-model="q3_model" /> Yes
              </label>
              <label>
                <input type="radio" value="No" v-model="q3_model" /> No
              </label>
              <label>
                <input type="radio" value="Partially" v-model="q3_model" /> Partially
              </label>
              <label>
                <input type="radio" value="Not Sure" v-model="q3_model" /> Not Sure
              </label>
            </div>
          </div>
          <div class="question-item">
            <div class="question-text">
              <span class="question-number">4</span>
              "Do users interact with the system primarily through text?
            </div>
            <div class="question-weight">Weight: 5%</div>
            <div class="radio-options">
              <label>
                <input type="radio" value="Yes" v-model="q4_model" /> Yes
              </label>
              <label>
                <input type="radio" value="No" v-model="q4_model" /> No
              </label>
              <label>
                <input type="radio" value="Partially" v-model="q4_model" /> Partially
              </label>
              <label>
                <input type="radio" value="Not Sure" v-model="q4_model" /> Not Sure
              </label>
            </div>
          </div>
          

          <div class="question-item">
            <div class="question-text">
              <span class="question-number">5</span>
              ""Does the system support critical decision-making (e.g., hiring, lending)?
            </div>
            <div class="question-weight">Weight: 5%</div>
            <div class="radio-options">
              <label>
                <input type="radio" value="Yes" v-model="q5_model" /> Yes
              </label>
              <label>
                <input type="radio" value="No" v-model="q5_model" /> No
              </label>
              <label>
                <input type="radio" value="Partially" v-model="q5_model" /> Partially
              </label>
              <label>
                <input type="radio" value="Not Sure" v-model="q5_model" /> Not Sure
              </label>
            </div>
          </div>
      <div class="question-item">
            <div class="question-text">
              <span class="question-number">6</span>
              "Are users notified that they are interacting with an AI system?"
            </div>
            <div class="question-weight">Weight: 5%</div>
            <div class="radio-options">
              <label>
                <input type="radio" value="Yes" v-model="q6_model" /> Yes
              </label>
              <label>
                <input type="radio" value="No" v-model="q6_model" /> No
              </label>
              <label>
                <input type="radio" value="Partially" v-model="q6_model" /> Partially
              </label>
              <label>
                <input type="radio" value="Not Sure" v-model="q6_model" /> Not Sure
              </label>
            </div>
          </div>

      <div class="question-item">
            <div class="question-text">
              <span class="question-number">7</span>
              "Can users opt out of using the AI summarization feature?"
            </div>
            <div class="question-weight">Weight: 5%</div>
            <div class="radio-options">
              <label>
                <input type="radio" value="Yes" v-model="q7_model" /> Yes
              </label>
              <label>
                <input type="radio" value="No" v-model="q7_model" /> No
              </label>
              <label>
                <input type="radio" value="Partially" v-model="q7_model" /> Partially
              </label>
              <label>
                <input type="radio" value="Not Sure" v-model="q7_model" /> Not Sure
              </label>
            </div>
          </div>

        <div class="question-item">
            <div class="question-text">
              <span class="question-number">8</span>
              "Is the system integrated with other AI capabilities in the application?"
            </div>
            <div class="question-weight">Weight: 5%</div>
            <div class="radio-options">
              <label>
                <input type="radio" value="Yes" v-model="q8_model" /> Yes
              </label>
              <label>
                <input type="radio" value="No" v-model="q8_model" /> No
              </label>
              <label>
                <input type="radio" value="Partially" v-model="q8_model" /> Partially
              </label>
              <label>
                <input type="radio" value="Not Sure" v-model="q8_model" /> Not Sure
              </label>
            </div>
          </div>


          <div class="question-item">
            <div class="question-text">
              <span class="question-number">9</span>
              "Please describe the primary use case for this email summarization system."
            </div>
            <div class="question-weight">Weight: 5%</div>
            <div class="radio-options">
              <label>
                <input type="radio" value="Yes" v-model="q9_model" /> Yes
              </label>
              <label>
                <input type="radio" value="No" v-model="q9_model" /> No
              </label>
              <label>
                <input type="radio" value="Partially" v-model="q9_model" /> Partially
              </label>
              <label>
                <input type="radio" value="Not Sure" v-model="q9_model" /> Not Sure
              </label>
            </div>
          </div>

        <div class="question-item">
            <div class="question-text">
              <span class="question-number">10</span>
              "Have you established accuracy metrics for assessing the quality of summaries?"
            </div>
            <div class="question-weight">Weight: 5%</div>
            <div class="radio-options">
              <label>
                <input type="radio" value="Yes" v-model="q10_model" /> Yes
              </label>
              <label>
                <input type="radio" value="No" v-model="q10_model" /> No
              </label>
              <label>
                <input type="radio" value="Partially" v-model="q10_model" /> Partially
              </label>
              <label>
                <input type="radio" value="Not Sure" v-model="q10_model" /> Not Sure
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
                <input type="radio" value="Yes" v-model="q11_model" /> Yes
              </label>
              <label>
                <input type="radio" value="No" v-model="q11_model" /> No
              </label>
              <label>
                <input type="radio" value="Partially" v-model="q11_model" /> Partially
              </label>
              <label>
                <input type="radio" value="Not Sure" v-model="q11_model" /> Not Sure
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
                <input type="radio" value="Yes" v-model="q12_model" /> Yes
              </label>
              <label>
                <input type="radio" value="No" v-model="q12_model" /> No
              </label>
              <label>
                <input type="radio" value="Partially" v-model="q12_model" /> Partially
              </label>
              <label>
                <input type="radio" value="Not Sure" v-model="q12_model" /> Not Sure
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
                <input type="radio" value="Yes" v-model="q13_model" /> Yes
              </label>
              <label>
                <input type="radio" value="No" v-model="q13_model" /> No
              </label>
              <label>
                <input type="radio" value="Partially" v-model="q13_model" /> Partially
              </label>
              <label>
                <input type="radio" value="Not Sure" v-model="q13_model" /> Not Sure
              </label>
            </div>
          </div>
          

          <div class="question-item">
            <div class="question-text">
              <span class="question-number">4</span>
              Is data anonymized or pseudonymized before model input?
            </div>
            <div class="radio-options">
              <label>
                <input type="radio" value="Yes" v-model="q14_model" /> Yes
              </label>
              <label>
                <input type="radio" value="No" v-model="q14_model" /> No
              </label>
              <label>
                <input type="radio" value="Partially" v-model="q14_model" /> Partially
              </label>
              <label>
                <input type="radio" value="Not Sure" v-model="q14_model" /> Not Sure
              </label>
            </div>
          </div>


          <div class="question-item">
            <div class="question-text">
              <span class="question-number">5</span>
              Is user data retained for longer than necessary to provide the service?
            </div>
            <div class="radio-options">
              <label>
                <input type="radio" value="Yes" v-model="q15_model" /> Yes
              </label>
              <label>
                <input type="radio" value="No" v-model="q15_model" /> No
              </label>
              <label>
                <input type="radio" value="Partially" v-model="q15_model" /> Partially
              </label>
              <label>
                <input type="radio" value="Not Sure" v-model="q15_model" /> Not Sure
              </label>
            </div>
          </div>


          <div class="question-item">
            <div class="question-text">
              <span class="question-number">6</span>
              Is email content stored securely during processing?
            </div>
            <div class="radio-options">
              <label>
                <input type="radio" value="Yes" v-model="q16_model" /> Yes
              </label>
              <label>
                <input type="radio" value="No" v-model="q16_model" /> No
              </label>
              <label>
                <input type="radio" value="Partially" v-model="q16_model" /> Partially
              </label>
              <label>
                <input type="radio" value="Not Sure" v-model="q16_model" /> Not Sure
              </label>
            </div>
          </div>


          <div class="question-item">
            <div class="question-text">
              <span class="question-number">7</span>
              Could the system process special categories of data (health, political opinions)?
            </div>
            <div class="radio-options">
              <label>
                <input type="radio" value="Yes" v-model="q17_model" /> Yes
              </label>
              <label>
                <input type="radio" value="No" v-model="q17_model" /> No
              </label>
              <label>
                <input type="radio" value="Partially" v-model="q17_model" /> Partially
              </label>
              <label>
                <input type="radio" value="Not Sure" v-model="q17_model" /> Not Sure
              </label>
            </div>
          </div>


          <div class="question-item">
            <div class="question-text">
              <span class="question-number">8</span>
              Could the system process data related to children?
            </div>
            <div class="radio-options">
              <label>
                <input type="radio" value="Yes" v-model="q18_model" /> Yes
              </label>
              <label>
                <input type="radio" value="No" v-model="q18_model" /> No
              </label>
              <label>
                <input type="radio" value="Partially" v-model="q18_model" /> Partially
              </label>
              <label>
                <input type="radio" value="Not Sure" v-model="q18_model" /> Not Sure
              </label>
            </div>
          </div>

          <div class="question-item">
            <div class="question-text">
              <span class="question-number">9</span>
              Is data transferred outside the EU during processing?
            </div>
            <div class="radio-options">
              <label>
                <input type="radio" value="Yes" v-model="q19_model" /> Yes
              </label>
              <label>
                <input type="radio" value="No" v-model="q19_model" /> No
              </label>
              <label>
                <input type="radio" value="Partially" v-model="q19_model" /> Partially
              </label>
              <label>
                <input type="radio" value="Not Sure" v-model="q19_model" /> Not Sure
              </label>
            </div>
          </div>


          <div class="question-item">
            <div class="question-text">
              <span class="question-number">10</span>
              Is data minimization applied (only processing necessary data)?
            </div>
            <div class="radio-options">
              <label>
                <input type="radio" value="Yes" v-model="q20_model" /> Yes
              </label>
              <label>
                <input type="radio" value="No" v-model="q20_model" /> No
              </label>
              <label>
                <input type="radio" value="Partially" v-model="q20_model" /> Partially
              </label>
              <label>
                <input type="radio" value="Not Sure" v-model="q20_model" /> Not Sure
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
                <input type="radio" value="Yes" v-model="q21_model" /> Yes
              </label>
              <label>
                <input type="radio" value="No" v-model="q21_model" /> No
              </label>
              <label>
                <input type="radio" value="Partially" v-model="q21_model" /> Partially
              </label>
              <label>
                <input type="radio" value="Not Sure" v-model="q21_model" /> Not Sure
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
                <input type="radio" value="Yes" v-model="q22_model" /> Yes
              </label>
              <label>
                <input type="radio" value="No" v-model="q22_model" /> No
              </label>
              <label>
                <input type="radio" value="Partially" v-model="q22_model" /> Partially
              </label>
              <label>
                <input type="radio" value="Not Sure" v-model="q22_model" /> Not Sure
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
                <input type="radio" value="Yes" v-model="q23_model" /> Yes
              </label>
              <label>
                <input type="radio" value="No" v-model="q23_model" /> No
              </label>
              <label>
                <input type="radio" value="Partially" v-model="q23_model" /> Partially
              </label>
              <label>
                <input type="radio" value="Not Sure" v-model="q23_model" /> Not Sure
              </label>
            </div>
          </div>

          <div class="question-item">
            <div class="question-text">
              <span class="question-number">4</span>
              Do you version and track changes in model updates?
            </div>
            <div class="radio-options">
              <label>
                <input type="radio" value="Yes" v-model="q24_model" /> Yes
              </label>
              <label>
                <input type="radio" value="No" v-model="q24_model" /> No
              </label>
              <label>
                <input type="radio" value="Partially" v-model="q24_model" /> Partially
              </label>
              <label>
                <input type="radio" value="Not Sure" v-model="q24_model" /> Not Sure
              </label>
            </div>
          </div>

          <div class="question-item">
            <div class="question-text">
              <span class="question-number">5</span>
              Are there fallback mechanisms for model failure?
            </div>
            <div class="radio-options">
              <label>
                <input type="radio" value="Yes" v-model="q25_model" /> Yes
              </label>
              <label>
                <input type="radio" value="No" v-model="q25_model" /> No
              </label>
              <label>
                <input type="radio" value="Partially" v-model="q25_model" /> Partially
              </label>
              <label>
                <input type="radio" value="Not Sure" v-model="q25_model" /> Not Sure
              </label>
            </div>
          </div>

          <div class="question-item">
            <div class="question-text">
              <span class="question-number">6</span>
              Is the model fully documented with training data sources?
            </div>
            <div class="radio-options">
              <label>
                <input type="radio" value="Yes" v-model="q26_model" /> Yes
              </label>
              <label>
                <input type="radio" value="No" v-model="q26_model" /> No
              </label>
              <label>
                <input type="radio" value="Partially" v-model="q26_model" /> Partially
              </label>
              <label>
                <input type="radio" value="Not Sure" v-model="q26_model" /> Not Sure
              </label>
            </div>
          </div>


          <div class="question-item">
            <div class="question-text">
              <span class="question-number">7</span>
              Can the model's decision-making process be explained?
            </div>
            <div class="radio-options">
              <label>
                <input type="radio" value="Yes" v-model="q27_model" /> Yes
              </label>
              <label>
                <input type="radio" value="No" v-model="q27_model" /> No
              </label>
              <label>
                <input type="radio" value="Partially" v-model="q27_model" /> Partially
              </label>
              <label>
                <input type="radio" value="Not Sure" v-model="q27_model" /> Not Sure
              </label>
            </div>
          </div>

          <div class="question-item">
            <div class="question-text">
              <span class="question-number">8</span>
              Was the model tested with diverse data across different demographics?
            </div>
            <div class="radio-options">
              <label>
                <input type="radio" value="Yes" v-model="q28_model" /> Yes
              </label>
              <label>
                <input type="radio" value="No" v-model="q28_model" /> No
              </label>
              <label>
                <input type="radio" value="Partially" v-model="q28_model" /> Partially
              </label>
              <label>
                <input type="radio" value="Not Sure" v-model="q28_model" /> Not Sure
              </label>
            </div>
          </div>


          <div class="question-item">
            <div class="question-text">
              <span class="question-number">9</span>
              Have you established performance baselines for the model?
            </div>
            <div class="radio-options">
              <label>
                <input type="radio" value="Yes" v-model="q29_model" /> Yes
              </label>
              <label>
                <input type="radio" value="No" v-model="q29_model" /> No
              </label>
              <label>
                <input type="radio" value="Partially" v-model="q29_model" /> Partially
              </label>
              <label>
                <input type="radio" value="Not Sure" v-model="q29_model" /> Not Sure
              </label>
            </div>
          </div>

          <div class="question-item">
            <div class="question-text">
              <span class="question-number">10</span>
              Are known model limitations documented and communicated to users?
            </div>
            <div class="radio-options">
              <label>
                <input type="radio" value="Yes" v-model="q30_model" /> Yes
              </label>
              <label>
                <input type="radio" value="No" v-model="q30_model" /> No
              </label>
              <label>
                <input type="radio" value="Partially" v-model="q30_model" /> Partially
              </label>
              <label>
                <input type="radio" value="Not Sure" v-model="q30_model" /> Not Sure
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
                <input type="radio" value="Yes" v-model="q31_model" /> Yes
              </label>
              <label>
                <input type="radio" value="No" v-model="q31_model" /> No
              </label>
              <label>
                <input type="radio" value="Partially" v-model="q31_model" /> Partially
              </label>
              <label>
                <input type="radio" value="Not Sure" v-model="q31_model" /> Not Sure
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
                <input type="radio" value="Yes" v-model="q32_model" /> Yes
              </label>
              <label>
                <input type="radio" value="No" v-model="q32_model" /> No
              </label>
              <label>
                <input type="radio" value="Partially" v-model="q32_model" /> Partially
              </label>
              <label>
                <input type="radio" value="Not Sure" v-model="q32_model" /> Not Sure
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
                <input type="radio" value="Yes" v-model="q33_model" /> Yes
              </label>
              <label>
                <input type="radio" value="No" v-model="q33_model" /> No
              </label>
              <label>
                <input type="radio" value="Partially" v-model="q33_model" /> Partially
              </label>
              <label>
                <input type="radio" value="Not Sure" v-model="q33_model" /> Not Sure
              </label>
            </div>
          </div>

          <div class="question-item">
            <div class="question-text">
              <span class="question-number">4</span>
              "How often is the model retrained or updated?
            </div>
            <div class="radio-options">
              <label>
                <input type="radio" value="Yes" v-model="q34_model" /> Yes
              </label>
              <label>
                <input type="radio" value="No" v-model="q34_model" /> No
              </label>
              <label>
                <input type="radio" value="Partially" v-model="q34_model" /> Partially
              </label>
              <label>
                <input type="radio" value="Not Sure" v-model="q34_model" /> Not Sure
              </label>
            </div>
          </div>


          <div class="question-item">
            <div class="question-text">
              <span class="question-number">5</span>
              "Do you maintain an incident log for model misuse?
            </div>
            <div class="radio-options">
              <label>
                <input type="radio" value="Yes" v-model="q35_model" /> Yes
              </label>
              <label>
                <input type="radio" value="No" v-model="q35_model" /> No
              </label>
              <label>
                <input type="radio" value="Partially" v-model="q35_model" /> Partially
              </label>
              <label>
                <input type="radio" value="Not Sure" v-model="q35_model" /> Not Sure
              </label>
            </div>
          </div>


          <div class="question-item">
            <div class="question-text">
              <span class="question-number">6</span>
              "Is there continuous monitoring of the system's outputs?
            </div>
            <div class="radio-options">
              <label>
                <input type="radio" value="Yes" v-model="q36_model" /> Yes
              </label>
              <label>
                <input type="radio" value="No" v-model="q36_model" /> No
              </label>
              <label>
                <input type="radio" value="Partially" v-model="q36_model" /> Partially
              </label>
              <label>
                <input type="radio" value="Not Sure" v-model="q36_model" /> Not Sure
              </label>
            </div>
          </div>

          <div class="question-item">
            <div class="question-text">
              <span class="question-number">7</span>
              "Do you conduct regular security testing of the AI system?
            </div>
            <div class="radio-options">
              <label>
                <input type="radio" value="Yes" v-model="q37_model" /> Yes
              </label>
              <label>
                <input type="radio" value="No" v-model="q37_model" /> No
              </label>
              <label>
                <input type="radio" value="Partially" v-model="q37_model" /> Partially
              </label>
              <label>
                <input type="radio" value="Not Sure" v-model="q37_model" /> Not Sure
              </label>
            </div>
          </div>


          <div class="question-item">
            <div class="question-text">
              <span class="question-number">8</span>
              "Are there strict access controls for model parameters?
            </div>
            <div class="radio-options">
              <label>
                <input type="radio" value="Yes" v-model="q38_model" /> Yes
              </label>
              <label>
                <input type="radio" value="No" v-model="q38_model" /> No
              </label>
              <label>
                <input type="radio" value="Partially" v-model="q38_model" /> Partially
              </label>
              <label>
                <input type="radio" value="Not Sure" v-model="q38_model" /> Not Sure
              </label>
            </div>
          </div>

          <div class="question-item">
            <div class="question-text">
              <span class="question-number">9</span>
              "Do you have an incident response plan for AI system failures?
            </div>
            <div class="radio-options">
              <label>
                <input type="radio" value="Yes" v-model="q39_model" /> Yes
              </label>
              <label>
                <input type="radio" value="No" v-model="q39_model" /> No
              </label>
              <label>
                <input type="radio" value="Partially" v-model="q39_model" /> Partially
              </label>
              <label>
                <input type="radio" value="Not Sure" v-model="q39_model" /> Not Sure
              </label>
            </div>
          </div>


          <div class="question-item">
            <div class="question-text">
              <span class="question-number">10</span>
              "Have you appointed an AI compliance officer or responsible person?
            </div>
            <div class="radio-options">
              <label>
                <input type="radio" value="Yes" v-model="q40_model" /> Yes
              </label>
              <label>
                <input type="radio" value="No" v-model="q40_model" /> No
              </label>
              <label>
                <input type="radio" value="Partially" v-model="q40_model" /> Partially
              </label>
              <label>
                <input type="radio" value="Not Sure" v-model="q40_model" /> Not Sure
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
                <input type="radio" value="Yes" v-model="q41_model" /> Yes
              </label>
              <label>
                <input type="radio" value="No" v-model="q41_model" /> No
              </label>
              <label>
                <input type="radio" value="Partially" v-model="q41_model" /> Partially
              </label>
              <label>
                <input type="radio" value="Not Sure" v-model="q41_model" /> Not Sure
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
                <input type="radio" value="Yes" v-model="q42_model" /> Yes
              </label>
              <label>
                <input type="radio" value="No" v-model="q42_model" /> No
              </label>
              <label>
                <input type="radio" value="Partially" v-model="q42_model" /> Partially
              </label>
              <label>
                <input type="radio" value="Not Sure" v-model="q42_model" /> Not Sure
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
                <input type="radio" value="Yes" v-model="q43_model" /> Yes
              </label>
              <label>
                <input type="radio" value="No" v-model="q43_model" /> No
              </label>
              <label>
                <input type="radio" value="Partially" v-model="q43_model" /> Partially
              </label>
              <label>
                <input type="radio" value="Not Sure" v-model="q43_model" /> Not Sure
              </label>
            </div>
          </div>


          <div class="question-item">
            <div class="question-text">
              <span class="question-number">4</span>
              "Are accessibility or language biases monitored?
            </div>
            <div class="radio-options">
              <label>
                <input type="radio" value="Yes" v-model="q44_model" /> Yes
              </label>
              <label>
                <input type="radio" value="No" v-model="q44_model" /> No
              </label>
              <label>
                <input type="radio" value="Partially" v-model="q44_model" /> Partially
              </label>
              <label>
                <input type="radio" value="Not Sure" v-model="q44_model" /> Not Sure
              </label>
            </div>
          </div>


          <div class="question-item">
            <div class="question-text">
              <span class="question-number">5</span>
              Have you run fairness or representational harm checks?
            </div>
            <div class="radio-options">
              <label>
                <input type="radio" value="Yes" v-model="q45_model" /> Yes
              </label>
              <label>
                <input type="radio" value="No" v-model="q45_model" /> No
              </label>
              <label>
                <input type="radio" value="Partially" v-model="q45_model" /> Partially
              </label>
              <label>
                <input type="radio" value="Not Sure" v-model="q45_model" /> Not Sure
              </label>
            </div>
          </div>


          <div class="question-item">
            <div class="question-text">
              <span class="question-number">6</span>
              "Is the impact assessment for this AI system documented?
            </div>
            <div class="radio-options">
              <label>
                <input type="radio" value="Yes" v-model="q46_model" /> Yes
              </label>
              <label>
                <input type="radio" value="No" v-model="q46_model" /> No
              </label>
              <label>
                <input type="radio" value="Partially" v-model="q46_model" /> Partially
              </label>
              <label>
                <input type="radio" value="Not Sure" v-model="q46_model" /> Not Sure
              </label>
            </div>
          </div>


          <div class="question-item">
            <div class="question-text">
              <span class="question-number">7</span>
              "Is there a mechanism for collecting user feedback on summarization quality?
            </div>
            <div class="radio-options">
              <label>
                <input type="radio" value="Yes" v-model="q47_model" /> Yes
              </label>
              <label>
                <input type="radio" value="No" v-model="q47_model" /> No
              </label>
              <label>
                <input type="radio" value="Partially" v-model="q47_model" /> Partially
              </label>
              <label>
                <input type="radio" value="Not Sure" v-model="q47_model" /> Not Sure
              </label>
            </div>
          </div>


          <div class="question-item">
            <div class="question-text">
              <span class="question-number">8</span>
              Do you conduct periodic reviews of the system's impact?
            </div>
            <div class="radio-options">
              <label>
                <input type="radio" value="Yes" v-model="q48_model" /> Yes
              </label>
              <label>
                <input type="radio" value="No" v-model="q48_model" /> No
              </label>
              <label>
                <input type="radio" value="Partially" v-model="q48_model" /> Partially
              </label>
              <label>
                <input type="radio" value="Not Sure" v-model="q48_model" /> Not Sure
              </label>
            </div>
          </div>


          <div class="question-item">
            <div class="question-text">
              <span class="question-number">9</span>
              Are there clear lines of accountability for the AI system's outputs?
            </div>
            <div class="radio-options">
              <label>
                <input type="radio" value="Yes" v-model="q49_model" /> Yes
              </label>
              <label>
                <input type="radio" value="No" v-model="q49_model" /> No
              </label>
              <label>
                <input type="radio" value="Partially" v-model="q49_model" /> Partially
              </label>
              <label>
                <input type="radio" value="Not Sure" v-model="q49_model" /> Not Sure
              </label>
            </div>
          </div>

          <div class="question-item">
            <div class="question-text">
              <span class="question-number">10</span>
              "Have users been trained on the limitations of the AI system?
            </div>
            <div class="radio-options">
              <label>
                <input type="radio" value="Yes" v-model="q50_model" /> Yes
              </label>
              <label>
                <input type="radio" value="No" v-model="q50_model" /> No
              </label>
              <label>
                <input type="radio" value="Partially" v-model="q50_model" /> Partially
              </label>
              <label>
                <input type="radio" value="Not Sure" v-model="q50_model" /> Not Sure
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
        <button @click="clearAnswers" class="clear-button">Start New Assessment</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      currentPage: 1,
      
      allSubmittedAnswers: {}, 

      
      q1_model: '', q2_model: '', q3_model: '', q4_model: '', q5_model: '',
      q6_model: '', q7_model: '', q8_model: '', q9_model: '', q10_model: '',
      q11_model: '', q12_model: '', q13_model: '', q14_model: '', q15_model: '',
      q16_model: '', q17_model: '', q18_model: '', q19_model: '', q20_model: '',
      q21_model: '', q22_model: '', q23_model: '', q24_model: '', q25_model: '',
      q26_model: '', q27_model: '', q28_model: '', q29_model: '', q30_model: '',
      q31_model: '', q32_model: '', q33_model: '', q34_model: '', q35_model: '',
      q36_model: '', q37_model: '', q38_model: '', q39_model: '', q40_model: '',
      q41_model: '', q42_model: '', q43_model: '', q44_model: '', q45_model: '',
      q46_model: '', q47_model: '', q48_model: '', q49_model: '', q50_model: '',
    };
  },
  created() {
    
    this.loadAnswers();
  },
  computed: {
    canProceed() {
      
      const pageQuestionRanges = {
        1: { start: 1, end: 10 },
        2: { start: 11, end: 20 },
        3: { start: 21, end: 30 },
        4: { start: 31, end: 40 },
        5: { start: 41, end: 50 },
      };

      const range = pageQuestionRanges[this.currentPage];
      if (!range) return false; 

      for (let i = range.start; i <= range.end; i++) {
        
        if (this[`q${i}_model`].trim() === '') {
          return false;
        }
      }
      return true;
    },
    progressPercentage() {
      return (this.currentPage / 5) * 100 + '%';
    },
  },
  watch: {
    
    q1_model(newValue) { this.allSubmittedAnswers.q1 = newValue; this.saveAnswers(); },
    q2_model(newValue) { this.allSubmittedAnswers.q2 = newValue; this.saveAnswers(); },
    q3_model(newValue) { this.allSubmittedAnswers.q3 = newValue; this.saveAnswers(); },
    q4_model(newValue) { this.allSubmittedAnswers.q4 = newValue; this.saveAnswers(); },
    q5_model(newValue) { this.allSubmittedAnswers.q5 = newValue; this.saveAnswers(); },
    q6_model(newValue) { this.allSubmittedAnswers.q6 = newValue; this.saveAnswers(); },
    q7_model(newValue) { this.allSubmittedAnswers.q7 = newValue; this.saveAnswers(); },
    q8_model(newValue) { this.allSubmittedAnswers.q8 = newValue; this.saveAnswers(); },
    q9_model(newValue) { this.allSubmittedAnswers.q9 = newValue; this.saveAnswers(); },
    q10_model(newValue) { this.allSubmittedAnswers.q10 = newValue; this.saveAnswers(); },

    q11_model(newValue) { this.allSubmittedAnswers.q11 = newValue; this.saveAnswers(); },
    q12_model(newValue) { this.allSubmittedAnswers.q12 = newValue; this.saveAnswers(); },
    q13_model(newValue) { this.allSubmittedAnswers.q13 = newValue; this.saveAnswers(); },
    q14_model(newValue) { this.allSubmittedAnswers.q14 = newValue; this.saveAnswers(); },
    q15_model(newValue) { this.allSubmittedAnswers.q15 = newValue; this.saveAnswers(); },
    q16_model(newValue) { this.allSubmittedAnswers.q16 = newValue; this.saveAnswers(); },
    q17_model(newValue) { this.allSubmittedAnswers.q17 = newValue; this.saveAnswers(); },
    q18_model(newValue) { this.allSubmittedAnswers.q18 = newValue; this.saveAnswers(); },
    q19_model(newValue) { this.allSubmittedAnswers.q19 = newValue; this.saveAnswers(); },
    q20_model(newValue) { this.allSubmittedAnswers.q20 = newValue; this.saveAnswers(); },

    q21_model(newValue) { this.allSubmittedAnswers.q21 = newValue; this.saveAnswers(); },
    q22_model(newValue) { this.allSubmittedAnswers.q22 = newValue; this.saveAnswers(); },
    q23_model(newValue) { this.allSubmittedAnswers.q23 = newValue; this.saveAnswers(); },
    q24_model(newValue) { this.allSubmittedAnswers.q24 = newValue; this.saveAnswers(); },
    q25_model(newValue) { this.allSubmittedAnswers.q25 = newValue; this.saveAnswers(); },
    q26_model(newValue) { this.allSubmittedAnswers.q26 = newValue; this.saveAnswers(); },
    q27_model(newValue) { this.allSubmittedAnswers.q27 = newValue; this.saveAnswers(); },
    q28_model(newValue) { this.allSubmittedAnswers.q28 = newValue; this.saveAnswers(); },
    q29_model(newValue) { this.allSubmittedAnswers.q29 = newValue; this.saveAnswers(); },
    q30_model(newValue) { this.allSubmittedAnswers.q30 = newValue; this.saveAnswers(); },

    q31_model(newValue) { this.allSubmittedAnswers.q31 = newValue; this.saveAnswers(); },
    q32_model(newValue) { this.allSubmittedAnswers.q32 = newValue; this.saveAnswers(); },
    q33_model(newValue) { this.allSubmittedAnswers.q33 = newValue; this.saveAnswers(); },
    q34_model(newValue) { this.allSubmittedAnswers.q34 = newValue; this.saveAnswers(); },
    q35_model(newValue) { this.allSubmittedAnswers.q35 = newValue; this.saveAnswers(); },
    q36_model(newValue) { this.allSubmittedAnswers.q36 = newValue; this.saveAnswers(); },
    q37_model(newValue) { this.allSubmittedAnswers.q37 = newValue; this.saveAnswers(); },
    q38_model(newValue) { this.allSubmittedAnswers.q38 = newValue; this.saveAnswers(); },
    q39_model(newValue) { this.allSubmittedAnswers.q39 = newValue; this.saveAnswers(); },
    q40_model(newValue) { this.allSubmittedAnswers.q40 = newValue; this.saveAnswers(); },

    q41_model(newValue) { this.allSubmittedAnswers.q41 = newValue; this.saveAnswers(); },
    q42_model(newValue) { this.allSubmittedAnswers.q42 = newValue; this.saveAnswers(); },
    q43_model(newValue) { this.allSubmittedAnswers.q43 = newValue; this.saveAnswers(); },
    q44_model(newValue) { this.allSubmittedAnswers.q44 = newValue; this.saveAnswers(); },
    q45_model(newValue) { this.allSubmittedAnswers.q45 = newValue; this.saveAnswers(); },
    q46_model(newValue) { this.allSubmittedAnswers.q46 = newValue; this.saveAnswers(); },
    q47_model(newValue) { this.allSubmittedAnswers.q47 = newValue; this.saveAnswers(); },
    q48_model(newValue) { this.allSubmittedAnswers.q48 = newValue; this.saveAnswers(); },
    q49_model(newValue) { this.allSubmittedAnswers.q49 = newValue; this.saveAnswers(); },
    q50_model(newValue) { this.allSubmittedAnswers.q50 = newValue; this.saveAnswers(); },
  },
  methods: {
    loadAnswers() {
      
      const savedAnswers = JSON.parse(localStorage.getItem("submittedAnswers")) || {};
      this.allSubmittedAnswers = savedAnswers;
      
      
      for (let i = 1; i <= 50; i++) {
        this[`q${i}_model`] = savedAnswers[`q${i}`] || '';
      }
    },
    saveAnswers() {
      
      localStorage.setItem("submittedAnswers", JSON.stringify(this.allSubmittedAnswers));
    },
    clearAnswers() {
      
      localStorage.removeItem("submittedAnswers");
      
      
      for (let i = 1; i <= 50; i++) {
        this[`q${i}_model`] = '';
      }
      this.allSubmittedAnswers = {};
      this.currentPage = 1; 
      alert('All assessment answers have been cleared. You can now start a new assessment.');
    },
    nextPage() {
      if (this.canProceed && this.currentPage < 5) {
        this.saveAnswers(); 
        this.currentPage += 1;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.saveAnswers(); 
        this.currentPage -= 1;
      }
    },
    submitAssessment() {
      if (this.canProceed) {
        console.log('submitAssessment called');
        this.saveAnswers(); 

        console.log('Sending:', this.allSubmittedAnswers); 
        
        axios.post('http://localhost:3000/api/submit', 
        {
          answers: this.allSubmittedAnswers 
        },
        {
          headers: { "Content-Type":'application/json'}
        }
      )
        .then(response => {
          alert('Assessment submitted successfully!');
          
          this.$router.push({
            path: '/thankyou',
            query: {
              answers: JSON.stringify(this.allSubmittedAnswers)
            }
          });
          console.log('Response from server:', response.data);
        })
        .catch(error => {
          alert('Error submitting assessment. Please try again.');
          console.error('Submit error:', error);
        });
      }
    },
  },
};
</script>



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
  margin-left: 34px; 
  margin-bottom: 10px;
}

.radio-options {
  display: flex;
  flex-wrap: wrap;
  gap: 20px; 
  margin-left: 34px; 
}

.radio-options label {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.radio-options input[type="radio"] {
  margin-right: 8px;
  transform: scale(1.1); 
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
  width: calc(100% - 16px); 
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

.navigation .clear-button {
  background-color: #e74c3c; 
}

.navigation .clear-button:hover {
  background-color: #c0392b;
}


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
    position: static; 
    margin-bottom: 10px; 
  }
  .header-content {
    margin-left: 0; 
    margin-right: 0; 
  }
}
</style>