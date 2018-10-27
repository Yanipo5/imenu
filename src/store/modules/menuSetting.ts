interface state {
  currency: string;
}

const getInitialSetting = (): state => ({
  currency: "₪"
});

export default {
  state: getInitialSetting(),
  mutations: {
    setCurrency(s: state, currency: string) {
      if (typeof currency !== "string")
        throw new Error("currency not a string");
      s.currency = currency;
    }
  }
};
