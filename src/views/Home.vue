<template>
  <main>
    <Hero></Hero>
    <Resume></Resume>
  </main>
</template>

<script>
import Hero from "@/components/Hero.vue";
import Resume from "@/components/Resume.vue";

export default {
  name: "Home",
  components: {
    Hero,
    Resume
  }
};
</script>
