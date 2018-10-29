import Vue from "vue";
import Vuetify from "vuetify";
Vue.use(Vuetify);
// import "@/plugins/vuetify.ts";
import MyComponent from "@/components/MenuButtons.vue";

// helper function that mounts and returns the rendered text
function getRenderedText(Component: any, propsData: object) {
  const Constructor = Vue.extend(Component);
  const vm = new Constructor({ propsData: propsData }).$mount();
  return vm.$el.textContent;
}

describe("MyComponent", () => {
  it("renders correctly with different props", () => {
    expect(getRenderedText(MyComponent, { isDisabled: true })).toBe("delete add"); // prettier-ignore
    expect(getRenderedText(MyComponent, { isDisabled: false })).toBe("delete add"); // prettier-ignore
  });
});
