<template>
  <div class="login-container">
    <svg-icon class="loginBG" name="loginBG" />
    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="rules"
      class="loginForm"
    >
      <el-form-item>
        <svg-icon icon-class="logo" class="logo-style" />
      </el-form-item>
      <el-form-item style="text-align: center">
        <p class="from-text">5G工业网关</p>
      </el-form-item>
      <el-form-item prop="username">
        <el-input
          v-model="loginForm.username"
          suffix-icon="fa fa-user-o"
          placeholder="账号"
          type="text"
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="loginForm.password"
          suffix-icon="fa fa-key"
          placeholder="密码"
          type="password"
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item>
        <el-button
          class="submit"
          type="primary"
          @click="handleLogin('loginForm')"
          >登录</el-button
        >
      </el-form-item>
      <el-form-item style="text-align: center">
        <el-button type="text">Forgot your password?</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Watch } from "vue-property-decorator";
import { Route } from "vue-router";
import { Dictionary } from "vue-router/types/router";
import { hex_md5 } from "@/utils/md5";
import { upperCase } from "@/utils/validate";
import { Form } from "element-ui";
import { mapActions } from "vuex";
import { UserModule } from "@/store/modules/user";

@Component({
  name: "login",
})
export default class extends Vue {
  private redirect?: String;
  private loginForm = { username: "1", password: "1" };
  private rules = {
    username: [{ required: true, message: "请输入账号", trigger: "blur" }],
    password: [{ required: true, message: "请输入密码", trigger: "blur" }],
  };
  @Watch("$route", { immediate: true })
  private onRouterChange(route: Route) {
    // this.redirect = route.query && route.query.redirect;
  }

  private handleLogin(formName: any): void {
    (this.$refs[formName] as Form).validate(async (valid: boolean) => {
      if (valid) {
        const md32 = hex_md5(this.loginForm.password);
        await UserModule.Login(
          Object.assign({
            method: "route5g.login",
            username: this.loginForm.username,
            password: upperCase(md32),
          })
        ).then((res) => {
          this.$router.push({ path: "/" });
        });
      } else {
        return false;
      }
    });
  }
}
</script>

<style lang="scss" scoped>
.login-container {
  width: 100vw;
  height: 100vh;
  position: relative;
  box-sizing: border-box;
  .loginBG {
    width: 100%;
    height: 100%;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    box-sizing: border-box;
    position: absolute;
    display: block;
    z-index: -1;
  }
  .loginForm {
    position: absolute;
    height: auto;
    width: 20%;
    right: 20%;
    top: 50%;
    transform: translate(0, -50%);
    .submit {
      margin-top: 10px;
      width: 100%;
    }
    .logo-style {
      width: 100%;
      height: 60px;
    }
    .from-text {
      display: inline-block;
      margin-top: 0px;
      margin-bottom: 23px;
      font-size: 1.3em;
      font-weight: 500;
    }
  }
}
</style>
