<template>
  <div class="wscn-http404-container">
    <svg-icon class="icon" name="404" />
    <div style="margin-top:-75px"><a class="linkText" href="">Back</a></div>
  </div>
</template>

<script>
import { Component, Vue, Watch } from "vue-property-decorator";
export default class extends Vue {
}
</script>

<style lang="scss" scoped>
.wscn-http404-container{
  width: 100vw;
  height: 100vh;
  text-align: center;
}
.icon{
  width: 80%;
  height: 80%;
}
.linkText{
  display: inline-block;
  width: 120px;
  line-height: 35px;
  color: #fff;
  background-color: black;
  border-radius: 4px;
  text-align: center;
}
</style>
