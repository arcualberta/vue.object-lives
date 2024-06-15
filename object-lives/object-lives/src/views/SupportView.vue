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
@import "@/assets/variables.scss";

.support-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(
    --page-background-color
  ); /* Assuming you have a background color variable */
}

.image-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: var(
    --margin-top
  ); /* Using margin-top variable from variables.scss */
}

.image {
  max-width: 100%;
  height: auto;
}
</style>
