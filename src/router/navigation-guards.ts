import router from "./index";
import store from "@/store/index.ts";

router.beforeEach(({ path }, f, next) => {
  const isLoggedIn = store.getters["user/isLoggedIn"];

  if (path !== "/signin" && !isLoggedIn) return next("/signin");
  if (path === "/signin" && isLoggedIn) return next("/menu/edit");
  else return next();
});
