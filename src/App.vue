<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <Topbar></Topbar> -->
    <router-view/> 
    <BottomBar class="foot"></BottomBar>
  </div>
</template>

<script>
// import Topbar from "./components/TopBar/TopBar"
import BottomBar from './components/BottomBar/BottomBar'
export default {
  name: 'App',
  components:{
      // Topbar
      BottomBar
  }
}
</script>

<style lang="less" scopde>
@rem:75rem;
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
}
.foot{
  position: absolute;
  bottom:0;
  right:0;
  left:0;
  height:72/@rem;
}
</style>
