<template>
    <div>
        <slot></slot>
    </div>
</template>

<script type="text/babel">
import Vue from 'vue';
import Box from './box.vue';

export default {
  name: 'm-lightbox',
  data() {
    return {
      show: true,
      tabPanels: [],
      imgItems: [],
    };
  },
  props: {
    num: {
      default: 0,
      validator(val) {
        return /^\d*$/.test(val);
      },
    },
    closeText: {
      type: String,
      default: '关闭',
    },
  },
  watch: {
    num() {
      this.init();
    },
  },
  methods: {
    init() {
      this.$nextTick(() => {
        this.imgItems = [];

        this.findImgs(this.$children);

        this.imgItems.forEach((item, index) => {
          if (!item.bindedEvent) {
            item.bindedEvent = true;
            item.$el.addEventListener('click', () => {
              this.appendDOM(index);
            }, false);
          }
        });
      });
    },
    findImgs(el) {
      el.forEach((item) => {
        if (item && item.$options.name === 'm-lightbox-img') {
          this.imgItems.push(item);
        }
        item.$children && this.findImgs(item.$children);
      });
    },
    appendDOM(index) {
      const boxComponent = Vue.extend(Box);
      const mes = this.$children.filter(item => item.$options.name === 'm-lightbox-txt');

      this.box = new boxComponent({
        el: document.createElement('div'),
        data: {
          index,
          currentIndex: index,
          imgItems: this.imgItems,
          txtHTML: mes[0] && mes[0].$el ? mes[0].$el.innerHTML : '',
          closeText: this.closeText,
        },
      });

      document.body.appendChild(this.box.$el);
    },
  },
  mounted() {
    this.$nextTick(this.init);
  },
  beforeDestroy() {
    this.box && this.box.close();
  },
};
</script>

<style lang="less">
    @import 'lightbox.less';
</style>
