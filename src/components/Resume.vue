<template>
  <div id="resume" class="section-resume">
    <About></About>
    <Skills></Skills>
  </div>
</template>

<script>
import About from "@/components/resume/About.vue";
import Skills from "@/components/resume/Skills.vue";


export default {
  name: "Resume",
  components: {
    About,
    Skills
  }
};
</script>
