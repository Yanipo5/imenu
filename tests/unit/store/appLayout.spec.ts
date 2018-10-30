import store from "@/store/modules/appLayout.ts";

const { state, mutations } = store;
describe("Check appLayout store module", () => {
  test("expect rules.requried positive return", () => {
    mutations.toggleNavigationDrawer(state);
    expect(state.isNavigationDrawerOpen).toBe(true);
    mutations.toggleNavigationDrawer(state);
    expect(state.isNavigationDrawerOpen).toBe(false);
  });
});
