<template>
    <section class="m-sub-flexview">
        <slot name="top" v-if="showNavbar"></slot>

        <section class="m-sub-scrollview"  >
            <slot></slot>
        </section>

        <slot name="bottom"></slot>
    </section>
</template>

<script type="text/babel">
export default {
  name: 'm-sub-layout',
  props: {
    link: String,
    title: String,
    showNavbar: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="less">
    @import "layout.less";
</style>
