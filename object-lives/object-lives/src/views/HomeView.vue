<template>
  <div class="image-container flex-grow-1">
    <img src="../assets/Image-01.jpg" alt="Your Image" class="img-fluid" />
  </div>
</template>

<script setup lang="ts">
// JavaScript for managing dark mode toggle could go here if needed
</script>

<style lang="scss">
.image-container {
  position: relative;
  overflow: hidden;
  background-color: var(--page-background-color);
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

body {
  background-color: var(
    --page-background-color
  ); /* Light mode background color by default */
}

body.dark-mode {
  background-color: var(
    --dark-page-background-color
  ); /* Dark mode background color */
}
</style>
