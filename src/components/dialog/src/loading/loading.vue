<template>
    <div class="m-dialog-white-mask">
        <div class="m-loading">
            <div class="m-loading-icon"></div>
            <div class="m-loading-txt" v-html="title"></div>
        </div>
    </div>
</template>

<script type="text/babel">
export default {
  props: {
    title: String,
  },
};
</script>
