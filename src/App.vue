<script>
import {game} from "./game"
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
    game.init()
  },
}


</script>

<template>
  <div id="app" class="flex" w:pos="relative" w:bg="black" w:w="screen" w:h="screen"  w:flex="col" w:justify="center" w:items="center">
    <div id="game"  w:pos="relative" w:w="screen" w:h="screen" >
      <div id="fpsDisplay" class="top-0 " w:text="white" w:pos="absolute"/>
    </div>
  </div>
</template>

<style scoped>
</style>
