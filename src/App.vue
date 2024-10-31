<!-- src/App.vue -->
<template>
  <div id="app">
    <MainHeader />
    <router-view />
    <AppFooter />
  </div>
</template>

<script>
import MainHeader from './components/MainHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  components: {
    MainHeader,
    AppFooter
  }
};
</script>
