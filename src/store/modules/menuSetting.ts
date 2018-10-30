interface state {
  currency: string;
  currencies: Array<string>;
}

const getInitialSetting = (): state => ({
  currency: "₪",
  currencies: ["$", "€", "£", "₪"]
});

export default {
  state: getInitialSetting(),
  mutations: {
    setCurrency(s: state, currency: string) {
      if (!s.currencies.includes(currency))
        throw new Error("currency not a supported");
      s.currency = currency;
    }
  }
};
