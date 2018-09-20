<template>
    <span class="m-dot" :style="{backgroundColor: bgColor, width: size,height: size}">
    </span>
</template>

<script type="text/babel">

export default {
  name: 'm-dot',
  props: {
    bgColor: {
      validator(value) {
        if (!value) return true;
        return $utils.isColor(value);
      },
    },
    size: {
      type: String,
    },
  },
};
</script>

<style lang="less">
    .m-dot{
        position: absolute;
        width: .2rem;
        height: .2rem;
        background-color: #f36;
        top: 0;
        right: 0;
        border-radius: 50%;
        transform: translate3d(50%,0,0);
    }
</style>
