<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<template>
  <div class="container">
    <div class="header">
      Information Successfully Saved!
    </div>
    <div class="description">
      Thank you for submitting your response
    </div>
  </div>
</template>

<style scoped>
.header {
  margin-top: 250px;
  font-size: 64px;
  font-weight: 500;
  color: #327D49;
  text-align: center;
}
.description {
  font-size: 32px;
  font-weight: 400;
  color: #327D49;
  text-align: center;
  margin-bottom: 250px;
}
</style>
