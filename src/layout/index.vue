<template>
  <div class="app-wrapper"></div>
</template>
<script lang='ts'>
import { Component, Vue, Watch } from "vue-property-decorator";
import { AppMain, Navbar, Settings, Sidebar, TagsView } from "./components";
export default class extends Vue {}
</script>

<style lang='scss' scoped>
$sideBarWidth: 210px;
@mixin clearfix {
  &:after {
    content: "";
    display: table;
    clear: both;
  }
}
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}
.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}
.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}
.hideSidebar .fixed-header {
  width: calc(100% - 54px);
}

.mobile .fixed-header {
  width: 100%;
}
</style>