<template>
    <form>
      <div v-for="field in data.discoveryWorkForm.fields" :key="field.id">
       <input
        v-if="field.type === 0"
        v-model="field.description.values[0].value"
        :placeholder="field.description.values[0].value"
      />
      <input
        v-if="field.type === 3"
        v-model="field.description.values[0].value"
        :placeholder="field.description.values[0].value"
      />
      <input
        v-if="field.type === 1"
        v-model="field.description.values[0].value"
        :placeholder="field.description.values[0].value"
      />
      </div>
    </form>
  </template>
  
  <script setup lang="ts">
  import discoveryWorkForm from '@/discoveryWorkshopForm.json'
  import { reactive } from 'vue';
  
  const data = reactive({
    discoveryWorkForm: discoveryWorkForm,
  });
  </script>