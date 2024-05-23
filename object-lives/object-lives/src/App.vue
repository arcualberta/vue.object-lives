<template>
  <div id="App" class="d-flex flex-column min-vh-100">
    <SiteHeader />
    <div class="content-container flex-grow-1">
      <router-view />
    </div>
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<style>
:global(body) {
  height: 100%;
  overflow: hidden;
  background-color: black;
}

.content-container {
  display: flex;
  flex-direction: column;
}
</style>