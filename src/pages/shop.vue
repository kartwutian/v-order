<template>
    <div class="shop">

        <o-logo></o-logo>
        <div class="title__wrap">
            <div class="title__item">
                饮食男女（义乌之心店）
            </div>
        </div>
        <div class="shop__welcome">欢迎光临，bhz</div>
        <div class="shop__tip">本店推出新菜色，一律8折优惠</div>
        <div class="shop__welcome">店铺信息</div>
        <slide-render></slide-render>

        <section class="shop__section">
            <div class="shop__cell-wrap">
                <div class="shop__cell-left">
                    <span class=" vfont icon-phone"></span>
                </div>
                <div class="shop__cell-item">123大幅度发的发生的发生发生法撒发生法</div>
                <div class="shop__cell-right">拨打<span class="vfont icon-next"></span></div>
            </div>
        </section>
    </div>
</template>

<script>


import OLogo from 'render/logo';
import SlideRender from 'components/slide/slide-render.vue';

export default {
  name: 'o-shop',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  mounted() {

  },
  components: {
    OLogo,
    SlideRender,
  },
};
</script>
<style lang="less">

</style>

