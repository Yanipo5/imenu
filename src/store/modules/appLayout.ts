const getInitalState = () => ({
  isNavigationDrawerOpen: false
});

export default {
  state: getInitalState(),
  mutations: {
    toggleNavigationDrawer(s: any) {
      s.isNavigationDrawerOpen = !s.isNavigationDrawerOpen;
    }
  }
};
