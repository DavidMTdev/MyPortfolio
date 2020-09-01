<template>
  <main>
    <Hero></Hero>
    <Resume></Resume>
    <Contact></Contact>
  </main>
</template>

<script>
import Hero from "@/components/Hero.vue";
import Resume from "@/components/Resume.vue";
import Contact from "@/components/Contact.vue";

export default {
  name: "Home",
  components: {
    Hero,
    Resume,
    Contact
  }
};
</script>
