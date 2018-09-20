<template>
    <div class="m-dialog-black-mask">
        <div class="m-confirm">
            <div class="m-confirm-hd"><strong class="m-confirm-title" v-html="title"></strong></div>
            <div class="m-confirm-bd" v-html="mes"></div>
            <template v-if="typeof opts == 'function'">
                <div class="m-confirm-ft">
                    <a href="javascript:;" class="m-confirm-btn default" @click.stop="closeConfirm(false)">取消</a>
                    <a href="javascript:;" class="m-confirm-btn primary" @click.stop="closeConfirm(false, opts)">确定</a>
                </div>
            </template>
            <template v-else>
                <div class="m-confirm-ft">
                    <a href="javascript:;" class="m-confirm-btn"
                       v-for="item in opts"
                       :class="typeof item.color == 'boolean' ? (item.color ? 'primary' : 'default') : ''"
                       :style="{color: item.color}"
                       @click.stop="closeConfirm(item.stay, item.callback)"
                    >{{item.txt}}</a>
                </div>
            </template>
        </div>
    </div>
</template>

<script type="text/babel">
export default {
  props: {
    title: String,
    mes: String,
    opts: {
      type: [Array, Function],
      default() {},
    },
  },
};
</script>
