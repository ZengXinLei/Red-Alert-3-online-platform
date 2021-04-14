import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import router from "./router";
import Router from "vue-router";

Vue.config.productionTip = false;
Vue.use(ElementUI);
// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
router.beforeEach(((to, from, next) => {
    console.log(to)
    next();
}))
new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
