<template>
    <div>
        <div class="btn__nav vfont icon-share2" :class="btnNavCls" @click="moveIn" >
            <m-dot v-if="dot"></m-dot>
        </div>
        <div v-show="isShowBtnCart" class="btn__cart vfont icon-cart-hollow" :class="btnNavCls" @click="routerTo('/cart')" >
            <span class="btn__cart-dot" v-if="cartNum">{{cartNum}}</span>
        </div>
        <div class="nav" :class="navCls">
            <div class="nav__bg" @click="moveOut"></div>
            <div class="nav__item-wrap">
                <div v-for="item in nav" class="nav__item" @click="routerTo(item.link)" :key="item.name">
                    <span class="nav__item-icon vfont" :class="item.icon"></span>
                    <div class="nav__item-name">{{ item.name }}</div>
                </div>

            </div>

        </div>
    </div>
</template>

<script>

export default {
  name: 'site-nav',
  data() {
    return {
      nav: [
        {
          name: '店铺',
          icon: 'icon-home-hollow',
          link: '/shop',
        },
        {
          name: '菜单',
          icon: 'icon-catalog-symmetry',
          link: '/menu',
        },
        {
          name: '购物车',
          icon: 'icon-cart-hollow',
          link: '/cart',
        },
        {
          name: '订单',
          icon: 'icon-bill',
          link: '/bill',
        },
        {
          name: '返回',
          icon: 'icon-close1',
        },
      ],
      dot: false,
      navCls: '',
      btnNavCls: 'btn__nav--show',
    };
  },
  computed: {
    cart() {
      return this.$store.getters.cart;
    },
    cartNum() {
      let num = 0;
      for (const key1 in this.cart) {
        num += this.cart[key1].items.length;
      }
      return num;
    },
    isShowBtnCart() {
      return this.$store.getters.isShowBtnCart;
    },
  },
  methods: {
    moveIn() {
      this.btnNavCls = '';
      this.navCls = ' nav--in';
    },
    moveOut() {
      this.navCls = '';
      this.btnNavCls = 'btn__nav--show';
    },
    routerTo(link) {
      if (link === undefined) {
        this.moveOut();
        return;
      }
      this.moveOut();
      this.$router.push({ path: link });
    },
  },
};
</script>

<style lang="less">

</style>
