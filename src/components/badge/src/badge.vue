<template>
    <span class="m-badge" :class="typesClass" :style="{backgroundColor: bgcolor, color: color}">
        <slot></slot>
    </span>
</template>

<script type="text/babel">

export default {
  name: 'm-badge',
  props: {
    type: {
      validator(value) {
        return ['primary', 'danger', 'warning', 'hollow'].indexOf(value) > -1;
      },
    },
    shape: {
      validator(value) {
        return ['circle', 'square'].indexOf(value) > -1;
      },
    },
    color: {
      validator(value) {
        if (!value) return true;
        return $utils.isColor(value);
      },
    },
    bgcolor: {
      validator(value) {
        if (!value) return true;
        return $utils.isColor(value);
      },
    },
  },
  computed: {
    typesClass() {
      if (this.bgcolor) {
        if (this.shape == 'square') {
          return ' m-badge-radius';
        }
        return '';
      }
      return (this.type ? `m-badge-${this.type}` : '') + (this.shape == 'square' ? ' m-badge-radius' : '');
    },
  },
};
</script>

<style lang="less">
    @import 'badge.less';
</style>
