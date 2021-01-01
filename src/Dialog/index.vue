<template>
  <div>
    <transition name="el-fade-in">
      <el-dialog
        v-if="dialogVisible"
        ref="fullScreen"
        :visible.sync="dialogVisible"
        :close-on-press-escape="false"
        :close-on-click-modal="false"
        :append-to-body="appendToBody"
        :show-close="showClose"
        :modal="modal"
        :destroy-on-close="destroyOnClose"
        :custom-class="customClass"
        :width="width"
        :top="top"
        :before-close="beforeClose"
        @close="uploadBeforeClose"
      >
        <template>
          <slot />
          <slot name="footer" />
        </template>
      </el-dialog>
    </transition>
  </div>
</template>


<script lang='ts'>
import { Vue, Prop, Component, Emit } from "vue-property-decorator"; // decorator
@Component({ name: "Dialog" })
export default class extends Vue {
  @Prop({ type: Boolean, required: true }) dialogVisible!: Boolean;
  @Prop({ type: [String, Boolean], default: "" }) subtitle!: any;
  @Prop({ type: Boolean, default: false }) appendToBody!: Boolean;
  @Prop({ type: Boolean, default: true }) showClose!: Boolean;
  @Prop({ type: Boolean, default: true }) modal!: Boolean; // 是否需要遮罩层
  @Prop({ type: Boolean, default: true }) destroyOnClose!: Boolean; // 关闭时销毁 Dialog 中的元素
  @Prop({ type: String, default: "" }) customClass!: String;
  @Prop({ type: String, default: "50%" }) width!: String;
  @Prop({ type: String, default: "15vh" }) top!: String;
  public uploadBeforeClose() {
    this.$emit("clonePage");
  }
  public beforeClose() {
    this.$emit("beforeClose");
  }
}
</script>

<style lang='scss' scoped>
.el-dialog {
  position: relative;
}
</style>