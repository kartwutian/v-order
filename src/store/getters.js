/*
* Array.prototype.slice.call方法不会深度克隆数组，
* 就是说，数组里面的对象还是共用同一个，
* 曾今想利用这一特性，简化代码量，减少循环，
* 发现代码执行有bug，先手顺序没办法控制，当第一次使用pos属性值的时候，
* pos为undfined，所以别瞎想了，按正常的来，只是知道共用里面对象共用一个地址就ok了
* */
export function menu(state) {
  const menu = Array.prototype.slice.call(state.menu);
  let pos = 0;
  for (let i = 0, l = menu.length; i < l; i++) {
    for (let j = 0, len = menu[i].items.length; j < len; j++) {
      menu[i].items[j].pos = pos++;
    }
  }
  return menu;
}
export function menuDetail(state) {
  const arr = [];
  const menu = Array.prototype.slice.call(state.menu);
  // console.log(menu[0]===state.menu[0])

  for (let i = 0, l = menu.length; i < l; i++) {
    for (let j = 0, len = menu[i].items.length; j < len; j++) {
      menu[i].items[j].title = menu[i].title;
      menu[i].items[j].category = menu[i].category;
      menu[i].items[j].len = menu[i].items.length;
      menu[i].items[j].index = j;
      arr.push(menu[i].items[j]);
    }
  }
  return arr;
}
export function index(state) {
  return state.index;
}

export function cart(state) {
  return state.cart;
}

export function bill(state) {
  return state.bill;
}
export function isShowBtnCart(state) {
  return state.isShowBtnCart;
}
