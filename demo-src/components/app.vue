<template>
  <div id="app">
    <div class="container-cut">
      <div class="goback" @click="$router.go(-1)">Go Back</div>
      <router-view class="demo-container"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
#app {
  width: 467px;
  height: 800px;
  background: url(../assets/devices-sprite.jpg) center top no-repeat;
  background-size: 467px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  font-size: 14px;
}
.container-cut {
  width: 320px;
  height: 568px;
  box-sizing: border-box;
  position: absolute;
  top:85px;
  left: 75px;
  overflow: hidden;
}
.demo-container {
  padding: 5px;
  width: calc(320px + 15px) ;
  height: 568px;
  box-sizing: border-box;
  position: absolute;
  top:30px;
  left: 0px;
  overflow-y: scroll;
  overflow-x: hidden;
  background: #f2f2f4;
}

.goback {
  height: 30px;
  background-color: #fff;
  line-height: 30px;
  text-align: left;
  padding-left: 10px;
  color: royalblue;
  cursor: pointer;
  border-bottom: 1px solid #ccc;
  box-sizing: border-box;

}
</style>
