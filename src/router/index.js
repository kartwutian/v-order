import Vue from 'vue';
import Router from 'vue-router';
import OShop from 'pages/shop';
import OMenu from 'pages/menu';
import ODetail from 'pages/detail';
import OCart from 'pages/cart';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/menu',
    },
    {
      path: '/shop',
      name: 'o-shop',
      component: OShop,
      meta: {
        title: '店铺信息',
      },
    },
    {
      path: '/menu',
      name: 'o-menu',
      component: OMenu,
      meta: {
        title: '小店美食',
        keepAlive: true,
      },
    },
    {
      path: '/detail/:index',
      name: 'o-detail',
      component: ODetail,
      meta: {
        title: '详情',
        keepAlive: true,
      },
    },
    {
      path: '/cart',
      name: 'o-cart',
      component: OCart,
      meta: {
        title: '购物车',
        keepAlive: true,
      },
    },
    {
      path: '/bill',
      name: 'o-cart',
      component: OCart,
      meta: {
        title: '我的订单',
        keepAlive: true,
      },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    /* console.log(to,from)
        console.log(savedPosition) */
    if (savedPosition) {
      // console.log(document.querySelector('#scrollView').scrollTop)
      // document.querySelector('#scrollView').scrollTop = savedPosition.y
      return savedPosition;
    }
    return { x: 0, y: 0 };
  },
});
