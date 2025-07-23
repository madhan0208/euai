<template>
  <div class="splash-screen">
    <h1>Welcome to the Assessment</h1>
    <p>Loading...</p>
  </div>
</template>

<script>
export default {
  name: "Splash",
};
</script>

<style scoped>
.splash-screen {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #0077cc;
  color: white;
  font-family: 'Arial', sans-serif;
  font-size: 2rem;
  user-select: none;
}
</style>
