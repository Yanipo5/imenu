const getInitalState = () => ({
  isNavigationDrawerOpen: true
});

export default {
  state: getInitalState(),
  mutations: {
    toggleNavigationDrawer(s: any) {
      s.isNavigationDrawerOpen = !s.isNavigationDrawerOpen;
    }
  }
};
