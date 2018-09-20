<template>
    <div>
        <div class="m-lightbox">
            <div class="m-lightbox-head" :class="show ? '' : 'm-lightbox-up-hide'">
                <span>{{currentIndex + 1}} / {{imgItems.length}}</span>
                <a href="javascript:;" @click="close">{{closeText}}</a>
            </div>
            <div class="m-lightbox-img" @click="show = !show">
                <div v-for="item, key in imgItems" :key="key">
                    <a href="javascript:;">
                        <img :src="getImgSrc(item.$el)">
                    </a>
                </div>
                <!--<div class="slide-render-view">
                    <div class="slide-wrapper">
                        <div class="slide-content">
                            <m-slide ref="slide">
                                <div v-for="item, key in imgItems" :key="key">
                                    <a href="javascript:;">
                                        <img :src="getImgSrc(item.$el)">
                                    </a>
                                </div>
                            </m-slide>
                        </div>
                    </div>
                </div>-->
                <div class="m-lightbox-loading">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                        <circle cx="50" cy="50" fill="none" stroke="#ffffff" stroke-width="7" r="47" stroke-dasharray="221.48228207808043 75.82742735936014" transform="rotate(25.5138 50 50)">
                            <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="0.8s" begin="0s" repeatCount="indefinite"></animateTransform>
                        </circle>
                    </svg>
                </div>
            </div>
            <div class="m-lightbox-foot" :class="show ? '' : 'm-lightbox-down-hide'" v-if="!!txtHTML" v-html="txtHTML"></div>
        </div>
    </div>
</template>

<script type="text/babel">

export default {
  data() {
    return {
      currentIndex: 0,
      index: 1,
      imgItems: [],
      show: true,
      txtHTML: '',
      closeText: '',
    };
  },
  methods: {
    close() {
      this.$el.parentNode && this.$el.parentNode.removeChild(this.$el);
    },
    changeIndex(index) {
      this.currentIndex = index;
    },
    getImgSrc(el) {
      return el.getAttribute('original') || el.getAttribute('src');
    },
  },
};
</script>
<style lang='stylus' rel='stylesheet/stylus'>
    .slide-render-view
        .slide-wrapper
            position: relative
            width: 100%
            padding-top: 40%
            margin-bottom: 10px
            overflow: hidden
            .slide-content
                position: absolute
                top: 0
                left: 0
                width: 100%
                height: 100%
</style>
