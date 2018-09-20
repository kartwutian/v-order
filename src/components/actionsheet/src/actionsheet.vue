<template>
    <div>
        <div class="m-actionsheet-mask" v-show="show" @click.stop="close"></div>
        <div class="m-actionsheet" :class="show ? 'm-actionsheet-active' : ''">
            <a v-for="item in items" @click.stop="itemClick(item)" href="javascript:;" class="m-actionsheet-item" >{{item.label}}</a>
            <a v-if="cancel" @click.stop="close" href="javascript:;" class="m-actionsheet-action">{{cancel}}</a>
        </div>
    </div>
</template>

<script type="text/babel">

export default {
  name: 'm-actionsheet',
  data() {
    return {
      show: this.value,
    };
  },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    items: {
      type: Array,
      require: true,
    },
    cancel: String,
  },
  watch: {
    value(val) {
      if ($utils.isIOS) {
        if (val) {
          $utils.pageScroll.lock();
          $utils.addClass(this.scrollView, 'g-fix-ios-overflow-scrolling-bug');
        } else {
          $utils.pageScroll.unlock();
          $utils.removeClass(this.scrollView, 'g-fix-ios-overflow-scrolling-bug');
        }
      }

      this.show = val;
    },
  },
  methods: {
    itemClick(item) {
      if (item) {
        // 参数更名，即将删除
        typeof item.method === 'function' && item.method(item);
        typeof item.callback === 'function' && item.callback(item);
        !item.stay && this.close();
      }
    },
    close() {
      $utils.isIOS && $utils.removeClass(this.scrollView, 'g-fix-ios-overflow-scrolling-bug');

      this.$emit('input', false);
    },
  },
  destroyed() {
    this.close();
    $utils.pageScroll.unlock();
  },
  mounted() {
    this.scrollView = $utils.getScrollview(this.$el);
  },
};
</script>

<style lang="less">
    @import "actionsheet.less";
</style>
