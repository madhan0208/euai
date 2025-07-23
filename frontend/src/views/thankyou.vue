<template>
  <div class="relative min-h-screen w-full overflow-hidden">
    <div
      class="absolute inset-0 bg-cover bg-center filter blur-md brightness-75"
      :style="{ backgroundImage: `url(${bgImage})` }"
    ></div>

    <div class="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6 animate-fadeIn">
      <div class="text-green-300 text-6xl mb-4 drop-shadow-lg">✔️</div>
      <h1 class="text-5xl font-extrabold text-white mb-4 drop-shadow-lg">Thank You!</h1>
      <p class="text-lg text-white mb-6 drop-shadow">
        Your assessment has been successfully submitted.<br />
        We appreciate your contribution to the European initiative.
      </p>

      
      <div class="mb-6 drop-shadow-lg flex flex-col items-center">
        <p class="text-xl text-white font-semibold mb-4">Your Compliance Score:</p>
        <div class="relative w-48 h-48">
          <svg class="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            
            <circle
              class="text-gray-700"
              stroke-width="10"
              stroke="currentColor"
              fill="transparent"
              r="40"
              cx="50"
              cy="50"
            />
            
            <circle
              :class="['stroke-current transition-all duration-1000 ease-in-out', scoreCircleColor]"
              stroke-width="10"
              stroke-linecap="round"
              fill="transparent"
              r="40"
              cx="50"
              cy="50"
              :stroke-dasharray="circumference"
              :stroke-dashoffset="strokeDashoffset"
            />
          </svg>
          <div class="absolute inset-0 flex flex-col items-center justify-center">
            <div :class="['text-5xl font-bold', complianceColor]">
              {{ Math.round(totalScore) }}%
            </div>
            <p :class="['text-lg font-semibold mt-2', complianceColor]">
              {{ complianceRiskLevel }}
            </p>
          </div>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          @click="downloadPDF"
          class="bg-white bg-opacity-80 hover:bg-opacity-100 text-blue-700 font-bold py-2 px-6 rounded-lg shadow-md transition"
        >
          Download Your Answers as PDF
        </button>

        <router-link
          to="/"
          class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition text-center"
        >
          Go to Home
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import bgImage from '@/assets/logo.jpg';

export default {
  name: 'ThankYou',
  data() {
    return {
      bgImage,
      answers: {}, 
      totalQuestions: 50,
      circleRadius: 40, 
    };
  },
  computed: {
    totalScore() {
      
      const rawScore = Object.values(this.answers).reduce((sum, answer) => {
        switch (answer?.toLowerCase()) {
          case 'yes': return sum + 2;
          case 'partially': return sum + 1;
          case 'not sure': return sum + 0.5;
          case 'no': return sum;
          default: return sum;
        }
      }, 0);
      
      return (rawScore / (this.totalQuestions * 2)) * 100;
    },
    complianceColor() {
      
      if (this.totalScore < 40) {
        return 'text-red-500'; 
      } else if (this.totalScore < 70) {
        return 'text-yellow-500'; 
      } else {
        return 'text-green-500'; 
      }
    },
    scoreCircleColor() {
      
      if (this.totalScore < 40) {
        return 'text-red-500'; 
      } else if (this.totalScore < 70) {
        return 'text-yellow-500'; 
      } else {
        return 'text-green-500'; 
      }
    },
    complianceRiskLevel() {
      
      if (this.totalScore < 40) {
        return 'High Risk';
      } else if (this.totalScore < 70) {
        return 'Medium Risk';
      } else {
        return 'Low Risk';
      }
    },
    circumference() {
      return 2 * Math.PI * this.circleRadius;
    },
    strokeDashoffset() {
      
      return this.circumference - (this.totalScore / 100) * this.circumference;
    }
  },
  created() {
    if (this.$route.query.answers) {
      try {
        this.answers = JSON.parse(this.$route.query.answers); 
      } catch (e) {
        console.error('Failed to parse answers from query:', e);
      }
    }
  },
  methods: {
    async downloadPDF() {
      try {
        console.log('Attempting to download PDF from backend...');
        const response = await fetch('http://localhost:3000/api/download', {
          method: 'GET',
        });

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
        }

        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'your-assessment-answers.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);

        console.log('PDF download initiated successfully.');
      } catch (error) {
        console.error('Error downloading PDF:', error);
        
        const messageBox = document.createElement('div');
        messageBox.style.cssText = `
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: white;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.2);
          z-index: 1000;
          text-align: center;
          color: black;
        `;
        messageBox.innerHTML = `
          <p>Failed to download PDF. Please try again later.</p>
          <button onclick="this.parentNode.remove()" style="margin-top: 10px; padding: 8px 15px; background-color: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer;">OK</button>
        `;
        document.body.appendChild(messageBox);
      }
    }
  }
};
</script>

<style scoped>

.relative {
  position: relative;
}

.min-h-screen {
  min-height: 100vh;
}

.w-full {
  width: 100%;
}

.overflow-hidden {
  overflow: hidden;
}

.inset-0 {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.absolute {
  position: absolute;
}

.bg-cover {
  background-size: cover;
}

.bg-center {
  background-position: center;
}

.filter {
  filter: var(--tw-filter);
}

.blur-md {
  filter: blur(8px);
}

.brightness-75 {
  filter: brightness(.75);
}

.relative.z-10 {
  z-index: 10;
}

.flex {
  display: flex;
}

.flex-col {
  flex-direction: column;
}

.items-center {
  align-items: center;
}

.justify-center {
  justify-content: center;
}

.text-center {
  text-align: center;
}

.px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.animate-fadeIn {
  animation: fadeIn 1s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.text-green-300 {
  color: #a7f3d0;
}

.text-6xl {
  font-size: 3.75rem; 
  line-height: 1;
}

.mb-4 {
  margin-bottom: 1rem;
}

.drop-shadow-lg {
  filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
}

.text-5xl {
  font-size: 3rem; 
  line-height: 1;
}

.font-extrabold {
  font-weight: 800;
}

.text-white {
  color: #fff;
}

.mb-6 {
  margin-bottom: 1.5rem;
}

.text-lg {
  font-size: 1.125rem; 
  line-height: 1.75rem; 
}

.drop-shadow {
  filter: drop_shadow(0 1px 1px rgb(0 0 0 / 0.05));
}

.text-2xl {
  font-size: 1.5rem; 
  line-height: 2rem; 
}

.text-yellow-300 {
  color: #fcd34d;
}

.font-semibold {
  font-weight: 600;
}

.gap-4 {
  gap: 1rem;
}

.justify-center {
  justify-content: center;
}

.bg-white {
  background-color: #fff;
}

.bg-opacity-80 {
  background-color: rgba(255, 255, 255, 0.8);
}

.hover\:bg-opacity-100:hover {
  background-color: rgba(255, 255, 255, 1);
}

.text-blue-700 {
  color: #1d4ed8;
}

.font-bold {
  font-weight: 700;
}

.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.rounded-lg {
  border-radius: 0.5rem;
}

.shadow-md {
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
}

.transition {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}


.text-red-500 {
  color: #ef4444; 
}

.text-yellow-500 {
  color: #f59e0b; 
}

.text-green-500 {
  color: #22c55e; 
}


.text-red-500.stroke-current {
  stroke: #ef4444;
}

.text-yellow-500.stroke-current {
  stroke: #f59e0b;
}

.text-green-500.stroke-current {
  stroke: #22c55e;
}


@media (min-width: 640px) {
  .sm\:flex-row {
    flex-direction: row;
  }
}
</style>
