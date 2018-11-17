import client from "@/utils/graphql.ts";
import gql from "graphql-tag";

const {
  VUE_APP_SECRET: APP_SECRET,
  VUE_APP_STORAGE_USER: storage
} = process.env;

interface state {
  id: String;
  email: string;
  loginToken: string;
}

const getInitialSetting = (): state => ({
  id: "",
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
    setUser(s: state, newState: object) {
      Object.assign(s, newState);
    },
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
    setUser(
      { commit }: { commit: Function },
      { id, email }: { id: string; email: string }
    ) {
      commit("setloginToken", APP_SECRET);
      commit("setUser", { id, email });
      localStorage.setItem(
        storage,
        JSON.stringify({ id, email, loginToken: APP_SECRET })
      );
    },
    async loginUser(
      { dispatch }: { dispatch: Function },
      { email, password }: { email: string; password: string }
    ) {
      const res = await client.query({
        query: gql`
          query($email: String!, $password: String!) {
            login(email: $email, password: $password) {
              id
              email
            }
          }
        `,
        variables: {
          email,
          password
        }
      });
      //@ts-ignore
      if (!res || !res.data || !res.data.login) return false;
      //@ts-ignore
      dispatch("setUser", { id: res.data.login.id, email });
      return true;
    },
    async createUser(
      { dispatch }: { dispatch: Function },
      { email, password }: { email: string; password: string }
    ) {
      const res = await client.mutate({
        mutation: gql`
          mutation($email: String!, $password: String!) {
            addUser(email: $email, password: $password) {
              id
            }
          }
        `,
        variables: {
          email,
          password
        }
      });

      if (!res || !res.data || !res.data.addUser) return false;
      dispatch("setUser", { id: res.data.addUser.id, email });
      return true;
    }
  }
};

function getLocalData(): object | null {
  const raw = localStorage.getItem(storage);
  if (!raw) return null;
  return JSON.parse(raw);
}
