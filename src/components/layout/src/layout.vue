<template>
    <section class="m-flexview">
        <slot name="top" v-if="showNavbar"></slot>

        <section class="m-scrollview" ref="scrollView" id="scrollView" >
            <slot></slot>
        </section>

        <slot name="bottom"></slot>
    </section>
</template>

<script type="text/babel">
export default {
  name: 'm-layout',
  props: {
    link: String,
    title: String,
    showNavbar: {
      type: Boolean,
      default: true,
    },
  },
  methods: {

  },
  computed: {

  },
};
</script>

<style lang="less">
  @import "layout.less";

</style>
