<template>
  <div>
    <h1>{{ message }}</h1>
    <AppMain/>
  </div>
</template>

<script>
import AppMain from './components/AppMain.vue'
  export default {
    components:{
      AppMain
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