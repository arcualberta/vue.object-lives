<template>
  <div class="support-page">
    <div class="image-container">
      <img src="../assets/thank-you.jpg" alt="Image 1" class="image" />
      <img src="../assets/thank-image.gif" alt="Image 2" class="image" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap");

.support-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1a1a1a;
}

.image-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
}

.image {
  max-width: 100%;
  height: auto;
}
</style>
