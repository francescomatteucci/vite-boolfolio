<template>
  <div>
    <h1>{{ message }}</h1>
    <AppMain/>
    <ProjectCard/>
  </div>
</template>

<script>
import AppMain from './components/AppMain.vue';
import ProjectCard from "./components/ProjectCard.vue";
  export default {
    components:{
      AppMain,
      ProjectCard,
    },

    data(){
      return {
        message: 'Ciao',
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>