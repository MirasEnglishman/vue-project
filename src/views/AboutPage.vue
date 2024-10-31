<!-- src/views/AboutPage.vue -->
<template>
  <div class="about">
    <CompanyHistory />
  </div>
</template>

<script>
import CompanyHistory from '@/components/CompanyHistory.vue';

export default {
  name: 'AboutPage',
  components: {
    CompanyHistory,
  },
};
</script>
