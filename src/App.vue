<script>
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
  <div id="app" class="flex" w:pos="relative" w:bg="black" w:w="screen" w:h="screen"  w:flex="col" w:justify="center" w:items="center">
    <div id="game"  w:pos="relative" w:w="1680px" w:h="1092px" >
      <div id="fpsDisplay" class="top-0 " w:text="white" w:pos="absolute"/>
    </div>
  </div>
</template>

<style scoped>
</style>
