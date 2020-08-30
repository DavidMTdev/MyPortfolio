<template>
  <body id="app">
    <Header></Header>
    <router-view />
  </body>
</template>

<script>
import Header from "@/components/layouts/Header.vue";

export default {
  name: "App",
  components: {
    Header
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";
</style>
