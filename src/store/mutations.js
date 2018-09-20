import Vue from 'vue';

export default {
  GETMENU: (state, data) => {
    state.menu = data;
  },
  UPDATAINDEX: (state, data) => {
    state.index = data;
  },
  /**
     *     加title，避免初始 undefind的 bug
     */
  ADDTOCART: (state, data) => {
    console.log(data);
    const cart = state.cart;
    console.log(cart);
    if (!cart.length) {
      const json = {};
      json.title = data.title;
      json.category = data.category;
      json.items = [];
      data = Object.assign({}, data, { num: 1 });
      json.items.push(data);
      cart.push(json);
    } else {
      for (let i = 0, len = cart.length; i < len; i++) {
        if (cart[i].category === data.category) {
          for (let j = 0, l = cart[i].items.length; j < l; j++) {
            if (cart[i].items[j].id === data.id) {
              ++cart[i].items[j].num;
              return;
            }
          }
          data = Object.assign({}, data, { num: 1 });
          cart[i].items.push(data);
          return;
        }
      }
      const json = {};
      json.title = data.title;
      json.category = data.category;
      json.items = [];
      data.num = 1;
      json.items.push(data);
      cart.push(json);
    }
  },
  SUBSTRACTTOCART: (state, data) => {
    const key1 = data.key1;
    const key2 = data.key2;
    --state.cart[key1].items[key2].num;
  },
  PLUSTOCART: (state, data) => {
    ++state.cart[data.key1].items[data.key2].num;
  },
  DELETEITEMINCART: (state, data) => {
    const key1 = data.key1;
    const key2 = data.key2;
    state.cart[key1].items.splice(key2, 1);
    if (state.cart[key1].items.length === 0) {
      state.cart.splice(key1, 1);
    }
  },
  UPDATEISSHOWBTNCART: (state) => {
    state.isShowBtnCart = !state.isShowBtnCart;
  },
  GENERATEBILL: (state, data) => {
    state.bill = data;
    console.log(state.bill);
  },
  SAVE_POSITION: (state, data) => {
    state.positions[data.name] = data;
  },
};
