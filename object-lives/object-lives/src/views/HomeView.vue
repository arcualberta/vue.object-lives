<template>
  <div class="image-container flex-grow-1">
    <img src="../assets/Image-01.jpg" alt="Your Image" class="img-fluid">
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.image-container {
  position: relative;
  overflow: hidden;
  background: black;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>