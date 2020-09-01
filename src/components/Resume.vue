<template>
  <div id="resume" class="section-resume">
    <About></About>
    <Skills></Skills>
    <Experience></Experience>
    <Education></Education>
  </div>
</template>

<script>
import About from "@/components/resume/About.vue";
import Skills from "@/components/resume/Skills.vue";
import Experience from "@/components/resume/Experience.vue";
import Education from "@/components/resume/Education.vue";

export default {
  name: "Resume",
  components: {
    About,
    Skills,
    Experience,
    Education
  }
};
</script>
