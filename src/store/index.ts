import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: getModules()
});

function getModules() {
  const files = require.context("./modules/", false, /\.ts$/);
  return files.keys().reduce((obj, f) => {
    const fileName = f.replace(/(\.\/|\.ts)/g, "");
    return Object.assign(obj, {
      [fileName]: { namespaced: true, ...files(f).default }
    });
  }, {});
}
