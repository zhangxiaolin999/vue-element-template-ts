import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui';
import '@/style/index.scss'
import SvgIcon from 'vue-svgicon'
import 'element-ui/lib/theme-chalk/index.css';
import 'normalize.css'
import '@/permission'
import '@/icons/components'
import './theme/element/routeTheme/index.css'
import './index' // 注册公共组件

Vue.use(ElementUI)
Vue.use(SvgIcon, {
  tagName: 'svg-icon',
  // defaultWidth: '1em',
  // defaultHeight: '1em',
  isOriginalDefault: true,  // 默认使用原始颜色 
  // isStroke: true  // 默认使用笔触样式
})
Vue.config.productionTip = false;

new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount("#app");

