<template>
    <div class="slide-render-view">
        <div class="slide-wrapper">
            <div class="slide-content">
                <div class="slide__nav">{{info.title}}
                    <span class="vfont icon-back btn__back" @click="back"></span>
                    <span class="slide__tip">{{info.index+1}}/{{info.len}}</span>
                </div>
                <m-slide ref="slide" :show-dot="showDot" :auto-play='autoPlay' :loop="loop" @pageIndex="renderByIndex" :index="index">
                    <div v-for="item in menuDetail">
                        <a href="javascript:;" v-finger:double-tap="doubleTap">
                            <m-lazyload :data-src="item.originImg"></m-lazyload>
                            <div class="slide__item-cell">{{info.name}}</div>
                            <div class="slide__item-cell flex">
                                <div class="slide__cell-left flex-item">已售 {{item.salesNum}} 份</div>
                                <div class="slide__cell-right flex-item">
                                    <span>￥ {{ item.discountPrice }} </span>
                                    <span style="padding-left: .1rem;font-size: 12px;text-decoration: line-through;color:#fff">原价￥{{item.originPrice}}</span>
                                </div>
                            </div>
                            <div class="slide__item-desc">
                                {{ item.desc }}
                            </div>
                        </a>
                    </div>

                </m-slide>
            </div>
        </div>
    </div>
</template>

<script type="text/babel">
export default {
  data() {
    return {
      showDot: false,
      autoPlay: false,
      loop: false,
    };
  },
  created() {
    this.$store.commit('UPDATAINDEX', parseInt(this.$route.params.index));
    if (!this.menuDetail.length) {
      this.$store.dispatch('getMenu');
    }
    console.log(this.menuDetail);
    console.log(this.info);
  },
  mounted() {
    this.$dialog.notify({
      mes: '双击加入购物车',
      timeout: '3000',
    });
  },
  computed: {
    index() {
      return this.$store.getters.index;
    },
    menuDetail() {
      return this.$store.getters.menuDetail;
    },
    info() {
      return this.menuDetail[this.index];
    },
  },
  methods: {
    renderByIndex() {
      this.$store.commit('UPDATAINDEX', arguments[0]);
    },
    doubleTap(evt) {
      this.$store.commit('ADDTOCART', this.info);
      console.log(this.$store.getters.cart);

      console.log(evt);
      this.$dialog.toast({
        mes: '添加成功',
        timeout: 500,
      });
      const dis = parseFloat(document.documentElement.style.fontSize) * 0.65;
      const options = {
        startX: evt.changedTouches[0].pageX,
        startY: evt.changedTouches[0].pageY,
        endX: window.innerWidth - dis,
        endY: window.innerHeight - dis,
        callback: () => {
        },
      };
      $utils.parabola(options);
    },
    back() {
      history.go(-1);
    },
  },
};
</script>

<style lang='stylus' rel='stylesheet/stylus'>
    .slide-render-view
        height: 100%
        .slide-wrapper
            position: relative
            width: 100%
            height: 100%
            overflow: hidden
            .slide-content
                position: absolute
                top: 0
                left: 0
                width: 100%
                height: 100%
                background-color #000
                .slide__item-desc
                    color: #ccc
                    font-size: 12px
                    text-align: left
                    padding: 0 .2rem
                    line-height: 1.8
                    white-space: normal
                    margin-top: .2rem
                .slide__item-cell
                    color: #fff
                    font-size: 14px
                    text-align: left
                    padding: 0 .2rem
                    line-height: .7rem
                    white-space: normal
                    .slide__cell-right
                        text-align: right
                        color: #ff1616e8
                        font-size: 16px
                .tip__buyer
                    position: absolute
                    right: 0
                    top: .9rem
                    background-color: rgba(0,0,0,.2)
                    color: #fff

                .btn__add
                    position: fixed
                    bottom: .2rem
                    color: #fff
                .slide__nav
                    height: .9rem
                    line-height: .9rem
                    text-align: center
                    color: #ffb400
                    position: relative
                    .btn__back
                        position: absolute
                        line-height: .9rem
                        left: 0
                        padding: 0 .2rem
                        color: #ccc
                    .slide__tip
                        position: absolute
                        right: .2rem
                        font-size 14px
                        color: #e290df

</style>

