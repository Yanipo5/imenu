const { VUE_APP_SECRET: APP_SECRET } = process.env;
console.log(APP_SECRET);

interface state {
  email: string;
  loginToken: string;
}

const getInitialSetting = (): state => ({
  email: "",
  loginToken: ""
});

export default {
  state: getInitialSetting(),
  getters: {
    isLoggedIn(s: state) {
      return s.loginToken === APP_SECRET;
    }
  },
  mutations: {
    setEmail(s: state, email: string) {
      s.email = email;
    },
    setloginToken(s: state, token: string) {
      if (!token || typeof token !== "string")
        throw new Error("token not a string");
      s.loginToken = token;
    },
    clearUser(s: state): void {
      Object.assign(s, getInitialSetting());
    }
  },
  actions: {
    login({ commit }: any, email: string) {
      commit("setEmail", email);
      commit("setloginToken", APP_SECRET);
    }
  }
};
