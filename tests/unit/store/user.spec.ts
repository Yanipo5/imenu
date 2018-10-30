import store from "@/store/modules/user.ts";

const { state, mutations, getters } = store;
describe("Check store module: user", () => {
  test("expect user to not be logged in", () => {
    expect(getters.isLoggedIn(state)).toBe(false);
  });

  test("login, and expect user to be logged in", () => {
    mutations.setloginToken(state, "#^TDGS32ry7hsd&DHS&h7h87h");
    expect(getters.isLoggedIn(state)).toBe(true);
  });

  test("set Email and confirm", () => {
    mutations.setEmail(state, "a@a.com");
    expect(state.email).toBe("a@a.com");
  });
});
