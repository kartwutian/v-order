export default {

  updataNavbarOpacity({ commit }, data) {
    commit('UPDATANAVBARSTYLES', data);
  },
  getMenu({ commit }) {
    const Data = require('data/data.json');
    commit('GETMENU', Data);
  },

};
