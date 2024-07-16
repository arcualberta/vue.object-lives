<template>
  <div class="discovery-workshop">
    <h1>{{ bannerText }}</h1>
    <p>{{ abstractText }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';
import { SolrResultEntry } from '@arc/arc-foundation/lib/solr/models';
import { getBannerText, getAbstractText } from '@/helpers/workshopQueryModel';

// Define props using Vue's defineProps
const props = defineProps<{
  model: SolrResultEntry | null;
}>();

// Computed properties
const bannerText = computed(() => {
  return props.model ? getBannerText(props.model) : '';
});

const abstractText = computed(() => {
  return props.model ? getAbstractText(props.model) : '';
});
</script>

<style scoped>
.discovery-workshop {
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}
.discovery-workshop h1 {
  font-size: 24px;
  font-weight: bold;
}
.discovery-workshop p {
  font-size: 16px;
  line-height: 1.6;
}
</style>
