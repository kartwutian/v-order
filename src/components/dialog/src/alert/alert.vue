<template>
    <div class="m-dialog-black-mask">
        <div class="m-confirm m-alert">
            <div class="m-confirm-bd" v-html="mes"></div>
            <div class="m-confirm-ft">
                <a href="javascript:;" class="m-confirm-btn primary" @click.stop="closeAlert">确定</a>
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
    @import "../dialog.less";
</style>
