<template>
    <div :class="lazyClass" :style="styles">
        <img class="m-lazy-img" v-lazy-slow :data-src="dataSrc" :data-srcset="dataSrcset"
             :data-backgroundImage="dataBackgroundImage" alt="">
    </div>
</template>

<script type="text/babel">

export default {
  name: 'm-lazyload',
  data() {
    return {
      colors: ['#f8d5ed', '#d7d2cc', '#7f8881', '#68af7e', '#876662', '#eadacd', '#ced8d9', '#cfd7da', '#bac4b4', '#c2abb2', '#beab93', '#e9edf2', '#b5c0d3'],
    };
  },
  props: {
    bgColor: String,
    dataSrc: String,
    dataSrcset: String,
    dataBackgroundImage: String,
    bgImg: {
      type: [Boolean, String],
    },
    width: Number,
    height: Number,
    radio: Number,
  },
  computed: {
    styles() {
      return {
        backgroundColor: this.bgColor || this.randomColor(),
        backgroundImage: this.validatorBgImg ? `url(${this.bgImg || 'https://cn.vuejs.org/images/logo.png'})` : '',
      };
    },
    lazyClass() {
      return this.validatorBgImg ? 'm-lazyBg' : 'm-lazy';
    },
    validatorBgImg() {
      if (this.bgImg === false) {
        return false;
      }
      return true;
    },
  },
  methods: {
    randomColor() {
      return this.colors[Math.round(Math.random() * this.colors.length)];
    },

  },
};
</script>

<style lang="less">
    @import "./lazyload.less";
</style>
