<template>
    <div v-show="show" @click.stop="backtop">
        <div class="m-backtop vfont icon-arrow-up"></div>
    </div>
</template>

<script type="text/babel">

export default {
  name: 'm-backtop',
  data() {
    return {
      show: true,
    };
  },
  methods: {
    backtop() {

    },
  },
};
</script>

<style lang="less">
    @import 'backtop.less';
</style>
