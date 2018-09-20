// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import fastclick from 'fastclick';

import GlobalComponents from '@/plugin/components';
import directives from '@/directives/directives';
import AlloyFingerPlugin from '@/directives/alloy_finger.vue';

import App from './App';
import router from './router';
import store from './store';

Vue.use(GlobalComponents);
Vue.use(AlloyFingerPlugin);

directives(Vue);

fastclick.attach(document.body);

Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});

// 主要通过afterEach钩子
router.afterEach((to, from) => {
  document.title = to.meta.title;
  const scroller = document.querySelector('#scrollView');
  // console.log(store.state.positions)
  // 将位置保存在vuex中
  store.commit('SAVE_POSITION', {
    name: from.path,
    position: scroller.scrollTop,
  });
  // 设置保存的位置
  if (store.state.positions[to.path]) {
    setTimeout(() => {
      scroller.scrollTop = store.state.positions[to.path].position;
      // $utils.scrollTo(scroller.scrollTop, store.state.positions[to.path].position)
    }, 16);
  } else {
    setTimeout(() => {
      scroller.scrollTop = 0;
      // $utils.scrollTo(scroller.scrollTop, 0)
    }, 16);
  }
});
