<template>
    <button :disabled="disabled" :class="classes" :style="styles">
        <slot></slot>
    </button>
</template>

<script type="text/babel">

export default {
  name: 'm-button',
  props: {
    disabled: Boolean,
    type: {
      validator(value) {
        return ['primary', 'danger', 'warning', 'hollow', 'disabled'].indexOf(value) > -1;
      },
      default: 'primary',
    },
    size: {
      validator(value) {
        return ['small', 'large'].indexOf(value) > -1;
      },
    },
    bgcolor: {
      validator(value) {
        if (!value) return true;
        return $utils.isColor(value);
      },
    },
    color: {
      validator(value) {
        if (!value) return true;
        return $utils.isColor(value);
      },
    },
  },
  computed: {
    classes() {
      const s = this.size == 'large' ? 'm-btn-block' : 'm-btn';
      let b = `m-btn-${this.type}`;
      if (this.disabled) {
        b = 'm-btn-disabled';
      }

      if (this.bgcolor) {
        b = '';
      }
      return `${s} ${b}`;
    },
    styles() {
      return { backgroundColor: this.bgcolor, color: this.color };
    },
  },
};
</script>

<style lang="less">
    @import 'button.less';
</style>
