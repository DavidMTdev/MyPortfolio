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
  }
};
</script>
