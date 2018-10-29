import rules from "@/utils/rules.ts";
const { requried, email } = rules;

describe("Check requried rule", () => {
  test("expect rules.requried positive return", () => {
    expect(requried("1")).toBe(true);
    expect(requried("a")).toBe(true);
    expect(requried("$")).toBe(true);
    expect(requried(" a ")).toBe(true);
  });

  test("expect rules.requried negative return", () => {
    expect(requried("")).toBe("requried");
    expect(requried(" ")).toBe("requried");
    expect(requried("     ")).toBe("requried");
  });
});

describe("Check email rule", () => {
  test("expect rules.email positive return", () => {
    expect(email("a@a.com")).toBe(true);
    expect(email("acsa@aqwe.com")).toBe(true);
  });

  test("expect rules.email negative return", () => {
    expect(email("a@a,com")).toBe("not a valid email");
    expect(email("a@com")).toBe("not a valid email");
    expect(email("@com")).toBe("not a valid email");
    expect(email("a@")).toBe("not a valid email");
  });
});
