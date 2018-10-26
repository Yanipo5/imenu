import Vue from "vue";
import Router from "vue-router";
import SignIn from "@/views/Login/SignIn.vue";
import MainLayout from "@/views/Menu/MainLayout/index.vue";
import BaseRouterPage from "@/components/BaseRouterPage.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/signin",
      component: SignIn
    },
    {
      path: "/",
      component: MainLayout,
      children: [
        {
          path: "/menu",
          component: BaseRouterPage,
          children: [
            {
              path: "edit",
              component: () =>
                import(/* webpackChunkName: "EditMenu" */ "@/views/Menu/MainLayout/EditMenu/index.vue")
            },
            {
              path: "preview",
              component: () =>
                import(/* webpackChunkName: "PreviewMenu" */ "@/views/Menu/PreviewMenu.vue")
            }
          ]
        },
        {
          path: "/settings",
          component: BaseRouterPage,
          children: [
            {
              path: "menu",
              component: () =>
                import(/* webpackChunkName: "SettingsMenu" */ "@/views/Settings/SettingsMenu.vue")
            }
          ]
        }
      ]
    }
  ]
});
