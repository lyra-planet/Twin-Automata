<script>
// import HelloWorld from './components/HelloWorld.vue'


import {initPIXI} from "./game"
export default {
  data(){
    return{

    }
  },
  components:{

  },
  methods: {
  },
  mounted() {
    initPIXI()
  },
}


</script>

<template>
  <div id="game">
    
  </div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped>
  body{
    background-color: aliceblue;
  }
</style>
