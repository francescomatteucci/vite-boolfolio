<template>
  <div>
 
    <AppMain/>
 
  </div>

  <p>
    <strong>Current route path:</strong> {{ $route.fullPath }}
  </p>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/portfolio">Go to Portfolio</RouterLink>
    <RouterLink to="/contacts">Go to contacts</RouterLink>

  </nav>
  <main>
    <RouterView />
  </main>

</template>

<script>
import AppMain from './components/AppMain.vue';
  export default {
    components:{
      AppMain,
    },

    data(){
      return {
       
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
