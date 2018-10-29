import rules from "./rules.js";
// const rules = require("./rules.js");

test("expect rules.requried positive return", () => {
  expect(rules.requried("1")).toBe(true);
  expect(rules.requried(1)).toBe(true);
  expect(rules.requried("a")).toBe(true);
});
test("expect rules.requried negative return", () => {
  expect(rules.requried("")).toBe("requried");
  //   expect(rules.requried(" ")).toBe("requried");
  expect(rules.requried(null)).toBe("requried");
  expect(rules.requried(undefined)).toBe("requried");
  expect(rules.requried([])).toBe("requried");
  expect(rules.requried({})).toBe("requried");
  expect(rules.requried(() => {})).toBe("requried");
});
