<template>
  <main>
    <Article1 v-if="1 == $route.params.id"></Article1>
    <Article2 v-if="2 == $route.params.id"></Article2>
  </main>
</template>

<script>
import Article1 from "@/views/articles/Article1.vue";
import Article2 from "@/views/articles/Article2.vue";

export default {
  name: "Article",
  components: {
    Article1,
    Article2
  },
  data() {
    return {
      headerWidth: Number
    };
  },
  mounted() {
    this.resize();
  },
  methods: {
    resize() {
      this.headerWidth = document.querySelector(".header-nav").clientWidth;
      document.querySelector("main").style.marginLeft = this.headerWidth - 1 + "px";
      document.querySelector("footer").style.marginLeft = this.headerWidth - 1 + "px";
    }
  }
};
</script>
