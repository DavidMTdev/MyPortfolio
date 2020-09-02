<template>
  <body id="app">
    <Header></Header>
    <router-view />
    <Footer></Footer>
  </body>
</template>

<script>
import Header from "@/components/layouts/Header.vue";
import Footer from "@/components/layouts/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";
</style>
