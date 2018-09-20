<template>
    <div class="m-dialog-black-mask" @click.stop="closeNotice">
        <div class="m-confirm m-notice">
            <div class="m-confirm-bd" v-html="mes"></div>
            <div class="m-notice-close" @click.stop="closeNotice">
                <i class="vfont icon-error-hollow"></i>
            </div>
        </div>

    </div>
</template>

<script type="text/babel">
export default {
  props: {
    mes: String,
    callback: Function,
  },
};
</script>

<style lang="less">
</style>
