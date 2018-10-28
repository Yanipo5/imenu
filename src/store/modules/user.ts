const {
  VUE_APP_SECRET: APP_SECRET,
  VUE_APP_STORAGE_USER: storage
} = process.env;

interface state {
  email: string;
  loginToken: string;
}

const getInitialSetting = (): state => ({
  email: "",
  loginToken: ""
});

export default {
  state: Object.assign(getInitialSetting(), getLocalData()),
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
      localStorage.clear();
    }
  },
  actions: {
    login({ state, commit }: any, email: string) {
      commit("setEmail", email);
      commit("setloginToken", APP_SECRET);
      localStorage.setItem(storage, JSON.stringify(state));
    }
  }
};

function getLocalData(): object | null {
  const raw = localStorage.getItem(storage);
  if (!raw) return null;
  return JSON.parse(raw);
}
