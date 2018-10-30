import store from "@/store/modules/menuSetting.ts";

const { state, mutations } = store;
describe("Check store module: menuSetting", () => {
  test("expect setCurrency positive return", () => {
    mutations.setCurrency(state, "$");
    expect(state.currency).toBe("$");
    mutations.setCurrency(state, "€");
    expect(state.currency).toBe("€");
    mutations.setCurrency(state, "£");
    expect(state.currency).toBe("£");
    mutations.setCurrency(state, "₪");
    expect(state.currency).toBe("₪");
  });

  test("expect setCurrency nefative return", () => {
    expect(() => {
      mutations.setCurrency(state, "q");
    }).toThrow();
  });
});
